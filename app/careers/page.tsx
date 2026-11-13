"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, MapPin, Users, HeartHandshake, ArrowRight, Mail } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
      title: "Workforce Operations Lead",
      department: "Field Operations",
      location: "Patna / Delhi NCR",
      type: "Full-Time",
      description: "Oversee on-ground chowk mobilization, trade skill assessments, and contractor relations.",
    },
    {
      title: "Senior Full-Stack Engineer (Next.js / Node / Flutter)",
      department: "Technology",
      location: "Patna / Remote",
      type: "Full-Time",
      description: "Build scalable real-time matching algorithms and multilingual worker experience apps.",
    },
    {
      title: "Enterprise Sales Manager - Infrastructure & EPC",
      department: "Business Development",
      location: "New Delhi / Mumbai",
      type: "Full-Time",
      description: "Partner with Tier-1 builders and EPC developers for centralized manpower management.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#071329] via-[#0C59D4] to-[#0A47AD] text-white py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs sm:text-sm font-semibold mb-4 border border-white/10">
            <Briefcase className="w-4 h-4 text-amber-300" />
            <span>Careers at Digital Labour Chowk</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
            Build the Future of Indian Construction
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Join a mission-driven team bringing dignity, transparency, and technology to over 50 million informal construction workers.
          </p>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Open Opportunities</h2>
            <p className="text-slate-600 text-sm mt-1">Explore current full-time roles across engineering, operations, and business.</p>
          </div>
          <a
            href="mailto:careers@digitallabourchowk.com"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-[#0C59D4] font-semibold text-xs hover:bg-blue-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>careers@digitallabourchowk.com</span>
          </a>
        </div>

        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1.5">
                  <span className="text-[#0C59D4]">{job.department}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-600">{job.type}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </div>

              <a
                href={`mailto:careers@digitallabourchowk.com?subject=Application for ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-semibold text-xs flex-shrink-0 transition-colors"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}