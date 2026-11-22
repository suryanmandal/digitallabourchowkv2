"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Save,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Eye,
  Bell,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { EventBannerConfig } from "@/app/api/event-banner/route";

const PRESET_EVENT_COVERS = [
  {
    label: "National Tech Summit 2026 (Recommended)",
    url: "/images/blogs/event-summit-2026.jpg",
  },
  {
    label: "Chenab Mega Arch Bridge",
    url: "/images/blogs/chenab-bridge.jpg",
  },
  {
    label: "Kallanai Historic Engineering",
    url: "/images/blogs/kallanai-dam.jpg",
  },
  {
    label: "Safety & Compliance Conclave",
    url: "/images/blogs/safety-rules.jpg",
  },
  {
    label: "Digital Labour Tech Platform",
    url: "/images/blogs/tech-platform.jpg",
  },
  {
    label: "Civil Engineering Showcase",
    url: "/images/blogs/civil-engineers.jpg",
  },
];

export default function AdminEventBannerPage() {
  const [config, setConfig] = useState<EventBannerConfig>({
    badgeText: "Upcoming Event",
    titlePrefix: "National Construction",
    titleMain: "Summit #2026 at Pragati Maidan",
    category: "Summit & Expo",
    imageUrl: "/images/blogs/event-summit-2026.jpg",
    countdownTarget: "2026-12-15T09:30:00.000Z",
    location: "Bharat Mandapam & Pragati Maidan, New Delhi",
    buttonText: "Reminder Me",
    buttonLink: "/contact",
    isActive: true,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Fetch current config
  const fetchConfig = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/event-banner");
      const data = await res.json();
      if (data.banner) {
        setConfig(data.banner);
      }
    } catch (err) {
      console.error("Failed to load banner config:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setNotification(null);

    try {
      const res = await fetch("/api/event-banner", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({
          type: "success",
          message: "Upcoming Event Banner updated successfully! Changes are live on /blog.",
        });
        setConfig(data.banner);
      } else {
        setNotification({
          type: "error",
          message: data.error || "Failed to update banner.",
        });
      }
    } catch (err) {
      setNotification({
        type: "error",
        message: "Network error while saving changes.",
      });
    } finally {
      setSaving(false);
    }
  };

  // Convert ISO string to format suitable for datetime-local
  const getDatetimeLocalValue = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      if (isNaN(d.getTime())) return "";
      const pad = (n: number) => String(n).padStart(2, "0");
      const year = d.getFullYear();
      const month = pad(d.getMonth() + 1);
      const day = pad(d.getDate());
      const hours = pad(d.getHours());
      const minutes = pad(d.getMinutes());
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    } catch {
      return "";
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <Calendar className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Upcoming Event Banner
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 font-normal">
            Customize the editorial event showcase card displayed at the bottom of the public Blog page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blog#upcoming-event"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
          >
            <Eye className="w-4 h-4 text-teal-400" />
            <span>View on Live Blog</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </Link>
          <button
            type="button"
            onClick={fetchConfig}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            title="Reload Config"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {notification && (
        <div
          className={`p-4 rounded-xl flex items-center justify-between gap-3 text-xs font-semibold ${
            notification.type === "success"
              ? "bg-teal-500/15 border border-teal-500/30 text-teal-300"
              : "bg-red-500/15 border border-red-500/30 text-red-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notification.message}</span>
          </div>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Grid: Form Left, Real-time Live Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: 7 Cols */}
        <form
          onSubmit={handleSave}
          className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Event Card Properties
              </h2>
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <span className="text-xs text-slate-400 font-medium">Visible on Blog</span>
              <input
                type="checkbox"
                checked={config.isActive}
                onChange={(e) => setConfig({ ...config, isActive: e.target.checked })}
                className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 bg-slate-900 border-slate-700 cursor-pointer"
              />
            </label>
          </div>

          {/* Title Segment 1: Prefix (Teal Highlight) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Title Prefix (Teal Colored) <span className="text-teal-400">*</span>
              </label>
              <input
                type="text"
                required
                value={config.titlePrefix}
                onChange={(e) => setConfig({ ...config, titlePrefix: e.target.value })}
                placeholder="e.g. ATV World Tour / National Construction"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-teal-300 text-xs font-bold placeholder-slate-600 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Badge Label
              </label>
              <input
                type="text"
                value={config.badgeText}
                onChange={(e) => setConfig({ ...config, badgeText: e.target.value })}
                placeholder="Upcoming Event"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium placeholder-slate-600 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Title Segment 2: Main Title (Dark / Bold) */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Main Title & Sub-Location <span className="text-teal-400">*</span>
            </label>
            <input
              type="text"
              required
              value={config.titleMain}
              onChange={(e) => setConfig({ ...config, titleMain: e.target.value })}
              placeholder="e.g. Championship #132 at Selangor / Summit #2026 at Pragati Maidan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold placeholder-slate-600 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Countdown Target Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Countdown Target Time</span>
              </label>
              <input
                type="datetime-local"
                value={getDatetimeLocalValue(config.countdownTarget)}
                onChange={(e) => {
                  if (e.target.value) {
                    const iso = new Date(e.target.value).toISOString();
                    setConfig({ ...config, countdownTarget: iso });
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Venue / City</span>
              </label>
              <input
                type="text"
                value={config.location}
                onChange={(e) => setConfig({ ...config, location: e.target.value })}
                placeholder="e.g. Bharat Mandapam, New Delhi"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium placeholder-slate-600 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Button Text & Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                CTA Button Text
              </label>
              <input
                type="text"
                value={config.buttonText}
                onChange={(e) => setConfig({ ...config, buttonText: e.target.value })}
                placeholder="Reminder Me"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold placeholder-slate-600 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                CTA Target URL
              </label>
              <input
                type="text"
                value={config.buttonLink}
                onChange={(e) => setConfig({ ...config, buttonLink: e.target.value })}
                placeholder="/contact"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium placeholder-slate-600 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Visual Cover Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Event Cover Photo
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
              {PRESET_EVENT_COVERS.map((preset) => {
                const selected = config.imageUrl === preset.url;
                return (
                  <button
                    key={preset.url}
                    type="button"
                    onClick={() => setConfig({ ...config, imageUrl: preset.url })}
                    className={`relative rounded-xl overflow-hidden border-2 p-1 text-left transition cursor-pointer group ${
                      selected ? "border-teal-500 shadow-md shadow-teal-500/20" : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="relative h-16 w-full rounded-lg overflow-hidden bg-slate-800">
                      <Image
                        src={preset.url}
                        alt={preset.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      {selected && (
                        <div className="absolute top-1 right-1 bg-teal-500 text-white rounded-full p-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <div className="text-[10px] font-bold text-slate-300 truncate mt-1">
                      {preset.label}
                    </div>
                  </button>
                );
              })}
            </div>

            <input
              type="text"
              value={config.imageUrl}
              onChange={(e) => setConfig({ ...config, imageUrl: e.target.value })}
              placeholder="Or paste custom image path: /images/blogs/..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono placeholder-slate-600 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 rounded-xl bg-[#0F766E] hover:bg-teal-600 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition active:scale-95 disabled:opacity-50 cursor-pointer flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Publishing Changes..." : "Save & Publish to Blog"}</span>
            </button>
          </div>
        </form>

        {/* Right Column: Live Interactive Card Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-teal-400" />
              Live Blog Card Simulation
            </span>
            <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-md font-bold">
              Real-time Preview
            </span>
          </div>

          {/* Card Preview (Styled identically to public /blog card) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl overflow-hidden relative text-slate-900 space-y-6">
            
            {/* Topographic Contour Background Simulation */}
            <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
              <svg
                className="w-full h-full text-slate-200 stroke-current"
                fill="none"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100,-20 C200,60 300,30 400,120 C500,210 650,180 700,280"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
                <path
                  d="M50,80 C180,140 280,100 380,200 C480,300 620,260 680,360"
                  strokeWidth="1"
                />
                <path
                  d="M0,180 C150,220 250,180 350,280 C450,380 580,340 650,440"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <div className="relative z-10 space-y-5">
              {/* Event Image */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                <Image
                  src={config.imageUrl || "/images/blogs/event-summit-2026.jpg"}
                  alt={config.titleMain}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Header Badge */}
              <div className="flex items-center gap-2">
                <span className="w-1 h-5 bg-[#0F766E] rounded-full inline-block" />
                <span className="text-sm font-bold text-slate-800 tracking-wide">
                  {config.badgeText || "Upcoming Event"}
                </span>
              </div>

              {/* Two-tone Title */}
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-[#0F766E] leading-tight">
                  {config.titlePrefix || "National Construction"}
                </h3>
                <h4 className="text-2xl font-black text-slate-900 leading-tight">
                  {config.titleMain || "Summit #2026 at Pragati Maidan"}
                </h4>
              </div>

              {/* Countdown Ticker Simulation */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 mb-1">Start in</div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-slate-900 tracking-wider">
                  09:14:23:01
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  className="px-7 py-3 rounded-full bg-[#0F766E] text-white font-bold text-sm shadow-md transition inline-flex items-center gap-2"
                >
                  <span>{config.buttonText || "Reminder Me"}</span>
                </button>
              </div>

              {config.location && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{config.location}</span>
                </div>
              )}
            </div>

          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Architectural Specifications</span>
            </div>
            <p className="leading-relaxed">
              Updates made here immediately propagate to the server JSON repository at <code className="text-slate-200 font-mono">data/event-banner.json</code>. The public blog dynamically renders this configuration with an active live countdown timer.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
