"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass,
  Heart,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  HardHat,
  Banknote,
} from "lucide-react";
import gsap from "gsap";

export default function ValuesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".val-card", {
        opacity: 0,
        y: 25,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      num: "01",
      title: "Shramik Samman (Dignity of Labour)",
      desc: "Every construction worker is a nation builder. We reject the dehumanizing culture of roadside chowks where humans are bargained like commodities. On DLC, workers have digital profiles, ratings, and institutional respect.",
      icon: Heart,
      color: "text-rose-600 bg-rose-50 border-rose-100",
    },
    {
      num: "02",
      title: "Radical Transparency",
      desc: "No hidden cuts, no shadow billing. Daily wage rates are benchmarked across Tier-1 and Tier-2 cities in transparent rate cards. Contractors and workers always know the exact terms upfront.",
      icon: TrendingUp,
      color: "text-[#0C59D4] bg-blue-50 border-blue-100",
    },
    {
      num: "03",
      title: "100% Direct Bank Transfer (DBT)",
      desc: "Wages are wired directly into Aadhaar-linked bank accounts. By cutting out the cash-dependent Jamadar network, we guarantee timely payments, preventing wage withholding or informal deductions.",
      icon: Banknote,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      num: "04",
      title: "Worker Safety & Suraksha First",
      desc: "Active workers are covered with up to ₹5 Lakhs accidental insurance on contracted project sites. We mandate basic PPE standards (helmets, safety boots, high-vis vests) with partner EPC builders.",
      icon: HardHat,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      num: "05",
      title: "2-Hour Rapid Response SLA",
      desc: "Speed creates trust. When a site supervisor needs urgent trade gangs (masons, carpenters, bar-benders, helpers), our digital mobilization dispatch delivers verified teams within 2 hours.",
      icon: Zap,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      num: "06",
      title: "Statutory Compliance & Governance",
      desc: "From geo-fenced biometric muster rolls to statutory PF/ESIC documentation, we help builders maintain spotless labor compliance and clean audit trails for BOCW and municipal authorities.",
      icon: ShieldCheck,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
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
            <span className="text-[#0C59D4]">Core Values</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Ethical Pillars</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              The Principles That <span className="text-[#0C59D4]">Build A Stronger India</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              At Digital Labour Chowk, technology is never an end in itself—it is a tool for human dignity, 
              financial inclusion, and professional integrity across India&apos;s construction ecosystem.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6 CORE VALUES BENTO GRID                                                  */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="val-card bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${v.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-400">
                      {v.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {v.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0C59D4]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Non-Negotiable Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about-us/vision-mission"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Vision & Mission
          </Link>

          <Link
            href="/about-us/leadership"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Leadership & Founders</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
