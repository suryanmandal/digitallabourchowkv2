"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calculator,
  Building2,
  HardHat,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Layers,
  Car,
  Home,
  Shield,
  HelpCircle,
  ChevronDown,
  Download,
  PhoneCall,
  Info,
  Clock,
  Check,
  FileSpreadsheet,
  Award,
} from "lucide-react";

// =============================================================================
// CITY RATES MATRIX (Indicative Rates Per Sqft for 2026 Construction in India)
// =============================================================================
interface CityRate {
  id: string;
  name: string;
  state: string;
  rates: {
    standard: number;
    classic: number;
    premium: number;
    royale: number;
  };
}

const CITIES: CityRate[] = [
  {
    id: "delhi",
    name: "Delhi NCR",
    state: "Delhi, Noida, Gurgaon",
    rates: { standard: 2040, classic: 2320, premium: 2590, royale: 2900 },
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    rates: { standard: 2080, classic: 2360, premium: 2650, royale: 3050 },
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    rates: { standard: 1980, classic: 2260, premium: 2520, royale: 2850 },
  },
  {
    id: "mumbai",
    name: "Mumbai & Pune",
    state: "Maharashtra",
    rates: { standard: 2180, classic: 2480, premium: 2780, royale: 3200 },
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    rates: { standard: 2020, classic: 2300, premium: 2580, royale: 2950 },
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    rates: { standard: 1880, classic: 2150, premium: 2420, royale: 2750 },
  },
  {
    id: "patna",
    name: "Patna & Bihar",
    state: "Bihar",
    rates: { standard: 1820, classic: 2080, premium: 2350, royale: 2650 },
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    rates: { standard: 1940, classic: 2220, premium: 2490, royale: 2800 },
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    rates: { standard: 1890, classic: 2160, premium: 2430, royale: 2720 },
  },
  {
    id: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    rates: { standard: 1840, classic: 2100, premium: 2380, royale: 2680 },
  },
];

// =============================================================================
// PACKAGE SPECIFICATIONS MATRIX
// =============================================================================
type PackageTier = "standard" | "classic" | "premium" | "royale";

interface PackageInfo {
  id: PackageTier;
  name: string;
  badge?: string;
  tagline: string;
  popular?: boolean;
  color: string;
  accentBg: string;
  borderColor: string;
}

const PACKAGES: PackageInfo[] = [
  {
    id: "standard",
    name: "Standard",
    tagline: "Essential structural quality with reliable ISI branded materials.",
    color: "text-slate-800",
    accentBg: "bg-slate-100",
    borderColor: "border-slate-300",
  },
  {
    id: "classic",
    name: "Classic",
    badge: "MOST POPULAR",
    tagline: "Superior durability with trusted national brands & premium finishes.",
    popular: true,
    color: "text-[#0C59D4]",
    accentBg: "bg-blue-50 text-[#0C59D4]",
    borderColor: "border-[#0C59D4]",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "High-end luxury with granite/marble, Jaquar fittings & UPVC windows.",
    color: "text-amber-700",
    accentBg: "bg-amber-50 text-amber-800",
    borderColor: "border-amber-400",
  },
  {
    id: "royale",
    name: "Royale",
    badge: "ULTRA LUXURY",
    tagline: "Architectural masterpiece with Italian marble, Kohler & smart home sync.",
    color: "text-purple-700",
    accentBg: "bg-purple-50 text-purple-800",
    borderColor: "border-purple-400",
  },
];

