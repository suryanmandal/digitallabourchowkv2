"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Download,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  ShieldCheck,
  Zap,
  HardHat,
  Smartphone,
  QrCode,
  Flame,
} from "lucide-react";

interface TradeItem {
  id: string;
  nameEn: string;
  nameHi: string;
  category: string;
  dailyWage: string;
  openJobs: string;
  image: string;
  accentColor: string;
  badgeText: string;
  badgeIcon: string;
  skills: string[];
  equipment: string;
}

const TRADES_DATA: TradeItem[] = [
  {
    id: "labour",
    nameEn: "General Labour & Beldaar",
    nameHi: "सामान्य लेबर / बेलदार",
    category: "General Civil",
    dailyWage: "₹550 - ₹750 / day",
    openJobs: "4,820+ Active Jobs",
    image: "/images/workers/labour.jpg",
    accentColor: "from-amber-500/20 to-orange-500/10",
    badgeText: "High Demand",
    badgeIcon: "🔥",
    skills: ["Material Handling", "Excavation", "Site Cleanup", "Concrete Mixing"],
    equipment: "Steel Shovel & Safety Gear",
  },
  {
    id: "mason",
    nameEn: "Master Mason (Rajmistri)",
    nameHi: "राजमिस्त्री (चिनाई व प्लास्टर)",
    category: "Civil Crafts",
    dailyWage: "₹850 - ₹1,200 / day",
    openJobs: "2,940+ Active Jobs",
    image: "/images/workers/mason.jpg",
    accentColor: "from-red-500/20 to-amber-500/10",
    badgeText: "Top Rated",
    badgeIcon: "🧱",
    skills: ["Brick Laying", "Plastering", "Tile Fixing", "Waterproof Mortar"],
    equipment: "Triangular Trowel & Spirit Level",
  },
  {
    id: "painter",
    nameEn: "Professional Painter",
    nameHi: "रंगसाज़ / पेंटर",
    category: "Finishing & Coating",
    dailyWage: "₹750 - ₹1,100 / day",
    openJobs: "1,680+ Active Jobs",
    image: "/images/workers/painter.jpg",
    accentColor: "from-blue-500/20 to-cyan-500/10",
    badgeText: "Wet Paint Action",
    badgeIcon: "🎨",
    skills: ["Wall Putty", "Emulsion Coating", "Texture Finish", "Airless Spray"],
    equipment: "Roller, Metal Bucket & Mask",
  },
  {
    id: "plumber",
    nameEn: "Certified Plumber",
    nameHi: "नलसाज़ / प्लंबर",
    category: "MEP Services",
    dailyWage: "₹800 - ₹1,250 / day",
    openJobs: "1,450+ Active Jobs",
    image: "/images/workers/plumber.jpg",
    accentColor: "from-sky-500/20 to-blue-500/10",
    badgeText: "Leak-Proof QA",
    badgeIcon: "🚰",
    skills: ["CPVC / PPR Piping", "Sanitary Fitment", "Water Pressure Test", "Drainage"],
    equipment: "Heavy Pipe Wrench & Manifold",
  },
  {
    id: "carpenter",
    nameEn: "Shuttering & Wood Carpenter",
    nameHi: "बढ़ई / शटरिंग कारपेंटर",
    category: "Formwork & Joinery",
    dailyWage: "₹850 - ₹1,300 / day",
    openJobs: "2,130+ Active Jobs",
    image: "/images/workers/carpenter.jpg",
    accentColor: "from-amber-600/20 to-yellow-600/10",
    badgeText: "Precision Planing",
    badgeIcon: "🪵",
    skills: ["Formwork Shuttering", "Teak Polishing", "Door & Window Frames", "Scaffolding"],
    equipment: "Teak Hand Plane & Wood Chisels",
  },
  {
    id: "electrician",
    nameEn: "Licensed Electrician",
    nameHi: "बिजली मिस्त्री / इलेक्ट्रीशियन",
    category: "MEP Services",
    dailyWage: "₹850 - ₹1,350 / day",
    openJobs: "2,560+ Active Jobs",
    image: "/images/workers/electrician.jpg",
    accentColor: "from-yellow-500/20 to-amber-500/10",
    badgeText: "High Voltage QA",
    badgeIcon: "⚡",
    skills: ["Conduit Wiring", "MCB Distribution Box", "Inverter & Lighting", "Phase Testing"],
    equipment: "Digital Multimeter & Wire Stripper",
  },
  {
    id: "foreman",
    nameEn: "Site Foreman (In-Charge)",
    nameHi: "साइट फोरमैन (कार्यप्रभारी)",
    category: "Site Leadership",
    dailyWage: "₹1,200 - ₹1,800 / day",
    openJobs: "890+ Active Jobs",
    image: "/images/workers/foreman.jpg",
    accentColor: "from-orange-500/20 to-red-500/10",
    badgeText: "Gang Leader",
    badgeIcon: "📋",
    skills: ["Worker Gang Allocation", "Daily Progress Report", "Safety Protocols", "Material Indent"],
    equipment: "Industrial Walkie-Talkie & Clipboard",
  },
  {
    id: "supervisor",
    nameEn: "Construction Supervisor",
    nameHi: "निर्माण सुपरवाइजर",
    category: "Engineering Operations",
    dailyWage: "₹1,400 - ₹2,200 / day",
    openJobs: "740+ Active Jobs",
    image: "/images/workers/supervisor.jpg",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badgeText: "Digital BIM In-Hand",
    badgeIcon: "📱",
    skills: ["BIM 3D Model Review", "Quality Checklist (QA/QC)", "Subcontractor Coordination", "Site Measurement"],
    equipment: "Field Tablet & White Helmet",
  },
  {
    id: "engineer",
    nameEn: "Civil Site Engineer",
    nameHi: "सिविल इंजीनियर (बी.टेक / डिप्लोमा)",
    category: "Engineering Operations",
    dailyWage: "₹1,800 - ₹3,000 / day",
    openJobs: "620+ Active Jobs",
    image: "/images/workers/engineer.jpg",
    accentColor: "from-indigo-500/20 to-blue-500/10",
    badgeText: "Structural Aligned",
    badgeIcon: "📐",
    skills: ["Structural Plan Reading", "Total Station Alignment", "Bar Bending Schedule (BBS)", "Billing Verification"],
    equipment: "Blueprint Roll & Laser Meter",
  },
  {
    id: "welder",
    nameEn: "Certified Arc & Gas Welder",
    nameHi: "वेल्डर (आर्क व गैस वेल्डिंग)",
    category: "Heavy Fabrication",
    dailyWage: "₹900 - ₹1,500 / day",
    openJobs: "1,120+ Active Jobs",
    image: "/images/workers/welder.jpg",
    accentColor: "from-blue-600/20 to-amber-500/10",
    badgeText: "Live Arc Sparks",
    badgeIcon: "✨",
    skills: ["Structural Steel Beam Welding", "MIG / TIG / Arc", "Pipe Joints", "Cutting Torch Operation"],
    equipment: "Arc Torch, Heavy Gloves & Goggles",
  },
  {
    id: "iti-technician",
    nameEn: "ITI Technician / Machinist",
    nameHi: "आईटीआई तकनीशियन / मैकेनिक",
    category: "Industrial Technical",
    dailyWage: "₹950 - ₹1,600 / day",
    openJobs: "980+ Active Jobs",
    image: "/images/workers/iti-technician.jpg",
    accentColor: "from-cyan-500/20 to-blue-500/10",
    badgeText: "ITI Certified",
    badgeIcon: "🔧",
    skills: ["Motor Diagnostics", "Hydraulic Pumps", "Generator Maintenance", "Preventive Servicing"],
    equipment: "Digital Diagnostic Meter & Sockets",
  },
];

