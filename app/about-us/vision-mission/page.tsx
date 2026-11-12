"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Target,
  Compass,
  Sparkles,
  ShieldCheck,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Heart,
  Globe2,
} from "lucide-react";
import gsap from "gsap";

export default function VisionMissionPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vision-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
            <span className="text-[#0C59D4]">Vision & Mission</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>Purpose & Future Outlook</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Dignity, Security & Direct Access for <span className="text-[#0C59D4]">5 Crore+ Workers</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We envision an India where no daily wage earner is left behind on a street corner, 
              and every construction firm has on-demand access to a verified, dependable, and respected workforce.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* MISSION & VISION DUAL PILLARS                                             */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="vision-card bg-gradient-to-br from-[#0C59D4] to-[#0947AD] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-6 backdrop-blur-xs">
                <Target className="w-6 h-6" />
              </div>

              <span className="text-xs font-black tracking-widest text-blue-200 uppercase">
                Our Mission
              </span>

              <h2 className="text-2xl sm:text-3xl font-black mt-2 mb-4 leading-snug">
                Empowering India&apos;s Unorganized Workforce
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal">
                &ldquo;To empower blue collar workers by creating a trusted, tech-driven job platform that ensures easy, fair, and direct access to employment opportunities. We aim to solve the hiring challenges in the construction and informal labour sectors by connecting skilled workers with businesses that value reliability, transparency, and human dignity.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-2 text-xs font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Direct Bank Transfer (DBT) & Bull-Market Transparent Wages</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="vision-card bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between border border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-6 backdrop-blur-xs">
                <Compass className="w-6 h-6" />
              </div>

              <span className="text-xs font-black tracking-widest text-emerald-400 uppercase">
                Our Vision
              </span>

              <h2 className="text-2xl sm:text-3xl font-black mt-2 mb-4 leading-snug">
                The Nation&apos;s Most Impactful Blue-Collar Platform
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                &ldquo;To become India’s most impactful employment platform for blue collar workers, where every skilled labourer—regardless of background or location—can access dignified, stable work. We envision a future where no daily wage earner is left behind, and every company has access to a verified, dependable workforce that fuels real growth and inclusion.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-300">
              <Globe2 className="w-4 h-4 text-[#0C59D4]" />
              <span>Active Across Tier-1, Tier-2, and Tier-3 Indian Cities</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* IMPACT PILLARS BENTO                                                      */}
        {/* ========================================================================= */}
        <div className="mb-10">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            Socio-Economic Commitments
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            How We Deliver on Our Promise
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="vision-card bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0C59D4] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">5 Crore+ Informal Formalization</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Construction is India&apos;s second-largest employer. We build statutory bridges (PF, ESIC, insurance, Aadhaar KYC) so informal labor gains institutional recognition.
            </p>
          </div>

          <div className="vision-card bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Zero Commission Policy</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Workers keep 100% of their earned daily wages. No cuts, no deductions, and no middleman bribes.
            </p>
          </div>

          <div className="vision-card bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Dignity in Every Interaction</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Shramik Samman is our guiding light. Every mistri, carpenter, and helper is verified, valued, and provided safe work environments with protective gear.
            </p>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about-us/history"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Our History
          </Link>

          <Link
            href="/about-us/values"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Core Values</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
