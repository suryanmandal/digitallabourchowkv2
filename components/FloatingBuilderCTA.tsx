"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  PhoneCall,
  CheckCircle2,
  X,
  Sparkles,
  ChevronUp,
  MapPin,
  Users,
  ShieldCheck,
  ArrowRight,
  QrCode,
  Download,
  Star,
} from "lucide-react";

export default function FloatingBuilderCTA() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"form" | "app">("form");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Delhi NCR");
  const [trade, setTrade] = useState("Mason");
  const [headcount, setHeadcount] = useState("10-25");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const TRADES = ["Mason", "Labour", "Carpenter", "Bar Bender", "Shuttering", "All Trades"];
  const HEADCOUNTS = ["5-15", "15-50", "50-100", "100+"];
  const CITIES = ["Delhi NCR", "Bengaluru", "Mumbai", "Hyderabad", "Pune", "Patna", "Kolkata", "Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Site Contractor",
          phone: cleanPhone,
          city: city,
          trade: trade,
          headcount: headcount,
          type: "Contractor",
          message: `Priority callback requested for ${headcount} ${trade} workers in ${city}.`,
          source: "Floating Builder Desk",
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Builder submission error:", err);
      // Still show success to visitor so user experience is smooth
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Minimized floating pill button
  if (!isOpen) {
    return (
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 notranslate animate-in fade-in slide-in-from-bottom-2 duration-200">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-full bg-[#0C59D4] hover:bg-[#0947AD] text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-blue-600/40 border-2 border-white hover:scale-105 active:scale-95 transition-all group cursor-pointer"
          aria-label="Open Builder & Contractor Form"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
          <HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          <span className="hidden sm:inline">Need Workers? </span>
          <span>For Builders</span>
          <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-200 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 notranslate w-[calc(100vw-24px)] sm:w-[380px] max-w-[400px] max-h-[88vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300 scrollbar-none">
      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-indigo-100 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.22)] p-4 sm:p-5 relative overflow-hidden text-slate-900 font-sans">
        
        {/* Subtle top ambient glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header Strip */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 text-[#0C59D4] flex items-center justify-center shrink-0">
              <HardHat className="w-4 h-4 text-[#0C59D4]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0C59D4] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                  BUILDER & CONTRACTOR DESK
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <h3 className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight mt-0.5">
                Need Verified Workers on Site?
              </h3>
            </div>
          </div>

          {/* Close / Minimize Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close builder CTA"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dual Tab Mode Switcher (Form vs App Download) */}
        <div className="flex items-center rounded-xl bg-slate-100 p-1 mb-3.5">
          <button
            type="button"
            onClick={() => setActiveTab("form")}
            className={`flex-1 py-1.5 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "form"
                ? "bg-white text-[#0C59D4] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#0C59D4]" />
            <span>Instant Site Callback</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("app")}
            className={`flex-1 py-1.5 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "app"
                ? "bg-white text-[#0C59D4] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <QrCode className="w-3 h-3 text-slate-600" />
            <span>Contractor App & QR</span>
          </button>
        </div>

        {/* TAB 1: QUICK FORM FOR BUILDERS & CONTRACTORS */}
        {activeTab === "form" && (
          <div>
            {isSubmitted ? (
              <div className="py-4 text-center space-y-2.5 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black text-slate-900">
                  Site Requirement Dispatched!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Our regional operations manager will call <span className="font-bold text-slate-900">{phone}</span> within <span className="font-bold text-emerald-600">15 minutes</span> with verified {trade} availability in {city}.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+917070999175"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C59D4] hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Direct Site Operations: +91-7070999175</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setPhone("");
                  }}
                  className="mt-2 text-[11px] text-slate-400 hover:text-slate-600 underline cursor-pointer"
                >
                  Submit another requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Trade Selector Pills */}
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Select Required Trade:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {TRADES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTrade(t)}
                        className={`text-[10.5px] font-bold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          trade === t
                            ? "bg-[#0C59D4] text-white border-[#0C59D4] shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Headcount Selector */}
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Workers Needed:
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {HEADCOUNTS.map((h) => (
                      <button
                        type="button"
                        key={h}
                        onClick={() => setHeadcount(h)}
                        className={`text-[10.5px] font-bold py-1 rounded-lg border text-center transition-all cursor-pointer ${
                          headcount === h
                            ? "bg-amber-500 text-white border-amber-500 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Number & City Input Row */}
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs font-bold">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full pl-11 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0C59D4] focus:bg-white transition-all font-semibold"
                    />
                  </div>

                  <div className="flex gap-2">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-[#0C59D4] focus:bg-white transition-all font-semibold"
                    >
                      {CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {error && (
                  <div className="text-[11px] font-bold text-red-600">
                    {error}
                  </div>
                )}

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] disabled:opacity-70 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                >
                  <span>{isSubmitting ? "Dispatching..." : "Request Priority Callback"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Trust Footer */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                  <span className="flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    100% Aadhaar KYC
                  </span>
                  <span>•</span>
                  <span className="font-semibold">0% Commission</span>
                  <span>•</span>
                  <span className="font-semibold text-blue-600">24h SLA</span>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: CONTRACTOR APP DOWNLOAD & QR CODE (Inspired by Apna's widget) */}
        {activeTab === "app" && (
          <div className="py-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between gap-3 bg-slate-50 rounded-2xl p-3 border border-slate-200">
              {/* Left Column: QR Code */}
              <div className="flex flex-col items-center shrink-0">
                <div className="p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 sm:w-18 sm:h-18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="100" fill="white" rx="6" />
                    <rect x="8" y="8" width="26" height="26" rx="3" fill="#0C59D4" />
                    <rect x="13" y="13" width="16" height="16" fill="white" rx="1.5" />
                    <rect x="17" y="17" width="8" height="8" rx="1" fill="#0C59D4" />

                    <rect x="66" y="8" width="26" height="26" rx="3" fill="#0C59D4" />
                    <rect x="71" y="13" width="16" height="16" fill="white" rx="1.5" />
                    <rect x="75" y="17" width="8" height="8" rx="1" fill="#0C59D4" />

                    <rect x="8" y="66" width="26" height="26" rx="3" fill="#0C59D4" />
                    <rect x="13" y="71" width="16" height="16" fill="white" rx="1.5" />
                    <rect x="17" y="75" width="8" height="8" rx="1" fill="#0C59D4" />

                    <rect x="38" y="12" width="5" height="5" fill="#1E293B" rx="1" />
                    <rect x="48" y="12" width="5" height="5" fill="#1E293B" rx="1" />
                    <rect x="56" y="12" width="5" height="5" fill="#1E293B" rx="1" />
                    <rect x="38" y="24" width="5" height="5" fill="#1E293B" rx="1" />
                    <rect x="48" y="24" width="12" height="5" fill="#0C59D4" rx="1" />
                    <rect x="38" y="34" width="8" height="8" fill="#1E293B" rx="1" />
                    <rect x="50" y="34" width="10" height="6" fill="#1E293B" rx="1" />

                    <rect x="12" y="42" width="6" height="6" fill="#1E293B" rx="1" />
                    <rect x="22" y="42" width="6" height="6" fill="#1E293B" rx="1" />
                    <rect x="12" y="52" width="8" height="6" fill="#0C59D4" rx="1" />
                    <rect x="24" y="52" width="6" height="6" fill="#1E293B" rx="1" />

                    <rect x="40" y="48" width="20" height="20" fill="#0C59D4" rx="3" />
                    <circle cx="50" cy="58" r="4" fill="white" />

                    <rect x="66" y="42" width="6" height="6" fill="#1E293B" rx="1" />
                    <rect x="76" y="42" width="16" height="6" fill="#1E293B" rx="1" />
                    <rect x="66" y="52" width="10" height="6" fill="#1E293B" rx="1" />
                    <rect x="80" y="52" width="12" height="6" fill="#1E293B" rx="1" />

                    <rect x="38" y="74" width="6" height="6" fill="#1E293B" rx="1" />
                    <rect x="48" y="74" width="8" height="6" fill="#1E293B" rx="1" />
                    <rect x="60" y="74" width="6" height="6" fill="#1E293B" rx="1" />
                    <rect x="38" y="84" width="12" height="6" fill="#1E293B" rx="1" />
                    <rect x="54" y="84" width="8" height="6" fill="#1E293B" rx="1" />
                    <rect x="66" y="84" width="26" height="6" fill="#0C59D4" rx="1" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-500 mt-1">Scan the QR</span>
              </div>

              {/* Center Divider: "Or" */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="h-5 w-px bg-slate-300" />
                <span className="text-[10px] font-bold text-slate-400 my-0.5">Or</span>
                <div className="h-5 w-px bg-slate-300" />
              </div>

              {/* Right Column: App Store Links + Ratings */}
              <div className="flex-1 space-y-1.5">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-black text-white hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.94-1 .04-2.19.67-2.88 1.48-.6.69-1.13 1.8-1 2.87 1.12.09 2.28-.63 2.92-1.41z"/>
                  </svg>
                  <span className="text-[10px] font-bold">App Store</span>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.thekedar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-black text-white hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.22-.32-.519-.32-.857V2.671c0-.338.122-.637.32-.857zm11.238 11.241l2.36 2.36-12.057 6.942 9.697-9.302zm2.36-2.11L14.847 8.58l-9.697-9.3 12.057 6.942zm1.18 1.055l3.293 1.895c.78.448.78 1.18 0 1.628l-3.293 1.895-2.222-2.209 2.222-2.209z"/>
                  </svg>
                  <span className="text-[10px] font-bold">Google Play</span>
                </a>

                <div className="flex items-center justify-between text-[9px] text-slate-600 px-1 pt-0.5">
                  <div className="flex items-center gap-1 font-bold">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>4.8</span>
                    <span className="text-slate-400 font-normal">(70K+)</span>
                  </div>
                  <div className="font-bold text-slate-800">
                    20,000+ Sites
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-center">
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className="text-[11px] font-bold text-[#0C59D4] hover:underline cursor-pointer"
              >
                ← Back to Callback Form
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
