"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Cpu,
  Users,
  Building2,
  HeartHandshake,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export interface BookSlide {
  id: string;
  chapter: string;
  badge: string;
  tabLabel: string;
  displayWord: string; // Giant word that spans across the center fold (e.g. "VISION", "SYSTEM", "GROUND")
  heading: string;
  body: string;
  authorName: string;
  authorRole: string;
  profileLink?: string;
  palette: {
    bg: string;
    text: string;
    wordmarkColor: string;
    accent: string;
    pillBg: string;
    pillBorder: string;
    pillText: string;
    dotColor: string;
  };
  cutoutImage?: string;
  fullImage?: string;
  floatingBadge: string;
  metricBadge: string;
}

export const BOOK_SLIDES: BookSlide[] = [
  {
    id: "founder",
    chapter: "CHAPTER 01 / 06",
    badge: "FOUNDER'S VISION",
    tabLabel: "Founder",
    displayWord: "VISION",
    heading: "Rozgaar, Suraksha aur Samman",
    body: "India’s tradesmen build our nation’s skyline. Our sacred mission is to eliminate roadside labor chowks, destroy middleman exploitation, and guarantee every earned rupee reaches their hands on time.",
    authorName: "Chandrashekhar Mandal",
    authorRole: "Founder & Chief Executive Officer",
    profileLink: "/about-us/leadership",
    palette: {
      bg: "#0A4BB5", // Deep Royal Brand Blue
      text: "#FFFFFF",
      wordmarkColor: "rgba(255, 255, 255, 0.14)",
      accent: "#F59E0B", // Construction Amber
      pillBg: "rgba(255, 255, 255, 0.15)",
      pillBorder: "rgba(255, 255, 255, 0.3)",
      pillText: "#FFFFFF",
      dotColor: "#0A4BB5",
    },
    cutoutImage: "/images/team/chandrashekhar-mandal-cutout.png",
    floatingBadge: "👷 Shramik Samman",
    metricBadge: "STPI & CIMPS Incubated",
  },
  {
    id: "cto",
    chapter: "CHAPTER 02 / 06",
    badge: "SYSTEM ARCHITECTURE",
    tabLabel: "CTO",
    displayWord: "SYSTEM",
    heading: "Engineering India's 1st Labor Stack",
    body: "Sub-2 hour biometric Aadhaar KYC dispatching 3.5 Lakh skilled craftsmen directly to enterprise sites with transparent, zero-deduction direct bank transfer and real-time digital muster rolls.",
    authorName: "Ankur Gupta",
    authorRole: "Chief Technology Officer",
    profileLink: "/about-us/leadership",
    palette: {
      bg: "#0F172A", // Slate Navy 0F172A
      text: "#FFFFFF",
      wordmarkColor: "rgba(56, 189, 248, 0.15)",
      accent: "#38BDF8", // Cyan
      pillBg: "rgba(56, 189, 248, 0.15)",
      pillBorder: "rgba(56, 189, 248, 0.35)",
      pillText: "#38BDF8",
      dotColor: "#0F172A",
    },
    cutoutImage: "/images/team/ankur-gupta-cutout.png",
    floatingBadge: "⚡ Sub-2hr Dispatch",
    metricBadge: "Biometric Aadhaar KYC",
  },
  {
    id: "team",
    chapter: "CHAPTER 03 / 06",
    badge: "FIELD MARSHALS",
    tabLabel: "Core Team",
    displayWord: "GROUND",
    heading: "Standing Shoulder-to-Shoulder at Dawn",
    body: "From STPI Noida HQ to active job sites across 6,000+ towns, standing shoulder-to-shoulder with contractors and tradesmen from 5 AM to formalize unorganized construction labor.",
    authorName: "The DLC Core Team",
    authorRole: "Operations, Engineering & Field Marshals",
    profileLink: "/about-us/careers",
    palette: {
      bg: "#064E3B", // Forest Emerald
      text: "#FFFFFF",
      wordmarkColor: "rgba(52, 211, 153, 0.16)",
      accent: "#34D399", // Emerald Accent
      pillBg: "rgba(52, 211, 153, 0.15)",
      pillBorder: "rgba(52, 211, 153, 0.35)",
      pillText: "#A7F3D0",
      dotColor: "#064E3B",
    },
    fullImage: "/images/team/dlc-core-team.png",
    floatingBadge: "🏗️ 24/7 Ground Ops",
    metricBadge: "6,000+ Towns • 15+ Hubs",
  },
  {
    id: "enterprise",
    chapter: "CHAPTER 04 / 06",
    badge: "ENTERPRISE SCALE",
    tabLabel: "Scale",
    displayWord: "BUILD",
    heading: "Powering Megaprojects Nationwide",
    body: "Connecting 20,000+ General Contractors and 850+ Enterprise EPC builders with verified, compliant gangs of shuttering carpenters, masons, bar benders, and electricians on demand.",
    authorName: "Enterprise Delivery Network",
    authorRole: "Turnkey EPCs & Developers",
    profileLink: "/business",
    palette: {
      bg: "#7C2D12", // Terracotta Red / Warm Ochre
      text: "#FFFFFF",
      wordmarkColor: "rgba(253, 186, 116, 0.18)",
      accent: "#FDBA74", // Terracotta Peach
      pillBg: "rgba(253, 186, 116, 0.15)",
      pillBorder: "rgba(253, 186, 116, 0.35)",
      pillText: "#FFEDD5",
      dotColor: "#7C2D12",
    },
    floatingBadge: "🏢 850+ EPC Builders",
    metricBadge: "20,000+ Contractors",
  },
  {
    id: "welfare",
    chapter: "CHAPTER 05 / 06",
    badge: "WORKER DIGNITY",
    tabLabel: "Dignity",
    displayWord: "DIGNITY",
    heading: "Zero Middlemen. Guaranteed Pay.",
    body: "Formalizing construction with statutory ESIC medical coverage, accidental disability protection, and 100% direct bank deposits that ensure zero leakage and financial security.",
    authorName: "Shramik Welfare Foundation",
    authorRole: "Formalized Social Safety Net",
    profileLink: "/worker",
    palette: {
      bg: "#854D0E", // Warm Amber / Mustard
      text: "#FFFFFF",
      wordmarkColor: "rgba(254, 240, 138, 0.18)",
      accent: "#FEF08A",
      pillBg: "rgba(254, 240, 138, 0.15)",
      pillBorder: "rgba(254, 240, 138, 0.35)",
      pillText: "#FEF08A",
      dotColor: "#854D0E",
    },
    floatingBadge: "🛡️ ESIC & Insurance",
    metricBadge: "100% DBT Ledger",
  },
  {
    id: "future",
    chapter: "CHAPTER 06 / 06",
    badge: "THE FUTURE",
    tabLabel: "Future",
    displayWord: "FUTURE",
    heading: "One Nation. One Labour Chowk.",
    body: "Pioneering the AI dispatch neural network for India’s 5 Crore+ construction craftsmen—making fair work, dignified wages, and instant hiring accessible to every corner of Bharat.",
    authorName: "Digital Labour Chowk",
    authorRole: "India's 1st Construction Workforce Platform",
    profileLink: "/about-us",
    palette: {
      bg: "#312E81", // Deep Royal Indigo
      text: "#FFFFFF",
      wordmarkColor: "rgba(165, 180, 252, 0.18)",
      accent: "#A5B4FC",
      pillBg: "rgba(165, 180, 252, 0.15)",
      pillBorder: "rgba(165, 180, 252, 0.35)",
      pillText: "#E0E7FF",
      dotColor: "#312E81",
    },
    floatingBadge: "🇮🇳 Digital Bharat",
    metricBadge: "Sub-2hr SLA Nationwide",
  },
];

