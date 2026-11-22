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
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Contractor",
    message: "",
  });

  const [activeLocation, setActiveLocation] = useState<"patna" | "noida">("patna");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#071329] via-[#0C59D4] to-[#0A47AD] text-white py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs sm:text-sm font-semibold mb-4 border border-white/10">
            <HelpCircle className="w-4 h-4 text-amber-300" />
            <span>24/7 Dedicated Support</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
            Contact Digital Labour Chowk
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
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
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                    Thank you for reaching out. One of our workforce coordinators will contact you at {formData.phone || "your number"} within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Send an Inquiry</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] text-sm text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] text-sm text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] text-sm text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        You Are A *
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] text-sm text-slate-900 bg-white"
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

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Message or Requirement *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify trade requirements, site location, timeline, or query..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0C59D4] text-sm text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0C59D4] hover:bg-[#0947AD] text-white font-bold text-sm tracking-wider uppercase shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
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
                onClick={() => setActiveLocation("patna")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeLocation === "patna"
                    ? "bg-[#0C59D4] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Patna STPI Hub
              </button>
              <button
                type="button"
                onClick={() => setActiveLocation("noida")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeLocation === "noida"
                    ? "bg-[#0C59D4] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Noida STPI Hub
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