"use client";

import React from "react";
import Image from "next/image";
import { Download, QrCode, ArrowUpRight, Phone, ShieldCheck, Sparkles } from "lucide-react";

export default function WorkerBillboardCTA() {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc";

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* =========================================================================
          BACKGROUND: BROWN CORRUGATED / VERTICALLY SLATTED ARCHITECTURAL WALL
          Faithfully replicating reference image media_1795351791853_83ac4a79.jpg
         ========================================================================= */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#522718",
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #3d1c10 0px,
            #3d1c10 4px,
            #4a2214 4px,
            #63301c 10px,
            #7b3d24 14px,
            #8e482b 16px,
            #63301c 18px,
            #3d1c10 22px
          )`,
          backgroundSize: "22px 100%",
        }}
      >
        {/* Ambient Top Sunlight & Vignette Shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ffffff15,transparent_70%)] pointer-events-none" />
      </div>

      {/* Horizontal conduit pipe near bottom (from reference image) */}
      <div className="absolute bottom-6 left-0 right-1/4 h-2.5 bg-slate-500 border-t border-slate-300 shadow-md z-10 flex items-center">
        <div className="w-4 h-4 bg-slate-700 rounded-sm -ml-1 border border-slate-400" />
        <div className="w-3 h-5 bg-slate-600 rounded-sm ml-48 border border-slate-400" />
      </div>

      {/* Small Yellow Safety Bollard on bottom right (from reference image) */}
      <div className="hidden sm:block absolute bottom-0 right-12 w-6 h-28 rounded-t-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 border border-amber-600 shadow-2xl z-10">
        <div className="w-full h-1 bg-black/40 mt-3" />
      </div>

      {/* =========================================================================
          MAIN OUTDOOR HOARDING BILLBOARD (ROYAL BLUE WITH REALISTIC SUNLIGHT CASTING)
         ========================================================================= */}
      <div className="relative z-20 max-w-5xl mx-auto">
        <div 
          className="relative rounded-2xl sm:rounded-3xl border-[6px] sm:border-[8px] border-[#071329] shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 hover:shadow-[0_35px_85px_rgba(0,0,0,0.95)]"
          style={{
            background: "linear-gradient(135deg, #0e56cc 0%, #0a46ab 60%, #08388b 100%)",
          }}
        >
          {/* REALISTIC DIAGONAL SUNLIGHT SHADOW OVERLAY (Crucial aesthetic from reference photo) */}
          <div 
            className="absolute inset-0 pointer-events-none z-10 opacity-35"
            style={{
              background: "linear-gradient(125deg, transparent 0%, transparent 28%, rgba(0, 0, 0, 0.45) 28.5%, rgba(0, 0, 0, 0.55) 55%, transparent 55.5%)",
            }}
          />

          {/* Realistic Paper Crease / Poster Paste Wrinkle Texture */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `repeating-linear-gradient(
                70deg,
                rgba(255,255,255,0.08) 0px,
                rgba(255,255,255,0.08) 2px,
                transparent 2px,
                transparent 120px
              ),
              repeating-linear-gradient(
                -40deg,
                rgba(0,0,0,0.12) 0px,
                rgba(0,0,0,0.12) 3px,
                transparent 3px,
                transparent 160px
              )`,
            }}
          />

          {/* INNER HOARDING CONTENT */}
          <div className="relative z-20 p-6 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[380px] sm:min-h-[460px]">
            
            {/* TOP BAR: BRAND LOGO & OFFICIAL RECOGNITION */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center">
                  <span className="font-black text-[#0C59D4] text-sm">DLC</span>
                </div>
                <div>
                  <h3 className="text-white font-black text-sm sm:text-base tracking-wider uppercase leading-none">
                    Digital Labour Chowk
                  </h3>
                  <span className="text-blue-200 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                    Bharat Ka Apna Rozgar Manch
                  </span>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>0% Commission Guaranteed</span>
              </div>
            </div>

            {/* BILLBOARD CORE HEADLINE (Clean, Authoritative, White Sans-Serif) */}
            <div className="my-8 sm:my-10 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
                Aapka Rozgar, Aapka Adhikar, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300">
                  Bane Ek Vishwasniya Hakikat.
                </span>
              </h2>

              <p className="mt-4 text-blue-100 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-sm">
                Bina kisi thekedari katauti ke 100% daily earnings. 3.5 Lakh+ shramik saathiyon
                ka bharosa. Aaj hi judiye aur apna shramik bhavishya surakshit kijiye.
              </p>
            </div>

            {/* ACTION & QR CODE INTEGRATION */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/20">
              
              {/* Play Store CTA Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-[0_10px_25px_rgba(251,191,36,0.4)] transition-all hover:scale-105 active:scale-95 group"
                >
                  <Download className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-y-0.5" />
                  <span>Download DLC Worker App</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="tel:18002020991"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Helpline: 1800-202-0991</span>
                </a>
              </div>

              {/* Billboard Metadata Footer (from reference image style) */}
              <div className="text-right text-blue-200 text-xs sm:text-sm font-mono flex flex-col sm:items-end">
                <span className="font-bold text-white tracking-wider">digitallabourchowk.com</span>
                <span className="text-[11px] text-blue-200">Google Play Store • Verified App</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
