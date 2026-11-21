"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  BookOpen,
  ArrowLeft,
  Flame,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard Overview",
      href: "/admin",
      icon: LayoutDashboard,
      active: pathname === "/admin",
    },
    {
      name: "Blog Management",
      href: "/admin/blogs",
      icon: FileText,
      active: pathname.startsWith("/admin/blogs"),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#0B0F19] text-slate-100 font-sans">
      
      {/* Mobile Top App Bar */}
      <div className="lg:hidden flex items-center justify-between px-5 py-3.5 bg-[#0F172A] border-b border-slate-800 sticky top-0 z-40">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0C59D4] flex items-center justify-center font-black text-white text-xs">
            DLC
          </div>
          <div className="text-sm font-black tracking-tight flex items-center gap-1.5">
            <span>DLC Admin</span>
            <span className="text-[10px] bg-blue-600/30 text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded font-mono font-bold uppercase">
              v2.1
            </span>
          </div>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar for Desktop & Mobile Overlay */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between transform transition-transform duration-300 lg:translate-x-0 lg:static ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Logo & Portal Identity */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C59D4] shadow-lg shadow-blue-600/25 flex items-center justify-center text-white font-black text-sm">
                DLC
              </div>
              <div>
                <div className="font-extrabold text-base tracking-tight leading-tight flex items-center gap-1.5">
                  DLC Admin
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Content & Dispatch Hub</div>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="mt-6 space-y-1.5">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3 mb-2">
              Management
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all ${
                    item.active
                      ? "bg-[#0C59D4] text-white shadow-md shadow-blue-600/20 font-bold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="pt-5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3 mb-2">
              Quick Shortcuts
            </div>

            <Link
              href="/admin/blogs?tab=story"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs text-amber-400/90 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>★ Featured Stories</span>
            </Link>

            <Link
              href="/admin/blogs?tab=post"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs text-sky-400/90 hover:text-sky-300 hover:bg-sky-500/10 transition-colors"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>📋 The Latest Posts</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-slate-800/80 space-y-3">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              View Live Blog
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to DLC Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden min-h-screen bg-[#080C14]">
        {children}
      </main>

    </div>
  );
}
