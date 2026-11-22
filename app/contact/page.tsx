"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  HelpCircle,
  ExternalLink,
  Navigation,
  AlertCircle,
  ShieldCheck,
  Lock,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Field Validation Errors
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Anti-bot Honeypot Trap
  const [hpWebsite, setHpWebsite] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Contractor",
    message: "",
  });

  const [activeLocation, setActiveLocation] = useState<"patna" | "noida">("noida");

  const locations = {
    patna: {
      name: "Corporate Headquarters (Patna STPI Hub)",
      address: "Software Technology Parks of India (STPI), Patliputra Industrial Area, Patna, Bihar – 800013",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.778811675754!2d85.1150!3d25.6150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58cef0e86b03%3A0x136f48f4307a3c31!2sPatliputra%20Colony%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Software+Technology+Parks+of+India+STPI+Patliputra+Patna+Bihar+800013",
      hours: "Mon – Sat: 9:00 AM – 7:00 PM",
    },
    noida: {
      name: "NCR Corporate Office (STPI Noida Hub)",
      address: "1st Floor, STPI, Sector 29, Ganga Software Technology Complex, Noida, Uttar Pradesh – 201301",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4716943187214!2d77.3396!3d28.5836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4fb263e79fd%3A0x8385de9b33a76ef4!2sSector%2029%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=STPI+Ganga+Software+Technology+Complex+Sector+29+Noida+Uttar+Pradesh+201301",
      hours: "Mon – Sat: 9:30 AM – 6:30 PM",
    },
  };

  const currentLoc = locations[activeLocation];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // 1. Strict Phone Validation
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits (excluding +91).");
      return;
    }
    if (!/^[6-9]/.test(cleanPhone)) {
      setPhoneError("Indian mobile numbers must start with 6, 7, 8, or 9.");
      return;
    }

    // 2. Strict Name Validation
    if (formData.name.trim().length < 2) {
      setNameError("Please enter your valid name (at least 2 characters).");
      return;
    }

    // 3. Email Validation (if provided)
    if (
      formData.email &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())
    ) {
      setEmailError("Please provide a valid email format.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: cleanPhone,
          email: formData.email.trim() || undefined,
          type: formData.type,
          message: formData.message.trim(),
          hp_website: hpWebsite,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setInquiryId(data.inquiryId || null);
      } else {
        setApiError(data.error || "Submission failed. Please check your details.");
      }
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Header with Seamless Fluid Blue Video Background */}
      <section className="relative overflow-hidden bg-[#071329] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-blue-900/30">
        {/* Luminous Seamless Blue Fluid Loop Video (Zero Black Spots) */}
        <video
          src="/videos/contact-blue-fluid.mp4"
          poster="/images/contact-blue-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-90"
        />

        {/* Ambient Dark Gradient Overlays for High-Contrast Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/60 via-[#071329]/20 to-[#071329]/80 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xl text-blue-100 text-xs sm:text-sm font-bold border border-white/20 shadow-lg">
            <HelpCircle className="w-4 h-4 text-amber-300" />
            <span>24/7 Dedicated Support</span>
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-3 drop-shadow-md">
            Contact Digital Labour Chowk
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Have a project manpower requirement, need worker verification, or want to explore an institutional partnership? Reach out to our team directly.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards + Form */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Direct Helpline</h2>
              <p className="text-slate-600 text-sm mt-1">Our support specialists are available Monday to Saturday, 9 AM – 7 PM.</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+917070999175"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-[#0C59D4] group-hover:bg-[#0C59D4] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Helpline / WhatsApp</span>
                  <p className="text-base font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors mt-0.5">+91-7070999175</p>
                  <p className="text-xs text-slate-500 mt-0.5">Toll-Free Worker Support: 1800-202-0991</p>
                </div>
              </a>

              <a
                href="mailto:info@digitallabourchowk.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-[#0C59D4] group-hover:bg-[#0C59D4] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</span>
                  <p className="text-base font-bold text-slate-900 group-hover:text-[#0C59D4] transition-colors mt-0.5">info@digitallabourchowk.com</p>
                  <p className="text-xs text-slate-500 mt-0.5">Average response time: &lt; 2 hours</p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#0C59D4]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Corporate Headquarters</span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Digital Labour Chowk Pvt. Ltd.</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Software Technology Parks of India (STPI), Patliputra Industrial Area, Patna, Bihar – 800013
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Securely Received!</h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Digital Labour Chowk. Our enterprise workforce coordinator has logged your ticket and will call you at{" "}
                      <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        +91 {formData.phone}
                      </span>{" "}
                      within 2 hours.
                    </p>
                  </div>

                  {inquiryId && (
                    <div className="pt-2 text-[11px] font-mono text-slate-400">
                      Ticket Ref ID: <span className="text-slate-700 font-bold">{inquiryId}</span>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          type: "Contractor",
                          message: "",
                        });
                        setPhoneError(null);
                        setNameError(null);
                        setEmailError(null);
                        setApiError(null);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Send an Inquiry</h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>256-Bit SSL Encrypted</span>
                    </span>
                  </div>

                  {/* Anti-Bot Honeypot Trap (Hidden from genuine human visitors) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="hp_website"
                      value={hpWebsite}
                      onChange={(e) => setHpWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Server / API Error Alert */}
                  {apiError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{apiError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sanitized Name Input */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={60}
                        value={formData.name}
                        onChange={(e) => {
                          // Filter out numeric and injection characters, keep letters, spaces, hyphens
                          const val = e.target.value.replace(/[^a-zA-Z\s.'-]/g, "");
                          setFormData((prev) => ({ ...prev, name: val }));
                          if (val.trim().length > 0 && val.trim().length < 2) {
                            setNameError("Name must be at least 2 characters.");
                          } else {
                            setNameError(null);
                          }
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 transition-all ${
                          nameError
                            ? "border-red-400 focus:ring-2 focus:ring-red-100"
                            : "border-slate-200 focus:outline-none focus:border-[#0C59D4] focus:ring-2 focus:ring-blue-100"
                        }`}
                      />
                      {nameError && (
                        <p className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{nameError}</span>
                        </p>
                      )}
                    </div>

                    {/* Strictly Numeric Indian Mobile Phone Input */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Mobile Number *
                        </label>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {formData.phone.length}/10 digits
                        </span>
                      </div>

                      <div
                        className={`relative flex items-center rounded-xl border bg-white overflow-hidden transition-all ${
                          phoneError
                            ? "border-red-400 ring-2 ring-red-100"
                            : "border-slate-200 focus-within:border-[#0C59D4] focus-within:ring-2 focus-within:ring-blue-100"
                        }`}
                      >
                        {/* Fixed Country Code Prefix */}
                        <div className="flex items-center gap-1 px-3 py-2.5 bg-slate-100 border-r border-slate-200 text-slate-700 text-xs font-bold select-none shrink-0">
                          <span>🇮🇳</span>
                          <span>+91</span>
                        </div>

                        {/* Strictly Numbers Only Input */}
                        <input
                          type="tel"
                          inputMode="numeric"
                          required
                          value={formData.phone}
                          maxLength={10}
                          placeholder="98765 43210"
                          onKeyDown={(e) => {
                            // Block non-numeric keystrokes
                            if (
                              !/^[0-9]$/.test(e.key) &&
                              !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Enter"].includes(e.key) &&
                              !(e.ctrlKey || e.metaKey)
                            ) {
                              e.preventDefault();
                            }
                          }}
                          onChange={(e) => {
                            // Strip any non-digit character (handling copy/paste)
                            let val = e.target.value.replace(/\D/g, "");
                            // Auto-strip country code if user pasted with +91 or leading 0
                            if (val.length === 12 && val.startsWith("91")) {
                              val = val.slice(2);
                            } else if (val.length === 11 && val.startsWith("0")) {
                              val = val.slice(1);
                            }
                            if (val.length > 10) val = val.slice(0, 10);
                            setFormData((prev) => ({ ...prev, phone: val }));

                            // Live validation feedback
                            if (val.length > 0 && !/^[6-9]/.test(val)) {
                              setPhoneError("Indian mobile numbers must begin with 6, 7, 8, or 9.");
                            } else if (val.length > 0 && val.length < 10) {
                              setPhoneError("Please enter all 10 digits.");
                            } else {
                              setPhoneError(null);
                            }
                          }}
                          className="w-full px-3 py-2.5 text-sm font-mono text-slate-900 bg-transparent focus:outline-none"
                        />
                      </div>

                      {phoneError ? (
                        <p className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{phoneError}</span>
                        </p>
                      ) : (
                        <p className="text-[10px] text-slate-400 mt-1">
                          Strictly 10 numeric digits. Letters &amp; symbols are blocked.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sanitized Email Input */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        maxLength={100}
                        value={formData.email}
                        onChange={(e) => {
                          const val = e.target.value.trim();
                          setFormData((prev) => ({ ...prev, email: val }));
                          if (
                            val.length > 0 &&
                            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
                          ) {
                            setEmailError("Please enter a valid email format.");
                          } else {
                            setEmailError(null);
                          }
                        }}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 transition-all ${
                          emailError
                            ? "border-red-400 focus:ring-2 focus:ring-red-100"
                            : "border-slate-200 focus:outline-none focus:border-[#0C59D4] focus:ring-2 focus:ring-blue-100"
                        }`}
                      />
                      {emailError && (
                        <p className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{emailError}</span>
                        </p>
                      )}
                    </div>

                    {/* Category Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        You Are A *
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-white"
                      >
                        <option value="Contractor">Contractor / Sub-Contractor</option>
                        <option value="General Contractor">General Contractor / EPC</option>
                        <option value="Builder">Builder &amp; Developer</option>
                        <option value="Agency">Staffing Agency</option>
                        <option value="Worker">Worker / Craftsman</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Sanitized Message Textarea with Length Cap */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Message or Requirement *
                      </label>
                      <span className="text-[10px] font-mono text-slate-400">
                        {formData.message.length}/1000 characters
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      required
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value.slice(0, 1000),
                        }));
                      }}
                      placeholder="Please specify trade requirements, site location, timeline, or query..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 leading-relaxed"
                    />
                  </div>

                  {/* Submission Button with Cooldown & Spinner */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-sm tracking-wider uppercase shadow-md transition-all active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying &amp; Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Secure Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="pt-1 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Zero spam guarantee. Data processed under ISO/IEC 27001 data protection protocols.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* Horizontally Stretched Full-Width Google Map (Directly Above Footer) */}
      {/* ===================================================================== */}
      <section className="w-full bg-white border-t border-slate-200 mt-12 sm:mt-16">
        {/* Map Header & Multi-Office Switcher */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0C59D4] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Interactive Location Map</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Locate Our Technology &amp; Operations Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl font-normal leading-relaxed">
              Visit our primary technical incubation facility or our NCR enterprise center. Click between centers to reposition the map.
            </p>
          </div>

          {/* Location Tabs & Directions CTA */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveLocation("noida")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeLocation === "noida"
                    ? "bg-[#0C59D4] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Noida STPI Hub (NCR HQ)
              </button>
              <button
                type="button"
                onClick={() => setActiveLocation("patna")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeLocation === "patna"
                    ? "bg-[#0C59D4] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Patna STPI Hub
              </button>
            </div>

            <a
              href={currentLoc.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-400" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Selected Hub Summary Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-[#0C59D4] shrink-0" />
            <span className="font-bold text-slate-900">{currentLoc.name}:</span>
            <span className="text-slate-600">{currentLoc.address}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-medium shrink-0">
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{currentLoc.hours}</span>
          </div>
        </div>

        {/* Full-Width Horizontally Stretched Map Container */}
        <div className="w-full h-[400px] sm:h-[460px] lg:h-[500px] relative bg-slate-100 border-t border-slate-200">
          <iframe
            key={activeLocation}
            src={currentLoc.embedUrl}
            title={currentLoc.name}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-[1.05] contrast-[1.02]"
          />
        </div>
      </section>
    </div>
  );
}