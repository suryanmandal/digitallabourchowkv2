import React from "react";
import Link from "next/link";
import {
  AlertCircle,
  ShieldAlert,
  Scale,
  FileCheck2,
  ExternalLink,
  DollarSign,
  Award,
  ChevronRight,
  Info,
} from "lucide-react";
import LegalNav from "@/components/LegalNav";

export const metadata = {
  title: "Disclaimer & Legal Notice | Digital Labour Chowk",
  description:
    "Official legal disclaimer, limitation of liability, no-warranties, and fair-use provisions for Digital Labour Chowk.",
};

export default function DisclaimerPage() {
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
          <span className="text-slate-800 font-semibold">Disclaimer</span>
        </nav>

        {/* Page Hero Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0C59D4] flex items-center justify-center font-bold">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase block">
                  Legal Notice & Declarations
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Website & Service Disclaimer
                </h1>
              </div>
            </div>
            <div className="text-xs text-slate-500 text-left sm:text-right">
              <div>Entity: <span className="font-semibold text-slate-800">Gaudrika Digital Labour Chowk (OPC) Pvt Ltd</span></div>
              <div>Application: <span className="font-semibold text-slate-800">Web, Mobile Apps & Services</span></div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            Please read this Disclaimer thoroughly. By accessing or using our website (digitallabourchowk.com) and associated mobile applications (Digital Labour Chowk Rojgar, Business, Partner), you accept and agree to be bound by the notices, limitations, and releases set forth below.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Content */}
          <div className="flex-1 w-full space-y-8 text-slate-700">

            {/* 1. General Information */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                1. General Information & Non-Advisory Nature
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Digital Labour Chowk (“DLC”, “Company”, “we”, or “us”) provides general educational, operational, and commercial information on various construction and workforce topics on this website as a public and industry service. <strong>This content must not be construed as professional, financial, architectural, structural, tax, or legal advice.</strong>
                </p>
                <p>
                  The term “you” refers to any individual, business entity, contractor, builder, or visitor who views, accesses, or registers on the website and mobile applications. We reserve the right to modify this Disclaimer at any time without prior individual notice. Your continued use of our platform constitutes irrevocable acceptance of updated terms.
                </p>
              </div>
            </section>

            {/* 2. Professional & Legal Disclaimer */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                2. Legal & Professional Advisory Disclaimer
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  DLC is a digital technology platform and muster facilitation provider; <strong>we are not a law firm or licensed legal practitioner</strong>. Nothing published on our site, blogs, rate cards, or guides constitutes formal legal counsel or statutory guarantee.
                </p>
                <p>
                  Although we strive to publish accurate, current data regarding labour rates, state minimum wage notices, and safety practices, the information may not always reflect rapid statutory amendments or hyper-local union conventions. You should always consult qualified attorneys, certified civil engineers, or tax chartered accountants for your specific construction and compliance decisions.
                </p>
              </div>
            </section>

            {/* 3. Affiliate Links & Third-Party Partnerships */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                3. Affiliate Links & Third-Party Integrations
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  We may collaborate with authorized equipment rental companies, insurance providers, financial technology platforms, or safety equipment manufacturers whose services are showcased on DLC. When you purchase or sign up through affiliate links or integrated buttons, DLC may receive a standard referral commission or marketing fee at <strong>no additional cost to you</strong>.
                </p>
                <p>
                  These relationships in no way compromise our editorial integrity. DLC exercises no managerial control over external third-party sites, portals, or providers, and cannot be held liable for third-party performance, contract breaches, or damages arising from external services.
                </p>
              </div>
            </section>

            {/* 4. Earnings & Testimonials */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                4. Earnings, Daily Wages & Testimonials
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Any case studies, worker testimonials, contractor cost savings, or daily wage figures presented across the DLC website represent <strong>real-world historical outcomes</strong> but do not constitute a promise or guarantee of identical future results.
                </p>
                <p>
                  Worker earnings vary depending on individual trade skill proficiency, biometric attendance, active site hours, overtime, seasonal weather disruptions, and local market demand. Similarly, builder operational savings are subject to site-specific logistics and management efficiency.
                </p>
              </div>
            </section>

            {/* 5. Fair Use & Intellectual Property */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                5. Fair Use & Content Attribution
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  DLC reviews, cites, and features excerpts from government gazettes, news publications, and industry journals. All third-party trademarks, logos, and service marks mentioned belong to their respective owners and are referenced under <strong>Fair Dealing / Fair Use</strong> principles for identification, educational context, and news reporting.
                </p>
              </div>
            </section>

            {/* 6. No Warranties & "As-Is" Platform */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                6. Disclaimer of Warranties (“As-Is” Basis)
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  The platform, its mobile apps, worker listings, digital muster tools, and content are provided on an <strong>“AS IS”</strong> and <strong>“AS AVAILABLE”</strong> basis without warranties of any kind, whether express, statutory, or implied.
                </p>
                <p>
                  DLC explicitly disclaims all warranties of merchantability, fitness for a particular construction project, title, uninterrupted server uptime, accuracy of GPS coordinates during adverse weather, or absence of software bugs or transmission delays.
                </p>
              </div>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                7. Limitation of Platform Liability
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  To the maximum extent permitted under applicable Indian law, neither Gaudrika Digital Labour Chowk (OPC) Private Limited nor its directors, founders, officers, employees, agents, or field coordinators shall be liable for:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm list-disc list-inside text-slate-600">
                  <li>Any indirect, punitive, incidental, special, or consequential damages;</li>
                  <li>Loss of construction profits, business delays, site shutdowns, or structural material wastage;</li>
                  <li>Acts, omissions, safety oversights, or negligence committed by independent workers or project contractors on site;</li>
                  <li>Unauthorized system access or data breaches arising from user negligence in safeguarding login credentials.</li>
                </ul>
              </div>
            </section>

            {/* 8. Indemnification */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                8. User Indemnification Obligation
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  You agree to defend, indemnify, and hold harmless Gaudrika Digital Labour Chowk (OPC) Private Limited, its leadership, affiliates, and representatives from all claims, losses, liabilities, fines, and legal expenses (including reasonable advocate fees) arising from:
                </p>
                <ol className="space-y-1.5 text-xs sm:text-sm list-decimal list-inside text-slate-600">
                  <li>Your violation of site safety protocols, labour laws, or any term of this Disclaimer;</li>
                  <li>Breach of representations or warranties made by you during booking or contractor onboarding;</li>
                  <li>Failure to provide safe working environments, adequate PPE, or timely wage disbursements for deployed workers.</li>
                </ol>
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