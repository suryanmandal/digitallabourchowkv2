"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Shield,
  Clock,
  RefreshCw,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function LegalNav() {
  const pathname = usePathname();

  const legalLinks = [
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
      icon: FileText,
      desc: "User agreement, terms of use & service standards",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: Shield,
      desc: "Data collection, Aadhaar DBT security & rights",
    },
    {
      name: "Cancellation Policy",
      href: "/cancellation-policy",
      icon: Clock,
      desc: "Grace period, cancellation windows & charges",
    },
    {
      name: "Refund Policy",
      href: "/refund-policy",
      icon: RefreshCw,
      desc: "Consumer Protection Act 2019 & refund matrix",
    },
    {
      name: "Disclaimer",
      href: "/disclaimer",
      icon: AlertCircle,
      desc: "No warranties, fair use & liability limitations",
    },
  ];

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">
      {/* 1. Legal Documents Switcher */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4">
        <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase px-2 mb-3 block">
          Legal Documents
        </span>

        <nav className="flex flex-col space-y-1">
          {legalLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-50/80 text-[#0C59D4] font-bold border border-blue-200/60 shadow-xs"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive
                      ? "bg-[#0C59D4] text-white"
                      : "bg-slate-100 text-slate-500 group-hover:text-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal leading-tight line-clamp-1 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 2. Official Corporate Registry Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 text-xs text-slate-600">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 text-[#0C59D4] font-bold">
          <Building2 className="w-4 h-4" />
          <span>Entity Details</span>
        </div>

        <p className="font-bold text-slate-900 text-xs mb-1">
          Gaudrika Digital Labour Chowk (OPC) Private Limited
        </p>
        <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
          Incorporated under the Ministry of Corporate Affairs (MCA), Government of India.
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-100 text-[11px]">
          <div>
            <span className="font-semibold text-slate-700 block">Corporate Office:</span>
            <span>1st Floor, STPI, Sector 29, Noida - 201301 (U.P.)</span>
          </div>
          <div>
            <span className="font-semibold text-slate-700 block">Registered Office:</span>
            <span>197, Ami, Nainaghat, Darbhanga - 847115 (Bihar)</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-[11px]">
          <a
            href="mailto:info@digitallabourchowk.com"
            className="flex items-center gap-1.5 text-[#0C59D4] hover:underline font-semibold"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@digitallabourchowk.com</span>
          </a>
          <a
            href="tel:+919654007500"
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0C59D4] font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>+91 9654007500</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
