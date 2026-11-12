"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import gsap from "gsap";

export default function FootprintPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footprint-card", {
        opacity: 0,
        y: 25,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cities = [
    { name: "Delhi NCR", state: "Delhi, Noida, Gurugram, Faridabad", workers: "85,000+", projects: "450+ Sites" },
    { name: "Patna", state: "Bihar (State Central Hub)", workers: "65,000+", projects: "280+ Sites" },
    { name: "Bengaluru", state: "Karnataka (Tech & Urban Infra)", workers: "50,000+", projects: "310+ Sites" },
    { name: "Mumbai & MMR", state: "Maharashtra (Civil & Finishing)", workers: "45,000+", projects: "290+ Sites" },
    { name: "Hyderabad", state: "Telangana (EPC & Real Estate)", workers: "38,000+", projects: "210+ Sites" },
    { name: "Pune", state: "Maharashtra (Industrial & Housing)", workers: "28,000+", projects: "160+ Sites" },
    { name: "Lucknow", state: "Uttar Pradesh (Commercial & Roads)", workers: "25,000+", projects: "140+ Sites" },
    { name: "Kolkata", state: "West Bengal (Turnkey Civil)", workers: "20,000+", projects: "110+ Sites" },
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
            <span className="text-[#0C59D4]">Our Footprint</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>National Operations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Active Across <span className="text-[#0C59D4]">15+ Industrial Cities & 6,000+ Towns</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From our registered roots in Darbhanga (Bihar) to our corporate innovation hub at STPI Noida, 
              Digital Labour Chowk powers construction workforce mobilization across India&apos;s fastest growing urban corridors.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* HEADQUARTERS & REGISTERED OFFICES BENTO                                   */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Corporate Office */}
          <div className="footprint-card bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase">
                  Corporate Headquarters
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0C59D4] border border-blue-100">
                  Tech & Product
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Software Technology Park of India (STPI)
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                1st Floor, Software Technology Park of India, Sector 29, 
                Near Botanical Garden Metro Station, Noida - 201301 (Uttar Pradesh).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0C59D4]" />
                <span>+91 9654007500 / +91-7070999175</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0C59D4]" />
                <span>info@digitallabourchowk.com</span>
              </div>
            </div>
          </div>

          {/* Registered Office */}
          <div className="footprint-card bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black tracking-widest text-emerald-600 uppercase">
                  Registered Corporate Office
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Origins & Legal Entity
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Darbhanga Hub (Bihar)
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                197, 1st Floor, Ami, Nainaghat, Telhan, Darbhanga - 847115 (Bihar, India).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Incorporated under the Ministry of Corporate Affairs (MCA), India</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MAJOR INDUSTRIAL HUBS GRID                                                */}
        {/* ========================================================================= */}
        <div className="mb-10">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            Pan-India Deployment Hubs
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Major City Operations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cities.map((c, idx) => (
            <div
              key={idx}
              className="footprint-card bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-900">{c.name}</h4>
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0C59D4] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-slate-500 font-normal mb-4">
                {c.state}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-[#0C59D4]">{c.workers} Workers</span>
                <span className="text-slate-600">{c.projects}</span>
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
            href="/about-us/leadership"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Leadership & Founders
          </Link>

          <Link
            href="/awards-recognition"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Awards & Recognitions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
