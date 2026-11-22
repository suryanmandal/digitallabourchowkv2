"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  ChevronRight,
  Sparkles,
  QrCode,
  Star,
  CheckCircle2,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

interface TradeCard {
  id: string;
  rank: number;
  title: string;
  subtitle: string;
  hindi: string;
  watermark: string;
  gif: string;
  category: string;
  dailyWage: string;
  openJobs: string;
}

const TRADES_DATA: TradeCard[] = [
  {
    id: "mason",
    rank: 1,
    title: "Masons /",
    subtitle: "Rajmistri",
    hindi: "(राजमिस्त्री)",
    watermark: "Masons",
    gif: "/workers-gif/mason.gif",
    category: "Civil Crafts",
    dailyWage: "₹850 - ₹1,200 / day",
    openJobs: "2,940+ Jobs",
  },
  {
    id: "labour",
    rank: 2,
    title: "General Labour /",
    subtitle: "Helpers",
    hindi: "(हेल्पर / बेलदार)",
    watermark: "Labour",
    gif: "/workers-gif/labour.gif",
    category: "General Civil",
    dailyWage: "₹550 - ₹750 / day",
    openJobs: "4,820+ Jobs",
  },
  {
    id: "painter",
    rank: 3,
    title: "Painters /",
    subtitle: "Rangsaaz",
    hindi: "(रंगसाज़ / पेंटर)",
    watermark: "Painters",
    gif: "/workers-gif/painter.gif",
    category: "Finishing & Coating",
    dailyWage: "₹750 - ₹1,100 / day",
    openJobs: "1,680+ Jobs",
  },
  {
    id: "plumber",
    rank: 4,
    title: "Plumbers /",
    subtitle: "Nalsaaz",
    hindi: "(नलसाज़ / प्लंबर)",
    watermark: "Plumbers",
    gif: "/workers-gif/plumber.gif",
    category: "MEP Services",
    dailyWage: "₹800 - ₹1,250 / day",
    openJobs: "1,450+ Jobs",
  },
  {
    id: "carpenter",
    rank: 5,
    title: "Carpenters /",
    subtitle: "Badhai",
    hindi: "(शटरिंग / बढ़ई)",
    watermark: "Carpenters",
    gif: "/workers-gif/carpenter.gif",
    category: "Formwork & Joinery",
    dailyWage: "₹850 - ₹1,300 / day",
    openJobs: "2,130+ Jobs",
  },
  {
    id: "electrician",
    rank: 6,
    title: "Electricians /",
    subtitle: "Bijli Mistri",
    hindi: "(बिजली मिस्त्री)",
    watermark: "Electricians",
    gif: "/workers-gif/electrician.gif",
    category: "MEP Services",
    dailyWage: "₹850 - ₹1,350 / day",
    openJobs: "2,560+ Jobs",
  },
  {
    id: "foreman",
    rank: 7,
    title: "Site Foreman /",
    subtitle: "In-Charge",
    hindi: "(साइट फोरमैन)",
    watermark: "Foreman",
    gif: "/workers-gif/foreman.gif",
    category: "Site Leadership",
    dailyWage: "₹1,200 - ₹1,800 / day",
    openJobs: "890+ Jobs",
  },
  {
    id: "supervisor",
    rank: 8,
    title: "Site Supervisor /",
    subtitle: "Nirman Ops",
    hindi: "(निर्माण सुपरवाइजर)",
    watermark: "Supervisor",
    gif: "/workers-gif/supervisor.gif",
    category: "Engineering Ops",
    dailyWage: "₹1,400 - ₹2,200 / day",
    openJobs: "740+ Jobs",
  },
  {
    id: "engineer",
    rank: 9,
    title: "Civil Engineers /",
    subtitle: "Site Planners",
    hindi: "(सिविल इंजीनियर)",
    watermark: "Engineer",
    gif: "/workers-gif/engineer.gif",
    category: "Engineering Ops",
    dailyWage: "₹1,800 - ₹3,000 / day",
    openJobs: "620+ Jobs",
  },
  {
    id: "welder",
    rank: 10,
    title: "Arc & Gas /",
    subtitle: "Welders",
    hindi: "(वेल्डर / फैब्रिकेटर)",
    watermark: "Welders",
    gif: "/workers-gif/welder.gif",
    category: "Fabrication",
    dailyWage: "₹900 - ₹1,500 / day",
    openJobs: "1,120+ Jobs",
  },
  {
    id: "iti",
    rank: 11,
    title: "ITI Technicians /",
    subtitle: "Machinists",
    hindi: "(आईटीआई तकनीशियन)",
    watermark: "Tech",
    gif: "/workers-gif/iti.gif",
    category: "Industrial Tech",
    dailyWage: "₹950 - ₹1,600 / day",
    openJobs: "980+ Jobs",
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
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>11 Core Crafts & Leadership Roles • Direct Play Store Hiring</span>
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
            3x4 UNIFIED GRID: 11 TRADES WITH PROTRUDING ANIMATED GIFS + 1 DOWNLOAD CTA
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20 items-stretch pt-6 sm:pt-10">
          
          {/* RENDER 11 WORKER TRADE CARDS */}
          {TRADES_DATA.map((trade) => (
            <a
              key={trade.id}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-end pt-14 sm:pt-16 cursor-pointer"
            >
              {/* OFF-WHITE CARD BOX CONTAINER */}
              <div className="relative w-full bg-[#FBFBFB] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[250px] sm:min-h-[270px] flex flex-col justify-between overflow-visible">
                
                {/* WATERMARK BACKGROUND OUTLINE TEXT */}
                <div
                  aria-hidden="true"
                  className="absolute right-4 bottom-6 text-4xl sm:text-5xl font-black stroke-watermark pointer-events-none select-none z-0"
                >
                  {trade.watermark}
                </div>

                {/* LEFT TEXT COLUMN: RANK, TITLE & SUBTITLE */}
                <div className="relative z-20 max-w-[46%] sm:max-w-[48%] flex flex-col justify-start">
                  <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1.5">
                    TRENDING AT #{trade.rank}
                  </span>

                  <h3 className="text-xl sm:text-[26px] font-black text-slate-950 leading-[1.1] group-hover:text-[#0C59D4] transition-colors tracking-tight">
                    {trade.title} <br />
                    <span>{trade.subtitle}</span>
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    {trade.hindi}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{trade.dailyWage}</span>
                  </div>
                </div>

                {/* PROTRUDING ANIMATED GIF (Breaks out of the top of the off-white card) */}
                <div className="absolute -right-2 sm:right-0 bottom-2.5 sm:bottom-3 w-[260px] sm:w-[310px] h-[230px] sm:h-[270px] pointer-events-none overflow-visible z-10 flex items-end justify-end">
                  <Image
                    src={trade.gif}
                    alt={`${trade.title} ${trade.subtitle}`}
                    fill
                    className="object-contain object-bottom mix-blend-multiply transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2"
                    unoptimized
                    priority={trade.rank <= 3}
                  />
                </div>

                {/* BOTTOM ACTION LINK */}
                <div className="relative z-20 pt-4 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors border-t border-slate-100/80 mt-4">
                  <span className="flex items-center gap-1">
                    <span>View all</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                  <span className="text-[10px] font-semibold text-slate-400">
                    {trade.openJobs}
                  </span>
                </div>

                {/* SOLID BLACK BOTTOM BAR (Matching reference image design) */}
                <div className="absolute -bottom-3 inset-x-0 h-3.5 bg-black rounded-b-3xl" />
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
            className="group relative flex flex-col justify-end pt-14 sm:pt-16 cursor-pointer"
          >
            {/* OFF-WHITE CARD BOX CONTAINER */}
            <div className="relative w-full bg-[#FBFBFB] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[250px] sm:min-h-[270px] flex flex-col justify-between overflow-visible">
              
              {/* WATERMARK BACKGROUND OUTLINE TEXT */}
              <div
                aria-hidden="true"
                className="absolute right-4 bottom-6 text-4xl sm:text-5xl font-black stroke-watermark pointer-events-none select-none z-0"
              >
                DLC App
              </div>

              {/* LEFT TEXT COLUMN */}
              <div className="relative z-20 max-w-[55%] flex flex-col justify-start">
                <span className="block text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-1.5">
                  #12 • DOWNLOAD APP
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-[1.15] group-hover:text-[#0C59D4] transition-colors">
                  Download / <br />
                  <span>DLC App</span>
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  (गूगल प्ले स्टोर)
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-900 text-[11px] font-bold w-fit">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>4.8 (35K+ Reviews)</span>
                </div>
              </div>

              {/* RIGHT GRAPHIC: PROTRUDING SMARTPHONE MOCKUP & QR CODE */}
              <div className="absolute right-3 sm:right-6 bottom-5 w-40 sm:w-44 h-48 sm:h-56 pointer-events-none overflow-visible z-10 flex flex-col items-center justify-end pb-2">
                <div className="w-28 sm:w-32 p-3 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                  <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-slate-950 mb-1" />
                  <span className="text-[9px] font-black tracking-widest text-[#0C59D4] uppercase text-center block">
                    SCAN TO INSTALL
                  </span>
                </div>
              </div>

              {/* BOTTOM ACTION LINK */}
              <div className="relative z-20 pt-4 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors border-t border-slate-100/80 mt-4">
                <span className="flex items-center gap-1">
                  <span>Open in Play Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                <span className="text-[10px] font-bold text-emerald-600">
                  100% Free
                </span>
              </div>

              {/* SOLID BLACK BOTTOM BAR */}
              <div className="absolute -bottom-3 inset-x-0 h-3.5 bg-black rounded-b-3xl" />
            </div>
          </a>

        </div>

        {/* BOTTOM HELPLINE STRIP */}
        <div className="mt-14 p-4 sm:p-5 rounded-2xl bg-[#FBFBFB] border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
