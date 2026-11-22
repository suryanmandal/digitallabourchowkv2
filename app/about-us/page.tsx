"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AboutHeroFilmScroll from "@/components/AboutHeroFilmScroll";
import LeadershipBookCarousel from "@/components/LeadershipBookCarousel";
import CompanyArchitectureGrid from "@/components/CompanyArchitectureGrid";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Award,
  History,
  Target,
  Compass,
  MapPin,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Tv,
  Newspaper,
  HardHat,
  Smartphone,
  HelpCircle,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
import gsap from "gsap";

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [askQuery, setAskQuery] = React.useState("");
  const [aiResponse, setAiResponse] = React.useState<string | null>(null);
  const [promptIdx, setPromptIdx] = React.useState(0);

  const PROMPTS = [
    "How quickly can workers be deployed?",
    "How is Aadhaar KYC verified?",
    "What is the biometric attendance process?",
    "How do statutory PF & ESIC deposits work?",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % PROMPTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [PROMPTS.length]);

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!askQuery.trim()) return;

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
      setAiResponse("We received your question! Our site coordinator is available right now on +91 7070999175 to assist with your project manpower needs.");
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in hero badges and headlines
      gsap.from(".about-hero-element", {
        opacity: 0,
        y: 25,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "3,50,000+", label: "Verified Workers", sub: "Across 6,000+ Indian towns" },
    { value: "20,000+", label: "Trusted Contractors", sub: "General & sub-contractors" },
    { value: "850+", label: "Enterprise Builders", sub: "Turnkey EPCs & Developers" },
    { value: "15+", label: "Industrial Hubs", sub: "From Delhi NCR to Bengaluru" },
  ];

  const subPages = [
    {
      title: "Our History & Journey",
      desc: "From CIMPS incubation to solving India's daily-wage labor challenges.",
      icon: History,
      href: "/about-us/history",
      tag: "2020 – 2026",
    },
    {
      title: "Vision & Mission",
      desc: "Dignity, guaranteed daily wages & formalizing 5 Cr+ unorganized workers.",
      icon: Target,
      href: "/about-us/vision-mission",
      tag: "Purpose",
    },
    {
      title: "Core Values",
      desc: "Radical transparency, zero commission, and shramik samman at our core.",
      icon: Compass,
      href: "/about-us/values",
      tag: "Ethics",
    },
    {
      title: "Leadership & Founders",
      desc: "Meet Chandrashekhar Mandal and the operational team driving the revolution.",
      icon: Users,
      href: "/about-us/leadership",
      tag: "Team",
    },
    {
      title: "Awards & Recognitions",
      desc: "Hitachi National Innovation Award, TiE Global, Startup India & NAREDCO.",
      icon: Award,
      href: "/awards-recognition",
      tag: "Hall of Fame",
    },
    {
      title: "National Footprint",
      desc: "Presence across 15+ industrial cities, Noida STPI HQ & Darbhanga office.",
      icon: MapPin,
      href: "/about-us/footprint",
      tag: "Network",
    },
    {
      title: "Media Coverage",
      desc: "Featured across CNBC-TV18, Bloomberg, Republic TV, and national press.",
      icon: Tv,
      href: "/media-coverage",
      tag: "In the News",
    },
    {
      title: "Institutional Partners",
      desc: "Collaborations with Villgro, GDI, MRC, BIA & top infrastructure leaders.",
      icon: HeartHandshake,
      href: "/partnerships",
      tag: "Alliances",
    },
  ];

  const faqs = [
    {
      q: "What is Digital Labour Chowk?",
      a: "Digital Labour Chowk is India's 1st digital workforce platform that connects contractors, builders, and construction companies with verified blue-collar workers. We eliminate exploitative middlemen to guarantee timely wages, safety, and reliable job matching.",
    },
    {
      q: "How can contractors hire workers through the platform?",
      a: "Contractors can post their manpower requirements online or call our contractor desk (+91-7070999175). We mobilize verified gangs of masons, carpenters, bar-benders, and helpers within a 2-hour SLA.",
    },
    {
      q: "What kinds of workers are available?",
      a: "We provide skilled, semi-skilled, and general civil workers including Rajmistris, Badhais, Painters, Electricians, Plumbers, Bar-Benders, Tile Masons, Welder fabricators, and site helpers.",
    },
    {
      q: "Is registration free for workers?",
      a: "Yes! Registration for workers is 100% free with 0% commission. Workers receive 100% of their earned daily wages directly via Aadhaar-linked Direct Bank Transfer (DBT).",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900" ref={containerRef}>
      
      {/* ========================================================================= */}
      {/* 1. SCROLL-DRIVEN FILM HERO SECTION                                        */}
      {/* ========================================================================= */}
      <AboutHeroFilmScroll />

      {/* QUICK PLATFORM METRICS BAR (Desktop Handoff from Hero Film to Content) */}
      <div className="hidden sm:block w-full bg-white border-b border-slate-200/80 shadow-xs py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-[#0C59D4]/40 pl-4">
              <span className="text-2xl sm:text-3xl font-black text-[#0C59D4] tracking-tight">{s.value}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{s.label}</span>
              <span className="text-[11px] text-slate-500 font-normal">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE BENTO GRID SHOWCASE                                                */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            The Digital Labour Chowk Model
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Engineered For Scale, Dignity & Speed
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Bento Card 1 (Span 2 Cols): The Core Struggle & Origin */}
          <div className="bento-card md:col-span-2 relative min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl">
            {/* Background Image with Zoom on Hover */}
            <img
              src="/images/about-us/bento-origin-story.jpg"
              alt="The Origin Story - Daily Labour Chowk Struggle"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Resting Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

            {/* Resting State Preview Badge (Fades out on hover) */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-center justify-between z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-lg">
                <HardHat className="w-3.5 h-3.5 text-amber-300" />
                <span>The Origin Story</span>
              </span>
              <span className="text-xs text-white/90 font-medium flex items-center gap-1 drop-shadow">
                Hover to explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Hover Glassmorphism Scrim & Rich Text Content */}
            <div className="absolute inset-0 z-20 bg-[#071329]/92 backdrop-blur-md p-7 sm:p-9 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-white">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold tracking-wider uppercase mb-4 backdrop-blur-xs border border-white/15">
                  <HardHat className="w-3.5 h-3.5 text-amber-300" />
                  <span>The Origin Story</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug mb-3">
                  &ldquo;A day without work means a day without food—this struggle is real for millions.&rdquo;
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-xl">
                  In India, over 5 Crore construction workers stand on physical labor chowks every morning, 
                  often returning empty-handed. Digital Labour Chowk was incubated at CIMPS to eliminate 
                  this indignity, replacing roadside waiting with guaranteed smartphone work alerts and transparent wage benchmarks.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/20 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold text-blue-200">Chandrashekhar Mandal, Founder &amp; CEO</span>
                <Link href="/about-us/history" className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-300 transition-colors">
                  <span>Read Full History</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 0% Commission Guarantee */}
          <div className="bento-card col-span-1 relative min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl">
            {/* Background Image with Zoom on Hover */}
            <img
              src="/images/about-us/bento-zero-commission.jpg"
              alt="0% Commission Promise - Digital Labour Chowk"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Resting Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

            {/* Resting State Preview Badge */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>0% Commission</span>
              </span>
            </div>

            {/* Hover Glassmorphism Scrim & Rich Text Content */}
            <div className="absolute inset-0 z-20 bg-[#071329]/92 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-white">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">0% Commission Promise</h4>
                <p className="text-xs text-blue-100 leading-relaxed font-normal">
                  Unlike Jamadars and informal brokers who pocket 20-30% of worker earnings, DLC workers retain 100% of their daily wage payouts.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 flex items-center text-xs font-bold text-emerald-400 gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Full DBT Payouts</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: 2-Hour Manpower Dispatch */}
          <div className="bento-card col-span-1 relative min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl">
            {/* Background Image with Zoom on Hover */}
            <img
              src="/images/about-us/bento-rapid-sla.jpg"
              alt="2-Hour Rapid SLA - Contractor Mobilization"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Resting Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

            {/* Resting State Preview Badge */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-lg">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>2-Hour Rapid SLA</span>
              </span>
            </div>

            {/* Hover Glassmorphism Scrim & Rich Text Content */}
            <div className="absolute inset-0 z-20 bg-[#071329]/92 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-white">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">2-Hour Rapid SLA</h4>
                <p className="text-xs text-blue-100 leading-relaxed font-normal">
                  Contractors mobilize 5 to 500+ verified workers within 2 hours. Our geo-fenced system tracks attendance with biometric precision.
                </p>
              </div>
              <Link href="/about-us/values" className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold text-blue-300 hover:text-white transition-colors transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span>View Core Values</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 4: National Media & Super Founders */}
          <div className="bento-card md:col-span-2 lg:col-span-2 relative min-h-[340px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl">
            {/* Background Image with Zoom on Hover */}
            <img
              src="/images/about-us/bento-super-founders.jpg"
              alt="Amazon MX Player Bharat Ke Super Founders"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Resting Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

            {/* Resting State Preview Badge */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-center justify-between z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-lg">
                <Tv className="w-3.5 h-3.5 text-amber-400" />
                <span>Amazon MX Player Feature</span>
              </span>
              <span className="text-xs text-white/90 font-medium flex items-center gap-1 drop-shadow">
                Hover to read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Hover Glassmorphism Scrim & Rich Text Content */}
            <div className="absolute inset-0 z-20 bg-[#071329]/92 backdrop-blur-md p-7 sm:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-white">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-3 border border-white/15">
                  <Tv className="w-3.5 h-3.5" />
                  <span>Bharat Ke Super Founders Feature</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-2 text-white">
                  Nationally Celebrated on Amazon MX Player
                </h4>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-normal max-w-lg">
                  The story of Digital Labour Chowk has been chronicled as a national social innovation documentary, 
                  showcasing our journey from CIMPS incubation to solving blue-collar worker migration challenges.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-blue-200/80">Featured across CNBC-TV18, Bloomberg, Republic TV</span>
                <Link href="/media-coverage" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors">
                  <span>Watch Media Coverage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bento Card 5 (Span 2 Cols): Institutional Accreditations */}
          <div className="bento-card md:col-span-2 lg:col-span-2 relative min-h-[340px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl">
            {/* Background Image with Zoom on Hover */}
            <img
              src="/images/about-us/bento-innovation-awards.jpg"
              alt="Hitachi Innovation Award & Startup India Recognized"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Resting Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

            {/* Resting State Preview Badge */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-center justify-between z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-lg">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Innovation &amp; Awards</span>
              </span>
              <span className="text-xs text-white/90 font-medium flex items-center gap-1 drop-shadow">
                Hover to read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Hover Glassmorphism Scrim & Rich Text Content */}
            <div className="absolute inset-0 z-20 bg-[#071329]/92 backdrop-blur-md p-7 sm:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-white">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[11px] font-black tracking-widest text-blue-300 uppercase">
                  Government &amp; Innovation Backing
                </span>
                <h4 className="text-xl font-bold text-white mt-1 mb-2">
                  Hitachi Innovation Award &amp; Startup India Recognized
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                  Supported by Software Technology Parks of India (STPI), Bihar Industrial Association (BIA), 
                  and winner of the Hitachi National Innovation Challenge in partnership with Kerala Startup Mission.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold text-blue-200/80">TiE Global Summit &amp; NAREDCO Best Startup</span>
                <Link href="/awards-recognition" className="inline-flex items-center gap-1 text-xs font-bold text-blue-300 hover:text-white transition-colors">
                  <span>View All Awards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LEADERSHIP & CORE ARCHITECTS BOOK MONOGRAPH CAROUSEL                   */}
      {/* ========================================================================= */}
      <LeadershipBookCarousel />

      {/* ========================================================================= */}
      {/* 4. COMPANY ARCHITECTURE: 8 UNIFIED PILLARS (Continuous Contour Flow)      */}
      {/* ========================================================================= */}
      <CompanyArchitectureGrid />

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (Home-Styled Luxury Accordion & Assistant)  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#08090C] py-12 sm:py-16 border-t border-white/[0.08] relative overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Header: Badge + Split Title & Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="text-blue-400">✦</span>
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Questions,<br />
                <span className="text-white/40">answered.</span>
              </h2>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md lg:pb-1 font-normal">
              Everything you need to know about our mission, hiring verified tradesmen, KYC verification, and zero-commission worker welfare. Can&apos;t find an answer? Ask our team directly.
            </p>
          </div>

          {/* 2-Column Main Layout: Accordion (Left) + Blue Video Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Numbered Minimalist Accordion List */}
            <div className="lg:col-span-7 space-y-2.5 flex flex-col justify-center">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={idx}
                    className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-[#14151B] border-white/15 shadow-xl"
                        : "bg-[#0F1015]/80 border-white/5 hover:border-white/10 hover:bg-[#121319]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-3.5 sm:py-4 px-4.5 sm:px-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 flex-1">
                        <span className="text-xs font-mono font-medium text-slate-500 shrink-0">
                          {num}
                        </span>
                        <span
                          style={{ color: isOpen ? "#ffffff" : "#cbd5e1" }}
                          className="text-xs sm:text-sm font-bold transition-colors"
                        >
                          {item.q}
                        </span>
                      </div>

                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                        isOpen
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-white/5 border-white/5 text-slate-400"
                      }`}>
                        {isOpen ? <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{ color: "#94a3b8" }}
                        className="px-4.5 sm:px-5 pb-3.5 pt-0.5 pl-10 sm:pl-11 text-xs sm:text-[13px] leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Blue Fluid Video Card with Frosted Glass Search Assistant */}
            <div className="lg:col-span-5 flex">
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl flex items-center justify-center p-4 sm:p-5 bg-[#05060A]">
                
                {/* Blue Pattern Fluid Loop Video */}
                <video
                  src="/videos/faq-blue-pattern.mp4"
                  poster="/images/faq-blue-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-85"
                />

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none" />

                {/* Interactive Frosted Glass Assistant Box */}
                <div className="relative z-10 w-full rounded-xl sm:rounded-2xl bg-[#080A12]/92 backdrop-blur-2xl border border-white/15 p-4 sm:p-5 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Still have questions?
                    </h4>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mb-3">
                    Ask DLC anything about workforce mobilization, worker KYC, attendance, or billing — or reach our desk.
                  </p>

                  {/* Interactive Search / Ask Form */}
                  <form onSubmit={handleAskSubmit} className="relative mb-2.5">
                    <input
                      type="text"
                      value={askQuery}
                      onChange={(e) => setAskQuery(e.target.value)}
                      placeholder={PROMPTS[promptIdx]}
                      className="w-full pl-3 pr-10 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0C59D4] focus:bg-white/15 transition-all"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 w-7 rounded-md bg-white hover:bg-slate-200 text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Submit question"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>

                  {/* Quick Prompt Pill Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
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
                    <div className="mb-3 p-2.5 rounded-lg bg-blue-950/70 border border-blue-500/30 text-[11px] text-blue-200 animate-in fade-in duration-200 leading-relaxed">
                      {aiResponse}
                    </div>
                  )}

                  {/* Support Contact Footer */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[11px] sm:text-xs">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-white hover:text-blue-300 font-semibold transition-colors group"
                    >
                      <span>Contact support</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <a
                      href="tel:+917070999175"
                      className="text-slate-400 hover:text-white transition-colors font-medium"
                    >
                      +91 7070999175
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CALL TO ACTION                                                         */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0C59D4] text-white py-14 px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Ready to Build With Verified Manpower?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base font-normal mb-6">
            Join 20,000+ contractors and builders mobilizing India&apos;s daily-wage construction workforce today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://onboarding.digitallabourchowk.com/login"
              className="px-6 py-3 rounded-lg bg-white text-[#0C59D4] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-blue-50 shadow-md transition-all active:scale-95"
            >
              Get in Touch
            </a>
            <a
              href="tel:+917070999175"
              className="px-6 py-3 rounded-lg bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wider border border-white/20 transition-all"
            >
              Call: +91-7070999175
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
