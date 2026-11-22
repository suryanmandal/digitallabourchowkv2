import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface EventBannerConfig {
  badgeText: string;
  titlePrefix: string;
  titleMain: string;
  category: string;
  imageUrl: string;
  fallbackImageUrl?: string;
  countdownTarget: string;
  location: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
  updatedAt?: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "event-banner.json");

function getEventConfig(): EventBannerConfig {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("Failed to read event-banner.json:", error);
  }

  // Sensible default fallback
  return {
    badgeText: "Upcoming Event",
    titlePrefix: "National Construction",
    titleMain: "Summit #2026 at Pragati Maidan",
    category: "Summit & Expo",
    imageUrl: "/images/blogs/chenab-bridge.jpg",
    countdownTarget: "2026-12-15T09:30:00.000Z",
    location: "Bharat Mandapam & Pragati Maidan, New Delhi",
    buttonText: "Reminder Me",
    buttonLink: "/contact",
    isActive: true,
  };
}

function saveEventConfig(config: EventBannerConfig): boolean {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(config, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Failed to write event-banner.json:", error);
    return false;
  }
}

// GET /api/event-banner
export async function GET() {
  const config = getEventConfig();
  return NextResponse.json({ success: true, banner: config });
}

// PUT /api/event-banner
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    if (!body.titlePrefix || !body.titleMain) {
      return NextResponse.json(
        { error: "titlePrefix and titleMain are required." },
        { status: 400 }
      );
    }

    const current = getEventConfig();
    const updated: EventBannerConfig = {
      ...current,
      badgeText: body.badgeText || "Upcoming Event",
      titlePrefix: body.titlePrefix.trim(),
      titleMain: body.titleMain.trim(),
      category: body.category || "Summit & Expo",
      imageUrl: body.imageUrl || current.imageUrl,
      countdownTarget: body.countdownTarget || current.countdownTarget,
      location: body.location || current.location,
      buttonText: body.buttonText || "Reminder Me",
      buttonLink: body.buttonLink || "/contact",
      isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
      updatedAt: new Date().toISOString(),
    };

    const saved = saveEventConfig(updated);
    if (!saved) {
      return NextResponse.json(
        { error: "Failed to persist configuration to datastore." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Event banner updated successfully.",
      banner: updated,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload", details: String(error) },
      { status: 400 }
    );
  }
}