export default function WorkerTradesGrid() {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc";

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================================================
            SECTION HEADER: 3x4 UNIFIED GRID BLUEPRINT
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>11 Core Crafts & Leadership Roles • Direct App Hiring</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Sabhi Shramik Shreniyan, <br />
            <span className="text-[#0C59D4]">Ek Hi Plateform Par Uplabdh</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Kisi alag page par bhatakne ki zaroorat nahi. Apne hunar ke anusaar card chuniye
            aur Google Play Store se DLC Worker App download karke turant kaam paayein.
          </p>
        </div>

        {/* =========================================================================
            3x4 UNIFIED GRID: 11 TRADES + 1 DOWNLOAD CTA CARD (EXACT SAME DIMENSIONS)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          
          {/* RENDER THE 11 TRADE CARDS */}
          {TRADES_DATA.map((trade, idx) => (
            <a
              key={trade.id}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between pt-6 pb-6 px-6 sm:px-7 cursor-pointer overflow-visible"
            >
              {/* TOP ACCENT BADGES */}
              <div className="flex items-center justify-between mb-2 z-20">
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                  #{idx + 1} • {trade.category}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-black">
                  <span>{trade.badgeIcon}</span>
                  <span>{trade.badgeText}</span>
                </span>
              </div>

              {/* 3D POP-OUT FRONT-FACING INDIAN CHARACTER RENDER */}
              <div className="relative w-full h-64 sm:h-72 my-2 flex items-center justify-center overflow-visible">
                {/* Ambient Radial Spotlight Behind Character */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${trade.accentColor} blur-xl opacity-60 transition-opacity group-hover:opacity-100`}
                />

                {/* Character Image with Upward Float Micro-Interaction */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800/10 shadow-lg group-hover:-translate-y-2.5 group-hover:scale-[1.03] transition-all duration-300 ease-out">
                  <Image
                    src={trade.image}
                    alt={`${trade.nameEn} - Front View`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 3}
                  />

                  {/* Micro-sparkle overlay for Welder */}
                  {trade.id === "welder" && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-amber-400/90 text-slate-950 font-black text-[9px] flex items-center gap-1 shadow-md animate-pulse">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>SPARKS LIVE</span>
                    </div>
                  )}

                  {/* Micro-wet paint overlay for Painter */}
                  {trade.id === "painter" && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-sky-400/90 text-slate-950 font-black text-[9px] flex items-center gap-1 shadow-md">
                      <span>🎨 100% SMOOTH</span>
                    </div>
                  )}

                  {/* Equipment Overlay Tag */}
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-medium border border-white/10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="truncate max-w-[170px]">{trade.equipment}</span>
                  </div>
                </div>
              </div>

              {/* CARD DETAILS: TITLE, HINDI NAME, DAILY RATE & PILLS */}
              <div className="mt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-black text-slate-950 group-hover:text-[#0C59D4] transition-colors leading-tight">
                    {trade.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    {trade.nameHi}
                  </p>

                  {/* Daily Rate Benchmark & Jobs Count */}
                  <div className="mt-3.5 flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        Rozana Majdoori
                      </span>
                      <span className="text-sm sm:text-base font-black text-emerald-700">
                        {trade.dailyWage}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        Open Jobs
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-blue-700 flex items-center gap-1 justify-end">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {trade.openJobs}
                      </span>
                    </div>
                  </div>

                  {/* Skill Chips */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trade.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM ACTION BUTTON: DIRECT GOOGLE PLAY REDIRECTION */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#0C59D4] flex items-center gap-1 transition-colors">
                    <span>Kaam Paayein (App Par)</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[11px] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>0% Commission</span>
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* =========================================================================
              CARD 12: GOOGLE PLAY STORE DOWNLOAD CTA CARD (EXACT MATCHING DIMENSIONS)
             ========================================================================= */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative bg-gradient-to-br from-[#071938] via-[#0C59D4] to-[#0A47AD] text-white rounded-3xl border-2 border-amber-400/40 shadow-[0_15px_40px_rgba(12,89,212,0.35)] hover:shadow-[0_20px_50px_rgba(251,191,36,0.35)] hover:border-amber-400 transition-all duration-300 flex flex-col justify-between pt-6 pb-6 px-6 sm:px-7 cursor-pointer overflow-hidden"
          >
            {/* Ambient Background Glow & Circuit Lines */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-sky-400/15 rounded-full blur-2xl pointer-events-none" />

            {/* TOP HEADER BADGE */}
            <div className="flex items-center justify-between mb-2 z-10">
              <span className="text-[11px] font-bold text-blue-200 tracking-wider uppercase">
                #12 • DOWNLOAD APP
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>INSTANT ACCESS</span>
              </span>
            </div>

            {/* CENTER GRAPHIC: SMARTPHONE MOCKUP & QR CODE WITH GOLD HIGHLIGHT */}
            <div className="relative w-full h-64 sm:h-72 my-2 flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md z-10 group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-300">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-2xl flex items-center justify-center mb-3">
                <QrCode className="w-16 h-16 text-slate-950" />
              </div>
              <span className="text-xs font-black text-amber-300 tracking-wider uppercase">
                Scan With Mobile Camera
              </span>
              <p className="text-[11px] text-blue-100 text-center mt-1">
                Download DLC Worker App directly from Google Play Store
              </p>
              
              <div className="mt-3 flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.8 (35K+ Reviews)</span>
              </div>
            </div>

            {/* DETAILS & ACTION CTA */}
            <div className="mt-3 z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-[22px] font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                  Apna Kaam Shuru Karein
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                  1 Minute me Registration • Har Roz Kaam • Seedha Bank Transfer
                </p>

                <div className="mt-3.5 p-2.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between text-xs">
                  <span className="text-blue-200">Registration Fee:</span>
                  <span className="font-black text-amber-300">₹0 (100% Free)</span>
                </div>
              </div>

              {/* BOTTOM ACTION BUTTON */}
              <div className="mt-5 pt-3.5 border-t border-white/20 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md group-hover:bg-amber-300 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download on Play Store</span>
                </div>

                <ArrowUpRight className="w-5 h-5 text-amber-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </a>

        </div>

        {/* BOTTOM HELPLINE STRIP */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Aapka hunar is list me nahi mila?
              </h4>
              <p className="text-xs text-slate-500">
                Digital Labour Chowk par 40+ specialized construction skills ke thekedar judte hain.
              </p>
            </div>
          </div>

          <a
            href="tel:18002020991"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
          >
            <span>Call Worker Helpline: 1800-202-0991</span>
          </a>
        </div>

      </div>
    </section>
  );
}
