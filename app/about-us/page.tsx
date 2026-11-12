"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import gsap from "gsap";

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

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

      // Bento cards staggered entrance
      gsap.from(".bento-card", {
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
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
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-slate-50 pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/70 overflow-hidden">
        
        {/* Subtle Decorative Background Rings */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb Pill */}
          <div className="about-hero-element flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-[#0C59D4] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0C59D4]">About Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="about-hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India&apos;s 1st Construction Workforce Platform</span>
            </div>

            <h1 className="about-hero-element text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              Transforming Construction Labour Through <span className="text-[#0C59D4]">Dignity, Technology & Trust</span>.
            </h1>

            <p className="about-hero-element text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Founded in 2020 by Chandrashekhar Mandal, Digital Labour Chowk bridges the gap between 
              India&apos;s unorganized daily-wage workers and top builders. We replace roadside labor chowks 
              with verified digital trade profiles, guaranteed daily wages, and zero-middleman exploitation.
            </p>

            {/* Quick Metrics Bar */}
            <div className="about-hero-element grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200/80">
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-[#0C59D4]">{s.value}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{s.label}</span>
                  <span className="text-[11px] text-slate-500 font-normal">{s.sub}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

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
          <div className="bento-card md:col-span-2 bg-gradient-to-br from-[#0C59D4] to-[#0947AD] text-white rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-10 pointer-events-none">
              <HardHat className="w-72 h-72 text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold tracking-wider uppercase mb-5 backdrop-blur-xs">
                <span>The Origin Story</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-4">
                &ldquo;A day without work means a day without food—this struggle is real for millions.&rdquo;
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                In India, over 5 Crore construction workers stand on physical labor chowks every morning, 
                often returning empty-handed. Digital Labour Chowk was incubated at CIMPS to eliminate 
                this indignity, replacing roadside waiting with guaranteed smartphone work alerts and transparent wage benchmarks.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-blue-200">Chandrashekhar Mandal, Founder & CEO</span>
              <Link href="/about-us/history" className="inline-flex items-center gap-1 text-xs font-bold text-white hover:underline">
                <span>Read Full History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: 0% Commission Guarantee */}
          <div className="bento-card bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">0% Commission Promise</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Unlike Jamadars and informal brokers who pocket 20-30% of worker earnings, DLC workers retain 100% of their daily wage payouts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full DBT Payouts</span>
            </div>
          </div>

          {/* Bento Card 3: 2-Hour Manpower Dispatch */}
          <div className="bento-card bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0C59D4] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">2-Hour Rapid SLA</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Contractors mobilize 5 to 500+ verified workers within 2 hours. Our geo-fenced system tracks attendance with biometric precision.
              </p>
            </div>
            <Link href="/about-us/values" className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0C59D4] hover:underline">
              <span>View Core Values</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bento Card 4: National Media & Super Founders */}
          <div className="bento-card md:col-span-2 lg:col-span-2 bg-slate-900 text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                <Tv className="w-3.5 h-3.5" />
                <span>Bharat Ke Super Founders Feature</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black mb-3">
                Nationally Celebrated on Amazon MX Player
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal max-w-lg">
                The story of Digital Labour Chowk has been chronicled as a national social innovation documentary, 
                showcasing our journey from CIMPS incubation to solving blue-collar worker migration challenges.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Featured across CNBC-TV18, Bloomberg, Republic TV</span>
              <Link href="/media-coverage" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C59D4] hover:text-blue-400">
                <span>Watch Media Coverage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 5 (Span 2 Cols): Institutional Accreditations */}
          <div className="bento-card md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase">
                Government & Innovation Backing
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                Hitachi Innovation Award & Startup India Recognized
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Supported by Software Technology Parks of India (STPI), Bihar Industrial Association (BIA), 
                and winner of the Hitachi National Innovation Challenge in partnership with Kerala Startup Mission.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">TiE Global Summit & NAREDCO Best Startup</span>
              <Link href="/awards-recognition" className="inline-flex items-center gap-1 text-xs font-bold text-[#0C59D4] hover:underline">
                <span>View All Awards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE THE 8 SUBPAGES OF ABOUT US                                     */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
              Company Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Explore Our Core Foundations
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Dive deeper into our history, values, leadership team, national presence, and awards.
            </p>
          </div>

          {/* 8 Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subPages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-slate-50 hover:bg-white rounded-xl p-6 border border-slate-200/80 hover:border-[#0C59D4]/40 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-[#0C59D4] text-[#0C59D4] group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-200/60 text-slate-700">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#0C59D4] group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (From Legacy Site)                          */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0C59D4] flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#0C59D4]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
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
