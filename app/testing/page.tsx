"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Sliders,
  Eye,
  Layers,
  Smartphone,
  Laptop,
  Monitor,
  RotateCw,
  Play,
  Pause,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  VolumeX,
  Maximize2,
  RefreshCw,
  Palette,
  Grid,
  Code,
  Zap,
  Award,
  QrCode,
  HardHat,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Box,
  Flame,
  Check,
  Copy,
  Activity,
  SlidersHorizontal,
  Compass,
  Star,
} from "lucide-react";

// =============================================================================
// DATA & CONSTANTS FOR TESTING LAB
// =============================================================================

const ALL_WORKERS = [
  { id: "mason", name: "Masons", subtitle: "Rajmistri", gif: "/workers-gif/mason.gif", craft: "Civil Crafts", defaultColor: "#F4F4F6", wage: "₹950" },
  { id: "welder", name: "Welders", subtitle: "Fabrication", gif: "/workers-gif/welder.gif", craft: "Fabrication", defaultColor: "#F4F4F6", wage: "₹1,150" },
  { id: "electrician", name: "Electricians", subtitle: "Bijli Mistri", gif: "/workers-gif/electrician.gif", craft: "MEP Electrical", defaultColor: "#F4F4F6", wage: "₹1,100" },
  { id: "carpenter", name: "Carpenters", subtitle: "Badhai", gif: "/workers-gif/carpenter.gif", craft: "Formwork & Joinery", defaultColor: "#F4F4F6", wage: "₹1,050" },
  { id: "painter", name: "Painters", subtitle: "Rangsaaz", gif: "/workers-gif/painter.gif", craft: "Finishing & Coat", defaultColor: "#F4F4F6", wage: "₹900" },
  { id: "plumber", name: "Plumbers", subtitle: "Nalsaaz", gif: "/workers-gif/plumber.gif", craft: "MEP Plumbing", defaultColor: "#F4F4F6", wage: "₹1,000" },
  { id: "labour", name: "Labour", subtitle: "Helpers", gif: "/workers-gif/labour.gif", craft: "General Civil", defaultColor: "#F4F4F6", wage: "₹650" },
  { id: "foreman", name: "Foreman", subtitle: "In-Charge", gif: "/workers-gif/foreman.gif", craft: "Site Leadership", defaultColor: "#F4F4F6", wage: "₹1,500" },
  { id: "supervisor", name: "Supervisor", subtitle: "Nirman Ops", gif: "/workers-gif/supervisor.gif", craft: "Engineering Ops", defaultColor: "#F4F4F6", wage: "₹1,800" },
  { id: "engineer", name: "Engineers", subtitle: "Site Planners", gif: "/workers-gif/engineer.gif", craft: "Site Execution", defaultColor: "#F4F4F6", wage: "₹2,400" },
  { id: "iti", name: "ITI Tech", subtitle: "Machinists", gif: "/workers-gif/iti.gif", craft: "Technical Trades", defaultColor: "#F4F4F6", wage: "₹1,200" },
];

const LANYARD_STRAPS = [
  { id: "blue-lux", name: "Royal Blue Lux (Chevron)", bg: "from-blue-700 via-indigo-600 to-blue-800", pattern: "chevron" },
  { id: "crimson-geo", name: "Crimson Zigzag", bg: "from-rose-700 via-red-600 to-rose-900", pattern: "zigzag" },
  { id: "obsidian-mesh", name: "Obsidian Tech Mesh", bg: "from-slate-900 via-slate-800 to-black", pattern: "mesh" },
  { id: "amber-hazard", name: "Amber Industrial Stripe", bg: "from-amber-600 via-yellow-500 to-amber-700", pattern: "stripe" },
];

