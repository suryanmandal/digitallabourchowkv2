"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  Building2,
  Users,
  HardHat,
  Cpu,
  Compass,
  ArrowRight,
  Bookmark,
  CheckCircle2,
} from "lucide-react";

interface LeaderSlide {
  id: string;
  chapter: string;
  folio: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
  imageAlt: string;
  badge: string;
  badgeIcon: React.ElementType;
  quote: string;
  story: string;
  pills: string[];
  signatureTitle: string;
}

const LEADER_SLIDES: LeaderSlide[] = [
  {
    id: "founder",
    chapter: "CHAPTER 01 / 03",
    folio: "FOLIO I • THE FOUNDER'S VISION",
    name: "Chandrashekhar Mandal",
    role: "Founder & Chief Executive Officer",
    tagline: "Pioneering Dignity, Fair Daily Wages & Digital Identity for India's 5 Crore+ Construction Tradesmen.",
    image: "/images/team/chandrashekhar-mandal-founder.png",
    imageAlt: "Chandrashekhar Mandal - Founder & CEO of Digital Labour Chowk",
    badge: "Social Innovation Pioneer",
    badgeIcon: Award,
    quote:
      "Rozgaar, Suraksha aur Samman — India’s construction workforce builds our nation’s skyline; our sacred mission is to build their dignity, eliminate exploitative middlemen, and guarantee every single rupee they earn reaches their hands on time.",
    story:
      "Incubated at CIMPS and recognized by STPI under the Ministry of Electronics & IT, Chandrashekhar founded Digital Labour Chowk to eliminate the indignity of physical roadside labor chowks. From grassroots roots in Bihar to national leadership across 15+ industrial hubs, his vision has formalized over 3,50,000 verified craftsmen across Bharat.",
    pills: ["CIMPS Incubation", "Hitachi National Award", "Bharat Ke Super Founders", "TiE Global Finalist"],
    signatureTitle: "Founder & CEO, Digital Labour Chowk",
  },
  {
    id: "cto",
    chapter: "CHAPTER 02 / 03",
    folio: "FOLIO II • THE TECHNOLOGY BLUEPRINT",
    name: "Ankur Gupta",
    role: "Chief Technology Officer",
    tagline: "Architecting India’s 1st Decentralized Labor Stack: Instant Biometric KYC & Algorithmic Dispatch.",
    image: "/images/team/ankur-gupta-cto.png",
    imageAlt: "Ankur Gupta - Chief Technology Officer of Digital Labour Chowk",
    badge: "Architect & Core Systems",
    badgeIcon: Cpu,
    quote:
      "True engineering excellence isn’t measured in server clusters; it is measured when a rural mason gets verified in seconds on site, is matched to an enterprise project, and receives transparent, guaranteed wages directly into his bank account without a single deduction.",
    story:
      "Ankur spearheads DLC’s technology core. He engineered India’s first decentralized construction labor platform—integrating government Aadhaar biometric KYC, algorithmic site matching, geo-fenced daily muster rolls, and statutory PF/ESIC compliance into a resilient, high-availability mobile ecosystem.",
    pills: ["Sub-2hr SLA Dispatch", "Biometric Aadhaar KYC", "Geofenced Daily Muster", "100% DBT Ledger"],
    signatureTitle: "Chief Technology Officer, Digital Labour Chowk",
  },
  {
    id: "team",
    chapter: "CHAPTER 03 / 03",
    folio: "FOLIO III • THE GROUND REVOLUTION",
    name: "The DLC Core Team",
    role: "Operations, Engineering & Field Marshals",
    tagline: "Standing Shoulder-to-Shoulder with Tradesmen & Builders from Dawn Across 6,000+ Towns.",
    image: "/images/team/dlc-core-team.png",
    imageAlt: "Digital Labour Chowk Core Team and Ground Marshals",
    badge: "Nation Builders • On-Site 24/7",
    badgeIcon: Users,
    quote:
      "We are not an armchair software company; we are on the ground before the sun rises. From STPI Noida HQ to our regional desk in Darbhanga and active job sites across India, we stand shoulder-to-shoulder with contractors and tradesmen to formalize unorganized labor.",
    story:
      "Behind every verified gang dispatch is a relentless team of site operations marshals, software architects, compliance specialists, and contractor account leads. Driven by Shramik Samman, the DLC workforce movement has bridged 20,000+ builders with 3,50,000+ artisans with zero middleman exploitation.",
    pills: ["6,000+ Towns Covered", "20,000+ Contractors", "15+ Industrial Hubs", "24/7 Ground Helpdesk"],
    signatureTitle: "The Team Formalizing India's Workforce",
  },
];

