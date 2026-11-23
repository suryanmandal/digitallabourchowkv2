"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Eye,
  BadgeCheck,
  Download,
  Share2,
  TrendingUp,
} from "lucide-react";

interface ReelItem {
  id: string;
  name: string;
  trade: string;
  location: string;
  earnings: string;
  views: string;
  likes: string;
  quote: string;
  thumbnail: string;
  duration: string;
  tag: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: "reel-1",
    name: "Ramesh Sharma",
    trade: "Arc Welder",
    location: "Delhi Metro Phase 4",
    earnings: "₹38,500/month",
    views: "84.2K",
    likes: "6.9K",
    quote: "Pehle chowk par 3 din khade rehte the, ab roz subah mobile alert aate hi kaam pakka ho jata hai.",
    thumbnail: "/images/workers/welder.jpg",
    duration: "0:45",
    tag: "Zero Commission",
  },
  {
    id: "reel-2",
    name: "Mohan Lal",
    trade: "Master Mason",
    location: "Patna AIIMS Expansion",
    earnings: "₹42,000/month",
    views: "128K",
    likes: "11.4K",
    quote: "Bina kisi jamadar ya thekedar ke katauti ke, 100% majdoori seedhe mere bank khate me aati hai.",
    thumbnail: "/images/workers/mason.jpg",
    duration: "0:58",
    tag: "DBT Payout",
  },
  {
    id: "reel-3",
    name: "Mohammed Arif",
    trade: "Licensed Electrician",
    location: "Noida STPI Sector 62",
    earnings: "₹45,200/month",
    views: "92.5K",
    likes: "8.1K",
    quote: "Noida Hub par digital attendance se roz ki hazri lagti hai aur haftawaari hisab bilkul saaf rehta hai.",
    thumbnail: "/images/workers/electrician.jpg",
    duration: "0:38",
    tag: "Digital Attendance",
  },
  {
    id: "reel-4",
    name: "Sunil Kumar",
    trade: "Shuttering Carpenter",
    location: "Gurgaon CyberCity Tower",
    earnings: "₹39,800/month",
    views: "76.4K",
    likes: "5.7K",
    quote: "Site par chot lagne par DLC ke ₹5 Lakhs insurance ne poora ilaj karwaya bina meri jeb se ek rupaye kharch huye.",
    thumbnail: "/images/workers/carpenter.jpg",
    duration: "0:52",
    tag: "₹5L Insurance",
  },
  {
    id: "reel-5",
    name: "Rajesh Paswan",
    trade: "Civil Site Foreman",
    location: "Mumbai Coastal Road Project",
    earnings: "₹56,000/month",
    views: "142K",
    likes: "14.2K",
    quote: "Apni 35 logo ki team ko manage karna ab ekdum aasan hai. Sabhi ka payment samay par hota hai.",
    thumbnail: "/images/workers/foreman.jpg",
    duration: "1:05",
    tag: "Leader Story",
  },
  {
    id: "reel-6",
    name: "Bikash Yadav",
    trade: "Professional Painter",
    location: "Lucknow High Court Enclave",
    earnings: "₹36,400/month",
    views: "65.8K",
    likes: "4.9K",
    quote: "Quality kaam ki izzat aur rate dono badh gaya jab se DLC ka Digital Verified Card mila hai.",
    thumbnail: "/images/workers/painter.jpg",
    duration: "0:42",
    tag: "Skill Verified",
  },
];

