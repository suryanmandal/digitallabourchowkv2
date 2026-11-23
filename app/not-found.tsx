import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, HardHat, PhoneCall, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Under Construction | Digital Labour Chowk",
  description:
    "The page you are looking for might have been removed, had its name changed, or is temporarily under construction.",
};

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white select-none">
      <div className="max-w-2xl w-full mx-auto text-center flex flex-col items-center">
        
        {/* 3D CONSTRUCTION 404 ILLUSTRATION */}
        <div className="relative w-full max-w-[540px] sm:max-w-[620px] aspect-[16/9] mb-6 sm:mb-8 transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/images/404-construction.jpg"
            alt="404 - Site Under Construction - Digital Labour Chowk"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 620px"
          />
        </div>

        {/* CONSTRUCTION THEMED ERROR BADGE */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold mb-4 shadow-xs">
          <HardHat className="w-4 h-4 text-amber-600" />
          <span>Site Under Construction • Error 404</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-3">
          Raasta Bhatak Gaye Hain?
        </h1>

        {/* SUBTITLE */}
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
          Aap jis page ko dhoondh rahe hain, woh construction site se hat gaya hai ya abhi ban raha hai. Chaliye wapas main chowk par chalte hain.
        </p>

        {/* RETURN HOME PAGE LINK (PROMINENT IN MIDDLE) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(12,89,212,0.3)] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Return to Home Page</span>
          </Link>

          <Link
            href="/worker"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 text-slate-600" />
            <span>Find Work (Rozgar)</span>
          </Link>
        </div>

        {/* HELPLINE NOTICE */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
          <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
          <span>Need direct assistance? Call toll-free: </span>
          <a
            href="tel:+917070999175"
            className="font-bold text-[#0C59D4] hover:underline"
          >
            +91-7070999175
          </a>
        </div>

      </div>
    </main>
  );
}
