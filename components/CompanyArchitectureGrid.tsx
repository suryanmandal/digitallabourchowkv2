"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  TrendingUp,
  Target,
  ShieldCheck,
  HardHat,
  Award,
  MapPin,
  Radio,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface ArchitecturePillar {
  index: string;
  category: string;
  title: string;
  desc: string;
  href: string;
  highlightPill: string;
  actionText: string;
  themeColor: string;
  glowColor: string;
  icon: React.ElementType;
  // Continuous wave path parameters for SVG header
  wavePath: string;
  waveGradFrom: string;
  waveGradTo: string;
}

const PILLARS: ArchitecturePillar[] = [
  // ===========================================================================
  // ROW 1: CARDS 01 TO 04 (Continuous Horizon Flow Across Row 1)
  // ===========================================================================
  {
    index: "01",
    category: "CHRONOLOGY",
    title: "Our History & Journey",
    desc: "From CIMPS incubation at STPI to building India's premier digital blue-collar employment exchange.",
    href: "/about-us/history",
    highlightPill: "2020 – 2026 • 6 Yrs Impact",
    actionText: "Explore Journey",
    themeColor: "#0842A0",
    glowColor: "rgba(8, 66, 160, 0.25)",
    icon: TrendingUp,
    // Wave enters at y=80, peaks at y=65, exits at y=95 to seamlessly join Card 02
    wavePath: "M0,80 C60,65 140,55 200,75 C260,95 290,95 320,95 L320,140 L0,140 Z",
    waveGradFrom: "#0A4BB5",
    waveGradTo: "#0284C7",
  },
  {
    index: "02",
    category: "PURPOSE",
    title: "Vision & Mission",
    desc: "Empowering 5 Crore+ construction craftsmen with dignity, verified identity, and guaranteed daily payments.",
    href: "/about-us/vision-mission",
    highlightPill: "5 Crore+ Tradesmen",
    actionText: "Explore Mission",
    themeColor: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.25)",
    icon: Target,
    // Wave enters at y=95 (from Card 01), dips to y=110, rises and exits at y=70 to join Card 03
    wavePath: "M0,95 C40,95 100,115 160,110 C220,105 270,75 320,70 L320,140 L0,140 Z",
    waveGradFrom: "#0284C7",
    waveGradTo: "#0EA5E9",
  },
  {
    index: "03",
    category: "ETHICS",
    title: "Core Values & Trust",
    desc: "Uncompromising integrity, transparency, zero-commission ethics, and worker dignity on every site.",
    href: "/about-us/values",
    highlightPill: "100% Wage Protection",
    actionText: "Explore Values",
    themeColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.25)",
    icon: ShieldCheck,
    // Wave enters at y=70 (from Card 02), arches gracefully to y=85, exits at y=85 to join Card 04
    wavePath: "M0,70 C50,65 110,60 170,75 C230,90 280,85 320,85 L320,140 L0,140 Z",
    waveGradFrom: "#059669",
    waveGradTo: "#10B981",
  },
  {
    index: "04",
    category: "LEADERSHIP",
    title: "Leadership & Founders",
    desc: "Guided by Chandrashekhar Mandal and technical architects formalizing unorganized labor nationwide.",
    href: "/about-us/leadership",
    highlightPill: "Founding Architects",
    actionText: "Meet Leadership",
    themeColor: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.25)",
    icon: HardHat,
    // Wave enters at y=85 (from Card 03), crests at y=60, slopes to soft conclusion at y=90
    wavePath: "M0,85 C40,85 100,70 160,60 C230,50 280,75 320,90 L320,140 L0,140 Z",
    waveGradFrom: "#D97706",
    waveGradTo: "#F59E0B",
  },

  // ===========================================================================
  // ROW 2: CARDS 05 TO 08 (Continuous Horizon Flow Across Row 2)
  // ===========================================================================
  {
    index: "05",
    category: "RECOGNITION",
    title: "Awards & Honors",
    desc: "National accolades from Hitachi Social Innovation, TiE Global, Startup India, and NAREDCO.",
    href: "/awards-recognition",
    highlightPill: "Hitachi Award Winner",
    actionText: "View Honors",
    themeColor: "#C2410C",
    glowColor: "rgba(194, 65, 12, 0.25)",
    icon: Award,
    // Row 2 Wave 1: enters at y=85, dips to y=100, exits at y=75
    wavePath: "M0,85 C60,95 120,105 180,95 C240,85 280,75 320,75 L320,140 L0,140 Z",
    waveGradFrom: "#C2410C",
    waveGradTo: "#EA580C",
  },
  {
    index: "06",
    category: "NETWORK",
    title: "National Footprint",
    desc: "Operational across 15+ industrial clusters, STPI Noida HQ, and grassroots centers in 6,000+ towns.",
    href: "/about-us/footprint",
    highlightPill: "15+ Hubs • 6,000 Towns",
    actionText: "Explore Network",
    themeColor: "#0D9488",
    glowColor: "rgba(13, 148, 136, 0.25)",
    icon: MapPin,
    // Row 2 Wave 2: enters at y=75 (from Card 05), curves to y=60, exits at y=90
    wavePath: "M0,75 C50,75 110,65 170,60 C230,55 270,80 320,90 L320,140 L0,140 Z",
    waveGradFrom: "#0D9488",
    waveGradTo: "#14B8A6",
  },
  {
    index: "07",
    category: "DISPATCH",
    title: "Media Coverage",
    desc: "Spotlighted by CNBC-TV18, Bloomberg, Republic TV, and leading national financial dailies.",
    href: "/media-coverage",
    highlightPill: "CNBC & Bloomberg Feed",
    actionText: "Explore Press",
    themeColor: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.25)",
    icon: Radio,
    // Row 2 Wave 3: enters at y=90 (from Card 06), arches to y=70, exits at y=80
    wavePath: "M0,90 C50,90 120,75 180,70 C240,65 280,75 320,80 L320,140 L0,140 Z",
    waveGradFrom: "#4F46E5",
    waveGradTo: "#818CF8",
  },
  {
    index: "08",
    category: "SYNERGY",
    title: "Institutional Partners",
    desc: "Backed by Villgro, GDI, TiE, Bihar Industries Association, and Tier-1 infrastructure EPCs.",
    href: "/partnerships",
    highlightPill: "Tier-1 EPC Alliances",
    actionText: "View Alliances",
    themeColor: "#1E40AF",
    glowColor: "rgba(30, 64, 175, 0.25)",
    icon: Building2,
    // Row 2 Wave 4: enters at y=80 (from Card 07), softly rises and concludes at y=65
    wavePath: "M0,80 C60,85 130,90 190,80 C250,70 290,65 320,65 L320,140 L0,140 Z",
    waveGradFrom: "#1E40AF",
    waveGradTo: "#3B82F6",
  },
];

