"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Cpu,
  Users,
  Compass,
  ArrowRight,
  HardHat,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface BookSlide {
  id: string;
  chapter: string;
  badge: string;
  tabLabel: string;
  bgWord: string;
  headline: string;
  quote: string;
  name: string;
  role: string;
  cutoutImage: string;
  badgeIcon: React.ElementType;
  accentBadge: string;
  floatingTag: string;
  popAccent: string; // e.g. "👷 Hard-Hat Verified", "⚡ Sub-2hr Dispatch", "🏗️ 15+ Hubs"
}

const BOOK_SLIDES: BookSlide[] = [
  {
    id: "founder",
    chapter: "CHAPTER 01 / 03",
    badge: "FOUNDER'S VISION",
    tabLabel: "Founder",
    bgWord: "VISION",
    headline: "Rozgaar, Suraksha aur Samman",
    quote:
      "India’s tradesmen build our nation’s skyline. Our mission is to build their dignity, eliminate middlemen, and guarantee every earned rupee reaches their hands on time.",
    name: "Chandrashekhar Mandal",
    role: "Founder & Chief Executive Officer",
    cutoutImage: "/images/team/chandrashekhar-mandal-cutout.png",
    badgeIcon: Award,
    accentBadge: "STPI & CIMPS Incubated",
    floatingTag: "National Social Innovator",
    popAccent: "👷 Shramik Samman",
  },
  {
    id: "cto",
    chapter: "CHAPTER 02 / 03",
    badge: "SYSTEM ARCHITECTURE",
    tabLabel: "CTO",
    bgWord: "SYSTEM",
    headline: "Engineering India's 1st Labor Stack",
    quote:
      "Sub-2 hour biometric KYC dispatching 3.5 Lakh craftsmen directly to enterprise sites with transparent, zero-deduction direct bank transfer.",
    name: "Ankur Gupta",
    role: "Chief Technology Officer",
    cutoutImage: "/images/team/ankur-gupta-cutout.png",
    badgeIcon: Cpu,
    accentBadge: "Instant Biometric KYC",
    floatingTag: "Core Architecture",
    popAccent: "⚡ Sub-2hr SLA",
  },
  {
    id: "team",
    chapter: "CHAPTER 03 / 03",
    badge: "FIELD MARSHALS",
    tabLabel: "Core Team",
    bgWord: "GROUND",
    headline: "Standing Shoulder-to-Shoulder at Dawn",
    quote:
      "From STPI Noida HQ to active job sites across 6,000+ towns, standing shoulder-to-shoulder with contractors and tradesmen to formalize unorganized labor.",
    name: "The DLC Core Team",
    role: "Operations, Engineering & Field Marshals",
    cutoutImage: "/images/team/dlc-core-team.png",
    badgeIcon: Users,
    accentBadge: "6,000+ Towns • 15+ Hubs",
    floatingTag: "On-Site 24/7 Operations",
    popAccent: "🏗️ 24/7 Site Support",
  },
];