// Material Comparison Table Data
const SPECIFICATIONS = [
  {
    category: "Structure & Core Materials",
    items: [
      {
        feature: "Steel (TMT Bars)",
        standard: "Kamdhenu / Rathi / ISI Grade",
        classic: "JSW Neosteel / SAIL / Vizag",
        premium: "TATA Tiscon / JSW Neosteel",
        royale: "TATA Tiscon 550D / JSW Super",
      },
      {
        feature: "Cement (53 / 43 Grade)",
        standard: "Shree / Birla / JK Super",
        classic: "Ambuja / ACC / Ultratech",
        premium: "Ultratech Super / ACC Gold",
        royale: "Ultratech Weather Plus / ACC Concrete+",
      },
      {
        feature: "Blockwork & Bricks",
        standard: "Standard 9\" Outer, 4\" Inner Red Brick",
        classic: "Class-A Red Brick / AAC Blocks",
        premium: "High-density AAC Blocks / Wirecut Bricks",
        royale: "Precision Autoclaved AAC / Exposed Wirecut",
      },
      {
        feature: "R.C.C Design & Mix",
        standard: "M20 Grade Machine Mix Concrete",
        classic: "M20 / M25 Grade Design Mix",
        premium: "M25 Grade RMC Concrete",
        royale: "M25 / M30 Grade Engineered RMC",
      },
      {
        feature: "Ceiling Clear Height",
        standard: "10 Feet Clear Height",
        classic: "10 Feet Clear Height",
        premium: "10.5 Feet Clear Height",
        royale: "11 Feet Clear Grand Height",
      },
      {
        feature: "Anti-Termite Treatment",
        standard: "Standard Soil Chemical Treatment",
        classic: "3-Stage Soil & Plinth Treatment",
        premium: "5-Stage Comprehensive Warranty",
        royale: "10-Year Comprehensive Warranty",
      },
    ],
  },
  {
    category: "Flooring & Tiling",
    items: [
      {
        feature: "Living & Dining Flooring",
        standard: "Vitrified Tiles (up to ₹60/sqft)",
        classic: "Vitrified Tiles (up to ₹90/sqft)",
        premium: "Granite / Marble (up to ₹140/sqft)",
        royale: "Italian Marble (up to ₹250/sqft)",
      },
      {
        feature: "Bedrooms & Kitchen",
        standard: "Vitrified Tiles (up to ₹55/sqft)",
        classic: "Vitrified Tiles (up to ₹80/sqft)",
        premium: "Vitrified / Wooden Planks (₹120/sqft)",
        royale: "Laminated Wooden / Granite (₹160/sqft)",
      },
      {
        feature: "Balcony & Open Terraces",
        standard: "Anti-skid Ceramic Tiles (₹50/sqft)",
        classic: "Weather-proof Anti-skid (₹65/sqft)",
        premium: "Exterior Matte Vitrified (₹85/sqft)",
        royale: "Designer Anti-skid Deck Tiles (₹110/sqft)",
      },
      {
        feature: "Staircase Steps & Riser",
        standard: "Polished Kota Stone / Tile (₹60/sqft)",
        classic: "Sadahalli / Steel Grey Granite (₹85/sqft)",
        premium: "Black Galaxy / Flamed Granite (₹120/sqft)",
        royale: "Premium Italian Marble / Granite (₹160/sqft)",
      },
    ],
  },
  {
    category: "Bathrooms, Kitchen & Plumbing",
    items: [
      {
        feature: "Sanitaryware & Faucets",
        standard: "Parryware / Cera Standard",
        classic: "Hindware / Parryware Premium",
        premium: "Jaquar / Kohler Contemporary",
        royale: "Kohler / Grohe Luxury Range",
      },
      {
        feature: "Kitchen Sink & Faucet",
        standard: "SS Single Bowl (Worth ₹4,000)",
        classic: "SS Double Bowl (Worth ₹6,500)",
        premium: "Granite/Carysil Sink (Worth ₹9,000)",
        royale: "Carysil Quartz Double Bowl (₹14,000)",
      },
      {
        feature: "Internal & External Piping",
        standard: "Supreme / Finolex CPVC/SWR",
        classic: "Astral / Ashirwad SDR 11 CPVC",
        premium: "Astral Lead-Free CPVC + SWR",
        royale: "Astral Silencio Noise-Free CPVC",
      },
      {
        feature: "Water Storage Sump & Tank",
        standard: "4,000L Sump + 1,000L Overhead",
        classic: "6,000L Sump + 1,500L Overhead",
        premium: "8,000L Sump + 2,000L Sintex 4-Layer",
        royale: "10,000L Sump + 2,500L Multi-Layer Insulated",
      },
    ],
  },
  {
    category: "Doors, Windows & Painting",
    items: [
      {
        feature: "Main Entrance Door",
        standard: "Salwood Frame with Flush Shutter (₹18K)",
        classic: "Teak Wood Frame & Membrane Shutter (₹28K)",
        premium: "Burma Teak Frame & Carved Door (₹42K)",
        royale: "Grand Designer Burma Teak Pivot Door (₹65K)",
      },
      {
        feature: "Windows & Sliding Glass",
        standard: "Jindal Aluminium Sliding (₹350/sqft)",
        classic: "UPVC 2-Track with Mosquito Mesh (₹500/sqft)",
        premium: "Prominance/Fenesta 3-Track UPVC (₹700/sqft)",
        royale: "Fenesta Sound-Proof Double Glazed (₹1,000/sqft)",
      },
      {
        feature: "Interior Painting",
        standard: "Tractor Emulsion (Asian Paints)",
        classic: "Tractor Shyne / Premium Emulsion",
        premium: "Apcolite Premium Emulsion",
        royale: "Royale Luxury Emulsion with POP Punning",
      },
      {
        feature: "Exterior Weather Paint",
        standard: "Ace Exterior Emulsion",
        classic: "Apex Weatherproof Emulsion",
        premium: "Apex Ultima Anti-Algal Paint",
        royale: "Apex Ultima Protek with 10-Yr Warranty",
      },
    ],
  },
  {
    category: "Electrical & Modern Living",
    items: [
      {
        feature: "Fire-Resistant Wiring",
        standard: "Anchor / Finolex FRLS Wiring",
        classic: "Havells / Finolex Fire-Retardant",
        premium: "Polycab / Havells Zero-Halogen",
        royale: "Finolex / Schneider Super-Insulated",
      },
      {
        feature: "Switches & Modular Plates",
        standard: "Anchor Roma / GreatWhite",
        classic: "Legrand Lyncus / Havells Fabio",
        premium: "Legrand Myrius / Schneider AvatarOn",
        royale: "Schneider Unica Pure Smart Touch",
      },
      {
        feature: "EV Charging & Solar Wiring",
        standard: "Not Included",
        classic: "Dedicated 15A Socket in Parking",
        premium: "Fast EV Charger Point + Solar Conduit",
        royale: "Smart EV Wallbox + Solar Grid Ready",
      },
    ],
  },
];

