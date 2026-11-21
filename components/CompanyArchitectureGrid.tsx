"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  MapPin,
  Users,
  ShieldCheck,
  Award,
  Radio,
  Building2,
  HardHat,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
} from "lucide-react";

export default function CompanyArchitectureGrid() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAFAFC] relative overflow-hidden border-y border-slate-200 select-none">
      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bentoBlueprintGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0C59D4" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="#0C59D4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bentoBlueprintGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ===================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#073683] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#0842A0]" />
            <span>Digital Labour Chowk • Architectural Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
            Explore Our <span className="text-[#0842A0]">Company Architecture</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
            Eight interconnected foundational pillars powering India’s premier construction-tech workforce infrastructure — from grassroots chowks to national institutional scale.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* ASYMMETRIC CONSTRUCTION-TECH BENTO GRID                                */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 auto-rows-fr">
          
          {/* =================================================================== */}
          {/* CARD 1: NATIONAL FOOTPRINT & REAL-TIME SCALE (2 COLS)               */}
          {/* =================================================================== */}
          <Link
            href="/about-us/national-footprint"
            className="group relative lg:col-span-2 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0842A0] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(8,66,160,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            {/* Top Meta Strip */}
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-100/70 text-[#073683]">
                01 / 08 • NATIONAL NETWORK
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                6,000+ Towns Active
              </span>
            </div>

            {/* Visual Vector Canvas: India Telemetry Radar & Hub Coordinates */}
            <div className="relative w-full h-[180px] sm:h-[200px] bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 overflow-hidden flex items-center justify-center px-4">
              <svg viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                <defs>
                  <radialGradient id="radarPulseGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0842A0" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#0284C7" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0842A0" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Radar Grid Circles */}
                <circle cx="240" cy="90" r="130" stroke="#0842A0" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 4" />
                <circle cx="240" cy="90" r="90" stroke="#0842A0" strokeWidth="1" strokeOpacity="0.18" />
                <circle cx="240" cy="90" r="50" stroke="#0842A0" strokeWidth="1.2" strokeOpacity="0.25" fill="url(#radarPulseGrad)" />
                <circle cx="240" cy="90" r="16" stroke="#073683" strokeWidth="1.5" fill="#E0F2FE" />
                <circle cx="240" cy="90" r="5" fill="#0842A0" />

                {/* Sweeping Crosshairs */}
                <line x1="80" y1="90" x2="400" y2="90" stroke="#0842A0" strokeWidth="0.8" strokeOpacity="0.18" />
                <line x1="240" y1="10" x2="240" y2="170" stroke="#0842A0" strokeWidth="0.8" strokeOpacity="0.18" />

                {/* Hub Node Coordinates (NCR, Patna, Mumbai, Bangalore, Kolkata) */}
                <g>
                  {/* Delhi NCR Hub */}
                  <circle cx="210" cy="55" r="4.5" fill="#0284C7" />
                  <circle cx="210" cy="55" r="9" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.5" />
                  <text x="145" y="58" fill="#073683" fontSize="9" fontFamily="monospace" fontWeight="bold">DELHI NCR</text>

                  {/* Patna STPI Hub */}
                  <circle cx="280" cy="72" r="5" fill="#D97706" />
                  <circle cx="280" cy="72" r="10" stroke="#D97706" strokeWidth="1" strokeOpacity="0.5" />
                  <text x="295" y="75" fill="#92400E" fontSize="9" fontFamily="monospace" fontWeight="bold">PATNA (HQ)</text>

                  {/* Mumbai Western Hub */}
                  <circle cx="160" cy="115" r="4" fill="#0284C7" />
                  <text x="105" y="118" fill="#073683" fontSize="9" fontFamily="monospace">MUMBAI</text>

                  {/* Bengaluru Southern Hub */}
                  <circle cx="220" cy="145" r="4" fill="#0284C7" />
                  <text x="232" y="148" fill="#073683" fontSize="9" fontFamily="monospace">BENGALURU</text>

                  {/* Interconnecting Telemetry Signal Arcs */}
                  <path d="M 210 55 Q 245 40 280 72" stroke="#0842A0" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
                  <path d="M 160 115 Q 200 100 280 72" stroke="#0842A0" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
                  <path d="M 220 145 Q 260 120 280 72" stroke="#0842A0" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
                </g>
              </svg>
            </div>

            {/* Narrative & Metrics */}
            <div className="p-5 sm:p-6 pt-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-950 group-hover:text-[#0842A0] transition-colors tracking-tight mb-2">
                  National Footprint & Deployment Scale
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Operating across 15+ industrial clusters, STPI Noida HQ, and grassroots centers in 6,000+ towns, replacing unorganized physical labor chowks with verified real-time digital matching.
                </p>
              </div>

              {/* Data Chips & Action Link */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#0842A0]" />
                    5 Crore+ Workforce
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                    15+ Hubs
                  </span>
                </div>

                <div className="inline-flex items-center text-xs font-bold text-[#0842A0] group-hover:translate-x-1 transition-transform">
                  <span>Explore Network</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 2: LEADERSHIP & FOUNDING ARCHITECTS (1 COL)                    */}
          {/* =================================================================== */}
          <Link
            href="/about-us/leadership"
            className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-[#0842A0] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(8,66,160,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-amber-100/70 text-amber-900">
                02 / 08 • LEADERSHIP
              </span>
              <span className="text-xs font-bold text-slate-500">Executive Board</span>
            </div>

            {/* Custom Drafting Silhouette & Founder Quote Visual */}
            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                  <HardHat className="w-6 h-6 text-[#D97706]" />
                </div>

                <h3 className="text-lg font-black text-slate-950 group-hover:text-[#0842A0] transition-colors tracking-tight mb-2">
                  Leadership & Founders
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  Guided by Chandrashekhar Mandal and technical architects formalizing India’s blue-collar ecosystem.
                </p>

                {/* Editorial Quote Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 border-l-4 border-l-[#D97706] text-[11px] text-slate-700 italic leading-relaxed">
                  “Technology must dignify the craftsman’s hands that construct the nation.”
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">Founding Vision</span>
                <div className="inline-flex items-center text-xs font-bold text-[#0842A0] group-hover:translate-x-1 transition-transform">
                  <span>Meet Team</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 3: CHRONOLOGY & STPI INCUBATION (1 COL)                        */}
          {/* =================================================================== */}
          <Link
            href="/about-us/history"
            className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-[#0842A0] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(8,66,160,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-100/70 text-[#073683]">
                03 / 08 • CHRONOLOGY
              </span>
              <span className="text-xs font-bold text-[#0842A0]">2020 – 2026</span>
            </div>

            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0842A0] mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-[#0842A0]" />
                </div>

                <h3 className="text-lg font-black text-slate-950 group-hover:text-[#0842A0] transition-colors tracking-tight mb-2">
                  Our History & Journey
                </h3>

                {/* Vertical Engineering Milestone Stepper */}
                <div className="space-y-3 mt-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
                  <div className="flex items-start gap-3 relative">
                    <span className="w-4 h-4 rounded-full bg-[#0842A0] border-2 border-white shadow-xs shrink-0 mt-0.5" />
                    <div className="text-[11px]">
                      <span className="font-bold text-slate-900">2020 • STPI Incubation</span>
                      <p className="text-slate-500 leading-tight">CIMPS Foundation at Patna</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 relative">
                    <span className="w-4 h-4 rounded-full bg-[#0284C7] border-2 border-white shadow-xs shrink-0 mt-0.5" />
                    <div className="text-[11px]">
                      <span className="font-bold text-slate-900">2023 • Mobile Platform</span>
                      <p className="text-slate-500 leading-tight">100K+ daily verified craftsmen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 relative">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs shrink-0 mt-0.5" />
                    <div className="text-[11px]">
                      <span className="font-bold text-slate-900">2026 • National Scale</span>
                      <p className="text-slate-500 leading-tight">India’s blue-collar exchange</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">6 Years of Impact</span>
                <div className="inline-flex items-center text-xs font-bold text-[#0842A0] group-hover:translate-x-1 transition-transform">
                  <span>View Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 4: VISION, MISSION & THE TOWER CRANE BLUEPRINT CANVAS (2 COLS) */}
          {/* =================================================================== */}
          <Link
            href="/about-us/vision-mission"
            className="group relative lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#0C59D4] via-[#094BB5] to-[#072F75] text-white border border-blue-400/30 shadow-[0_20px_50px_-15px_rgba(12,89,212,0.45)] hover:shadow-[0_25px_60px_-15px_rgba(12,89,212,0.6)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            {/* Background Vector Silhouette: Tower Crane & Construction Blueprints (From Home CTA) */}
            <div className="absolute -top-10 -right-8 w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] pointer-events-none select-none opacity-25 group-hover:opacity-40 transition-opacity">
              <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Blueprint Arcs */}
                <circle cx="280" cy="80" r="140" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="280" cy="80" r="220" stroke="#38BDF8" strokeWidth="1" />

                {/* Stylized Tower Crane Vector */}
                <g transform="translate(140, 20)">
                  {/* Mast Column with X-bracing */}
                  <rect x="100" y="50" width="16" height="240" stroke="white" strokeWidth="1.8" />
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <g key={i}>
                      <line x1="100" y1={50 + i * 40} x2="116" y2={90 + i * 40} stroke="white" strokeWidth="1.2" />
                      <line x1="116" y1={50 + i * 40} x2="100" y2={90 + i * 40} stroke="white" strokeWidth="1.2" />
                    </g>
                  ))}
                  {/* Cabin & Peak */}
                  <rect x="92" y="32" width="16" height="18" rx="2" fill="#38BDF8" opacity="0.9" />
                  <polygon points="108,0 96,32 120,32" stroke="white" strokeWidth="1.5" />
                  {/* Boom / Jib */}
                  <line x1="-80" y1="32" x2="220" y2="32" stroke="white" strokeWidth="2.5" />
                  <line x1="-80" y1="46" x2="220" y2="46" stroke="white" strokeWidth="1.8" />
                  {/* Amber Counterweight */}
                  <rect x="-95" y="24" width="22" height="28" rx="2" fill="#F59E0B" />
                  {/* Hoist & Suspended I-Beam */}
                  <line x1="80" y1="46" x2="80" y2="120" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="2 2" />
                  <rect x="55" y="120" width="50" height="8" rx="1" fill="#F59E0B" />
                </g>
              </svg>
            </div>

            {/* Top Meta Strip */}
            <div className="p-5 pb-3 flex items-center justify-between border-b border-white/10 relative z-10">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white backdrop-blur-md">
                04 / 08 • PURPOSE & MANDATE
              </span>
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Social Impact
              </span>
            </div>

            {/* Core Narrative */}
            <div className="p-6 sm:p-7 pt-4 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2">
                  Vision, Mission & Guaranteed Rozgar
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal max-w-lg mb-5">
                  Empowering 5 Crore+ daily-wage tradesmen with verifiable digital work identity, zero-commission contractor hiring, and direct bank transfers (DBT) with ₹5 Lakhs accidental coverage.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                    Direct Bank Transfers (DBT)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                    Zero Contractor Markup
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 backdrop-blur-md text-xs font-bold text-amber-300 border border-amber-400/30">
                    ₹5L Insurance Safety Net
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-blue-200">Social Mandate</span>
                <div className="inline-flex items-center text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                  <span>Explore Mission</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 5: CORE VALUES & ZERO-EXPLOITATION ETHICS (1 COL)              */}
          {/* =================================================================== */}
          <Link
            href="/about-us/core-values"
            className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-600 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-100/70 text-emerald-800">
                05 / 08 • ETHICS
              </span>
              <span className="text-xs font-bold text-emerald-700">Integrity Code</span>
            </div>

            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="text-lg font-black text-slate-950 group-hover:text-emerald-700 transition-colors tracking-tight mb-2">
                  Core Values & Ethics
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                  Uncompromising transparency, zero middleman deductions, and daily worker dignity across all construction sites nationwide.
                </p>

                <div className="space-y-1.5 text-[11px] font-bold text-slate-700">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>100% Wage Transparency</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Zero Middleman Commission</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">Worker First</span>
                <div className="inline-flex items-center text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  <span>Explore Values</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 6: AWARDS & ACCREDITATIONS (1 COL)                             */}
          {/* =================================================================== */}
          <Link
            href="/about-us/awards-recognition"
            className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-amber-600 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(217,119,6,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-amber-100/70 text-amber-900">
                06 / 08 • RECOGNITION
              </span>
              <span className="text-xs font-bold text-amber-700">Accredited</span>
            </div>

            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-[#D97706]" />
                </div>

                <h3 className="text-lg font-black text-slate-950 group-hover:text-amber-700 transition-colors tracking-tight mb-2">
                  Awards & Honors
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                  Recognized nationally by top industrial, government, and global innovation bodies.
                </p>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-[11px] space-y-1">
                  <p className="font-bold text-amber-950">🏆 Hitachi Social Innovation</p>
                  <p className="text-slate-600">NAREDCO & TIE Global Winner</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">Startup India</span>
                <div className="inline-flex items-center text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                  <span>View Honors</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 7: MEDIA COVERAGE & NATIONAL BROADCAST (2 COLS)                */}
          {/* =================================================================== */}
          <Link
            href="/about-us/media-coverage"
            className="group relative lg:col-span-2 rounded-3xl bg-white border border-slate-200/90 hover:border-purple-600 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(147,51,234,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-purple-100/70 text-purple-900">
                07 / 08 • MEDIA DISPATCH
              </span>
              <span className="text-xs font-bold text-purple-700 flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-purple-600 animate-pulse" />
                National Coverage
              </span>
            </div>

            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-950 group-hover:text-purple-700 transition-colors tracking-tight mb-2">
                  Media Coverage & Press Spotlight
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Documented by leading prime-time national news networks and financial dailies for pioneering blue-collar tech inclusion in India.
                </p>

                {/* News Outlets Brand Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-black text-slate-900">CNBC-TV18</span>
                    <p className="text-[10px] text-slate-500">Special Feature</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-black text-slate-900">Bloomberg</span>
                    <p className="text-[10px] text-slate-500">Tech Innovation</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-black text-slate-900">Republic TV</span>
                    <p className="text-[10px] text-slate-500">Startup Spotlight</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-black text-slate-900">DD News</span>
                    <p className="text-[10px] text-slate-500">National Impact</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">Press Archives</span>
                <div className="inline-flex items-center text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform">
                  <span>Explore Press</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* =================================================================== */}
          {/* CARD 8: INSTITUTIONAL PARTNERS & EPC ECOSYSTEM (2 COLS)             */}
          {/* =================================================================== */}
          <Link
            href="/about-us/institutional-partners"
            className="group relative lg:col-span-2 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0842A0] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(8,66,160,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-100/70 text-[#073683]">
                08 / 08 • STRATEGIC ALLIANCES
              </span>
              <span className="text-xs font-bold text-[#0842A0]">Ecosystem Partners</span>
            </div>

            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-950 group-hover:text-[#0842A0] transition-colors tracking-tight mb-2">
                  Institutional Partners & Tier-1 EPCs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Partnered with premier venture incubators, state industrial associations, and top infrastructure EPC contractors to build resilient labor supply chains.
                </p>

                {/* Partner Network Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-bold text-slate-900">Villgro</span>
                    <p className="text-[10px] text-slate-500">Impact Partner</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-bold text-slate-900">GDI</span>
                    <p className="text-[10px] text-slate-500">Global Dev Inc</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-bold text-slate-900">BIA</span>
                    <p className="text-[10px] text-slate-500">Industries Assoc</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-xs font-bold text-slate-900">Tier-1 EPCs</span>
                    <p className="text-[10px] text-slate-500">Infrastructure</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">National Alliances</span>
                <div className="inline-flex items-center text-xs font-bold text-[#0842A0] group-hover:translate-x-1 transition-transform">
                  <span>Explore Partners</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
