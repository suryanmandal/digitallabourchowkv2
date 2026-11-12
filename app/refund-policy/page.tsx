import React from "react";
import Link from "next/link";
import {
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  Clock,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import LegalNav from "@/components/LegalNav";

export const metadata = {
  title: "Refund & Replacement Policy | Digital Labour Chowk",
  description:
    "Official Refund & Worker Replacement Policy governed by the Consumer Protection Act 2019 and Indian Contract Act 1872.",
};

export default function RefundPolicyPage() {
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
          <span className="text-slate-800 font-semibold">Refund Policy</span>
        </nav>

        {/* Page Hero Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0C59D4] flex items-center justify-center font-bold">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black tracking-widest text-[#0C59D4] uppercase block">
                  Statutory & Service Guarantee
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Refund & Replacement Policy
                </h1>
              </div>
            </div>
            <div className="text-xs text-slate-500 text-left sm:text-right">
              <div>Governing Law: <span className="font-semibold text-slate-800">Consumer Protection Act 2019</span></div>
              <div>Contract Framework: <span className="font-semibold text-slate-800">Indian Contract Act 1872</span></div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            A transparent and clearly drafted refund policy removes apprehension for both clients and workforce professionals. All refund calculations and worker replacement workflows with Digital Labour Chowk (DLC) comply with Indian statutory benchmarks and fair-trade standards.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Content */}
          <div className="flex-1 w-full space-y-8 text-slate-700">

            {/* Section 1: Refund Matrix Table */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                  1. Official Refund Calculation Matrix
                </h2>
                <span className="text-xs bg-blue-50 text-[#0C59D4] font-bold px-2.5 py-1 rounded-full border border-blue-200/50">
                  Tier-1 / Tier-2 Standard
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                The amount refundable upon booking cancellation is directly dependent on when the cancellation request is registered in relation to the scheduled work shift:
              </p>

              {/* Responsive Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Cancellation Timing</th>
                      <th className="py-3 px-4">Service Fee Refund</th>
                      <th className="py-3 px-4">Professional Wage Refund</th>
                      <th className="py-3 px-4 text-right">Net Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">≥ 14 Hours Prior</div>
                        <div className="text-xs text-slate-500">Till 7:00 PM of previous working day</div>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-600">100% Refunded</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-600">100% Refunded</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                          Full 100% Refund
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">14 Hours to 3 Hours Prior</div>
                        <div className="text-xs text-slate-500">Till 6:00 AM of Service Delivery day</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        50% Refunded <span className="text-[11px] text-slate-400 block">(Max ₹20 retained)</span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-600">100% Refunded</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                          95%+ Refund
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">3 Hours to 1 Hour Prior</div>
                        <div className="text-xs text-slate-500">Till 8:00 AM of Service Delivery day</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        50% Refunded <span className="text-[11px] text-slate-400 block">(Max ₹20 retained)</span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        Wages minus 50% 1-day wage
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800">
                          Partial Refund
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">After 8:00 AM / Same Day</div>
                        <div className="text-xs text-slate-500">On or after scheduled reporting hour</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        50% Refunded <span className="text-[11px] text-slate-400 block">(Max ₹20 retained)</span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-rose-600">
                        Wages minus 100% 1-day wage
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                          Minimal / Nil
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Free Replacement Policy */}
            <section className="bg-white rounded-2xl border border-blue-200/90 p-6 sm:p-7 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/70 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="w-5 h-5 text-[#0C59D4]" />
                <h2 className="text-lg font-bold text-slate-900">
                  2. 100% Free Worker Replacement Guarantee
                </h2>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  All workers and trade professionals verified on Digital Labour Chowk undergo strict skill audits and onboarding. We offer them competitive market deliverables and job stability.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <p className="font-semibold text-slate-900">
                    What happens if a deployed professional quits prematurely?
                  </p>
                  <p>
                    If any deployed worker leaves your active work site prior to task completion, <strong>DLC will dispatch a free replacement worker</strong> to the workplace at no extra mobilization charge.
                  </p>
                  <p>
                    In the rare event that suitable replacement personnel are unavailable near the site location, DLC will deploy workers from an expanded radius or, if unable to fulfill within reasonable operational timelines, <strong>issue an immediate full refund for that specific worker assignment</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: General Terms & Non-Refundable Conditions */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                3. General Refund Terms & Exceptions
              </h2>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Completed Services:</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Resources and human labor are expended to achieve every operational milestone. Consequently, refunds are not entertained for services that have already been executed and delivered.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Violations of Terms:</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      No refund will be processed if a booking or shift is halted due to a breach of DLC safety norms, contractor misconduct, failure to provide safe work environments, or violation of our Terms & Conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Third-Party Disruptions & Force Majeure:</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      DLC is not liable to pay refunds if services are delayed or disrupted due to municipal stoppages, strike actions, natural calamities, or external third-party interference.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Refund Processing & Payout Modes */}
            <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C59D4]"></span>
                4. Mode and Timeline of Refund Payouts
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  All approved refunds are initiated automatically using the <strong>same payment method originally used</strong> by you to pay for your purchase (UPI, NEFT/RTGS, Net Banking, or Credit/Debit Card), or converted instantly into <strong>DLC Platform Credits / Wallet Balance</strong> at your explicit election.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#0C59D4] flex-shrink-0" />
                  <span>
                    Bank transfers typically reflect in your account within <strong>5 to 7 banking working days</strong> depending on your issuing bank. DLC Wallet credits reflect instantaneously.
                  </span>
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