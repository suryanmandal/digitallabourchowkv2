"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export interface LanguageOption {
  code: string;
  label: string;
  nativeLabel: string;
  flag: string;
  popular?: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", flag: "", popular: true },
  { code: "bho", label: "Bhojpuri", nativeLabel: "भोजपुरी", flag: "", popular: true },
  { code: "mai", label: "Maithili", nativeLabel: "मैथिली", flag: "", popular: true },
  { code: "en", label: "English", nativeLabel: "English", flag: "", popular: true },
  { code: "bn", label: "Bengali", nativeLabel: "বাংলা", flag: "", popular: true },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी", flag: "", popular: true },
  { code: "pa", label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ", flag: "", popular: true },
  { code: "gu", label: "Gujarati", nativeLabel: "ગુજરાતી", flag: "" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు", flag: "" },
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்", flag: "" },
  { code: "or", label: "Odia", nativeLabel: "ଓଡ଼ିଆ", flag: "" },
  { code: "ur", label: "Urdu", nativeLabel: "اردو", flag: "" },
];

interface LanguageContextType {
  currentLang: string;
  isTranslating: boolean;
  setLanguage: (langCode: string) => void;
  supportedLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  isTranslating: false,
  setLanguage: () => {},
  supportedLanguages: SUPPORTED_LANGUAGES,
});

export const useLanguage = () => useContext(LanguageContext);

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const pathname = usePathname();

  // Helper to read active cookie
  const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  };

  // Helper to set cookie across paths and domain
  const setCookie = (name: string, value: string, days = 30) => {
    if (typeof document === "undefined") return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const domain = window.location.hostname;
    document.cookie = `${name}=${value}; expires=${expires}; path=/;`;
    if (domain.includes(".") && !domain.startsWith("localhost")) {
      const rootDomain = domain.split(".").slice(-2).join(".");
      document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${rootDomain};`;
    }
  };

  // Clear cookie helper
  const deleteCookie = (name: string) => {
    if (typeof document === "undefined") return;
    const domain = window.location.hostname;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    if (domain.includes(".") && !domain.startsWith("localhost")) {
      const rootDomain = domain.split(".").slice(-2).join(".");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${rootDomain};`;
    }
  };

  // Initialize on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect stored language from cookie or localStorage
    const savedCookie = getCookie("googtrans");
    const localSaved = localStorage.getItem("dlc_selected_lang");

    let initial = "en";
    if (savedCookie) {
      const match = savedCookie.match(/\/en\/([a-z]{2,3})/);
      if (match && match[1]) {
        initial = match[1];
      }
    } else if (localSaved) {
      initial = localSaved;
    }

    setCurrentLang(initial);

    // Setup global callback in case it hasn't fired yet
    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate?.TranslateElement && !document.querySelector(".goog-te-combo")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: SUPPORTED_LANGUAGES.map((l) => l.code).join(","),
              autoDisplay: false,
            },
            "google_translate_element"
          );
          setScriptLoaded(true);
        }
      } catch (err) {
        console.error("Google Translate init error:", err);
      }
    };

    // If script already loaded before useEffect
    if (window.google?.translate?.TranslateElement && !document.querySelector(".goog-te-combo")) {
      window.googleTranslateElementInit();
    }
  }, []);

  // Programmatic language change function
  const setLanguage = (langCode: string) => {
    setIsTranslating(true);
    setCurrentLang(langCode);
    localStorage.setItem("dlc_selected_lang", langCode);

    if (langCode === "en") {
      deleteCookie("googtrans");
      setCookie("googtrans", "/en/en");

      // Reloading cleanly clears Google Translate DOM mutations back to native English
      setTimeout(() => {
        setIsTranslating(false);
        window.location.reload();
      }, 150);
      return;
    }

    // Set cookie for target language (e.g., /en/hi)
    setCookie("googtrans", `/en/${langCode}`);

    // Trigger select dropdown using HTMLEvents for robust Google Translate Closure compatibility
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = langCode;
      try {
        const event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, true);
        select.dispatchEvent(event);
      } catch {
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
      setTimeout(() => {
        setIsTranslating(false);
      }, 500);
    } else {
      // If widget is not initialized in DOM yet, reload to let Google Translate read the cookie
      setTimeout(() => {
        setIsTranslating(false);
        window.location.reload();
      }, 200);
    }
  };

  // Maintain translation across client-side page routing
  useEffect(() => {
    if (currentLang && currentLang !== "en" && scriptLoaded) {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select && select.value !== currentLang) {
        select.value = currentLang;
        select.dispatchEvent(new Event("change"));
      }
    }
  }, [pathname, scriptLoaded, currentLang]);

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        isTranslating,
        setLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {/* Hidden container for Google Translate Widget element with natural layout offscreen */}
      <div
        id="google_translate_element"
        aria-hidden="true"
        className="fixed -top-[9999px] -left-[9999px] pointer-events-none opacity-0 z-[-1]"
      />

      {/* Pre-define the initialization callback before script execution */}
      <Script id="google-translate-init" strategy="beforeInteractive">
        {`
          window.googleTranslateElementInit = function() {
            try {
              if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'hi,bho,mai,en,bn,mr,pa,gu,te,ta,or,ur',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            } catch (e) {}
          };
        `}
      </Script>

      {/* Load Google Translate Element script asynchronously */}
      <Script
        id="google-translate-script"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true);
        }}
      />

      {children}
    </LanguageContext.Provider>
  );
}