"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Download, Sparkles, CheckCircle2 } from "lucide-react";

interface SceneMeta {
  id: number;
  img: string;
  alt: string;
  actTitle: string;
  storyLine: string;
}

const SCENES: SceneMeta[] = [
  {
    id: 1,
    img: "/film/scene-1-1080p.webp",
    alt: "Physical labour chowk establishing shot",
    actTitle: "Act I • The Roadside Chowk",
    storyLine: "Every morning at dawn across India, millions of skilled tradesmen wait by the roadside, hoping for work.",
  },
  {
    id: 2,
    img: "/film/scene-2-1080p.webp",
    alt: "Contractor arrives on commuter motorcycle",
    actTitle: "Act II • Searching for Manpower",
    storyLine: "Contractors travel from chowk to chowk on motorcycles, desperately searching for trustworthy tradesmen.",
  },
  {
    id: 3,
    img: "/film/scene-3-1080p.webp",
    alt: "Contractor speaks: I need more workers",
    actTitle: "Act III • The Demand Gap",
    storyLine: "Traditional physical chowks are unpredictable: contractors face shortages while workers return empty-handed.",
  },
  {
    id: 4,
    img: "/film/scene-4-1080p.webp",
    alt: "Worker holding up smartphone: Download DLC mobile app",
    actTitle: "Act IV • The Digital Shift",
    storyLine: "India's craftsmen have gone digital. A smartphone eliminates hours of roadside waiting with direct job dispatches.",
  },
  {
    id: 5,
    img: "/film/scene-5-1080p.webp",
    alt: "Over-the-shoulder smartphone view with DLC app on Google Play",
    actTitle: "Act V • Direct Matchmaking",
    storyLine: "0% commission, biometric Aadhaar KYC, and 100% transparent daily wage settlements direct to bank accounts.",
  },
  {
    id: 6,
    img: "/film/scene-6-1080p.webp",
    alt: "Contractor and verified workers standing together at construction site",
    actTitle: "Act VI • Building India With Dignity",
    storyLine: "Verified manpower deployed in 2 hours. Safety, compliance, and guaranteed wages formalizing Indian construction.",
  },
];

interface Leaf {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  flip: number;
  vFlip: number;
  color: string;
  opacity: number;
}

