import React from "react";

export default function TestingPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 select-none space-y-28 sm:space-y-36">
      
      {/* =====================================================================
          CARD 1: ORIGINAL (MASONS / RAJMISTRI)
         ===================================================================== */}
      <div className="relative w-full max-w-[890px] pt-24 sm:pt-32">
        {/* Identifier Label */}
        <div className="text-xs sm:text-sm font-bold text-slate-400 mb-2 pl-1 tracking-wider uppercase">
          Card 1
        </div>

        {/* Unified Off-White Card Container */}
        <div className="relative w-full bg-[#F8F8F6] rounded-t-[36px] sm:rounded-t-[48px] flex items-stretch">
          
          {/* Left Column (34.8%): Text Area */}
          <div className="w-[34.8%] pt-14 pb-12 sm:pt-20 sm:pb-16 pl-6 sm:pl-10 lg:pl-12 pr-4 flex flex-col justify-center min-h-[260px] sm:min-h-[320px] relative z-10">
            <span className="block text-xs sm:text-sm font-medium text-slate-400 tracking-wide mb-3 sm:mb-4">
              Category name
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-black leading-[1.08] tracking-tight">
              Masons / <br />
              <span>Rajmistri</span>
            </h2>
          </div>

          {/* Right Column (65.2%): Frame 8 Video Container */}
          <div className="w-[65.2%] relative">
            <div
              style={{
                top: "calc(-46.25%)",
                bottom: "0px",
              }}
              className="absolute inset-x-0 bg-transparent flex items-end justify-center pointer-events-none"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-bottom"
              >
                <source src="/videos/mason.webm" type="video/webm" />
                <source src="/mason.webm" type="video/webm" />
              </video>
            </div>
          </div>

        </div>

        {/* Bottom Black Bar */}
        <div className="w-full h-6 sm:h-7 bg-black rounded-b-[20px] sm:rounded-b-[24px]" />
      </div>

      {/* =====================================================================
          CARD 2: DUPLICATE (NAMED CARD 2)
         ===================================================================== */}
      <div className="relative w-full max-w-[890px] pt-24 sm:pt-32">
        {/* Identifier Label */}
        <div className="text-xs sm:text-sm font-bold text-slate-400 mb-2 pl-1 tracking-wider uppercase">
          Card 2
        </div>

        {/* Unified Off-White Card Container */}
        <div className="relative w-full bg-[#F8F8F6] rounded-t-[36px] sm:rounded-t-[48px] flex items-stretch">
          
          {/* Left Column (34.8%): Text Area */}
          <div className="w-[34.8%] pt-14 pb-12 sm:pt-20 sm:pb-16 pl-6 sm:pl-10 lg:pl-12 pr-4 flex flex-col justify-center min-h-[260px] sm:min-h-[320px] relative z-10">
            <span className="block text-xs sm:text-sm font-medium text-slate-400 tracking-wide mb-3 sm:mb-4">
              Category name
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-black leading-[1.08] tracking-tight">
              Card 2
            </h2>
          </div>

          {/* Right Column (65.2%): Frame 8 Video Container */}
          <div className="w-[65.2%] relative">
            <div
              style={{
                top: "calc(-46.25%)",
                bottom: "0px",
              }}
              className="absolute inset-x-0 bg-transparent flex items-end justify-center pointer-events-none"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-bottom"
              >
                <source src="/videos/mason.webm" type="video/webm" />
                <source src="/mason.webm" type="video/webm" />
              </video>
            </div>
          </div>

        </div>

        {/* Bottom Black Bar */}
        <div className="w-full h-6 sm:h-7 bg-black rounded-b-[20px] sm:rounded-b-[24px]" />
      </div>

    </main>
  );
}
