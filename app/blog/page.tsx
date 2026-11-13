"use client";

import React from "react";
import Link from "next/link";
import { FileText, Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "How Digital Attendance is Solving Wage Disputes on Indian Construction Sites",
      excerpt: "Traditional muster rolls lead to ghost workers and contractor disputes. Biometric geofencing provides indisputable audit trails.",
      date: "Nov 10, 2026",
      readTime: "4 min read",
      category: "Site Management",
    },
    {
      title: "The Impact of Skill Grading on Mason & Carpenter Daily Wages",
      excerpt: "Why transparent competency badges are empowering craftsmen to earn 25-40% higher wages across urban infrastructure projects.",
      date: "Nov 02, 2026",
      readTime: "5 min read",
      category: "Workforce Welfare",
    },
    {
      title: "Statutory PF & ESIC Compliance for Subcontractors: A Practical Guide",
      excerpt: "Demystifying statutory labor laws for jamadars and mid-size contractors to prevent compliance penalties.",
      date: "Oct 24, 2026",
      readTime: "6 min read",
      category: "Labour Laws",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#071329] via-[#0C59D4] to-[#0A47AD] text-white py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs sm:text-sm font-semibold mb-4 border border-white/10">
            <FileText className="w-4 h-4 text-amber-300" />
            <span>DLC Industry Insights</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
            Construction Workforce &amp; Tech Blogs
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Thought leadership, regulatory updates, case studies, and field stories transforming India&apos;s construction ecosystem.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0C59D4] bg-blue-50 px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    <span>{post.category}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{post.date}</span>
                <span className="text-[#0C59D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}