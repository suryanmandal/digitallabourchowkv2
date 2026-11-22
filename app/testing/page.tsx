import React from "react";

export default function TestingPage() {
  return (
    <main className="w-full min-h-screen bg-white flex items-center justify-center p-4 sm:p-10 select-none">
      {/* Orange Frame matching user design */}
      <div className="relative w-full max-w-[890px] bg-[#F15A24] pt-14 sm:pt-20 overflow-hidden shadow-md">
        
        {/* Frame 8 Label */}
        <div className="w-[65.2%] ml-auto pl-1 pb-2 text-xs sm:text-sm font-medium text-white/50">
          Frame 8
        </div>

        {/* Card Body */}
        <div className="w-full flex items-stretch">
          
          {/* Left Column (34.8%): White Card Area */}
          <div className="w-[34.8%] bg-[#F8F8F6] rounded-tl-[36px] sm:rounded-tl-[48px] pt-14 pb-12 sm:pt-20 sm:pb-16 pl-6 sm:pl-10 lg:pl-12 pr-4 flex flex-col justify-center min-h-[260px] sm:min-h-[320px]">
            <span className="block text-xs sm:text-sm font-medium text-slate-400 tracking-wide mb-3 sm:mb-4">
              Category name
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-black leading-[1.08] tracking-tight">
              Masons / <br />
              <span>Rajmistri</span>
            </h2>
          </div>

          {/* Right Column (65.2%): Frame 8 Green Box */}
          <div className="w-[65.2%] relative">
            <div
              style={{
                top: "calc(-46.25%)",
                bottom: "0px",
              }}
              className="absolute inset-x-0 bg-[#087A60]"
            />
          </div>

        </div>

        {/* Bottom Black Bar */}
        <div className="w-full h-6 sm:h-7 bg-black rounded-b-[20px] sm:rounded-b-[24px]" />

      </div>
    </main>
  );
}