export default function TestingLaboratoryPage() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<"lanyard" | "hero-concepts" | "card-studio" | "micro-ui" | "viewport">("hero-concepts");

  // Sync tab with URL hash for direct bookmarking and testing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["lanyard", "hero-concepts", "card-studio", "micro-ui", "viewport"].includes(hash)) {
        setActiveTab(hash as any);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const switchTab = (tabId: "lanyard" | "hero-concepts" | "card-studio" | "micro-ui" | "viewport") => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tabId}`);
    }
  };

  // Global Sandbox settings
  const [copiedCode, setCopiedCode] = useState(false);
  const [inspectMode, setInspectMode] = useState(false);

  // ---------------------------------------------------------------------------
  // TAB 1: 3D LANYARD CONTROLS & STATE
  // ---------------------------------------------------------------------------
  const [lanyardStrap, setLanyardStrap] = useState(LANYARD_STRAPS[0]);
  const [selectedWorkerForCard, setSelectedWorkerForCard] = useState(ALL_WORKERS[0]);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [ropeDistance, setRopeDistance] = useState(48); // px distance between ropes
  const [lightSpecular, setLightSpecular] = useState(true);
  const [tiltSens, setTiltSens] = useState(14);
  const [rotX, setRotX] = useState(-4);
  const [rotY, setRotY] = useState(6);
  const [specX, setSpecX] = useState(35);
  const [specY, setSpecY] = useState(25);
  const lanyardCardRef = useRef<HTMLDivElement>(null);

  const handleLanyardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!lanyardCardRef.current) return;
    const rect = lanyardCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const angleX = ((y - cy) / cy) * -tiltSens;
    const angleY = ((x - cx) / cx) * (tiltSens * 1.1);

    setRotX(angleX);
    setRotY(angleY);
    setSpecX((x / rect.width) * 100);
    setSpecY((y / rect.height) * 100);
  };

  const resetLanyard = () => {
    setRotX(-3);
    setRotY(5);
    setSpecX(35);
    setSpecY(25);
  };

  // ---------------------------------------------------------------------------
  // TAB 2: HERO SECTION CONCEPTS FOR WORKER PAGE
  // ---------------------------------------------------------------------------
  const [activeHeroConcept, setActiveHeroConcept] = useState<"concept1" | "concept2" | "concept3" | "concept4">("concept1");

  // ---------------------------------------------------------------------------
  // TAB 3: PROTRUSION & CARD DEPTH STUDIO
  // ---------------------------------------------------------------------------
  const [studioWorker, setStudioWorker] = useState(ALL_WORKERS[0]);
  const [cardBgColor, setCardBgColor] = useState("#F4F4F6");
  const [canvasBg, setCanvasBg] = useState<"white" | "dark" | "blue" | "grid">("white");
  const [protrusionHeight, setProtrusionHeight] = useState(55); // px
  const [blackBarHeight, setBlackBarHeight] = useState(16); // px
  const [borderRadius, setBorderRadius] = useState(32); // px
  const [cardShadow, setCardShadow] = useState<"subtle" | "elevated" | "neon">("subtle");

  // ---------------------------------------------------------------------------
  // TAB 4: MICRO-INTERACTIONS & WIDGETS
  // ---------------------------------------------------------------------------
  const [wageDailyRate, setWageDailyRate] = useState(950);
  const [wageDays, setWageDays] = useState(26);
  const [scannerActive, setScannerActive] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // ---------------------------------------------------------------------------
  // TAB 5: VIEWPORT SANDBOX
  // ---------------------------------------------------------------------------
  const [viewportWidth, setViewportWidth] = useState<"100%" | "1280px" | "768px" | "390px">("100%");
  const [viewportGrid, setViewportGrid] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* =======================================================================
          TOP STUDIO TOOLBAR / COMMAND BAR
         ======================================================================= */}
      <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Lab Brand & Status */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
                DLC Creative Lab & UI Sandbox
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider">
                Dev Engine v2.1
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Rapid Prototyping & Live Visual Testing Ground • <code className="text-blue-300">/testing</code>
            </p>
          </div>
        </div>

        {/* Global Action Tools */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setInspectMode(!inspectMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
              inspectMode
                ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm"
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{inspectMode ? "Inspector: ON" : "Inspect Outlines"}</span>
          </button>

          <Link
            href="/worker"
            target="_blank"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white flex items-center gap-1.5 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            <span>Open /worker Live</span>
          </Link>
        </div>
      </header>

      {/* =======================================================================
          TAB NAVIGATION BAR
         ======================================================================= */}
      <nav className="w-full bg-[#0E1322] border-b border-white/10 px-4 sm:px-8 py-2 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {[
            { id: "hero-concepts", label: "🦸 4x Hero Section Concepts", tag: "Worker Page" },
            { id: "lanyard", label: "🏷️ 3D Lanyard & ID Physics", tag: "Interactive 3D" },
            { id: "card-studio", label: "🃏 Protrusion & Card Depth Studio", tag: "Figma Frame 8" },
            { id: "micro-ui", label: "✨ Micro-Interactions & Widgets", tag: "Sensory UX" },
            { id: "viewport", label: "📱 Multi-Viewport Canvas", tag: "Responsive" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200 border border-white/5"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-black/30 text-slate-400"
                }`}
              >
                {tab.tag}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* =======================================================================
          MAIN WORKSPACE STAGE
         ======================================================================= */}
      <main className={`flex-1 w-full ${inspectMode ? "testing-inspect-active" : ""}`}>
        
        {/* =====================================================================
            TAB 1: 4X HERO SECTION CONCEPTS (FOR WORKER HERO BLANK SECTION)
           ===================================================================== */}
        {activeTab === "hero-concepts" && (
          <div className="w-full py-8 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
            
            {/* Concept Selector Toolbar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F1424] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Worker Page • Section 2 Candidates
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Hero Section Visual & Interaction Explorations
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Select a concept below to preview how the currently blank black Hero section can look and interact.
                </p>
              </div>

              {/* Concept Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10">
                {[
                  { id: "concept1", label: "Concept 1: Spatial 3D Card" },
                  { id: "concept2", label: "Concept 2: Cyber-Chowk Radar" },
                  { id: "concept3", label: "Concept 3: Dynamic Bento" },
                  { id: "concept4", label: "Concept 4: Spotlight Kinetic" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveHeroConcept(c.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeHeroConcept === c.id
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PREVIEW CONTAINER FOR SELECTED CONCEPT */}
            <div className="w-full rounded-3xl border border-white/15 overflow-hidden shadow-2xl bg-black">
              
              {/* CONCEPT 1: SPATIAL 3D FLOATING LANYARD HUB */}
              {activeHeroConcept === "concept1" && (
                <div className="relative w-full bg-black text-white py-16 sm:py-24 px-6 sm:px-12 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Copy */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold">
                        <HardHat className="w-4 h-4 text-amber-400" />
                        <span>Concept 1: Spatial Digital Identity</span>
                      </div>

                      <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08]">
                        Apna Digital Card Banao, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                          Pura Haq, Zero Commission
                        </span>{" "}
                        Pao.
                      </h2>

                      <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                        Sarkari pehchan ke saath seedhe thekedaron se judein. Har roz 100% bank transfer payein bina jamadar ke commission ke, aur payein ₹5 Lakhs tak ka free bima.
                      </p>

                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3.5 rounded-2xl bg-[#0C59D4] hover:bg-blue-500 text-white font-black text-sm flex items-center gap-2.5 shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
                        >
                          <HardHat className="w-4 h-4" />
                          <span>Google Play Se App Download Karein</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>

                        <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>100% Free For All Workers</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Floating Card Preview */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center">
                      <div className="relative w-72 sm:w-80 p-6 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 border border-blue-400/40 shadow-2xl shadow-blue-900/50 text-white transform hover:-translate-y-2 transition-all duration-300">
                        {/* Clip hole */}
                        <div className="w-12 h-3.5 rounded-full bg-slate-900/80 mx-auto mb-6 border border-white/20 shadow-inner" />
                        
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-blue-200 block font-bold">
                              DIGITAL LABOUR CHOWK
                            </span>
                            <span className="text-xs text-white/80">Skill Pass ID • #DLC-9821</span>
                          </div>
                          <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-emerald-300" />
                          </div>
                        </div>

                        <div className="w-full h-36 rounded-2xl bg-blue-950/70 border border-white/10 overflow-hidden relative mb-5 flex items-center justify-center">
                          <Image
                            src="/workers-gif/mason.gif"
                            alt="Mason Worker"
                            fill
                            className="object-contain object-bottom"
                            unoptimized
                          />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-lg font-black text-white">Ramesh Kumar Mistri</h4>
                          <p className="text-xs font-semibold text-amber-300">Master Mason / Rajmistri • Grade A</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100 font-medium">
                          <span>✓ Aadhaar & Biometric Linked</span>
                          <span className="text-emerald-300 font-bold">ACTIVE</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-3 font-mono">
                        Interactive 3D lanyard available in Tab 2
                      </span>
                    </div>

                  </div>
                </div>
              )}

              {/* CONCEPT 2: CYBER-CHOWK LIVE RADAR */}
              {activeHeroConcept === "concept2" && (
                <div className="relative w-full bg-[#050811] text-white py-16 sm:py-24 px-6 sm:px-12 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#0C59D4_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

                  <div className="relative max-w-6xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>LIVE RADAR: Bharat Ke 500+ Chowks Ab Digital Hain</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                          Sadak Par Khade Hone Ka Daur Khatam. <br />
                          <span className="text-[#0C59D4]">Ghar Baithe Seedhe Kaam Payein.</span>
                        </h2>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-2xl font-black text-amber-400">142,850+</div>
                          <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Active Craftsmen</div>
                        </div>
                        <div className="h-8 w-px bg-white/20" />
                        <div className="text-right">
                          <div className="text-2xl font-black text-emerald-400">0%</div>
                          <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Jamadar Cut</div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Radar Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { city: "Noida Sector 62 Chowk", trades: "Mason, Welder, Helper", count: "340+ Hired Today", status: "High Demand", color: "border-blue-500/40" },
                        { city: "Patna Bailey Road Chowk", trades: "Electrician, Plumber, Painter", count: "210+ Hired Today", status: "Active Payouts", color: "border-emerald-500/40" },
                        { city: "Lucknow Gomti Nagar", trades: "Carpenter, Foreman, Labour", count: "290+ Hired Today", status: "Direct Bank Transfer", color: "border-amber-500/40" },
                      ].map((hub, i) => (
                        <div key={i} className={`p-5 rounded-2xl bg-white/5 border ${hub.color} backdrop-blur-sm space-y-3`}>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-200">{hub.city}</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                              {hub.status}
                            </span>
                          </div>
                          <div className="text-sm text-slate-300 font-medium">{hub.trades}</div>
                          <div className="text-xs text-amber-300 font-bold flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5" />
                            <span>{hub.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
                      >
                        <HardHat className="w-5 h-5" />
                        <span>Apne Shahar Ka Kaam Dekhein (Install App)</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* CONCEPT 3: DYNAMIC BENTO HERO */}
              {activeHeroConcept === "concept3" && (
                <div className="relative w-full bg-[#080B14] text-white py-16 sm:py-24 px-6 sm:px-12">
                  <div className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                        Concept 3 • Asymmetric Bento System
                      </span>
                      <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                        Bharat Ka Naya Nirman, <br />
                        <span className="text-blue-400">Hunar Ka Pura Sammaan</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Bento 1: Video / Reel inspiration */}
                      <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-900/40 to-slate-900/60 border border-blue-500/20 flex flex-col justify-between min-h-[260px]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Daily Payouts</span>
                          <span className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-black text-white">Direct DBT</div>
                          <p className="text-xs text-slate-300 mt-2">
                            Shramik ka paisa seedhe bank account mein, bina kisi jamadar ke 30% commission ke.
                          </p>
                        </div>
                        <div className="text-xs font-bold text-blue-400 flex items-center gap-1">
                          <span>100% Guaranteed</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bento 2: Center Highlight Character */}
                      <div className="p-6 rounded-3xl bg-gradient-to-b from-amber-950/40 to-slate-900/60 border border-amber-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[260px]">
                        <div className="w-36 h-36 relative mb-2">
                          <Image
                            src="/workers-gif/welder.gif"
                            alt="Welder"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div className="text-base font-black text-white">Prashikshit Welder / Fitter</div>
                        <p className="text-xs text-amber-300 font-semibold mt-1">Certified by Skill India & DLC</p>
                      </div>

                      {/* Bento 3: Quick Scan to Install */}
                      <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-800/40 to-slate-900/60 border border-white/10 flex flex-col justify-between items-center text-center min-h-[260px]">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Play Store Deep-Link</span>
                        <div className="p-3 rounded-2xl bg-white shadow-xl">
                          <QrCode className="w-20 h-20 text-slate-950" />
                        </div>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <span>Scan Ya Tap Karke Install Karein</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CONCEPT 4: SPOTLIGHT KINETIC TYPOGRAPHY */}
              {activeHeroConcept === "concept4" && (
                <div className="relative w-full bg-black text-white py-20 sm:py-28 px-6 sm:px-12 text-center overflow-hidden">
                  {/* Top Dramatic Spotlight Beam */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-blue-500/30 via-blue-500/5 to-transparent blur-2xl pointer-events-none" />

                  <div className="relative max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 backdrop-blur-md">
                      <Flame className="w-4 h-4 text-orange-400" />
                      <span>The National Blue-Collar Revolution</span>
                    </div>

                    <h2 className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.05] uppercase">
                      Hunar Aapka, <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
                        Kaam Bharat Ka
                      </span>
                    </h2>

                    <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                      5 Crore nirmaan shramikon ko direct thekedaron se jodne wala digital manch. Har din naye jobs, transparent rates, aur turant bhugtaan.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.digitallabourchowk.dlc"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm hover:bg-slate-200 transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <HardHat className="w-5 h-5 text-blue-600" />
                        <span>Google Play Se Shuru Karein</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Concept Feedback & Next Step Action */}
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-300">
                <span className="font-bold text-white">How to apply to the Worker Page:</span> Pick any of these 4 concepts, or let me know your custom vision, and we will deploy it straight into the black hero section on <code className="text-blue-300">app/worker/page.tsx</code>.
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`Selected Concept for Worker Hero: ${activeHeroConcept}`);
                  setCopiedCode(true);
                  setTimeout(() => setCopiedCode(false), 2000);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shrink-0 transition-all"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? "Copied Choice!" : "Copy Selected Concept"}</span>
              </button>
            </div>

          </div>
        )}

        {/* =====================================================================
            TAB 2: 3D LANYARD & ID PHYSICS LABORATORY
           ===================================================================== */}
        {activeTab === "lanyard" && (
          <div className="w-full py-8 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Panel */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0F1424] border border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  Physics & Lighting Engine
                </span>
                <h3 className="text-xl font-black text-white">3D Lanyard Controls</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tune cloth tension, strap textures, specular lighting, and persona attributes in real-time.
                </p>
              </div>

              {/* Strap Pattern Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Lanyard Strap Texture</label>
                <div className="grid grid-cols-2 gap-2">
                  {LANYARD_STRAPS.map((strap) => (
                    <button
                      key={strap.id}
                      onClick={() => setLanyardStrap(strap)}
                      className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                        lanyardStrap.id === strap.id
                          ? "bg-blue-600/30 border-blue-500 text-white"
                          : "bg-black/30 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      <div className={`h-2.5 w-full rounded bg-gradient-to-r ${strap.bg} mb-1.5`} />
                      <span className="block truncate">{strap.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Worker Persona Switcher */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Worker Persona</label>
                <select
                  value={selectedWorkerForCard.id}
                  onChange={(e) => {
                    const found = ALL_WORKERS.find((w) => w.id === e.target.value);
                    if (found) setSelectedWorkerForCard(found);
                  }}
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white font-semibold focus:outline-none focus:border-blue-500"
                >
                  {ALL_WORKERS.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name} ({w.subtitle}) • {w.craft}
                    </option>
                  ))}
                </select>
              </div>

              {/* Interactive Sliders */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Rope Span / Distance</span>
                    <span className="text-blue-400 font-mono">{ropeDistance}px</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="90"
                    value={ropeDistance}
                    onChange={(e) => setRopeDistance(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Tilt Sensitivity</span>
                    <span className="text-blue-400 font-mono">{tiltSens}°</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="28"
                    value={tiltSens}
                    onChange={(e) => setTiltSens(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-slate-300">Specular Light Reflection</span>
                  <button
                    onClick={() => setLightSpecular(!lightSpecular)}
                    className={`w-11 h-6 rounded-full transition-colors p-1 ${
                      lightSpecular ? "bg-blue-600" : "bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        lightSpecular ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Card Flip & Reset */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setCardFlipped(!cardFlipped)}
                  className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{cardFlipped ? "Flip to Front" : "Flip to Back"}</span>
                </button>
                <button
                  onClick={resetLanyard}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-all"
                  title="Reset Angles"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right: Live 3D Simulation Stage */}
            <div
              onMouseMove={handleLanyardMouseMove}
              onMouseLeave={resetLanyard}
              className="lg:col-span-8 min-h-[580px] p-8 sm:p-12 rounded-3xl bg-black border border-white/10 relative overflow-hidden flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none"
            >
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* -----------------------------------------------------------------
                  HANGING ROPES / STRAPS (TOP ANCHOR)
                 ----------------------------------------------------------------- */}
              <div className="absolute top-0 flex items-start justify-center pointer-events-none z-10">
                {/* Left Strap */}
                <div
                  style={{
                    width: "28px",
                    height: "140px",
                    marginRight: `${ropeDistance / 2}px`,
                  }}
                  className={`bg-gradient-to-b ${lanyardStrap.bg} shadow-2xl relative overflow-hidden transform -rotate-1`}
                >
                  <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_6px)]" />
                </div>

                {/* Right Strap */}
                <div
                  style={{
                    width: "28px",
                    height: "140px",
                    marginLeft: `${ropeDistance / 2}px`,
                  }}
                  className={`bg-gradient-to-b ${lanyardStrap.bg} shadow-2xl relative overflow-hidden transform rotate-1`}
                >
                  <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_6px)]" />
                </div>
              </div>

              {/* Chrome Metal Carabiner Clip */}
              <div className="relative z-20 mt-16 mb-2 flex flex-col items-center pointer-events-none">
                <div className="w-10 h-7 rounded-full border-4 border-slate-300 shadow-md bg-gradient-to-b from-slate-200 to-slate-400" />
                <div className="w-4 h-6 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 -mt-1 rounded-sm shadow-sm" />
              </div>

              {/* -----------------------------------------------------------------
                  3D ID CARD CONTAINER WITH GYRO TILT & SPECULAR HIGHLIGHT
                 ----------------------------------------------------------------- */}
              <div
                ref={lanyardCardRef}
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
                className="relative z-20"
              >
                <div
                  style={{
                    transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) ${cardFlipped ? "rotateY(180deg)" : ""}`,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.15s ease-out",
                  }}
                  className="relative w-72 sm:w-80 h-[440px] rounded-[28px] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 border-2 border-white/30 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
                  onClick={() => setCardFlipped(!cardFlipped)}
                >
                  {/* Dynamic Specular Light Flare */}
                  {lightSpecular && (
                    <div
                      style={{
                        background: `radial-gradient(circle at ${specX}% ${specY}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 35%, transparent 65%)`,
                      }}
                      className="absolute inset-0 pointer-events-none z-30 transition-all duration-75"
                    />
                  )}

                  {/* Hole punch header */}
                  <div className="w-14 h-4 rounded-full bg-slate-950 border border-white/20 mx-auto mt-4 shadow-inner relative z-20" />

                  {/* FRONT SIDE CONTENT */}
                  {!cardFlipped ? (
                    <div className="p-6 flex flex-col justify-between h-[390px] relative z-20 text-white">
                      <div>
                        {/* Header Branding */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-black text-xs">
                              D
                            </div>
                            <span className="text-[11px] font-black tracking-widest text-white uppercase">
                              DIGITAL LABOUR CHOWK
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-[9px] font-bold">
                            VERIFIED
                          </span>
                        </div>

                        {/* Character Display */}
                        <div className="w-full h-44 rounded-2xl bg-blue-950/80 border border-white/10 relative overflow-hidden flex items-end justify-center mb-4">
                          <Image
                            src={selectedWorkerForCard.gif}
                            alt={selectedWorkerForCard.name}
                            fill
                            className="object-contain object-bottom"
                            unoptimized
                          />
                        </div>

                        {/* Worker Identity */}
                        <div>
                          <div className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">
                            {selectedWorkerForCard.craft}
                          </div>
                          <h4 className="text-xl font-black text-white leading-tight">
                            {selectedWorkerForCard.name} / {selectedWorkerForCard.subtitle}
                          </h4>
                        </div>
                      </div>

                      {/* Footer Badge */}
                      <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100 font-semibold">
                        <span>Benchmark: {selectedWorkerForCard.wage}/day</span>
                        <span className="text-amber-300 font-bold">100% DBT</span>
                      </div>
                    </div>
                  ) : (
                    /* BACK SIDE CONTENT */
                    <div
                      style={{ transform: "rotateY(180deg)" }}
                      className="p-6 flex flex-col justify-between h-[390px] relative z-20 text-white"
                    >
                      <div className="space-y-4">
                        <div className="text-center">
                          <span className="text-[10px] uppercase tracking-widest text-blue-200 font-bold block">
                            SHRAMIK IDENTITY CARD
                          </span>
                          <span className="text-xs text-white/70">ISO 9001:2015 Certified Verification</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center">
                          <QrCode className="w-24 h-24 text-white" />
                        </div>

                        <div className="text-[11px] text-slate-200 space-y-1 font-mono">
                          <div>• Aadhaar: XXXX-XXXX-4819</div>
                          <div>• Direct Bank: Linked & Active</div>
                          <div>• Insurance ID: #DLC-INS-2026</div>
                        </div>
                      </div>

                      <div className="text-center text-[10px] text-blue-200 font-semibold pt-3 border-t border-white/15">
                        Toll-Free Helpline: 1800-8890-555
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Instructions banner */}
              <div className="mt-8 text-center text-xs text-slate-400 font-medium">
                Move your mouse around to trigger realistic gyro rotation and specular light. Tap the card to flip it.
              </div>
            </div>

          </div>
        )}

        {/* =====================================================================
            TAB 3: PROTRUSION & CARD DEPTH STUDIO (FIGMA FRAME 8 CALIBRATION)
           ===================================================================== */}
        {activeTab === "card-studio" && (
          <div className="w-full py-8 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Panel */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0F1424] border border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Figma Frame 8 Geometry Tuning
                </span>
                <h3 className="text-xl font-black text-white">Card Depth Calibrator</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Inspect the 3D protrusion bounds, test background contrast, and tune radius and baseline heights.
                </p>
              </div>

              {/* Choose Worker to Test */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Select Worker Asset</label>
                <div className="grid grid-cols-3 gap-1.5 max-h-36 overflow-y-auto p-1 bg-black/30 rounded-xl border border-white/10">
                  {ALL_WORKERS.map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setStudioWorker(w)}
                      className={`p-1.5 rounded-lg text-center text-[11px] font-bold transition-all ${
                        studioWorker.id === w.id
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {w.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background Color Switcher */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Canvas Background</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "white", label: "Pure White", bg: "bg-white text-slate-900 border-slate-300" },
                    { id: "dark", label: "Obsidian", bg: "bg-slate-950 text-white border-white/20" },
                    { id: "blue", label: "DLC Blue", bg: "bg-[#0C59D4] text-white border-blue-400" },
                    { id: "grid", label: "Grid Lines", bg: "bg-slate-900 text-blue-300 border-blue-500/30" },
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setCanvasBg(preset.id as any)}
                      className={`p-2 rounded-xl text-[11px] font-bold border transition-all ${preset.bg} ${
                        canvasBg === preset.id ? "ring-2 ring-blue-500 scale-105" : "opacity-70"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Container Color */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Card Container Hex</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={cardBgColor}
                    onChange={(e) => setCardBgColor(e.target.value)}
                    className="w-10 h-10 rounded-xl bg-transparent border-0 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={cardBgColor}
                    onChange={(e) => setCardBgColor(e.target.value)}
                    className="flex-1 p-2 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-white"
                  />
                </div>
              </div>

              {/* Dimension Sliders */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Vertical Protrusion (Negative Y)</span>
                    <span className="text-amber-400 font-mono">+{protrusionHeight}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="90"
                    value={protrusionHeight}
                    onChange={(e) => setProtrusionHeight(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Black Base Div Height</span>
                    <span className="text-amber-400 font-mono">{blackBarHeight}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    value={blackBarHeight}
                    onChange={(e) => setBlackBarHeight(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Corner Radius</span>
                    <span className="text-amber-400 font-mono">{borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="48"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Right: Live Card Calibration Stage */}
            <div
              className={`lg:col-span-8 min-h-[560px] p-8 sm:p-16 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-300 ${
                canvasBg === "white"
                  ? "bg-white"
                  : canvasBg === "dark"
                  ? "bg-slate-950"
                  : canvasBg === "blue"
                  ? "bg-[#0C59D4]"
                  : "bg-[#070B16] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
              }`}
            >
              {/* STAGE CARD CONTAINER */}
              <div className="relative w-full max-w-sm pt-20">
                
                {/* Visual Height Protrusion Guide line when inspecting */}
                {inspectMode && (
                  <div
                    style={{ bottom: `calc(100% - ${protrusionHeight}px)` }}
                    className="absolute inset-x-0 border-t-2 border-dashed border-red-500 pointer-events-none z-40 flex items-center justify-end pr-2"
                  >
                    <span className="bg-red-500 text-white text-[9px] px-1 font-mono font-bold">
                      Protrusion Top: +{protrusionHeight}px
                    </span>
                  </div>
                )}

                {/* THE CARD BOX */}
                <div
                  style={{
                    backgroundColor: cardBgColor,
                    borderRadius: `${borderRadius}px`,
                  }}
                  className="relative w-full overflow-visible shadow-2xl transition-all"
                >
                  {/* Watermark */}
                  <div
                    aria-hidden="true"
                    className="absolute right-4 bottom-6 text-5xl font-black stroke-watermark pointer-events-none select-none z-0"
                  >
                    {studioWorker.name}
                  </div>

                  {/* Left Text */}
                  <div className="relative z-20 max-w-[48%] p-7 sm:p-9 min-h-[220px] flex flex-col justify-center">
                    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-2">
                      Category Name
                    </span>
                    <h3 className="text-2xl sm:text-[32px] font-black text-slate-950 leading-[1.08] tracking-tight">
                      {studioWorker.name} / <br />
                      <span>{studioWorker.subtitle}</span>
                    </h3>
                  </div>

                  {/* PROTRUDING WORKER CHARACTER GIF */}
                  <div
                    style={{
                      bottom: `${blackBarHeight}px`,
                      height: `calc(220px + ${protrusionHeight}px)`,
                    }}
                    className={`absolute right-0 w-[54%] pointer-events-none overflow-visible z-10 flex items-end justify-end ${
                      inspectMode ? "ring-2 ring-amber-500 ring-offset-2" : ""
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={studioWorker.gif}
                        alt={studioWorker.name}
                        fill
                        className="object-contain object-bottom"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* SOLID BLACK BOTTOM DIV */}
                  <div
                    style={{
                      height: `${blackBarHeight}px`,
                      borderBottomLeftRadius: `${borderRadius}px`,
                      borderBottomRightRadius: `${borderRadius}px`,
                    }}
                    className="w-full bg-slate-950"
                  />
                </div>
              </div>

              <div
                className={`mt-12 text-center text-xs font-semibold ${
                  canvasBg === "white" ? "text-slate-600" : "text-slate-400"
                }`}
              >
                Geometry: Horizontal Bounds = Right 0 (Contains Character) • Protrusion = +{protrusionHeight}px above off-white surface • Bottom Div = {blackBarHeight}px grounding.
              </div>
            </div>

          </div>
        )}

        {/* =====================================================================
            TAB 4: SENSORY UX & MICRO-INTERACTION EXPERIMENTS
           ===================================================================== */}
        {activeTab === "micro-ui" && (
          <div className="w-full py-8 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                Sensory UI & Interactive Conversion Widgets
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Micro-Interactions & Financial Calculators
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Components designed to boost worker trust, demonstrate direct financial benefits, and deliver rewarding tactile responses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* WIDGET 1: DIRECT WAGE VS JAMADAR CALCULATOR */}
              <div className="p-6 rounded-3xl bg-[#0F1424] border border-white/10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      ₹
                    </div>
                    <h4 className="text-base font-black text-white">Kamai Calculator</h4>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Zero Jamadar Cut
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>Daily Wage (Dihadi):</span>
                      <span className="text-amber-400 font-bold">₹{wageDailyRate}/day</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="2500"
                      step="50"
                      value={wageDailyRate}
                      onChange={(e) => setWageDailyRate(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>Working Days in Month:</span>
                      <span className="text-blue-400 font-bold">{wageDays} Days</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="30"
                      value={wageDays}
                      onChange={(e) => setWageDays(Number(e.target.value))}
                      className="w-full accent-blue-500"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>With DLC (100% DBT):</span>
                    <span className="text-emerald-400 font-black text-sm">₹{(wageDailyRate * wageDays).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>With Jamadar (25% Cut):</span>
                    <span className="text-red-400 font-bold line-through">₹{Math.round(wageDailyRate * wageDays * 0.75).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-bold text-amber-300">
                    <span>Aapki Extra Bachat:</span>
                    <span>+₹{Math.round(wageDailyRate * wageDays * 0.25).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* WIDGET 2: BIOMETRIC SCANNER SIMULATION */}
              <div className="p-6 rounded-3xl bg-[#0F1424] border border-white/10 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-black text-white">Biometric Verification</h4>
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-xs text-slate-400">
                    Instant skill validation with animated laser HUD scanning state.
                  </p>
                </div>

                <div className="relative w-full h-40 rounded-2xl bg-black/50 border border-blue-500/30 overflow-hidden flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center relative">
                    <HardHat className="w-10 h-10 text-slate-300" />
                    {scannerActive && (
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse shadow-lg shadow-emerald-400" />
                    )}
                  </div>

                  {scannerActive && (
                    <div className="absolute bottom-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                      Aadhaar Linked • Verified
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setScannerActive(!scannerActive)}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                    scannerActive
                      ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30"
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
                >
                  {scannerActive ? "✓ Verified (Tap to Reset)" : "Simulate Biometric Scan"}
                </button>
              </div>

              {/* WIDGET 3: AUDIO STORY / VOICE TESTIMONIAL CARD */}
              <div className="p-6 rounded-3xl bg-[#0F1424] border border-white/10 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-black text-white">Sunye Shramik Ki Kahani</h4>
                    <Volume2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-xs text-slate-400">
                    Accessible regional audio voice note for workers who prefer listening over reading.
                  </p>
                </div>

                {/* Animated Audio Waveform */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-1.5 justify-center h-24">
                  {[40, 75, 30, 90, 60, 100, 45, 80, 50, 70, 95, 35, 65, 85].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        height: audioPlaying ? `${h}%` : "15%",
                        transition: "height 0.2s ease-in-out",
                      }}
                      className="w-1.5 rounded-full bg-gradient-to-t from-amber-500 to-yellow-300"
                    />
                  ))}
                </div>

                <button
                  onClick={() => setAudioPlaying(!audioPlaying)}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
                >
                  {audioPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{audioPlaying ? "Pause Audio" : "Sunye (Listen Story)"}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: RESPONSIVE VIEWPORT SANDBOX
           ===================================================================== */}
        {activeTab === "viewport" && (
          <div className="w-full py-8 px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
            {/* Viewport Control Bar */}
            <div className="p-4 rounded-2xl bg-[#0F1424] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-300">Device Simulator:</span>
                {[
                  { id: "100%", label: "Desktop Full", icon: Monitor },
                  { id: "1280px", label: "Laptop (1280px)", icon: Laptop },
                  { id: "768px", label: "Tablet (768px)", icon: Layers },
                  { id: "390px", label: "iPhone (390px)", icon: Smartphone },
                ].map((d) => {
                  const Icon = d.icon;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setViewportWidth(d.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                        viewportWidth === d.id
                          ? "bg-blue-600 text-white"
                          : "bg-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{d.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewportGrid(!viewportGrid)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                    viewportGrid
                      ? "bg-blue-600/20 border-blue-500 text-blue-300"
                      : "bg-white/5 border-white/10 text-slate-400"
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid Backdrop</span>
                </button>
              </div>
            </div>

            {/* Simulating Stage */}
            <div className="w-full flex justify-center py-6 bg-slate-950/60 rounded-3xl border border-white/10 min-h-[600px] overflow-x-auto">
              <div
                style={{
                  width: viewportWidth,
                  maxWidth: "100%",
                  transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-white text-slate-900 ${
                  viewportGrid
                    ? "bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:20px_20px]"
                    : ""
                }`}
              >
                {/* Simulated Top Browser Chrome */}
                <div className="w-full bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="font-mono text-[11px] text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200">
                    http://localhost:3001/worker ({viewportWidth})
                  </div>
                  <div className="w-4" />
                </div>

                {/* Simulated Content: Miniature 3x4 Grid */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-2xl font-black text-slate-950">Sabhi Shramik Shreniyan</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      11 Core Crafts & Leadership Roles • Direct App Hiring
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ALL_WORKERS.slice(0, 6).map((w) => (
                      <div
                        key={w.id}
                        className="relative w-full bg-[#F4F4F6] rounded-2xl overflow-visible shadow-sm pt-8"
                      >
                        <div className="p-4 max-w-[50%] min-h-[140px] flex flex-col justify-center">
                          <span className="text-[9px] font-bold text-slate-400 uppercase">{w.craft}</span>
                          <h4 className="text-base font-black text-slate-950 leading-tight mt-1">
                            {w.name} / <br />
                            <span>{w.subtitle}</span>
                          </h4>
                        </div>

                        <div className="absolute right-0 bottom-3 w-[50%] h-[160px] pointer-events-none">
                          <Image
                            src={w.gif}
                            alt={w.name}
                            fill
                            className="object-contain object-bottom"
                            unoptimized
                          />
                        </div>

                        <div className="w-full h-3 bg-slate-950 rounded-b-2xl" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      {/* =======================================================================
          GLOBAL STYLES FOR TESTING INSPECTOR
         ======================================================================= */}
      <style jsx global>{`
        .testing-inspect-active div,
        .testing-inspect-active a,
        .testing-inspect-active section {
          outline: 1px dashed rgba(59, 130, 246, 0.45) !important;
        }
      `}</style>
    </div>
  );
}
