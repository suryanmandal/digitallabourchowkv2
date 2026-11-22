"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, QrCode, Star, ArrowUpRight } from "lucide-react";

interface TradeCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  watermark: string;
  gif: string;
}

const TRADES_DATA: TradeCard[] = [
  {
    id: "mason",
    title: "Masons /",
    subtitle: "Rajmistri",
    category: "Category Name",
    watermark: "Masons",
    gif: "/workers-gif/mason.gif",
  },
  {
    id: "labour",
    title: "General Labour /",
    subtitle: "Helpers",
    category: "Category Name",
    watermark: "Labour",
    gif: "/workers-gif/labour.gif",
  },
  {
    id: "painter",
    title: "Painters /",
    subtitle: "Rangsaaz",
    category: "Category Name",
    watermark: "Painters",
    gif: "/workers-gif/painter.gif",
  },
  {
    id: "plumber",
    title: "Plumbers /",
    subtitle: "Nalsaaz",
    category: "Category Name",
    watermark: "Plumbers",
    gif: "/workers-gif/plumber.gif",
  },
  {
    id: "carpenter",
    title: "Carpenters /",
    subtitle: "Badhai",
    category: "Category Name",
    watermark: "Carpenters",
    gif: "/workers-gif/carpenter.gif",
  },
  {
    id: "electrician",
    title: "Electricians /",
    subtitle: "Bijli Mistri",
    category: "Category Name",
    watermark: "Electricians",
    gif: "/workers-gif/electrician.gif",
  },
  {
    id: "foreman",
    title: "Foreman /",
    subtitle: "In-Charge",
    category: "Category Name",
    watermark: "Foreman",
    gif: "/workers-gif/foreman.gif",
  },
  {
    id: "supervisor",
    title: "Supervisor /",
    subtitle: "Nirman Ops",
    category: "Category Name",
    watermark: "Supervisor",
    gif: "/workers-gif/supervisor.gif",
  },
  {
    id: "engineer",
    title: "Engineers /",
    subtitle: "Site Planners",
    category: "Category Name",
    watermark: "Engineers",
    gif: "/workers-gif/engineer.gif",
  },
  {
    id: "welder",
    title: "Welders /",
    subtitle: "Fabrication",
    category: "Category Name",
    watermark: "Welders",
    gif: "/workers-gif/welder.gif",
  },
  {
    id: "iti",
    title: "ITI Tech /",
    subtitle: "Machinists",
    category: "Category Name",
    watermark: "ITI / Tech",
    gif: "/workers-gif/iti.gif",
  },
];

