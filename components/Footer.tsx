"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#08090C] text-slate-400 relative overflow-hidden font-sans pt-14 sm:pt-16 lg:pt-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Brand + Newsletter (Left) & Nav Link Columns (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 sm:pb-16">
          
          {/* Left Column: Brand, Tagline, Newsletter, Accreditations */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* White DLC Brand Logo */}
            <Link href="/" className="inline-block relative w-48 sm:w-56 h-12 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Digital Labour Chowk"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Tagline */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              India&apos;s premier construction workforce mobilization platform connecting verified tradesmen with EPC enterprises nationwide.
            </p>

            {/* Newsletter Subscription Form */}
            <div className="max-w-sm w-full mb-6">
              {isSubscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm animate-in fade-in duration-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Thank you for subscribing to DLC updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="bg-[#14151B] border border-white/10 rounded-l-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0C59D4] flex-1 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-slate-200 text-slate-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-r-xl transition-all duration-200 shrink-0 shadow-sm active:scale-95 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Accreditation Micro Badges */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Recognized by <strong className="text-slate-400 font-semibold">Startup India (DPIIT)</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Incubated at <strong className="text-slate-400 font-semibold">STPI</strong> (MeitY)
              </span>
            </div>
          </div>

          {/* Right Columns: 4 Clean Columns of Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-8">
            
            {/* Column 1: Solutions */}
            <div>
              <h4 className="text-sm font-medium text-slate-200 mb-4">
                Solutions
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px]">
                <li>
                  <Link href="/business#contractor" className="hover:text-white transition-colors duration-150 block">
                    Contractor
                  </Link>
                </li>
                <li>
                  <Link href="/business#general-contractor" className="hover:text-white transition-colors duration-150 block">
                    General Contractor
                  </Link>
                </li>
                <li>
                  <Link href="/business#builder-developer" className="hover:text-white transition-colors duration-150 block">
                    Builder &amp; Developer
                  </Link>
                </li>
                <li>
                  <Link href="/business#staffing-agency" className="hover:text-white transition-colors duration-150 block">
                    Staffing &amp; Agency
                  </Link>
                </li>
                <li>
                  <Link href="/worker" className="hover:text-white transition-colors duration-150 block">
                    DLC Rojgar App
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:text-white transition-colors duration-150 block">
                    DLC Thekedar App
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="text-sm font-medium text-slate-200 mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px]">
                <li>
                  <Link href="/about-us" className="hover:text-white transition-colors duration-150 block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/vision-mission" className="hover:text-white transition-colors duration-150 block">
                    Vision &amp; Mission
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-white transition-colors duration-150 block">
                    Partners &amp; EPCs
                  </Link>
                </li>
                <li>
                  <Link href="/media-coverage" className="hover:text-white transition-colors duration-150 block">
                    Media Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors duration-150 block">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-150 block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-sm font-medium text-slate-200 mb-4">
                Resources
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px]">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors duration-150 block">
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/footprint" className="hover:text-white transition-colors duration-150 block">
                    Pan-India Footprint
                  </Link>
                </li>
                <li>
                  <Link href="/awards-recognition" className="hover:text-white transition-colors duration-150 block">
                    Awards &amp; Honors
                  </Link>
                </li>
                <li>
                  <Link href="/worker" className="hover:text-white transition-colors duration-150 block">
                    Verified Tradesmen
                  </Link>
                </li>
                <li>
                  <a href="tel:+919654007500" className="hover:text-white transition-colors duration-150 block">
                    Helpline Support
                  </a>
                </li>
                <li>
                  <a href="mailto:info@digitallabourchowk.com" className="hover:text-white transition-colors duration-150 block truncate">
                    Official Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="text-sm font-medium text-slate-200 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px]">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors duration-150 block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-150 block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-policy" className="hover:text-white transition-colors duration-150 block">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-white transition-colors duration-150 block">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-white transition-colors duration-150 block">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors duration-150 block">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/[0.08]" />

        {/* Middle Bar: Copyright (Left) & Social Links + Back to top (Right) */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Digital Labour Chowk. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-slate-400">
            <a
              href="https://x.com/Digital_Chowk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              X / Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/digitallabourchowk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/digitallabourchowk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@digitallabourchowk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/digitallabourchowk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              Facebook
            </a>

            {/* Back to top micro button */}
            <button
              onClick={scrollToTop}
              className="hidden md:inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors duration-150 ml-2 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Typographic Brand Watermark at Bottom */}
      <div className="w-full overflow-hidden select-none pointer-events-none pt-2 sm:pt-4 pb-8 sm:pb-0 mb-0 sm:-mb-8 lg:-mb-14">
        <svg
          viewBox="0 0 1600 180"
          className="w-full h-auto text-white/[0.08] fill-current"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="62%"
            textAnchor="middle"
            letterSpacing="-3"
            style={{
              fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "155px",
              fontWeight: 900,
            }}
          >
            Digital Labour Chowk
          </text>
        </svg>
      </div>
    </footer>
  );
}