import React from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";
import LegalNav from "@/components/LegalNav";

export const metadata = {
  title: "Cancellation Policy | Digital Labour Chowk",
  description:
    "Official Cancellation Policy for professional on-demand construction labor bookings with Digital Labour Chowk.",
};

export default function CancellationPolicyPage() {
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
          <span className="text-slate-800 font-semibold">Cancellation Policy</span>
        </nav>

        {/* Page Hero Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0C59D4] flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase block">
                  Service Level Agreement
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Cancellation Policy
                </h1>
              </div>
            </div>
            <div className="text-xs text-slate-500 text-left sm:text-right">
              <div>Effective: <span className="font-semibold text-slate-800">January 2024</span></div>
              <div>Last Revised: <span className="font-semibold text-slate-800">Current Year</span></div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            This Cancellation Policy governs the terms under which Service Seekers (clients, builders, contractors, and individuals) may cancel bookings made with Independent Skilled and Semi-Skilled Professionals via Digital Labour Chowk (DLC).
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Legal Content */}
          <div className="flex-1 w-full space-y-8 text-slate-700">
            
            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free Cancellation</span>
                </div>
                <p className="text-xs text-emerald-950 font-medium">
                  ≥ 14 Hours prior to Service Start Time or within 10-minute Grace Period upon instant booking.
                </p>
              </div>

              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Late Cancellation</span>
                </div>
                <p className="text-xs text-amber-950 font-medium">
                  50% Service Fee charged when cancelled 14h to 1h prior to shift to compensate the professional.
                </p>
              </div>

              <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-4">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-1">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Full Charge</span>
                </div>
                <p className="text-xs text-rose-950 font-medium">
                  100% Service Fee charged for &lt; 1 hour prior, site no-show, or invalid location address.
                </p>
              </div>
            </div>

            {/* Section 1: Statutory Nature & Contractual Entitlement */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                1. Nature of Cancellation Entitlement
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  You acknowledge that you do not have any statutory right under applicable consumer statutes to cancel an on-demand contract once mobilization begins. However, Digital Labour Chowk provides a clear <strong>contractual entitlement</strong> to cancel bookings made with an Independent Professional through our platform under the circumstances detailed below.
                </p>
                <p>
                  All cancellations must be formally processed through the <strong>Digital Labour Chowk Web Portal</strong> or the official <strong>DLC Mobile Application</strong> before the designated Service Start Time.
                </p>
              </div>
            </section>

            {/* Section 2: Cancellation Timeline & Charge Matrix */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                2. Cancellation Windows & Applicable Charges
              </h2>

              <div className="space-y-4">
                {/* 2.1 Free Cancellation */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        A. Standard Free Cancellation Window
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        If you change your mind prior to the agreed Service Start Time, the Independent Professional and DLC will treat your booking as cancelled without requiring payment of any part of the Service Fee if cancelled:
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                        <li><strong>At least fourteen (14) hours prior</strong> to the scheduled Service Start Time (typically by 7:00 PM of the previous working day); or</li>
                        <li><strong>10-Minute Grace Period:</strong> If the booking was placed within 14 hours of the service time, cancellation within ten (10) minutes of placing the booking is free.</li>
                      </ul>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 whitespace-nowrap">
                      0% Fee Charged
                    </span>
                  </div>
                </div>

                {/* 2.2 Late Cancellation */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        B. Late Cancellation (14 Hours to 3 Hours prior)
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        If your cancellation occurs between fourteen (14) hours and three (3) hours prior to the Service Time (up to 6:00 AM on the day of delivery), and after the Grace Period has elapsed:
                      </p>
                      <p className="mt-2 text-xs text-slate-600 font-medium">
                        DLC is entitled to retain or charge <strong>fifty per cent (50%)</strong> of the applicable Service Fee (capped at ₹20 for basic bookings). Professional daily wages remain fully refundable.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 whitespace-nowrap">
                      50% Service Fee
                    </span>
                  </div>
                </div>

                {/* 2.3 Very Late Cancellation */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        C. Very Late Cancellation (3 Hours to 1 Hour prior)
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        If cancellation is submitted within three (3) hours but more than one (1) hour prior to the Service Time (between 6:00 AM and 8:00 AM of the delivery day):
                      </p>
                      <p className="mt-2 text-xs text-slate-600 font-medium">
                        The Independent Professional is entitled to 50% of the daily wage compensation, and DLC retains 50% of the Service Fee.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 whitespace-nowrap">
                      50% Wage & Fee
                    </span>
                  </div>
                </div>

                {/* 2.4 Ineligible / Non-Refundable */}
                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/30">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-rose-900 text-sm">
                        D. Full Charge & Non-Refundable Events
                      </h3>
                      <p className="text-xs text-rose-800 mt-1 leading-relaxed">
                        You will be charged the <strong>full Service Fee and one day wage entitlement</strong> if any of the following occur:
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-rose-800 list-disc list-inside">
                        <li>Attempting to cancel less than one (1) hour before the Service Start Time or after arrival;</li>
                        <li>Failing to provide access or attending the Designated Site/Premises at the agreed time;</li>
                        <li>Providing incorrect or incomplete site addresses, resulting in worker mobilization failure;</li>
                        <li>Failing to provide valid contact details or refusing worker entry at the site gate.</li>
                      </ul>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 whitespace-nowrap">
                      100% Charged
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Reason for Cancellation Fee */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                3. Purpose of Compensation
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  A cancellation fee is levied strictly to <strong>compensate the Independent Professional</strong>. Construction workers and trade mistris allocate their day and forego alternative daily wage opportunities at local physical chowks once a digital assignment is confirmed.
                </p>
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#0C59D4] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Discretionary Waiver:</strong> Cancellation fees may, at our absolute discretion, be waived where you were unable to cancel due to verifiable emergency circumstances or force majeure beyond your control. Where fees are waived, DLC acts as the authorized agent of the Independent Professional.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: How to Cancel */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                4. Step-by-Step Cancellation Process
              </h2>
              <ol className="space-y-3 text-sm text-slate-600 list-decimal list-inside leading-relaxed">
                <li>Log in to your <strong>Digital Labour Chowk</strong> account on the web or mobile app.</li>
                <li>Navigate to <strong>My Bookings</strong> and select the relevant booking ID.</li>
                <li>Tap <strong>Cancel Booking</strong> and select the legitimate reason for cancellation.</li>
                <li>The system will calculate your applicable refund immediately in accordance with Section 2 above and process it back to your original source account or DLC Wallet.</li>
              </ol>
            </section>

          </div>

          {/* Persistent Sidebar */}
          <LegalNav />
        </div>
      </div>
    </div>
  );
}