"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  HardHat,
  Building2,
  Users,
  Trophy,
  Handshake,
  FileText,
  Briefcase,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Custom crossed tools icon matching the General Contractor icon in manager's design
function CrossedToolsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      <path d="M18.5 5.5 5.5 18.5" />
      <path d="m4 20 1.5 1.5" />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const pathname = usePathname();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Active route helpers
  const isHomeActive = pathname === "/";
  const isAboutActive = pathname.startsWith("/about");
  const isWorkerActive = pathname.startsWith("/worker");
  const isBusinessActive = pathname.startsWith("/business") || pathname.startsWith("/hire");
  const isMediaActive = pathname.startsWith("/media") || pathname.startsWith("/awards") || pathname.startsWith("/partnerships");
  const isContactActive = pathname.startsWith("/contact");
  const isResourcesActive = pathname.startsWith("/blog") || pathname.startsWith("/career");

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActiveDropdown(null);
            }}
          >
            <div className="relative w-36 sm:w-44 md:w-48 h-9 sm:h-11 md:h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Digital Labour Chowk Logo"
                fill
                sizes="(max-width: 640px) 144px, 192px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ========================================================================= */}
          {/* Desktop Navigation Links (>= lg / 1024px)                                  */}
          {/* Structure requested by Manager:                                           */}
          {/* 1. Home                                                                   */}
          {/* 2. About                                                                  */}
          {/* 3. Worker                                                                 */}
          {/* 4. Business ▼                                                             */}
          {/* 5. Media ▼                                                                */}
          {/* 6. Contact Us                                                             */}
          {/* 7. Resources ▼                                                            */}
          {/* ========================================================================= */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-[15px] font-medium text-slate-700 whitespace-nowrap">
            
            {/* 1. HOME (Direct Link with Active Indicator) */}
            <div className="relative py-6 flex items-center">
              <Link
                href="/"
                onClick={() => setActiveDropdown(null)}
                className={`transition-colors duration-150 whitespace-nowrap ${
                  isHomeActive ? "text-[#0C59D4] font-semibold" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>Home</span>
              </Link>
              {isHomeActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}
            </div>

            {/* 2. ABOUT (Direct Link) */}
            <div className="relative py-6 flex items-center">
              <Link
                href="/about-us"
                onClick={() => setActiveDropdown(null)}
                className={`transition-colors duration-150 whitespace-nowrap ${
                  isAboutActive ? "text-[#0C59D4] font-semibold" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>About</span>
              </Link>
              {isAboutActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}
            </div>

            {/* 3. WORKER (Direct Link) */}
            <div className="relative py-6 flex items-center">
              <Link
                href="/worker"
                onClick={() => setActiveDropdown(null)}
                className={`transition-colors duration-150 whitespace-nowrap ${
                  isWorkerActive ? "text-[#0C59D4] font-semibold" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>Worker</span>
              </Link>
              {isWorkerActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}
            </div>

            {/* 4. BUSINESS ▼ (Dropdown Card) */}
            <div
              className="relative py-6 flex items-center"
              onMouseEnter={() => handleMouseEnter("business")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "business" ? null : "business")}
                aria-expanded={activeDropdown === "business"}
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                  activeDropdown === "business" || isBusinessActive
                    ? "text-[#0C59D4] font-semibold"
                    : "hover:text-[#0C59D4]"
                }`}
              >
                <span>Business</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "business" ? "rotate-180 text-[#0C59D4]" : "text-slate-500"
                  }`}
                />
              </button>
              {isBusinessActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}

              {/* Business Dropdown Card - Mockup Design Match */}
              {activeDropdown === "business" && (
                <div
                  className="absolute top-full left-0 z-50 pt-1 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("business")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden min-w-[270px] py-1.5 font-normal">
                    {/* Contractor */}
                    <Link
                      href="/business#contractor"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors border-b border-slate-100 group"
                    >
                      <HardHat className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Contractor</span>
                    </Link>

                    {/* General Contractor */}
                    <Link
                      href="/business#general-contractor"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors border-b border-slate-100 group"
                    >
                      <CrossedToolsIcon className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>General Contractor</span>
                    </Link>

                    {/* Builder & Developer */}
                    <Link
                      href="/business#builder-developer"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors border-b border-slate-100 group"
                    >
                      <Building2 className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Builder &amp; Developer</span>
                    </Link>

                    {/* Staffing & Placement Agency */}
                    <Link
                      href="/business#staffing-agency"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors group"
                    >
                      <Users className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Staffing &amp; Placement Agency</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. MEDIA ▼ (Dropdown Card) */}
            <div
              className="relative py-6 flex items-center"
              onMouseEnter={() => handleMouseEnter("media")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "media" ? null : "media")}
                aria-expanded={activeDropdown === "media"}
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                  activeDropdown === "media" || isMediaActive
                    ? "text-[#0C59D4] font-semibold"
                    : "hover:text-[#0C59D4]"
                }`}
              >
                <span>Media</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "media" ? "rotate-180 text-[#0C59D4]" : "text-slate-500"
                  }`}
                />
              </button>
              {isMediaActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}

              {/* Media Dropdown Card - Mockup Design Match */}
              {activeDropdown === "media" && (
                <div
                  className="absolute top-full left-0 z-50 pt-1 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("media")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden min-w-[240px] py-1.5 font-normal">
                    {/* Awards & Recognition */}
                    <Link
                      href="/awards-recognition"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors border-b border-slate-100 group"
                    >
                      <Trophy className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Awards &amp; Recognition</span>
                    </Link>

                    {/* Partnership */}
                    <Link
                      href="/partnerships"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors group"
                    >
                      <Handshake className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Partnership</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 6. CONTACT US (Direct Link) */}
            <div className="relative py-6 flex items-center">
              <Link
                href="/contact"
                onClick={() => setActiveDropdown(null)}
                className={`transition-colors duration-150 whitespace-nowrap ${
                  isContactActive ? "text-[#0C59D4] font-semibold" : "hover:text-[#0C59D4]"
                }`}
              >
                <span>Contact Us</span>
              </Link>
              {isContactActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}
            </div>

            {/* 7. RESOURCES ▼ (Dropdown Card) */}
            <div
              className="relative py-6 flex items-center"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                aria-expanded={activeDropdown === "resources"}
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                  activeDropdown === "resources" || isResourcesActive
                    ? "text-[#0C59D4] font-semibold"
                    : "hover:text-[#0C59D4]"
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "resources" ? "rotate-180 text-[#0C59D4]" : "text-slate-500"
                  }`}
                />
              </button>
              {isResourcesActive && (
                <span className="absolute bottom-3 left-0 right-0 h-[3.5px] bg-[#0C59D4] rounded-full transition-all" />
              )}

              {/* Resources Dropdown Card - Mockup Design Match */}
              {activeDropdown === "resources" && (
                <div
                  className="absolute top-full left-0 z-50 pt-1 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden min-w-[200px] py-1.5 font-normal">
                    {/* Blogs */}
                    <Link
                      href="/blog"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors border-b border-slate-100 group"
                    >
                      <FileText className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Blogs</span>
                    </Link>

                    {/* Career */}
                    <Link
                      href="/careers"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3.5 px-5 py-3 text-[14.5px] font-medium text-slate-800 hover:text-[#0C59D4] hover:bg-slate-50/80 transition-colors group"
                    >
                      <Briefcase className="w-5 h-5 text-slate-700 group-hover:text-[#0C59D4] transition-colors flex-shrink-0" />
                      <span>Career</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Right Header Actions (Language Switcher + Get in Touch + Mobile Burger) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher variant="navbar" />
            </div>

            {/* Get in Touch CTA Button */}
            <a
              href="https://onboarding.digitallabourchowk.com/login"
              className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-xs hover:shadow transition-all duration-200 active:scale-95"
            >
              Get in Touch
            </a>

            {/* Burger Menu Button (Visible below lg / 1024px) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#0C59D4] active:scale-95 border border-slate-200 transition-all duration-200 focus:outline-none"
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
      {/* 3. MOBILE & TABLET EXPANDABLE MENU DRAWER (Below lg / 1024px)              */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col gap-3">
            
            {/* Mobile Nav Links Hierarchy */}
            <div className="flex flex-col gap-1.5 pt-1">
              
              {/* 1. Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isHomeActive
                    ? "bg-blue-50 text-[#0C59D4]"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Home</span>
                {isHomeActive && <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />}
              </Link>

              {/* 2. About */}
              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isAboutActive
                    ? "bg-blue-50 text-[#0C59D4]"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>About</span>
                {isAboutActive && <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />}
              </Link>

              {/* 3. Worker */}
              <Link
                href="/worker"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isWorkerActive
                    ? "bg-blue-50 text-[#0C59D4]"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Worker</span>
                {isWorkerActive && <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />}
              </Link>

              {/* 4. Business (Accordion) */}
              <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("business")}
                  className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-sm text-slate-800 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
                >
                  <span className={isBusinessActive ? "text-[#0C59D4]" : ""}>Business</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileExpandedSection === "business" ? "rotate-180 text-[#0C59D4]" : ""
                    }`}
                  />
                </button>
                {mobileExpandedSection === "business" && (
                  <div className="p-2 bg-white border-t border-slate-100 flex flex-col">
                    <Link
                      href="/business#contractor"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 border-b border-slate-100 transition-colors"
                    >
                      <HardHat className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Contractor</span>
                    </Link>
                    <Link
                      href="/business#general-contractor"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 border-b border-slate-100 transition-colors"
                    >
                      <CrossedToolsIcon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>General Contractor</span>
                    </Link>
                    <Link
                      href="/business#builder-developer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 border-b border-slate-100 transition-colors"
                    >
                      <Building2 className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Builder &amp; Developer</span>
                    </Link>
                    <Link
                      href="/business#staffing-agency"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 transition-colors"
                    >
                      <Users className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Staffing &amp; Placement Agency</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* 5. Media (Accordion) */}
              <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("media")}
                  className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-sm text-slate-800 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
                >
                  <span className={isMediaActive ? "text-[#0C59D4]" : ""}>Media</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileExpandedSection === "media" ? "rotate-180 text-[#0C59D4]" : ""
                    }`}
                  />
                </button>
                {mobileExpandedSection === "media" && (
                  <div className="p-2 bg-white border-t border-slate-100 flex flex-col">
                    <Link
                      href="/awards-recognition"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 border-b border-slate-100 transition-colors"
                    >
                      <Trophy className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Awards &amp; Recognition</span>
                    </Link>
                    <Link
                      href="/partnerships"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 transition-colors"
                    >
                      <Handshake className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Partnership</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* 6. Contact Us */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isContactActive
                    ? "bg-blue-50 text-[#0C59D4]"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Contact Us</span>
                {isContactActive && <span className="w-2 h-2 rounded-full bg-[#0C59D4]" />}
              </Link>

              {/* 7. Resources (Accordion) */}
              <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("resources")}
                  className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-sm text-slate-800 bg-slate-50/70 hover:bg-blue-50/50 transition-colors"
                >
                  <span className={isResourcesActive ? "text-[#0C59D4]" : ""}>Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileExpandedSection === "resources" ? "rotate-180 text-[#0C59D4]" : ""
                    }`}
                  />
                </button>
                {mobileExpandedSection === "resources" && (
                  <div className="p-2 bg-white border-t border-slate-100 flex flex-col">
                    <Link
                      href="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 border-b border-slate-100 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Blogs</span>
                    </Link>
                    <Link
                      href="/careers"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-[#0C59D4] hover:bg-slate-50 transition-colors"
                    >
                      <Briefcase className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span>Career</span>
                    </Link>
                  </div>
                )}
              </div>

            </div>

            {/* Mobile Actions: CTA + Quick Contacts */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://onboarding.digitallabourchowk.com/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xs transition-all"
              >
                Get in Touch
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+917070999175"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-blue-50 hover:text-[#0C59D4] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0C59D4]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:info@digitallabourchowk.com"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-blue-50 hover:text-[#0C59D4] transition-colors"
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
        <div className="lg:hidden">
          <LanguageSwitcher variant="floating" />
        </div>
      )}
    </header>
  );
}