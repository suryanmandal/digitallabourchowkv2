"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  Award,
  ChevronRight,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Mobile Accordion State for less scrolling on phone view
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    company: false,
    policies: false,
    trades: false,
    offices: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="w-full bg-[#071329] text-slate-300 relative overflow-hidden font-sans pt-10 sm:pt-12 lg:pt-16">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* MAIN FOOTER COLUMNS                                                       */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8">
          
          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 1: Brand, About DLC & Social Media (lg:col-span-3)             */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col pb-4 md:pb-0 border-b border-slate-800/80 md:border-b-0">
            {/* White Logo with Trademark */}
            <div className="relative w-44 sm:w-52 h-11 sm:h-14 mb-3 sm:mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Digital Labour Chowk Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Transforming the construction industry by seamlessly connecting skilled, semi-skilled, and unskilled workers with construction projects across the nation.
            </p>

            {/* Recognition & Accreditation Badges (Compact row on mobile) */}
            <div className="flex flex-row flex-wrap md:flex-col gap-2 sm:gap-2.5 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg w-fit">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span>Recognized by <strong>Startup India (DPIIT)</strong></span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg w-fit">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span>Incubated at <strong>STPI</strong> (MeitY, Govt. of India)</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2 sm:mb-3">
                Follow Our Journey
              </span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/digitallabourchowk/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 hover:bg-[#1877F2] border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 group shadow-sm active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/Digital_Chowk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 hover:bg-black border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 group shadow-sm active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/digitallabourchowk/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 group shadow-sm active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/digitallabourchowk/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 hover:bg-[#0A66C2] border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 group shadow-sm active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@digitallabourchowk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 hover:bg-[#FF0000] border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 group shadow-sm active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 2: Company Navigation (lg:col-span-2)                         */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-2 border-b border-slate-800/80 md:border-b-0 pb-3 md:pb-0">
            {/* Accordion Toggle Header for Mobile (< md), Static Header for Desktop (>= md) */}
            <button
              type="button"
              onClick={() => toggleSection("company")}
              className="w-full flex items-center justify-between text-left md:cursor-default py-2 md:py-0 focus:outline-none group"
            >
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white md:mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />
                <span>Company</span>
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 md:hidden transition-transform duration-200 ${
                  openSections.company ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>

            {/* List: Always block on desktop (>= md), animated collapsible on mobile (< md) */}
            <div className={`${openSections.company ? "block pt-2" : "hidden"} md:block`}>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link href="/about/" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-construction-workers-business/" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>For Contractors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/worker/" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>For Workers</span>
                  </Link>
                </li>
                <li>
                  <a href="https://jobs.dlc.org.in/projects" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Job Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-0.5" />
                  </a>
                </li>
                <li>
                  <Link href="/media-coverage/" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Media &amp; Press</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Latest Blogs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us-2/" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 3: Policies & Legal (lg:col-span-2)                             */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-2 border-b border-slate-800/80 md:border-b-0 pb-3 md:pb-0">
            {/* Accordion Toggle Header for Mobile (< md), Static Header for Desktop (>= md) */}
            <button
              type="button"
              onClick={() => toggleSection("policies")}
              className="w-full flex items-center justify-between text-left md:cursor-default py-2 md:py-0 focus:outline-none group"
            >
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white md:mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />
                <span>Policies &amp; Legal</span>
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 md:hidden transition-transform duration-200 ${
                  openSections.policies ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>

            {/* List: Always block on desktop (>= md), animated collapsible on mobile (< md) */}
            <div className={`${openSections.policies ? "block pt-2" : "hidden"} md:block`}>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Terms and Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-policy" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Cancellation Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Refund Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>Disclaimer</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 4: Popular Construction Trades (lg:col-span-2)                 */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-2 border-b border-slate-800/80 md:border-b-0 pb-3 md:pb-0">
            {/* Accordion Toggle Header for Mobile (< md), Static Header for Desktop (>= md) */}
            <button
              type="button"
              onClick={() => toggleSection("trades")}
              className="w-full flex items-center justify-between text-left md:cursor-default py-2 md:py-0 focus:outline-none group"
            >
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white md:mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />
                <span>Popular Trades</span>
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 md:hidden transition-transform duration-200 ${
                  openSections.trades ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>

            {/* List: Always block on desktop (>= md), animated collapsible on mobile (< md) */}
            <div className={`${openSections.trades ? "block pt-2" : "hidden"} md:block`}>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Rajmistri (Mason)</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Shuttering Carpenter</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Bar Bender</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Electrician</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>Plumber</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>General Labor</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 5: Addresses & Direct Contact Details (lg:col-span-3)          */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-3 pb-3 md:pb-0">
            {/* Accordion Toggle Header for Mobile (< md), Static Header for Desktop (>= md) */}
            <button
              type="button"
              onClick={() => toggleSection("offices")}
              className="w-full flex items-center justify-between text-left md:cursor-default py-2 md:py-0 focus:outline-none group"
            >
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white md:mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />
                <span>Offices &amp; Contact</span>
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 md:hidden transition-transform duration-200 ${
                  openSections.offices ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>

            {/* Fast Quick Helpline Contact Pill always visible on phone */}
            <div className="flex md:hidden items-center justify-between gap-2 my-2 py-2 px-3 rounded-xl bg-slate-800/80 border border-slate-700/70 text-xs">
              <a
                href="tel:+919654007500"
                className="inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 9654007500</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="mailto:info@digitallabourchowk.com"
                className="inline-flex items-center gap-1.5 text-amber-400 font-medium hover:underline truncate"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            {/* List: Always block on desktop (>= md), animated collapsible on mobile (< md) */}
            <div className={`${openSections.offices ? "block pt-2" : "hidden"} md:block`}>
              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* Corporate Office */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Corporate Office:</span>
                    <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                      1st Floor, STPI, Sector 29, Botanical Garden, Noida - 201301 (U.P.)
                    </p>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Registered Office:</span>
                    <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                      197, 1st Floor, Ami, Nainaghat, Telhan, Darbhanga - 847115 (Bihar)
                    </p>
                  </div>
                </div>

                {/* Phone Helpline (Desktop) */}
                <div className="hidden md:flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Helpline</span>
                    <a
                      href="tel:+919654007500"
                      className="text-white hover:text-blue-400 font-bold transition-colors"
                    >
                      +91 9654007500
                    </a>
                  </div>
                </div>

                {/* Support Email (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Official Email</span>
                    <a
                      href="mailto:info@digitallabourchowk.com"
                      className="text-white hover:text-blue-400 font-bold transition-colors break-all"
                    >
                      info@digitallabourchowk.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-400 text-xs">
                    Mon – Sat: 9:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM LEGAL & COPYRIGHT BAR                                              */}
      {/* ========================================================================= */}
      <div className="w-full border-t border-slate-800/80 bg-[#050e1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4 text-xs text-slate-400">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-center md:text-left">
              <span>Copyright © 2026. All rights reserved to <strong>Digital Labour Chowk</strong>.</span>
            </div>

            {/* Legal Policy Names */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-slate-400 text-[11px] sm:text-xs">
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/cancellation-policy" className="hover:text-white transition-colors">
                Cancellation Policy
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>

            {/* Back To Top Action */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-[11px] sm:text-xs font-semibold shadow-sm active:scale-95"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}
