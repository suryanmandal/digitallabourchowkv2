"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileCheck,
} from "lucide-react";

export default function BusinessPage() {
  const categories = [
    {
      id: "contractor",
      title: "Contractor Solutions",
      subtitle: "For Sub-Contractors & Jamadars",
      description: "Scale your daily project teams on demand. Access pre-vetted skilled tradesmen across civil, electrical, plumbing, and finishing works with transparent day rates.",
      features: [
        "15-Minute workforce dispatch in tier-1 & tier-2 cities",
        "Zero recruitment overhead and zero commission markups",
        "Verified Aadhaar and trade skill credentials",
      ],
      icon: <HardHat className="w-8 h-8 text-[#0C59D4]" />,
    },
    {
      id: "general-contractor",
      title: "General Contractor Solutions",
      subtitle: "For EPCs & Turnkey Project Heads",
      description: "End-to-end workforce staffing for large commercial, industrial, and infrastructure jobsites. Comply effortlessly with statutory norms.",
      features: [
        "Digital biometric attendance tracking and geo-fencing",
        "Statutory PF, ESIC & labour compliance documentation",
        "Dedicated account manager for bulk multi-trade deployment",
      ],
      icon: <Building2 className="w-8 h-8 text-[#0C59D4]" />,
    },
    {
      id: "builder-developer",
      title: "Builder & Developer Solutions",
      subtitle: "For Real Estate Developers & Builders",
      description: "Streamline multi-site labour allocation, reduce site idle-time, and ensure timely handover of residential and commercial towers.",
      features: [
        "Centralized labour procurement dashboard",
        "Real-time site productivity benchmarks",
        "Integrated site safety (PPE) audits",
      ],
      icon: <TrendingUp className="w-8 h-8 text-[#0C59D4]" />,
    },
    {
      id: "staffing-agency",
      title: "Staffing & Placement Agency",
      subtitle: "For Manpower Agencies & Partners",
      description: "Partner with DLC to digitize your existing worker pool, get institutional corporate demand, and accelerate nationwide mobilization.",
      features: [
        "Pan-India project job access for your workers",
        "Automated digital payroll and DBT payouts",
        "Institutional compliance certificate issuance",
      ],
      icon: <Users className="w-8 h-8 text-[#0C59D4]" />,
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#071329] via-[#0C59D4] to-[#0A47AD] text-white py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs sm:text-sm font-semibold mb-4 border border-white/10">
            <Building2 className="w-4 h-4 text-blue-300" />
            <span>DLC Enterprise & Business Suite</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Construction Workforce Management, <br />
            <span className="text-amber-300">Simplified &amp; Guaranteed</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Whether you are a subcontractor, general contractor, real estate developer, or staffing agency, DLC equips your jobsites with pre-verified manpower and compliant attendance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://onboarding.digitallabourchowk.com/login"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-transform active:scale-95"
            >
              Hire Workers for Project
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-colors"
            >
              Request Custom Enterprise Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Dedicated Business Categories */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-8 space-y-12">
        {categories.map((c) => (
          <div
            key={c.id}
            id={c.id}
            className="scroll-mt-24 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
                    {c.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0C59D4]">
                      {c.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {c.title}
                    </h2>
                  </div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 mt-4 max-w-2xl">
                  {c.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {c.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-3">
                <a
                  href="https://onboarding.digitallabourchowk.com/login"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>Deploy Manpower</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}