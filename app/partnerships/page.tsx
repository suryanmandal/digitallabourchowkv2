"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import gsap from "gsap";

export default function PartnershipsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partner-card", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 15 Collaboration partners from legacy dataset
  const collabLogos = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: `/images/for-collaboration/collaborations/collab-${i + 1}.webp`,
    label: `Partner & Collaborator ${i + 1}`,
  }));

  const keyAlliances = [
    {
      name: "Villgro Innovations Foundation",
      role: "Incubation & Social Enterprise Acceleration",
      desc: "Partnering on measurable worker income uplift, safety standards, and sustainable social impact metrics.",
    },
    {
      name: "Global Development Incubator (GDI)",
      role: "Global Advisory & Policy Research",
      desc: "Collaborating on migration resilience, workforce formalization, and ethical labor supply chains.",
    },
    {
      name: "Migrants Resilience Collaborative (MRC)",
      role: "Grassroots Worker Welfare & Entitlements",
      desc: "Connecting migrant construction workers with government entitlements, BOCW welfare cards, and social safety nets.",
    },
    {
      name: "Software Technology Parks of India (STPI)",
      role: "Government Incubation & Noida Headquarters",
      desc: "Corporate tech incubator backing DLC's technology infrastructure and algorithmic job matching engine.",
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
            <span className="text-[#0C59D4]">Institutional Partners</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Alliances That Build India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Strategic Partnerships & <span className="text-[#0C59D4]">Enterprise Collaborations</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Digital Labour Chowk collaborates with world-class incubators, impact investors, 
              government agencies, and top developers to formalize India&apos;s construction workforce.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* KEY STRATEGIC ALLIANCES                                                   */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        <div className="mb-10">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            Institutional Backing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Global Impact Alliances
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {keyAlliances.map((item, idx) => (
            <div
              key={idx}
              className="partner-card bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase">
                  {item.role}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Active Institutional Partnership</span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BUILDERS, CONTRACTORS & LOGO SHOWCASE                                     */}
        {/* ========================================================================= */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            Trusted By Builders & Institutions
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Client & Partner Showcase
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {collabLogos.map((c) => (
            <div
              key={c.id}
              className="partner-card bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-center h-28 hover:shadow-md transition-shadow relative"
            >
              <div className="relative w-full h-full max-h-16">
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Form Callout */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
              Partner With Us
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Want to Mobilize Manpower or Collaborate on Research?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-normal max-w-xl">
              Whether you are an EPC contractor seeking 500+ workers or an institutional body driving blue-collar welfare, connect with our partnership desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="mailto:info@digitallabourchowk.com"
              className="px-6 py-3 rounded-lg bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Partner Inquiry</span>
            </a>
            <a
              href="tel:+917070999175"
              className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#0C59D4]" />
              <span>+91-7070999175</span>
            </a>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/media-coverage"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Media Coverage
          </Link>

          <Link
            href="/about-us"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Back to About Us Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
