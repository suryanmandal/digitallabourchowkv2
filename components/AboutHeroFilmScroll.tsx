"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Download, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";

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

  // ---------------------------------------------------------------------------
  // 1. SCROLL PROGRESS ENGINE (Smooth RAF Tracking)
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

  // ---------------------------------------------------------------------------
  // 2. BLOWING LEAVES PARTICLE SYSTEM (Inspired by scene1.gif)
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
      // Spawn predominantly from the tree area in top-right (x: 55% - 98%, y: 0% - 35%)
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
        vx: -(1.2 + Math.random() * 1.6), // Drift towards left
        vy: 0.8 + Math.random() * 1.3, // Fall down
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

      // Leaves are most prominent during Scenes 1 - 4 (the tree chowk scenes)
      // They gently fade as scene 5 & 6 take over
      const globalLeafOpacity = progress < 0.7 ? 1 : Math.max(0, 1 - (progress - 0.7) / 0.15);

      if (globalLeafOpacity > 0.01) {
        for (let i = 0; i < leaves.length; i++) {
          const l = leaves[i];

          // Gentle sinusoidal breeze sway
          l.x += l.vx + Math.sin(time + l.flip) * 0.9;
          l.y += l.vy;
          l.rotation += l.vRot;
          l.flip += l.vFlip;

          // Recycle when out of bounds
          if (l.y > height + 30 || l.x < -30) {
            leaves[i] = spawnLeaf(false);
            continue;
          }

          // Draw realistic botanical leaf with 3D flip transform
          ctx.save();
          ctx.translate(l.x, l.y);
          ctx.rotate(l.rotation);
          // ScaleX by cos(flip) creates a tranquil 3D tumbling effect
          ctx.scale(Math.cos(l.flip), 1);
          ctx.globalAlpha = l.opacity * globalLeafOpacity;

          // Leaf shape
          ctx.beginPath();
          const s = l.size;
          ctx.moveTo(0, -s);
          ctx.bezierCurveTo(s * 0.75, -s * 0.3, s * 0.75, s * 0.5, 0, s);
          ctx.bezierCurveTo(-s * 0.75, s * 0.5, -s * 0.75, -s * 0.3, 0, -s);
          ctx.fillStyle = l.color;
          ctx.fill();

          // Leaf vein
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
  }, [progress]);

  // ---------------------------------------------------------------------------
  // 3. ZERO-FLICKER CROSSFADE OPACITY CALCULATION
  // Sum of crossfading adjacent scenes is strictly 1.0 (Zero dip, zero black)
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
      // Smooth cosine easing
      const ease = (1 - Math.cos(frac * Math.PI)) / 2;
      opacities[base] = 1 - ease;
      opacities[base + 1] = ease;
    }
    return opacities;
  }, []);

  const opacities = getSceneOpacities(progress);

  // ---------------------------------------------------------------------------
  // 4. SCENE 1 BRAND TITLE WIPE-OUT (Slides left & fades out as user scrolls)
  // ---------------------------------------------------------------------------
  // Fully visible when p < 0.04. Smoothly slides left and wipes out by p = 0.18
  const wipeProgress = Math.max(0, Math.min(1, (progress - 0.03) / 0.14));
  const scene1TextOpacity = Math.max(0, 1 - wipeProgress);
  const scene1TextTranslateX = -wipeProgress * 65; // Shift left 65px as it wipes out
  const isScene1TextVisible = scene1TextOpacity > 0.01;

  // Jump to specific scene dot
  const scrollToScene = (sceneIdx: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = sceneIdx / (SCENES.length - 1);
    const targetY = containerRef.current.offsetTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450vh] bg-[#0A0E17]"
      aria-label="DLC Visual Journey Scroll Story"
    >
      {/* STICKY FULL-VIEWPORT STAGE */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#EBF3FB] select-none">
        
        {/* Soft Background Morning Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E2EFFB] via-[#EAF3FA] to-[#DCEBFA] pointer-events-none" />

        {/* =================================================================== */}
        {/* TOP BRAND NAV BAR (Minimalist Glass Strip)                           */}
        {/* =================================================================== */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 z-30 flex items-center justify-between pointer-events-auto">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
            <Link href="/" className="hover:text-[#0C59D4] transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#0C59D4] font-bold">About Us</span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">
              The Film
            </span>
          </div>

          {/* Scene Progress Indicator Pills */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
            {SCENES.map((s, idx) => {
              const isCurrent = activeScene === idx;
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => scrollToScene(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "w-7 bg-[#0C59D4]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Jump to ${s.actTitle}`}
                  title={s.actTitle}
                />
              );
            })}
            <span className="text-[11px] font-mono font-bold text-slate-600 ml-2">
              0{activeScene + 1} / 06
            </span>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 16:9 WIDESCREEN CINEMATIC STAGE (The Film Viewport)                 */}
        {/* =================================================================== */}
        <div className="relative w-full max-w-[1400px] h-full max-h-[78vh] sm:max-h-[82vh] aspect-[16/9] mx-auto sm:px-6 flex items-center justify-center">
          
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-300/60 bg-[#E8F2FA]">
            
            {/* STACKED 6 SCENE FRAMES (Absolute overlay with mathematical crossfade) */}
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
                    quality={88}
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    className="object-cover object-center select-none"
                  />
                </div>
              );
            })}

            {/* CANVAS OVERLAY: Calming Wind-Blown Leaves Simulation */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
            />

            {/* =============================================================== */}
            {/* SCENE 1 OVERLAY: "Digital Labour Chowk" Typography (Wipes Out)    */}
            {/* =============================================================== */}
            {isScene1TextVisible && (
              <div
                className="absolute inset-y-0 left-0 w-full md:w-[54%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center z-25 pointer-events-none will-change-transform"
                style={{
                  opacity: scene1TextOpacity,
                  transform: `translateX(${scene1TextTranslateX}px)`,
                  transition: "opacity 0.05s linear",
                }}
              >
                {/* Brand Category Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-[#0C59D4] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 shadow-xs w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-[#0C59D4]" />
                  <span>India&apos;s 1st Construction Workforce Platform</span>
                </div>

                {/* Primary Hero Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-3 sm:mb-4 drop-shadow-xs">
                  Digital Labour <span className="text-[#0C59D4]">Chowk</span>
                </h1>

                {/* Brand Moniker / Motto */}
                <p className="text-xs sm:text-sm md:text-base font-bold text-slate-700 tracking-wide uppercase mb-3 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#0C59D4]" />
                  <span>One Nation • One Labour Chowk</span>
                </p>

                {/* Contextual Narrative Paragraph */}
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-lg mb-6 drop-shadow-xs">
                  Replacing roadside uncertainty with dignity, speed, and trust. 
                  Every morning, millions gather at physical chowks—DLC brings them directly to verified projects.
                </p>

                {/* Animated Scroll Down Prompt */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0C59D4] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-200 shadow-xs w-fit animate-pulse">
                  <span>Scroll down to play the story</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            )}

            {/* =============================================================== */}
            {/* SCENES 5 & 6 INTERACTIVE APP DOWNLOAD / CTA OVERLAY             */}
            {/* =============================================================== */}
            {progress >= 0.72 && (
              <div
                className="absolute inset-x-0 bottom-4 sm:bottom-6 z-30 flex items-center justify-center p-3 sm:p-4 pointer-events-auto transition-all duration-300"
                style={{
                  opacity: progress >= 0.75 ? Math.min(1, (progress - 0.75) / 0.1) : 0,
                }}
              >
                <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                      <span>Ready to Deploy or Work?</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Join 350,000+ verified workers and 20,000+ contractors on DLC today.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="https://play.google.com/store/apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0C59D4] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Get App</span>
                    </a>
                    <a
                      href="https://onboarding.digitallabourchowk.com/login"
                      className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                    >
                      <span>Web Portal</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* =================================================================== */}
        {/* BOTTOM STORY SUBTITLE STRIP (Calm, Informative Narrative Caption)  */}
        {/* =================================================================== */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-3 sm:pt-4 pb-2 z-25 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          
          {/* Current Act Badge & Story Text */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold text-[#0C59D4] uppercase tracking-wider bg-blue-100/80 px-2.5 py-0.5 rounded-md self-center sm:self-auto shrink-0">
              {SCENES[activeScene].actTitle}
            </span>
            <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
              {SCENES[activeScene].storyLine}
            </p>
          </div>

          {/* Quick Scroll Indicator Hint */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500 shrink-0">
            <span>Scroll progress: {Math.round(progress * 100)}%</span>
            <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0C59D4] transition-all duration-75"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
