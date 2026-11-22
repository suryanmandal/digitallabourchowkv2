"use client";

import React from "react";
import WorkerLanyardHero from "@/components/WorkerLanyardHero";
import WorkerTradesGrid from "@/components/WorkerTradesGrid";
import WorkerReelsCarousel from "@/components/WorkerReelsCarousel";
import WorkerBillboardCTA from "@/components/WorkerBillboardCTA";

export default function WorkerPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* SECTION 2: HERO WITH 3D FLEXIBLE HANGING LANYARD & DIGITAL SHRAMIK ID BADGE */}
      <WorkerLanyardHero />

      {/* SECTION 3: 3x4 UNIFIED GRID OF 11 TRADES + 1 DOWNLOAD APP CTA CARD */}
      <WorkerTradesGrid />

      {/* SECTION 4: WORKER REELS INSPIRATION CAROUSEL */}
      <WorkerReelsCarousel />

      {/* SECTION 5: OUTDOOR BILLBOARD HOARDING CTA (BROWN CORRUGATED WALL + ROYAL BLUE BOARD) */}
      <WorkerBillboardCTA />
    </main>
  );
}
