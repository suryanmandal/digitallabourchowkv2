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
  Play,
  X,
  Shield,
  Plus,
  Minus,
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
      {/* 🛠️ CAROUSEL CONTAINER SIZE: ADAPTIVE ASPECT RATIO (Fiona Diamonds UX)     */}
      {/* Mobile: Tall portrait hero (h-[76vh] min-h-[520px])                       */}
      {/* Tablet: sm:h-[480px] md:h-[540px]                                         */}
      {/* Desktop: Cinematic widescreen (lg:h-[580px] xl:h-[640px])                 */}
      {/* ========================================================================= */}
      <div
        className="relative w-full h-[76vh] min-h-[520px] max-h-[660px] sm:h-[480px] sm:min-h-0 sm:max-h-none md:h-[540px] lg:h-[580px] xl:h-[640px] overflow-hidden bg-slate-950 flex items-center justify-center m-0 p-0 select-none"
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

              {/* Mobile Dual Gradient Vignette (Leaves center image subject clear like Fiona Diamonds) */}
              <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/85 via-black/20 to-black/90 z-10 pointer-events-none" />

              {/* Desktop Left-to-Right Cinematic Gradient */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15 z-10 pointer-events-none" />

              {/* Slide Content: Shuffled layout (Top title, middle image focus, bottom CTAs on mobile) */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between sm:justify-center py-6 sm:py-0">
                
                {/* TOP BLOCK: Eyebrow Badge & Main Headline */}
                <div className="max-w-2xl sm:max-w-3xl pt-2 sm:pt-0">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md mb-2 sm:mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                    <span>{slide.badge}</span>
                  </span>

                  {/* Headline */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md sm:drop-shadow-none">
                    {slide.title} <br className="hidden sm:inline" />
                    <span className="text-[#3b82f6]">{slide.highlight}</span>
                  </h1>

                  {/* Desktop Description & Action Buttons (Grouped in left column on desktop) */}
                  <p className="hidden sm:block text-sm sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-none max-w-xl mt-3 mb-6 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="hidden sm:flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                    <a
                      href={slide.primaryCtaHref}
                      className="px-6 py-3 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-900/40 transition-all duration-200 active:scale-95 flex items-center gap-2"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href={slide.secondaryCtaHref}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all duration-200"
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  </div>
                </div>

                {/* MOBILE BOTTOM BLOCK: Anchored above pagination dots (Fiona Diamonds UX) */}
                <div className="sm:hidden flex flex-col pb-8">
                  <p className="text-xs text-slate-200 line-clamp-2 mb-3.5 leading-relaxed drop-shadow-sm">
                    {slide.description}
                  </p>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={slide.primaryCtaHref}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#0C59D4] active:bg-[#0947AD] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-blue-900/50 flex items-center justify-center gap-1.5"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={slide.secondaryCtaHref}
                      className="py-3 px-3.5 rounded-xl bg-white/15 active:bg-white/25 text-white font-semibold text-xs border border-white/25 backdrop-blur-md text-center"
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
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all active:scale-90"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all active:scale-90"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Pagination Dots (Bottom Center - Fiona Diamonds style) */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === activeSlide
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#0C59D4] shadow-xs"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 hover:bg-white/90"
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
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (idx: number) => {
    const nextIdx = Math.max(0, Math.min(idx, POPULAR_SEARCH_CARDS.length - 1));
    setMobileIndex(nextIdx);
    if (scrollRef.current) {
      const child = scrollRef.current.children[nextIdx] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.children[0]?.clientWidth || 300;
    const newIndex = Math.round(scrollLeft / (itemWidth + 16));
    if (newIndex >= 0 && newIndex < POPULAR_SEARCH_CARDS.length && newIndex !== mobileIndex) {
      setMobileIndex(newIndex);
    }
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MOBILE VIEW: Interactive Swipeable Card Carousel (md:hidden) */}
        <div className="md:hidden">
          {/* Mobile Header with Title and Left/Right Nav Controls */}
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Popular Searches <br />
              <span className="text-slate-950 font-black">on Digital</span> <br />
              <span className="text-slate-950 font-black">Labour Chowk</span>
            </h2>

            {/* Mobile Carousel Navigation Arrows */}
            <div className="flex items-center gap-2 mb-1 flex-shrink-0">
              <button
                type="button"
                onClick={() => scrollToIndex(mobileIndex - 1)}
                disabled={mobileIndex === 0}
                aria-label="Previous category"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-800 transition-all active:scale-95 border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(mobileIndex + 1)}
                disabled={mobileIndex === POPULAR_SEARCH_CARDS.length - 1}
                aria-label="Next category"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-800 transition-all active:scale-95 border border-slate-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Carousel Snap Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-2 -mx-4 px-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {POPULAR_SEARCH_CARDS.map((card, idx) => (
              <div key={card.rank} className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center">
                <Link
                  href={card.href}
                  className="group relative bg-[#FBFBFB] hover:bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 h-[280px] flex flex-col justify-between overflow-hidden block"
                >
                  {/* Top Text: Rank & Category Name */}
                  <div className="relative z-10 max-w-[62%] h-[115px] flex flex-col justify-start">
                    <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2">
                      TRENDING AT #{card.rank}
                    </span>

                    <h3 className="text-xl font-bold text-slate-950 leading-tight group-hover:text-[#0C59D4] transition-colors">
                      {card.title} {card.subtitle && <span className="block">{card.subtitle}</span>}
                    </h3>

                    <p className="text-xs font-medium text-slate-500 mt-1">
                      {card.hindi}
                    </p>
                  </div>

                  {/* Watermark Background Outline Text */}
                  <div
                    aria-hidden="true"
                    className="absolute right-4 bottom-2 text-5xl font-black stroke-watermark pointer-events-none select-none z-0"
                  >
                    {card.watermark}
                  </div>

                  {/* Cutout Worker Photo (Anchored Bottom-Right) */}
                  <div className="absolute right-0 bottom-0 w-40 h-52 z-10 pointer-events-none">
                    <Image
                      src={card.imageSrc}
                      alt={card.altText}
                      fill
                      sizes="160px"
                      className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                      priority={idx <= 1}
                    />
                  </div>

                  {/* Bottom-Left Action Link */}
                  <div className="relative z-10 pt-4 flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-[#0C59D4] transition-colors">
                    <span>View all</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {POPULAR_SEARCH_CARDS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to card ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === mobileIndex
                    ? "w-6 h-1.5 bg-[#0C59D4]"
                    : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW: Preserved 100% Exactly (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
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
    <section className="w-full bg-white pt-16 sm:pt-20 pb-6 relative">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
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
                isLast ? "mb-0" : "mb-4 sm:mb-6"
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
// SECTION 4: STATS COUNTER & TESTIMONIALS (Split Section with Auto-Carousel)
// =============================================================================
interface MetricItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const STATS_METRICS: MetricItem[] = [
  {
    id: "workers",
    target: 350000,
    suffix: "+",
    label: "REGISTERED WORKERS",
    icon: <Users className="w-4 h-4 text-[#0C59D4]" />,
  },
  {
    id: "contractors",
    target: 20000,
    suffix: "+",
    label: "TRUSTED CONTRACTORS",
    icon: <HardHat className="w-4 h-4 text-[#D4A017]" />,
  },
  {
    id: "companies",
    target: 50,
    suffix: "+",
    label: "BIG CONSTRUCTION COMPANIES",
    icon: <Building2 className="w-4 h-4 text-[#16A34A]" />,
  },
  {
    id: "cities",
    target: 6000,
    suffix: "+",
    label: "CITIES ACROSS INDIA",
    icon: <MapPin className="w-4 h-4 text-[#E65100]" />,
  },
  {
    id: "projects",
    target: 15000,
    suffix: "+",
    label: "PROJECTS DELIVERED",
    icon: <CheckCircle2 className="w-4 h-4 text-[#0C59D4]" />,
  },
  {
    id: "rate",
    target: 98,
    suffix: "%",
    label: "ON-TIME DEPLOYMENT RATE",
    icon: <TrendingUp className="w-4 h-4 text-[#16A34A]" />,
  },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

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
  avatarImage?: string;
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
    avatarImage: "/images/testimonials/rajesh-kumar.jpg",
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
    avatarImage: "/images/testimonials/amit-sharma.jpg",
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
    avatarImage: "/images/testimonials/sandeep-verma.jpg",
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
    avatarImage: "/images/testimonials/vikram-malhotra.jpg",
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
    avatarImage: "/images/testimonials/mohan-lal.jpg",
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
    avatarImage: "/images/testimonials/pooja-hegde.jpg",
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
    avatarImage: "/images/testimonials/dinesh-patel.jpg",
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
    avatarImage: "/images/testimonials/sunil-yadav.jpg",
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
    avatarImage: "/images/testimonials/karanbir-singh.jpg",
  },
];

export function StatsAndTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const totalCards = TESTIMONIALS_DATA.length;
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Interactive Horizontal Drag / Touch Swipe State
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const wheelLock = useRef<boolean>(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

  // Drag / Touch gesture handlers for horizontal swiping
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartY.current = clientY;
    isHorizontalSwipe.current = null;
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging || dragStartX.current === null || dragStartY.current === null) return;
    const deltaX = clientX - dragStartX.current;
    const deltaY = clientY - dragStartY.current;

    if (isHorizontalSwipe.current === null) {
      if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
        isHorizontalSwipe.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    if (isHorizontalSwipe.current) {
      setDragOffset(deltaX);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 40;
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }

    setDragOffset(0);
    dragStartX.current = null;
    dragStartY.current = null;
    isHorizontalSwipe.current = null;
  };

  // Two-finger trackpad horizontal wheel listener
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (!wheelLock.current) {
        wheelLock.current = true;
        if (e.deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        setTimeout(() => {
          wheelLock.current = false;
        }, 500);
      }
    }
  };

  // Auto-slide every 5.5s (pauses while actively swiping/dragging)
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(interval);
  }, [maxIndex, isDragging]);

  return (
    <section className="w-full bg-[#FAFAFC] pt-0 pb-6 sm:pb-10 border-t-0 overflow-hidden">
      {/* PART A: TOP HORIZONTAL STATS BAR (Stationary Responsive Grid with Scroll Count-Up Animation) */}
      <div ref={statsRef} className="w-full mb-16 sm:mb-20">
        <div className="w-full bg-white border-y border-slate-200/90 py-6 sm:py-7 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-6 lg:gap-4 items-center">
              {STATS_METRICS.map((metric, idx) => (
                <div
                  key={metric.id}
                  className={`flex items-center justify-start lg:justify-center group cursor-default ${
                    idx !== STATS_METRICS.length - 1 ? "lg:border-r lg:border-slate-200 lg:pr-4" : ""
                  }`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 group-hover:border-blue-300 transition-all">
                    {metric.icon}
                  </div>

                  <div className="flex flex-col text-left ml-3 min-w-0">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none tabular-nums">
                      <AnimatedCounter
                        target={metric.target}
                        suffix={metric.suffix}
                        isVisible={hasAnimated}
                      />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase mt-1 leading-tight">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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

          {/* RIGHT CAROUSEL (Review Cards Container with Touch Swipe, Mouse Drag, & Horizontal Wheel) */}
          <div
            className="lg:col-span-8 flex flex-col justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onWheel={handleWheel}
            onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
            onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchEnd={handleDragEnd}
          >
            <div className="relative w-full overflow-hidden">
              <div
                className={`flex ${isDragging ? "transition-none" : "transition-transform duration-500 ease-out"}`}
                style={{
                  transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% + ${dragOffset}px))`,
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
                          className={`relative w-12 h-12 rounded-full overflow-hidden ${card.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-md ring-2 ring-white shrink-0`}
                        >
                          {card.avatarImage ? (
                            <Image
                              src={card.avatarImage}
                              alt={card.name}
                              fill
                              unoptimized
                              priority
                              sizes="48px"
                              className="object-cover"
                            />
                          ) : (
                            card.avatarText
                          )}
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
// PRESERVED: ORIGINAL 3D PHONE MODEL (Kept for future reuse or alternate views)
// =============================================================================
export function PreservedSingle3DPhoneMockup() {
  return (
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
  );
}

// =============================================================================
// SECTION 5: APP DOWNLOAD CTA (Expansive Edge-to-Edge Banner, Morph Phone Showcase & Geometric Vector Murals)
// =============================================================================
export function AppDownloadSection() {
  const [activeApp, setActiveApp] = useState<"rojgar" | "thekedar">("rojgar");

  return (
    <section className="w-full bg-[#FAFAFC] py-6 sm:py-10 lg:py-14 overflow-hidden relative">
      {/* Expansive Edge-to-Edge Container with Narrow Lateral Margins */}
      <div className="w-full max-w-[1536px] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Massive Brand Blue Canvas with Custom Construction Vector Murals */}
        <div className="relative w-full rounded-[2.2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] bg-gradient-to-br from-[#0C59D4] via-[#094BB5] to-[#063380] border border-blue-400/30 shadow-[0_30px_90px_-20px_rgba(12,89,212,0.45)] overflow-hidden min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex flex-col justify-between">
          
          {/* ===================================================================== */}
          {/* BACKGROUND VECTOR ARTWORK: CONSTRUCTION & ARCHITECTURAL MOTIFS       */}
          {/* (Inspired by Image 2 graphic composition, customized for DLC)         */}
          {/* ===================================================================== */}
          
          {/* Top-Right & Flank: Stylized Tower Crane & Overlapping Blueprint Polygons */}
          <div className="absolute -top-10 -right-10 w-[360px] sm:w-[480px] lg:w-[620px] xl:w-[720px] h-[480px] sm:h-[600px] lg:h-[720px] pointer-events-none select-none z-10 overflow-hidden">
            <svg
              viewBox="0 0 720 720"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-contain"
            >
              <defs>
                <linearGradient id="craneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="polyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#0C59D4" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="polyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="amberAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.08" />
                </linearGradient>
              </defs>

              {/* Sweeping Architectural Polygons & Petal Shapes (replacing floral elements) */}
              <path
                d="M720 0C540 80 420 220 380 420C480 340 600 280 720 260V0Z"
                fill="url(#polyGrad1)"
              />
              <path
                d="M720 180C580 240 480 360 440 540C540 460 640 420 720 400V180Z"
                fill="url(#polyGrad2)"
              />
              <path
                d="M680 0C520 120 460 260 420 400C380 280 440 140 560 40L680 0Z"
                fill="url(#amberAccent)"
              />
              
              {/* Drafting Compass Blueprint Arcs */}
              <circle cx="680" cy="40" r="260" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="680" cy="40" r="380" stroke="rgba(56,189,248,0.15)" strokeWidth="1.5" />
              <circle cx="680" cy="40" r="500" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Stylized Tower Crane Vector Silhouette */}
              <g opacity="0.35" transform="translate(320, 40)">
                {/* Vertical Mast Column */}
                <rect x="220" y="80" width="24" height="420" fill="none" stroke="white" strokeWidth="2" />
                {/* Mast Cross Bracing (X-trusses) */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <g key={i}>
                    <line x1="220" y1={80 + i * 50} x2="244" y2={130 + i * 50} stroke="white" strokeWidth="1.5" />
                    <line x1="244" y1={80 + i * 50} x2="220" y2={130 + i * 50} stroke="white" strokeWidth="1.5" />
                  </g>
                ))}
                {/* Operator Cabin */}
                <rect x="206" y="55" width="22" height="26" rx="3" fill="#38BDF8" opacity="0.8" />
                <circle cx="217" cy="68" r="4" fill="white" />
                {/* Crane Peak Tower (A-Frame) */}
                <polygon points="232,0 216,55 248,55" fill="none" stroke="white" strokeWidth="2" />
                {/* Horizontal Working Jib (Boom) */}
                <line x1="-120" y1="55" x2="360" y2="55" stroke="white" strokeWidth="3" />
                <line x1="-120" y1="75" x2="360" y2="75" stroke="white" strokeWidth="2" />
                {/* Jib Internal Trusses */}
                {[-100, -50, 0, 50, 100, 150, 200, 250, 300].map((x, idx) => (
                  <line key={idx} x1={x} y1="55" x2={x + 25} y2="75" stroke="white" strokeWidth="1.2" />
                ))}
                {/* Counterweight Block on left */}
                <rect x="-140" y="45" width="30" height="38" rx="2" fill="#F59E0B" opacity="0.9" />
                {/* Tension Tie Cables from Peak */}
                <line x1="232" y1="0" x2="-120" y2="55" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="232" y1="0" x2="180" y2="55" stroke="#38BDF8" strokeWidth="1.5" />
                <line x1="232" y1="0" x2="320" y2="55" stroke="#38BDF8" strokeWidth="1.5" />
                {/* Trolley & Hoist Cable holding structural I-Beam */}
                <rect x="120" y="75" width="16" height="8" rx="1" fill="white" />
                <line x1="128" y1="83" x2="128" y2="180" stroke="#38BDF8" strokeWidth="1.5" />
                <line x1="128" y1="180" x2="110" y2="205" stroke="white" strokeWidth="1.2" />
                <line x1="128" y1="180" x2="146" y2="205" stroke="white" strokeWidth="1.2" />
                {/* Suspended Steel Beam */}
                <rect x="90" y="205" width="76" height="10" rx="1" fill="#F59E0B" />
              </g>
            </svg>
          </div>

          {/* Top-Left Corner: Architectural Blueprint Curves & Geometric Contour Shapes */}
          <div className="absolute -top-12 -left-12 w-[300px] sm:w-[420px] lg:w-[520px] h-[300px] sm:h-[420px] lg:h-[520px] pointer-events-none select-none z-10 overflow-hidden">
            <svg
              viewBox="0 0 520 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-contain"
            >
              <path
                d="M0 0V380C140 340 260 240 320 120C240 60 120 20 0 0Z"
                fill="rgba(56,189,248,0.18)"
              />
              <path
                d="M0 0V260C100 220 180 140 220 40L0 0Z"
                fill="rgba(255,255,255,0.10)"
              />
              <circle cx="20" cy="20" r="280" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="20" cy="20" r="180" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
            </svg>
          </div>

          {/* Atmospheric Ambient Glows */}
          <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-sky-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-500/25 rounded-full blur-[120px] pointer-events-none" />

          {/* ===================================================================== */}
          {/* MAIN THREE-COLUMN STAGE:                                              */}
          {/* Left Phone (Rojgar) | Center Conversion Hub | Right Phone (Thekedar)   */}
          {/* ===================================================================== */}
          <div className="relative z-20 w-full h-full flex flex-col justify-between pt-10 sm:pt-14 pb-0 px-4 sm:px-8 lg:px-10">
            
            {/* -------------------- CENTER CONVERSION HUB -------------------- */}
            <div className="max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto text-center flex flex-col items-center">
              
              {/* Category Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-lg mb-4 sm:mb-5">
                <Smartphone className="w-3.5 h-3.5 text-sky-300" />
                <span>DLC Mobile Ecosystem • India</span>
              </div>

              {/* Bold High-Impact Headline (Image 2 Typography Style) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black text-white tracking-tight leading-[1.08] drop-shadow-sm">
                Download the app now!
              </h2>

              {/* Persona Switcher Tabs */}
              <div className="inline-flex items-center bg-black/25 backdrop-blur-md p-1 rounded-2xl border border-white/20 shadow-inner mt-4 sm:mt-5">
                <button
                  onClick={() => setActiveApp("rojgar")}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-extrabold tracking-wide transition-all ${
                    activeApp === "rojgar"
                      ? "bg-white text-[#0C59D4] shadow-md"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Rojgar App (Workers)</span>
                </button>

                <button
                  onClick={() => setActiveApp("thekedar")}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-extrabold tracking-wide transition-all ${
                    activeApp === "thekedar"
                      ? "bg-[#F59E0B] text-slate-950 shadow-md"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Thekedar App (Contractors)</span>
                </button>
              </div>

              {/* Persuasive Dynamic Subheading */}
              <p className="mt-4 text-xs sm:text-sm lg:text-base text-blue-100/90 leading-relaxed max-w-lg">
                {activeApp === "rojgar"
                  ? "Digital Labour Chowk Rojgar connects skilled tradesmen directly with contractors. Find verified daily wage work with 0% commission and same-day direct bank transfers."
                  : "Digital Labour Chowk Thekedar empowers builders and contractors to deploy 50+ pre-screened tradesmen in 2 hours with biometric muster rolls and 100% GST/PF compliance."}
              </p>

              {/* Value Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-3">
                {activeApp === "rojgar" ? (
                  <>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Zero Middlemen Fee
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Instant Aadhaar KYC
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Direct DBT Bank Pay
                    </span>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-amber-300" />
                      2-Hour Dispatch SLA
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-amber-300" />
                      Biometric Attendance
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-amber-300" />
                      100% GST & PF Invoices
                    </span>
                  </>
                )}
              </div>

              {/* Conversion Module: High-Contrast QR Code & Official Store Buttons */}
              <div className="mt-5 sm:mt-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/30 w-full max-w-md sm:max-w-lg">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
                  
                  {/* High-Contrast SVG QR Code with Center DLC Shield */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 shadow-inner flex-shrink-0">
                      <svg
                        viewBox="0 0 120 120"
                        className="w-20 h-20 sm:w-24 sm:h-24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="120" height="120" fill="white" rx="8" />
                        <rect x="10" y="10" width="30" height="30" rx="4" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />
                        <rect x="16" y="16" width="18" height="18" fill="white" rx="2" />
                        <rect x="21" y="21" width="8" height="8" rx="1" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />

                        <rect x="80" y="10" width="30" height="30" rx="4" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />
                        <rect x="86" y="16" width="18" height="18" fill="white" rx="2" />
                        <rect x="91" y="21" width="8" height="8" rx="1" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />

                        <rect x="10" y="80" width="30" height="30" rx="4" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />
                        <rect x="16" y="86" width="18" height="18" fill="white" rx="2" />
                        <rect x="21" y="91" width="8" height="8" rx="1" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />

                        <rect x="46" y="14" width="6" height="6" fill="#1E293B" rx="1" />
                        <rect x="58" y="14" width="6" height="6" fill="#1E293B" rx="1" />
                        <rect x="68" y="14" width="6" height="6" fill="#1E293B" rx="1" />
                        <rect x="46" y="24" width="6" height="6" fill="#1E293B" rx="1" />
                        <rect x="58" y="28" width="6" height="6" fill="#1E293B" rx="1" />
                        <rect x="68" y="24" width="6" height="6" fill="#1E293B" rx="1" />

                        <rect x="46" y="46" width="6" height="6" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} rx="1" />
                        <rect x="56" y="46" width="8" height="8" fill="#1E293B" rx="1" />
                        <rect x="68" y="50" width="6" height="6" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} rx="1" />
                        <rect x="48" y="58" width="8" height="8" fill="#1E293B" rx="1" />
                        <rect x="62" y="60" width="6" height="6" fill="#1E293B" rx="1" />

                        <rect x="46" y="76" width="8" height="8" fill="#1E293B" rx="1" />
                        <rect x="58" y="74" width="6" height="6" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} rx="1" />
                        <rect x="68" y="78" width="8" height="8" fill="#1E293B" rx="1" />
                        <rect x="46" y="88" width="6" height="6" fill="#1E293B" rx="1" />
                        <rect x="58" y="90" width="8" height="8" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} rx="1" />

                        {/* Center DLC Logo Emblem */}
                        <rect x="52" y="52" width="16" height="16" rx="4" fill={activeApp === "rojgar" ? "#0C59D4" : "#D97706"} />
                        <circle cx="60" cy="58" r="2.5" fill="white" />
                        <path d="M56 65C56 62.5 58 62 60 62C62 62 64 62.5 64 65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>

                    <div className="text-left">
                      <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                        <QrCode className="w-3.5 h-3.5 text-[#0C59D4]" />
                        <span>Instant Camera Scan</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Point camera to install <br />
                        <strong className="text-slate-900 font-extrabold">
                          {activeApp === "rojgar" ? "DLC Rojgar App" : "DLC Thekedar App"}
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Official Direct Store Badges */}
                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    {/* Google Play Button */}
                    <a
                      href={
                        activeApp === "rojgar"
                          ? "https://play.google.com/store/apps/details?id=com.digitallabourchowk.worker"
                          : "https://play.google.com/store/apps/details?id=com.digitallabourchowk.app"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black hover:bg-neutral-900 active:scale-95 text-white shadow-md transition-all group"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M3.6 1.8L13.8 12L3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" />
                        <path fill="#FBBC04" d="M17.4 8.4L13.8 12L17.4 15.6L20.8 13.7C21.7 13.2 21.7 12.3 20.8 11.8L17.4 8.4Z" />
                        <path fill="#EA4335" d="M13.8 12L3.6 1.8C4.1 1.4 4.8 1.4 5.6 1.8L17.4 8.4L13.8 12Z" />
                        <path fill="#34A853" d="M13.8 12L17.4 15.6L5.6 22.2C4.8 22.6 4.1 22.6 3.6 22.2L13.8 12Z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                          GET IT ON
                        </span>
                        <span className="text-xs font-bold text-white tracking-tight leading-tight mt-0.5">
                          Google Play
                        </span>
                      </div>
                    </a>

                    {/* Apple App Store Button */}
                    <a
                      href="https://apps.apple.com/app/digital-labour-chowk"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black hover:bg-neutral-900 active:scale-95 text-white shadow-md transition-all group"
                    >
                      <svg className="w-4 h-4 flex-shrink-0 fill-white" viewBox="0 0 24 24">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.13 16.69C20.1 16.79 19.7 18.17 18.71 19.5ZM14.88 5.25C15.54 4.45 16 3.32 15.87 2.2C14.9 2.24 13.69 2.85 13 3.65C12.4 4.34 11.88 5.5 12.03 6.6C13.12 6.68 14.23 6.05 14.88 5.25Z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                          Download on the
                        </span>
                        <span className="text-xs font-bold text-white tracking-tight leading-tight mt-0.5">
                          App Store
                        </span>
                      </div>
                    </a>
                  </div>

                </div>
              </div>

              {/* Social Proof Trust Strip */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-white/80 font-bold mb-6 sm:mb-8">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                  <span className="font-extrabold text-white">4.8 / 5 Rating</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="flex items-center gap-1 text-white">
                  <Download className="w-3.5 h-3.5 text-sky-300" />
                  <span>350,000+ Downloads Across India</span>
                </div>
              </div>

            </div>

            {/* -------------------- DUAL PHONE MORPH MOCKUPS (Grounded at Bottom Edge) -------------------- */}
            {/* Showcases 75-80% phone body, bottom 20-25% submerged into base for grounded, premium feel   */}
            <div className="relative w-full flex items-end justify-between pointer-events-none">
              
              {/* ==================== LEFT PHONE: ROJGAR APP (WORKERS) ==================== */}
              <div className="hidden lg:block absolute -bottom-16 xl:-bottom-20 left-1 lg:left-3 xl:left-8 w-[270px] xl:w-[325px] z-30 pointer-events-auto">
                {/* Hyper-Realistic Metallic Titanium Phone Chassis (Image 1 morph inspiration) */}
                <div className="relative w-full rounded-t-[3rem] p-[3px] bg-gradient-to-b from-[#3B4C68] via-[#1E293B] to-[#0A0F1D] shadow-[0_-25px_60px_rgba(0,0,0,0.6)] border-t border-l border-r border-sky-300/30">
                  
                  {/* Inner Dark Bezel */}
                  <div className="relative bg-black rounded-t-[2.75rem] p-2.5 pt-2 pb-0 flex flex-col h-[460px] xl:h-[490px] overflow-hidden">
                    
                    {/* Dynamic Island Pill Notch */}
                    <div className="w-24 h-5 bg-[#0a0a0a] rounded-full mx-auto mb-2 flex items-center justify-between px-2.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-slate-800 ring-1 ring-slate-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>

                    {/* Phone Screen: DLC Rojgar App UI */}
                    <div className="bg-gradient-to-b from-[#0F1D38] via-[#122347] to-[#0A1324] rounded-t-[2.1rem] p-3 text-white flex flex-col justify-between h-full border border-blue-400/20 shadow-inner">
                      
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[10px] text-blue-200/80 px-1 pb-2 border-b border-white/10">
                        <span className="font-bold">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-black">5G</span>
                          <div className="w-3.5 h-2 border border-white/60 rounded-xs p-0.5 flex items-center">
                            <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* User Header (Styled after Image 1 "Good morning, Charles!" card) */}
                      <div className="mt-2.5 p-2.5 rounded-2xl bg-gradient-to-r from-[#0C59D4] to-[#1E6BEE] border border-blue-300/30 shadow-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 overflow-hidden shrink-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/popular-searches/mason-rajmistri.webp"
                                alt="Worker profile"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-[11px] font-black leading-tight text-white">Namaste, Ramesh</div>
                              <div className="text-[9px] text-emerald-300 font-extrabold flex items-center gap-1">
                                <CheckCircle2 className="w-2.5 h-2.5" />
                                Aadhaar KYC Verified
                              </div>
                            </div>
                          </div>
                          <span className="text-[8.5px] font-black px-2 py-0.5 rounded-full bg-white/20 text-white">
                            ROJGAR
                          </span>
                        </div>
                      </div>

                      {/* Daily Wage Rate Highlight (Inspired by 27 SEP widget in Image 1) */}
                      <div className="my-2 p-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[9px] text-blue-200 uppercase tracking-wider font-extrabold block">
                              Active Daily Wage Rate
                            </span>
                            <span className="text-base font-black text-white">₹850 / Day</span>
                          </div>
                          <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[9px] font-black border border-emerald-400/30">
                            💸 0% Commission
                          </span>
                        </div>
                      </div>

                      {/* Live Job Feed */}
                      <div className="space-y-1.5 flex-1">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-white">Mason / Rajmistri</div>
                            <div className="text-[8.5px] text-blue-200">Sector 62, Noida Metro Site</div>
                          </div>
                          <span className="text-[10px] font-black text-emerald-400">₹850/Day</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-white">Shuttering Carpenter</div>
                            <div className="text-[8.5px] text-blue-200">Cyber City High-Rise</div>
                          </div>
                          <span className="text-[10px] font-black text-emerald-400">₹900/Day</span>
                        </div>
                      </div>

                      {/* Bottom Native Apply Button */}
                      <div className="pt-2">
                        <div className="w-full py-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0C59D4] text-slate-950 font-black text-[10.5px] uppercase tracking-wider text-center shadow-md">
                          Apply With 1-Tap →
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* ==================== RIGHT PHONE: THEKEDAR APP (CONTRACTORS) ==================== */}
              <div className="hidden lg:block absolute -bottom-16 xl:-bottom-20 right-1 lg:right-3 xl:right-8 w-[270px] xl:w-[325px] z-30 pointer-events-auto">
                {/* Hyper-Realistic Metallic Phone Chassis */}
                <div className="relative w-full rounded-t-[3rem] p-[3px] bg-gradient-to-b from-[#473B28] via-[#241E15] to-[#0F0D09] shadow-[0_-25px_60px_rgba(0,0,0,0.6)] border-t border-l border-r border-amber-300/30">
                  
                  {/* Inner Dark Bezel */}
                  <div className="relative bg-black rounded-t-[2.75rem] p-2.5 pt-2 pb-0 flex flex-col h-[460px] xl:h-[490px] overflow-hidden">
                    
                    {/* Dynamic Island Pill Notch */}
                    <div className="w-24 h-5 bg-[#0a0a0a] rounded-full mx-auto mb-2 flex items-center justify-between px-2.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-950 ring-1 ring-amber-900" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    </div>

                    {/* Phone Screen: DLC Thekedar App UI */}
                    <div className="bg-gradient-to-b from-[#251B10] via-[#1D150B] to-[#0D0904] rounded-t-[2.1rem] p-3 text-white flex flex-col justify-between h-full border border-amber-400/20 shadow-inner">
                      
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[10px] text-amber-200/80 px-1 pb-2 border-b border-white/10">
                        <span className="font-bold">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-black">5G</span>
                          <div className="w-3.5 h-2 border border-white/60 rounded-xs p-0.5 flex items-center">
                            <div className="w-full h-full bg-amber-400 rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* Contractor Header */}
                      <div className="mt-2.5 p-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-[#D4A017] border border-amber-300/40 shadow-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-sm font-black text-white shrink-0">
                              🏗️
                            </div>
                            <div>
                              <div className="text-[11px] font-black leading-tight text-white">Apex Construction</div>
                              <div className="text-[9px] text-amber-100 font-extrabold flex items-center gap-1">
                                Sector 150 Project • Active
                              </div>
                            </div>
                          </div>
                          <span className="text-[8.5px] font-black px-2 py-0.5 rounded-full bg-white/20 text-white">
                            THEKEDAR
                          </span>
                        </div>
                      </div>

                      {/* Live Dispatch Attendance Widget */}
                      <div className="my-2 p-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[9px] text-amber-200 uppercase tracking-wider font-extrabold block">
                              Biometric Muster Roll
                            </span>
                            <span className="text-base font-black text-white">15 / 15 Present</span>
                          </div>
                          <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[9px] font-black border border-emerald-400/30">
                            100% On-Time
                          </span>
                        </div>
                      </div>

                      {/* Dispatch & Compliance Feed */}
                      <div className="space-y-1.5 flex-1">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-white">Batch #408 Requirement</div>
                            <div className="text-[8.5px] text-amber-200">15 Bar Benders & Masons</div>
                          </div>
                          <span className="text-[10px] font-black text-emerald-400">Matched</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-white">Statutory Billing (GST & PF)</div>
                            <div className="text-[8.5px] text-amber-200">BOCW Compliant Invoice</div>
                          </div>
                          <span className="text-[10px] font-black text-amber-300">Generated</span>
                        </div>
                      </div>

                      {/* Bottom Native Post Requirement Button */}
                      <div className="pt-2">
                        <div className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-400 to-[#F59E0B] text-slate-950 font-black text-[10.5px] uppercase tracking-wider text-center shadow-md">
                          Post Requirement →
                        </div>
                      </div>

                    </div>
                  </div>
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

const ENTERPRISE_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Multi-Site Bulk Requisition",
    subtitle: "Submit project workforce needs (50 to 500+ crews) across multiple sites, EPC packages, or commercial infra phases.",
    points: [
      "Custom trade matrices: bar benders, shuttering, scaffolding & ITI techs",
      "PAN-India deployment across 6,000+ pin codes",
      "Dedicated Enterprise Account Manager & custom SLA",
    ],
    mockupTitle: "Enterprise Bulk Requisition",
    mockupSubtitle: "Multi-site package sourcing",
    mockupBadge: "50-500+ Manpower SLA",
  },
  {
    number: "02",
    title: "Rigorous Screening & Deployment SLA",
    subtitle: "AI matching deploys skill-graded, Aadhaar-verified workers with completed site safety and compliance checks.",
    points: [
      "24-48 hour rapid bulk site mobilization SLA",
      "100% Aadhaar KYC, medical fitness & background verification",
      "Skill-tested batches with past contractor ratings",
    ],
    mockupTitle: "Enterprise Mobilization",
    mockupSubtitle: "Verified workforce on site",
    mockupBadge: "24-48h Rapid Dispatch",
  },
  {
    number: "03",
    title: "Centralized ERP & 100% Statutory Compliance",
    subtitle: "Monitor real-time site muster rolls, biometric check-ins, and receive unified GST, PF, ESIC & BOCW audits.",
    points: [
      "Real-time facial/biometric muster roll dashboard",
      "Zero-liability compliance: PF, ESIC, BOCW & GST billing",
      "ERP integration with SAP, Oracle, and site management software",
    ],
    mockupTitle: "ERP & Statutory Compliance",
    mockupSubtitle: "Audit-ready muster roll & GST",
    mockupBadge: "100% BOCW & Statutory Compliant",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"worker" | "contractor" | "enterprise">("worker");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoModalOpen(false);
    };
    if (videoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [videoModalOpen]);

  return (
    <section className="w-full bg-[#FAFAFC] pt-6 sm:pt-10 pb-12 sm:pb-16 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0C59D4]" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How Digital Labour Chowk Works
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are a skilled craftsman seeking daily direct wages, a site contractor mobilizing 20+ verified tradesmen, or an enterprise executing national infrastructure packages — get started in 3 simple steps.
          </p>

          {/* Persona Switcher Tabs - Tri-Persona: WORKER, CONTRACTOR, ENTERPRISE */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-sm mt-8 gap-1 max-w-full">
            <button
              onClick={() => setActiveTab("worker")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "worker"
                  ? "bg-[#0C59D4] text-white shadow-md shadow-blue-600/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Workers & Craftsmen</span>
            </button>

            <button
              onClick={() => setActiveTab("contractor")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "contractor"
                  ? "bg-[#D4A017] text-white shadow-md shadow-amber-600/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <HardHat className="w-4 h-4" />
              <span>For Contractors & Builders</span>
            </button>

            <button
              onClick={() => setActiveTab("enterprise")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "enterprise"
                  ? "bg-[#0F172A] text-white shadow-md shadow-slate-900/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Enterprise & EPC</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split: Left Blueprint Canvas (3 Mockup Phones) + Right Video Guide Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT CONTAINER (Wide Blueprint Canvas with 3 Connected Phone Mockups) */}
          <div
            className={`lg:col-span-8 rounded-3xl p-5 sm:p-7 relative overflow-hidden shadow-2xl border transition-all duration-500 flex flex-col justify-between ${
              activeTab === "worker"
                ? "bg-gradient-to-br from-[#0C59D4] via-[#0947A8] to-[#062F70] border-blue-400/30"
                : activeTab === "contractor"
                ? "bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#080D1A] border-amber-500/30"
                : "bg-gradient-to-br from-[#0B1528] via-[#0A2540] to-[#021024] border-cyan-500/30"
            }`}
          >
            {/* Blueprint Grid Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Top Step Progress Header */}
            <div className="relative z-10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/15">
              <div className="flex items-center gap-2 sm:gap-4 flex-1">
                {/* Step 1 */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20 text-white w-fit border border-white/20">
                    STEP 01
                  </span>
                  <span className="text-xs sm:text-[13px] font-extrabold text-white mt-1">
                    {activeTab === "worker"
                      ? "1-Min Mobile Registration"
                      : activeTab === "contractor"
                      ? "Post Site Requirement"
                      : "Multi-Site Requisition"}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 text-white/40 shrink-0 hidden sm:block" />

                {/* Step 2 */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20 text-white w-fit border border-white/20">
                    STEP 02
                  </span>
                  <span className="text-xs sm:text-[13px] font-extrabold text-white mt-1">
                    {activeTab === "worker"
                      ? "Zero-Cost Aadhaar KYC"
                      : activeTab === "contractor"
                      ? "2-Hour Algorithmic Match"
                      : "24-48h Deployment SLA"}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 text-white/40 shrink-0 hidden sm:block" />

                {/* Step 3 */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20 text-white w-fit border border-white/20">
                    STEP 03
                  </span>
                  <span className="text-xs sm:text-[13px] font-extrabold text-white mt-1">
                    {activeTab === "worker"
                      ? "Work, Wages & Benefits"
                      : activeTab === "contractor"
                      ? "Site Attendance & GST"
                      : "ERP Muster Roll & Compliance"}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {activeTab === "worker"
                    ? "Instant Verification"
                    : activeTab === "contractor"
                    ? "2-Hour SLA Active"
                    : "PAN-India Bulk SLA"}
                </span>
              </div>
            </div>

            {/* THREE PHONE MOCKUPS (Side by Side in 3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 relative z-10 items-stretch">
              
              {/* ==================== PHONE 1 ==================== */}
              <div className="relative bg-slate-950 rounded-[2.2rem] p-2.5 border-2 border-slate-700/80 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[460px]">
                {/* Dynamic Island Notch */}
                <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-1.5">
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                </div>

                {/* Inner Screen */}
                <div className="bg-gradient-to-b from-[#FFFDF9] to-[#F5F8FF] rounded-[1.6rem] p-3.5 flex flex-col justify-between h-full text-slate-900 border border-slate-100 shadow-inner">
                  {activeTab === "worker" ? (
                    <>
                      {/* Top Header */}
                      <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative shrink-0">
                          <Image src="/images/popular-searches/mason-rajmistri.webp" alt="Worker profile" fill unoptimized priority className="object-cover" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-[#0C59D4] leading-tight">DIGITAL LABOUR CHOWK</div>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-orange-100 text-[#E65100]">
                            WORKER REGISTRATION
                          </span>
                        </div>
                      </div>

                      {/* Inputs */}
                      <div className="my-auto space-y-3 py-2">
                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-1">
                            Mobile Number
                          </label>
                          <div className="px-2.5 py-2 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-xs">
                            <span>🇮🇳 +91 98765 43210</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-[10px] text-slate-600 mb-1">
                            <span className="font-bold">Enter 4-Digit OTP</span>
                            <span className="text-orange-600 font-semibold">Resend in 24s</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5 text-center">
                            {["5", "9", "2", "8"].map((digit, i) => (
                              <div
                                key={i}
                                className="h-9 rounded-lg bg-white border-2 border-orange-400 font-black text-sm flex items-center justify-center text-slate-900 shadow-xs"
                              >
                                {digit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action & Subtext */}
                      <div className="pt-2 text-center">
                        <button className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5">
                          <span>Verify & Continue</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <div className="text-[9.5px] font-bold text-slate-400 mt-2">
                          100% Free for Workers
                        </div>
                      </div>
                    </>
                  ) : activeTab === "contractor" ? (
                    <>
                      {/* Contractor Phone 1: Post Requirement */}
                      <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B45309] shrink-0">
                          <HardHat className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-slate-900 leading-tight">DIGITAL LABOUR CHOWK</div>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-[#B45309]">
                            POST SITE REQUIREMENT
                          </span>
                        </div>
                      </div>

                      <div className="my-auto space-y-2.5 py-2">
                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-0.5">Required Trades</label>
                          <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 shadow-xs">
                            Mason & Bar Benders
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-0.5">Headcount Needed</label>
                          <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-[#0C59D4] shadow-xs">
                            15 Verified Craftsmen
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-0.5">Site Location</label>
                          <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-[11px] font-bold text-slate-700 shadow-xs">
                            Sector 62, Noida Project
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <button className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-[#D4A017] text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-amber-500/25 flex items-center justify-center gap-1.5">
                          <span>Post Requirement</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <div className="text-[9.5px] font-bold text-slate-400 mt-2">
                          2-Hour Matching SLA Guaranteed
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Enterprise Phone 1: Multi-Site Bulk Requisition */}
                      <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-slate-900 leading-tight">DIGITAL LABOUR CHOWK</div>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-800">
                            ENTERPRISE REQUISITION
                          </span>
                        </div>
                      </div>

                      <div className="my-auto space-y-2.5 py-2">
                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-0.5">Project / Package</label>
                          <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-900 shadow-xs truncate">
                            Delhi-Mumbai Expwy Pkg-4
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-0.5">Bulk Headcount Required</label>
                          <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-[#0C59D4] shadow-xs">
                            120 Verified Tradesmen
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-600 block mb-0.5">Trade Matrix</label>
                          <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-[11px] font-bold text-slate-700 shadow-xs truncate">
                            50 Bar Benders • 40 Shuttering • 30 Helpers
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <button className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-slate-900/25 flex items-center justify-center gap-1.5">
                          <span>Submit Requisition</span>
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        </button>
                        <div className="text-[9.5px] font-bold text-slate-400 mt-2">
                          Dedicated Key Account Manager
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* ==================== PHONE 2 (With 3D Pop-out Card) ==================== */}
              <div className="relative bg-slate-950 rounded-[2.2rem] p-2.5 border-2 border-slate-700/80 shadow-2xl flex flex-col justify-between overflow-visible min-h-[460px]">
                {/* Dynamic Island Notch */}
                <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-1.5">
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                </div>

                {/* Inner Screen */}
                <div className="bg-gradient-to-b from-[#FFFDF9] to-[#F5F8FF] rounded-[1.6rem] p-3.5 flex flex-col justify-between h-full text-slate-900 border border-slate-100 shadow-inner relative overflow-visible">
                  {activeTab === "worker" ? (
                    <>
                      <div className="text-center pt-2">
                        <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center mb-1.5 shadow-sm">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-black text-slate-900">Aadhaar Instant KYC</h4>
                        <span className="inline-block text-[9.5px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mt-1">
                          ● Verified
                        </span>
                      </div>

                      {/* 3D Pop-Out Aadhaar Card (Overlaying Screen) */}
                      <div className="relative my-auto w-full bg-white rounded-xl p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] border border-slate-200 z-20">
                        {/* Tri-color stripe */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full mb-2" />
                        
                        <div className="flex items-center gap-2">
                          <div className="w-11 h-13 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden relative shrink-0">
                            <Image src="/images/popular-searches/mason-rajmistri.webp" alt="Worker photo" fill unoptimized priority className="object-cover" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="text-[9px] font-black text-slate-800 tracking-wider">AADHAAR KYC</div>
                            <div className="text-[10px] font-mono font-bold text-slate-700 mt-0.5">XXXX XXXX 2222</div>
                            <div className="text-[8px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                              Identity Verified
                            </div>
                          </div>

                          <div className="w-8 h-8 bg-slate-50 border border-slate-200 rounded p-0.5 shrink-0 flex items-center justify-center">
                            <QrCode className="w-7 h-7 text-slate-800" />
                          </div>
                        </div>

                        {/* Floating Green Check Badge */}
                        <div className="absolute -top-2.5 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-2 border-white font-bold text-xs">
                          ✓
                        </div>
                      </div>

                      <div className="text-center pb-2">
                        <div className="text-[9.5px] font-semibold text-slate-500">
                          UIDAI Government Authenticated
                        </div>
                      </div>
                    </>
                  ) : activeTab === "contractor" ? (
                    <>
                      {/* Contractor Phone 2: 2-Hour Algorithmic Match */}
                      <div className="text-center pt-2">
                        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-[#B45309] mx-auto flex items-center justify-center mb-1.5 shadow-sm">
                          <Users className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-black text-slate-900">2-Hour Algorithmic Match</h4>
                        <span className="inline-block text-[9.5px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mt-1">
                          ● 15 Craftsmen Assigned
                        </span>
                      </div>

                      {/* 3D Pop-Out Contractor Dispatch Card */}
                      <div className="relative my-auto w-full bg-white rounded-xl p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] border border-slate-200 z-20">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                          <span className="text-[9px] font-extrabold text-slate-900">BATCH DISPATCH #408</span>
                          <span className="text-[8.5px] font-bold text-emerald-600">On Time</span>
                        </div>
                        <div className="space-y-1.5 py-2">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-600 font-medium">8 Masons (Aadhaar KYC)</span>
                            <span className="font-bold text-slate-900">₹850/d</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-600 font-medium">7 Bar Benders (Verified)</span>
                            <span className="font-bold text-slate-900">₹850/d</span>
                          </div>
                        </div>
                        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500">
                          <span>Route: In Transit</span>
                          <span className="font-bold text-blue-600">ETA: 35 Mins</span>
                        </div>
                        <div className="absolute -top-2.5 -right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg border-2 border-white font-bold text-xs">
                          ✓
                        </div>
                      </div>

                      <div className="text-center pb-2">
                        <div className="text-[9.5px] font-semibold text-slate-500">
                          100% Pre-Screened Site Workforce
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Enterprise Phone 2: 24-48h Rapid Bulk Dispatch SLA */}
                      <div className="text-center pt-2">
                        <div className="w-10 h-10 rounded-2xl bg-slate-900 text-cyan-400 mx-auto flex items-center justify-center mb-1.5 shadow-sm">
                          <Users className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-black text-slate-900">Rapid Bulk Deployment SLA</h4>
                        <span className="inline-block text-[9.5px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mt-1">
                          ● 120 / 120 Mobilized
                        </span>
                      </div>

                      {/* 3D Pop-Out Enterprise Dispatch Card */}
                      <div className="relative my-auto w-full bg-white rounded-xl p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] border border-slate-200 z-20">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                          <span className="text-[9px] font-extrabold text-slate-900">EPC PACKAGE #992</span>
                          <span className="text-[8.5px] font-bold text-emerald-600">24h SLA Met</span>
                        </div>
                        <div className="space-y-1.5 py-2">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-600 font-medium">50 Bar Benders (Aadhaar KYC)</span>
                            <span className="font-bold text-emerald-600">Verified</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-600 font-medium">40 Shuttering Carpenters</span>
                            <span className="font-bold text-emerald-600">Verified</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-600 font-medium">30 General Helpers</span>
                            <span className="font-bold text-emerald-600">Verified</span>
                          </div>
                        </div>
                        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500">
                          <span>Deployment: Multi-Site Gate</span>
                          <span className="font-bold text-blue-600">Site Inducted</span>
                        </div>
                        <div className="absolute -top-2.5 -right-2 w-6 h-6 rounded-full bg-slate-900 text-cyan-400 flex items-center justify-center shadow-lg border-2 border-white font-bold text-xs">
                          ✓
                        </div>
                      </div>

                      <div className="text-center pb-2">
                        <div className="text-[9.5px] font-semibold text-slate-500">
                          100% Medical & Safety Induction Verified
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* ==================== PHONE 3 (With Overlapping Cutout & Floating Badges) ==================== */}
              <div className="relative bg-slate-950 rounded-[2.2rem] p-2.5 border-2 border-slate-700/80 shadow-2xl flex flex-col justify-between overflow-visible min-h-[460px]">
                {/* Dynamic Island Notch */}
                <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-1.5">
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                </div>

                {/* Inner Screen */}
                <div className="bg-gradient-to-b from-[#FFFDF9] to-[#F5F8FF] rounded-[1.6rem] p-3.5 flex flex-col justify-between h-full text-slate-900 border border-slate-100 shadow-inner relative overflow-visible">
                  {activeTab === "worker" ? (
                    <>
                      {/* Job Cards */}
                      <div className="space-y-2 pt-1 relative z-10">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">Mason / Rajmistri</div>
                            <div className="text-[9px] text-slate-500">Sector 62, Noida Site</div>
                          </div>
                          <span className="text-[11px] font-black text-emerald-600">₹850/Day</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">Electrician</div>
                            <div className="text-[9px] text-slate-500">Cyber City, Gurgaon</div>
                          </div>
                          <span className="text-[11px] font-black text-emerald-600">₹850/Day</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">Bank Direct Pay</div>
                            <div className="text-[9px] text-slate-500">0% Commission Cut</div>
                          </div>
                          <span className="text-[10px] font-extrabold text-[#0C59D4]">Active DBT</span>
                        </div>
                      </div>

                      {/* OVERLAPPING CUTOUT OF CRAFTSMAN (Smiling in Vest & Helmet) */}
                      <div className="absolute -bottom-1 -right-5 w-48 h-64 z-20 pointer-events-none select-none">
                        <img
                          src="/images/craftsman_cutout.png"
                          alt="Verified craftsman with hardhat"
                          className="w-full h-full object-contain object-bottom drop-shadow-xl"
                        />
                      </div>

                      {/* Floating 3D Badges */}
                      <div className="relative z-30 pt-1 space-y-1.5 mt-auto">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-lg shadow-emerald-600/30">
                          <Shield className="w-3 h-3" />
                          <span>₹5,00,000 cover</span>
                        </div>

                        <div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-200 text-[10px] font-extrabold shadow-md">
                            <span>💸 0% commission</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : activeTab === "contractor" ? (
                    <>
                      {/* Contractor Phone 3: Attendance & GST */}
                      <div className="space-y-2 pt-1 relative z-10">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">Site Attendance</div>
                            <div className="text-[9px] text-slate-500">Biometric Check-in</div>
                          </div>
                          <span className="text-[11px] font-black text-emerald-600">15 / 15 Present</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">GST Invoice</div>
                            <div className="text-[9px] text-slate-500">Full Statutory Billing</div>
                          </div>
                          <span className="text-[10px] font-extrabold text-[#D4A017]">Download PDF</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">PF & ESIC Status</div>
                            <div className="text-[9px] text-slate-500">100% BOCW Compliant</div>
                          </div>
                          <span className="text-[10px] font-extrabold text-emerald-600">Compliant</span>
                        </div>
                      </div>

                      {/* OVERLAPPING CUTOUT OF CONTRACTOR / LEAD */}
                      <div className="absolute -bottom-2 -right-4 w-44 h-56 z-20 pointer-events-none select-none">
                        <img
                          src="/images/ecosystem/contractor-builder.webp"
                          alt="Contractor project lead"
                          className="w-full h-full object-contain object-bottom drop-shadow-xl"
                        />
                      </div>

                      {/* Floating 3D Badges */}
                      <div className="relative z-30 pt-1 space-y-1.5 mt-auto">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4A017] text-white text-[10px] font-extrabold shadow-lg shadow-amber-600/30">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>100% GST & PF/ESIC</span>
                        </div>

                        <div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-200 text-[10px] font-extrabold shadow-md">
                            <span>⏱️ 2-Hour SLA Match</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Enterprise Phone 3: ERP Muster Roll & 100% Statutory Compliance */}
                      <div className="space-y-2 pt-1 relative z-10">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">Biometric Muster Roll</div>
                            <div className="text-[9px] text-slate-500">Facial AI Check-in</div>
                          </div>
                          <span className="text-[11px] font-black text-emerald-600">120/120 Present</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">ERP Data Sync</div>
                            <div className="text-[9px] text-slate-500">SAP & Oracle Ready</div>
                          </div>
                          <span className="text-[10px] font-extrabold text-[#0C59D4]">Live Connected</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900">Statutory BOCW & PF/ESIC</div>
                            <div className="text-[9px] text-slate-500">Zero-Liability GST Audit</div>
                          </div>
                          <span className="text-[10px] font-extrabold text-emerald-600">100% Compliant</span>
                        </div>
                      </div>

                      {/* OVERLAPPING CUTOUT OF ENTERPRISE / EPC LEAD */}
                      <div className="absolute -bottom-2 -right-4 w-44 h-56 z-20 pointer-events-none select-none">
                        <img
                          src="/images/ecosystem/enterprise-epc.webp"
                          alt="Enterprise EPC project manager"
                          className="w-full h-full object-contain object-bottom drop-shadow-xl"
                        />
                      </div>

                      {/* Floating 3D Badges */}
                      <div className="relative z-30 pt-1 space-y-1.5 mt-auto">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-extrabold shadow-lg shadow-slate-900/30 border border-slate-700">
                          <Shield className="w-3 h-3 text-cyan-400" />
                          <span>100% BOCW, PF & ESIC</span>
                        </div>

                        <div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-200 text-[10px] font-extrabold shadow-md">
                            <span>⚡ 24-48h Bulk SLA</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTAINER: Vertical Video Guide Card (Exact Match to Mockup) */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-7 min-h-[460px] relative border border-slate-800 group">
            {/* Background Construction Image */}
            <Image
              src="/images/hero/construction_crew.jpg"
              alt="Construction site workers and supervisor"
              fill
              priority
              unoptimized
              className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>
                  {activeTab === "worker"
                    ? "VIDEO GUIDE"
                    : activeTab === "contractor"
                    ? "CONTRACTOR GUIDE"
                    : "ENTERPRISE GUIDE"}
                </span>
              </span>

              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono font-bold">
                {activeTab === "worker" ? "1:02 MIN" : activeTab === "contractor" ? "1:15 MIN" : "1:30 MIN"}
              </span>
            </div>

            {/* Center: Glowing Red Play Button & Title */}
            <div className="relative z-10 text-center my-auto py-8">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.7)] transform group-hover:scale-110 active:scale-95 transition-all mx-auto mb-6 focus:outline-none focus:ring-4 focus:ring-red-400/50"
                aria-label="Play Video Guide"
              >
                <Play className="w-8 h-8 fill-white translate-x-0.5" />
              </button>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {activeTab === "worker"
                  ? "See How It Works on Site"
                  : activeTab === "contractor"
                  ? "See Site Mobilization in Action"
                  : "See Enterprise Bulk Mobilization"}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
                {activeTab === "worker"
                  ? "Step-by-step dispatch walkthrough for workers and site supervisors."
                  : activeTab === "contractor"
                  ? "How site engineers deploy 50+ verified tradesmen with biometric attendance."
                  : "How EPCs and developers mobilize 100+ compliant tradesmen with real-time ERP integration."}
              </p>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transition-all transform active:scale-98"
              >
                <Play className="w-4 h-4 fill-red-600 text-red-600" />
                <span>Watch 1-Min App Walkthrough</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* INTERACTIVE VIDEO MODAL (Vimeo Documentary Walkthrough) */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all focus:outline-none"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 16:9 Video Embed */}
            <div className="relative w-full aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1156756201?autoplay=1"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Digital Labour Chowk Walkthrough Video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// =============================================================================
// SECTION 6: ENTERPRISE BUILDER & EPC PARTNER WALL (Dual-Row Infinite Marquee)
// =============================================================================
interface EnterprisePartner {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  logo: string;
  projectHighlight: string;
}

const UPPER_ROW_PARTNERS: EnterprisePartner[] = [
  {
    id: "lnt",
    name: "L&T Construction",
    category: "Heavy Civil & Metro",
    location: "Pan-India",
    image: "/images/clients/lnt-metro.jpg",
    logo: "/images/clients/logos/lnt.svg",
    projectHighlight: "Metro Viaducts & Expressways",
  },
  {
    id: "godrej",
    name: "Godrej Construction",
    category: "Commercial & Residential",
    location: "Mumbai & NCR",
    image: "/images/clients/godrej-residential.jpg",
    logo: "/images/clients/logos/godrej.svg",
    projectHighlight: "Luxury High-Rise Developments",
  },
  {
    id: "tata",
    name: "Tata Projects",
    category: "Industrial & Transport",
    location: "National Corridors",
    image: "/images/clients/tata-projects.jpg",
    logo: "/images/clients/logos/tata.svg",
    projectHighlight: "New Parliament & Corridors",
  },
  {
    id: "dlf",
    name: "DLF Building India",
    category: "Commercial Parks",
    location: "NCR & Haryana",
    image: "/images/clients/dlf-commercial.jpg",
    logo: "/images/clients/logos/dlf.svg",
    projectHighlight: "DLF Cyber City & IT Parks",
  },
  {
    id: "adani",
    name: "Adani Infrastructure",
    category: "Mega Energy & Transport",
    location: "National Ports & Grid",
    image: "/images/clients/adani-infra.jpg",
    logo: "/images/clients/logos/adani.svg",
    projectHighlight: "Mundra Mega Port & Green Infra",
  },
];

const LOWER_ROW_PARTNERS: EnterprisePartner[] = [
  {
    id: "shapoorji",
    name: "Shapoorji Pallonji",
    category: "Engineering & Mega Projects",
    location: "Pan-India",
    image: "/images/clients/shapoorji-pallonji.jpg",
    logo: "/images/clients/logos/shapoorji.svg",
    projectHighlight: "Imperial Towers & Mega Bridges",
  },
  {
    id: "sobha",
    name: "Sobha Developers",
    category: "Premium Real Estate",
    location: "South & West",
    image: "/images/clients/sobha-luxury.jpg",
    logo: "/images/clients/logos/sobha.jpg",
    projectHighlight: "Townships & Luxury Villas",
  },
  {
    id: "kalpataru",
    name: "Kalpataru Limited",
    category: "Urban Infrastructure",
    location: "Western India",
    image: "/images/clients/kalpataru-urban.jpg",
    logo: "/images/clients/logos/kalpataru.svg",
    projectHighlight: "Skyline Infra & Commercial",
  },
  {
    id: "bses",
    name: "BSES Infrastructure",
    category: "Power & Utility Grid",
    location: "North India",
    image: "/images/clients/bses-grid.jpg",
    logo: "/images/clients/logos/bses.png",
    projectHighlight: "Substation & Transmission",
  },
  {
    id: "lodha",
    name: "Lodha Group",
    category: "Luxury Real Estate",
    location: "Mumbai & MMR",
    image: "/images/clients/lodha-luxury.jpg",
    logo: "/images/clients/logos/lodha.png",
    projectHighlight: "The World Towers & Palava",
  },
];

interface EnterpriseClientLogo {
  id: string;
  name: string;
  subtext: string;
  logo: string;
}

const ENTERPRISE_CLIENT_LOGOS: EnterpriseClientLogo[] = [
  {
    id: "godrej",
    name: "Godrej Construction",
    subtext: "Commercial & Residential",
    logo: "/images/clients/logos/godrej.svg",
  },
  {
    id: "lnt",
    name: "Larsen & Toubro",
    subtext: "Heavy Civil & Metro",
    logo: "/images/clients/logos/lnt.svg",
  },
  {
    id: "tata",
    name: "Tata Projects",
    subtext: "Industrial & Infra",
    logo: "/images/clients/logos/tata.svg",
  },
  {
    id: "phoenix",
    name: "The Phoenix Mills",
    subtext: "Retail & Mixed-Use",
    logo: "/images/clients/logos/phoenix.svg",
  },
  {
    id: "sobha",
    name: "Sobha Developers",
    subtext: "Premium Townships",
    logo: "/images/clients/logos/sobha.jpg",
  },
  {
    id: "dlf",
    name: "DLF Building India",
    subtext: "Cyber City & Commercial",
    logo: "/images/clients/logos/dlf.svg",
  },
  {
    id: "shapoorji",
    name: "Shapoorji Pallonji",
    subtext: "Engineering EPC",
    logo: "/images/clients/logos/shapoorji.svg",
  },
  {
    id: "adani",
    name: "Adani Infrastructure",
    subtext: "Ports, Energy & Roads",
    logo: "/images/clients/logos/adani.svg",
  },
  {
    id: "lodha",
    name: "Lodha Group",
    subtext: "Luxury Real Estate",
    logo: "/images/clients/logos/lodha.png",
  },
  {
    id: "kalpataru",
    name: "Kalpataru Limited",
    subtext: "Urban Infrastructure",
    logo: "/images/clients/logos/kalpataru.svg",
  },
  {
    id: "oberoi",
    name: "Oberoi Realty",
    subtext: "Premium Commercial",
    logo: "/images/clients/logos/oberoi.svg",
  },
  {
    id: "prestige",
    name: "Prestige Group",
    subtext: "Integrated Townships",
    logo: "/images/clients/logos/prestige.svg",
  },
];

function ClientLogoMarqueeCard({ client }: { client: EnterpriseClientLogo }) {
  return (
    <div className="h-16 sm:h-20 px-5 sm:px-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3.5 sm:gap-4 mx-3 sm:mx-4 shrink-0 hover:border-blue-400 hover:shadow-md transition-all group cursor-default">
      <div className="w-12 sm:w-16 h-8 sm:h-10 flex items-center justify-center shrink-0 p-0.5">
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-[#0C59D4] transition-colors whitespace-nowrap">
          {client.name}
        </span>
        <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase whitespace-nowrap">
          {client.subtext}
        </span>
      </div>
    </div>
  );
}

function EnterpriseMarqueeCard({ partner }: { partner: EnterprisePartner }) {
  return (
    <div className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 mx-3 sm:mx-4 group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between">
      {/* Top Project Showcase Banner */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-100">
        <Image
          src={partner.image}
          alt={`${partner.name} - ${partner.projectHighlight}`}
          fill
          unoptimized
          sizes="360px"
          className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.92]"
        />

        {/* Visual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <span className="text-[10px] font-black text-slate-800 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs border border-white/60">
            {partner.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[9.5px] font-extrabold text-emerald-700 bg-emerald-50/95 backdrop-blur-md border border-emerald-300/80 px-2 py-0.5 rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Site
          </span>
        </div>

        {/* Bottom Overlay Label */}
        <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between">
          <p className="text-[11px] font-extrabold text-white drop-shadow-md truncate tracking-tight">
            {partner.projectHighlight}
          </p>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            {/* Authentic Company Logo Box */}
            <div className="w-14 h-9 rounded-lg bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-1.5 shrink-0">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight group-hover:text-[#0C59D4] transition-colors truncate">
                {partner.name}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium truncate">
                {partner.category}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span className="text-slate-500 flex items-center gap-1 font-medium">
            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
            <span>{partner.location}</span>
          </span>
          <span className="font-bold text-slate-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Verified Partner</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function EnterprisePartnerWall() {
  return (
    <section className="w-full bg-[#FAFAFC] pt-10 sm:pt-14 pb-14 sm:pb-20 border-t border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5">
          <Building2 className="w-3.5 h-3.5 text-slate-700" />
          <span>ENTERPRISE CLIENTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Trusted by India’s Premier Builders & EPC Giants
        </h2>
        <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
          From smart cities and national highways to luxury high-rises, leading construction enterprises trust DLC for bulk, compliant tradesmen mobilization.
        </p>
      </div>

      {/* Triple Row Infinite Marquee Container (Row 1: RTL | Row 2: LTR | Row 3: RTL Logos) */}
      <div className="relative w-full space-y-6 sm:space-y-8">
        {/* Subtle Edge Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-10 pointer-events-none" />

        {/* ROW 1: UPPER PROJECT CARDS (Right to Left) */}
        <div className="flex w-max animate-[marquee-rtl_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...UPPER_ROW_PARTNERS, ...UPPER_ROW_PARTNERS].map((partner, idx) => (
            <EnterpriseMarqueeCard key={`upper-${partner.id}-${idx}`} partner={partner} />
          ))}
        </div>

        {/* ROW 2: LOWER PROJECT CARDS (Left to Right) */}
        <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused]">
          {[...LOWER_ROW_PARTNERS, ...LOWER_ROW_PARTNERS].map((partner, idx) => (
            <EnterpriseMarqueeCard key={`lower-${partner.id}-${idx}`} partner={partner} />
          ))}
        </div>

        {/* ROW 3: ENTERPRISE LOGOS MARQUEE (Right to Left - Godrej, L&T, Tata, Phoenix, Sobha & More) */}
        <div className="flex w-max animate-[marquee-rtl_32s_linear_infinite] hover:[animation-play-state:paused] pt-2">
          {[...ENTERPRISE_CLIENT_LOGOS, ...ENTERPRISE_CLIENT_LOGOS].map((client, idx) => (
            <ClientLogoMarqueeCard key={`logo-${client.id}-${idx}`} client={client} />
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

                <div className="mt-8 space-y-3">
                  <Link
                    href="https://onboarding.digitallabourchowk.com/login"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#D4A017] hover:bg-[#B8860B] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-98"
                  >
                    <span>Hire Verified Workers Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/cost-estimator"
                    className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all group backdrop-blur-sm"
                  >
                    <Calculator className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>House Construction Cost Estimator</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Specialized House Construction Cost Estimator Banner */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-900/5 via-amber-500/10 to-blue-900/5 border border-slate-200/90 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0C59D4]/10 text-[#0C59D4] flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">
                Planning a Turnkey Residential House Construction Project?
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Calculate comprehensive cost per sq.ft across 10+ Indian cities with material specifications & BOQ breakdown.
              </div>
            </div>
          </div>
          <Link
            href="/cost-estimator"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 active:scale-98"
          >
            <span>Launch Cost Estimator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
  const [askQuery, setAskQuery] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [promptIdx, setPromptIdx] = useState(0);

  const PROMPTS = [
    "How fast can you deploy 50 workers?",
    "Are all workers verified with Aadhaar KYC?",
    "How does biometric muster roll attendance work?",
    "Can DLC handle statutory PF, ESIC & BOCW?",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % PROMPTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [PROMPTS.length]);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!askQuery.trim()) return;

    // Smart contextual instant lookup
    const qLower = askQuery.toLowerCase();
    if (qLower.includes("fast") || qLower.includes("deploy") || qLower.includes("time") || qLower.includes("sla")) {
      setAiResponse("Verified workers are dispatched within 2 to 24 hours depending on batch size. Emergency 2-hour backup worker replacement is guaranteed.");
    } else if (qLower.includes("kyc") || qLower.includes("aadhaar") || qLower.includes("police") || qLower.includes("verify")) {
      setAiResponse("100% of tradesmen undergo government Aadhaar biometric KYC and prior contractor performance rating before dispatch.");
    } else if (qLower.includes("attendance") || qLower.includes("biometric") || qLower.includes("muster") || qLower.includes("app")) {
      setAiResponse("DLC Thekedar app records biometric face and fingerprint attendance on-site with GPS geofencing, automatically compiling daily muster rolls.");
    } else if (qLower.includes("pf") || qLower.includes("esic") || qLower.includes("compliance") || qLower.includes("bocw") || qLower.includes("gst")) {
      setAiResponse("We provide full statutory compliance: consolidated GST invoices, PF/ESIC deposits, and BOCW welfare documentation with 1-click export.");
    } else {
      setAiResponse("We received your question! Our site coordinator is available right now on +91 9654007500 to assist with your project manpower needs.");
    }
  };

  return (
    <section className="w-full bg-[#08090C] py-20 sm:py-28 border-t border-white/[0.08] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Badge + Split Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="text-blue-400">✦</span>
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Questions,<br />
              <span className="text-white/40">answered.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md lg:pb-1 font-normal">
            Everything you need to know about hiring, deployment, KYC verification, and statutory compliance with Digital Labour Chowk. Can&apos;t find an answer? Ask our assistant or team directly.
          </p>
        </div>

        {/* 2-Column Main Layout: Accordion (Left) + Blue Video Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Numbered Minimalist Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#14151B] border-white/15 shadow-xl"
                      : "bg-[#0F1015]/80 border-white/5 hover:border-white/10 hover:bg-[#121319]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full py-4.5 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-medium text-slate-500 shrink-0">
                        {num}
                      </span>
                      <span
                        style={{ color: isOpen ? "#ffffff" : "#cbd5e1" }}
                        className="text-sm sm:text-base font-bold transition-colors"
                      >
                        {item.q}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-white/5 border-white/5 text-slate-400"
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{ color: "#94a3b8" }}
                      className="px-5 sm:px-6 pb-5 pt-1 pl-12 sm:pl-14 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Blue Fluid Video Card with Frosted Glass Search Assistant */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl min-h-[460px] sm:min-h-[500px] flex items-center justify-center p-5 sm:p-7 bg-[#05060A]">
              
              {/* Blue Pattern Fluid Loop Video */}
              <video
                src="/videos/faq-blue-pattern.mp4"
                poster="/images/faq-blue-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Interactive Frosted Glass Assistant Box */}
              <div className="relative z-10 w-full rounded-2xl bg-[#080A12]/92 backdrop-blur-2xl border border-white/15 p-5 sm:p-6 shadow-2xl">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Still have questions?
                  </h4>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
                  Ask DLC anything about workforce mobilization, worker KYC, attendance, or billing — or reach our team directly.
                </p>

                {/* Interactive Search / Ask Form */}
                <form onSubmit={handleAskSubmit} className="relative mb-3.5">
                  <input
                    type="text"
                    value={askQuery}
                    onChange={(e) => setAskQuery(e.target.value)}
                    placeholder={PROMPTS[promptIdx]}
                    className="w-full pl-3.5 pr-11 py-2.5 sm:py-3 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0C59D4] focus:bg-white/15 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-8 rounded-lg bg-white hover:bg-slate-200 text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Submit question"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Quick Prompt Pill Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    "Deployment SLA?",
                    "Aadhaar KYC?",
                    "Biometric muster?",
                    "PF & ESIC?",
                  ].map((chip) => (
                    <button
                      type="button"
                      key={chip}
                      onClick={() => setAskQuery(chip)}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* AI / Instant Response Box */}
                {aiResponse && (
                  <div className="mb-4 p-3 rounded-xl bg-blue-950/70 border border-blue-500/30 text-xs text-blue-200 animate-in fade-in duration-200 leading-relaxed">
                    {aiResponse}
                  </div>
                )}

                {/* Support Contact Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-white hover:text-blue-300 font-semibold transition-colors group"
                  >
                    <span>Contact support</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="tel:+919654007500"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    +91 9654007500
                  </a>
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
// SECTION 9: NEWS & MEDIA STRIP (3D Tilted Perspective Carousel)
// =============================================================================
interface NewsMediaItem {
  id: number;
  outlet: string;
  tag: string;
  displayTitle: string;
  subtitle: string;
  summary: string;
  image: string;
  link: string;
  isVideo?: boolean;
}

const NEWS_MEDIA_ITEMS: NewsMediaItem[] = [
  {
    id: 1,
    outlet: "Amazon MX Player",
    tag: "OTT Documentary",
    displayTitle: "SUPER FOUNDERS",
    subtitle: "Bharat Ke Super Founders",
    summary: "National documentary showcasing how DLC digitally connects over 3.5 Lakh craftsmen with India's building boom.",
    image: "/images/super-founder-banner.webp",
    link: "https://www.mxplayer.in",
    isVideo: true,
  },
  {
    id: 2,
    outlet: "Hitachi India & KSUM",
    tag: "National Innovation Challenge",
    displayTitle: "HITACHI WINNER",
    subtitle: "National Challenge Winner",
    summary: "Awarded ₹30 Lakh Winner prize for pioneering digital formalization of construction labor logistics across India.",
    image: "/images/for-collaboration/recognitions/recog-4.webp",
    link: "https://www.thehindubusinessline.com/info-tech/fuselage-goudrika-win-hitachi-national-innovation-challenge/article65419369.ece",
  },
  {
    id: 3,
    outlet: "NAREDCO",
    tag: "Best Startup Award",
    displayTitle: "NAREDCO 2023",
    subtitle: "Best Construction Startup",
    summary: "Honored by the National Real Estate Development Council for exceptional innovation in verified manpower deployment.",
    image: "/images/for-collaboration/recognitions/recog-3.webp",
    link: "/awards-recognition",
  },
  {
    id: 4,
    outlet: "Republic TV",
    tag: "TV Broadcast",
    displayTitle: "REPUBLIC TV",
    subtitle: "Prime-Time Special Report",
    summary: "Prime-time national feature on how Digital Labour Chowk eliminates exploitative middleman cuts for roadside mistris.",
    image: "/images/for-collaboration/recognitions/recog-7.webp",
    link: "https://www.youtube.com/watch?v=7DRf-AvizO4",
    isVideo: true,
  },
  {
    id: 5,
    outlet: "Startup India & DPIIT",
    tag: "National Recognition",
    displayTitle: "STARTUP INDIA",
    subtitle: "Govt of India Felicitation",
    summary: "Recognized as a benchmark social impact enterprise transforming blue-collar livelihoods and banking inclusion.",
    image: "/images/for-collaboration/recognitions/recog-1.webp",
    link: "/media-coverage",
  },
  {
    id: 6,
    outlet: "Ministry of MSME",
    tag: "Champion of Impact",
    displayTitle: "MSME CHAMPION",
    subtitle: "Grassroots Wage Security Honor",
    summary: "Honored for enabling direct bank payments (DBT) and free ₹5 Lakh accident insurance for site artisans.",
    image: "/images/for-collaboration/recognitions/recog-2.webp",
    link: "/awards-recognition",
  },
  {
    id: 7,
    outlet: "STPI & IT Ministry",
    tag: "IT Sector Breakthrough",
    displayTitle: "TECH INITIATIVE",
    subtitle: "Best Startup in IT Sector",
    summary: "Recognizing AI-driven trade matching and biometric geo-fenced attendance across Tier 1 and Tier 2 cities.",
    image: "/images/for-collaboration/recognitions/recog-5.webp",
    link: "/awards-recognition",
  },
  {
    id: 8,
    outlet: "TiE Global Summit",
    tag: "Global Showcase",
    displayTitle: "TIE GLOBAL",
    subtitle: "Tech-For-Good Showcase",
    summary: "Showcased at the TiE Global Summit as an exemplary platform scaling formal employment for unorganized workers.",
    image: "/images/for-collaboration/recognitions/recog-6.webp",
    link: "/awards-recognition",
  },
];

export function NewsAndMediaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardStep, setCardStep] = useState(380);

  // Dynamic step sizing based on responsive breakpoints
  useEffect(() => {
    const updateStep = () => {
      if (window.innerWidth < 640) {
        setCardStep(274); // 250px width + 24px gap
      } else if (window.innerWidth < 1024) {
        setCardStep(336); // 300px width + 36px gap
      } else {
        setCardStep(396); // 350px width + 46px gap
      }
    };
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  const total = NEWS_MEDIA_ITEMS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay with pause on hover/drag
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, total]);

  // Mouse & Touch Drag Event Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 30) {
      if (e.deltaX > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className="w-full bg-[#050507] text-white py-20 sm:py-28 lg:py-36 border-t border-neutral-900 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        handleDragEnd();
      }}
    >
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(147,51,234,0.12),transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-purple-500/30 text-purple-300 text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-3.5 backdrop-blur-md">
          <Award className="w-3.5 h-3.5 text-purple-400" />
          <span>DLC IN THE NEWS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Recognized Across National Media
        </h2>
        <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto">
          Covered by leading national broadcasts, newspapers, and streaming documentaries for modernizing India’s construction workforce.
        </p>
      </div>

      {/* 3D Tilted Perspective Carousel Track Viewport */}
      <div
        className="relative w-full overflow-hidden py-14 sm:py-20 md:py-24 cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onWheel={handleWheel}
      >
        {/* Tilted Angled Track Wrapper (-12deg Angle Matching Reference Video) */}
        <div className="transform -rotate-[9deg] sm:-rotate-[12deg] -mx-24 sm:-mx-36 md:-mx-48 origin-center transition-transform duration-300">
          <div
            className={`flex items-start gap-6 sm:gap-9 lg:gap-11 px-8 sm:px-16 ${
              isDragging ? "transition-none" : "transition-transform duration-700 ease-out"
            }`}
            style={{
              transform: `translateX(calc(-${currentIndex * cardStep}px + ${dragOffset}px))`,
            }}
          >
            {/* Render items duplicated for smooth continuous horizon */}
            {[...NEWS_MEDIA_ITEMS, ...NEWS_MEDIA_ITEMS].map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="w-[250px] sm:w-[300px] lg:w-[350px] shrink-0 group/card cursor-pointer"
                onClick={() => {
                  if (card.link.startsWith("http")) {
                    window.open(card.link, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {/* Image Container with Rounded Corners & Deep Drop Shadow */}
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group-hover/card:border-purple-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500">
                  <Image
                    src={card.image}
                    alt={card.displayTitle}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 350px"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700 select-none pointer-events-none"
                  />

                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Floating Outlet Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    <span>{card.outlet}</span>
                  </div>

                  {/* Play Indicator for Video Stories */}
                  {card.isVideo && (
                    <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </div>
                  )}

                  {/* External Link Icon on Hover */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Typography Below Card (Tilted Parallel to Cards, Monospace/Sans Wide Tracking) */}
                <div className="mt-4 px-1">
                  <div className="text-sm sm:text-base lg:text-lg font-black tracking-[0.22em] text-white uppercase truncate group-hover/card:text-purple-300 transition-colors">
                    {card.displayTitle}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-400 uppercase mt-0.5 truncate">
                    {card.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level Floating Circular Navigation Buttons (Positioned Horizontally Outside Rotation) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-2xl active:scale-95 group/btn focus:outline-none"
            aria-label="Previous Media Story"
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-2xl active:scale-95 group/btn focus:outline-none"
            aria-label="Next Media Story"
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Slide Pagination Pill & Explore CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 sm:pt-10 border-t border-neutral-900">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {NEWS_MEDIA_ITEMS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex % total === idx
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Explore All Media CTA */}
        <Link
          href="/media-coverage"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 font-extrabold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-md shadow-lg active:scale-95"
        >
          <span>Explore All 25+ Media Features</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
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
        
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-black p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-neutral-800/90 relative overflow-hidden">
          
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-blue-300 border border-white/15 text-xs font-bold uppercase tracking-wider mb-3">
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>Priority Workforce Dispatch</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Need Verified Construction Workforce On-Site Tomorrow?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
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
                <label className="text-xs font-extrabold text-neutral-300 uppercase tracking-wider block mb-2.5">
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
                          : "bg-[#111113] text-neutral-300 border-white/10 hover:bg-neutral-900 hover:text-white"
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
                  <label className="text-xs font-bold text-neutral-300 block mb-1.5">
                    Your Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#0C59D4] font-medium transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1.5">
                    City / Site Location:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Noida, Gurgaon, Pune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#0C59D4] font-medium transition-colors"
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-1 flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#0C59D4] hover:bg-[#0947A8] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer"
                  >
                    <span>Request Callback (15m)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-400 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  100% Aadhaar KYC Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  2-Hour Matching SLA
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
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