/**
 * SlideHalf Component
 * Renders EXACTLY half (left 0-50% or right 50-100%) of a unified full-bleed slide canvas.
 * This guarantees mathematical continuity of text and artwork across the center spine!
 */
function SlideHalf({
  slide,
  half,
}: {
  slide: BookSlide;
  half: "left" | "right";
}) {
  return (
    <div
      className={`w-full h-full relative overflow-hidden ${
        half === "left"
          ? "rounded-l-2xl sm:rounded-l-[2rem]"
          : "rounded-r-2xl sm:rounded-r-[2rem]"
      }`}
      style={{ backgroundColor: slide.palette.bg }}
    >
      {/* 200%-wide canvas shifted by 0% (left half) or -100% (right half) */}
      <div
        className="absolute top-0 h-full w-[200%] select-none pointer-events-auto"
        style={{
          left: half === "left" ? "0%" : "-100%",
        }}
      >
        {/* Subtle Architectural Blueprint Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* =================================================================== */}
        {/* GIANT OVERSIZED DISPLAY TYPOGRAPHY SPANNING ACROSS THE CENTER SEAM  */}
        {/* (Exactly matching "PRIVILEGE" / "EDUCATE" in the reference)         */}
        {/* =================================================================== */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
          <span
            className="text-[90px] sm:text-[130px] lg:text-[170px] font-black tracking-tighter uppercase leading-none select-none"
            style={{
              color: slide.palette.wordmarkColor,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            {slide.displayWord}
          </span>
        </div>

        {/* =================================================================== */}
        {/* LEFT SPREAD REGION (0% to 50% width of the canvas)                  */}
        {/* =================================================================== */}
        <div className="absolute left-0 top-0 w-1/2 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
          
          {/* Top Folio Header */}
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white/70">
            <span className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {slide.chapter}
            </span>
            <span className="text-white/60">{slide.badge}</span>
          </div>

          {/* Central Portrait Cutout / Artwork Display */}
          <div className="relative flex-1 flex items-end justify-center my-auto">
            {slide.cutoutImage ? (
              <div
                className="relative w-[210px] sm:w-[250px] lg:w-[280px] h-[280px] sm:h-[330px] lg:h-[360px] pointer-events-none -mb-3"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              >
                <Image
                  src={slide.cutoutImage}
                  alt={slide.authorName}
                  fill
                  sizes="(max-width: 768px) 250px, 280px"
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                />
              </div>
            ) : slide.fullImage ? (
              <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl bg-black/20 border border-white/20 shadow-xl overflow-hidden group mb-2">
                <Image
                  src={slide.fullImage}
                  alt={slide.authorName}
                  fill
                  sizes="320px"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div className="w-40 h-40 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 shadow-2xl">
                <Building2 className="w-16 h-16" />
              </div>
            )}

            {/* Floating 3D Accent Pill on Cutout */}
            <div className="absolute top-2 right-4 sm:right-6 z-20 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-lg border border-amber-300">
              {slide.floatingBadge}
            </div>
          </div>

          {/* Bottom Left Status Folio */}
          <div className="flex items-center justify-between text-[11px] text-white/70 pt-2 border-t border-white/15">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.metricBadge}</span>
            </div>
            <span className="font-mono text-[10px] text-white/50">PAGE 01</span>
          </div>

        </div>

        {/* =================================================================== */}
        {/* RIGHT SPREAD REGION (50% to 100% width of the canvas)               */}
        {/* =================================================================== */}
        <div className="absolute left-1/2 top-0 w-1/2 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
          
          {/* Top Right Header */}
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white/60">
            <span className="text-white/80 font-bold">DIGITAL LABOUR CHOWK ARCHIVES</span>
            <span>FOLIO • {slide.tabLabel.toUpperCase()}</span>
          </div>

          {/* Clean Editorial Caption Block (Heading + Punchy 2-Line Body) */}
          <div className="my-auto py-2">
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 shadow-xs"
              style={{
                backgroundColor: slide.palette.pillBg,
                borderColor: slide.palette.pillBorder,
                color: slide.palette.pillText,
                borderWidth: "1px",
              }}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{slide.badge}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug mb-3">
              &ldquo;{slide.heading}&rdquo;
            </h3>

            <p className="text-xs sm:text-sm lg:text-[15px] text-white/85 leading-relaxed font-normal max-w-lg">
              {slide.body}
            </p>
          </div>

          {/* Bottom Author Credentials & Link */}
          <div className="pt-3 border-t border-white/15 flex items-center justify-between">
            <div>
              <span className="text-xs sm:text-sm font-black text-white block leading-tight">
                {slide.authorName}
              </span>
              <span className="text-[10px] sm:text-xs text-white/70 font-medium">
                {slide.authorRole}
              </span>
            </div>

            {slide.profileLink && (
              <Link
                href={slide.profileLink}
                className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-amber-300 transition-colors group"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function LeadershipBookCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [targetIdx, setTargetIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Drag / swipe coordinates
  const dragStartX = useRef<number | null>(null);
  const flipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = BOOK_SLIDES.length;
  const currentSlide = BOOK_SLIDES[currentIdx];

  // Core 3D Flip Trigger with state lock to prevent flickers
  const triggerFlip = useCallback(
    (direction: "next" | "prev", explicitTarget?: number) => {
      if (isFlipping) return;

      const nextIndex =
        explicitTarget !== undefined
          ? explicitTarget
          : direction === "next"
          ? (currentIdx + 1) % total
          : (currentIdx - 1 + total) % total;

      if (nextIndex === currentIdx) return;

      setFlipDirection(direction);
      setTargetIdx(nextIndex);
      setIsFlipping(true);

      if (flipTimerRef.current) clearTimeout(flipTimerRef.current);

      // 750ms matches the cubic-bezier animation duration
      flipTimerRef.current = setTimeout(() => {
        setCurrentIdx(nextIndex);
        setIsFlipping(false);
        setTargetIdx(null);
      }, 750);
    },
    [isFlipping, currentIdx, total]
  );

  const handleNext = useCallback(() => triggerFlip("next"), [triggerFlip]);
  const handlePrev = useCallback(() => triggerFlip("prev"), [triggerFlip]);

  // Keyboard navigation support (ArrowRight / ArrowLeft)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch and drag swipe handlers
  const onPointerDown = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const onPointerUp = (clientX: number) => {
    if (dragStartX.current === null) return;
    const diff = clientX - dragStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    dragStartX.current = null;
  };

  // Auto rotation every 7.5 seconds
  useEffect(() => {
    if (isPaused || isFlipping) return;

    autoPlayRef.current = setInterval(() => {
      triggerFlip("next");
    }, 7500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, isFlipping, triggerFlip]);

  useEffect(() => {
    return () => {
      if (flipTimerRef.current) clearTimeout(flipTimerRef.current);
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const nextSlide = BOOK_SLIDES[targetIdx !== null ? targetIdx : (currentIdx + 1) % total];
  const prevSlide = BOOK_SLIDES[targetIdx !== null ? targetIdx : (currentIdx - 1 + total) % total];

  return (
    <section
      className="w-full bg-[#0E1118] py-8 sm:py-12 lg:py-14 relative overflow-hidden select-none border-y border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Interactive 3D Hardcover Book Monograph"
    >
      {/* Background Architectural Blueprint Silhouette Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none select-none opacity-10">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="400" cy="100" r="240" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="400" cy="100" r="340" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* COMPACT SECTION HEADER (Single Viewport Containment)                  */}
        {/* ===================================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-7 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-sky-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span>Interactive Monograph</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              The Visionaries Behind <span className="text-sky-400">India&apos;s 1st Construction Stack</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/50">
            <span className="font-bold text-sky-400">{currentSlide.chapter}</span>
            <span>•</span>
            <span>{currentSlide.badge}</span>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 3D BOOK SPREAD VIEWPORT & RIG                                         */}
        {/* ===================================================================== */}
        <div
          className="relative w-full py-2 cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => onPointerDown(e.clientX)}
          onMouseUp={(e) => onPointerUp(e.clientX)}
          onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
          onTouchEnd={(e) => onPointerUp(e.changedTouches[0].clientX)}
          style={{ perspective: "2200px" }}
        >
          
          {/* =================================================================== */}
          {/* MINIMAL THIN WHITE CURVED SVG SIDE ARROWS (Outside Book Edges)      */}
          {/* =================================================================== */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFlipping}
            className="absolute -left-3 sm:-left-7 lg:-left-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 hover:border-white/40 shadow-xl flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-30 cursor-pointer"
            aria-label="Previous Page"
          >
            {/* Minimal Curved Hand-Drawn Arrow */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 -translate-x-0.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isFlipping}
            className="absolute -right-3 sm:-right-7 lg:-right-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 hover:border-white/40 shadow-xl flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-30 cursor-pointer"
            aria-label="Next Page"
          >
            {/* Minimal Curved Hand-Drawn Arrow */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 translate-x-0.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* =================================================================== */}
          {/* PHYSICAL HARDCOVER BOOK THICKNESS (Layered offset card edges)       */}
          {/* =================================================================== */}
          <div className="absolute inset-0 bg-white/10 rounded-l-[2.2rem] rounded-r-[2.2rem] translate-x-1.5 translate-y-2 -z-10 blur-[1px]" />
          <div className="absolute inset-0 bg-black/40 rounded-l-[2.5rem] rounded-r-[2.5rem] translate-x-2.5 translate-y-3.5 -z-20 blur-sm" />

          {/* =================================================================== */}
          {/* THE BOOK SPREAD CONTAINER (~16:9 Aspect Ratio)                      */}
          {/* =================================================================== */}
          <div
            className="relative w-full h-[400px] sm:h-[450px] lg:h-[480px] rounded-l-2xl sm:rounded-l-[2rem] rounded-r-2xl sm:rounded-r-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* CSS Keyframe Animations for Hardware-Accelerated 3D Hinge Physics */}
            <style>{`
              @keyframes bookLeafFlipNext {
                0% {
                  transform: rotateY(0deg);
                }
                100% {
                  transform: rotateY(-180deg);
                }
              }
              @keyframes bookLeafFlipPrev {
                0% {
                  transform: rotateY(0deg);
                }
                100% {
                  transform: rotateY(180deg);
                }
              }
              @keyframes bookDynamicShadow {
                0% {
                  opacity: 0;
                }
                40% {
                  opacity: 0.65;
                }
                70% {
                  opacity: 0.35;
                }
                100% {
                  opacity: 0;
                }
              }
              .dlc-turning-leaf-next {
                transform-origin: left center;
                transform-style: preserve-3d;
                animation: bookLeafFlipNext 750ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
              }
              .dlc-turning-leaf-prev {
                transform-origin: right center;
                transform-style: preserve-3d;
                animation: bookLeafFlipPrev 750ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
              }
              .dlc-shadow-dynamic {
                animation: bookDynamicShadow 750ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
              }
            `}</style>
            
            {/* Outer Physical Board Book Beveled Rim */}
            <div className="absolute inset-0 rounded-l-2xl sm:rounded-l-[2rem] rounded-r-2xl sm:rounded-r-[2rem] border-2 border-white/30 pointer-events-none z-50 shadow-inner" />

            {/* ================================================================= */}
            {/* STATIC BASE LAYERS (Underneath the turning leaf)                  */}
            {/* ================================================================= */}
            
            {/* LEFT HALF BASE */}
            <div className="absolute left-0 top-0 w-1/2 h-full z-10">
              <SlideHalf
                slide={isFlipping && flipDirection === "prev" ? prevSlide : currentSlide}
                half="left"
              />
              {/* Dynamic shadow over left page when leaf lands from next */}
              {isFlipping && flipDirection === "next" && (
                <div className="absolute inset-0 bg-black pointer-events-none z-20 rounded-l-2xl sm:rounded-l-[2rem] dlc-shadow-dynamic" />
              )}
            </div>

            {/* RIGHT HALF BASE (Pre-renders next slide right side during flip) */}
            <div className="absolute left-1/2 top-0 w-1/2 h-full z-10">
              <SlideHalf
                slide={isFlipping && flipDirection === "next" ? nextSlide : currentSlide}
                half="right"
              />
              {/* Dynamic shadow over underlying right page during forward flip */}
              {isFlipping && flipDirection === "next" && (
                <div className="absolute inset-0 bg-black pointer-events-none z-20 rounded-r-2xl sm:rounded-r-[2rem] dlc-shadow-dynamic" />
              )}
            </div>

            {/* ================================================================= */}
            {/* ANIMATED 3D TURNING LEAF (NEXT: Right-to-Left Flip)               */}
            {/* ================================================================= */}
            {isFlipping && flipDirection === "next" && (
              <div className="absolute top-0 left-1/2 w-1/2 h-full z-30 dlc-turning-leaf-next">
                {/* FRONT FACE (Shows Current Slide Right Half) */}
                <div
                  className="absolute inset-0 rounded-r-2xl sm:rounded-r-[2rem] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <SlideHalf slide={currentSlide} half="right" />
                  {/* Dynamic surface shadow as page turns away from viewer */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent pointer-events-none" />
                </div>

                {/* BACK FACE (Shows Next Slide Left Half) */}
                <div
                  className="absolute inset-0 rounded-l-2xl sm:rounded-l-[2rem] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <SlideHalf slide={nextSlide} half="left" />
                  {/* Specular lighting highlight on page back */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-black/30 pointer-events-none" />
                </div>
              </div>
            )}

            {/* ================================================================= */}
            {/* ANIMATED 3D TURNING LEAF (PREV: Left-to-Right Flip)               */}
            {/* ================================================================= */}
            {isFlipping && flipDirection === "prev" && (
              <div className="absolute top-0 left-0 w-1/2 h-full z-30 dlc-turning-leaf-prev">
                {/* FRONT FACE (Shows Current Slide Left Half) */}
                <div
                  className="absolute inset-0 rounded-l-2xl sm:rounded-l-[2rem] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <SlideHalf slide={currentSlide} half="left" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent pointer-events-none" />
                </div>

                {/* BACK FACE (Shows Prev Slide Right Half) */}
                <div
                  className="absolute inset-0 rounded-r-2xl sm:rounded-r-[2rem] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(-180deg)",
                  }}
                >
                  <SlideHalf slide={prevSlide} half="right" />
                  <div className="absolute inset-0 bg-gradient-to-l from-white/15 via-transparent to-black/30 pointer-events-none" />
                </div>
              </div>
            )}

            {/* ================================================================= */}
            {/* PHYSICAL VERTICAL CENTER-CREASE SPINE GRADIENT (50% Vertical Seam)*/}
            {/* ================================================================= */}
            <div
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 pointer-events-none z-40"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.28) 55%, transparent)",
              }}
            />

          </div>

        </div>

        {/* ===================================================================== */}
        {/* BOTTOM THUMBNAIL BAR & PROGRESS INDICATORS                            */}
        {/* (Exactly matching reference bottom circular thumbnail dock)           */}
        {/* ===================================================================== */}
        <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Chapter Quick Selector Chips */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
            {BOOK_SLIDES.map((slide, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => triggerFlip(idx > currentIdx ? "next" : "prev", idx)}
                  disabled={isFlipping}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md ring-2 ring-sky-400"
                      : "bg-white/10 hover:bg-white/20 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? "bg-sky-400" : "bg-white/30"
                    }`}
                  />
                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Monochrome Pagination Dots (Clean Neutral Indicators) */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
            {BOOK_SLIDES.map((slide, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => triggerFlip(idx > currentIdx ? "next" : "prev", idx)}
                  disabled={isFlipping}
                  aria-label={`Flip to ${slide.tabLabel}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-7 h-2.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                      : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Rotation State & Keyboard Hint */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono text-white/40">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 text-[10px]">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 text-[10px]">→</kbd>
              <span>Keys</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
                }`}
              />
              <span>{isPaused ? "Paused" : "Auto-flipping"}</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