export default function CompanyArchitectureGrid() {
  return (
    <section
      id="company-architecture"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAFAFC] relative overflow-hidden border-y border-slate-200 select-none scroll-mt-24"
    >
      {/* Subtle Ambient Atmosphere */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#073683] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#0842A0]" />
            <span>Digital Labour Chowk • Core Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
            Explore Our <span className="text-[#0842A0]">Company Architecture</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
            Eight foundational pillars powering India’s premier construction-tech workforce infrastructure — connecting grassroots craftsmanship to enterprise nationwide scale.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 4X2 GRID: 8 ELEGANT CARDS WITH CONTINUOUS FLUID WAVE & CLEAN BADGES    */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <Link
                key={pillar.index}
                href={pillar.href}
                className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(8,66,160,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 cursor-pointer"
              >
                {/* ----------------------------------------------------------- */}
                {/* CARD VISUAL HEADER: Continuous Fluid Wave & Floating Emblem */}
                {/* ----------------------------------------------------------- */}
                <div className="relative w-full h-[125px] sm:h-[135px] bg-slate-50 overflow-hidden flex items-end justify-between px-5 pb-3">
                  {/* Continuous Organic Fluid Wave SVG (No geometric wireframes) */}
                  <svg
                    viewBox="0 0 320 140"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <defs>
                      <linearGradient id={`waveGrad_${pillar.index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={pillar.waveGradFrom} stopOpacity="0.85" />
                        <stop offset="100%" stopColor={pillar.waveGradTo} stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id={`softGrad_${pillar.index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={pillar.waveGradFrom} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={pillar.waveGradTo} stopOpacity="0.35" />
                      </linearGradient>
                    </defs>

                    {/* Secondary Harmonic Wave */}
                    <path
                      d="M0,105 C80,90 160,110 240,95 C280,85 300,90 320,90 L320,140 L0,140 Z"
                      fill={`url(#softGrad_${pillar.index})`}
                    />

                    {/* Primary Bold Fluid Horizon Wave */}
                    <path
                      d={pillar.wavePath}
                      fill={`url(#waveGrad_${pillar.index})`}
                    />
                  </svg>

                  {/* Top-Left Step Index Counter (Inspired by 'How to Participate') */}
                  <div className="absolute top-4 left-5 z-10 flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/90 text-slate-800 shadow-xs border border-white">
                      {pillar.index} / 08
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Top-Right Connecting Flow Arrow (Inspired by 'Fincount') */}
                  <div className="absolute top-4 right-5 z-10 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700" />
                  </div>

                  {/* Floating Glassmorphic Icon Emblem */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-2xl bg-white shadow-lg border border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: `0 8px 20px -4px ${pillar.glowColor}`,
                    }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: pillar.themeColor }} />
                  </div>

                  {/* Highlight Feature Pill (Inspired by Fincount's orange accent tag) */}
                  <div className="relative z-10">
                    <span
                      className="inline-flex items-center text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full text-white shadow-xs backdrop-blur-xs"
                      style={{ backgroundColor: pillar.themeColor }}
                    >
                      {pillar.highlightPill}
                    </span>
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}
                {/* CARD BODY: Bold Editorial Typography & Narrative            */}
                {/* ----------------------------------------------------------- */}
                <div className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-[#0842A0] transition-colors tracking-tight leading-snug mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Action Strip: Minimalist Pill CTA Button */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      DLC • {pillar.category}
                    </span>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all duration-200 group-hover:shadow-md group-hover:scale-[1.03]"
                      style={{ backgroundColor: pillar.themeColor }}
                    >
                      <span>{pillar.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Active Bottom Glow Accent Line */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: pillar.themeColor }}
                />
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
