"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Download,
  Phone,
  HardHat,
  BadgePercent,
  CreditCard,
  HeartPulse,
  Smartphone,
  Star,
  Users,
} from "lucide-react";

export default function WorkerPage() {
  const benefits = [
    {
      icon: <BadgePercent className="w-6 h-6 text-emerald-600" />,
      title: "Zero Commission Policy",
      description: "Workers keep 100% of their daily earnings. No agent cut, no middleman deductions.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Direct Bank Transfer (DBT)",
      description: "Daily and weekly wage settlements transferred directly into your verified bank account.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
      title: "₹5 Lakhs Insurance Cover",
      description: "Comprehensive accidental insurance coverage on every DLC registered job site.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "Digital Trade ID & Rating",
      description: "Government-aligned skill recognition that increases your daily wage rate and credibility.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#071329] via-[#0C59D4] to-[#0A47AD] text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs sm:text-sm font-semibold mb-4 border border-white/10">
              <HardHat className="w-4 h-4 text-amber-400" />
              <span>For Construction Workers & Craftsmen</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Aaj Ka Rozgar, <br />
              <span className="text-amber-300">Pura Haq, Zero Commission</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              Connect directly with verified contractors across India. Transparent daily wages, instant job bookings, and social security benefits right on your phone.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-transform active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Download DLC Worker App</span>
              </a>
              <a
                href="tel:18002020991"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Worker Helpline: 1800-202-0991</span>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-72 sm:w-80 h-96 rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-200 font-bold">DLC Shramik Saathi</span>
                <h3 className="text-xl font-bold text-white mt-1">Digital Trade Card</h3>
                <div className="mt-4 p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-900 font-black flex items-center justify-center text-lg">
                    ML
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Mohan Lal</h4>
                    <p className="text-xs text-blue-200">Master Mason • Grade A</p>
                    <div className="flex items-center gap-1 text-amber-300 text-xs mt-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>4.9 (142 Jobs)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-blue-100">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>Wage Assurance</span>
                  <span className="font-bold text-emerald-300">100% Guaranteed</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>Accidental Insurance</span>
                  <span className="font-bold text-white">Active (₹5,00,000)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Platform Fee</span>
                  <span className="font-bold text-amber-300">₹0 (Zero Cut)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Over 3.5 Lakh Workers Trust Digital Labour Chowk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Eliminating physical labour chowk uncertainty with dignified, transparent, and direct job opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                {b.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{b.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}