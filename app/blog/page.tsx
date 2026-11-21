"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Sparkles,
  Flame,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Play,
  CheckCircle2,
  Bell,
  Share2,
  HardHat,
  Search,
} from "lucide-react";
import { BlogPost } from "@/app/api/blogs/route";

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [heroIndex, setHeroIndex] = useState(0);
  const [visibleLatestCount, setVisibleLatestCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const storiesScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs) setBlogs(data.blogs);
      })
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  // Filtered stories & posts
  const featuredStories = blogs.filter((b) => b.postType === "story" && b.status === "published");
  const latestPosts = blogs.filter((b) => b.postType === "post" && b.status === "published");

  // Sorted trending by views
  const trendingPosts = [...blogs]
    .filter((b) => b.status === "published")
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 4);

  // Active hero story
  const heroStory = featuredStories[heroIndex] || featuredStories[0] || blogs[0];

  // Stories Carousel scroll handlers
  const scrollStories = (direction: "left" | "right") => {
    if (storiesScrollRef.current) {
      const scrollAmount = 320;
      storiesScrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Filtered Latest posts by category & search
  const filteredLatest = latestPosts.filter((post) => {
    if (selectedCategory !== "all" && post.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }
    return true;
  });

  return (
    <div className="w-full bg-[#FAFAFC] min-h-screen text-slate-900 font-sans">
      
      {/* ===================================================================== */}
      {/* 1. TOP HERO SHOWCASE (Inspired by AdventureWeek Hero in Reference UI) */}
      {/* ===================================================================== */}
      {heroStory && (
        <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] bg-slate-950 flex flex-col justify-between overflow-hidden select-none">
          {/* Background Image with Cinematic Dark Gradient Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroStory.coverImage}
              alt={heroStory.title}
              fill
              priority
              className="object-cover object-center transition-all duration-700 ease-out brightness-90 group-hover:scale-105"
            />
            {/* Multi-layered Gradients for Deep Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
          </div>

          {/* Top Navbar Clearance & Brand Badge */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 relative z-10 w-full">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Editor&apos;s Choice
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/40 backdrop-blur-md text-sky-200 text-[11px] font-bold tracking-wide border border-blue-400/30">
                {heroStory.category}
              </span>
            </div>
          </div>

          {/* Center Hero Story Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 w-full">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4 text-shadow-sm">
                {heroStory.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-7 line-clamp-3 max-w-2xl">
                {heroStory.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/blog/${heroStory.slug}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0C59D4] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{heroStory.readTime}</span>
                  <span>•</span>
                  <span>{heroStory.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Numbered Spread Bar (Reflecting Numbers 2, 3, 4, 5 in Reference) */}
          <div className="w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 relative z-10 py-3.5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
              {featuredStories.slice(0, 5).map((story, idx) => {
                const isActive = heroIndex === idx;
                return (
                  <button
                    key={story.id}
                    onClick={() => setHeroIndex(idx)}
                    className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-white/20 border border-white/40 shadow-sm"
                        : "bg-white/5 border border-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                        isActive
                          ? "bg-[#0C59D4] text-white"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-white max-w-[180px] sm:max-w-[220px] truncate">
                      {story.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* ===================================================================== */}
        {/* 2. FEATURED STORIES HORIZONTAL CAROUSEL (Reference UI Section 2)       */}
        {/* ===================================================================== */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 rounded-full bg-[#0C59D4]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Featured Stories
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollStories("left")}
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#0C59D4] hover:bg-white text-slate-600 hover:text-[#0C59D4] flex items-center justify-center transition shadow-xs cursor-pointer"
                aria-label="Previous Stories"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollStories("right")}
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#0C59D4] hover:bg-white text-slate-600 hover:text-[#0C59D4] flex items-center justify-center transition shadow-xs cursor-pointer"
                aria-label="Next Stories"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stories Horizontal Track */}
          <div
            ref={storiesScrollRef}
            className="flex items-center gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {featuredStories.map((story) => (
              <Link
                key={story.id}
                href={`/blog/${story.slug}`}
                className="group relative w-[240px] sm:w-[270px] h-[340px] sm:h-[360px] rounded-2xl overflow-hidden shrink-0 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-5 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {/* Top Category Badge */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider">
                    {story.category.split(" ")[0]}
                  </span>
                </div>

                {/* Bottom Story Title & Meta */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-base font-bold text-white leading-snug line-clamp-3 group-hover:text-blue-300 transition-colors">
                    {story.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 font-medium pt-2 border-t border-white/20">
                    <span>{story.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-sky-300 font-bold">
                      Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 3. TWO-COLUMN STAGE: THE LATEST (LEFT) & ON TRENDING + MEDIA (RIGHT)    */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* =================================================================== */}
          {/* LEFT COLUMN: THE LATEST ARTICLES FEED (7 COLS)                      */}
          {/* =================================================================== */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-6 rounded-full bg-[#0C59D4]" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  The Latest
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold pb-1 sm:pb-0">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-1 rounded-full transition cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-[#0C59D4] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory("Site Management")}
                  className={`px-3 py-1 rounded-full transition cursor-pointer ${
                    selectedCategory === "Site Management"
                      ? "bg-[#0C59D4] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Site Safety
                </button>
                <button
                  onClick={() => setSelectedCategory("Technology & Hiring")}
                  className={`px-3 py-1 rounded-full transition cursor-pointer ${
                    selectedCategory === "Technology & Hiring"
                      ? "bg-[#0C59D4] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Wages &amp; Tech
                </button>
              </div>
            </div>

            {/* Articles List */}
            <div className="space-y-4">
              {filteredLatest.slice(0, visibleLatestCount).map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                >
                  {/* Thumbnail Image */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative w-full sm:w-44 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-slate-100"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Narrative Body */}
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0C59D4] text-[10px] font-bold">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {post.date}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2 text-[11px] font-semibold text-slate-500">
                      <span>{post.readTime}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#0C59D4] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Read Article <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleLatestCount < filteredLatest.length && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleLatestCount((prev) => prev + 4)}
                  className="px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 shadow-xs transition hover:scale-105 cursor-pointer"
                >
                  Load More Articles
                </button>
              </div>
            )}

          </div>

          {/* =================================================================== */}
          {/* RIGHT COLUMN: ON TRENDING + MEDIA + CATEGORIES (5 COLS)             */}
          {/* =================================================================== */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            
            {/* On Trending Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Flame className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-black text-slate-950 tracking-tight">
                  On Trending 🔥
                </h3>
              </div>

              <div className="divide-y divide-slate-100 space-y-4">
                {trendingPosts.map((post, idx) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block pt-4 first:pt-0 space-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-mono font-black text-slate-300 group-hover:text-[#0C59D4] transition-colors shrink-0">
                        #{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0C59D4] transition-colors leading-snug">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{(post.views || 0).toLocaleString()} reads</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Video / Field Documentary Spotlight (Reference UI Right Column) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#0C59D4]" />
                  <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider">
                    Documentary Spotlight
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-[#0C59D4]">Amazon MX Player</span>
              </div>

              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-900 group cursor-pointer">
                <Image
                  src="/images/blogs/chenab-bridge.jpg"
                  alt="Bharat Ke Super Founders Documentary"
                  fill
                  className="object-cover brightness-75 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0C59D4] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-tight drop-shadow-md">
                  Bharat Ke Super Founders • The DLC Journey
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Watch how Digital Labour Chowk pioneered blue-collar workforce formalization from STPI incubation to national enterprise scale.
              </p>
            </div>

            {/* Visual Category Tiles (Reference UI Lower Section) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider pb-2 border-b border-slate-100">
                Explore Categories
              </h3>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "Site Safety", img: "/images/blogs/safety-rules.jpg", filter: "Site Management" },
                  { name: "Labour Laws", img: "/images/blogs/bocw-act.jpg", filter: "Worker Rights & Policy" },
                  { name: "Wages & DBT", img: "/images/blogs/worker-welfare.jpg", filter: "Workforce Welfare" },
                  { name: "Engineering", img: "/images/blogs/chenab-bridge.jpg", filter: "Infrastructure & Engineering" },
                ].map((cat) => (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setSelectedCategory(cat.filter)}
                    className="relative h-20 rounded-xl overflow-hidden group text-left p-2.5 flex items-end shadow-xs cursor-pointer"
                  >
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      className="object-cover brightness-50 group-hover:scale-110 transition-transform"
                    />
                    <span className="relative z-10 text-xs font-black text-white drop-shadow-sm">
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ===================================================================== */}
        {/* 4. UPCOMING EVENT BANNER (Reference UI Lower Banner with Countdown)   */}
        {/* ===================================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0C59D4] via-[#094BB5] to-[#072F75] text-white p-8 sm:p-10 lg:p-12 overflow-hidden shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
              <Bell className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              National Construction Summit 2026
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              India&apos;s Blue-Collar Workforce Formalization Summit
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
              Join leading EPC infrastructure contractors, NAREDCO real estate developers, and labor ministry officials in New Delhi.
            </p>
          </div>

          <div className="relative z-10 space-y-4 shrink-0">
            <div className="flex items-center gap-3">
              {[
                { label: "DAYS", val: "09" },
                { label: "HOURS", val: "14" },
                { label: "MINS", val: "23" },
                { label: "SECS", val: "48" },
              ].map((c) => (
                <div key={c.label} className="p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center min-w-[60px]">
                  <div className="text-xl sm:text-2xl font-mono font-black text-white">{c.val}</div>
                  <div className="text-[9px] font-bold text-amber-300">{c.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg transition active:scale-95"
            >
              <span>Reserve Contractor Pass</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
