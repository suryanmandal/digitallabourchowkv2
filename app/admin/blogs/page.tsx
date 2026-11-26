"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FileText,
  PlusCircle,
  Search,
  Edit3,
  Trash2,
  Eye,
  CheckCircle2,
  Clock,
  Sparkles,
  RefreshCw,
  X,
  ExternalLink,
  Tag,
  Flame,
  Layers,
  ArrowRight,
  SlidersHorizontal,
  Calendar,
  Upload,
} from "lucide-react";
import { BlogPost } from "@/app/api/blogs/route";

const PRESET_COVERS = [
  { label: "Chenab Bridge", url: "/images/blogs/chenab-bridge.jpg" },
  { label: "BOCW Welfare", url: "/images/blogs/bocw-act.jpg" },
  { label: "Daily Wage Workers", url: "/images/blogs/daily-wage-life.jpg" },
  { label: "Kallanai Dam", url: "/images/blogs/kallanai-dam.jpg" },
  { label: "Women in Construction", url: "/images/blogs/female-labourers.jpg" },
  { label: "Civil Engineers", url: "/images/blogs/civil-engineers.jpg" },
  { label: "Site Safety Rules", url: "/images/blogs/safety-rules.jpg" },
  { label: "Electrician vs Mason", url: "/images/blogs/electrician-mason.jpg" },
  { label: "Digital Platform", url: "/images/blogs/tech-platform.jpg" },
  { label: "PF & ESIC Welfare", url: "/images/blogs/worker-welfare.jpg" },
  { label: "Site Retention", url: "/images/blogs/site-retention.jpg" },
  { label: "Urban Migration", url: "/images/blogs/urban-migration.jpg" },
];

const CATEGORIES = [
  "Infrastructure & Engineering",
  "Worker Rights & Policy",
  "Workforce Welfare",
  "Site Management",
  "Technology & Hiring",
  "Company News",
];

function AdminBlogsContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "all";
  const initialCreate = searchParams.get("create");

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "story" | "post" | "draft">(
    initialTab === "story" ? "story" : initialTab === "post" ? "post" : "all"
  );
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [saving, setSaving] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState<"write" | "preview">("write");

  // Form Fields
  const [formPostType, setFormPostType] = useState<"story" | "post">("story");
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCategory, setFormCategory] = useState("Infrastructure & Engineering");
  const [formAuthor, setFormAuthor] = useState("DLC Editorial Desk");
  const [formReadTime, setFormReadTime] = useState("5 min read");
  const [formCoverImage, setFormCoverImage] = useState(PRESET_COVERS[0].url);
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formStatus, setFormStatus] = useState<"published" | "draft">("published");
  const [formTags, setFormTags] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (data.blogs) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error("Failed to load blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle URL creation trigger
  useEffect(() => {
    if (initialCreate === "story") {
      openCreateModal("story");
    } else if (initialCreate === "post") {
      openCreateModal("post");
    }
  }, [initialCreate]);

  const openCreateModal = (type: "story" | "post") => {
    setEditingBlog(null);
    setFormPostType(type);
    setFormTitle("");
    setFormSlug("");
    setFormCategory("Infrastructure & Engineering");
    setFormAuthor("DLC Editorial Desk");
    setFormReadTime("5 min read");
    setFormCoverImage(type === "story" ? PRESET_COVERS[0].url : PRESET_COVERS[6].url);
    setFormExcerpt("");
    setFormContent("");
    setFormStatus("published");
    setFormTags("");
    setActiveFormTab("write");
    setIsModalOpen(true);
  };

  const openEditModal = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormPostType(blog.postType);
    setFormTitle(blog.title);
    setFormSlug(blog.slug);
    setFormCategory(blog.category);
    setFormAuthor(blog.author);
    setFormReadTime(blog.readTime);
    setFormCoverImage(blog.coverImage);
    setFormExcerpt(blog.excerpt);
    setFormContent(blog.content);
    setFormStatus(blog.status);
    setFormTags(blog.tags ? blog.tags.join(", ") : "");
    setActiveFormTab("write");
    setIsModalOpen(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormTitle(val);
    if (!editingBlog) {
      const generatedSlug = val
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");
      setFormSlug(generatedSlug);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to upload image.");
      }

      setFormCoverImage(data.url);
    } catch (err: any) {
      console.error("Upload failed:", err);
      setUploadError(err.message || "Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      alert("Please provide both a Title and Content.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        title: formTitle,
        slug: formSlug,
        postType: formPostType,
        category: formCategory,
        author: formAuthor,
        readTime: formReadTime,
        coverImage: formCoverImage,
        excerpt: formExcerpt,
        content: formContent,
        status: formStatus,
        tags: formTags,
      };

      let res;
      if (editingBlog) {
        res = await fetch("/api/blogs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingBlog.id, ...payload }),
        });
      } else {
        res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (res.ok) {
        await fetchBlogs();
        setIsModalOpen(false);
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to save blog post.");
      }
    } catch (err) {
      console.error("Save error:", err);
      alert("Network error while saving blog post.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b.id !== id));
      } else {
        alert("Failed to delete blog post.");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Filtered List
  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      // Tab Filter
      if (activeTab === "story" && b.postType !== "story") return false;
      if (activeTab === "post" && b.postType !== "post") return false;
      if (activeTab === "draft" && b.status !== "draft") return false;

      // Category Filter
      if (categoryFilter !== "all" && b.category !== categoryFilter) return false;

      // Search Filter
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          (b.tags && b.tags.some((t) => t.toLowerCase().includes(q)))
        );
      }

      return true;
    });
  }, [blogs, activeTab, categoryFilter, search]);

  const storyCount = blogs.filter((b) => b.postType === "story").length;
  const postCount = blogs.filter((b) => b.postType === "post").length;
  const draftCount = blogs.filter((b) => b.status === "draft").length;

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-7">
      
      {/* Page Header & Dual Posting Action Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            Content Dispatcher
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            Blog & Editorial Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Publish directly to the live Digital Labour Chowk blog. Choose between high-impact <strong>Featured Stories</strong> (top hero &amp; carousel) or <strong>The Latest Posts</strong> (magazine feed).
          </p>
        </div>

        {/* Dual Primary Posting Options */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => openCreateModal("story")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>+ New Featured Story</span>
          </button>

          <button
            onClick={() => openCreateModal("post")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-white" />
            <span>+ New Post (Latest)</span>
          </button>

          <Link
            href="/admin/event-banner"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs shadow-lg shadow-teal-600/20 transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Edit Event Banner</span>
          </Link>

          <button
            onClick={fetchBlogs}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
            title="Refresh database"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Tabs */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === "all"
                ? "bg-[#0C59D4] text-white shadow-xs font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Content ({blogs.length})
          </button>

          <button
            onClick={() => setActiveTab("story")}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "story"
                ? "bg-amber-500 text-slate-950 shadow-xs font-bold"
                : "text-slate-400 hover:text-amber-400"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Featured Stories ({storyCount})
          </button>

          <button
            onClick={() => setActiveTab("post")}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "post"
                ? "bg-sky-500 text-slate-950 shadow-xs font-bold"
                : "text-slate-400 hover:text-sky-400"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            The Latest ({postCount})
          </button>

          <button
            onClick={() => setActiveTab("draft")}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === "draft"
                ? "bg-slate-700 text-white shadow-xs font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Drafts ({draftCount})
          </button>

          <Link
            href="/admin/event-banner"
            className="px-3.5 py-1.5 rounded-lg text-slate-400 hover:text-teal-400 transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-400" />
            <span>Event Banner</span>
          </Link>
        </div>

        {/* Search & Category Filter */}
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search title, tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-48 sm:w-64"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Articles Cards / Table View */}
      <div className="rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-16 text-center text-slate-400 text-xs font-mono">
            Loading articles database...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-16 text-center space-y-3">
            <FileText className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No articles found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No blogs match the selected tab or search query. Click the buttons above to create a new Featured Story or Latest Post.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono tracking-wider bg-slate-900/60">
                  <th className="py-3 px-4">Post Type</th>
                  <th className="py-3 px-4">Article Title &amp; Excerpt</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Publish Date</th>
                  <th className="py-3 px-4">Views</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredBlogs.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-4 px-4 whitespace-nowrap">
                      {b.postType === "story" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30 text-[10px]">
                          <Sparkles className="w-3 h-3" />
                          Featured Story
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30 text-[10px]">
                          <Flame className="w-3 h-3" />
                          The Latest
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 max-w-md">
                      <div className="font-bold text-white text-sm tracking-tight mb-1">
                        {b.title}
                      </div>
                      <p className="text-slate-400 text-[11px] line-clamp-1">
                        {b.excerpt}
                      </p>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px]">
                        {b.category}
                      </span>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap text-slate-400 text-[11px]">
                      {b.date}
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap text-slate-300 text-[11px] font-mono">
                      {(b.views || 0).toLocaleString()}
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      {b.status === "published" ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                          Published
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 text-[10px] font-semibold">
                          Draft
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap text-right space-x-2">
                      <Link
                        href={`/blog/${b.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 inline-block transition"
                        title="View Live Page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => openEditModal(b)}
                        className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300 inline-block transition cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDelete(b.id, b.title)}
                        className="p-1.5 rounded-lg bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 hover:text-rose-300 inline-block transition cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      {/* CREATION & EDITING MODAL                                              */}
      {/* ===================================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0F172A] border border-slate-700 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                  {editingBlog ? "Edit Existing Article" : "Compose New Content"}
                </span>
                <h2 className="text-xl font-black text-white tracking-tight mt-0.5">
                  {editingBlog ? editingBlog.title : formPostType === "story" ? "New Featured Story" : "New Post (Latest Feed)"}
                </h2>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Content */}
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Post Type Selector Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">
                  Select Article Placement Type:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormPostType("story")}
                    className={`p-3 rounded-2xl border text-left transition flex items-center gap-3 cursor-pointer ${
                      formPostType === "story"
                        ? "bg-amber-500/15 border-amber-500/60 text-white"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">★ Featured Story</div>
                      <div className="text-[10px] text-slate-400">Renders in Hero Banner &amp; Top Carousel</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormPostType("post")}
                    className={`p-3 rounded-2xl border text-left transition flex items-center gap-3 cursor-pointer ${
                      formPostType === "post"
                        ? "bg-sky-500/15 border-sky-500/60 text-white"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">📋 The Latest Post</div>
                      <div className="text-[10px] text-slate-400">Renders in Main Feed &amp; Trending List</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Title & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={handleTitleChange}
                    placeholder="e.g. Chenab Railway Bridge Engineering Feat"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    URL Slug (Auto-generated)
                  </label>
                  <input
                    type="text"
                    required
                    value={formSlug}
                    onChange={(e) => setFormSlug(e.target.value)}
                    placeholder="chenab-railway-bridge-construction"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category, Author, Read Time, Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Category
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Publication Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as "published" | "draft")}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="published">Published (Live)</option>
                    <option value="draft">Draft (Hidden)</option>
                  </select>
                </div>
              </div>

              {/* Cover Image Preset Picker & Custom Input & Supabase Storage Uploader */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 block">
                    Cover Image (Upload to Cloud Storage or select preset)
                  </label>
                  {formCoverImage && (
                    <span className="text-[10px] text-teal-400 font-mono">
                      {formCoverImage.startsWith("http") ? "Cloud Storage / Web URL" : "Local Preset"}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={formCoverImage}
                      onChange={(e) => setFormCoverImage(e.target.value)}
                      placeholder="https://... or /images/blogs/..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Supabase Storage Upload Button */}
                  <label className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shrink-0 border ${
                    uploadingImage 
                      ? "bg-slate-800 text-slate-400 border-slate-700 cursor-not-allowed" 
                      : "bg-teal-600 hover:bg-teal-500 text-white border-teal-500 shadow-md shadow-teal-900/30"
                  }`}>
                    {uploadingImage ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-400" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload to Supabase</span>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/webp,image/avif,image/svg+xml"
                          onChange={handleImageUpload}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </>
                    )}
                  </label>
                </div>

                {uploadError && (
                  <div className="text-[11px] text-red-400 bg-red-950/40 border border-red-800/60 px-3 py-1.5 rounded-lg">
                    Upload Error: {uploadError}
                  </div>
                )}

                {/* Cover Image Preview Thumbnail */}
                {formCoverImage && (
                  <div className="flex items-center gap-3 p-2 bg-slate-900/60 border border-slate-800 rounded-xl">
                    <img
                      src={formCoverImage}
                      alt="Cover Preview"
                      className="w-16 h-10 object-cover rounded-lg border border-slate-700 shrink-0"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium text-slate-300 truncate font-mono">
                        {formCoverImage}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Live cover thumbnail preview
                      </div>
                    </div>
                  </div>
                )}

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] text-slate-500 self-center mr-1">Presets:</span>
                  {PRESET_COVERS.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setFormCoverImage(p.url)}
                      className={`text-[10px] px-2 py-0.5 rounded-md border transition cursor-pointer ${
                        formCoverImage === p.url
                          ? "bg-blue-600/30 text-blue-300 border-blue-500/50"
                          : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                  Short Excerpt (Summary for Cards &amp; SEO)
                </label>
                <textarea
                  rows={2}
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  placeholder="2-line summary describing the key takeaways of this article..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                  Tags (Comma-separated for smart recommendation algorithm)
                </label>
                <input
                  type="text"
                  value={formTags}
                  onChange={(e) => setFormTags(e.target.value)}
                  placeholder="civil-engineering, infrastructure, site-safety, bocw"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Content Editor with Preview Tab */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">
                    Article Full Content (Markdown Supported) *
                  </label>
                  <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveFormTab("write")}
                      className={`px-2.5 py-1 rounded-md transition ${
                        activeFormTab === "write" ? "bg-slate-800 text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      Write Markdown
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFormTab("preview")}
                      className={`px-2.5 py-1 rounded-md transition ${
                        activeFormTab === "preview" ? "bg-slate-800 text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      Preview HTML
                    </button>
                  </div>
                </div>

                {activeFormTab === "write" ? (
                  <textarea
                    rows={12}
                    required
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    placeholder="Write article in Markdown. Use ### for subheadings, bullet points, and paragraphs..."
                    className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono placeholder-slate-500 focus:outline-none focus:border-blue-500 leading-relaxed"
                  />
                ) : (
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 min-h-[240px] text-xs text-slate-200 space-y-3 prose prose-invert max-w-none">
                    {formContent ? (
                      <div className="whitespace-pre-wrap leading-relaxed">{formContent}</div>
                    ) : (
                      <div className="text-slate-500 italic">No content written yet.</div>
                    )}
                  </div>
                )}
              </div>

              {/* Form Submission Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {saving ? "Saving to Database..." : editingBlog ? "Update Article" : "Publish Article Now"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default function AdminBlogsPage() {
  return (
    <React.Suspense
      fallback={
        <div className="p-12 flex items-center justify-center text-slate-400 font-mono text-xs">
          Loading Blog Management Suite...
        </div>
      }
    >
      <AdminBlogsContent />
    </React.Suspense>
  );
}
