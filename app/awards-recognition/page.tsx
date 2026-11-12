"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Trophy,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Maximize2,
  X,
} from "lucide-react";
import gsap from "gsap";

export default function AwardsRecognitionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".award-card", {
        opacity: 0,
        scale: 0.95,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const awards = [
    {
      title: "Hitachi National Innovation Challenge Winner",
      org: "Hitachi India & Kerala Startup Mission (KSUM)",
      year: "2022",
      image: "/images/for-collaboration/recognitions/recog-4.webp",
      desc: "Selected as the winning social enterprise for transforming blue-collar construction labor logistics through digital platforms.",
    },
    {
      title: "Best Startup Award",
      org: "NAREDCO (National Real Estate Development Council)",
      year: "2023",
      image: "/images/for-collaboration/recognitions/recog-3.webp",
      desc: "Awarded for exceptional innovation in manpower supply and safety standards across national real estate and infrastructure projects.",
    },
    {
      title: "Champion of Impact Award",
      org: "Ministry of MSME & Social Enterprise Forum",
      year: "2023",
      image: "/images/for-collaboration/recognitions/recog-2.webp",
      desc: "Honoring grassroots socioeconomic impact in enabling direct bank payments and wage security for daily-wage artisans.",
    },
    {
      title: "BIA & Startup India Recognition",
      org: "Bihar Industrial Association & DPIIT, Govt of India",
      year: "2022",
      image: "/images/for-collaboration/recognitions/recog-1.webp",
      desc: "State-level entrepreneurship award celebrating DLC as a breakthrough digital employment exchange incubated at CIMPS.",
    },
    {
      title: "Best Startup Initiative in the IT Sector",
      org: "STPI & IT Ministry Consortium",
      year: "2023",
      image: "/images/for-collaboration/recognitions/recog-5.webp",
      desc: "Recognizing high-speed geo-fenced biometric muster roll technology deployed across commercial construction sites.",
    },
    {
      title: "TiE Global Summit Recognition",
      org: "TiE (The Indus Entrepreneurs)",
      year: "2023",
      image: "/images/for-collaboration/recognitions/recog-6.webp",
      desc: "Showcased at the TiE Global Summit as an exemplary tech-for-good platform organizing informal blue-collar sectors.",
    },
    {
      title: "NASSCOM 10,000 Startups Showcase",
      org: "NASSCOM",
      year: "2024",
      image: "/images/for-collaboration/recognitions/recog-7.webp",
      desc: "Selected for national enterprise incubation and scale under NASSCOM's flagship technology startup cohort.",
    },
    {
      title: "CIMPS Social Innovation Fellowship",
      org: "Centre for Innovation in Management and Public Systems",
      year: "2021",
      image: "/images/for-collaboration/recognitions/recog-8.webp",
      desc: "Foundation incubation grant and institutional mentorship for solving labor migration and roadside labor chowk vulnerabilities.",
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
            <span className="text-[#0C59D4]">Awards & Recognitions</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>National Hall of Fame</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Recognized by the Nation. <span className="text-[#0C59D4]">Celebrated for Impact</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From the Hitachi National Innovation Challenge to NAREDCO and Startup India, 
              our mission to empower India&apos;s daily-wage workforce has been honored by leading 
              ministries, real estate federations, and technology bodies.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* AWARDS GALLERY GRID                                                       */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, idx) => (
            <div
              key={idx}
              className="award-card bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate / Image Showcase */}
                <div
                  className="relative w-full h-48 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ src: a.image, title: a.title })}
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <div className="px-3 py-1.5 rounded-full bg-black/60 text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Award</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#0C59D4] uppercase tracking-wider">
                      {a.year}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                      National Honor
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors mb-1 line-clamp-2">
                    {a.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {a.org}
                  </p>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {a.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: a.image, title: a.title })}
                  className="w-full py-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-[#0C59D4] text-xs font-bold border border-slate-200/80 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL LIGHTBOX FOR CERTIFICATES                                           */}
      {/* ========================================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 truncate pr-4">
                {selectedImage.title}
              </h4>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-900">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about-us/footprint"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Our Footprint
          </Link>

          <Link
            href="/media-coverage"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Media Coverage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
