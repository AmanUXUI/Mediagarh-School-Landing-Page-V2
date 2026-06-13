import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface EnrollmentJourneyVideoProps {
  onLetsTalkClick?: () => void;
}

export default function EnrollmentJourneyVideo({ onLetsTalkClick }: EnrollmentJourneyVideoProps) {
  return (
    <section 
      id="enrollment-journey-video" 
      className="w-full relative px-4 sm:px-6 md:px-8 -mt-8 sm:-mt-12 md:-mt-16 pb-36 md:pb-48 z-30"
    >
      {/* The black canvas starting at 25% height of the video section */}
      <div className="absolute inset-x-0 bottom-0 top-[20%] bg-[#0d0e11] border-t border-slate-800">
        {/* Subtle ambiance styling to fit the premium dark layout */}
        <div className="absolute inset-0 bg-[radial-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),radial-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pt-6">
        {/* Video Box Wrapper */}
        <div className="w-[95%] mx-auto rounded-[24px] bg-white p-2 sm:p-2.5 shadow-2xl relative">
          {/* Inner 16:9 aspect box without any boundary border constraints */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black relative">
            <iframe 
              src="https://streamable.com/e/8r8hkk?autoplay=1&loop=1&muted=1&controls=0" 
              title="School Enrollment System Video Walkthrough"
              frameBorder="0" 
              width="100%" 
              height="100%" 
              allow="autoplay; fullscreen" 
              allowFullScreen
              className="absolute inset-0 w-full h-full pointer-events-none scale-100"
            />
            {/* Transparent overlay shield to capture any pointer events and prevent controls from showing */}
            <div className="absolute inset-0 z-20 bg-transparent" />
          </div>
        </div>

        {/* Row 1: "School Marketing Requires a Different Approach" and "LET'S TALK ↗" button exactly like screenshot */}
        <div className="mt-24 sm:mt-32 flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <h3 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[56px] font-[300] tracking-tight text-[#ecebe4] font-sans leading-tight text-center lg:text-left">
            School Marketing Requires a Different Approach
          </h3>
          
          <button
            onClick={onLetsTalkClick}
            className="group shrink-0 inline-flex items-center gap-3 bg-[#f0efe6] hover:bg-white text-slate-900 font-extrabold tracking-wider px-6 py-3.5 rounded-full text-xs uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-lg"
          >
            <span>LET'S TALK</span>
            <div className="w-7 h-7 rounded-full bg-[#14151a] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* Row 2: Centered Subhead Spacer */}
        <div className="mt-20 text-center">
          <p className="text-[10px] sm:text-xs font-extrabold tracking-[0.25em] text-slate-300 uppercase select-none">
            Trusted by 100+ schools across India
          </p>
        </div>

        {/* Row 3: Gorgeous Gradient Stats Grid (matching image layout premium quality) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-black font-sans tracking-tight premium-text-gradient bg-clip-text text-transparent filter drop-shadow-sm select-none whitespace-nowrap">
              100,000+
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#ecebe4] uppercase leading-normal max-w-[180px]">
              Admission Enquiries Generated
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black font-sans tracking-tight premium-text-gradient bg-clip-text text-transparent filter drop-shadow-sm select-none">
              40+
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#ecebe4] uppercase leading-normal max-w-[180px]">
              Schools & Education Brands
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black font-sans tracking-tight premium-text-gradient bg-clip-text text-transparent filter drop-shadow-sm select-none">
              25+
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#ecebe4] uppercase leading-normal max-w-[180px]">
              Cities Served
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-black font-sans tracking-tight premium-text-gradient bg-clip-text text-transparent filter drop-shadow-sm select-none whitespace-nowrap">
              ₹10Cr+
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#ecebe4] uppercase leading-normal max-w-[180px]">
              Marketing Budget Managed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
