"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Tag,
  CheckCircle2,
  BookOpen,
  Eye,
  Check,
} from "lucide-react";
import { BlogPost } from "@/app/api/blogs/route";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [recommendations, setRecommendations] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    // Fetch the single blog
    fetch(`/api/blogs?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.blog) {
          setBlog(data.blog);
        }
      })
      .catch((err) => console.error("Error loading blog:", err))
      .finally(() => setLoading(false));

    // Fetch smart recommendations matching tags or random fallback
    fetch(`/api/blogs?recommendFor=${slug}&limit=6`)
      .then((res) => res.json())
      .then((data) => {
        if (data.recommendations) {
          setRecommendations(data.recommendations);
        }
      })
      .catch((err) => console.error("Error loading recommendations:", err));
  }, [slug]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center bg-[#FAFAFC]">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono text-slate-500">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center space-y-4">
        <h1 className="text-2xl font-black text-slate-900">Article Not Found</h1>
        <p className="text-sm text-slate-600">The requested blog post could not be located or has been archived.</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0C59D4] text-white font-bold text-xs shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Blogs</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAFAFC] min-h-screen text-slate-900 font-sans">
      
      {/* Top Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-slate-500">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#0C59D4] font-bold transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Category:</span>
            <span className="font-semibold text-[#0C59D4] bg-blue-50 px-2.5 py-0.5 rounded-full">
              {blog.category}
            </span>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        
        {/* Article Header Meta */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {blog.postType === "story" ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-xs font-bold border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Featured Story
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[#0C59D4] text-xs font-bold border border-blue-200">
                <BookOpen className="w-3 h-3" />
                Industry Report
              </span>
            )}
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-medium">{blog.date}</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.2]">
            {blog.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {blog.excerpt}
          </p>

          {/* Author Card & Social Share Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0C59D4] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                {blog.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{blog.author}</div>
                <div className="text-[11px] text-slate-500">Digital Labour Chowk Editorial</div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition shadow-xs cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? "Link Copied!" : "Share Link"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl bg-slate-900">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Formatted Article Body */}
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-800 leading-relaxed space-y-6 pt-2">
          {blog.content.split("\n\n").map((block, idx) => {
            // Check for Subheadings (###)
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight pt-4 pb-1 border-b border-slate-200"
                >
                  {block.replace("### ", "")}
                </h3>
              );
            }

            // Check for Bullet Lists
            if (block.includes("\n- ") || block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.trim().startsWith("- "));
              return (
                <ul key={idx} className="space-y-2.5 my-4 pl-2 list-none">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0C59D4] shrink-0 mt-0.5" />
                      <span>{item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            // Check for Numbered Lists
            if (block.match(/^\d+\.\s/m)) {
              const items = block.split("\n").filter((l) => l.trim().match(/^\d+\.\s/));
              return (
                <ol key={idx} className="space-y-3 my-4 pl-2 list-none">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0C59D4] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {itemIdx + 1}
                      </span>
                      <span>{item.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</span>
                    </li>
                  ))}
                </ol>
              );
            }

            // Regular Paragraph
            return (
              <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>

        {/* Tags Section */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-6 border-t border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Related Topics &amp; Tags:
            </span>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                >
                  <Tag className="w-3 h-3 text-[#0C59D4]" />
                  #{t}
                </span>
              ))}
            </div>
          </div>
        )}

      </article>

      {/* ===================================================================== */}
      {/* BOTTOM RECOMMENDATION CAROUSEL (Mandatory Requirement)               */}
      {/* ===================================================================== */}
      <section className="w-full bg-white border-t border-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Recommended For You
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-0.5">
                Related &amp; Trending Articles
              </h2>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0C59D4] hover:bg-blue-50 text-slate-600 hover:text-[#0C59D4] flex items-center justify-center transition shadow-xs cursor-pointer"
                aria-label="Previous Recommendations"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0C59D4] hover:bg-blue-50 text-slate-600 hover:text-[#0C59D4] flex items-center justify-center transition shadow-xs cursor-pointer"
                aria-label="Next Recommendations"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Recommendation Carousel */}
          <div
            ref={carouselRef}
            className="flex items-center gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {recommendations.map((rec) => (
              <Link
                key={rec.id}
                href={`/blog/${rec.slug}`}
                className="group relative w-[250px] sm:w-[280px] rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden shrink-0 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative w-full h-36 bg-slate-200 overflow-hidden">
                  <Image
                    src={rec.coverImage}
                    alt={rec.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                      {rec.category.split(" ")[0]}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors leading-snug line-clamp-2">
                      {rec.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {rec.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-semibold text-slate-500">
                    <span>{rec.readTime}</span>
                    <span className="text-[#0C59D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