// =============================================================================
// FAQ ACCORDION DATA
// =============================================================================
const ESTIMATOR_FAQS = [
  {
    q: "How is the total house construction cost calculated?",
    a: "Total house construction cost is calculated by multiplying your total super built-up area (in sq.ft) by the cost per square foot for your selected city and package tier. Super built-up area includes the ground coverage floor plate multiplied by the number of floors, plus car parking and balcony allowances.",
  },
  {
    q: "What is the difference between Carpet Area, Built-up Area, and Super Built-up Area?",
    a: "Carpet Area is the actual usable floor area within inner walls. Built-up Area adds the thickness of walls, balconies, and utility ducts (~10-15% over carpet area). Super Built-up Area (the industry standard for contractor billing) includes common stairs, parking projections, and structural columns.",
  },
  {
    q: "How does Digital Labour Chowk help save money on house construction?",
    a: "Traditional turnkey aggregators markup construction by 20% to 30% for contractor margins and middlemen. Through Digital Labour Chowk, contractors and home builders directly mobilize KYC-verified tradesmen at fair market wages with 0% middleman commission, reducing labor overhead by 15-22%.",
  },
  {
    q: "Does this estimate include architectural design and municipal approvals?",
    a: "This calculator covers the structural build (civil, brickwork, plastering, waterproofing), electrical, plumbing, doors, windows, and finishes. Municipal map sanctions, architect fees, and interior woodwork/modular furniture are typically budgeted separately.",
  },
  {
    q: "Can I calculate the cost for G+1, G+2, or multi-storey structures?",
    a: "Yes! Our calculator supports Ground Only (G), G+1, G+2, G+3, and G+4. Selecting additional floors automatically scales civil foundation strength, structural column reinforcements, and floor-level built-up calculations.",
  },
];

