import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  formattedPhone: string;
  email?: string;
  type: string;
  message: string;
  createdAt: string;
  ipAddress?: string;
  userAgent?: string;
}

// In-memory rate limiting store: IP -> last submission timestamp
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 10000; // 10 seconds cooldown between submissions per IP

const DATA_FILE = path.join(process.cwd(), "data", "inquiries.json");

function sanitizeString(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

function loadInquiries(): ContactInquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed to read inquiries.json:", err);
  }
  return [];
}

function saveInquiries(inquiries: ContactInquiry[]): boolean {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to write inquiries.json:", err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // 1. IP extraction & Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const lastSubmitTime = rateLimitMap.get(ip);
    if (lastSubmitTime && now - lastSubmitTime < RATE_LIMIT_WINDOW_MS) {
      const waitSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - lastSubmitTime)) / 1000);
      return NextResponse.json(
        {
          error: `Too many inquiries submitted from this connection. Please wait ${waitSeconds}s before submitting again.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Anti-Bot Honeypot Trap
    // If a hidden honeypot field has any value, a bot filled it out -> silently reject with dummy success or drop
    if (body.hp_website || body.hp_company) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    const { name, phone, email, type, message } = body;

    // 3. Strict Server-Side Validation: Name
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }
    const cleanName = sanitizeString(name);
    if (cleanName.length < 2 || cleanName.length > 60) {
      return NextResponse.json(
        { error: "Name must be between 2 and 60 characters." },
        { status: 400 }
      );
    }
    // Prevent script or special character injection in name
    if (!/^[a-zA-Z\s.'-]+$/.test(cleanName)) {
      return NextResponse.json(
        { error: "Name can only contain alphabetic letters, spaces, hyphens, and periods." },
        { status: 400 }
      );
    }

    // 4. Strict Server-Side Validation: Phone (Indian Mobile standard: exactly 10 digits starting with 6-9)
    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { error: "Valid mobile phone number is required." },
        { status: 400 }
      );
    }
    // Strip any non-digit character
    const rawDigits = phone.replace(/\D/g, "");
    
    // Normalize: if user entered with country code 91 + 10 digits (12 digits total), extract the 10 digits
    let tenDigitPhone = rawDigits;
    if (rawDigits.length === 12 && rawDigits.startsWith("91")) {
      tenDigitPhone = rawDigits.slice(2);
    } else if (rawDigits.length === 11 && rawDigits.startsWith("0")) {
      tenDigitPhone = rawDigits.slice(1);
    }

    if (!/^[6-9]\d{9}$/.test(tenDigitPhone)) {
      return NextResponse.json(
        {
          error:
            "Invalid mobile number. Must be exactly 10 numeric digits starting with 6, 7, 8, or 9.",
        },
        { status: 400 }
      );
    }

    // 5. Strict Server-Side Validation: Email (Optional, but if provided must be RFC-compliant)
    let cleanEmail: string | undefined = undefined;
    if (email && typeof email === "string" && email.trim().length > 0) {
      const trimmedEmail = email.trim().toLowerCase();
      if (trimmedEmail.length > 100) {
        return NextResponse.json(
          { error: "Email address exceeds maximum length (100 characters)." },
          { status: 400 }
        );
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(trimmedEmail)) {
        return NextResponse.json(
          { error: "Please enter a valid email address (e.g., name@company.com)." },
          { status: 400 }
        );
      }
      cleanEmail = sanitizeString(trimmedEmail);
    }

    // 6. Strict Server-Side Validation: Category Type
    const ALLOWED_TYPES = [
      "Contractor",
      "General Contractor",
      "Builder",
      "Agency",
      "Worker",
      "Other",
    ];
    const cleanType = ALLOWED_TYPES.includes(type) ? type : "Contractor";

    // 7. Strict Server-Side Validation: Message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Inquiry message is required." },
        { status: 400 }
      );
    }
    const cleanMessage = sanitizeString(message);
    if (cleanMessage.length < 5) {
      return NextResponse.json(
        { error: "Message is too short. Please provide at least 5 characters." },
        { status: 400 }
      );
    }
    if (cleanMessage.length > 1500) {
      return NextResponse.json(
        { error: "Message exceeds maximum permitted length (1500 characters)." },
        { status: 400 }
      );
    }

    // 8. Record Rate Limit
    rateLimitMap.set(ip, now);

    // 9. Persist Inquiry to Datastore
    const newInquiry: ContactInquiry = {
      id: `inq-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: cleanName,
      phone: tenDigitPhone,
      formattedPhone: `+91 ${tenDigitPhone.slice(0, 5)} ${tenDigitPhone.slice(5)}`,
      email: cleanEmail,
      type: cleanType,
      message: cleanMessage,
      createdAt: new Date().toISOString(),
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    };

    const inquiries = loadInquiries();
    inquiries.unshift(newInquiry);
    saveInquiries(inquiries);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been securely verified and submitted to our workforce desk.",
      inquiryId: newInquiry.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error while processing your request." },
      { status: 500 }
    );
  }
}

// GET /api/contact - Admin retrieval of inquiries
export async function GET() {
  const inquiries = loadInquiries();
  return NextResponse.json({
    success: true,
    total: inquiries.length,
    inquiries,
  });
}
