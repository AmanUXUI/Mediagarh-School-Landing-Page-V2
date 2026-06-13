import React from 'react';

export default function GrowthSupport() {
  const needsData = [
    {
      num: "01",
      title: "ADMISSION-FOCUSED STRATEGY",
      description: "Every campaign, website, and marketing initiative is built around one goal—helping your school generate more enquiries and increase admissions."
    },
    {
      num: "02",
      title: "COMPLETE DIGITAL GROWTH SOLUTIONS",
      description: "From Google Ads and Meta Ads to SEO, websites, creative design, and lead nurturing, everything works together under one roof."
    },
    {
      num: "03",
      title: "BUILT FOR LONG-TERM SCHOOL GROWTH",
      description: "We don't just generate enquiries. We help schools strengthen their brand, improve visibility, engage parents, and build a sustainable admission pipeline."
    }
  ];

  return (
    <section 
      id="growth-support-needs" 
      className="w-full bg-[#0e100e] py-24 sm:py-32 border-t border-white/5 select-none relative overflow-hidden"
    >
      {/* Self-contained style block for smooth horizontal showcase marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes creativeScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-33.333% - 16px), 0, 0);
          }
        }
        .creative-track {
          display: flex;
          gap: 24px;
          animation: creativeScrollLeft 60s linear infinite;
          width: max-content;
        }
        .creative-slider-container:hover .creative-track {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative subtle ambient dark glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#446ef0]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Column - Big display typography & narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-fadeIn">
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.15em] text-[#446ef0] uppercase mb-6 leading-none self-start">
              Growth System
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-tight font-sans">
              Everything Your School Needs to Grow Admissions
            </h2>
            
            <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed mt-6 max-w-lg font-sans font-light">
              From attracting prospective parents to converting enquiries into admissions, we provide the strategy, technology, and marketing support schools need to grow consistently.
            </p>
          </div>

          {/* Right Side Column - Stylized numbered feature stack cards */}
          <div className="lg:col-span-7 space-y-5">
            {needsData.map((item, index) => (
              <div 
                key={index}
                id={`growth-need-item-${item.num}`}
                className="bg-[#151815] border border-white/5 hover:border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:translate-y-[-2px] flex items-start gap-5 sm:gap-6 group"
              >
                {/* Number bullet inside block */}
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tighter shrink-0 text-slate-700/80 group-hover:text-[#446ef0] transition-colors duration-300">
                  {item.num}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#eae7df] tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dynamic Creative Showcase Slider Section - Full Width of Section */}
      <div className="mt-20 pt-12 border-t border-white/5 w-full">
        {/* Full-width interactive sliding viewport with shadow vignette */}
        <div className="relative w-full overflow-hidden creative-slider-container">
          {/* Vignette overlays for beautiful fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0e100e] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0e100e] to-transparent z-10 pointer-events-none" />

          <div className="creative-track py-6 px-12">
            {/* Loop duplicated three times for flawless seamless scrolling */}
            {[...Array(3)].flatMap((_, dupeIdx) => [
              { id: "s1", url: "https://i.postimg.cc/YCSS0Dqh/Screenshot-2026-06-13-152401.png" },
              { id: "s2", url: "https://i.postimg.cc/13Y3q0fz/Screenshot-2026-06-13-152409.png" },
              { id: "s3", url: "https://i.postimg.cc/kghgbNBB/Screenshot-2026-06-13-152415.png" },
              { id: "s4", url: "https://i.postimg.cc/FHnHLb7R/Screenshot-2026-06-13-152423.png" },
              { id: "s5", url: "https://i.postimg.cc/nhwhDKCr/Screenshot-2026-06-13-152428.png" },
              { id: "s6", url: "https://i.postimg.cc/XYDYCKpw/Screenshot-2026-06-13-152442.png" },
              { id: "s7", url: "https://i.postimg.cc/zGPGgwVx/Screenshot-2026-06-13-152458.png" },
              { id: "s8", url: "https://i.postimg.cc/vZSZV7cX/Screenshot-2026-06-13-152502.png" },
              { id: "s9", url: "https://i.postimg.cc/mg6gH3tX/Screenshot-2026-06-13-152524.png" },
              { id: "s10", url: "https://i.postimg.cc/MGMKbcQ0/Screenshot-2026-06-13-152540.png" },
              { id: "s11", url: "https://i.postimg.cc/TPLYqyDH/Screenshot-2026-06-13-152547.png" }
            ].map((item, idx) => (
              <img 
                key={`creative-${dupeIdx}-${item.id}-${idx}`}
                src={item.url} 
                alt="Campaign Creative Showcase" 
                className="w-[320px] sm:w-[480px] md:w-[620px] h-auto object-contain rounded-2xl border-[6px] sm:border-[10px] border-white shadow-2xl filter grayscale contrast-[1.05] hover:grayscale-0 hover:scale-[1.03] hover:shadow-white/10 transition-all duration-500 cursor-pointer shrink-0"
                referrerPolicy="no-referrer"
              />
            )))}
          </div>
        </div>
      </div>

      {/* Brand Growth Partner Banner Section following the image slider */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-24 sm:mt-32 pb-12 relative z-10 animate-fadeIn">
        <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tighter text-[#eae7df] leading-[1.05] font-sans">
          More Than Marketing.<br />
          <span className="premium-text-gradient">A Growth Partner.</span>
        </h2>
        
        <p className="text-[#a1a1aa] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-6 font-sans font-light">
          Every campaign, website, and strategy is designed around one goal—helping schools increase enquiries, improve conversions, and grow admissions.
        </p>

        {/* Call to Actions matching the exact premium reference brand styling */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button 
            type="button"
            onClick={() => {
              const element = document.getElementById('lead-diagnostic');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                const partnerSection = document.getElementById('school-partners');
                if (partnerSection) {
                  partnerSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#446ef0] hover:bg-[#345bcf] text-white font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#446ef0]/20 hover:scale-105 cursor-pointer"
          >
            Get Admissions Plan
          </button>

          <a 
            href="tel:+919358934407"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#eae7df] text-black px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <span className="text-sm">🎧</span>
            <span>+91 93589 34407</span>
          </a>
        </div>
      </div>
    </section>
  );
}
