"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  VolumeX,
  Volume2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Quote,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  HardHat,
  Building2,
  MapPin,
  Download,
  QrCode,
  Smartphone,
  ArrowRight,
} from "lucide-react";

// =============================================================================
// SECTION 1: HERO CANVAS (Vimeo 6:57 Cinematic Video with Mute/Unmute Toggle)
// =============================================================================
export function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  const vimeoVideoId = "1156756201";
  const vimeoHash = "7bce0b5203";

  return (
    <section className="relative w-full m-0 p-0 overflow-hidden bg-black">
      <div className="relative w-full aspect-video sm:aspect-auto sm:h-[420px] lg:h-[500px] overflow-hidden bg-black flex items-center justify-center m-0 p-0">
        {/* Full-bleed stretched iframe: 100% width and height on mobile, ultrawide cover on desktop */}
        <iframe
          key={isMuted ? "muted" : "unmuted"}
          src={`https://player.vimeo.com/video/${vimeoVideoId}?h=${vimeoHash}&autoplay=1&muted=${isMuted ? 1 : 0}&loop=1&autopause=0&controls=0&background=1&playsinline=1`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full sm:w-[178vh] sm:h-[100vh] lg:w-[105vw] lg:h-[59vw] border-0 pointer-events-none object-cover"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Digital Labour Chowk Video - 6:57 min"
        />

        {/* Floating Minimal Sound Button (Bottom-Right) */}
        <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 z-20">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/20 shadow-xl text-[11px] sm:text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span>Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span>Sound On</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 2: POPULAR SEARCHES (2-Row 3-Col Grid with 5 Worker Cutouts)
// =============================================================================
interface SearchCardProps {
  rank: number;
  title: string;
  subtitle?: string;
  hindi: string;
  watermark: string;
  imageSrc: string;
  altText: string;
  href: string;
}

const POPULAR_SEARCH_CARDS: SearchCardProps[] = [
  {
    rank: 1,
    title: "Masons /",
    subtitle: "Rajmistri",
    hindi: "(राजमिस्त्री)",
    watermark: "Masons",
    imageSrc: "/images/popular-searches/mason-rajmistri.webp",
    altText: "Professional Mason with Trowel",
    href: "https://onboarding.digitallabourchowk.com/login",
  },
  {
    rank: 2,
    title: "General Labour &",
    subtitle: "Helpers",
    hindi: "(हेल्पर / बेलदार)",
    watermark: "Helpers",
    imageSrc: "/images/popular-searches/general-labour.webp",
    altText: "Construction Helper with Safety Helmet",
    href: "https://onboarding.digitallabourchowk.com/login",
  },
  {
    rank: 3,
    title: "Shuttering",
    subtitle: "Carpenters",
    hindi: "(शटरिंग कारपेंटर)",
    watermark: "Carpenters",
    imageSrc: "/images/popular-searches/shuttering-carpenter.webp",
    altText: "Formwork Carpenter with Spirit Level",
    href: "https://onboarding.digitallabourchowk.com/login",
  },
  {
    rank: 4,
    title: "Bar Benders &",
    subtitle: "Steel Fixers",
    hindi: "(सरिया मिस्त्री)",
    watermark: "Bar Benders",
    imageSrc: "/images/popular-searches/bar-bender.webp",
    altText: "Rebar Steel Fixer Craftsman",
    href: "https://onboarding.digitallabourchowk.com/login",
  },
  {
    rank: 5,
    title: "Electricians &",
    subtitle: "Plumbers",
    hindi: "(इलेक्ट्रीशियन / प्लंबर)",
    watermark: "Electricians",
    imageSrc: "/images/popular-searches/electrician-plumber.webp",
    altText: "Certified Electrician and Plumber",
    href: "https://onboarding.digitallabourchowk.com/login",
  },
];

export function PopularSearches() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Row 1, Column 1: Main Section Title */}
          <div className="flex flex-col justify-center pr-4 py-6 lg:py-0">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-950 tracking-tight leading-[1.08]">
              Popular Searches <br />
              <span className="text-slate-950 font-black">on Digital</span> <br />
              <span className="text-slate-950 font-black">Labour Chowk</span>
            </h2>
          </div>

          {/* Cards 1 to 5 */}
          {POPULAR_SEARCH_CARDS.map((card) => (
            <Link
              key={card.rank}
              href={card.href}
              className="group relative bg-[#FBFBFB] hover:bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[250px] sm:min-h-[270px] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Text: Rank & Category Name */}
              <div className="relative z-10 max-w-[62%]">
                <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-3">
                  TRENDING AT #{card.rank}
                </span>

                <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 leading-tight group-hover:text-[#0C59D4] transition-colors">
                  {card.title} {card.subtitle && <span className="block">{card.subtitle}</span>}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  {card.hindi}
                </p>
              </div>

              {/* Watermark Background Outline Text */}
              <div
                aria-hidden="true"
                className="absolute right-4 bottom-2 text-5xl sm:text-6xl font-black stroke-watermark pointer-events-none select-none z-0"
              >
                {card.watermark}
              </div>

              {/* Cutout Worker Photo (Anchored Bottom-Right) */}
              <div className="absolute right-0 bottom-0 w-36 sm:w-44 h-48 sm:h-56 z-10 pointer-events-none">
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                  priority={card.rank <= 2}
                />
              </div>

              {/* Bottom-Left Action Link */}
              <div className="relative z-10 pt-4 flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-[#0C59D4] transition-colors">
                <span>View all</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// HORIZONTAL BANNER: BHARAT KE SUPER FOUNDERS (6:57 Documentary Modal)
// =============================================================================
export function SuperFounderBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section className="w-full my-4 sm:my-8 lg:my-10 p-0 overflow-hidden bg-black">
        <div
          onClick={() => setIsOpen(true)}
          className="group relative w-full bg-black cursor-pointer overflow-hidden transition-all duration-300 hover:brightness-105 active:scale-[0.999]"
          title="Click to watch Digital Labour Chowk on Bharat Ke Super Founders (6:57 min)"
        >
          <div className="relative w-full aspect-[1366/172] bg-black flex items-center justify-center">
            <Image
              src="/images/super-founder-banner.webp"
              alt="Bharat Ke Super Founders - Digital Labour Chowk"
              width={1366}
              height={172}
              priority
              className="w-full h-auto object-cover sm:object-fill block select-none pointer-events-none"
              sizes="100vw"
            />

            {/* Desktop Hover Overlay with Play Button */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-[#0C59D4] flex items-center justify-center text-white text-sm pl-0.5 shadow-md">
                  ▶
                </span>
                <span className="text-sm sm:text-base font-semibold tracking-wide">
                  Watch Full Film <span className="text-neutral-300 font-normal">(6:57 min)</span>
                </span>
              </div>
            </div>

            {/* Responsive Live Watch Film Pill Badge */}
            <div className="absolute top-2 right-3 sm:top-3 sm:right-6 lg:right-10 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold text-[10px] sm:text-xs text-neutral-100 tracking-wide">
                Watch Film • 6:57m
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 text-white flex items-center justify-center text-lg sm:text-xl transition-all duration-200 z-50 focus:outline-none"
            aria-label="Close video"
          >
            ✕
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://player.vimeo.com/video/1156756201?h=7bce0b5203&autoplay=1&muted=0&controls=1"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Digital Labour Chowk - Bharat Ke Super Founders Documentary"
            />
          </div>
        </div>
      )}
    </>
  );
}

// =============================================================================
// SECTION 3: 3-PILLAR 3D BENTO GRID (Stakeholder Ecosystem Showcase)
// =============================================================================
interface BentoCardProps {
  id: string;
  badge: string;
  badgeHindi: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentColor: string;
  accentGradient: string;
  borderHover: string;
  imageSrc: string;
  imageAlt: string;
  chips: string[];
  features: string[];
  ctaText: string;
  ctaHindi: string;
  ctaHref: string;
  ctaBg: string;
  ctaHoverBg: string;
  ctaShadow: string;
  statNumber: string;
  statLabel: string;
}

const BENTO_CARDS: BentoCardProps[] = [
  {
    id: "find-job",
    badge: "FOR WORKERS",
    badgeHindi: "काम ढूंढें",
    badgeBg: "bg-blue-50",
    badgeText: "text-[#0C59D4]",
    badgeBorder: "border-blue-200",
    icon: <Users className="w-3.5 h-3.5 text-[#0C59D4]" />,
    title: "Daily Work & Direct Wages",
    subtitle: "0% commission, direct bank transfers, and free accident insurance for every craftsman.",
    accentColor: "#0C59D4",
    accentGradient: "from-blue-600 via-blue-500 to-indigo-500",
    borderHover: "hover:border-[#0C59D4]/60 hover:shadow-[0_20px_45px_rgba(12,89,212,0.14)]",
    imageSrc: "/images/curtain-reveal/find-job.webp",
    imageAlt: "Digital Labour Chowk - Find Job for skilled construction craftsmen",
    chips: ["🛡️ ₹5L Bima Cover", "💸 0% Commission", "⚡ Direct Bank Pay"],
    features: [
      "Instant job alerts directly on your mobile — no physical chowk wait",
      "Direct bank transfer (DBT) with zero middleman deductions",
      "₹5,00,000 Suraksha insurance coverage on active project sites",
    ],
    ctaText: "FIND WORK NOW",
    ctaHindi: "काम ढूंढें",
    ctaHref: "https://onboarding.digitallabourchowk.com/login",
    ctaBg: "bg-[#0C59D4]",
    ctaHoverBg: "hover:bg-[#0947A8]",
    ctaShadow: "shadow-blue-600/30 hover:shadow-blue-600/40",
    statNumber: "350,000+",
    statLabel: "Active Craftsmen",
  },
  {
    id: "find-workers",
    badge: "FOR CONTRACTORS",
    badgeHindi: "मजदूर पाएं",
    badgeBg: "bg-amber-50",
    badgeText: "text-[#B45309]",
    badgeBorder: "border-amber-200",
    icon: <HardHat className="w-3.5 h-3.5 text-[#B45309]" />,
    title: "Hire Verified Labour in 2 Hours",
    subtitle: "Aadhaar KYC verified masons, carpenters, rebar fitters, plumbers and helpers on-demand.",
    accentColor: "#D4A017",
    accentGradient: "from-amber-500 via-amber-400 to-yellow-500",
    borderHover: "hover:border-[#D4A017]/70 hover:shadow-[0_20px_45px_rgba(212,160,23,0.18)]",
    imageSrc: "/images/curtain-reveal/find-worker.webp",
    imageAlt: "Digital Labour Chowk - Find Workers for contractors and builders",
    chips: ["⚡ 2-Hour SLA Match", "🆔 100% Aadhaar KYC", "⭐ Skill-Graded"],
    features: [
      "100% Aadhaar KYC & police-verified skilled workforce",
      "Urgent site matching within 2 hours across India",
      "Digital attendance & hassle-free daily wage ledger",
    ],
    ctaText: "FIND WORKERS NOW",
    ctaHindi: "मजदूर पाएं",
    ctaHref: "https://onboarding.digitallabourchowk.com/login",
    ctaBg: "bg-[#D4A017]",
    ctaHoverBg: "hover:bg-[#B8860B]",
    ctaShadow: "shadow-amber-600/30 hover:shadow-amber-600/40",
    statNumber: "20,000+",
    statLabel: "Site Contractors",
  },
  {
    id: "find-business",
    badge: "FOR ENTERPRISES",
    badgeHindi: "बिजनेस / EPC",
    badgeBg: "bg-emerald-50",
    badgeText: "text-[#16A34A]",
    badgeBorder: "border-emerald-200",
    icon: <Building2 className="w-3.5 h-3.5 text-[#16A34A]" />,
    title: "Bulk Workforce & Compliance",
    subtitle: "Pan-India deployment of 50 to 500+ workers with full GST, PF & ESIC compliance.",
    accentColor: "#16A34A",
    accentGradient: "from-emerald-600 via-emerald-500 to-teal-500",
    borderHover: "hover:border-[#16A34A]/60 hover:shadow-[0_20px_45px_rgba(22,163,74,0.14)]",
    imageSrc: "/images/curtain-reveal/for-business.webp",
    imageAlt: "Digital Labour Chowk - Find Business for enterprise partners and developers",
    chips: ["📑 100% GST & PF/ESIC", "👥 50-500+ Manpower", "🎯 Dedicated RM"],
    features: [
      "Bulk manpower mobilization across multiple project sites",
      "Full statutory compliance: PF, ESIC, BOCW & GST bills",
      "Dedicated Enterprise Account Manager & strict SLAs",
    ],
    ctaText: "PARTNER WITH US",
    ctaHindi: "बिजनेस पार्टनर",
    ctaHref: "https://onboarding.digitallabourchowk.com/login",
    ctaBg: "bg-[#16A34A]",
    ctaHoverBg: "hover:bg-[#15803D]",
    ctaShadow: "shadow-green-600/30 hover:shadow-green-600/40",
    statNumber: "50+",
    statLabel: "Top Infra Giants",
  },
];

export function CurtainRevealSection() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 pb-20 sm:pb-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5EE] border border-[#FFD8BE] text-[#E65100] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#E65100] fill-[#E65100]" />
          <span>ONE UNIFIED PLATFORM • एक मंच, हर समाधान</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight break-normal px-2">
          Connecting Every Construction Stakeholder
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Whether you are seeking daily wage work, hiring verified craftsmen for your job site, or deploying 100+ manpower for large EPC projects — Digital Labour Chowk powers India’s construction industry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {BENTO_CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative bg-white rounded-3xl border border-slate-200/90 ${card.borderHover} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]`}
            >
              {/* Top Accent Color Line */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${card.accentGradient}`} />

              {/* Card Header Content */}
              <div className="p-6 sm:p-7 pb-4">
                {/* Persona Tag + Stat Chip */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${card.badgeBg} border ${card.badgeBorder} ${card.badgeText} text-[11px] sm:text-xs font-bold uppercase tracking-wider`}>
                    {card.icon}
                    <span>{card.badge}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-semibold">{card.badgeHindi}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{card.statNumber}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-snug group-hover:text-slate-950 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed min-h-[38px]">
                  {card.subtitle}
                </p>
              </div>

              {/* Visual Preview Frame with Ambient Chips */}
              <div className="px-6 sm:px-7">
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 border border-slate-100 overflow-hidden flex items-end justify-center p-2">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-contain object-bottom select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />

                  {/* Floating Micro Chips overlay */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                    {card.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[10.5px] font-bold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-200/80 px-2 py-0.5 rounded-md shadow-xs"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Bullet List */}
              <div className="p-6 sm:p-7 pt-4 pb-2">
                <ul className="space-y-2.5">
                  {card.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-normal">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          card.id === "find-job"
                            ? "text-[#0C59D4]"
                            : card.id === "find-workers"
                            ? "text-[#D4A017]"
                            : "text-[#16A34A]"
                        }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA & Trust footer */}
              <div className="p-6 sm:p-7 pt-4 border-t border-slate-100 bg-slate-50/50">
                <Link
                  href={card.ctaHref}
                  className={`group/btn w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl ${card.ctaBg} ${card.ctaHoverBg} text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg ${card.ctaShadow} transform active:scale-98 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-300`}
                >
                  <span>{card.ctaText}</span>
                  <span className="text-white/80 font-normal">({card.ctaHindi})</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2.5 px-1 font-medium">
                  <span>{card.statLabel}</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Verified Platform
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 4: STATS MARQUEE & TESTIMONIALS (Split Section with Auto-Carousel)
// =============================================================================
interface MetricItem {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const STATS_METRICS: MetricItem[] = [
  {
    id: "workers",
    value: "350,000+",
    label: "REGISTERED WORKERS",
    icon: <Users className="w-4 h-4 text-[#0C59D4]" />,
  },
  {
    id: "contractors",
    value: "20,000+",
    label: "TRUSTED CONTRACTORS",
    icon: <HardHat className="w-4 h-4 text-[#D4A017]" />,
  },
  {
    id: "companies",
    value: "50+",
    label: "BIG CONSTRUCTION COMPANIES",
    icon: <Building2 className="w-4 h-4 text-[#16A34A]" />,
  },
  {
    id: "cities",
    value: "6,000+",
    label: "CITIES ACROSS INDIA",
    icon: <MapPin className="w-4 h-4 text-[#E65100]" />,
  },
  {
    id: "projects",
    value: "15,000+",
    label: "PROJECTS DELIVERED",
    icon: <CheckCircle2 className="w-4 h-4 text-[#0C59D4]" />,
  },
  {
    id: "rate",
    value: "98%",
    label: "ON-TIME DEPLOYMENT RATE",
    icon: <TrendingUp className="w-4 h-4 text-[#16A34A]" />,
  },
];

interface TestimonialCard {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  avatarBg: string;
  avatarText: string;
}

const TESTIMONIALS_DATA: TestimonialCard[] = [
  {
    id: 1,
    text: "Digital Labour Chowk has made it much easier for us to find skilled workers whenever we need them. The process is simple, quick, and saves our site team a lot of time.",
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Godrej Construction",
    location: "Mumbai",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-blue-600 to-indigo-500",
    avatarText: "RK",
  },
  {
    id: 2,
    text: "Earlier, finding reliable workers for urgent requirements was a major challenge. With Digital Labour Chowk, we can post our requirements and connect with workers much faster.",
    name: "Amit Sharma",
    role: "Contractor",
    company: "Sharma Builders & Infra",
    location: "Delhi NCR",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-amber-600 to-orange-500",
    avatarText: "AS",
  },
  {
    id: 3,
    text: "Managing manpower at multiple project sites has become easier with Digital Labour Chowk. We get access to workers based on our requirements, which helps us keep projects moving.",
    name: "Sandeep Verma",
    role: "Site Supervisor",
    company: "L&T Construction Site",
    location: "Bengaluru",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-emerald-600 to-teal-500",
    avatarText: "SV",
  },
  {
    id: 4,
    text: "We mobilized over 120 shuttering carpenters across 3 locations in Pune within 48 hours. DLC has completely digitized what used to be a frustrating informal process.",
    name: "Vikram Malhotra",
    role: "Lead Infrastructure Contractor",
    company: "Malhotra Infra Projects",
    location: "Pune",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-purple-600 to-pink-500",
    avatarText: "VM",
  },
  {
    id: 5,
    text: "Before DLC, I stood at physical labour chowks for days waiting for jobs. Now, verified contractors call me directly on my phone with transparent wage rates. It changed my life.",
    name: "Mohan Lal",
    role: "Master Mason (Rajmistri)",
    company: "Independent Tradesman",
    location: "Jaipur",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-cyan-600 to-blue-500",
    avatarText: "ML",
  },
  {
    id: 6,
    text: "The worker verification and skill ratings make hiring fearless. Our project quality improved dramatically because we get genuine craftsmen who take pride in their work.",
    name: "Pooja Hegde",
    role: "Senior Civil Engineer",
    company: "Sobha Developers",
    location: "Hyderabad",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-rose-600 to-red-500",
    avatarText: "PH",
  },
  {
    id: 7,
    text: "Payment disputes and attendance bottlenecks used to derail site timelines. DLC's streamlined workforce allocation gives us full transparency from day one.",
    name: "Dinesh Patel",
    role: "Commercial Project Lead",
    company: "Kalpataru Construction",
    location: "Ahmedabad",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-yellow-600 to-amber-500",
    avatarText: "DP",
  },
  {
    id: 8,
    text: "Getting certified bar benders and electricians during monsoon season was nearly impossible. DLC's deep network delivered 45 workers on-site overnight.",
    name: "Sunil Yadav",
    role: "Regional Procurement Head",
    company: "BSES Infrastructure",
    location: "Noida",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-blue-700 to-indigo-700",
    avatarText: "SY",
  },
  {
    id: 9,
    text: "DLC isn't just an app; it's the financial backbone for the Indian construction workforce. As a sub-contractor, it's my first stop every single morning.",
    name: "Karanbir Singh",
    role: "Structural Contractor",
    company: "Punjab Highway Works",
    location: "Chandigarh",
    rating: 5,
    avatarBg: "bg-gradient-to-tr from-emerald-700 to-green-600",
    avatarText: "KS",
  },
];

export function StatsAndTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const totalCards = TESTIMONIALS_DATA.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalCards - visibleCount);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="w-full bg-[#FAFAFC] py-16 sm:py-24 border-t border-slate-200/70 overflow-hidden">
      {/* PART A: TOP HORIZONTAL STATS MARQUEE (Right to Left Scrolling) */}
      <div className="w-full mb-16 sm:mb-20">
        <div className="w-full bg-white border-y border-slate-200/90 py-5 sm:py-6 shadow-xs overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee-rtl hover:[animation-play-state:paused]">
            {[...STATS_METRICS, ...STATS_METRICS, ...STATS_METRICS, ...STATS_METRICS].map((metric, idx) => (
              <div
                key={`${metric.id}-${idx}`}
                className="flex items-center mx-8 sm:mx-12 group cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-110 group-hover:border-blue-300 transition-all">
                  {metric.icon}
                </div>

                <div className="flex flex-col text-left ml-3.5 sm:ml-4 whitespace-nowrap">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                    {metric.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">
                    {metric.label}
                  </span>
                </div>

                <div className="w-px h-8 bg-slate-200 ml-10 sm:ml-14" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PART B: TESTIMONIALS SPLIT-SECTION LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT FIXED BLOCK: Dark Blue Signature DLC Color */}
          <div className="lg:col-span-4 bg-[#0C59D4] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[380px] lg:min-h-[460px]">
            <div className="absolute -right-8 -bottom-8 text-white/10 pointer-events-none select-none">
              <Quote className="w-48 h-48 sm:w-56 sm:h-56 stroke-[1]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-inner">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block mb-2">
                Real Stories From The Ground
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-[1.12]">
                Voices from <br /> the Community
              </h2>

              <p className="mt-4 text-blue-100/90 text-sm sm:text-base leading-relaxed">
                Hear how contractors, project heads, and skilled craftsmen across India build faster and hire smarter with Digital Labour Chowk.
              </p>
            </div>

            {/* Centered Left/Right Navigation Arrows Inside Left Block */}
            <div className="relative z-10 pt-8 border-t border-white/20 flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0C59D4] border border-white/30 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-1.5 items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0C59D4] border border-white/30 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT CAROUSEL (Review Cards Container) */}
          <div className="lg:col-span-8 flex flex-col justify-center overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {TESTIMONIALS_DATA.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="flex flex-col items-center h-full">
                      {/* Speech Bubble Container with Downward Pointer */}
                      <div className="relative w-full bg-white rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200/80 flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
                        <div className="flex text-amber-400 mb-3 gap-0.5">
                          {[...Array(card.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed italic mb-4">
                          "{card.text}"
                        </p>

                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 pt-2 border-t border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>Verified Review • {card.location}</span>
                        </div>

                        {/* Downward Speech Bubble Pointer */}
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-r border-b border-slate-200/80 rotate-45" />
                      </div>

                      {/* Author Profile Information */}
                      <div className="mt-5 flex flex-col items-center text-center">
                        <div
                          className={`w-12 h-12 rounded-full ${card.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-md ring-3 ring-white`}
                        >
                          {card.avatarText}
                        </div>

                        <span className="mt-2.5 text-base font-extrabold text-slate-900 tracking-tight leading-tight">
                          {card.name}
                        </span>

                        <span className="text-xs font-bold text-[#0C59D4] mt-0.5">
                          {card.role}
                        </span>

                        <span className="text-[11px] font-medium text-slate-500">
                          {card.company}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 5: APP DOWNLOAD CTA (3D Phone Mockup, QR Box & Floating Stat Badges)
// =============================================================================
export function AppDownloadSection() {
  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 lg:py-36 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        
        {/* Wide Rounded Pastel Card with Pop-Out Phone */}
        <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#EEF4FF] via-[#E8F0FE] to-[#F1EDFF] border border-blue-100/90 shadow-xl overflow-visible p-6 sm:p-10 lg:px-14 lg:py-8">
          {/* Subtle Ambient Glow Spheres */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* 3-Column Internal Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center overflow-visible">
            
            {/* Left Column: Heading, Subheading & QR Box */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-blue-200/80 text-[#0C59D4] text-xs font-bold uppercase tracking-wider shadow-sm mb-4 w-fit">
                <Smartphone className="w-3.5 h-3.5 text-[#0C59D4]" />
                <span>One-Tap Mobile Hiring</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.15]">
                Download <span className="text-[#0C59D4]">Digital Labour Chowk</span> app!
              </h2>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                Explore verified daily wage jobs, connect directly with top contractors, and get hired instantly across 6,000+ cities in India.
              </p>

              {/* QR Code Box */}
              <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100/90 max-w-md">
                <p className="text-xs sm:text-sm font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-[#0C59D4]" />
                  <span>Scan QR to download Digital Labour Chowk app</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-inner flex-shrink-0">
                    <svg
                      viewBox="0 0 120 120"
                      className="w-24 h-24 sm:w-28 sm:h-28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="120" height="120" fill="white" rx="8" />
                      <rect x="10" y="10" width="30" height="30" rx="4" fill="#0C59D4" />
                      <rect x="16" y="16" width="18" height="18" fill="white" rx="2" />
                      <rect x="21" y="21" width="8" height="8" rx="1" fill="#0C59D4" />

                      <rect x="80" y="10" width="30" height="30" rx="4" fill="#0C59D4" />
                      <rect x="86" y="16" width="18" height="18" fill="white" rx="2" />
                      <rect x="91" y="21" width="8" height="8" rx="1" fill="#0C59D4" />

                      <rect x="10" y="80" width="30" height="30" rx="4" fill="#0C59D4" />
                      <rect x="16" y="86" width="18" height="18" fill="white" rx="2" />
                      <rect x="21" y="91" width="8" height="8" rx="1" fill="#0C59D4" />

                      <rect x="46" y="14" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="58" y="14" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="68" y="14" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="46" y="24" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="58" y="28" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="68" y="24" width="6" height="6" fill="#1E293B" rx="1" />
                      
                      <rect x="14" y="46" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="24" y="46" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="34" y="52" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="14" y="58" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="28" y="66" width="6" height="6" fill="#1E293B" rx="1" />

                      <rect x="46" y="46" width="6" height="6" fill="#0C59D4" rx="1" />
                      <rect x="56" y="46" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="68" y="50" width="6" height="6" fill="#0C59D4" rx="1" />
                      <rect x="48" y="58" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="62" y="60" width="6" height="6" fill="#1E293B" rx="1" />

                      <rect x="46" y="76" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="58" y="74" width="6" height="6" fill="#0C59D4" rx="1" />
                      <rect x="68" y="78" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="46" y="88" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="58" y="90" width="8" height="8" fill="#0C59D4" rx="1" />
                      <rect x="70" y="92" width="6" height="6" fill="#1E293B" rx="1" />

                      <rect x="80" y="46" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="94" y="46" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="84" y="58" width="6" height="6" fill="#0C59D4" rx="1" />
                      <rect x="96" y="60" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="82" y="74" width="8" height="8" fill="#1E293B" rx="1" />
                      <rect x="94" y="76" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="84" y="88" width="6" height="6" fill="#1E293B" rx="1" />
                      <rect x="94" y="90" width="8" height="8" fill="#0C59D4" rx="1" />

                      {/* Small Center DLC Logo Icon */}
                      <rect x="52" y="52" width="16" height="16" rx="4" fill="#0C59D4" />
                      <circle cx="60" cy="58" r="2.5" fill="white" />
                      <path d="M56 65C56 62.5 58 62 60 62C62 62 64 62.5 64 65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* App Store & Google Play Badges */}
                  <div className="flex flex-col gap-3 w-full sm:w-auto">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.app"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-900 active:scale-95 text-white shadow-md transition-all duration-200 group"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M3.6 1.8L13.8 12L3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" />
                        <path fill="#FBBC04" d="M17.4 8.4L13.8 12L17.4 15.6L20.8 13.7C21.7 13.2 21.7 12.3 20.8 11.8L17.4 8.4Z" />
                        <path fill="#EA4335" d="M13.8 12L3.6 1.8C4.1 1.4 4.8 1.4 5.6 1.8L17.4 8.4L13.8 12Z" />
                        <path fill="#34A853" d="M13.8 12L17.4 15.6L5.6 22.2C4.8 22.6 4.1 22.6 3.6 22.2L13.8 12Z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                          GET IT ON
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-tight mt-0.5">
                          Google Play
                        </span>
                      </div>
                    </a>

                    <a
                      href="https://apps.apple.com/app/digital-labour-chowk"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-900 active:scale-95 text-white shadow-md transition-all duration-200 group"
                    >
                      <svg className="w-5 h-5 flex-shrink-0 fill-white" viewBox="0 0 24 24">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.13 16.69C20.1 16.79 19.7 18.17 18.71 19.5ZM14.88 5.25C15.54 4.45 16 3.32 15.87 2.2C14.9 2.24 13.69 2.85 13 3.65C12.4 4.34 11.88 5.5 12.03 6.6C13.12 6.68 14.23 6.05 14.88 5.25Z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                          Download on the
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-tight mt-0.5">
                          App Store
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: 3D Smartphone Mockup (Pop-Out Effect) */}
            <div className="lg:col-span-4 flex items-center justify-center relative overflow-visible">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[490px] my-6 lg:-my-20 lg:scale-145 xl:scale-155 lg:translate-y-4 transform hover:scale-[1.58] transition-transform duration-500 z-30 overflow-visible">
                <div className="relative w-full aspect-[896/1200] drop-shadow-[0_30px_60px_rgba(12,89,212,0.30)]">
                  <Image
                    src="/images/dlc-phone-mockup.webp"
                    alt="Digital Labour Chowk Smartphone App Mockup - Worker Profiles & Job Matching"
                    fill
                    priority
                    className="object-contain select-none pointer-events-none"
                    sizes="(max-width: 768px) 340px, (max-width: 1024px) 400px, 490px"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Floating Stat Badges */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 z-20">
              {/* Top Badge: 4.5+ User Ratings */}
              <div className="w-full sm:w-auto lg:w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/90 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                        4.5+
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block mt-1">
                      User Ratings
                    </span>
                  </div>
                </div>
                <div className="flex text-amber-400 mt-2.5 pt-2.5 border-t border-slate-100 text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-semibold text-slate-500 ml-1.5">Play Store & iOS</span>
                </div>
              </div>

              {/* Bottom Badge: 3.5 Lakh+ App Downloads */}
              <div className="w-full sm:w-auto lg:w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/90 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Download className="w-6 h-6 text-[#0C59D4]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                        3.5 Lakh+
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block mt-1">
                      App Downloads
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-slate-100 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11px]">350,000+ Registered Workers</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// =============================================================================
// MAIN HOME PAGE CONTENT COMPONENT (Clubbing All Landing Sections)
// =============================================================================
export default function HomeContent() {
  return (
    <>
      {/* SECTION 1: Hero Canvas (Vimeo Video with Audio Toggle) */}
      <Hero />

      {/* SECTION 2: Popular Searches (2-Row 3-Col Worker Categories) */}
      <PopularSearches />

      {/* HORIZONTAL BANNER: Bharat Ke Super Founders (6:57 Documentary Modal) */}
      <SuperFounderBanner />

      {/* SECTION 3: Curtain Reveal Scroll Animation (3 Stacking Interactive Cards) */}
      <CurtainRevealSection />

      {/* SECTION 4: Stats Marquee & Testimonials Split Section */}
      <StatsAndTestimonials />

      {/* SECTION 5: App Download CTA (3D Phone Mockup, QR Box & Floating Stat Badges) */}
      <AppDownloadSection />
    </>
  );
}