export default function LeadershipBookCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [targetIdx, setTargetIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const flipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = BOOK_SLIDES.length;
  const currentSlide = BOOK_SLIDES[currentIdx];

  // Advance to next slide with 3D page flip
  const triggerFlip = (direction: "next" | "prev", toIndex?: number) => {
    if (isFlipping) return;

    const nextIndex =
      toIndex !== undefined
        ? toIndex
        : direction === "next"
        ? (currentIdx + 1) % total
        : (currentIdx - 1 + total) % total;

    if (nextIndex === currentIdx) return;

    setFlipDirection(direction);
    setTargetIdx(nextIndex);
    setIsFlipping(true);

    if (flipTimerRef.current) clearTimeout(flipTimerRef.current);

    // 700ms animation duration
    flipTimerRef.current = setTimeout(() => {
      setCurrentIdx(nextIndex);
      setIsFlipping(false);
      setTargetIdx(null);
    }, 700);
  };

  const handleNext = () => triggerFlip("next");
  const handlePrev = () => triggerFlip("prev");

  // Auto rotation every 7 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || isFlipping) return;

    autoPlayRef.current = setInterval(() => {
      triggerFlip("next");
    }, 7000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, isFlipping, currentIdx]);

  useEffect(() => {
    return () => {
      if (flipTimerRef.current) clearTimeout(flipTimerRef.current);
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const incomingSlide = BOOK_SLIDES[targetIdx !== null ? targetIdx : currentIdx];

  return (
    <section
      className="w-full bg-[#FAFAFC] py-8 sm:py-10 lg:py-12 relative overflow-hidden select-none border-y border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Leadership Pop-up Book Carousel"
    >
      {/* ===================================================================== */}
      {/* BLUEPRINT & CONSTRUCTION VECTOR BACKGROUND (Compact)                   */}
      {/* ===================================================================== */}
      
      {/* Top-Right Tower Crane Motif */}
      <div className="absolute -top-6 -right-6 w-[280px] sm:w-[420px] lg:w-[500px] h-[280px] sm:h-[420px] lg:h-[500px] pointer-events-none select-none z-0 opacity-25 overflow-hidden">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <circle cx="500" cy="100" r="220" stroke="#0C59D4" strokeWidth="1.2" strokeDasharray="5 5" />
          <circle cx="500" cy="100" r="320" stroke="#38BDF8" strokeWidth="1.2" />
          <g opacity="0.5" transform="translate(260, 60)">
            <rect x="180" y="60" width="18" height="340" fill="none" stroke="#0C59D4" strokeWidth="1.8" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i}>
                <line x1="180" y1={60 + i * 50} x2="198" y2={105 + i * 50} stroke="#0C59D4" strokeWidth="1.2" />
                <line x1="198" y1={60 + i * 50} x2="180" y2={105 + i * 50} stroke="#0C59D4" strokeWidth="1.2" />
              </g>
            ))}
            <polygon points="189,0 175,45 203,45" fill="none" stroke="#0C59D4" strokeWidth="1.8" />
            <line x1="-80" y1="45" x2="280" y2="45" stroke="#0C59D4" strokeWidth="2.5" />
            <line x1="-80" y1="60" x2="280" y2="60" stroke="#0C59D4" strokeWidth="1.5" />
            <rect x="100" y="60" width="12" height="7" rx="1" fill="#0C59D4" opacity="0.6" />
            <line x1="106" y1="67" x2="106" y2="150" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="75" y="150" width="62" height="6" rx="1" fill="#F59E0B" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Bottom-Left Drafting Compass Arcs */}
      <div className="absolute -bottom-8 -left-8 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] pointer-events-none select-none z-0 opacity-20 overflow-hidden">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="80" cy="320" r="180" stroke="#0C59D4" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="80" cy="320" r="260" stroke="#38BDF8" strokeWidth="1" />
          {[0, 30, 60, 90, 120].map((y, idx) => (
            <line key={idx} x1="0" y1={y} x2={y * 2.2} y2="400" stroke="#0C59D4" strokeWidth="0.8" strokeOpacity="0.12" />
          ))}
        </svg>
      </div>

      {/* Main Viewport-Contained Wrapper */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* COMPACT SECTION HEADER (Single Viewport Fit)                           */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0C59D4] text-[11px] font-bold uppercase tracking-wider mb-1 shadow-2xs">
              <Compass className="w-3 h-3 text-[#0C59D4]" />
              <span>Leadership Monograph</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              The Visionaries Formalizing <span className="text-[#0C59D4]">India&apos;s Workforce</span>
            </h2>
          </div>

          {/* Quick Folio Status */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="font-bold text-[#0C59D4]">{currentSlide.chapter}</span>
            <span>•</span>
            <span>{currentSlide.badge}</span>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 3D POP-UP OPEN BOOK SPREAD CONTAINER                                  */}
        {/* ===================================================================== */}
        <div className="relative w-full py-4">
          
          {/* External Floating Navigation Arrows (Inspired by reference video chalk arrows) */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFlipping}
            className="absolute -left-2 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#0C59D4] border border-slate-200/90 hover:border-blue-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-40 cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isFlipping}
            className="absolute -right-2 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#0C59D4] border border-slate-200/90 hover:border-blue-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-40 cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* The 3D Open Book Spread (Landscape Aspect Ratio ~2:1) */}
          <div
            className="relative w-full h-[400px] sm:h-[430px] lg:h-[450px] rounded-3xl sm:rounded-[2.2rem] bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(12,89,212,0.15)] overflow-visible"
            style={{ perspective: "1800px" }}
          >
            {/* Center Book Spine Crease Shadow (3D depth fold down middle) */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-30 bg-gradient-to-r from-slate-300/30 via-slate-400/50 to-slate-300/30 shadow-inner" />

            {/* Subtle Blueprint Grid Pattern across pages */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 rounded-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(#0C59D4 1px, transparent 1px), linear-gradient(90deg, #0C59D4 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* =============================================================== */}
            {/* BASE SPREAD (Underneath the flipping leaf)                      */}
            {/* =============================================================== */}
            <div className="w-full h-full flex flex-col md:flex-row relative z-10 rounded-3xl overflow-hidden md:overflow-visible">
              
              {/* LEFT PAGE (Base) */}
              <div className="w-full md:w-1/2 h-full p-5 sm:p-7 lg:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80 bg-gradient-to-br from-blue-50/70 via-slate-50/50 to-white relative overflow-visible">
                
                {/* Architectural Scale Header */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-200/60 z-20">
                  <span className="flex items-center gap-1.5 font-bold text-[#0C59D4]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C59D4] animate-pulse" />
                    {isFlipping && flipDirection === "prev" ? incomingSlide.chapter : currentSlide.chapter}
                  </span>
                  <span>SCALE 1:1 • VERIFIED PROFILE</span>
                </div>

                {/* Big Ghosted Architectural Background Typography (like "PRIVILEGE") */}
                <div className="absolute inset-x-4 top-14 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
                  <span className="text-[72px] sm:text-[90px] lg:text-[110px] font-black tracking-tighter text-blue-900/[0.04] leading-none uppercase">
                    {isFlipping && flipDirection === "prev" ? incomingSlide.bgWord : currentSlide.bgWord}
                  </span>
                </div>

                {/* 3D POP-UP CUTOUT PORTRAIT (Popping OUT of book boundary!) */}
                <div className="relative flex-1 flex items-end justify-center z-20 overflow-visible">
                  
                  {/* Floating 3D Pop Accent Ribbon (Top-Right of Cutout) */}
                  <div className="absolute -top-6 sm:-top-10 right-2 sm:right-6 z-40 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full shadow-lg border border-amber-300 flex items-center gap-1">
                    <span>
                      {isFlipping && flipDirection === "prev"
                        ? incomingSlide.popAccent
                        : currentSlide.popAccent}
                    </span>
                  </div>

                  {/* Slide 1 & 2: Real Cutout PNG Popping Out of Frame */}
                  {currentIdx !== 2 || (isFlipping && targetIdx !== 2) ? (
                    <div
                      className="absolute -top-12 sm:-top-18 lg:-top-22 w-[240px] sm:w-[280px] lg:w-[320px] h-[340px] sm:h-[400px] lg:h-[430px] pointer-events-none z-30"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                      }}
                    >
                      <Image
                        src={
                          isFlipping && flipDirection === "prev"
                            ? incomingSlide.cutoutImage
                            : currentSlide.cutoutImage
                        }
                        alt={currentSlide.name}
                        fill
                        sizes="(max-width: 768px) 280px, 340px"
                        priority
                        className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(12,89,212,0.35)] transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    /* Slide 3: Team Photo with 3D Pop-Up Frame */
                    <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl bg-white border border-blue-200/90 shadow-xl overflow-hidden group mb-4 z-20">
                      <div className="absolute top-2 left-2 z-20 text-[9px] font-mono text-[#0C59D4] bg-white/90 px-1.5 py-0.5 rounded border border-blue-100 font-bold">
                        GROUND CREW • STPI NOIDA
                      </div>
                      <Image
                        src="/images/team/dlc-core-team.png"
                        alt="Digital Labour Chowk Core Team"
                        fill
                        sizes="340px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* 3D Floating Pop-Out Pill Badge (Overlapping Bottom/Side) */}
                  <div className="absolute bottom-2 left-2 right-2 sm:left-4 sm:right-4 z-40 bg-white/95 backdrop-blur-md border border-blue-200/90 rounded-xl px-3 py-2 shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                        {isFlipping && flipDirection === "prev" ? incomingSlide.name : currentSlide.name}
                      </h4>
                      <p className="text-[10px] text-[#0C59D4] font-bold">
                        {isFlipping && flipDirection === "prev" ? incomingSlide.role : currentSlide.role}
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0C59D4] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Left Page Bottom Folio */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 z-20">
                  <div className="flex items-center gap-1 font-bold text-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0C59D4]" />
                    <span>
                      {isFlipping && flipDirection === "prev"
                        ? incomingSlide.accentBadge
                        : currentSlide.accentBadge}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">PAGE L</span>
                </div>
              </div>

              {/* RIGHT PAGE (Base: Shows incoming slide right content when flipping next) */}
              <div className="w-full md:w-1/2 h-full p-5 sm:p-7 lg:p-9 flex flex-col justify-between bg-white relative">
                
                {/* Page Folio Header */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-200/60">
                  <span className="text-[#0C59D4] font-bold">DIGITAL LABOUR CHOWK ARCHIVES</span>
                  <span>
                    FOLIO 0
                    {(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).id === "founder"
                      ? "1"
                      : (isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).id === "cto"
                      ? "2"
                      : "3"}
                  </span>
                </div>

                {/* Big Ghosted Wordmark on Right Page */}
                <div className="absolute inset-x-4 top-14 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
                  <span className="text-[72px] sm:text-[90px] lg:text-[110px] font-black tracking-tighter text-slate-900/[0.03] leading-none uppercase">
                    {(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).bgWord}
                  </span>
                </div>

                {/* Clean, Punchy Narrative & Quotation (No clutter!) */}
                <div className="my-auto py-2 z-10">
                  
                  {/* Display Quote Icon */}
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0C59D4] mb-3 shadow-2xs">
                    <Quote className="w-4 h-4 fill-[#0C59D4]/20" />
                  </div>

                  {/* Punchy Bold Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                    &ldquo;{(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).headline}&rdquo;
                  </h3>

                  {/* 1-2 Sentence Elegant Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).quote}
                  </p>

                  {/* Accompanying Tag Pill */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-700">
                    <Sparkles className="w-3 h-3 text-[#0C59D4]" />
                    <span>
                      {(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).floatingTag}
                    </span>
                  </div>
                </div>

                {/* Bottom Author Credentials & Link */}
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between z-10">
                  <div>
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      {(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {(isFlipping && flipDirection === "next" ? incomingSlide : currentSlide).role}
                    </span>
                  </div>

                  <Link
                    href="/about-us/leadership"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0C59D4] hover:text-blue-700 hover:underline group"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

              </div>

            </div>

            {/* =============================================================== */}
            {/* 3D TURNING PAGE LEAF (Realistic Page Flip Animation)            */}
            {/* =============================================================== */}
            {isFlipping && flipDirection === "next" && (
              <div
                className="hidden md:block absolute top-0 left-1/2 w-1/2 h-full z-40 rounded-r-3xl overflow-hidden shadow-2xl transition-transform duration-700 ease-in-out"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-180deg)",
                }}
              >
                {/* FRONT FACE OF TURNING LEAF (Current Slide Right Page) */}
                <div
                  className="absolute inset-0 bg-white p-5 sm:p-7 lg:p-9 flex flex-col justify-between border-l border-slate-200/50 shadow-inner"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-200/60">
                    <span className="text-[#0C59D4] font-bold">DIGITAL LABOUR CHOWK ARCHIVES</span>
                    <span>FOLIO 0{currentIdx + 1}</span>
                  </div>

                  <div className="my-auto py-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0C59D4] mb-3">
                      <Quote className="w-4 h-4 fill-[#0C59D4]/20" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
                      &ldquo;{currentSlide.headline}&rdquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {currentSlide.quote}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-black text-slate-900 block leading-tight">
                        {currentSlide.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">{currentSlide.role}</span>
                    </div>
                  </div>
                </div>

                {/* BACK FACE OF TURNING LEAF (Incoming Slide Left Page) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-slate-50/90 p-5 sm:p-7 lg:p-9 flex flex-col justify-between border-r border-slate-200/80 shadow-2xl"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#0C59D4] font-bold pb-2 border-b border-slate-200/60">
                    <span>{incomingSlide.chapter}</span>
                    <span>SCALE 1:1</span>
                  </div>

                  <div className="my-auto text-center flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">
                      {incomingSlide.name}
                    </span>
                    <span className="text-xs font-bold text-[#0C59D4] mt-1">
                      {incomingSlide.role}
                    </span>
                    <div className="mt-3 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[11px] font-bold text-[#0C59D4]">
                      {incomingSlide.accentBadge}
                    </div>
                  </div>

                  <div className="text-center text-[10px] font-mono text-slate-400">
                    DLC VERIFIED MONOGRAPH
                  </div>
                </div>
              </div>
            )}

            {/* 3D TURNING PAGE LEAF FOR PREVIOUS DIRECTION */}
            {isFlipping && flipDirection === "prev" && (
              <div
                className="hidden md:block absolute top-0 left-0 w-1/2 h-full z-40 rounded-l-3xl overflow-hidden shadow-2xl transition-transform duration-700 ease-in-out"
                style={{
                  transformOrigin: "right center",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(180deg)",
                }}
              >
                {/* FRONT FACE (Current Left Page) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white p-5 sm:p-7 lg:p-9 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="text-[10px] font-mono text-[#0C59D4] font-bold">
                    {currentSlide.chapter}
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-black text-slate-900">{currentSlide.name}</span>
                    <span className="text-xs text-[#0C59D4] block">{currentSlide.role}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">SCALE 1:1</div>
                </div>

                {/* BACK FACE (Incoming Right Page) */}
                <div
                  className="absolute inset-0 bg-white p-5 sm:p-7 lg:p-9 flex flex-col justify-between border-l border-slate-200/60"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(-180deg)",
                  }}
                >
                  <div className="text-[10px] font-mono text-[#0C59D4] font-bold">
                    FOLIO {incomingSlide.chapter}
                  </div>
                  <div className="my-auto">
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      &ldquo;{incomingSlide.headline}&rdquo;
                    </h3>
                    <p className="text-xs text-slate-600">{incomingSlide.quote}</p>
                  </div>
                  <div className="text-xs font-black text-slate-900">{incomingSlide.name}</div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* ===================================================================== */}
        {/* COMPACT BOTTOM DOT PAGINATION & CHAPTER CONTROLS                      */}
        {/* ===================================================================== */}
        <div className="mt-3 sm:mt-5 flex items-center justify-between">
          
          {/* Chapter Selector Buttons */}
          <div className="flex items-center gap-2">
            {BOOK_SLIDES.map((slide, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => triggerFlip(idx > currentIdx ? "next" : "prev", idx)}
                  disabled={isFlipping}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-white border-[#0C59D4] text-[#0C59D4] shadow-xs ring-1 ring-blue-500/20"
                      : "bg-white/70 hover:bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#0C59D4]" : "bg-slate-300"
                    }`}
                  />
                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Dot Strip (matching reference bottom planets/dots) */}
          <div className="flex items-center gap-1.5">
            {BOOK_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => triggerFlip(idx > currentIdx ? "next" : "prev", idx)}
                disabled={isFlipping}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIdx === idx
                    ? "w-6 h-2 bg-[#0C59D4]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Jump to page ${idx + 1}`}
              />
            ))}
          </div>

          {/* Auto-Rotation State */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"
              }`}
            />
            <span>{isPaused ? "Paused" : "Auto-flipping"}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
