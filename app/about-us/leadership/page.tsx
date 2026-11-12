"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Users,
  Quote,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Linkedin,
  Mail,
  Award,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";

export default function LeadershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".leader-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: "Chandrashekhar Mandal",
      role: "Founder & Chief Executive Officer",
      bio: "Tech entrepreneur with deep roots in rural Bihar. Founded Digital Labour Chowk during the COVID-19 lockdown to eliminate physical middleman exploitation in construction labor. Featured on 'Bharat Ke Super Founders' (Amazon MX Player) and recipient of the Hitachi National Innovation Award.",
      badge: "Founder",
      isFounder: true,
    },
    {
      name: "Site Operations Leadership",
      role: "Field Mobilization & Dispatch",
      bio: "Directing 15+ city dispatch centers across Delhi NCR, Patna, Bengaluru, Mumbai, and Hyderabad. Ensuring 2-hour SLA mobilization, biometric onboarding, and physical site safety compliance.",
      badge: "Operations",
      isFounder: false,
    },
    {
      name: "Advisory Council & CIMPS Mentors",
      role: "Strategic Governance & Institutional Alliances",
      bio: "Senior industry mentors from CIMPS, STPI, and infrastructure EPC veterans guiding regulatory compliance, BOCW welfare integration, and investor relations.",
      badge: "Advisory",
      isFounder: false,
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900" ref={containerRef}>
      
      {/* ========================================================================= */}
      {/* HERO HEADER                                                               */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-white to-slate-50 pt-12 pb-16 lg:pt-20 lg:pb-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-[#0C59D4] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/about-us" className="hover:text-[#0C59D4] transition-colors">About Us</Link>
            <span>/</span>
            <span className="text-[#0C59D4]">Leadership</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Visionary Team</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Leadership Driving <span className="text-[#0C59D4]">Socio-Economic Disruption</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Meet the founders, ground operations directors, and institutional mentors committed to 
              organizing India&apos;s daily-wage construction industry through technology and human empathy.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOUNDER SPOTLIGHT SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Founder Feature Banner */}
        <div className="leader-card bg-gradient-to-br from-[#0C59D4] to-[#0947AD] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="max-w-3xl relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder & Chief Executive Officer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Mr. Chandrashekhar Mandal
            </h2>

            {/* Official Quote from Legacy Site */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/40 my-6">
              <Quote className="w-8 h-8 text-blue-200 opacity-60 absolute -top-4 -left-2 sm:-left-3" />
              <p className="text-lg sm:text-xl font-medium leading-relaxed italic text-blue-50">
                &ldquo;In a country where millions of skilled workers wait under the sun for job opportunities, 
                technology should be a bridge — not a barrier. Digital Labour Chowk is that bridge. 
                Every job provided, every contractor matched, every family supported — that is our achievement.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed mb-6">
              Recognized as a Bharat Ke Super Founder on Amazon MX Player, Chandrashekhar has spearheaded 
              the transition of 3,50,000+ daily wage workers from physical street corners to direct digital placement, 
              securing institutional endorsements from Hitachi India, Startup India, and NAREDCO.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/20">
              <span className="text-xs font-semibold text-blue-200">
                Recipient: Hitachi National Innovation Challenge Winner & MSME Impact Champion
              </span>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* TEAM & OPERATIONAL EXCELLENCE                                             */}
        {/* ========================================================================= */}
        <div className="mb-10">
          <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
            Organizational Structure
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Operational Rigour & Institutional Governance
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="leader-card bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase">
                Field Operations Division
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                City Dispatch & Biometric Teams
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                DLC operates physical field teams across 15+ hubs including Delhi NCR, Patna, Bengaluru, 
                Mumbai, and Hyderabad. Our field coordinators conduct trade verification, verify Aadhaar accounts for DBT, 
                and assist site engineers with geo-fenced attendance devices.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ground Presence in 15+ Megacities</span>
            </div>
          </div>

          <div className="leader-card bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase">
                Advisory & Institutional Mentors
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                CIMPS, STPI & Infrastructure EPCs
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Supported by senior advisors from the Centre for Innovation in Management and Public Systems (CIMPS), 
                Software Technology Parks of India (STPI Noida), and veteran project heads from major EPC companies, 
                ensuring institutional compliance, governance, and long-term scalability.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0C59D4]" />
              <span>Institutional Policy & Governance Alignment</span>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about-us/values"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Core Values
          </Link>

          <Link
            href="/awards-recognition"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Awards & Recognitions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
