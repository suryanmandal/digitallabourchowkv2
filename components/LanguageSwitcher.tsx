"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, Languages, ChevronDown, Check, Sparkles, Loader2 } from "lucide-react";
import { useLanguage, SUPPORTED_LANGUAGES, LanguageOption } from "./GoogleTranslateProvider";

interface LanguageSwitcherProps {
  variant?: "topbar" | "navbar" | "mobile" | "floating";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "navbar",
  className = "",
}: LanguageSwitcherProps) {
  const { currentLang, isTranslating, setLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentOption =
    supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  // ---------------------------------------------------------------------------
  // VARIANT 1: TOPBAR (Only English & Hindi visible, all languages in dropdown)
  // ---------------------------------------------------------------------------
  if (variant === "topbar") {
    return (
      <div className={`relative flex items-center gap-1.5 notranslate ${className}`} ref={dropdownRef}>
        {/* Direct One-Click Toggle: Strictly English & Hindi Visible */}
        <div className="inline-flex items-center rounded-md bg-slate-200/70 p-0.5 text-[11px] font-bold">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-2 py-0.5 rounded transition-all ${
              currentLang === "en"
                ? "bg-[#0C59D4] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
            title="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("hi")}
            className={`px-2 py-0.5 rounded transition-all ${
              currentLang === "hi"
                ? "bg-[#0C59D4] text-white shadow-xs"
                : "text-slate-700 hover:text-[#0C59D4]"
            }`}
            title="Switch to Hindi (हिन्दी)"
          >
            हिन्दी
          </button>
        </div>

        {/* Dropdown Menu Trigger for All Languages */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Select language from dropdown menu"
          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] text-slate-600 hover:text-[#0C59D4] hover:bg-slate-200/50 transition-colors font-medium"
        >
          <Languages className="w-3.5 h-3.5 text-[#0C59D4]" />
          <span className="hidden sm:inline">
            {currentLang !== "en" && currentLang !== "hi" ? currentOption.nativeLabel : "Other Languages"}
          </span>
          <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu Containing All Languages */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-1.5 w-60 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
              <span>All Languages / सभी भाषाएं</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </div>
            <div className="max-h-64 overflow-y-auto py-1">
              {supportedLanguages.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left ${
                      isActive
                        ? "bg-blue-50 text-[#0C59D4] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <div>
                        <div className="font-semibold text-xs leading-none">{lang.nativeLabel}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{lang.label}</div>
                      </div>
                    </div>
                    {isActive && <Check className="w-3.5 h-3.5 text-[#0C59D4]" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // VARIANT 2: NAVBAR (Desktop Main Navigation Bar Pill)
  // ---------------------------------------------------------------------------
  if (variant === "navbar") {
    return (
      <div className={`relative notranslate ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Select language"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/80 hover:bg-blue-50 hover:border-blue-300 text-slate-700 hover:text-[#0C59D4] transition-all text-xs font-semibold shadow-xs"
        >
          {isTranslating ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0C59D4]" />
          ) : (
            <Globe className="w-3.5 h-3.5 text-[#0C59D4]" />
          )}
          <span>{currentOption.nativeLabel}</span>
          <ChevronDown
            className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="px-2 py-1 mb-1 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
              <span>Select Language / भाषा चुनें</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </div>

            <div className="grid grid-cols-2 gap-1 max-h-72 overflow-y-auto p-1">
              {supportedLanguages.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all ${
                      isActive
                        ? "bg-[#0C59D4] text-white font-bold shadow-xs"
                        : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <div>
                      <div className="text-xs leading-tight">{lang.nativeLabel}</div>
                      <div
                        className={`text-[10px] ${
                          isActive ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {lang.label}
                      </div>
                    </div>
                    {isActive && <Check className="w-3 h-3 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // VARIANT 3: MOBILE (High-contrast, Large Touch Targets for Workers)
  // ---------------------------------------------------------------------------
  if (variant === "mobile") {
    return (
      <div className={`w-full notranslate bg-slate-50 rounded-2xl p-4 border border-slate-200/90 shadow-xs ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wider">
            <Globe className="w-4 h-4 text-[#0C59D4]" />
            <span>अपनी भाषा चुनें / Choose Language</span>
          </div>
          {isTranslating && (
            <span className="flex items-center gap-1 text-[11px] text-[#0C59D4] font-semibold animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" />
              बदल रहा है...
            </span>
          )}
        </div>

        {/* Primary High-Priority Buttons (Strictly Hindi & English) */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {/* Hindi */}
          <button
            type="button"
            onClick={() => setLanguage("hi")}
            className={`p-3 rounded-xl flex items-center justify-between transition-all active:scale-95 ${
              currentLang === "hi"
                ? "bg-[#0C59D4] text-white font-black shadow-md ring-2 ring-blue-300"
                : "bg-white text-slate-800 font-bold border border-slate-300 hover:border-[#0C59D4]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🇮🇳</span>
              <div className="text-left">
                <div className="text-sm">हिन्दी</div>
                <div className={`text-[10px] ${currentLang === "hi" ? "text-blue-100" : "text-slate-400"}`}>
                  Hindi
                </div>
              </div>
            </div>
            {currentLang === "hi" && <Check className="w-4 h-4 text-white" />}
          </button>

          {/* English */}
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`p-3 rounded-xl flex items-center justify-between transition-all active:scale-95 ${
              currentLang === "en"
                ? "bg-[#0C59D4] text-white font-black shadow-md ring-2 ring-blue-300"
                : "bg-white text-slate-800 font-bold border border-slate-300 hover:border-[#0C59D4]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🌐</span>
              <div className="text-left">
                <div className="text-sm">English</div>
                <div className={`text-[10px] ${currentLang === "en" ? "text-blue-100" : "text-slate-400"}`}>
                  English
                </div>
              </div>
            </div>
            {currentLang === "en" && <Check className="w-4 h-4 text-white" />}
          </button>
        </div>

        {/* All Other Regional Languages Grid (Bhojpuri, Maithili, etc.) */}
        <div className="text-[11px] font-bold text-slate-500 mb-2">अन्य क्षेत्रीय भाषाएं / Other Regional Languages:</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {supportedLanguages
            .filter((l) => l.code !== "hi" && l.code !== "en")
            .map((lang) => {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`p-2.5 rounded-xl text-left flex items-center justify-between transition-all text-xs active:scale-95 ${
                    isActive
                      ? "bg-[#0C59D4] text-white font-bold shadow-xs"
                      : "bg-white text-slate-700 hover:bg-blue-50/60 border border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-sm">{lang.flag}</span>
                    <div className="truncate">
                      <div className="text-xs font-bold leading-tight truncate">{lang.nativeLabel}</div>
                      <div className={`text-[9px] mt-0.5 truncate ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                        {lang.label}
                      </div>
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                </button>
              );
            })}
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // VARIANT 4: FLOATING (Corner pill on mobile for quick access)
  // ---------------------------------------------------------------------------
  return (
    <div className={`fixed bottom-5 right-5 z-40 notranslate ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0C59D4] text-white font-bold text-xs shadow-xl hover:bg-[#0947AD] active:scale-95 transition-all border-2 border-white"
      >
        <Globe className="w-4 h-4" />
        <span>{currentOption.nativeLabel}</span>
        <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">भाषा</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="px-2 py-1.5 border-b border-slate-100 text-[11px] font-black uppercase tracking-wider text-slate-500">
            Select Language / भाषा चुनें
          </div>
          <div className="max-h-60 overflow-y-auto py-1 space-y-1">
            {supportedLanguages.map((lang) => {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                    isActive
                      ? "bg-[#0C59D4] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <div className="text-left">
                      <div className="font-semibold text-xs leading-none">{lang.nativeLabel}</div>
                      <div className={`text-[10px] mt-0.5 ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                        {lang.label}
                      </div>
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}