export default function CostEstimatorPage() {
  // ---------------------------------------------------------------------------
  // STATE MANAGEMENT
  // ---------------------------------------------------------------------------
  const [selectedCity, setSelectedCity] = useState<string>("delhi");
  const [plotLength, setPlotLength] = useState<number>(30);
  const [plotBreadth, setPlotBreadth] = useState<number>(40);
  const [inputMode, setInputMode] = useState<"dimensions" | "area">("dimensions");
  const [directArea, setDirectArea] = useState<number>(1200);

  const [floors, setFloors] = useState<number>(2); // 1 = G, 2 = G+1, 3 = G+2, etc.
  const [parkingCars, setParkingCars] = useState<number>(1);
  const [balconies, setBalconies] = useState<number>(2);
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>("classic");
  const [activeTab, setActiveTab] = useState<"breakdown" | "specs">("breakdown");

  // Lead modal / quick connect state
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadPhone, setLeadPhone] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Active City Rate Object
  const currentCity = useMemo(() => {
    return CITIES.find((c) => c.id === selectedCity) || CITIES[0];
  }, [selectedCity]);

  // Total Plot Area (Sq.Ft.)
  const totalPlotArea = useMemo(() => {
    if (inputMode === "dimensions") {
      return Math.max(100, (plotLength || 0) * (plotBreadth || 0));
    }
    return Math.max(100, directArea || 0);
  }, [inputMode, plotLength, plotBreadth, directArea]);

  // Construction Area Calculations (Standard 75% municipal ground coverage bylaws)
  const groundCoverage = 0.75;
  const floorPlateArea = Math.round(totalPlotArea * groundCoverage);
  const totalLivingArea = floorPlateArea * floors;
  const parkingArea = parkingCars * 130; // standard 130 sqft per car bay
  const balconyArea = balconies * 40; // standard 40 sqft per balcony
  const superBuiltUpArea = totalLivingArea + parkingArea + balconyArea;

  // Rate per sqft
  const ratePerSqft = currentCity.rates[selectedPackage];

  // Total Estimated Cost
  const totalCost = superBuiltUpArea * ratePerSqft;

  // Estimated Digital Labour Chowk Direct Sourcing Savings (~18% vs traditional turnkey builders)
  const dlcsavings = Math.round(totalCost * 0.18);

  // Stage-wise Cost Breakdown Matrix
  const STAGES = [
    {
      id: "civil",
      name: "1. Structure & Civil Framework",
      percent: 46,
      desc: "Excavation, foundation, RCC pillars, beams, slab casting, and 9\"/4\" brick masonry.",
      cost: Math.round(totalCost * 0.46),
      color: "bg-blue-600",
    },
    {
      id: "finishing",
      name: "2. Flooring & Surface Finishes",
      percent: 20,
      desc: "Wall plastering, vitrified floor tiles, granite window sills, and bathroom wall dado.",
      cost: Math.round(totalCost * 0.2),
      color: "bg-emerald-600",
    },
    {
      id: "electrical",
      name: "3. Electrical & Concealed Wiring",
      percent: 9,
      desc: "FRLS fireproof wiring, PVC conduits, MCB distribution boxes, and modular switch plates.",
      cost: Math.round(totalCost * 0.09),
      color: "bg-amber-500",
    },
    {
      id: "plumbing",
      name: "4. Plumbing, Sump & Sanitary",
      percent: 9,
      desc: "CPVC & SWR internal piping, underground water sump, overhead tank, and CP fixtures.",
      cost: Math.round(totalCost * 0.09),
      color: "bg-cyan-600",
    },
    {
      id: "doors",
      name: "5. Doors, Windows & Hardware",
      percent: 9,
      desc: "Main teakwood entrance, flush internal doors, UPVC glass windows, and SS railings.",
      cost: Math.round(totalCost * 0.09),
      color: "bg-indigo-600",
    },
    {
      id: "painting",
      name: "6. Painting & Weatherproofing",
      percent: 7,
      desc: "Two coats of JK wall putty, acrylic primer, interior emulsion, and exterior anti-algal coating.",
      cost: Math.round(totalCost * 0.07),
      color: "bg-purple-600",
    },
  ];

  // Formatter for INR Lakhs/Crores
  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone) return;
    setLeadSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAFAFC] min-h-screen text-slate-900">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER                                                            */}
      {/* ========================================================================= */}
      <section className="w-full bg-slate-950 text-white pt-12 pb-16 sm:pt-16 sm:pb-20 relative overflow-hidden border-b border-slate-800">
        {/* Subtle grid background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-blue-400/30 text-blue-300 text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-[#0C59D4]" />
            <span>DLC PRO ESTIMATOR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            House Construction Cost Calculator
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Get instant, package-wise construction estimates across 10+ major Indian cities. Calculate built-up area, material specifications, civil stages, and see direct contractor savings with Digital Labour Chowk.
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">350,000+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                Registered Craftsmen
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-blue-400">20,000+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                Verified Contractors
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">0%</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                Middleman Margin
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                Aadhaar KYC Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE CALCULATOR ENGINE                                     */}
      {/* ========================================================================= */}
      <section className="w-full py-12 sm:py-16 -mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ------------------------------------------------------------------- */}
            {/* LEFT COLUMN: INTERACTIVE INPUT CONTROLS (7 Cols)                    */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-8">
              
              {/* STEP 1: CITY SELECTION */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0C59D4]" />
                    <span>Select Construction City</span>
                  </label>
                  <span className="text-xs font-bold text-slate-500">
                    Rates: ₹{currentCity.rates.standard} – ₹{currentCity.rates.royale}/sqft
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {CITIES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCity(c.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-extrabold border transition-all truncate text-center ${
                        selectedCity === c.id
                          ? "bg-[#0C59D4] text-white border-[#0C59D4] shadow-sm shadow-blue-600/30"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2: PLOT DIMENSIONS & AREA */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0C59D4]" />
                    <span>Plot Size & Dimensions</span>
                  </label>

                  {/* Mode Switcher */}
                  <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setInputMode("dimensions")}
                      className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                        inputMode === "dimensions"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      L × B (ft)
                    </button>
                    <button
                      type="button"
                      onClick={() => setInputMode("area")}
                      className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                        inputMode === "area"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Direct Sq.Ft
                    </button>
                  </div>
                </div>

                {inputMode === "dimensions" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-bold text-slate-600 block mb-1">
                        Plot Length (Frontage / ft)
                      </span>
                      <div className="relative">
                        <input
                          type="number"
                          min="10"
                          max="200"
                          value={plotLength}
                          onChange={(e) => setPlotLength(Math.max(10, parseInt(e.target.value) || 0))}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-extrabold text-slate-900 text-sm focus:outline-none focus:border-[#0C59D4] focus:bg-white"
                        />
                        <span className="absolute right-3.5 top-2.5 text-xs font-bold text-slate-400">
                          ft
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-600 block mb-1">
                        Plot Breadth (Depth / ft)
                      </span>
                      <div className="relative">
                        <input
                          type="number"
                          min="10"
                          max="200"
                          value={plotBreadth}
                          onChange={(e) => setPlotBreadth(Math.max(10, parseInt(e.target.value) || 0))}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-extrabold text-slate-900 text-sm focus:outline-none focus:border-[#0C59D4] focus:bg-white"
                        />
                        <span className="absolute right-3.5 top-2.5 text-xs font-bold text-slate-400">
                          ft
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs font-bold text-slate-600 block mb-1">
                      Total Plot Area in Sq.Ft.
                    </span>
                    <input
                      type="number"
                      min="200"
                      max="20000"
                      value={directArea}
                      onChange={(e) => setDirectArea(Math.max(100, parseInt(e.target.value) || 0))}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-extrabold text-slate-900 text-sm focus:outline-none focus:border-[#0C59D4] focus:bg-white"
                    />
                  </div>
                )}

                {/* Common Presets */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-[11px] font-bold text-slate-400">Common:</span>
                  {[
                    { label: "30×40 (1,200 sqft)", l: 30, b: 40 },
                    { label: "20×50 (1,000 sqft)", l: 20, b: 50 },
                    { label: "30×50 (1,500 sqft)", l: 30, b: 50 },
                    { label: "40×60 (2,400 sqft)", l: 40, b: 60 },
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setInputMode("dimensions");
                        setPlotLength(p.l);
                        setPlotBreadth(p.b);
                      }}
                      className="text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <div className="mt-3 text-xs text-slate-500 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100 flex items-center justify-between">
                  <span>
                    Total Plot Area: <strong>{totalPlotArea.toLocaleString()} sqft</strong>
                  </span>
                  <span>
                    Floor Plate (75% Bylaws): <strong>{floorPlateArea.toLocaleString()} sqft</strong>
                  </span>
                </div>
              </div>

              {/* STEP 3: NUMBER OF FLOORS */}
              <div className="pt-6 border-t border-slate-100">
                <label className="text-sm sm:text-base font-extrabold text-slate-900 block mb-2.5 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0C59D4]" />
                  <span>Number of Floors to Construct</span>
                </label>

                <div className="grid grid-cols-5 gap-2">
                  {[
                    { val: 1, label: "G", desc: "Ground Only" },
                    { val: 2, label: "G+1", desc: "2 Floors" },
                    { val: 3, label: "G+2", desc: "3 Floors" },
                    { val: 4, label: "G+3", desc: "4 Floors" },
                    { val: 5, label: "G+4", desc: "5 Floors" },
                  ].map((f) => (
                    <button
                      key={f.val}
                      type="button"
                      onClick={() => setFloors(f.val)}
                      className={`py-3 px-2 rounded-2xl border text-center transition-all flex flex-col items-center justify-center ${
                        floors === f.val
                          ? "bg-slate-900 text-white border-slate-900 shadow-md"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-base sm:text-lg font-black">{f.label}</span>
                      <span className="text-[10px] font-semibold opacity-80 mt-0.5">
                        {f.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 4: PARKING & BALCONIES */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parking */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-slate-700" />
                      <span>Car Parking Slots</span>
                    </label>
                    <span className="text-[11px] font-bold text-slate-500">
                      ~130 sqft / slot
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[0, 1, 2, 3].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setParkingCars(num)}
                        className={`py-2 rounded-xl text-xs font-black border transition-all ${
                          parkingCars === num
                            ? "bg-[#D4A017] text-white border-[#D4A017] shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {num === 0 ? "None" : `${num} Car`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Balconies */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Home className="w-4 h-4 text-slate-700" />
                      <span>Balconies</span>
                    </label>
                    <span className="text-[11px] font-bold text-slate-500">
                      ~40 sqft / unit
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[0, 1, 2, 3].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBalconies(num)}
                        className={`py-2 rounded-xl text-xs font-black border transition-all ${
                          balconies === num
                            ? "bg-[#D4A017] text-white border-[#D4A017] shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {num === 0 ? "None" : `${num} Unit`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 5: PACKAGE TIER SELECTION */}
              <div className="pt-6 border-t border-slate-100">
                <label className="text-sm sm:text-base font-extrabold text-slate-900 block mb-2.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0C59D4]" />
                  <span>Choose Construction Quality Package</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-3.5 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between ${
                        selectedPackage === pkg.id
                          ? `${pkg.borderColor} bg-white shadow-lg ring-2 ring-blue-500/10`
                          : "border-slate-200 bg-slate-50/70 hover:bg-white"
                      }`}
                    >
                      {pkg.badge && (
                        <span className="absolute -top-2.5 right-2 text-[9px] font-black px-2 py-0.5 rounded-full bg-[#0C59D4] text-white uppercase tracking-wider shadow-xs">
                          {pkg.badge}
                        </span>
                      )}

                      <div>
                        <div className="text-sm font-black text-slate-900">{pkg.name}</div>
                        <div className="text-base font-extrabold text-[#0C59D4] mt-0.5">
                          ₹{currentCity.rates[pkg.id]}
                          <span className="text-[10px] font-bold text-slate-400">/sqft</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 leading-tight mt-2 line-clamp-2">
                        {pkg.tagline}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: LIVE ESTIMATE CARD & SUMMARY (5 Cols)                 */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              
              {/* PRIMARY ESTIMATE CARD */}
              <div className="rounded-3xl bg-slate-950 p-7 sm:p-8 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                {/* Decorative radial ambient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-extrabold uppercase tracking-wider">
                      <span>{selectedPackage.toUpperCase()} PACKAGE</span>
                    </span>

                    <span className="text-xs font-bold text-slate-400">
                      {currentCity.name}
                    </span>
                  </div>

                  {/* Big Price Display */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Estimated Turnkey Cost:
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 text-emerald-400">
                      {formatCurrency(totalCost)}
                    </div>
                    <div className="text-xs text-slate-400 mt-1.5 font-medium">
                      ₹{totalCost.toLocaleString("en-IN")} total turnkey estimate
                    </div>
                  </div>

                  {/* DLC Direct Savings Badge */}
                  <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 mb-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-emerald-300 uppercase tracking-wide">
                        Save {formatCurrency(dlcsavings)} with DLC
                      </div>
                      <p className="text-[11px] text-emerald-100/80 leading-relaxed mt-0.5 font-normal">
                        Zero 18% contractor markups by sourcing pre-vetted tradesmen directly via Digital Labour Chowk.
                      </p>
                    </div>
                  </div>

                  {/* Built-up Area Metric Breakdown */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs sm:text-[13px]">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Super Built-up Area:</span>
                      <strong className="text-white font-extrabold">
                        {superBuiltUpArea.toLocaleString()} sqft
                      </strong>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span>Ground Living Plate:</span>
                      <span className="font-semibold text-slate-300">
                        {floorPlateArea.toLocaleString()} sqft
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span>Number of Floors:</span>
                      <span className="font-semibold text-slate-300">
                        {floors === 1 ? "G (1 Floor)" : `G+${floors - 1} (${floors} Floors)`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span>Parking & Balconies:</span>
                      <span className="font-semibold text-slate-300">
                        {parkingArea + balconyArea} sqft ({parkingCars} cars, {balconies} balc.)
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span>Rate Applied:</span>
                      <strong className="text-emerald-400 font-extrabold">
                        ₹{ratePerSqft}/sqft ({selectedPackage})
                      </strong>
                    </div>

                    <div className="flex items-center justify-between text-slate-400 pt-1">
                      <span>Estimated Timeline:</span>
                      <span className="font-bold text-amber-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {floors === 1 ? "4–5 Months" : floors === 2 ? "6–7 Months" : "8–10 Months"}
                      </span>
                    </div>
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="mt-7 space-y-2.5">
                    <button
                      type="button"
                      onClick={() => setLeadModalOpen(true)}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Get Detailed BOQ Quote (Free)</span>
                    </button>

                    <Link
                      href="https://onboarding.digitallabourchowk.com/login"
                      className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 font-extrabold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md flex items-center justify-center gap-2 transition-all transform active:scale-98"
                    >
                      <HardHat className="w-4 h-4" />
                      <span>Book Verified Site Contractor</span>
                    </Link>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Need direct help? Call toll-free:{" "}
                      <a href="tel:+917070999175" className="text-[#0C59D4] font-bold hover:underline">
                        +91-7070999175
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Escrow & Trust Protection Callout */}
              <div className="rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
                <Shield className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-extrabold text-slate-900 block mb-0.5">
                    Milestone-Linked Payments & Quality Checks
                  </span>
                  <span className="text-slate-600 leading-relaxed font-normal">
                    Payments released only after 100% digital site inspection approval. Includes ₹5 Lakh worker accident cover.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STAGE-WISE BREAKDOWN & SPECIFICATION TABS                              */}
      {/* ========================================================================= */}
      <section className="w-full py-12 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Where Does Your Money Go?
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600">
              Complete civil stage breakdown and side-by-side material specification matrix for your {superBuiltUpArea.toLocaleString()} sqft build.
            </p>

            {/* View Switcher Tabs */}
            <div className="inline-flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200 mt-6 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("breakdown")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === "breakdown"
                    ? "bg-[#0C59D4] text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Stage-wise Cost Breakdown</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === "specs"
                    ? "bg-[#0C59D4] text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Material Specs Matrix</span>
              </button>
            </div>
          </div>

          {/* VIEW A: STAGE-WISE PROGRESS BREAKDOWN */}
          {activeTab === "breakdown" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STAGES.map((stg) => (
                <div
                  key={stg.id}
                  className="bg-[#FAFAFC] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-slate-900">{stg.name}</span>
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-blue-100 text-[#0C59D4]">
                        {stg.percent}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                      <div
                        className={`h-full ${stg.color}`}
                        style={{ width: `${stg.percent}%` }}
                      />
                    </div>

                    <div className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                      {formatCurrency(stg.cost)}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {stg.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-200/80 text-[11px] font-bold text-slate-500">
                    Est. ₹{Math.round(stg.cost / superBuiltUpArea)} / sqft
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIEW B: SIDE-BY-SIDE SPECIFICATIONS COMPARISON TABLE */}
          {activeTab === "specs" && (
            <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold">
                    <th className="p-3.5 sm:p-4 min-w-[200px]">Specification</th>
                    <th className="p-3.5 sm:p-4 min-w-[180px] bg-slate-800">
                      Standard (₹{currentCity.rates.standard}/sqft)
                    </th>
                    <th className="p-3.5 sm:p-4 min-w-[190px] bg-[#0C59D4]">
                      Classic ★ Top Pick (₹{currentCity.rates.classic}/sqft)
                    </th>
                    <th className="p-3.5 sm:p-4 min-w-[180px] bg-amber-900">
                      Premium (₹{currentCity.rates.premium}/sqft)
                    </th>
                    <th className="p-3.5 sm:p-4 min-w-[180px] bg-purple-950">
                      Royale Luxury (₹{currentCity.rates.royale}/sqft)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {SPECIFICATIONS.map((group, gIdx) => (
                    <React.Fragment key={gIdx}>
                      <tr className="bg-slate-100 font-extrabold text-slate-800">
                        <td colSpan={5} className="py-2.5 px-4 uppercase tracking-wider text-xs">
                          {group.category}
                        </td>
                      </tr>
                      {group.items.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-blue-50/40 transition-colors bg-white font-normal text-slate-700"
                        >
                          <td className="p-3.5 font-bold text-slate-900">{row.feature}</td>
                          <td className="p-3.5 text-slate-600">{row.standard}</td>
                          <td className="p-3.5 font-semibold text-slate-900 bg-blue-50/30">
                            {row.classic}
                          </td>
                          <td className="p-3.5 text-slate-800">{row.premium}</td>
                          <td className="p-3.5 text-slate-900 font-medium">{row.royale}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)                             */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 bg-[#FAFAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0C59D4] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clear Answers</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Construction Cost Calculator FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {ESTIMATOR_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 open:shadow-md transition-all cursor-pointer"
              >
                <summary className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3 border-t border-slate-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRE-FOOTER CTA STRIP                                                   */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Ready to Build Your Dream Home with 0% Middleman Margin?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get matched with verified civil contractors, structural engineers, and skilled craftsmen ready for deployment across India.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setLeadModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
            >
              Request Free Site Consultation
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all"
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL: DOWNLOAD DETAILED BOQ & CONNECT ADVISOR                             */}
      {/* ========================================================================= */}
      {leadModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLeadModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLeadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            {leadSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">Estimate Sent!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Our senior structural engineer will review your {superBuiltUpArea.toLocaleString()} sqft requirements and send your detailed BOQ estimate to {leadPhone} within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setLeadSubmitted(false);
                    setLeadModalOpen(false);
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#0C59D4] text-white font-extrabold text-xs uppercase"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0C59D4] uppercase tracking-wider mb-2">
                    Free Instant BOQ
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                    Get Complete BOQ Breakdown
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Receive your itemized material list, bar bending schedule, and contractor rate sheets for your {superBuiltUpArea.toLocaleString()} sqft build.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Selected City:</span>
                    <strong>{currentCity.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Package Tier:</span>
                    <strong className="capitalize text-[#0C59D4]">{selectedPackage}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Budget:</span>
                    <strong className="text-emerald-600">{formatCurrency(totalCost)}</strong>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C59D4]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    WhatsApp / Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C59D4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Send Free BOQ & Request Callback</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
