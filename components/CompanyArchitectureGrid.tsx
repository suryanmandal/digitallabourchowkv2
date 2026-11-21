"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

interface ArchitecturePillar {
  index: string;
  category: string;
  title: string;
  desc: string;
  href: string;
  tag: string;
  accent: string;
  statsTag: string;
  renderIllustration: () => React.ReactNode;
}

export const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  // =========================================================================
  // ROW 1: CARDS 01 TO 04 (Continuous Architectural Horizon Line & Elevation)
  // =========================================================================
  {
    index: "01",
    category: "CHRONOLOGY",
    title: "Our History & Journey",
    desc: "From CIMPS incubation at STPI to building India's premier digital blue-collar employment exchange.",
    href: "/about-us/history",
    tag: "2020 – 2026",
    accent: "#0842A0",
    statsTag: "6 Years of Impact",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p1Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0842A0" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#0842A0" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#0842A0" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 1 (Enters at y=95, exits at y=80) */}
        <path
          d="M0 95 C 60 110, 120 125, 180 100 C 240 75, 280 85, 320 80 L 320 160 L 0 160 Z"
          fill="url(#p1Wave)"
        />
        <path
          d="M0 95 C 60 110, 120 125, 180 100 C 240 75, 280 85, 320 80"
          stroke="#073683"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 120 C 70 135, 140 140, 220 115 C 270 100, 300 105, 320 102"
          stroke="#0284C7"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />

        {/* Custom Monoline Art: Foundation Milestones & Drafting Timeline */}
        <g transform="translate(100, 25)">
          {/* Isometric Foundation Blocks */}
          <polygon points="60,35 100,15 100,45 60,65" fill="#7DD3FC" stroke="#073683" strokeWidth="2" />
          <polygon points="60,35 20,15 20,45 60,65" fill="#38BDF8" stroke="#073683" strokeWidth="2" />
          <polygon points="20,15 60,-5 100,15 60,35" fill="#BAE6FD" stroke="#073683" strokeWidth="2" />

          {/* Stepped Upper Milestone Block */}
          <polygon points="60,10 85,-2 85,18 60,30" fill="#93C5FD" stroke="#073683" strokeWidth="1.8" />
          <polygon points="60,10 35,-2 35,18 60,30" fill="#60A5FA" stroke="#073683" strokeWidth="1.8" />
          <polygon points="35,-2 60,-15 85,-2 60,10" fill="#DBEAFE" stroke="#073683" strokeWidth="1.8" />

          {/* Drafting Compass Angle Arc */}
          <path d="M15 60 A 45 45 0 0 1 105 60" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Milestone Flagpole: 2020 */}
          <line x1="60" y1="-15" x2="60" y2="-32" stroke="#073683" strokeWidth="2" />
          <polygon points="60,-32 78,-26 60,-20" fill="#D97706" stroke="#92400E" strokeWidth="1" />
        </g>

        {/* Dotted Flow Connector with Arrow (Leading into Card 2) */}
        <path d="M260 55 C 285 55, 300 70, 320 70" stroke="#073683" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
        <circle cx="260" cy="55" r="3.5" fill="#073683" />
      </svg>
    ),
  },
  {
    index: "02",
    category: "PURPOSE",
    title: "Vision & Mission",
    desc: "Empowering 5 Crore+ construction craftsmen with dignity, verified identity, and guaranteed daily payments.",
    href: "/about-us/vision-mission",
    tag: "Social Mandate",
    accent: "#0369A1",
    statsTag: "5 Crore+ Workers",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p2Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#0369A1" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#0369A1" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 2 (Enters at y=80 from Card 1, exits at y=95 to Card 3) */}
        <path
          d="M0 80 C 40 75, 100 45, 160 50 C 220 55, 270 85, 320 95 L 320 160 L 0 160 Z"
          fill="url(#p2Wave)"
        />
        <path
          d="M0 80 C 40 75, 100 45, 160 50 C 220 55, 270 85, 320 95"
          stroke="#075985"
          strokeWidth="2.5"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 102 C 50 98, 110 70, 170 75 C 230 80, 270 105, 320 115"
          stroke="#0284C7"
          strokeWidth="1.6"
          strokeOpacity="0.75"
          strokeDasharray="4 3"
        />

        {/* Custom Monoline Art: Rising Skyline & Tower Crane Arm */}
        <g transform="translate(100, 20)">
          {/* Stylized Modern Tower Crane */}
          <rect x="55" y="25" width="10" height="90" fill="#E0F2FE" stroke="#075985" strokeWidth="2" />
          {[35, 50, 65, 80, 95].map((y) => (
            <line key={y} x1="55" y1={y} x2="65" y2={y + 10} stroke="#075985" strokeWidth="1.5" />
          ))}
          {/* Horizontal Crane Jib Arm */}
          <line x1="-15" y1="25" x2="115" y2="25" stroke="#075985" strokeWidth="2.6" />
          <polygon points="55,10 65,10 60,25" fill="#075985" />
          <line x1="55" y1="10" x2="-15" y2="25" stroke="#075985" strokeWidth="1.5" />
          <line x1="65" y1="10" x2="115" y2="25" stroke="#075985" strokeWidth="1.5" />
          
          {/* Hoist Cable & Suspended Beam */}
          <line x1="95" y1="25" x2="95" y2="60" stroke="#D97706" strokeWidth="1.8" strokeDasharray="3 2" />
          <rect x="75" y="60" width="40" height="7" rx="1.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />

          {/* Radiating Beacon Sunburst */}
          <circle cx="60" cy="10" r="18" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.8" />
          <circle cx="60" cy="10" r="4" fill="#D97706" />
        </g>

        {/* Connector Line to Card 3 */}
        <path d="M0 70 C 30 70, 50 85, 80 85" stroke="#075985" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
      </svg>
    ),
  },
  {
    index: "03",
    category: "ETHICS",
    title: "Core Values",
    desc: "Uncompromising integrity, transparency, zero-commission ethics, and worker dignity on every site.",
    href: "/about-us/values",
    tag: "Integrity",
    accent: "#047857",
    statsTag: "Zero Exploitation",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p3Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#047857" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#047857" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 3 (Enters at y=95 from Card 2, exits at y=75 to Card 4) */}
        <path
          d="M0 95 C 50 105, 110 120, 170 95 C 230 70, 270 80, 320 75 L 320 160 L 0 160 Z"
          fill="url(#p3Wave)"
        />
        <path
          d="M0 95 C 50 105, 110 120, 170 95 C 230 70, 270 80, 320 75"
          stroke="#065F46"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 115 C 60 125, 120 135, 180 115 C 240 95, 280 98, 320 95"
          stroke="#059669"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />

        {/* Custom Monoline Art: Structural Steel Truss & Verified Biometric Shield */}
        <g transform="translate(110, 25)">
          {/* Structural Steel Triangular Truss */}
          <polygon points="50,15 10,85 90,85" fill="#D1FAE5" stroke="#065F46" strokeWidth="2.2" />
          <line x1="50" y1="15" x2="50" y2="85" stroke="#065F46" strokeWidth="1.8" />
          <line x1="30" y1="50" x2="70" y2="50" stroke="#065F46" strokeWidth="1.8" />
          <circle cx="50" cy="15" r="4" fill="#047857" />
          <circle cx="10" cy="85" r="4" fill="#047857" />
          <circle cx="90" cy="85" r="4" fill="#047857" />

          {/* Biometric Shield Floating at Center */}
          <g transform="translate(32, 30)">
            <path
              d="M18 0 L34 7 C34 22 26 33 18 38 C10 33 2 22 2 7 Z"
              fill="#FFFFFF"
              stroke="#065F46"
              strokeWidth="2.4"
            />
            {/* Center Checkmark */}
            <path d="M11 19 L16 24 L25 14" stroke="#047857" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Level Bubble Indicator */}
          <rect x="25" y="92" width="50" height="12" rx="6" fill="#A7F3D0" stroke="#065F46" strokeWidth="1.8" />
          <circle cx="50" cy="98" r="3.5" fill="#D97706" />
        </g>
      </svg>
    ),
  },
  {
    index: "04",
    category: "LEADERSHIP",
    title: "Leadership & Founders",
    desc: "Guided by Chandrashekhar Mandal and engineering architects formalizing unorganized labor nationwide.",
    href: "/about-us/leadership",
    tag: "Founding Team",
    accent: "#B45309",
    statsTag: "Executive Board",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p4Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#047857" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#B45309" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#B45309" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 4 (Enters at y=75 from Card 3, crests to y=45, exits at y=90) */}
        <path
          d="M0 75 C 50 70, 110 40, 170 45 C 230 50, 280 85, 320 90 L 320 160 L 0 160 Z"
          fill="url(#p4Wave)"
        />
        <path
          d="M0 75 C 50 70, 110 40, 170 45 C 230 50, 280 85, 320 90"
          stroke="#92400E"
          strokeWidth="2.5"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 95 C 60 90, 120 65, 180 70 C 240 75, 280 105, 320 110"
          stroke="#D97706"
          strokeWidth="1.6"
          strokeOpacity="0.75"
          strokeDasharray="4 3"
        />

        {/* Custom Monoline Art: Master Drafting Table, Triangle Ruler & Hard Hat */}
        <g transform="translate(100, 20)">
          {/* Architect 30-60-90 Drafting Triangle Ruler */}
          <polygon points="20,95 20,15 95,95" fill="#FDE68A" stroke="#92400E" strokeWidth="2.2" />
          <polygon points="32,85 32,45 72,85" fill="#FFFFFF" stroke="#92400E" strokeWidth="1.5" />
          {/* Measurement Ticks on Ruler */}
          {[25, 35, 45, 55, 65, 75, 85].map((y) => (
            <line key={y} x1="20" y1={y} x2="27" y2={y} stroke="#92400E" strokeWidth="1.4" />
          ))}

          {/* Construction Hard Hat Silhouette Overlapping Ruler */}
          <g transform="translate(45, 15)">
            <ellipse cx="25" cy="35" rx="28" ry="8" fill="#F59E0B" stroke="#78350F" strokeWidth="2.2" />
            <path
              d="M7 35 C7 15, 43 15, 43 35 Z"
              fill="#FBBF24"
              stroke="#78350F"
              strokeWidth="2.2"
            />
            {/* Center Peak Ridge */}
            <path d="M25 18 L25 35" stroke="#78350F" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="25" cy="22" r="3.5" fill="#78350F" />
          </g>

          {/* Compass Rose Star Floating Top-Right */}
          <g transform="translate(90, 5)">
            <line x1="10" y1="0" x2="10" y2="20" stroke="#92400E" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="#92400E" strokeWidth="1.5" strokeDasharray="2 2" />
            <polygon points="10,2 12,8 18,10 12,12 10,18 8,12 2,10 8,8" fill="#92400E" />
          </g>
        </g>
      </svg>
    ),
  },

  // =========================================================================
  // ROW 2: CARDS 05 TO 08 (Continuous Harmonic Geodetic Line & Infrastructure)
  // =========================================================================
  {
    index: "05",
    category: "EXCELLENCE",
    title: "Awards & Recognitions",
    desc: "National accolades from Hitachi Innovation, TiE Global, Startup India, and NAREDCO.",
    href: "/awards-recognition",
    tag: "Accredited",
    accent: "#9A3412",
    statsTag: "Hitachi Awardee",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p5Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B45309" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#9A3412" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#9A3412" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 5 (Row 2 Start: Enters at y=100, exits at y=85 to Card 6) */}
        <path
          d="M0 100 C 60 115, 120 120, 180 95 C 240 70, 280 88, 320 85 L 320 160 L 0 160 Z"
          fill="url(#p5Wave)"
        />
        <path
          d="M0 100 C 60 115, 120 120, 180 95 C 240 70, 280 88, 320 85"
          stroke="#7C2D12"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />

        {/* Secondary Harmonic Wave */}
        <path
          d="M0 122 C 70 132, 140 138, 210 115 C 260 100, 300 105, 320 105"
          stroke="#C2410C"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />

        {/* Custom Monoline Art: Architectural Trophy Pediment & Laurel Wreath */}
        <g transform="translate(105, 20)">
          {/* Classical Architectural Cornerstone Pediment */}
          <polygon points="50,15 25,32 75,32" fill="#FED7AA" stroke="#7C2D12" strokeWidth="2.2" />
          <rect x="30" y="32" width="40" height="45" fill="#FFFFFF" stroke="#7C2D12" strokeWidth="2.2" />
          {/* Fluted Column lines */}
          <line x1="40" y1="32" x2="40" y2="77" stroke="#7C2D12" strokeWidth="1.5" />
          <line x1="50" y1="32" x2="50" y2="77" stroke="#7C2D12" strokeWidth="1.5" />
          <line x1="60" y1="32" x2="60" y2="77" stroke="#7C2D12" strokeWidth="1.5" />
          {/* Base Plinth */}
          <rect x="20" y="77" width="60" height="12" rx="2" fill="#FED7AA" stroke="#7C2D12" strokeWidth="2.2" />

          {/* Laurel Wreath Arcs Enclosing the Trophy */}
          <path d="M15 65 C 10 35, 30 15, 45 10" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M85 65 C 90 35, 70 15, 55 10" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* 5-Point Constellation Stars Above Apex */}
          <polygon points="50,0 52,5 57,6 53,9 54,14 50,11 46,14 47,9 43,6 48,5" fill="#D97706" />
        </g>
      </svg>
    ),
  },
  {
    index: "06",
    category: "NETWORK",
    title: "National Footprint",
    desc: "Operational across 15+ industrial hubs, STPI Noida HQ, and grassroots centers in 6,000+ towns.",
    href: "/about-us/footprint",
    tag: "Pan-India",
    accent: "#0E7490",
    statsTag: "15+ Hubs Nationwide",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p6Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C2410C" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0E7490" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#0E7490" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#0E7490" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 6 (Enters at y=85 from Card 5, exits at y=95 to Card 7) */}
        <path
          d="M0 85 C 40 80, 90 50, 150 55 C 220 60, 270 90, 320 95 L 320 160 L 0 160 Z"
          fill="url(#p6Wave)"
        />
        <path
          d="M0 85 C 40 80, 90 50, 150 55 C 220 60, 270 90, 320 95"
          stroke="#155E75"
          strokeWidth="2.5"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 105 C 50 100, 100 75, 160 80 C 230 85, 270 110, 320 115"
          stroke="#0891B2"
          strokeWidth="1.6"
          strokeOpacity="0.75"
          strokeDasharray="4 3"
        />

        {/* Custom Monoline Art: Topographic India Mesh & Geodetic Surveying Tripod */}
        <g transform="translate(100, 20)">
          {/* Topographic Contour Iso-rings */}
          <ellipse cx="60" cy="50" rx="45" ry="25" stroke="#155E75" strokeWidth="1.5" strokeDasharray="3 3" />
          <ellipse cx="60" cy="50" rx="30" ry="16" stroke="#155E75" strokeWidth="1.8" />
          <ellipse cx="60" cy="50" rx="15" ry="8" stroke="#155E75" strokeWidth="2.2" />

          {/* Surveying Transit Tripod */}
          <line x1="60" y1="20" x2="35" y2="85" stroke="#155E75" strokeWidth="2.4" />
          <line x1="60" y1="20" x2="60" y2="88" stroke="#155E75" strokeWidth="2.4" />
          <line x1="60" y1="20" x2="85" y2="85" stroke="#155E75" strokeWidth="2.4" />
          {/* Theodolite Instrument Head */}
          <rect x="52" y="10" width="16" height="12" rx="2" fill="#BAE6FD" stroke="#155E75" strokeWidth="2.2" />
          <circle cx="60" cy="16" r="3.5" fill="#D97706" />
          {/* Geofence Radar Rings Emitting from Node */}
          <circle cx="60" cy="16" r="12" stroke="#0891B2" strokeWidth="1.4" strokeDasharray="2 2" />
          <circle cx="60" cy="16" r="22" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.75" />
        </g>
      </svg>
    ),
  },
  {
    index: "07",
    category: "DISPATCH",
    title: "Media Coverage",
    desc: "Spotlighted by CNBC-TV18, Bloomberg, Republic TV, and leading national publications.",
    href: "/media-coverage",
    tag: "Press Room",
    accent: "#3730A3",
    statsTag: "National Press",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p7Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0E7490" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3730A3" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#3730A3" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#3730A3" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 7 (Enters at y=95 from Card 6, exits at y=75 to Card 8) */}
        <path
          d="M0 95 C 60 105, 110 125, 170 95 C 230 65, 275 80, 320 75 L 320 160 L 0 160 Z"
          fill="url(#p7Wave)"
        />
        <path
          d="M0 95 C 60 105, 110 125, 170 95 C 230 65, 275 80, 320 75"
          stroke="#312E81"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 115 C 65 125, 120 135, 180 115 C 240 90, 280 100, 320 95"
          stroke="#4338CA"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />

        {/* Custom Monoline Art: Broadcast Mast & Press Matrix Folio */}
        <g transform="translate(105, 20)">
          {/* Lattice Telecommunication Tower */}
          <line x1="50" y1="10" x2="30" y2="90" stroke="#312E81" strokeWidth="2.2" />
          <line x1="50" y1="10" x2="70" y2="90" stroke="#312E81" strokeWidth="2.2" />
          {[25, 42, 58, 74].map((y, idx) => (
            <line key={y} x1={30 + (4 - idx) * 4} y1={y} x2={70 - (4 - idx) * 4} y2={y} stroke="#312E81" strokeWidth="1.5" />
          ))}
          <circle cx="50" cy="10" r="4" fill="#D97706" />

          {/* Concentric Broadcasting Radar Waves */}
          <path d="M35 10 A 15 15 0 0 1 65 10" stroke="#4338CA" strokeWidth="1.8" fill="none" />
          <path d="M25 10 A 25 25 0 0 1 75 10" stroke="#4338CA" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          <path d="M15 10 A 35 35 0 0 1 85 10" stroke="#4338CA" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.8" fill="none" />

          {/* Floating News Headline Sheet */}
          <rect x="68" y="45" width="34" height="26" rx="2" fill="#E0E7FF" stroke="#312E81" strokeWidth="1.8" />
          <line x1="73" y1="52" x2="96" y2="52" stroke="#312E81" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="73" y1="58" x2="92" y2="58" stroke="#4338CA" strokeWidth="1.4" />
          <line x1="73" y1="64" x2="88" y2="64" stroke="#4338CA" strokeWidth="1.4" />
        </g>
      </svg>
    ),
  },
  {
    index: "08",
    category: "SYNERGY",
    title: "Institutional Partners",
    desc: "Backed by Villgro, GDI, TiE, Bihar Industries Association, and Tier-1 infrastructure EPCs.",
    href: "/partnerships",
    tag: "Alliances",
    accent: "#0842A0",
    statsTag: "Govt & Global Alliances",
    renderIllustration: () => (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="p8Wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3730A3" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0842A0" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Blueprint Graph Grid Lines */}
        {[20, 50, 80, 110, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#0842A0" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}
        {[40, 90, 140, 190, 240, 290].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#0842A0" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* CONTINUOUS CONTOUR FLOW 8 (Enters at y=75 from Card 7, curves to anchor at y=95) */}
        <path
          d="M0 75 C 50 70, 100 45, 160 50 C 220 55, 270 85, 320 95 L 320 160 L 0 160 Z"
          fill="url(#p8Wave)"
        />
        <path
          d="M0 75 C 50 70, 100 45, 160 50 C 220 55, 270 85, 320 95"
          stroke="#073683"
          strokeWidth="2.5"
        />

        {/* Secondary Elevation Harmonic Line */}
        <path
          d="M0 95 C 60 90, 110 65, 170 70 C 230 75, 270 105, 320 115"
          stroke="#0284C7"
          strokeWidth="1.6"
          strokeOpacity="0.75"
          strokeDasharray="4 3"
        />

        {/* Custom Monoline Art: Interlocking Bridge Girders & Institutional Node Network */}
        <g transform="translate(100, 20)">
          {/* Cantilever Suspension Bridge Structure */}
          <line x1="10" y1="80" x2="110" y2="80" stroke="#073683" strokeWidth="3" />
          <line x1="30" y1="80" x2="30" y2="25" stroke="#073683" strokeWidth="2.4" />
          <line x1="90" y1="80" x2="90" y2="25" stroke="#073683" strokeWidth="2.4" />
          {/* Suspension Cables */}
          <path d="M10 50 Q 30 25 60 50 Q 90 25 110 50" fill="none" stroke="#0284C7" strokeWidth="2.2" />
          <line x1="45" y1="40" x2="45" y2="80" stroke="#073683" strokeWidth="1.4" strokeDasharray="2 2" />
          <line x1="60" y1="50" x2="60" y2="80" stroke="#073683" strokeWidth="1.4" strokeDasharray="2 2" />
          <line x1="75" y1="40" x2="75" y2="80" stroke="#073683" strokeWidth="1.4" strokeDasharray="2 2" />

          {/* Central Synergy Handshake Node */}
          <circle cx="60" cy="50" r="14" fill="#FFFFFF" stroke="#073683" strokeWidth="2.4" />
          <circle cx="60" cy="50" r="5.5" fill="#D97706" />
          <line x1="30" y1="25" x2="90" y2="25" stroke="#073683" strokeWidth="1.8" />
        </g>
      </svg>
    ),
  },
];

export default function CompanyArchitectureGrid() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-300/80 select-none">
      
      {/* Background Architectural Blueprint Contours */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
        <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720].map((y) => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="#0C59D4" strokeWidth="1.2" />
          ))}
          {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="#0C59D4" strokeWidth="1.2" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-300 text-[#073683] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#0842A0]" />
            <span>Company Architecture & Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
            Explore Our <span className="text-[#0842A0]">Core Foundations</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
            Eight interconnected pillars documenting the chronology, social mission, architectural patents, and national scale of Digital Labour Chowk.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 4X2 GRID: 8 UNIFIED CARDS WITH CONTINUOUS HORIZON CONTOUR PATTERN     */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ARCHITECTURE_PILLARS.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-300 hover:border-[#0842A0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(8,66,160,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Top Card Header with Technical Metadata */}
              <div className="p-4 sm:p-5 pb-2.5 flex items-center justify-between border-b border-slate-200/90 bg-slate-50/50 z-10">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-200/90 group-hover:bg-blue-100 text-slate-800 group-hover:text-[#073683] transition-colors">
                  {item.index} / 08 • {item.category}
                </span>

                <span className="text-[11px] font-bold text-slate-700 group-hover:text-slate-950 transition-colors">
                  {item.tag}
                </span>
              </div>

              {/* Bespoke Custom Monoline Vector Illustration with Richer Contours */}
              <div className="relative w-full h-[150px] sm:h-[160px] bg-gradient-to-b from-slate-100/90 via-white to-slate-100/70 overflow-hidden flex items-center justify-center border-b border-slate-200/90">
                {item.renderIllustration()}
              </div>

              {/* Card Narrative Body */}
              <div className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-[#0842A0] transition-colors tracking-tight leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Card Action Link Strip */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item.statsTag}
                  </span>

                  <div className="inline-flex items-center text-xs font-bold text-[#0842A0] group-hover:text-[#073683] group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>

              {/* Active Bottom Glow Accent Border */}
              <div
                className="absolute inset-x-0 bottom-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.accent }}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
