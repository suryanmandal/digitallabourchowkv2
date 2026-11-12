"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Tv,
  Newspaper,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Play,
  Mail,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";

export default function MediaCoveragePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "tv" | "print">("all");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".media-card", {
        opacity: 0,
        y: 25,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  const tvMedia = [
    {
      name: "Republic TV",
      type: "TV Broadcast",
      image: "/images/for-collaboration/tv-media/Republic-tv.webp",
      link: "https://www.youtube.com/watch?v=7DRf-AvizO4",
      highlight: "National prime-time feature on Digital Labour Chowk solving blue-collar labor challenges.",
    },
    {
      name: "Amazon MX Player (Super Founders)",
      type: "OTT Documentary",
      image: "/images/for-collaboration/tv-media/Amazon-mx-player.webp",
      link: "https://www.mxplayer.in",
      highlight: "Featured on 'Bharat Ke Super Founders' as an inspiring Indian socioeconomic enterprise.",
    },
    {
      name: "Bloomberg",
      type: "Global Business News",
      image: "/images/for-collaboration/tv-media/bloomberg.webp",
      link: "https://www.bloomberg.com",
      highlight: "Analysis on informal labor formalization and technology adoption in Indian construction.",
    },
    {
      name: "Sansad TV",
      type: "National Television",
      image: "/images/for-collaboration/tv-media/sansad-tv.webp",
      link: "https://sansadtv.nic.in",
      highlight: "Parliamentary broadcast highlighting innovation in migrant worker welfare and DBT.",
    },
    {
      name: "Navbharat Times",
      type: "National Media",
      image: "/images/for-collaboration/tv-media/navbharattimes.webp",
      link: "https://navbharattimes.indiatimes.com/good-news/success-story-chandrashekhar-mandal-create-digital-labour-chowk-for-daily-wage-workers/articleshow/112689230.cms",
      highlight: "Success story of Chandrashekhar Mandal creating Digital Labour Chowk for daily-wage mistris.",
    },
    {
      name: "YourStory",
      type: "Startup Media",
      image: "/images/for-collaboration/tv-media/Yourstory.webp",
      link: "https://yourstory.com",
      highlight: "How Digital Labour Chowk is bringing dignity and guaranteed work to mistris and helpers.",
    },
    {
      name: "ETV Bharat",
      type: "Regional & National TV",
      image: "/images/for-collaboration/tv-media/etvbharat.webp",
      link: "https://www.etvbharat.com",
      highlight: "Special segment on job matching and wage transparency in Tier 2 and Tier 3 cities.",
    },
    {
      name: "Jagran Business",
      type: "Business News",
      image: "/images/for-collaboration/tv-media/jagran-business.webp",
      link: "https://www.jagran.com/business",
      highlight: "Enterprise scale and workforce management trends across mega infrastructure projects.",
    },
  ];

  const printMedia = [
    {
      name: "Panchjanya",
      type: "National Print Magazine",
      image: "/images/for-collaboration/print-media/panchjanya.webp",
      link: "https://panchjanya.com/2023/05/17/279951/bharat/solution-to-labor-problems/",
      highlight: "In-depth investigative story on technological solutions to India's unorganized labor issues.",
    },
    {
      name: "The Hindu Business Line",
      type: "Financial Daily",
      image: "/images/for-collaboration/print-media/thehindubusinessline.webp",
      link: "https://www.thehindubusinessline.com/info-tech/fuselage-goudrika-win-hitachi-national-innovation-challenge/article65419369.ece",
      highlight: "Coverage of Hitachi National Innovation Challenge winner Digital Labour Chowk.",
    },
    {
      name: "Live Hindustan",
      type: "Daily Newspaper",
      image: "/images/for-collaboration/print-media/livehindustan.webp",
      link: "https://www.livehindustan.com/bihar/story-hindustan-special-digital-labor-chowk-app-is-of-great-use-to-the-workers-online-employment-daily-wages-can-also-be-decided-8850751.html",
      highlight: "Hindustan Special: Digital Labour Chowk app is a lifeline for daily wage construction mistris.",
    },
    {
      name: "Dainik Bhaskar",
      type: "Leading Daily",
      image: "/images/for-collaboration/print-media/bhaskar.webp",
      link: "https://www.bhaskar.com/local/bihar/patna/news/cimps-incubation-startup-digital-labor-chowk-wins-national-innovation-challenge-129913420.html",
      highlight: "Patna News: CIMPS incubation startup wins National Innovation Challenge.",
    },
    {
      name: "Local Samosa",
      type: "Digital Publication",
      image: "/images/for-collaboration/print-media/localsamosa.webp",
      link: "https://www.localsamosa.com/business/digital-labour-chowk-4526918",
      highlight: "Feature on empowering construction workers with tech and eliminating middleman cuts.",
    },
    {
      name: "Dainik Jagran",
      type: "National Daily",
      image: "/images/for-collaboration/print-media/dainik-jagran.webp",
      link: "https://www.jagran.com",
      highlight: "Coverage of rural worker onboarding and mobile app deployment in regional dialects.",
    },
  ];

  const displayedItems =
    activeTab === "all"
      ? [...tvMedia, ...printMedia]
      : activeTab === "tv"
      ? tvMedia
      : printMedia;

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
            <span className="text-[#0C59D4]">Media Coverage</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Tv className="w-3.5 h-3.5" />
              <span>In The News</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              From Headlines to Hall of Fame — <span className="text-[#0C59D4]">DLC in the Media</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Discover how our journey of organizing 3,50,000+ blue-collar construction workers 
              is celebrated across national television channels, premier business dailies, and national magazines.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 pt-6">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${
                  activeTab === "all"
                    ? "bg-[#0C59D4] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                All Features ({tvMedia.length + printMedia.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tv")}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  activeTab === "tv"
                    ? "bg-[#0C59D4] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>TV & Video ({tvMedia.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("print")}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  activeTab === "print"
                    ? "bg-[#0C59D4] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>Print & Press ({printMedia.length})</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* MEDIA CARDS GRID                                                          */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, idx) => (
            <div
              key={idx}
              className="media-card bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Logo Banner */}
                <div className="relative w-full h-44 bg-slate-100 p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="relative w-full h-full max-h-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#0C59D4] uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </div>

              {item.link && (
                <div className="p-6 pt-0">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-[#0C59D4] text-xs font-bold border border-slate-200/80 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read / Watch Story</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Media Inquiries Box */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-black tracking-widest text-[#0C59D4] uppercase">
              Press Relations
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-0.5">
              Want to Feature Digital Labour Chowk or Request An Interview?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              Our media team provides verified workforce statistics, founder access, and case study briefs within 24 hours.
            </p>
          </div>

          <a
            href="mailto:info@digitallabourchowk.com"
            className="flex-shrink-0 px-6 py-3 rounded-lg bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Connect Press Desk</span>
          </a>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* NAVIGATION FOOTER                                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/awards-recognition"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0C59D4] transition-colors"
          >
            &larr; Previous: Awards & Recognitions
          </Link>

          <Link
            href="/partnerships"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0C59D4] hover:underline"
          >
            <span>Next: Institutional Partners</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