export default function LeadershipBookCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeSlide = LEADER_SLIDES[currentIdx];
  const BadgeIcon = activeSlide.badgeIcon;

  // Auto-rotation every 7 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      setDirection("next");
      setCurrentIdx((prev) => (prev + 1) % LEADER_SLIDES.length);
    }, 7000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, currentIdx]);

  const handleNext = () => {
    setDirection("next");
    setCurrentIdx((prev) => (prev + 1) % LEADER_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIdx((prev) => (prev - 1 + LEADER_SLIDES.length) % LEADER_SLIDES.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIdx ? "next" : "prev");
    setCurrentIdx(idx);
  };

  return (
    <section
      className="w-full bg-[#FAFAFC] py-16 sm:py-20 lg:py-24 relative overflow-hidden select-none border-y border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="DLC Leadership & Founding Team Monograph"
    >
      {/* ===================================================================== */}
      {/* BACKGROUND ARCHITECTURAL BLUEPRINT MOTIFS (Inspired by Section 5)     */}
      {/* ===================================================================== */}
      
      {/* Top-Right Tower Crane & Drafting Contour Silhouette */}
      <div className="absolute -top-10 -right-10 w-[360px] sm:w-[520px] lg:w-[680px] h-[360px] sm:h-[520px] lg:h-[680px] pointer-events-none select-none z-0 opacity-40 overflow-hidden">
        <svg viewBox="0 0 720 720" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <defs>
            <linearGradient id="bookCraneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0C59D4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="bookPoly1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0C59D4" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Sweeping Blueprint Arcs */}
          <circle cx="680" cy="40" r="260" stroke="#0C59D4" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="6 6" />
          <circle cx="680" cy="40" r="380" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.12" />
          <circle cx="680" cy="40" r="520" stroke="#0C59D4" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="12 12" />

          {/* Stylized Tower Crane Vector */}
          <g opacity="0.4" transform="translate(320, 60)">
            <rect x="220" y="80" width="24" height="420" fill="none" stroke="#0C59D4" strokeWidth="2" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <g key={i}>
                <line x1="220" y1={80 + i * 50} x2="244" y2={130 + i * 50} stroke="#0C59D4" strokeWidth="1.5" />
                <line x1="244" y1={80 + i * 50} x2="220" y2={130 + i * 50} stroke="#0C59D4" strokeWidth="1.5" />
              </g>
            ))}
            <polygon points="232,0 216,55 248,55" fill="none" stroke="#0C59D4" strokeWidth="2" />
            <line x1="-120" y1="55" x2="360" y2="55" stroke="#0C59D4" strokeWidth="3" />
            <line x1="-120" y1="75" x2="360" y2="75" stroke="#0C59D4" strokeWidth="2" />
            <rect x="120" y="75" width="16" height="8" rx="1" fill="#0C59D4" opacity="0.6" />
            <line x1="128" y1="83" x2="128" y2="180" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="90" y="180" width="76" height="8" rx="1" fill="#F59E0B" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Bottom-Left Compass & Steel Column Blueprint Motifs */}
      <div className="absolute -bottom-16 -left-16 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] pointer-events-none select-none z-0 opacity-30 overflow-hidden">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="100" cy="400" r="220" stroke="#0C59D4" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="5 5" />
          <circle cx="100" cy="400" r="320" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.12" />
          {/* Construction Isometric Grid lines */}
          {[0, 40, 80, 120, 160, 200].map((y, idx) => (
            <line key={idx} x1="0" y1={y} x2={y * 2.5} y2="500" stroke="#0C59D4" strokeWidth="1" strokeOpacity="0.08" />
          ))}
        </svg>
      </div>

      {/* Ambient Radial Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0C59D4] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#0C59D4]" />
              <span>Leadership & Core Architects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.12]">
              The Visionaries Formalizing <br className="hidden sm:inline" />
              <span className="text-[#0C59D4]">India&apos;s Construction Workforce</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              An interactive monograph chronicling the leadership, engineering architects, and ground marshals building Digital Labour Chowk.
            </p>
          </div>

          {/* Top Manual Nav Buttons (Compass Style) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-[#0C59D4] hover:border-blue-400/80 hover:bg-blue-50/50 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous chapter"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-[#0C59D4] hover:border-blue-400/80 hover:bg-blue-50/50 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next chapter"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 3D OPEN-BOOK ARCHITECTURAL PORTFOLIO SPREAD (White Canvas)            */}
        {/* ===================================================================== */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.8rem] bg-white border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(12,89,212,0.16)] overflow-hidden transition-all duration-500">
          
          {/* Subtle Bookmark Ribbon Hanging from Top */}
          <div className="absolute top-0 right-14 sm:right-24 z-30 w-8 sm:w-9 h-14 sm:h-16 bg-[#0C59D4] shadow-md flex items-end justify-center pb-2 text-white">
            <Bookmark className="w-4 h-4 fill-white" />
          </div>

          {/* Subtle Blueprint Grid Pattern on the Open Pages */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
            style={{
              backgroundImage:
                "linear-gradient(#0C59D4 1px, transparent 1px), linear-gradient(90deg, #0C59D4 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Central Book Spine Crease / Binding Shadow (Only visible on lg screens) */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20 bg-gradient-to-r from-slate-200/40 via-slate-300/60 to-slate-200/40 shadow-inner" />

          {/* Open Book Spread Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[620px]">
            
            {/* ================================================================= */}
            {/* LEFT PAGE: Visual Plate & Architectural Portrait Treated Plate    */}
            {/* ================================================================= */}
            <div className="p-6 sm:p-10 lg:p-12 lg:pr-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/70 bg-gradient-to-br from-slate-50/70 via-blue-50/30 to-white relative">
              
              {/* Technical Page Header Details */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pb-4 border-b border-slate-200/70">
                <span className="flex items-center gap-1.5 font-bold text-[#0C59D4]">
                  <span className="w-2 h-2 rounded-full bg-[#0C59D4] animate-pulse" />
                  {activeSlide.chapter}
                </span>
                <span>{activeSlide.folio}</span>
              </div>

              {/* Portrait Display Frame with Blueprint Drafting Brackets */}
              <div className="relative my-6 sm:my-8 flex items-center justify-center">
                
                {/* Outer Architectural Framing Box */}
                <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-3xl bg-white border border-blue-200/80 shadow-lg overflow-hidden group">
                  
                  {/* Subtle Blueprint Measurement Ticks */}
                  <div className="absolute top-2 left-2 z-20 text-[9px] font-mono text-[#0C59D4]/70 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-blue-200">
                    SCALE 1:1 • VERIFIED PROFILE
                  </div>

                  {/* Corner Drafting Crosshairs */}
                  <span className="absolute top-2 right-2 text-[#0C59D4]/40 font-mono text-xs z-20">⌜</span>
                  <span className="absolute bottom-2 left-2 text-[#0C59D4]/40 font-mono text-xs z-20">⌞</span>
                  <span className="absolute bottom-2 right-2 text-[#0C59D4]/40 font-mono text-xs z-20">⌟</span>

                  {/* Subtle Gradient Backing Behind Image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-slate-100/60 to-blue-100/40 pointer-events-none" />

                  {/* The Portrait / Team Image */}
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 420px"
                    className="object-contain sm:object-cover object-center select-none p-2 sm:p-3 transition-transform duration-700 group-hover:scale-102"
                  />

                  {/* Floating Identity Pill on Image Bottom */}
                  <div className="absolute inset-x-3 bottom-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-2.5 shadow-md flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                        {activeSlide.name}
                      </h4>
                      <p className="text-[10px] text-[#0C59D4] font-bold mt-0.5">
                        {activeSlide.role}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-blue-100/80 flex items-center justify-center text-[#0C59D4] shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Page Folio / Credentials Strip */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <BadgeIcon className="w-4 h-4 text-[#0C59D4]" />
                  <span>{activeSlide.badge}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">DLC ARCHIVAL MONOGRAPH</span>
              </div>
            </div>

            {/* ================================================================= */}
            {/* RIGHT PAGE: The Narrative, Famous Quotation & Strategic Blueprint */}
            {/* ================================================================= */}
            <div className="p-6 sm:p-10 lg:p-12 lg:pl-14 flex flex-col justify-between bg-white relative">
              
              {/* Technical Folio Header Details */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pb-4 border-b border-slate-200/70">
                <span className="text-[#0C59D4] font-bold">DIGITAL LABOUR CHOWK FOUNDATION</span>
                <span>PAGE 0{currentIdx + 1} OF 03</span>
              </div>

              {/* Main Narrative & Quote Body */}
              <div className="my-auto py-6 sm:py-8">
                
                {/* Big Display Quote Mark */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0C59D4] mb-4 shadow-xs">
                  <Quote className="w-6 h-6 fill-[#0C59D4]/20" />
                </div>

                {/* Famous Quotation */}
                <blockquote className="text-lg sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-[1.25] mb-5">
                  &ldquo;{activeSlide.quote}&rdquo;
                </blockquote>

                {/* Ground Reality Story / Mission Context */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {activeSlide.story}
                </p>

                {/* Key Institutional Credentials & Accreditation Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {activeSlide.pills.map((pill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      <Sparkles className="w-3 h-3 text-[#0C59D4]" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Sign-off & Page Nav Links */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900">{activeSlide.name}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{activeSlide.signatureTitle}</span>
                </div>

                <Link
                  href="/about-us/leadership"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C59D4] hover:text-blue-700 hover:underline group w-fit"
                >
                  <span>Explore Leadership Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* ===================================================================== */}
        {/* BOTTOM INTERACTIVE CHAPTER TABS & ROTATION TIMELINE INDICATOR         */}
        {/* ===================================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* 3 Chapter Selector Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {LEADER_SLIDES.map((slide, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-[#0C59D4] shadow-md ring-2 ring-blue-500/10"
                      : "bg-white/80 hover:bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive ? "bg-blue-100 text-[#0C59D4]" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className={`text-xs font-bold ${isActive ? "text-[#0C59D4]" : "text-slate-800"}`}>
                      {slide.name.split(" ")[0]}
                    </span>
                  </div>
                  {/* Active Slide Progress Line */}
                  {isActive && !isPaused && (
                    <div className="w-full h-0.5 bg-blue-100 rounded-full mt-2 overflow-hidden">
                      <div className="w-full h-full bg-[#0C59D4] animate-[pulse_2s_ease-in-out_infinite]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Rotation Status Hint */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isPaused ? "Rotation paused on hover" : "Auto-rotating • Hover to pause"}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
