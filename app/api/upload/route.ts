import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate mime type (images only)
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
      "image/avif",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file format. Only JPEG, PNG, WebP, AVIF, SVG, and GIF are permitted." },
        { status: 400 }
      );
    }

    // Maximum file size limit: 5 MB
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds maximum permitted limit (5 MB)." },
        { status: 400 }
      );
    }

    // Clean, unique file name
    const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `covers/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage Bucket 'blog-images'
    const { error: uploadError } = await supabaseAdmin.storage
      .from("blog-images")
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Supabase Storage upload error:", uploadError);
      return NextResponse.json(
        {
          error:
            uploadError.message ||
            "Failed to upload to Supabase storage. Ensure bucket 'blog-images' is created.",
        },
        { status: 500 }
      );
    }

    // Retrieve the permanent public URL
    const { data: publicUrlData } = supabaseAdmin.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    return NextResponse.json({
      success: true,
      url: publicUrlData.publicUrl,
      path: filePath,
    });
  } catch (error: any) {
    console.error("Upload API error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error during upload." },
      { status: 500 }
    );
  }
}