export default function AboutHeroFilmScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(105);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-play timer ref for mobile
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile viewport (< 640px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Measure dynamic site header height to eliminate any margin between header and film
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = document.querySelector("header");
      if (headerEl) {
        setHeaderHeight(headerEl.getBoundingClientRect().height);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // ---------------------------------------------------------------------------
  // 1. SCROLL PROGRESS ENGINE (Smooth RAF Tracking for Mobile & Desktop)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(p);

      // Determine active scene (0 to 5)
      const sceneIdx = Math.min(SCENES.length - 1, Math.floor(p * SCENES.length));
      setActiveScene(sceneIdx);
    };

    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Jump to specific scene dot
  const scrollToScene = (sceneIdx: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = sceneIdx / (SCENES.length - 1);
    const targetY = containerRef.current.offsetTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // Touch swipe support (horizontal swipe jumps scenes via smooth scroll)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        // Swiped left -> next scene
        scrollToScene(Math.min(SCENES.length - 1, activeScene + 1));
      } else {
        // Swiped right -> prev scene
        scrollToScene(Math.max(0, activeScene - 1));
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ---------------------------------------------------------------------------
  // 2. BLOWING LEAVES PARTICLE SYSTEM (Active ONLY during Scene 1)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const leafColors = ["#48762B", "#5E8F35", "#3D6222", "#7AA845", "#517E30"];
    const leaves: Leaf[] = [];
    const NUM_LEAVES = 28;

    const spawnLeaf = (resetAnywhere = false): Leaf => {
      const startX = resetAnywhere
        ? Math.random() * width
        : width * 0.55 + Math.random() * (width * 0.45);
      const startY = resetAnywhere
        ? Math.random() * height * 0.7
        : -20 + Math.random() * (height * 0.35);

      return {
        x: startX,
        y: startY,
        size: 7 + Math.random() * 8,
        vx: -(1.2 + Math.random() * 1.6),
        vy: 0.8 + Math.random() * 1.3,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.05,
        flip: Math.random() * Math.PI,
        vFlip: 0.03 + Math.random() * 0.04,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        opacity: 0.6 + Math.random() * 0.35,
      };
    };

    for (let i = 0; i < NUM_LEAVES; i++) {
      leaves.push(spawnLeaf(true));
    }

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Leaves blow ONLY in Scene 1 (progress <= 0.12), fading completely to 0 by progress 0.18
      const globalLeafOpacity = isMobile
        ? activeScene === 0
          ? 1
          : 0
        : progress <= 0.12
        ? 1
        : Math.max(0, 1 - (progress - 0.12) / 0.06);

      if (globalLeafOpacity > 0.01) {
        for (let i = 0; i < leaves.length; i++) {
          const l = leaves[i];

          l.x += l.vx + Math.sin(time + l.flip) * 0.9;
          l.y += l.vy;
          l.rotation += l.vRot;
          l.flip += l.vFlip;

          if (l.y > height + 30 || l.x < -30) {
            leaves[i] = spawnLeaf(false);
            continue;
          }

          ctx.save();
          ctx.translate(l.x, l.y);
          ctx.rotate(l.rotation);
          ctx.scale(Math.cos(l.flip), 1);
          ctx.globalAlpha = l.opacity * globalLeafOpacity;

          ctx.beginPath();
          const s = l.size;
          ctx.moveTo(0, -s);
          ctx.bezierCurveTo(s * 0.75, -s * 0.3, s * 0.75, s * 0.5, 0, s);
          ctx.bezierCurveTo(-s * 0.75, s * 0.5, -s * 0.75, -s * 0.3, 0, -s);
          ctx.fillStyle = l.color;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(0, -s * 0.85);
          ctx.lineTo(0, s * 0.95);
          ctx.strokeStyle = "rgba(0,0,0,0.18)";
          ctx.lineWidth = 0.7;
          ctx.stroke();

          ctx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [progress, activeScene, isMobile]);

  // ---------------------------------------------------------------------------
  // 3. ZERO-FLICKER MATHEMATICAL CROSSFADE
  // ---------------------------------------------------------------------------
  const getSceneOpacities = useCallback((p: number) => {
    const num = SCENES.length;
    const scaled = p * (num - 1);
    const base = Math.floor(scaled);
    const frac = scaled - base;

    const opacities = new Array(num).fill(0);
    if (base >= num - 1) {
      opacities[num - 1] = 1;
    } else {
      const ease = (1 - Math.cos(frac * Math.PI)) / 2;
      opacities[base] = 1 - ease;
      opacities[base + 1] = ease;
    }
    return opacities;
  }, []);

  const opacities = getSceneOpacities(progress);

  // ---------------------------------------------------------------------------
  // 4. SCENE 1 BRAND TITLE: Prominently visible in Scene 1; smoothly vanishes upon scrolling towards Scene 2
  // ---------------------------------------------------------------------------
  // Fully visible when at rest in Scene 1 (progress <= 0.02).
  // Smoothly fades out as user scrolls, completely vanishing by progress = 0.08.
  const scene1TextOpacity = activeScene === 0 ? Math.max(0, 1 - progress / 0.08) : 0;
  const isScene1TextVisible = scene1TextOpacity > 0.001;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250vh] sm:h-[450vh] bg-[#EBF3FB] m-0 p-0"
      style={{
        ['--header-height' as string]: `${headerHeight}px`,
      }}
      aria-label="DLC Visual Journey Scroll Story"
    >
      {/* STAGE: Sticky on mobile and desktop, filling screen below header */}
      <div
        className="sticky w-full h-[calc(100vh-var(--header-height))] overflow-hidden select-none bg-[#EBF3FB] flex flex-col justify-start"
        style={{
          top: `${headerHeight}px`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Soft Background Morning Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E2EFFB] via-[#EAF3FA] to-[#DCEBFA] pointer-events-none" />

        {/* =================================================================== */}
        {/* 16:9 CINEMATIC STAGE: Identical 16:9 Ratio on Mobile; Full on Desktop */}
        {/* =================================================================== */}
        <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-full overflow-hidden shrink-0">
          
          {/* STACKED 6 SCENE FRAMES */}
          {SCENES.map((scene, idx) => {
            const op = opacities[idx];
            return (
              <div
                key={scene.id}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                  opacity: op,
                  pointerEvents: op > 0.5 ? "auto" : "none",
                  zIndex: Math.round(op * 10),
                }}
              >
                <Image
                  src={scene.img}
                  alt={scene.alt}
                  fill
                  priority={idx <= 1}
                  quality={75}
                  sizes="100vw"
                  className="object-cover object-top select-none w-full h-full"
                />
              </div>
            );
          })}

          {/* CANVAS OVERLAY: Calming Wind-Blown Leaves Simulation (Scene 1 Only) */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          />

          {/* =============================================================== */}
          {/* SCENE 1 BRAND TITLE: "Digital Labour Chowk" + Short Single Punchline */}
          {/* =============================================================== */}
          {isScene1TextVisible && (
            <div
              className="absolute inset-y-0 left-0 w-[72%] sm:w-[58%] lg:w-[48%] p-3 sm:p-12 lg:p-16 flex flex-col justify-center pointer-events-none transition-opacity duration-300"
              style={{
                zIndex: 40,
                opacity: scene1TextOpacity,
              }}
            >
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-md border border-blue-200/80 text-[#0C59D4] text-[8px] sm:text-xs font-black uppercase tracking-wider mb-1 sm:mb-3.5 shadow-sm w-fit">
                <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#0C59D4]" />
                <span>One Nation • One Labour Chowk</span>
              </div>

              <h1 className="text-base sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-0.5 sm:mb-3 drop-shadow-sm">
                Digital Labour <span className="text-[#0C59D4]">Chowk</span>
              </h1>

              {/* Short Single Punchline */}
              <p className="text-[10px] sm:text-xl lg:text-2xl font-black text-slate-800 tracking-tight leading-snug max-w-md drop-shadow-xs">
                India&apos;s 1st Digital Construction Workforce Platform.
              </p>

              <div className="mt-1.5 sm:mt-6 inline-flex items-center gap-1 sm:gap-2 text-[8px] sm:text-xs font-bold text-[#0C59D4] bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-0.5 sm:py-2 rounded-md sm:rounded-xl border border-blue-200 shadow-sm w-fit">
                <span>Scroll down to explore</span>
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* DESKTOP FLOATING BOTTOM STORY SUBTITLE & PROGRESS BAR           */}
          {/* =============================================================== */}
          <div className="hidden sm:flex absolute inset-x-0 bottom-6 z-30 flex-col items-center px-6 pointer-events-none">
            <div className="bg-[#080C16]/88 backdrop-blur-md border border-white/15 text-white rounded-full px-6 py-2.5 shadow-2xl flex items-center gap-4 max-w-2xl w-full justify-between pointer-events-auto">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider bg-blue-500/20 border border-blue-400/30 px-2 py-0.5 rounded shrink-0">
                  0{activeScene + 1}/06
                </span>
                <p className="text-xs md:text-sm font-medium text-slate-200 truncate">
                  {SCENES[activeScene].storyLine}
                </p>
              </div>

              {/* Scene jump dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                {SCENES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollToScene(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeScene === idx ? "w-5 bg-blue-400" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Jump to scene ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* DESKTOP SCENES 5 & 6 INTERACTIVE APP DOWNLOAD / CTA OVERLAY     */}
          {/* =============================================================== */}
          {progress >= 0.72 && (
            <div
              className="hidden sm:flex absolute inset-x-0 bottom-20 z-30 items-center justify-center p-3 pointer-events-auto transition-opacity duration-300"
              style={{
                opacity: progress >= 0.75 ? Math.min(1, (progress - 0.75) / 0.1) : 0,
              }}
            >
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 shadow-xl max-w-lg w-full flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                    <span>Ready to Deploy or Work?</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Join 350,000+ verified workers and 20,000+ contractors on DLC.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0C59D4] hover:bg-blue-700 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm transition-all active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Get App</span>
                  </a>
                  <a
                    href="https://onboarding.digitallabourchowk.com/login"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] transition-colors"
                  >
                    <span>Web Portal</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* =============================================================== */}
        {/* MOBILE NARRATIVE & METRICS DOCK (Fills bottom screen - 0 blank space!) */}
        {/* =============================================================== */}
        <div className="sm:hidden flex-1 w-full bg-white flex flex-col justify-between p-3.5 border-t border-slate-200/90 shadow-xs overflow-hidden select-none">
          {/* Active Scene Story Narration */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0C59D4] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                {SCENES[activeScene].actTitle}
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400">
                0{activeScene + 1} / 06
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2">
              {SCENES[activeScene].storyLine}
            </p>

            {/* Scene jump dots on mobile */}
            <div className="flex items-center gap-1.5 pt-0.5">
              {SCENES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToScene(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeScene === idx ? "w-5 bg-[#0C59D4]" : "w-1.5 bg-slate-200"
                  }`}
                  aria-label={`Jump to scene ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Scene 5 & 6 Quick Download CTA (when activeScene >= 4) OR Platform Metrics Grid */}
          {activeScene >= 4 ? (
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-2.5 flex items-center justify-between gap-2 mt-1">
              <div className="min-w-0">
                <h5 className="text-[11px] font-black text-slate-900 leading-tight">
                  Ready to Deploy Manpower?
                </h5>
                <p className="text-[9px] text-slate-500 font-medium truncate">
                  350k+ workers • 20k+ contractors
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0C59D4] text-white font-bold text-[9px] uppercase tracking-wider shadow-xs"
                >
                  <Download className="w-2.5 h-2.5" />
                  <span>Get App</span>
                </a>
                <a
                  href="https://onboarding.digitallabourchowk.com/login"
                  className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-[9px]"
                >
                  <span>Portal</span>
                  <ArrowRight className="w-2 h-2" />
                </a>
              </div>
            </div>
          ) : (
            /* Quick Platform Metrics Grid (Brought directly closer on mobile!) */
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <div className="flex flex-col border-l-2 border-[#0C59D4] pl-2">
                <span className="text-sm font-black text-[#0C59D4] leading-tight">3,50,000+</span>
                <span className="text-[10px] font-bold text-slate-800">Verified Workers</span>
                <span className="text-[8px] text-slate-400">Across 6,000+ towns</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#0C59D4] pl-2">
                <span className="text-sm font-black text-[#0C59D4] leading-tight">20,000+</span>
                <span className="text-[10px] font-bold text-slate-800">Contractors</span>
                <span className="text-[8px] text-slate-400">Trusted on-site</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#0C59D4] pl-2">
                <span className="text-sm font-black text-[#0C59D4] leading-tight">850+</span>
                <span className="text-[10px] font-bold text-slate-800">Builders</span>
                <span className="text-[8px] text-slate-400">Turnkey EPCs</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#0C59D4] pl-2">
                <span className="text-sm font-black text-[#0C59D4] leading-tight">15+</span>
                <span className="text-[10px] font-bold text-slate-800">Hubs</span>
                <span className="text-[8px] text-slate-400">Delhi to Bengaluru</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
