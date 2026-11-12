"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  History,
  Calendar,
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-card", {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const timelineEvents = [
    {
      year: "2020",
      title: "The Genesis & CIMPS Incubation",
      desc: "Founded by Chandrashekhar Mandal during the national COVID-19 lockdown. Witnessing millions of migrant workers stranded without daily wages or job certainty, Digital Labour Chowk was incubated at CIMPS to solve physical labor chowk challenges through digital connectivity.",
      badge: "Inception",
      stats: "First 1,000 workers registered",
    },
    {
      year: "2021",
      title: "Digital Platform Launch in Tier 2/3 Cities",
      desc: "Launched the initial Android app in regional languages (Hindi, Bhojpuri, Maithili) across Bihar and Delhi NCR. Removed the exploitative physical middleman (Jamadar) by connecting mistris and helpers directly with civil contractors.",
      badge: "Expansion",
      stats: "25,000+ daily wage workers",
    },
    {
      year: "2022",
      title: "Hitachi National Innovation Award & Startup India",
      desc: "Won the prestigious National Innovation Challenge organized by Hitachi India and Kerala Startup Mission (KSUM). Recognized by Startup India and Bihar Industrial Association (BIA) as one of the country's most promising social-impact platforms.",
      badge: "National Recognition",
      stats: "Hitachi Award Winner",
    },
    {
      year: "2023",
      title: "NAREDCO Best Startup & Enterprise Contractor Scale",
      desc: "Received the Best Startup Award from NAREDCO. Scaled enterprise operations to onboard 850+ construction firms, developers, and general civil contractors, introducing the 2-Hour Manpower Dispatch SLA.",
      badge: "B2B Milestone",
      stats: "15,000+ onboarded contractors",
    },
    {
      year: "2024",
      title: "Featured on 'Bharat Ke Super Founders' (Amazon MX Player)",
      desc: "Chronicled on national OTT television (Amazon MX Player) as an exemplary social enterprise. Crossed 3,50,000+ registered workers across 6,000+ cities and townships throughout India.",
      badge: "National Fame",
      stats: "3,50,000+ registered workforce",
    },
    {
      year: "2025 – 2026",
      title: "Institutional Alliances & The Pan-India Vision",
      desc: "Partnered with Villgro, Global Development Incubator (GDI), and Migrants Resilience Collaborative. Scaling formalization of India's 5 Crore+ unorganized construction workforce with digital trade ID cards, ₹5L accidental insurance, and 100% Direct Bank Transfer (DBT).",
      badge: "National Footprint",
      stats: "15+ Industrial Cities Active",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900" ref={containerRef}>
      
      {/* ========================================================================= */}
      {/* HERO HEADER                                                               */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-white to-slate-50 pt-12 pb-16 lg:pt-20 lg:pb-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-[#0C59D4] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/about-us" className="hover:text-[#0C59D4] transition-colors">About Us</Link>
            <span>/</span>
            <span className="text-[#0C59D4]">Our History</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs font-bold uppercase tracking-wider mb-4">
              <History className="w-3.5 h-3.5" />
              <span>Our Journey (2020 – 2026)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              From CIMPS Incubation to <span className="text-[#0C59D4]">Solving India&apos;s Daily-Wage Challenges</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Digital Labour Chowk was born out of an urgent humanitarian observation: a day without work 
              means a day without food for millions of unorganized workers. Here is the chronological 
              story of how we replaced the roadside labor chowk with a nationwide digital workforce platform.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHRONOLOGICAL INTERACTIVE TIMELINE                                        */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <div className="relative border-l-2 border-[#0C59D4]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="timeline-card relative group">
              
              {/* Timeline Pin Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#0C59D4] shadow-md group-hover:scale-125 transition-transform" />

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-black text-[#0C59D4]">{evt.year}</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0C59D4] border border-blue-100 uppercase tracking-wider">
                      {evt.badge}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {evt.stats}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {evt.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {evt.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about-us"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Back to About Us Hub
          </Link>

          <Link
            href="/about-us/vision-mission"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Vision & Mission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
