"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Smooth hover handlers with a slight debounce buffer to prevent cursor clipping
  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-xs" ref={navContainerRef}>
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR                                                        */}
      {/* ========================================================================= */}
      <div className="w-full bg-slate-50/90 border-b border-gray-100 py-1.5 px-4 sm:px-8 lg:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-end gap-4 sm:gap-6 text-xs text-slate-600">
          
          {/* Phone Helpline */}
          <a
            href="tel:+917070999175"
            className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-[#0C59D4] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0C59D4]" />
            <span className="text-[11px] sm:text-xs">+91-7070999175</span>
          </a>

          {/* Social Media Links */}
          <div className="flex items-center gap-3 sm:gap-3.5 text-slate-500">
            <a
              href="mailto:info@digitallabourchowk.com"
              aria-label="Email Digital Labour Chowk"
              className="hover:text-[#0C59D4] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/digitallabourchowk"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#0C59D4] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/digitallabourchowk"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#0C59D4] transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            {/* Custom X (Twitter) Icon */}
            <a
              href="https://x.com/Digital_Chowk"
              target="_blank"
              rel="noreferrer"
              aria-label="X Twitter"
              className="hover:text-[#0C59D4] transition-colors"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/digitallabourchowk"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0C59D4] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instant Regional Language Switcher in Top Bar */}
          <div className="flex items-center pl-2 sm:pl-3 border-l border-slate-200">
            <LanguageSwitcher variant="topbar" />
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN NAVIGATION BAR                                                    */}
      {/* ========================================================================= */}
      <div className="w-full bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Tagline */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink-0"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActiveDropdown(null);
            }}
          >
            <div className="relative h-8 w-8 sm:h-11 sm:w-11 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Digital Labour Chowk Logo"
                fill
                sizes="(max-width: 640px) 32px, 44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] sm:text-xl lg:text-2xl font-black tracking-tight text-[#0C59D4] uppercase leading-none truncate">
                DIGITAL LABOUR CHOWK
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] lg:text-[10px] font-bold text-slate-700 tracking-[0.14em] sm:tracking-[0.22em] uppercase mt-0.5 sm:mt-1 truncate">
                A CONSTRUCTION WORKFORCE PLATFORM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= xl / 1280px) */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-9 text-[13.5px] font-bold tracking-wider uppercase text-slate-800">
            
            {/* ----------------------------------------------------------------- */}
            {/* 1. ABOUT US (Single-Column Elegant Dropdown - Exact Image 1 Style) */}
            {/* ----------------------------------------------------------------- */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/about-us"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center gap-1.5 transition-colors duration-150 focus:outline-none ${
                  activeDropdown === "about" ? "text-[#0C59D4]" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>ABOUT US</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180 text-[#0C59D4]" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Exact Image 1 Card: White container, 3px top blue line, clean dividers */}
              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-xl border-x border-b border-gray-100 border-t-[3px] border-t-[#0C59D4] px-6 py-2 normal-case font-normal">
                    <div className="flex flex-col">
                      <Link
                        href="/about-us/history"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Our History
                      </Link>
                      <Link
                        href="/about-us/vision-mission"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Vision & Mission
                      </Link>
                      <Link
                        href="/about-us/values"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Values
                      </Link>
                      <Link
                        href="/about-us/leadership"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Leadership
                      </Link>
                      <Link
                        href="/awards-recognition"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Awards & Recognitions
                      </Link>
                      <Link
                        href="/about-us/footprint"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Our Footprint
                      </Link>
                      <Link
                        href="/media-coverage"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Media Coverage
                      </Link>
                      <Link
                        href="/partnerships"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Institutional Partners
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* 2. HIRE MANPOWER (3-Column Mega Menu - Exact Image 2 Style)        */}
            {/* ----------------------------------------------------------------- */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("hire")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "hire" ? null : "hire")}
                aria-expanded={activeDropdown === "hire"}
                className={`flex items-center gap-1.5 transition-colors duration-150 focus:outline-none ${
                  activeDropdown === "hire" ? "text-[#0C59D4]" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>HIRE MANPOWER</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "hire" ? "rotate-180 text-[#0C59D4]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Exact Image 2 Multi-Column Mega Card */}
              {activeDropdown === "hire" && (
                <div
                  className="absolute top-full left-0 -translate-x-48 w-[820px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("hire")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-xl border-x border-b border-gray-100 border-t-[3px] border-t-[#0C59D4] px-8 py-7 normal-case font-normal">
                    <div className="grid grid-cols-3 gap-8">
                      
                      {/* Column 1: Civil & Finishing Trades */}
                      <div>
                        <h4 className="text-[17px] font-bold text-[#0C59D4] mb-3 tracking-tight">
                          Civil & Finishing Trades
                        </h4>
                        <div className="flex flex-col">
                          <Link
                            href="/instant-manpower-dispatch"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Instant Manpower Dispatch
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#civil"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Masons & Bricklayers
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#plumbing"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Plumbing & Sanitation
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#carpenters"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Carpenters & Bar-Benders
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#helpers"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            General Site Helpers
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Whom We Serve */}
                      <div>
                        <h4 className="text-[17px] font-bold text-[#0C59D4] mb-3 tracking-tight">
                          Whom We Serve
                        </h4>
                        <div className="flex flex-col">
                          <Link
                            href="/hire-construction-workers-business#epcs"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            General Contractors & EPCs
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#subcontractors"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Sub-Contractors & Jamadars
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#developers"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Builders & Real Estate
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#infrastructure"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Infrastructure Projects
                          </Link>
                          <Link
                            href="/hire-construction-workers-business#industrial"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Industrial Plants & Warehouses
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Compliance & Rates */}
                      <div>
                        <h4 className="text-[17px] font-bold text-[#0C59D4] mb-3 tracking-tight">
                          Compliance & Rates
                        </h4>
                        <div className="flex flex-col">
                          <Link
                            href="/compliance-safety#biometrics"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Digital Biometric Attendance
                          </Link>
                          <Link
                            href="/compliance-safety#pf-esic"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Statutory PF & ESIC Records
                          </Link>
                          <Link
                            href="/compliance-safety#safety"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Site Safety & PPE Standards
                          </Link>
                          <Link
                            href="/wage-calculator"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Wage Calculator & Rate Card
                          </Link>
                          <Link
                            href="/wage-calculator#benchmarks"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            City-Wise Wage Benchmarks
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* 3. FOR WORKERS (2-Column Mega Menu - Image 2 Style)               */}
            {/* ----------------------------------------------------------------- */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("workers")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "workers" ? null : "workers")}
                aria-expanded={activeDropdown === "workers"}
                className={`flex items-center gap-1.5 transition-colors duration-150 focus:outline-none ${
                  activeDropdown === "workers" ? "text-[#0C59D4]" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>FOR WORKERS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "workers" ? "rotate-180 text-[#0C59D4]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Exact Image 2 Style for Workers */}
              {activeDropdown === "workers" && (
                <div
                  className="absolute top-full left-0 -translate-x-32 w-[600px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("workers")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-xl border-x border-b border-gray-100 border-t-[3px] border-t-[#0C59D4] px-8 py-7 normal-case font-normal">
                    <div className="grid grid-cols-2 gap-8">
                      
                      {/* Column 1: Rozgar & Placements */}
                      <div>
                        <h4 className="text-[17px] font-bold text-[#0C59D4] mb-3 tracking-tight">
                          Rozgar & Placements
                        </h4>
                        <div className="flex flex-col">
                          <Link
                            href="/worker"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Find Daily Work (Aaj Ka Rozgar)
                          </Link>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors flex items-center justify-between"
                          >
                            <span>Download DLC Worker App</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                          <Link
                            href="/worker#zero-commission"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Zero Commission Placement
                          </Link>
                          <Link
                            href="/worker#skills"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Skill Development & Badges
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Benefits & Suraksha */}
                      <div>
                        <h4 className="text-[17px] font-bold text-[#0C59D4] mb-3 tracking-tight">
                          Benefits & Suraksha
                        </h4>
                        <div className="flex flex-col">
                          <Link
                            href="/worker#dbt"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Direct Bank Transfer (DBT)
                          </Link>
                          <Link
                            href="/worker#insurance"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            ₹5 Lakhs Accidental Insurance
                          </Link>
                          <Link
                            href="/worker#trade-id"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Digital Trade ID Card
                          </Link>
                          <Link
                            href="/worker#helpline"
                            onClick={() => setActiveDropdown(null)}
                            className="py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                          >
                            Worker Support (1800-202-0991)
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* 4. RESOURCES (Single-Column Elegant Dropdown - Exact Image 1 Style) */}
            {/* ----------------------------------------------------------------- */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                aria-expanded={activeDropdown === "resources"}
                className={`flex items-center gap-1.5 transition-colors duration-150 focus:outline-none ${
                  activeDropdown === "resources" ? "text-[#0C59D4]" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>RESOURCES</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "resources" ? "rotate-180 text-[#0C59D4]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Exact Image 1 Style for Resources */}
              {activeDropdown === "resources" && (
                <div
                  className="absolute top-full left-0 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-xl border-x border-b border-gray-100 border-t-[3px] border-t-[#0C59D4] px-6 py-2 normal-case font-normal">
                    <div className="flex flex-col">
                      <Link
                        href="/blog"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Industry Blogs & Insights
                      </Link>
                      <Link
                        href="/blog#automation"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Site Automation Trends
                      </Link>
                      <Link
                        href="/blog#guides"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Workforce Guides
                      </Link>
                      <Link
                        href="/labour-laws"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Labour Laws & Regulations
                      </Link>
                      <Link
                        href="/labour-laws#minimum-wages"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Minimum Wage Notices
                      </Link>
                      <Link
                        href="/press-releases"
                        onClick={() => setActiveDropdown(null)}
                        className="py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors"
                      >
                        Press Releases & Media
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* 5. INVESTOR RELATIONS (Direct Link)                               */}
            {/* ----------------------------------------------------------------- */}
            <Link
              href="#investor-relations"
              className="hover:text-[#0C59D4] transition-colors duration-150 py-6"
            >
              INVESTOR RELATIONS
            </Link>

          </nav>

          {/* Right Header Actions (CTA + Mobile Burger Menu) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher variant="navbar" />
            </div>

            {/* Get in Touch CTA Button */}
            <a
              href="https://onboarding.digitallabourchowk.com/login"
              className="hidden md:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              Get in Touch
            </a>

            {/* Burger Menu Button (Visible on Phone & Tablet: < xl / 1280px) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#0C59D4] active:scale-95 border border-slate-200 transition-all duration-200 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#0C59D4]" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE & TABLET EXPANDABLE MENU DRAWER (Below xl / 1280px)             */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div className="xl:hidden w-full bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col gap-3">
            
            {/* Mobile Regional Language Switcher - Dedicated Touch Friendly Card for Workers */}
            <LanguageSwitcher variant="mobile" />

            {/* Accordion 1: ABOUT US */}
            <div className="border border-slate-200 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileSection("about")}
                className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-900 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileExpandedSection === "about" ? "rotate-180 text-[#0C59D4]" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "about" && (
                <div className="p-4 bg-white border-t-[2px] border-t-[#0C59D4] flex flex-col">
                  <Link
                    href="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-[#0C59D4] font-bold border-b border-gray-200"
                  >
                    Overview & Bento Hub
                  </Link>
                  <Link
                    href="/about-us/history"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Our History
                  </Link>
                  <Link
                    href="/about-us/vision-mission"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/about-us/values"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Values
                  </Link>
                  <Link
                    href="/about-us/leadership"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Leadership
                  </Link>
                  <Link
                    href="/awards-recognition"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Awards & Recognitions
                  </Link>
                  <Link
                    href="/about-us/footprint"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Our Footprint
                  </Link>
                  <Link
                    href="/media-coverage"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Media Coverage
                  </Link>
                  <Link
                    href="/partnerships"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-[14px] text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Institutional Partners
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion 2: HIRE MANPOWER */}
            <div className="border border-slate-200 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileSection("hire")}
                className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-900 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
              >
                <span>Hire Manpower</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileExpandedSection === "hire" ? "rotate-180 text-[#0C59D4]" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "hire" && (
                <div className="p-4 bg-white border-t-[2px] border-t-[#0C59D4] flex flex-col gap-4">
                  <div>
                    <h5 className="text-[14px] font-bold text-[#0C59D4] mb-1">Civil & Finishing Trades</h5>
                    <div className="flex flex-col">
                      <Link
                        href="/instant-manpower-dispatch"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Instant Manpower Dispatch
                      </Link>
                      <Link
                        href="/hire-construction-workers-business#civil"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Masons & Bricklayers
                      </Link>
                      <Link
                        href="/hire-construction-workers-business#plumbing"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Plumbing & Sanitation
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[14px] font-bold text-[#0C59D4] mb-1">Whom We Serve</h5>
                    <div className="flex flex-col">
                      <Link
                        href="/hire-construction-workers-business#epcs"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        General Contractors & EPCs
                      </Link>
                      <Link
                        href="/hire-construction-workers-business#subcontractors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Sub-Contractors & Jamadars
                      </Link>
                      <Link
                        href="/hire-construction-workers-business#developers"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Builders & Real Estate
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[14px] font-bold text-[#0C59D4] mb-1">Compliance & Rates</h5>
                    <div className="flex flex-col">
                      <Link
                        href="/compliance-safety"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Compliance & Safety Standards
                      </Link>
                      <Link
                        href="/wage-calculator"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Wage Calculator & Rate Card
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: FOR WORKERS */}
            <div className="border border-slate-200 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileSection("workers")}
                className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-900 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
              >
                <span>For Workers</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileExpandedSection === "workers" ? "rotate-180 text-[#0C59D4]" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "workers" && (
                <div className="p-4 bg-white border-t-[2px] border-t-[#0C59D4] flex flex-col gap-4">
                  <div>
                    <h5 className="text-[14px] font-bold text-[#0C59D4] mb-1">Rozgar & Placements</h5>
                    <div className="flex flex-col">
                      <Link
                        href="/worker"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Find Daily Work (Aaj Ka Rozgar)
                      </Link>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal flex items-center justify-between"
                      >
                        <span>Download DLC Worker App</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[14px] font-bold text-[#0C59D4] mb-1">Benefits & Suraksha</h5>
                    <div className="flex flex-col">
                      <Link
                        href="/worker#dbt"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Direct Bank Transfer (DBT)
                      </Link>
                      <Link
                        href="/worker#insurance"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        ₹5 Lakhs Accidental Insurance
                      </Link>
                      <Link
                        href="/worker#helpline"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                      >
                        Worker Helpline (1800-202-0991)
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 4: RESOURCES */}
            <div className="border border-slate-200 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileSection("resources")}
                className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-900 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileExpandedSection === "resources" ? "rotate-180 text-[#0C59D4]" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "resources" && (
                <div className="p-4 bg-white border-t-[2px] border-t-[#0C59D4] flex flex-col">
                  <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Industry Blogs & Insights
                  </Link>
                  <Link
                    href="/labour-laws"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Labour Laws & Regulations
                  </Link>
                  <Link
                    href="/press-releases"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2.5 text-xs text-slate-800 border-b border-gray-200 font-normal"
                  >
                    Press Releases & Media
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Link: Investor Relations */}
            <Link
              href="#investor-relations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-3 border border-slate-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:text-[#0C59D4] transition-all"
            >
              <span>Investor Relations</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Mobile Call To Action Button */}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://onboarding.digitallabourchowk.com/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 rounded-lg bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm transition-all"
              >
                Get in Touch
              </a>

              {/* Direct Quick Calls */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href="tel:+917070999175"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold hover:bg-blue-50 hover:text-[#0C59D4] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0C59D4]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:info@digitallabourchowk.com"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold hover:bg-blue-50 hover:text-[#0C59D4] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0C59D4]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Floating Accessible Language Pill for Mobile Workers (hidden when mobile menu is open) */}
      {!isMobileMenuOpen && (
        <div className="xl:hidden">
          <LanguageSwitcher variant="floating" />
        </div>
      )}
    </header>
  );
}
