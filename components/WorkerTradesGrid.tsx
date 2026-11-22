"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, QrCode, Star, HardHat } from "lucide-react";

interface TradeCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  gif: string;
}

const TRADES_DATA: TradeCard[] = [
  {
    id: "mason",
    title: "Masons /",
    subtitle: "Rajmistri",
    category: "Category Name",
    gif: "/workers-gif/mason.gif",
  },
  {
    id: "labour",
    title: "General Labour /",
    subtitle: "Helpers",
    category: "Category Name",
    gif: "/workers-gif/labour.gif",
  },
  {
    id: "painter",
    title: "Painters /",
    subtitle: "Rangsaaz",
    category: "Category Name",
    gif: "/workers-gif/painter.gif",
  },
  {
    id: "plumber",
    title: "Plumbers /",
    subtitle: "Nalsaaz",
    category: "Category Name",
    gif: "/workers-gif/plumber.gif",
  },
  {
    id: "carpenter",
    title: "Carpenters /",
    subtitle: "Badhai",
    category: "Category Name",
    gif: "/workers-gif/carpenter.gif",
  },
  {
    id: "electrician",
    title: "Electricians /",
    subtitle: "Bijli Mistri",
    category: "Category Name",
    gif: "/workers-gif/electrician.gif",
  },
  {
    id: "foreman",
    title: "Foreman /",
    subtitle: "In-Charge",
    category: "Category Name",
    gif: "/workers-gif/foreman.gif",
  },
  {
    id: "supervisor",
    title: "Supervisor /",
    subtitle: "Nirman Ops",
    category: "Category Name",
    gif: "/workers-gif/supervisor.gif",
  },
  {
    id: "engineer",
    title: "Engineers /",
    subtitle: "Site Planners",
    category: "Category Name",
    gif: "/workers-gif/engineer.gif",
  },
  {
    id: "welder",
    title: "Welders /",
    subtitle: "Fabrication",
    category: "Category Name",
    gif: "/workers-gif/welder.gif",
  },
  {
    id: "iti",
    title: "ITI Tech /",
    subtitle: "Machinists",
    category: "Category Name",
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
            3x4 UNIFIED GRID: EXACT "CARD 2" SPECIFICATION
            - Section background: pure white
            - Card container: off-white #F8F8F6 rounded-t-[36px] sm:rounded-t-[48px]
            - Left Column (35%): Faint category tag + 2-line bold black title
            - Right Column (65%): Transparent Frame 8 container with negative Y-protrusion
            - Protrusion: top: calc(-46.25%), background: transparent
            - Bottom black bar: h-5 sm:h-6 bg-black rounded-b-[20px] sm:rounded-b-[24px]
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 sm:gap-y-28 items-stretch pt-12 sm:pt-16">
          
          {/* RENDER 11 WORKER TRADE CARDS */}
          {TRADES_DATA.map((trade, idx) => (
            <a
              key={trade.id}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-end pt-16 sm:pt-24 cursor-pointer"
            >
              {/* UNIFIED OFF-WHITE CARD CONTAINER */}
              <div className="relative w-full bg-[#F8F8F6] rounded-t-[32px] sm:rounded-t-[40px] flex items-stretch shadow-[0_2px_14px_rgba(0,0,0,0.03)] group-hover:shadow-xl transition-all duration-300">
                
                {/* LEFT COLUMN (35%): CLEAN TITLE & FAINT CATEGORY TAG */}
                <div className="w-[38%] sm:w-[35%] pt-10 pb-8 sm:pt-14 sm:pb-12 pl-5 sm:pl-7 lg:pl-8 pr-2 flex flex-col justify-center min-h-[190px] sm:min-h-[220px] relative z-10">
                  <span className="block text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wide mb-2 sm:mb-3 select-none">
                    {trade.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-[27px] font-black text-black leading-[1.08] tracking-tight group-hover:text-[#0C59D4] transition-colors">
                    {trade.title} <br />
                    <span>{trade.subtitle}</span>
                  </h3>
                </div>

                {/* RIGHT COLUMN (65%): EXACT CARD 2 FRAME 8 CONTAINER WITH PROTRUSION */}
                <div className="w-[62%] sm:w-[65%] relative">
                  <div
                    style={{
                      top: "calc(-46.25%)",
                      bottom: "0px",
                    }}
                    className="absolute inset-x-0 bg-transparent flex items-end justify-center pointer-events-none"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={trade.gif}
                        alt={`${trade.title} ${trade.subtitle}`}
                        fill
                        className="object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                        priority={idx < 3}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* SOLID BLACK BOTTOM BAR (Grounded at the bottom of the card) */}
              <div className="w-full h-5 sm:h-6 bg-black rounded-b-[20px] sm:rounded-b-[24px]" />
            </a>
          ))}

          {/* =========================================================================
              CARD 12: DOWNLOAD DLC WORKER APP CTA (MATCHING CARD 2 SPECIFICATIONS)
             ========================================================================= */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-end pt-16 sm:pt-24 cursor-pointer"
          >
            {/* UNIFIED OFF-WHITE CARD CONTAINER */}
            <div className="relative w-full bg-[#F8F8F6] rounded-t-[32px] sm:rounded-t-[40px] flex items-stretch shadow-[0_2px_14px_rgba(0,0,0,0.03)] group-hover:shadow-xl transition-all duration-300">
              
              {/* LEFT COLUMN */}
              <div className="w-[42%] sm:w-[40%] pt-10 pb-8 sm:pt-14 sm:pb-12 pl-5 sm:pl-7 lg:pl-8 pr-2 flex flex-col justify-center min-h-[190px] sm:min-h-[220px] relative z-10">
                <span className="block text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wide mb-2 sm:mb-3 select-none">
                  Google Play Store
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-[27px] font-black text-black leading-[1.08] tracking-tight group-hover:text-[#0C59D4] transition-colors">
                  Download / <br />
                  <span>DLC App</span>
                </h3>
              </div>

              {/* RIGHT COLUMN: PROTRUDING QR CODE BADGE */}
              <div className="w-[58%] sm:w-[60%] relative">
                <div
                  style={{
                    top: "calc(-46.25%)",
                    bottom: "0px",
                  }}
                  className="absolute inset-x-0 bg-transparent flex items-end justify-center pb-2 pointer-events-none"
                >
                  <div className="w-28 sm:w-36 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xl flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                    <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-slate-950 mb-1" />
                    <span className="text-[8px] sm:text-[9px] font-black tracking-widest text-[#0C59D4] uppercase text-center block">
                      SCAN TO INSTALL
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* SOLID BLACK BOTTOM BAR */}
            <div className="w-full h-5 sm:h-6 bg-black rounded-b-[20px] sm:rounded-b-[24px]" />
          </a>

        </div>

        {/* BOTTOM HELPLINE STRIP */}
        <div className="mt-16 sm:mt-24 p-4 sm:p-5 rounded-2xl bg-[#F8F9FA] border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
