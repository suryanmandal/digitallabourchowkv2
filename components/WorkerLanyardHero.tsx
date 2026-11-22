"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Phone,
  HardHat,
  ShieldCheck,
  Star,
  QrCode,
  Sparkles,
  CheckCircle2,
  BadgeCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function WorkerLanyardHero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(-3);
  const [rotateY, setRotateY] = useState(4);
  const [lightPos, setLightPos] = useState({ x: 35, y: 25 });
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic 3D tilt tracking and specular light reflection
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrain tilt angle for realistic weight and tension
    const degX = ((y - centerY) / centerY) * -14;
    const degY = ((x - centerX) / centerX) * 16;

    setRotateX(degX);
    setRotateY(degY);

    // Specular light position in percentage
    const lightX = (x / rect.width) * 100;
    const lightY = (y / rect.height) * 100;
    setLightPos({ x: lightX, y: lightY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(-2);
    setRotateY(3);
    setLightPos({ x: 30, y: 20 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section className="relative w-full bg-black text-white pt-8 pb-20 sm:pt-14 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Pure Black Depth Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* =========================================================================
            LEFT COLUMN: HERO HEADLINE, VALUE PROPOSITIONS & DOWNLOAD CTAS
           ========================================================================= */}
        <div className="flex-1 text-center lg:text-left z-10 max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <HardHat className="w-4 h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-100">
              India&apos;s #1 Verified Construction Craftsman Network
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] mb-6">
            Apna Digital Card Banao, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
              Pura Haq, Zero Commission
            </span>{" "}
            Pao.
          </h1>

          {/* Value Narrative */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 font-normal">
            Sarkari standards par aadharit digital pehchan. Seedhe thekedaron se judein,
            har roz 100% bank transfer payein bina kisi bicholiye ya jamadar ke commission ke,
            aur payein <span className="text-amber-300 font-semibold">₹5 Lakhs tak ka bima cover</span>.
          </p>

          {/* Core Feature Micro-Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">0% Commission Promise</h4>
                <p className="text-xs text-blue-200/80">Kamai ka pura 100% seedhe aapke khate me</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">₹5 Lakhs Insurance</h4>
                <p className="text-xs text-blue-200/80">Site par har shramik ka suraksha kavach</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-base shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-all hover:scale-105 active:scale-95 group"
            >
              <Download className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-y-0.5" />
              <span>Download DLC Worker App</span>
              <ArrowRight className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:18002020991"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Toll-Free Helpline: 1800-202-0991</span>
            </a>
          </div>

          {/* Social Proof Metric Line */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-blue-200/80 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">3,50,000+</span>
              <span>Verified Workers</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">6,000+</span>
              <span>Towns Active</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-1.5 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold text-white text-sm">4.8 / 5</span>
              <span className="text-blue-200/80">Play Store</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: 3D FLEXIBLE HANGING LANYARD & FLOATING ID CARD
           ========================================================================= */}
        <div className="flex-1 flex flex-col items-center justify-start relative w-full min-h-[640px] pt-0">
          
          {/* LANYARD SUSPENSION STRAPS (Hanging directly from the absolute top ceiling) */}
          <div className="absolute top-0 flex flex-col items-center pointer-events-none z-20 w-full max-w-xs">
            {/* Ceiling anchor bracket */}
            <div className="w-16 h-3 rounded-b-md bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-x border-b border-slate-700 shadow-lg" />
            
            {/* Dual Hanging Woven Straps with Chevron/Herringbone Pattern - Nearby distance */}
            <div className="flex items-start justify-center gap-2.5 w-24 h-48 relative">
              {/* Left Strap */}
              <div 
                className="w-7 h-full shadow-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #093c96 0%, #0c56d6 60%, #093c96 100%)",
                }}
              >
                {/* Herringbone / Chevron Woven Pattern in Royal Blue & Crimson Accent */}
                <div 
                  className="absolute inset-0 opacity-45 mix-blend-overlay"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      -45deg,
                      #ffffff 0,
                      #ffffff 3px,
                      transparent 3px,
                      transparent 6px
                    ),
                    repeating-linear-gradient(
                      45deg,
                      #e11d48 0,
                      #e11d48 3px,
                      transparent 3px,
                      transparent 6px
                    )`,
                    backgroundSize: "10px 10px",
                  }}
                />
                <div className="absolute inset-y-0 left-0 w-[1.5px] bg-blue-300/40" />
                <div className="absolute inset-y-0 right-0 w-[1.5px] bg-blue-950/70" />
              </div>

              {/* Right Strap */}
              <div 
                className="w-7 h-full shadow-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #093c96 0%, #0c56d6 60%, #093c96 100%)",
                }}
              >
                {/* Herringbone / Chevron Woven Pattern */}
                <div 
                  className="absolute inset-0 opacity-45 mix-blend-overlay"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      #ffffff 0,
                      #ffffff 3px,
                      transparent 3px,
                      transparent 6px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      #e11d48 0,
                      #e11d48 3px,
                      transparent 3px,
                      transparent 6px
                    )`,
                    backgroundSize: "10px 10px",
                  }}
                />
                <div className="absolute inset-y-0 left-0 w-[1.5px] bg-blue-300/40" />
                <div className="absolute inset-y-0 right-0 w-[1.5px] bg-blue-950/70" />
              </div>
            </div>

            {/* Strap Convergence Loop & Red Brand Accent */}
            <div className="w-14 h-5 rounded-md bg-gradient-to-r from-red-600 via-rose-500 to-red-600 border border-red-400 shadow-md flex items-center justify-center -mt-1 z-30">
              <span className="text-[8px] font-black tracking-widest text-white uppercase">DLC</span>
            </div>

            {/* Chrome Metal Carabiner / Swivel Lobster Clasp Hook */}
            <div className="relative flex flex-col items-center -mt-0.5 z-20">
              {/* Swivel Ring */}
              <div 
                className="w-6 h-4 rounded-full border-[2.5px] border-slate-300 shadow-md"
                style={{
                  background: "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 50%, #cbd5e1 100%)",
                }}
              />
              {/* Metal Lobster Trigger Clasp */}
              <div 
                className="w-5 h-7 rounded-sm border-[2px] border-slate-400 -mt-1.5 shadow-lg flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 35%, #64748b 70%, #94a3b8 100%)",
                }}
              >
                {/* Clasp Lever Pin */}
                <div className="absolute right-0.5 top-1.5 w-1 h-3 bg-slate-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* =========================================================================
              3D FLOATING & INTERACTIVE ID BADGE (Physics tilt + Specular Light Reflection)
             ========================================================================= */}
          <div
            className="perspective-[1200px] w-full max-w-[340px] sm:max-w-[360px] cursor-grab active:cursor-grabbing mt-56 z-30 select-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={cardRef}
              className="relative w-full rounded-[26px] bg-[#0c53c4] border-[3px] border-white/30 p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(12,89,212,0.4)] transition-transform duration-150 ease-out will-change-transform"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.04 : 1})`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Oval Cutout Punch Hole for Lanyard Clip */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-full bg-slate-900/80 border border-white/30 shadow-inner z-30" />

              {/* DYNAMIC SPECULAR LIGHTING REFLECTION OVERLAY */}
              <div
                className="absolute inset-0 rounded-[24px] pointer-events-none z-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 240px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.08) 45%, transparent 70%)`,
                }}
              />

              {/* CARD HEADER: LOGO & VERIFIED SEAL */}
              <div className="flex items-center justify-between pt-3 pb-4 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-md">
                    <span className="font-black text-[#0C59D4] text-xs">DLC</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-black tracking-wider text-white uppercase leading-none">
                      Digital Labour Chowk
                    </h3>
                    <span className="text-[10px] text-blue-200 font-semibold tracking-wider uppercase">
                      Shramik Pehchan Patra
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* WORKER PROFILE SHOWCASE (Photo, Trade, Level) */}
              <div className="mt-5 flex items-center gap-4">
                {/* Avatar with Golden Ring */}
                <div className="relative w-20 h-24 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg bg-slate-800 shrink-0">
                  <Image
                    src="/images/workers/mason.jpg"
                    alt="Master Mason Mohan Lal"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                    priority
                  />
                  {/* Grade Badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-amber-400 text-slate-950 font-black text-[9px] text-center py-0.5 uppercase tracking-wider">
                    Grade A+
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-blue-200">
                    Trade: Rajmistri (Master Mason)
                  </span>
                  <h4 className="text-xl font-black text-white leading-tight mt-0.5">
                    Mohan Lal Kushwaha
                  </h4>
                  <p className="text-xs text-blue-100 font-medium mt-0.5">
                    ID: <span className="font-mono text-amber-300 font-bold">DLC-98214-PAT</span>
                  </p>

                  {/* Rating & Work Done */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md text-amber-300 text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>4.9</span>
                    </div>
                    <span className="text-[11px] text-blue-100 font-semibold">
                      184 Jobs Done
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD SECURITY STRIP: CHIP, QR CODE & STATUTORY METRICS */}
              <div className="mt-5 p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {/* Simulated Smart Card Gold Chip */}
                    <div className="w-8 h-6 rounded bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 border border-amber-300/80 shadow-sm flex items-center justify-center">
                      <div className="w-6 h-4 border border-amber-800/40 grid grid-cols-2 gap-0.5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-blue-200 uppercase tracking-widest block font-bold">
                        BIMA COVERAGE
                      </span>
                      <span className="text-xs font-black text-white">
                        ₹5,00,000 ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini QR Code */}
                <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-md flex items-center justify-center shrink-0">
                  <QrCode className="w-10 h-10 text-slate-900" />
                </div>
              </div>

              {/* FOOTER OF CARD: PLAY STORE DIRECT ACTION */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                <span className="text-[10px] text-blue-200 font-medium">
                  Scan to verify on DLC App
                </span>
                <span className="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                  Government Aligned
                  <ShieldCheck className="w-3 h-3 text-amber-300" />
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Hint */}
          <div className="mt-4 flex items-center gap-1.5 text-xs text-blue-300/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Move cursor over card to inspect 3D flexible motion & security seal</span>
          </div>

        </div>

      </div>
    </section>
  );
}
