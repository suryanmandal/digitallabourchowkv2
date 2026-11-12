import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  Users,
  Briefcase,
  AlertTriangle,
  ChevronRight,
  Gavel,
  CheckCircle2,
} from "lucide-react";
import LegalNav from "@/components/LegalNav";

export const metadata = {
  title: "Terms and Conditions | Digital Labour Chowk",
  description:
    "Official Terms of Use and Master Service Agreement for Gaudrika Digital Labour Chowk (OPC) Private Limited.",
};

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "acceptance", label: "A. Acceptance of Terms" },
    { id: "accessibility", label: "B. License & Eligibility" },
    { id: "conduct", label: "C. Member Conduct" },
    { id: "providers", label: "D. Rules for Service Providers" },
    { id: "seekers", label: "E. Rules for Service Seekers" },
    { id: "content", label: "F. Submitted Content" },
    { id: "ip", label: "G. Intellectual Property" },
    { id: "taxation", label: "H. Taxation & Invoicing" },
    { id: "disputes", label: "I. Dispute Resolution" },
    { id: "liability", label: "J. Limitation of Liability" },
    { id: "general", label: "K. General Provisions" },
  ];

  return (
    <div className="bg-slate-50/60 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#0C59D4] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-400">Legal & Compliance</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Terms and Conditions</span>
        </nav>

        {/* Page Hero Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0C59D4] flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase block">
                  Master User Agreement
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Terms and Conditions of Use
                </h1>
              </div>
            </div>
            <div className="text-xs text-slate-500 text-left sm:text-right">
              <div>Entity: <span className="font-semibold text-slate-800">Gaudrika Digital Labour Chowk (OPC) Pvt Ltd</span></div>
              <div>Jurisdiction: <span className="font-semibold text-slate-800">New Delhi / Darbhanga, India</span></div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            PLEASE READ THESE TERMS OF USE THOROUGHLY AND CAREFULLY. These terms and conditions along with our Privacy Policy constitute a legally binding agreement between <strong>Gaudrika Digital Labour Chowk (OPC) Private Limited</strong> (“DLC”, “we”, “our”, or “us”) and you.
          </p>

          {/* Quick Section Pills */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 sm:gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0C59D4] border border-slate-200/80 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Legal Sections */}
          <div className="flex-1 w-full space-y-8 text-slate-700">

            {/* A. Acceptance */}
            <section id="acceptance" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                A. Acceptance of Terms & Digital Platform Scope
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  These Terms of Use contain provisions defining your legal rights, limits, and obligations when accessing or participating in the Digital Labour Chowk platform, including website domains (www.digitallabourchowk.com), mobile apps (DLC Rojgar, DLC Business, DLC Partner), digital muster rolls, job boards, classifieds, and matching algorithms.
                </p>
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  <strong>CRITICAL AGE & CAPACITY CLAUSE:</strong> YOU SPECIFICALLY AGREE THAT BY USING THIS WEBSITE OR OUR APPS, YOU ARE AT LEAST 18 YEARS OF AGE AND FULLY COMPETENT UNDER THE INDIAN CONTRACT ACT, 1872 TO ENTER INTO A LEGALLY BINDING AGREEMENT.
                </div>
                <p>
                  You acknowledge that DLC serves as a <strong>digital marketplace and technology venue</strong> facilitating the discovery, skill rating, and muster management between independent Service Professionals (masons, carpenters, helpers, etc.) and Service Seekers (builders, EPCs, individual homeowners). DLC is not an employer or labour contractor, except where explicitly stated under specialized corporate turnkey contracts.
                </p>
              </div>
            </section>

            {/* B. Accessibility & Eligibility */}
            <section id="accessibility" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                B. License to Access & Prohibited Activities
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  DLC hereby grants you a limited, non-exclusive, revocable license to access and make personal or business use of the platform in strict accordance with these Terms. You agree that you will not:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Use automated bots, spiders, crawlers, or scrapers to extract worker directories, mobile phone numbers, or rate cards;</li>
                  <li>Transmit requests that overload or burden DLC servers, databases, or API infrastructure;</li>
                  <li>Recruit, solicit, or contact DLC registered mistris or helpers for external unregistered contracting aimed at bypassing platform guarantees;</li>
                  <li>Collect or harvest any personally identifiable information (Aadhaar data, bank IFSC details, or residential addresses) of users without consent;</li>
                  <li>Modify, reverse-engineer, decompile, or create derivative works of any part of our mobile applications.</li>
                </ul>
              </div>
            </section>

            {/* C. Member Conduct */}
            <section id="conduct" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                C. Member Conduct & Content Standards
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  You agree to conduct all on-site and in-app communications with professional dignity. You shall not upload, post, or transmit any content or review that is defamatory, abusive, racially or ethnically discriminatory, obscene, or infringing upon third-party intellectual property or privacy rights.
                </p>
                <p>
                  DLC reserves the right to suspend or permanently terminate accounts found manipulating rating systems, falsifying muster roll hours, or engaging in unsafe site practices.
                </p>
              </div>
            </section>

            {/* D. Rules for Service Providers */}
            <section id="providers" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#0C59D4]" />
                <h2 className="text-lg font-bold text-slate-900">
                  D. Rules for Service Providers (Mistris, Workers & Tradespeople)
                </h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Service Providers registered on DLC agree to the following operational standards:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      1. Accurate Trade Credentials
                    </span>
                    <p className="text-xs text-slate-600">
                      Accurately state trade competencies, years of construction experience, and prior project certifications.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      2. Punctuality & Site Safety
                    </span>
                    <p className="text-xs text-slate-600">
                      Report to confirmed sites at designated shift timings (standard 8:30 AM / 9:00 AM) and adhere to mandated safety PPE.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      3. Digital Attendance Verification
                    </span>
                    <p className="text-xs text-slate-600">
                      Mark daily arrival and departure via the DLC Worker App biometric or geo-tagged QR scan to validate wage payouts.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      4. Direct DBT Settlement
                    </span>
                    <p className="text-xs text-slate-600">
                      Receive 100% daily or weekly wages directly in your Aadhaar-linked bank account without middleman wage theft.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* E. Rules for Service Seekers */}
            <section id="seekers" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-[#0C59D4]" />
                <h2 className="text-lg font-bold text-slate-900">
                  E. Rules for Service Seekers (Builders, Contractors & Clients)
                </h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Contractors, builders, and individuals booking labor via DLC agree to:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li><strong>Accurate Site Directions:</strong> Provide precise geo-location pins, site contact numbers, and landmark details for arriving labor squads.</li>
                  <li><strong>Safe Workplace & Amenities:</strong> Ensure working conditions comply with the Building and Other Construction Workers (BOCW) Act, including provision of potable drinking water, first-aid kits, and clean sanitary facilities.</li>
                  <li><strong>Prompt Attendance Sign-Off:</strong> Approve daily digital muster rolls promptly to facilitate same-day or weekly DBT wage release.</li>
                  <li><strong>Zero Harassment Policy:</strong> Maintain strict anti-harassment standards and treat every tradesperson with human dignity.</li>
                </ul>
              </div>
            </section>

            {/* F. Intellectual Property */}
            <section id="ip" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                F. Intellectual Property & Brand Rights
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  All trademarks, service marks, platform designs, code, user interfaces, wage calculation indexes, and database compilations associated with “Digital Labour Chowk” and “DLC” are the proprietary property of <strong>Gaudrika Digital Labour Chowk (OPC) Private Limited</strong>.
                </p>
                <p>
                  You are prohibited from copying, distributing, mirroring, or reverse-engineering DLC software or using the DLC name or logo without express written authorization.
                </p>
              </div>
            </section>

            {/* G. Taxation */}
            <section id="taxation" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                G. Taxation & Statutory Invoicing
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  All B2B service invoices issued to registered contractors include applicable Goods & Services Tax (GST) as mandated by the Government of India. Service seekers are responsible for deducting statutory TDS (under applicable sections of the Income Tax Act) where applicable for corporate turnkey assignments and furnishing valid Form 16A certificates.
                </p>
              </div>
            </section>

            {/* H. Dispute Resolution */}
            <section id="disputes" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <Gavel className="w-5 h-5 text-[#0C59D4]" />
                <h2 className="text-lg font-bold text-slate-900">
                  H. Governing Law & Dispute Resolution
                </h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  These Terms shall be interpreted and governed in all respects in accordance with the substantive laws of the Republic of India.
                </p>
                <p>
                  Any dispute, controversy, or claim arising out of or relating to these Terms or platform usage shall be referred to arbitration under the <strong>Arbitration and Conciliation Act, 1996</strong> before a sole arbitrator appointed mutually by the parties.
                </p>
                <p>
                  Subject to arbitration, the courts located in <strong>Darbhanga (Bihar)</strong> or <strong>New Delhi / Gautam Buddha Nagar (Noida, U.P.)</strong> shall possess exclusive territorial jurisdiction.
                </p>
              </div>
            </section>

            {/* I. Limitation of Liability */}
            <section id="liability" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                I. Limitation of Platform Liability
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  In no event shall DLC, its directors, investors, or personnel be liable for any indirect, incidental, special, punitive, or consequential damages resulting from lost profits, project slowdowns, work stoppages, or personal injury occurring on client project sites.
                </p>
                <p>
                  DLC’s aggregate liability under any contract claim shall not exceed the total platform service fee paid by the claimant for the specific booking giving rise to the dispute.
                </p>
              </div>
            </section>

            {/* J. Contact & Notice */}
            <section id="general" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs scroll-mt-24">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                J. Official Notice & Grievance Officer
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Official legal notices under these Terms must be delivered in writing to our registered corporate office or via certified email:
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                  <div><strong>Attn:</strong> Legal & Grievance Department</div>
                  <div><strong>Entity:</strong> Gaudrika Digital Labour Chowk (OPC) Private Limited</div>
                  <div><strong>Address:</strong> 1st Floor, Software Technology Park of India, Sector 29, Noida - 201301 (U.P.)</div>
                  <div><strong>Email:</strong> <a href="mailto:info@digitallabourchowk.com" className="text-[#0C59D4] underline font-semibold">info@digitallabourchowk.com</a></div>
                </div>
              </div>
            </section>

          </div>

          {/* Persistent Sidebar */}
          <LegalNav />
        </div>
      </div>
    </div>
  );
}