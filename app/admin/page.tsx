"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Sparkles,
  Flame,
  Eye,
  PlusCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { BlogPost } from "@/app/api/blogs/route";

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs) setBlogs(data.blogs);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const totalStories = blogs.filter((b) => b.postType === "story").length;
  const totalPosts = blogs.filter((b) => b.postType === "post").length;
  const totalViews = blogs.reduce((acc, curr) => acc + (curr.views || 0), 0);

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-8">
      
      {/* Top Welcome & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            Control Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            Blog & Content Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Publish, edit, and organize Featured Stories and Latest Posts dynamically connected to your live website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs?create=story"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>+ New Featured Story</span>
          </Link>

          <Link
            href="/admin/blogs?create=post"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all active:scale-95"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>+ New Post (Latest)</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Blogs */}
        <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
              Total Articles
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">
              {blogs.length}
            </div>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
              <CheckCircle2 className="w-3 h-3" /> All Live & Synced
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        {/* Featured Stories */}
        <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
              Featured Stories
            </span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">
              {totalStories}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Top Carousel / Hero Feed
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Latest Posts */}
        <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
              The Latest Posts
            </span>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 mt-1">
              {totalPosts}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Main Magazine Feed
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
        </div>

        {/* Total Views */}
        <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
              Aggregated Readers
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
              {totalViews.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Industry Impressions
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Recent Articles Table */}
      <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <h2 className="text-base font-bold text-white">Live Articles Database</h2>
          </div>
          <Link
            href="/admin/blogs"
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            Manage All in Blog Tab <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono tracking-wider">
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {blogs.slice(0, 6).map((b) => (
                <tr key={b.id} className="hover:bg-slate-800/40 transition">
                  <td className="py-3.5 px-4">
                    {b.postType === "story" ? (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30 text-[10px]">
                        ★ Story
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30 text-[10px]">
                        📋 Post
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-white max-w-sm truncate">
                    {b.title}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{b.category}</td>
                  <td className="py-3.5 px-4 text-slate-400">{b.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                      Published
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <Link
                      href={`/blog/${b.slug}`}
                      target="_blank"
                      className="text-slate-400 hover:text-white inline-flex items-center gap-1 text-[11px]"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
