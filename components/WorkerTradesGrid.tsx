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
    id: "labour",
    title: "General Labour /",
    subtitle: "Helpers",
    category: "Category Name",
    gif: "/workers-gif/labour.gif",
  },
  {
    id: "mason",
    title: "Masons /",
    subtitle: "Rajmistri",
    category: "Category Name",
    gif: "/workers-gif/mason.gif",
  },
  {
    id: "carpenter",
    title: "Carpenters /",
    subtitle: "Badhai",
    category: "Category Name",
    gif: "/workers-gif/carpenter.gif",
  },
  {
    id: "painter",
    title: "Painters /",
    subtitle: "Rangsaaz",
    category: "Category Name",
    gif: "/workers-gif/painter.gif",
  },
  {
    id: "electrician",
    title: "Electricians /",
    subtitle: "Bijli Mistri",
    category: "Category Name",
    gif: "/workers-gif/electrician.gif",
  },
  {
    id: "plumber",
    title: "Plumbers /",
    subtitle: "Nalsaaz",
    category: "Category Name",
    gif: "/workers-gif/plumber.gif",
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
];

export default function WorkerTradesGrid() {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc";

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>11 Core Crafts & Leadership Roles • Direct App Hiring</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Sabhi Shramik Shreniyan, <br />
            <span className="text-[#0C59D4]">Ek Hi Platform Par Uplabdh</span>
          </h2>
        </div>

        {/* =========================================================================
            3-COLUMN CALIBRATED GRID (DESKTOP & MOBILE BALANCED)
            - Section background: pure white
            - Card container: off-white #F8F8F6 rounded-t-[28px] sm:rounded-t-[32px]
            - Left Column (44%): Faint category tag + 2-line bold black title (no awkward line wraps)
            - Right Column (56%): Transparent container with negative Y-protrusion
            - Protrusion: top: calc(-36%), background: transparent
            - Bottom black bar: h-4 sm:h-5 bg-black rounded-b-[16px] sm:rounded-b-[20px]
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-7 gap-y-12 sm:gap-y-14 items-stretch pt-6 sm:pt-8">
          
          {/* RENDER 11 WORKER TRADE CARDS */}
          {TRADES_DATA.map((trade, idx) => (
            <a
              key={trade.id}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-end pt-12 sm:pt-14 cursor-pointer"
            >
              {/* UNIFIED OFF-WHITE CARD CONTAINER */}
              <div className="relative w-full bg-[#F8F8F6] rounded-t-[28px] sm:rounded-t-[32px] flex items-stretch shadow-[0_2px_12px_rgba(0,0,0,0.03)] group-hover:shadow-lg transition-all duration-300">
                
                {/* LEFT COLUMN (46%): CLEAN TITLE & FAINT CATEGORY TAG */}
                <div className="w-[46%] pt-7 pb-6 sm:pt-8 sm:pb-7 pl-5 sm:pl-6 pr-1 flex flex-col justify-center min-h-[160px] sm:min-h-[170px] relative z-10">
                  <span className="block text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wide mb-1.5 sm:mb-2 select-none">
                    {trade.category}
                  </span>

                  <h3 className="text-[16px] sm:text-[17px] lg:text-[18.5px] xl:text-[19.5px] font-black text-black leading-[1.12] tracking-tight group-hover:text-[#0C59D4] transition-colors">
                    <span className="block whitespace-nowrap">{trade.title}</span>
                    <span className="block whitespace-nowrap">{trade.subtitle}</span>
                  </h3>
                </div>

                {/* RIGHT COLUMN (54%): EXACT FRAME CONTAINER WITH BALANCED PROTRUSION */}
                <div className="w-[54%] relative">
                  <div
                    style={{
                      top: "calc(-36%)",
                      bottom: "0px",
                    }}
                    className="absolute inset-x-0 bg-transparent flex items-end justify-center pointer-events-none"
                  >
                    <div
                      className={`relative w-full h-full ${
                        trade.id === "iti"
                          ? "-translate-x-3 sm:-translate-x-2"
                          : trade.id === "foreman"
                          ? "-translate-x-2 sm:-translate-x-2.5"
                          : ""
                      }`}
                    >
                      <Image
                        src={trade.gif}
                        alt={`${trade.title} ${trade.subtitle}`}
                        fill
                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                          trade.id === "iti"
                            ? "object-[68%_bottom]"
                            : trade.id === "foreman"
                            ? "object-[65%_bottom]"
                            : "object-bottom"
                        }`}
                        unoptimized
                        priority={idx < 3}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* SOLID BLACK BOTTOM BAR (Grounded at the bottom of the card) */}
              <div className="w-full h-4 sm:h-5 bg-black rounded-b-[16px] sm:rounded-b-[20px]" />
            </a>
          ))}

          {/* =========================================================================
              CARD 12: DOWNLOAD DLC WORKER APP CTA (MATCHING CALIBRATED SPECIFICATIONS)
             ========================================================================= */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-end pt-12 sm:pt-14 cursor-pointer"
          >
            {/* UNIFIED OFF-WHITE CARD CONTAINER */}
            <div className="relative w-full bg-[#F8F8F6] rounded-t-[28px] sm:rounded-t-[32px] flex items-stretch shadow-[0_2px_12px_rgba(0,0,0,0.03)] group-hover:shadow-lg transition-all duration-300">
              
              {/* LEFT COLUMN */}
              <div className="w-[46%] pt-7 pb-6 sm:pt-8 sm:pb-7 pl-5 sm:pl-6 pr-1 flex flex-col justify-center min-h-[160px] sm:min-h-[170px] relative z-10">
                <span className="block text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wide mb-1.5 sm:mb-2 select-none">
                  Google Play Store
                </span>

                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] xl:text-[20px] font-black text-black leading-[1.12] tracking-tight group-hover:text-[#0C59D4] transition-colors">
                  <span className="block">Download /</span>
                  <span className="block">DLC App</span>
                </h3>
              </div>

              {/* RIGHT COLUMN: PROTRUDING QR CODE BADGE */}
              <div className="w-[54%] relative">
                <div
                  style={{
                    top: "calc(-36%)",
                    bottom: "0px",
                  }}
                  className="absolute inset-x-0 bg-transparent flex items-end justify-center pb-2 pointer-events-none"
                >
                  <div className="w-24 sm:w-28 p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                    <QrCode className="w-12 h-12 sm:w-14 sm:h-14 text-slate-950 mb-1" />
                    <span className="text-[7px] sm:text-[8px] font-black tracking-widest text-[#0C59D4] uppercase text-center block">
                      SCAN TO INSTALL
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* SOLID BLACK BOTTOM BAR */}
            <div className="w-full h-4 sm:h-5 bg-black rounded-b-[16px] sm:rounded-b-[20px]" />
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
