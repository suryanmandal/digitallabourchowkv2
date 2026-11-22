"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, Eye, Palette, Maximize2, Minimize2 } from "lucide-react";

export default function TestingPage() {
  // Modes: "wireframe" (Exact Figma Frame 8 teal), "character" (mason.gif), "overlay" (both)
  const [viewMode, setViewMode] = useState<"wireframe" | "character" | "overlay">("wireframe");
  // Canvas background: orange (exact from user diagram) or clean white
  const [canvasBg, setCanvasBg] = useState<"orange" | "white">("orange");
  // Full-bleed mode to hide header/footer distractions and match Figma canvas 1:1
  const [isFullBleed, setIsFullBleed] = useState(true);

  // Sync with URL hash
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "character" || hash === "wireframe" || hash === "overlay") {
        setViewMode(hash as any);
      }
      if (hash === "white") {
        setCanvasBg("white");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 flex flex-col items-center justify-center p-4 sm:p-8 relative ${
        canvasBg === "orange" ? "bg-[#F15A24]" : "bg-white"
      } ${isFullBleed ? "fixed inset-0 z-[9999] overflow-auto" : ""}`}
    >
      {/* =====================================================================
          MINIMAL FLOATING TOOLBAR
         ===================================================================== */}
      <div className="fixed top-4 z-50 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/20 shadow-2xl text-xs text-white">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
          <button
            onClick={() => setViewMode("wireframe")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === "wireframe"
                ? "bg-emerald-500 text-slate-950 shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Figma Frame 8 (Exact)
          </button>
          <button
            onClick={() => setViewMode("character")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === "character"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Worker Character (GIF)
          </button>
          <button
            onClick={() => setViewMode("overlay")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === "overlay"
                ? "bg-amber-400 text-slate-950 shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Overlay Both
          </button>
        </div>

        {/* Canvas BG Toggle */}
        <div className="flex items-center gap-1 border-l border-white/15 pl-2">
          <button
            onClick={() => setCanvasBg(canvasBg === "orange" ? "white" : "orange")}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 font-semibold flex items-center gap-1.5 transition-all"
            title="Toggle canvas background"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{canvasBg === "orange" ? "Orange Canvas" : "White Canvas"}</span>
          </button>
        </div>

        {/* Full-bleed toggle */}
        <button
          onClick={() => setIsFullBleed(!isFullBleed)}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition-all text-slate-300 hover:text-white"
          title={isFullBleed ? "Exit Fullscreen" : "Fullscreen Canvas"}
        >
          {isFullBleed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* =====================================================================
          EXACT CARD CONTAINER (PROPORTIONAL TO 1014 x 760 FIGMA SCHEMATIC)
          - Overall Width: 100% max-w-[840px]
          - White card (Left 34.5%): #F8F8F6, rounded top-left
          - Frame 8 (Right 65.5%): Protrudes 46.2% above white card, sits on black bar
          - Black Bottom Bar (Full 100%): #000000, rounded-b-[28px]
         ===================================================================== */}
      <div className="relative w-full max-w-[840px] pt-32 sm:pt-40 select-none">
        
        {/* "Frame 8" Label above the teal container */}
        {(viewMode === "wireframe" || viewMode === "overlay") && (
          <div className="absolute right-0 top-[60px] sm:top-[75px] w-[65.3%] pl-1 text-[13px] sm:text-[15px] font-medium text-white/80">
            Frame 8
          </div>
        )}

        {/* CARD WRAPPER */}
        <div className="relative w-full flex flex-col shadow-2xl">
          
          {/* MAIN UPPER BODY (White card on left, Frame 8 on right) */}
          <div className="relative w-full flex items-stretch">
            
            {/* ---------------------------------------------------------------
                LEFT COLUMN (34.5% width): OFF-WHITE CARD CONTAINER
                - Color: #F8F8F6
                - Rounded top-left: rounded-tl-[48px] sm:rounded-tl-[56px]
                - Text: Category name (faint) + Masons / Rajmistri (black bold)
               --------------------------------------------------------------- */}
            <div className="w-[34.7%] bg-[#F8F8F6] rounded-tl-[44px] sm:rounded-tl-[54px] pt-14 pb-12 sm:pt-20 sm:pb-16 pl-6 sm:pl-10 lg:pl-12 pr-4 flex flex-col justify-center min-h-[260px] sm:min-h-[320px] relative z-10">
              
              {/* Category Name (Faint white / light text) */}
              <span className="block text-xs sm:text-sm font-medium text-slate-300 tracking-wide mb-3 sm:mb-5">
                Category name
              </span>

              {/* Two-Line Title: Masons / Rajmistri */}
              <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-black leading-[1.08] tracking-tight">
                Masons / <br />
                <span>Rajmistri</span>
              </h2>
            </div>

            {/* ---------------------------------------------------------------
                RIGHT COLUMN (65.3% width): FRAME 8 / WORKER DISPLAY
                - Sits flush on top of the black bar
                - Protrudes vertically ~46% above the top of the white card
                - Right edge is flush with the black bar (never crosses horizontally)
               --------------------------------------------------------------- */}
            <div className="w-[65.3%] relative">
              
              {/* FRAME 8 CONTAINER (Absolute, anchored to bottom, protruding upwards) */}
              <div
                style={{
                  top: "calc(-46.2%)", // Extends 46.2% above white card top
                  bottom: "0px",       // Touches the black bottom bar
                }}
                className="absolute inset-x-0 overflow-visible"
              >
                {/* 1. EXACT TEAL BOX (#087A60) */}
                {(viewMode === "wireframe" || viewMode === "overlay") && (
                  <div
                    style={{
                      backgroundColor: "#087A60",
                      opacity: viewMode === "overlay" ? 0.5 : 1,
                    }}
                    className="w-full h-full relative z-20 flex items-center justify-center transition-opacity"
                  >
                    {viewMode === "wireframe" && (
                      <span className="text-white/40 text-lg sm:text-2xl font-bold font-mono tracking-widest uppercase">
                        Frame 8 (662 × 623px)
                      </span>
                    )}
                  </div>
                )}

                {/* 2. LIVE WORKER CHARACTER (Transparent GIF: mason.gif) */}
                {(viewMode === "character" || viewMode === "overlay") && (
                  <div className="absolute inset-0 z-10 flex items-end justify-end pointer-events-none">
                    <div className="relative w-full h-full">
                      <Image
                        src="/workers-gif/mason.gif"
                        alt="Mason / Rajmistri"
                        fill
                        className="object-contain object-bottom"
                        unoptimized
                        priority
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* -----------------------------------------------------------------
              SOLID BLACK BOTTOM BAR
              - Width: 100% (spans under both white card and Frame 8)
              - Height: 24px - 32px
              - Rounded bottom corners: rounded-bl-[24px] sm:rounded-bl-[32px]
             ----------------------------------------------------------------- */}
          <div className="w-full h-6 sm:h-8 bg-black rounded-b-[24px] sm:rounded-b-[32px] relative z-30" />

        </div>

        {/* Geometric Specs Legend */}
        <div className="mt-8 text-center text-xs font-mono text-white/90 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
          <span>Card Width: 100%</span> •{" "}
          <span>White Text Area: 34.7%</span> •{" "}
          <span>Frame 8 Width: 65.3%</span> •{" "}
          <span>Frame 8 Protrusion: +46.2% above card</span> •{" "}
          <span>Bottom Black Bar: 32px Grounding</span>
        </div>

      </div>
    </div>
  );
}
