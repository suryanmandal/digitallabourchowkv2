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
  HelpCircle,
  ChevronDown,
  Award,
  PhoneCall,
  ArrowUpRight,
  Calculator,
} from "lucide-react";

// =============================================================================
// SECTION 1: HERO IMAGE CAROUSEL (3 Core Business Pillars with Autoplay)
// =============================================================================
interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/images/ecosystem/enterprise-epc.webp",
    badge: "EPC & General Contractors",
    title: "India's Leading Construction",
    highlight: "Workforce Platform",
    description:
      "Connecting EPCs, developers, and builders with over 3.5 Lakh pre-verified tradesmen across India with biometric attendance and statutory compliance.",
    primaryCtaText: "Hire Manpower Now",
    primaryCtaHref: "https://onboarding.digitallabourchowk.com/login",
    secondaryCtaText: "Business Solutions",
    secondaryCtaHref: "/business",
  },
  {
    id: 2,
    image: "/images/ecosystem/worker-tradesman.webp",
    badge: "For Skilled Tradesmen & Craftsmen",
    title: "Aaj Ka Rozgar, Zero Commission &",
    highlight: "₹5 Lakhs Insurance",
    description:
      "Direct bank transfers (DBT), guaranteed daily wage rates, and dignified work opportunities without any middleman cuts.",
    primaryCtaText: "Download Worker App",
    primaryCtaHref: "https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc",
    secondaryCtaText: "Worker Benefits",
    secondaryCtaHref: "/worker",
  },
  {
    id: 3,
    image: "/images/ecosystem/contractor-builder.webp",
    badge: "For Subcontractors & Jamadars",
    title: "15-Minute Site Manpower Dispatch",
    highlight: "Across 6,000+ Towns",
    description:
      "Eliminate site idle time and project delays with on-demand allocation of certified masons, bar benders, shuttering carpenters, and helpers.",
    primaryCtaText: "Request Workforce",
    primaryCtaHref: "https://onboarding.digitallabourchowk.com/login",
    secondaryCtaText: "Contact Support",
    secondaryCtaHref: "/contact",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic slide rotation every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full m-0 p-0 overflow-hidden bg-black">
      {/* ========================================================================= */}
      {/* 🛠️ CAROUSEL CONTAINER SIZE: ADJUST DIV HEIGHT HERE                       */}
      {/* Current values: min-h-[360px] aspect-video sm:aspect-auto sm:h-[420px] lg:h-[500px] */}
      {/* ========================================================================= */}
      <div
        className="relative w-full min-h-[360px] aspect-video sm:aspect-auto sm:h-[420px] lg:h-[750px] overflow-hidden bg-slate-950 flex items-center justify-center m-0 p-0 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Dark Gradient Overlay for optimal text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10" />

              {/* Slide Content */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
                <div className="max-w-2xl sm:max-w-3xl">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md mb-2 sm:mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                    <span>{slide.badge}</span>
                  </span>

                  {/* Headline */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15] mb-2 sm:mb-3">
                    {slide.title} <br className="hidden sm:inline" />
                    <span className="text-[#3b82f6]">{slide.highlight}</span>
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-none max-w-xl mb-4 sm:mb-6 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                    <a
                      href={slide.primaryCtaHref}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-900/40 transition-all duration-200 active:scale-95 flex items-center gap-2"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href={slide.secondaryCtaHref}
                      className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all duration-200"
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous Navigation Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Pagination Dots (Bottom Center) */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === activeSlide
                  ? "w-7 sm:w-8 h-2 sm:h-2.5 bg-[#0C59D4]"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter (Bottom Right) */}
        <div className="hidden sm:block absolute bottom-5 right-6 z-30 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-white/80 font-mono text-xs backdrop-blur-md">
          0{activeSlide + 1} / 0{HERO_SLIDES.length}
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
              className="group relative bg-[#FBFBFB] hover:bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 h-[265px] sm:h-[285px] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Text: Rank & Category Name */}
              <div className="relative z-10 max-w-[62%] h-[115px] flex flex-col justify-start">
                <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2">
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
// SECTION 3: CURTAIN REVEAL SCROLL ANIMATION (3 Sticky Stacking Stakeholder Cards)
// =============================================================================
interface CurtainCard {
  id: string;
  buttonText: string;
  buttonHref: string;
  buttonColor: string;
  buttonHoverColor: string;
  buttonShadow: string;
  imageSrc: string;
  imageAlt: string;
  zIndex: number;
}

const CURTAIN_CARDS: CurtainCard[] = [
  {
    id: "find-job",
    buttonText: "FIND JOB",
    buttonHref: "/worker",
    buttonColor: "bg-[#0C59D4]",
    buttonHoverColor: "hover:bg-[#0947A8]",
    buttonShadow: "shadow-blue-600/35",
    imageSrc: "/images/black.webp",
    imageAlt: "Digital Labour Chowk - Find Job for skilled construction craftsmen",
    zIndex: 10,
  },
  {
    id: "find-workers",
    buttonText: "FIND WORKERS",
    buttonHref: "https://onboarding.digitallabourchowk.com/login",
    buttonColor: "bg-[#D4A017]",
    buttonHoverColor: "hover:bg-[#B8860B]",
    buttonShadow: "shadow-amber-600/35",
    imageSrc: "/images/black.webp",
    imageAlt: "Digital Labour Chowk - Find Workers for contractors and builders",
    zIndex: 20,
  },
  {
    id: "find-business",
    buttonText: "FIND BUSINESS",
    buttonHref: "/business",
    buttonColor: "bg-[#16A34A]",
    buttonHoverColor: "hover:bg-[#15803D]",
    buttonShadow: "shadow-green-600/35",
    imageSrc: "/images/black.webp",
    imageAlt: "Digital Labour Chowk - Find Business for enterprise partners and developers",
    zIndex: 30,
  },
];

export function CurtainRevealSection() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 pb-16 sm:pb-24 relative">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        {/* Top Unified Platform Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5EE] border border-[#FFD8BE] text-[#E65100] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#E65100] fill-[#E65100]" />
          <span>ONE UNIFIED PLATFORM</span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Connecting the Construction Workforce
        </h2>
        {/* <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Empowering workers, contractors, and businesses with a transparent, direct hiring ecosystem.
        </p> */}
      </div>

      {/* CURTAIN REVEAL CARDS STACKING TRACK */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 relative">
        {CURTAIN_CARDS.map((card, index) => {
          const isFirst = index === 0;
          const isLast = index === CURTAIN_CARDS.length - 1;

          return (
            <div
              key={card.id}
              className={`sticky top-24 sm:top-28 md:top-32 ${
                isLast ? "mb-0" : "mb-16 sm:mb-24"
              }`}
              style={{ zIndex: card.zIndex }}
            >
              {/* The Card Box with Curtain Cover Effect */}
              <div
                className={`relative w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-white overflow-hidden ${
                  !isFirst
                    ? "shadow-[0_-16px_36px_rgba(0,0,0,0.14),0_24px_48px_rgba(0,0,0,0.08)]"
                    : "shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                }`}
              >
                {/* Worker Image Cutout Container */}
                <div className="relative mx-auto h-[220px] sm:h-[300px] md:h-[370px] lg:h-[600px] flex items-end justify-center bg-white">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    priority={index === 0}
                    className="object-cover object-bottom select-none pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />

                  {/* FLOATING CTA BUTTON (Horizontally Centered at Bottom Edge) */}
                  {card.id !== "find-job" && card.id !== "find-workers" && card.id !== "find-business" && (
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <Link
                      href={card.buttonHref}
                      className={`inline-flex items-center gap-2 px-8 sm:px-11 py-3 sm:py-3.5 rounded-full ${card.buttonColor} ${card.buttonHoverColor} text-white font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase shadow-xl ${card.buttonShadow} transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-300`}
                    >
                      <span>{card.buttonText}</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
    <section className="w-full bg-[#FAFAFC] pt-0 pb-16 sm:pb-24 border-t-0 overflow-hidden">
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
          <div className="lg:col-span-4 bg-[#0C59D4] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[400px] lg:h-[405px]">
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
            <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-center gap-4">
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
                      {/* Speech Bubble Container with Downward Pointer - Exact Uniform Height */}
                      <div className="relative w-full bg-white rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200/80 flex flex-col justify-between h-[270px] sm:h-[280px]">
                        <div className="flex text-amber-400 mb-2 gap-0.5 shrink-0">
                          {[...Array(card.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <div className="flex-1 flex items-center justify-center my-auto overflow-hidden">
                          <p className="text-slate-700 text-sm sm:text-[14px] leading-relaxed italic line-clamp-6">
                            "{card.text}"
                          </p>
                        </div>

                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 pt-2.5 border-t border-slate-100 shrink-0 mt-auto">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>Verified Review • {card.location}</span>
                        </div>

                        {/* Downward Speech Bubble Pointer */}
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-r border-b border-slate-200/80 rotate-45 z-10" />
                      </div>

                      {/* Author Profile Information - Exact Uniform Height & Alignment */}
                      <div className="mt-5 flex flex-col items-center text-center h-[110px] justify-start w-full px-2">
                        <div
                          className={`w-12 h-12 rounded-full ${card.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-md ring-3 ring-white shrink-0`}
                        >
                          {card.avatarText}
                        </div>

                        <span className="mt-2.5 text-base font-extrabold text-slate-900 tracking-tight leading-tight truncate max-w-full">
                          {card.name}
                        </span>

                        <span className="text-xs font-bold text-[#0C59D4] mt-0.5 truncate max-w-full">
                          {card.role}
                        </span>

                        <span className="text-[11px] font-medium text-slate-500 truncate max-w-full">
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
// SECTION 5: HOW IT WORKS (Dual-Persona Interactive Stepper: Worker vs Contractor)
// =============================================================================
interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  points: string[];
  mockupTitle: string;
  mockupSubtitle: string;
  mockupBadge: string;
}

const WORKER_STEPS: StepItem[] = [
  {
    number: "01",
    title: "1-Minute Mobile Registration",
    subtitle: "Install the app, enter your phone number, and select your primary construction trade.",
    points: [
      "Available in 10+ regional Indian languages",
      "Choose your trade: Rajmistri, Carpenter, Painter, etc.",
      "Zero registration or agent fees",
    ],
    mockupTitle: "Craftsman Registration",
    mockupSubtitle: "Select trade & language",
    mockupBadge: "Instant Mobile OTP",
  },
  {
    number: "02",
    title: "Zero-Cost Aadhaar KYC",
    subtitle: "Complete instant Aadhaar verification directly from your phone to earn your verified badge.",
    points: [
      "100% government-backed Aadhaar KYC",
      "Free Digital Skill Card issued instantly",
      "Build your site rating & contractor trust",
    ],
    mockupTitle: "Digital Skill Card",
    mockupSubtitle: "100% Aadhaar KYC Verified",
    mockupBadge: "Verified Craftsman",
  },
  {
    number: "03",
    title: "Direct Work, Wages & Insurance",
    subtitle: "Receive daily job alerts, get paid directly into your bank account, and enjoy free accident insurance.",
    points: [
      "0% middleman commission on daily earnings",
      "Direct bank transfer (DBT) with wage slip",
      "₹5,00,000 Suraksha accident cover included",
    ],
    mockupTitle: "Daily Wage Transfer",
    mockupSubtitle: "₹5L Suraksha Cover Active",
    mockupBadge: "0% Commission",
  },
];

const CONTRACTOR_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Post Site Requirement",
    subtitle: "Specify required trades, headcount (2 to 100+), job site location, and reporting date in under 60 seconds.",
    points: [
      "Mason, bar benders, carpenters & helpers",
      "Specify daily rate or project contract",
      "Multi-site support across 6,000+ cities",
    ],
    mockupTitle: "Post Site Requirement",
    mockupSubtitle: "Urgent site deployment",
    mockupBadge: "2-Minute Setup",
  },
  {
    number: "02",
    title: "2-Hour Algorithmic Match",
    subtitle: "DLC's proprietary matching system assigns KYC-verified, skill-graded tradesmen ready for dispatch.",
    points: [
      "2-hour matching SLA across India",
      "Pre-screened tradesmen with verified past ratings",
      "Replaces chaotic physical chowk visits",
    ],
    mockupTitle: "Workforce Dispatched",
    mockupSubtitle: "Tradesmen arriving on site",
    mockupBadge: "2-Hour SLA Match",
  },
  {
    number: "03",
    title: "Biometric Attendance & Compliance",
    subtitle: "Track digital attendance, manage daily muster rolls, and receive 100% compliant GST, PF & ESIC invoices.",
    points: [
      "Mobile biometric & selfie attendance",
      "Full statutory compliance: PF, ESIC & GST bills",
      "Dedicated Enterprise Account Manager",
    ],
    mockupTitle: "Muster Roll & GST",
    mockupSubtitle: "Full statutory compliance",
    mockupBadge: "100% GST & PF/ESIC",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"contractor" | "worker">("contractor");
  const [activeStep, setActiveStep] = useState(0);

  const steps = activeTab === "contractor" ? CONTRACTOR_STEPS : WORKER_STEPS;
  const currentStep = steps[activeStep] || steps[0];

  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0C59D4]" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How Digital Labour Chowk Works
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
             Get started in 3 simple steps.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="inline-flex items-center bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-sm mt-8">
            <button
              onClick={() => { setActiveTab("contractor"); setActiveStep(0); }}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "contractor"
                  ? "bg-[#D4A017] text-white shadow-md shadow-amber-600/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <HardHat className="w-4 h-4" />
              <span>For Contractors & Builders</span>
            </button>

            <button
              onClick={() => { setActiveTab("worker"); setActiveStep(0); }}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "worker"
                  ? "bg-[#0C59D4] text-white shadow-md shadow-blue-600/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Workers & Craftsmen</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Step Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-7 border transition-all duration-300 ${
                    isActive
                      ? activeTab === "contractor"
                        ? "bg-white border-[#D4A017] shadow-lg shadow-amber-500/10 ring-2 ring-[#D4A017]/20 scale-[1.01]"
                        : "bg-white border-[#0C59D4] shadow-lg shadow-blue-500/10 ring-2 ring-[#0C59D4]/20 scale-[1.01]"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? activeTab === "contractor"
                            ? "bg-[#D4A017] text-white shadow-md shadow-amber-600/25"
                            : "bg-[#0C59D4] text-white shadow-md shadow-blue-600/25"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                          {step.title}
                        </h3>
                        {isActive && (
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                            activeTab === "contractor" ? "bg-amber-50 text-[#B45309]" : "bg-blue-50 text-[#0C59D4]"
                          }`}>
                            ACTIVE STEP
                          </span>
                        )}
                      </div>

                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.subtitle}
                      </p>

                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                                activeTab === "contractor" ? "text-[#D4A017]" : "text-[#0C59D4]"
                              }`} />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Simulated App UI Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[2.5rem] bg-slate-900 p-4 sm:p-5 shadow-2xl border-4 border-slate-800">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4" />

              {/* Screen Content */}
              <div className="bg-white rounded-3xl p-6 min-h-[400px] flex flex-col justify-between shadow-inner">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0C59D4] flex items-center justify-center text-white font-black text-xs">
                      DLC
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Digital Labour Chowk</div>
                      <div className="text-[10px] text-slate-400">Step {currentStep.number} of 03</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                    Live
                  </span>
                </div>

                {/* Body Preview */}
                <div className="my-auto py-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 shadow-lg ${
                    activeTab === "contractor" ? "bg-[#D4A017] shadow-amber-600/30" : "bg-[#0C59D4] shadow-blue-600/30"
                  }`}>
                    {activeTab === "contractor" ? <HardHat className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                  </div>

                  <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 ${
                    activeTab === "contractor" ? "bg-amber-50 text-[#B45309]" : "bg-blue-50 text-[#0C59D4]"
                  }`}>
                    {currentStep.mockupBadge}
                  </span>

                  <h4 className="text-lg font-black text-slate-900 tracking-tight">
                    {currentStep.mockupTitle}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentStep.mockupSubtitle}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="border-t border-slate-100 pt-3">
                  <Link
                    href="https://onboarding.digitallabourchowk.com/login"
                    className={`w-full py-3 rounded-xl font-extrabold text-xs text-white uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 ${
                      activeTab === "contractor" ? "bg-[#D4A017] hover:bg-[#B8860B]" : "bg-[#0C59D4] hover:bg-[#0947A8]"
                    }`}
                  >
                    <span>{activeTab === "contractor" ? "Hire Workforce Now" : "Register as Craftsman"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
// SECTION 6: ENTERPRISE BUILDER & EPC PARTNER WALL (Institutional Credibility)
// =============================================================================
const ENTERPRISE_PARTNERS = [
  { name: "L&T Construction", category: "Heavy Civil & Metro", location: "Pan-India" },
  { name: "Godrej Construction", category: "Commercial & Residential", location: "Mumbai & NCR" },
  { name: "Sobha Developers", category: "Premium Real Estate", location: "South & West" },
  { name: "Kalpataru Limited", category: "Urban Infrastructure", location: "Western India" },
  { name: "Tata Projects", category: "Industrial & Transport", location: "National Corridors" },
  { name: "Shapoorji Pallonji", category: "Engineering & Mega Projects", location: "Pan-India" },
  { name: "BSES Infrastructure", category: "Power & Utility Grid", location: "North India" },
  { name: "DLF Building India", category: "Commercial Parks", location: "NCR & Haryana" },
];

export function EnterprisePartnerWall() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
            <Building2 className="w-3.5 h-3.5 text-slate-700" />
            <span>ENTERPRISE CLIENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by India’s Premier Builders & EPC Giants
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            From smart cities and national highways to luxury high-rises, leading construction enterprises trust DLC for bulk, compliant tradesmen mobilization.
          </p>
        </div>

        {/* 4-Column Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {ENTERPRISE_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-black text-xs text-slate-800 shadow-xs group-hover:bg-[#0C59D4] group-hover:text-white transition-colors">
                  {partner.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  Active Site
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-[#0C59D4] transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {partner.category}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{partner.location}</span>
                <span className="font-semibold text-slate-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Verified Partner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 7: INTERACTIVE CONTRACTOR SAVINGS & ROI CALCULATOR
// =============================================================================
export function ContractorSavingsCalculator() {
  const [workers, setWorkers] = useState(15);
  const [duration, setDuration] = useState(1); // months

  // Calculation parameters
  const hoursSaved = Math.round(workers * duration * 8);
  const rupeesSaved = (workers * duration * 3500).toLocaleString("en-IN");
  const attendanceAccuracy = "99.4%";

  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#B45309] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
            <Calculator className="w-3.5 h-3.5 text-[#B45309]" />
            <span>ROI & TIME CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Calculate Your Job Site Savings
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            See how much project management time and recruiting overhead you eliminate by hiring verified tradesmen through Digital Labour Chowk.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Slider: Number of Workers */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-extrabold text-slate-900">
                    Daily Tradesmen / Helpers Needed on Site:
                  </label>
                  <span className="text-2xl font-black text-[#0C59D4] px-4 py-1 rounded-xl bg-blue-50 border border-blue-200">
                    {workers} Workers
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  step="1"
                  value={workers}
                  onChange={(e) => setWorkers(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C59D4]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>2 Workers (Small Job)</span>
                  <span>30 Workers (Medium Site)</span>
                  <span>60+ Workers (Large Project)</span>
                </div>
              </div>

              {/* Duration Buttons */}
              <div>
                <label className="text-sm sm:text-base font-extrabold text-slate-900 block mb-3">
                  Project Duration:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "1 Month", val: 1 },
                    { label: "3 Months", val: 3 },
                    { label: "6 Months", val: 6 },
                  ].map((dur) => (
                    <button
                      key={dur.val}
                      onClick={() => setDuration(dur.val)}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all ${
                        duration === dur.val
                          ? "bg-[#D4A017] text-white border-[#D4A017] shadow-md shadow-amber-600/25"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comparison Table Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
                  <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                    Traditional Chowk
                  </span>
                  <ul className="text-xs text-rose-950 space-y-1.5 font-medium">
                    <li>• 3-4 days lost hiring at chowk</li>
                    <li>• 15% middleman commission markups</li>
                    <li>• Zero identity or skill proof</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    Digital Labour Chowk
                  </span>
                  <ul className="text-xs text-emerald-950 space-y-1.5 font-medium">
                    <li>• 2-Hour rapid site matching</li>
                    <li>• 0% Middleman deductions</li>
                    <li>• 100% Aadhaar KYC verified</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Live Savings Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-7 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
                  Estimated Site Value
                </span>

                <div className="mb-6">
                  <div className="text-xs text-slate-400 font-medium">Estimated Contractor Cost Savings:</div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 text-emerald-400">
                    ₹{rupeesSaved}*
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    *Savings from reduced idle site days, eliminated middleman commissions & zero recruiter fees.
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Project Hours Saved:</span>
                    <span className="font-extrabold text-white">{hoursSaved} Hours</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Biometric Attendance:</span>
                    <span className="font-extrabold text-emerald-400">{attendanceAccuracy}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Accident Insurance:</span>
                    <span className="font-extrabold text-blue-400">₹5,00,000 / Worker</span>
                  </div>
                </div>

                <Link
                  href="https://onboarding.digitallabourchowk.com/login"
                  className="mt-8 w-full py-3.5 px-6 rounded-xl bg-[#D4A017] hover:bg-[#B8860B] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-98"
                >
                  <span>Hire Verified Workers Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// =============================================================================
// SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
// =============================================================================
const FAQ_ITEMS = [
  {
    q: "How does Digital Labour Chowk verify workers and tradesmen?",
    a: "Every craftsman on our platform undergoes a multi-layer verification process including government Aadhaar KYC verification, phone number authentication, prior trade experience validation, and contractor skill ratings.",
  },
  {
    q: "Is there really 0% commission on worker wages?",
    a: "Yes, 100% transparent. Digital Labour Chowk does not deduct any middleman commission from worker earnings. Craftsmen receive their full hard-earned daily and weekly wages directly in their bank accounts via Direct Benefit Transfer (DBT).",
  },
  {
    q: "How fast can a contractor hire labour for urgent site work?",
    a: "Our algorithmic matching system connects local contractors with available verified craftsmen within our 2-hour matching SLA. For bulk deployments (50+ workers), our dedicated enterprise team mobilizes manpower within 24 to 48 hours.",
  },
  {
    q: "What statutory compliance is provided for large enterprise and EPC projects?",
    a: "For registered enterprises and developers, DLC provides complete statutory compliance management, including Provident Fund (PF), Employee State Insurance (ESIC), Building & Other Construction Workers (BOCW) welfare compliance, and GST-compliant invoicing.",
  },
  {
    q: "What is the ₹5,00,000 Suraksha Accident Insurance coverage?",
    a: "Active craftsmen working on verified DLC project sites are covered under our complimentary ₹5 Lakh accidental insurance scheme, protecting workers and their families against on-site occupational hazards.",
  },
  {
    q: "Which cities across India is Digital Labour Chowk available in?",
    a: "Digital Labour Chowk is active in over 6,000+ cities, towns, and construction corridors across 20+ states in India, spanning major metros (Delhi-NCR, Mumbai, Bangalore, Hyderabad) and tier-2/tier-3 construction hubs.",
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#0C59D4]" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about hiring, working, insurance, and compliance on Digital Labour Chowk.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#0C59D4]/60 shadow-md ring-1 ring-[#0C59D4]/15"
                    : "bg-white/80 border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#0C59D4] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-normal">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// =============================================================================
// SECTION 9: NEWS & MEDIA STRIP (National Recognition & Press Coverage)
// =============================================================================
const MEDIA_STORIES = [
  {
    outlet: "Amazon MX Player",
    tag: "Documentary Feature",
    headline: "Featured on 'Bharat Ke Super Founders'",
    summary: "National documentary showcasing how DLC digitally connects over 3.5 Lakh craftsmen with India's building boom.",
    badgeBg: "bg-amber-50 text-[#B45309] border-amber-200",
  },
  {
    outlet: "Dainik Bhaskar",
    tag: "National Print & Web",
    headline: "Transforming Physical Chowks into Digital Platforms",
    summary: "Highlighting how digital identity, transparent wages, and direct DBT are uplifting construction families across India.",
    badgeBg: "bg-blue-50 text-[#0C59D4] border-blue-200",
  },
  {
    outlet: "Aaj Tak & India Today",
    tag: "Television Broadcast",
    headline: "Zero Middlemen: Daily Direct Wages for Tradesmen",
    summary: "Feature report on eliminating wage leakage and providing ₹5 Lakh accident insurance for site workers.",
    badgeBg: "bg-emerald-50 text-[#16A34A] border-emerald-200",
  },
  {
    outlet: "Startup India & DPIIT",
    tag: "National Recognition",
    headline: "Recognized Social Impact Workforce Platform",
    summary: "Recognized for driving financial inclusion, digital literacy, and formalized employment in construction.",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export function NewsAndMediaSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span>DLC IN THE NEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Recognized Across National Media
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Covered by leading national broadcasts, newspapers, and streaming documentaries for modernizing India’s unorganized construction labor market.
          </p>
        </div>

        {/* 4-Card Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_STORIES.map((story, idx) => (
            <div
              key={idx}
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${story.badgeBg}`}>
                    {story.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors" />
                </div>

                <div className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                  {story.outlet}
                </div>

                <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-purple-700 transition-colors">
                  {story.headline}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                Verified Media Feature →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// =============================================================================
// SECTION 10: QUICK ENTERPRISE LEAD CAPTURE (Pre-Footer Dispatch Box)
// =============================================================================
export function QuickLeadCapture() {
  const [selectedTrade, setSelectedTrade] = useState("Mason");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const trades = [
    "Mason",
    "Carpenter",
    "Painter",
    "Electrician",
    "Plumber",
    "Bar Bender",
    "Helper",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#FAFAFC] py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>Priority Workforce Dispatch</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Need Verified Construction Workforce On-Site Tomorrow?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Post your manpower requirements in 60 seconds. Our site coordinator will call you back within 15 minutes with verified tradesmen availability.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-sm sm:text-base flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <span>Requirement received! Our site mobilization team will call you within 15 minutes.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trade Chips */}
              <div>
                <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block mb-2.5">
                  Select Required Trade:
                </label>
                <div className="flex flex-wrap gap-2">
                  {trades.map((trade) => (
                    <button
                      type="button"
                      key={trade}
                      onClick={() => setSelectedTrade(trade)}
                      className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
                        selectedTrade === trade
                          ? "bg-[#D4A017] text-white border-[#D4A017] shadow-sm shadow-amber-600/30"
                          : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800"
                      }`}
                    >
                      {trade}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">
                    Your Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">
                    City / Site Location:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Noida, Gurgaon, Pune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 font-medium"
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-1 flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#0C59D4] hover:bg-[#0947A8] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    <span>Request Callback (15m)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  100% Aadhaar KYC Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  2-Hour Matching SLA
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  0% Middleman Cut
                </span>
              </div>
            </form>
          )}

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

      {/* SECTION 5: How It Works (Dual-Persona Interactive Stepper: Worker vs Contractor) */}
      <HowItWorksSection />

      {/* SECTION 6: Enterprise Builder & EPC Partner Wall */}
      <EnterprisePartnerWall />

      {/* SECTION 7: Contractor Savings & ROI Calculator */}
      <ContractorSavingsCalculator />

      {/* SECTION 8: App Download CTA (3D Phone Mockup, QR Box & Floating Stat Badges) */}
      <AppDownloadSection />

      {/* SECTION 9: Frequently Asked Questions (FAQ Accordion) */}
      <HomeFAQSection />

      {/* SECTION 10: News & Media Strip (National Recognition & Press Coverage) */}
      <NewsAndMediaSection />

      {/* SECTION 11: Quick Enterprise Lead Capture (Pre-Footer Dispatch Box) */}
      <QuickLeadCapture />
    </>
  );
}