export default function WorkerTradesGrid() {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc";

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>11 Core Crafts & Leadership Roles • Direct App Hiring</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Sabhi Shramik Shreniyan, <br />
            <span className="text-[#0C59D4]">Ek Hi Platform Par Uplabdh</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Kisi alag page par bhatakne ki zaroorat nahi. Apne hunar ke anusaar card chuniye
            aur Google Play Store se DLC Worker App download karke turant kaam paayein.
          </p>
        </div>

        {/* =========================================================================
            3x4 UNIFIED GRID: EXACT DESIGN MATCHING FIGMA REFERENCE
            - Section background: pure white
            - Card background: off-white
            - Black div along the bottom
            - Character fits horizontally (does not cross off-white div)
            - Character protrudes vertically above the top of the off-white div
            - Character touches the black div at the bottom
            - No extra tags, no hindi words, no wages, no view all
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 sm:gap-y-24 items-stretch pt-8 sm:pt-12">
          
          {/* RENDER 11 WORKER TRADE CARDS */}
          {TRADES_DATA.map((trade, idx) => (
            <a
              key={trade.id}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-end pt-16 sm:pt-20 cursor-pointer"
            >
              {/* OFF-WHITE CARD BOX CONTAINER */}
              <div className="relative w-full bg-[#F4F4F6] sm:bg-[#F6F6F8] rounded-[28px] sm:rounded-[32px] overflow-visible shadow-[0_2px_14px_rgba(0,0,0,0.03)] group-hover:shadow-xl transition-all duration-300">
                
                {/* WATERMARK BACKGROUND OUTLINE TEXT */}
                <div
                  aria-hidden="true"
                  className="absolute right-4 bottom-6 text-4xl sm:text-5xl font-black stroke-watermark pointer-events-none select-none z-0"
                >
                  {trade.watermark}
                </div>

                {/* LEFT TEXT COLUMN: CLEAN MINIMAL TITLE & FAINT CATEGORY TAG */}
                <div className="relative z-20 max-w-[48%] sm:max-w-[50%] p-7 sm:p-9 min-h-[210px] sm:min-h-[230px] flex flex-col justify-center">
                  <span className="block text-[10px] sm:text-[11px] font-medium text-slate-300 uppercase tracking-widest mb-2 select-none">
                    {trade.category}
                  </span>

                  <h3 className="text-2xl sm:text-[32px] font-black text-slate-950 leading-[1.08] tracking-tight group-hover:text-[#0C59D4] transition-colors">
                    {trade.title} <br />
                    <span>{trade.subtitle}</span>
                  </h3>
                </div>

                {/* PROTRUDING ANIMATED GIF (Matches Figma Frame 8: 313 x 279)
                    - Does not cross off-white div horizontally (right-0, width: 52-55%)
                    - Crosses vertically (extends 50-60px above the off-white card)
                    - Touches the black div at the bottom (bottom: 14px / bottom-3.5)
                    - Transparent background removes white GIF backing
                */}
                <div className="absolute right-0 bottom-3.5 sm:bottom-4 w-[52%] sm:w-[54%] h-[270px] sm:h-[290px] pointer-events-none overflow-visible z-10 flex items-end justify-end">
                  <div className="relative w-full h-full">
                    <Image
                      src={trade.gif}
                      alt={`${trade.title} ${trade.subtitle}`}
                      fill
                      className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                      priority={idx < 3}
                    />
                  </div>
                </div>

                {/* SOLID BLACK BOTTOM DIV (Touching bottom of character) */}
                <div className="w-full h-3.5 sm:h-4 bg-slate-950 rounded-b-[28px] sm:rounded-b-[32px]" />
              </div>
            </a>
          ))}

          {/* =========================================================================
              CARD 12: DOWNLOAD DLC WORKER APP CTA (IDENTICAL PROPORTIONS & DESIGN)
             ========================================================================= */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-end pt-16 sm:pt-20 cursor-pointer"
          >
            {/* OFF-WHITE CARD BOX CONTAINER */}
            <div className="relative w-full bg-[#F4F4F6] sm:bg-[#F6F6F8] rounded-[28px] sm:rounded-[32px] overflow-visible shadow-[0_2px_14px_rgba(0,0,0,0.03)] group-hover:shadow-xl transition-all duration-300">
              
              {/* WATERMARK BACKGROUND OUTLINE TEXT */}
              <div
                aria-hidden="true"
                className="absolute right-4 bottom-6 text-4xl sm:text-5xl font-black stroke-watermark pointer-events-none select-none z-0"
              >
                DLC App
              </div>

              {/* LEFT TEXT COLUMN */}
              <div className="relative z-20 max-w-[48%] sm:max-w-[50%] p-7 sm:p-9 min-h-[210px] sm:min-h-[230px] flex flex-col justify-center">
                <span className="block text-[10px] sm:text-[11px] font-medium text-slate-300 uppercase tracking-widest mb-2 select-none">
                  Google Play Store
                </span>

                <h3 className="text-2xl sm:text-[32px] font-black text-slate-950 leading-[1.08] tracking-tight group-hover:text-[#0C59D4] transition-colors">
                  Download / <br />
                  <span>DLC App</span>
                </h3>
              </div>

              {/* RIGHT GRAPHIC: PROTRUDING QR CODE BADGE TOUCHING BLACK DIV */}
              <div className="absolute right-4 sm:right-6 bottom-3.5 sm:bottom-4 w-[48%] sm:w-[50%] h-[270px] sm:h-[290px] pointer-events-none overflow-visible z-10 flex items-end justify-center pb-2">
                <div className="w-32 sm:w-36 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xl flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                  <QrCode className="w-20 h-20 sm:w-24 sm:h-24 text-slate-950 mb-1.5" />
                  <span className="text-[9px] font-black tracking-widest text-[#0C59D4] uppercase text-center block">
                    SCAN TO INSTALL
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* SOLID BLACK BOTTOM DIV */}
              <div className="w-full h-3.5 sm:h-4 bg-slate-950 rounded-b-[28px] sm:rounded-b-[32px]" />
            </div>
          </a>

        </div>

        {/* BOTTOM HELPLINE STRIP */}
        <div className="mt-16 sm:mt-20 p-4 sm:p-5 rounded-2xl bg-[#F8F9FA] border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <span className="text-lg">👷</span>
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