export default function WorkerReelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc";

  // Exactly 3 reels visible on desktop, max index is 6 - 3 = 3
  const maxIndex = Math.max(0, REELS_DATA.length - 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="w-full bg-white text-slate-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 mb-16 sm:mb-24 lg:mb-28 relative select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* =========================================================================
            HEADER & CAROUSEL NAVIGATION CONTROLS (WHITE BACKGROUND THEME)
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14 max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Real Stories • Real Earnings</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Shramik Saathiyon Ki Kahani, <br />
              <span className="text-[#0C59D4]">Unhi Ki Zubani</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous reel"
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed text-slate-800 border border-slate-200 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next reel"
              className="p-3 rounded-full bg-[#0C59D4] hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed text-white shadow-md shadow-blue-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP: EXACTLY 3 REELS AT A TIME CENTERED IN THE MIDDLE (WINDOW = 960px)
           ========================================================================= */}
        <div className="hidden md:block relative max-w-[960px] mx-auto overflow-hidden py-3">
          <div
            className="flex items-center gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (304 + 24)}px)`,
            }}
          >
            {REELS_DATA.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveReel(reel)}
                className="group relative flex-shrink-0 w-[304px] h-[510px] rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0C59D4]"
              >
                {/* Background Thumbnail Image */}
                <Image
                  src={reel.thumbnail}
                  alt={`${reel.name} - ${reel.trade}`}
                  fill
                  className="object-cover object-top brightness-90 transition-transform duration-500 group-hover:scale-105"
                  sizes="304px"
                />

                {/* Multi-layer Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80" />

                {/* TOP HEADER: DURATION & FEATURE TAG */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-black border border-white/10">
                    {reel.tag}
                  </span>

                  <div className="flex items-center gap-2 text-white/90 text-xs font-semibold bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                    <Eye className="w-3.5 h-3.5 text-blue-300" />
                    <span>{reel.views}</span>
                  </div>
                </div>

                {/* CENTER: ANIMATED PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="relative w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                    <span className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping opacity-60" />
                  </div>
                </div>

                {/* BOTTOM CONTENT: WORKER PROFILE, EARNINGS & TESTIMONIAL QUOTE */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                  {/* Earning Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black w-fit mb-2.5 backdrop-blur-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{reel.earnings}</span>
                  </div>

                  {/* Worker Identity */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-white leading-tight">
                      {reel.name}
                    </h3>
                    <BadgeCheck className="w-4 h-4 text-sky-400" />
                  </div>
                  <p className="text-xs text-blue-200 font-medium">
                    {reel.trade} • {reel.location}
                  </p>

                  {/* Quote */}
                  <p className="mt-2 text-xs text-slate-300 leading-snug line-clamp-2 italic">
                    &ldquo;{reel.quote}&rdquo;
                  </p>

                  {/* Bottom Stats */}
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80">
                    <span className="flex items-center gap-1 text-rose-400">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>{reel.likes}</span>
                    </span>
                    <span className="font-bold text-amber-300">Tap to Watch Reel →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP PAGINATION DOTS */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#0C59D4]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* =========================================================================
            MOBILE (<md): SWIPEABLE HORIZONTAL REELS CONTAINER
           ========================================================================= */}
        <div className="block md:hidden overflow-x-auto pb-4 scroll-smooth scrollbar-none snap-x snap-mandatory flex gap-4 px-2">
          {REELS_DATA.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative flex-shrink-0 w-[270px] h-[460px] rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-xl cursor-pointer snap-center transition-all duration-300"
            >
              {/* Background Thumbnail Image */}
              <Image
                src={reel.thumbnail}
                alt={`${reel.name} - ${reel.trade}`}
                fill
                className="object-cover object-top brightness-90"
                sizes="270px"
              />

              {/* Multi-layer Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80" />

              {/* TOP HEADER */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-black border border-white/10">
                  {reel.tag}
                </span>

                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                  <Eye className="w-3.5 h-3.5 text-blue-300" />
                  <span>{reel.views}</span>
                </div>
              </div>

              {/* CENTER: PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col justify-end">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black w-fit mb-2 backdrop-blur-md">
                  <TrendingUp className="w-3 h-3" />
                  <span>{reel.earnings}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-black text-white leading-tight">
                    {reel.name}
                  </h3>
                  <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <p className="text-[11px] text-blue-200 font-medium">
                  {reel.trade} • {reel.location}
                </p>

                <p className="mt-1.5 text-xs text-slate-300 leading-snug line-clamp-2 italic">
                  &ldquo;{reel.quote}&rdquo;
                </p>

                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/80">
                  <span className="flex items-center gap-1 text-rose-400">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>{reel.likes}</span>
                  </span>
                  <span className="font-bold text-amber-300">Tap to Watch →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================================
          INTERACTIVE REEL PREVIEW MODAL
         ========================================================================= */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-sky-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">{activeReel.name}</h4>
                  <p className="text-[11px] text-blue-300">{activeReel.trade} • {activeReel.location}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveReel(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport Simulated */}
            <div className="relative w-full h-[400px] bg-black">
              <Image
                src={activeReel.thumbnail}
                alt={activeReel.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Big Quote in Center */}
              <div className="absolute inset-x-6 bottom-8 text-center">
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs inline-block mb-3">
                  Verified Bank Settlement: {activeReel.earnings}
                </span>
                <p className="text-white text-base font-bold leading-relaxed shadow-sm">
                  &ldquo;{activeReel.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Direct Play Store Conversion Action */}
            <div className="p-5 bg-slate-950 border-t border-white/10 flex flex-col gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg transition-transform active:scale-95"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Join Like {activeReel.name} • Download Worker App</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                100% Free Registration • 0% Commission • Daily Job Alerts
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
