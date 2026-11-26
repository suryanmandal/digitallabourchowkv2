import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");

export interface BlogPost {
  id: string;
  postType: "story" | "post";
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string;
  status: "published" | "draft";
  views?: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

function mapDbRowToBlogPost(row: any): BlogPost {
  return {
    id: row.id,
    postType: row.post_type || "post",
    title: row.title,
    slug: row.slug,
    category: row.category,
    author: row.author,
    date: new Date(row.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: row.read_time,
    coverImage: row.cover_image,
    excerpt: row.excerpt,
    content: row.content,
    status: row.status,
    views: row.views || 0,
    tags: Array.isArray(row.tags) ? row.tags : [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function getStoredBlogs(): BlogPost[] {
  try {
    if (!fs.existsSync(blogsFilePath)) {
      const dataDir = path.dirname(blogsFilePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(blogsFilePath, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const fileData = fs.readFileSync(blogsFilePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading blogs data:", error);
    return [];
  }
}

function saveBlogs(blogs: BlogPost[]) {
  const dataDir = path.dirname(blogsFilePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(blogsFilePath, JSON.stringify(blogs, null, 2), "utf-8");
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// GET: Retrieve all blogs or single blog or smart recommendations
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const postType = searchParams.get("postType");
    const category = searchParams.get("category");
    const slug = searchParams.get("slug");
    const id = searchParams.get("id");
    const search = searchParams.get("search");
    const recommendFor = searchParams.get("recommendFor");
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : undefined;

    let blogs: BlogPost[] = [];
    try {
      const { data: dbRows, error: dbError } = await supabaseAdmin
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (!dbError && dbRows && dbRows.length > 0) {
        blogs = dbRows.map(mapDbRowToBlogPost);
      }
    } catch (e) {
      console.warn("Supabase fetch failed, falling back to local JSON:", e);
    }

    if (blogs.length === 0) {
      blogs = getStoredBlogs();
    }

    // Single post by ID
    if (id) {
      const single = blogs.find((b) => b.id === id);
      if (!single) {
        return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
      }
      return NextResponse.json({ blog: single });
    }

    // Single post by Slug
    if (slug) {
      const single = blogs.find((b) => b.slug === slug);
      if (!single) {
        return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
      }
      return NextResponse.json({ blog: single });
    }

    // Smart Recommendations for a specific slug
    if (recommendFor) {
      const current = blogs.find((b) => b.slug === recommendFor);
      const targetLimit = limit || 4;

      if (!current) {
        // Return first N blogs
        return NextResponse.json({ recommendations: blogs.slice(0, targetLimit) });
      }

      // Filter out the current post
      const candidates = blogs.filter((b) => b.id !== current.id && b.status === "published");
      const currentTags = current.tags || [];

      // Score candidates by tag match + category match
      const scored = candidates.map((cand) => {
        let score = 0;
        if (cand.category === current.category) score += 3;
        const matchingTags = (cand.tags || []).filter((t) => currentTags.includes(t));
        score += matchingTags.length * 2;
        return { blog: cand, score };
      });

      // Sort by score descending
      scored.sort((a, b) => b.score - a.score);

      // If top scored has zero score or not enough, fill with remaining blogs
      const matched = scored.filter((s) => s.score > 0).map((s) => s.blog);
      const remaining = scored.filter((s) => s.score === 0).map((s) => s.blog);

      // Shuffle remaining randomly
      for (let i = remaining.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
      }

      const combined = [...matched, ...remaining].slice(0, targetLimit);
      return NextResponse.json({ recommendations: combined });
    }

    // Filter list
    let filtered = blogs;

    if (status && status !== "all") {
      filtered = filtered.filter((b) => b.status === status);
    }

    if (postType && postType !== "all") {
      filtered = filtered.filter((b) => b.postType === postType);
    }

    if (category && category !== "all") {
      filtered = filtered.filter((b) => b.category.toLowerCase() === category.toLowerCase());
    }

    if (search && search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          (b.tags && b.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    if (limit && limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return NextResponse.json({ blogs: filtered, total: filtered.length });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json({ error: "Failed to retrieve blogs" }, { status: 500 });
  }
}

// POST: Create a new blog post / story
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      category,
      author,
      date,
      readTime,
      coverImage,
      excerpt,
      content,
      status,
      postType,
      tags,
    } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and Content are required fields." },
        { status: 400 }
      );
    }

    const blogs = getStoredBlogs();
    const autoSlug = slug && slug.trim() ? slugify(slug) : slugify(title);

    // Verify slug uniqueness
    const exists = blogs.some((b) => b.slug === autoSlug);
    const finalSlug = exists ? `${autoSlug}-${Date.now().toString().slice(-4)}` : autoSlug;

    const newBlog: BlogPost = {
      id: `blog-${Date.now()}`,
      postType: postType === "story" ? "story" : "post",
      title: title.trim(),
      slug: finalSlug,
      category: category || "Infrastructure & Engineering",
      author: author || "Digital Labour Chowk Editorial",
      date: date || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      readTime: readTime || "5 min read",
      coverImage: coverImage || "/images/blogs/chenab-bridge.jpg",
      excerpt: excerpt || title.slice(0, 160),
      content: content,
      status: status === "draft" ? "draft" : "published",
      views: 0,
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t: string) => t.trim().toLowerCase()).filter(Boolean) : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Persist to Supabase
    try {
      await supabaseAdmin.from("blogs").insert([
        {
          post_type: newBlog.postType,
          title: newBlog.title,
          slug: newBlog.slug,
          category: newBlog.category,
          author: newBlog.author,
          read_time: newBlog.readTime,
          cover_image: newBlog.coverImage,
          excerpt: newBlog.excerpt,
          content: newBlog.content,
          status: newBlog.status,
          views: 0,
          tags: newBlog.tags,
        },
      ]);
    } catch (e) {
      console.warn("Supabase blog insert warning:", e);
    }

    // Prepend to local JSON list
    blogs.unshift(newBlog);
    saveBlogs(blogs);

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}

// PUT: Update an existing blog post
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required for update." }, { status: 400 });
    }

    const blogs = getStoredBlogs();
    const index = blogs.findIndex((b) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Blog post not found." }, { status: 404 });
    }

    if (updates.tags && typeof updates.tags === "string") {
      updates.tags = updates.tags.split(",").map((t: string) => t.trim().toLowerCase()).filter(Boolean);
    }

    if (updates.slug) {
      updates.slug = slugify(updates.slug);
    }

    const updatedBlog: BlogPost = {
      ...blogs[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    // Sync to Supabase
    try {
      await supabaseAdmin
        .from("blogs")
        .update({
          title: updatedBlog.title,
          slug: updatedBlog.slug,
          post_type: updatedBlog.postType,
          category: updatedBlog.category,
          author: updatedBlog.author,
          read_time: updatedBlog.readTime,
          cover_image: updatedBlog.coverImage,
          excerpt: updatedBlog.excerpt,
          content: updatedBlog.content,
          status: updatedBlog.status,
          tags: updatedBlog.tags,
          updated_at: updatedBlog.updatedAt,
        })
        .eq("slug", blogs[index].slug);
    } catch (e) {
      console.warn("Supabase blog update warning:", e);
    }

    blogs[index] = updatedBlog;
    saveBlogs(blogs);

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error("PUT /api/blogs error:", error);
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 });
  }
}

// DELETE: Delete a blog post
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required for deletion." }, { status: 400 });
    }

    let blogs = getStoredBlogs();
    const beforeCount = blogs.length;
    blogs = blogs.filter((b) => b.id !== id);

    if (blogs.length === beforeCount) {
      return NextResponse.json({ error: "Blog post not found." }, { status: 404 });
    }

    // Sync deletion to Supabase
    try {
      await supabaseAdmin.from("blogs").delete().eq("slug", id);
    } catch (e) {
      console.warn("Supabase blog delete warning:", e);
    }

    saveBlogs(blogs);
    return NextResponse.json({ success: true, message: "Blog post deleted successfully." });
  } catch (error) {
    console.error("DELETE /api/blogs error:", error);
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
  }
}
