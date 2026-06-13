import React, { useRef, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  GraduationCap, 
  Globe2, 
  Compass, 
  School,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export default function TrustedSchools() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    schoolName: '',
    contactPerson: '',
    mobileNumber: '',
    workEmail: '',
    city: '',
    schoolWebsite: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { label: "CBSE", icon: BookOpen, color: "text-blue-600", hoverBg: "hover:bg-blue-600 hover:border-blue-600" },
    { label: "ICSE", icon: GraduationCap, color: "text-indigo-600", hoverBg: "hover:bg-indigo-600 hover:border-indigo-600" },
    { label: "Cambridge", icon: Globe2, color: "text-emerald-600", hoverBg: "hover:bg-emerald-600 hover:border-emerald-600" },
    { label: "IB Schools", icon: Compass, color: "text-rose-600", hoverBg: "hover:bg-rose-600 hover:border-rose-600" },
    { label: "International Schools", icon: School, color: "text-amber-600", hoverBg: "hover:bg-amber-600 hover:border-amber-600" }
  ];

  // Properly shuffled and balanced screenshot list
  const shuffledScreenshots = [
    "https://i.postimg.cc/Xqq6kmZp/BG-(1).png",
    "https://i.postimg.cc/xjp21f7G/BG-(5).png",
    "https://i.postimg.cc/657N2sxQ/BG-(9).png",
    "https://i.postimg.cc/prrMJ49S/BG-(2).png",
    "https://i.postimg.cc/QNY3d8Pb/BG-(6).png",
    "https://i.postimg.cc/Fs2X0PhH/BG-(10).png",
    "https://i.postimg.cc/L5WKCDL5/BG-(3).png",
    "https://i.postimg.cc/QNY3d8P6/BG-(7).png",
    "https://i.postimg.cc/J49CjTRJ/BG-(11).png",
    "https://i.postimg.cc/WzzcwCDf/BG-(4).png",
    "https://i.postimg.cc/QxBr9LGR/BG-(8).png",
    "https://i.postimg.cc/CLWpbvwJ/BG-(12).png"
  ];

  // Duplicate for seamless scroll
  const duplicatedScreenshots = [...shuffledScreenshots, ...shuffledScreenshots];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API registration/submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section 
      id="trusted-schools" 
      className="w-full text-slate-900 pt-20 pb-24 overflow-hidden relative border-t border-slate-300 select-none animate-fadeIn"
      style={{ background: 'linear-gradient(to bottom, #F4F3EF 0%, #F4F3EF 25%, #0E100E 35%, #0E100E 100%)' }}
    >
      {/* Self-contained CSS injection for infinite layout and state transitions */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infiniteSliderScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-50% - 12px), 0, 0);
          }
        }
        .infinite-sliding-track {
          display: flex;
          gap: 24px;
          animation: infiniteSliderScroll 35s linear infinite;
          width: max-content;
        }
        .infinite-slider-container:hover .infinite-sliding-track {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        {/* Layout mimicking the dual-alignment in the screenshot */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Section Heading */}
          <div className="text-center lg:text-left max-w-md lg:max-w-lg">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight font-sans text-slate-950 leading-[1.1]">
              Trusted by Schools Across India
            </h2>
          </div>

          {/* White circles exactly as reference screenshot with custom icons */}
          <div className="flex flex-nowrap items-center justify-start lg:justify-end gap-3 sm:gap-5 overflow-x-auto scrollbar-none w-full lg:w-auto p-4 sm:p-6 lg:p-2">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={idx}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-slate-200/80 flex flex-col items-center justify-center p-2 text-center hover:scale-105 ${cat.hoverBg} transition-all duration-300 ease-out active:scale-95 cursor-default group shrink-0`}
                >
                  <IconComp className={`w-4 h-4 sm:w-5 sm:h-5 ${cat.color} group-hover:text-white mb-1 transition-all duration-300 group-hover:scale-110`} />
                  <span className="text-[8px] sm:text-[9.5px] font-black tracking-wider text-slate-900 group-hover:text-white uppercase leading-tight max-w-[76px] sm:max-w-[84px] block transition-colors duration-300">
                    {cat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Overuse a gorgeous unified canvas for premium mockups showcase, exactly like screenshot */}
      <div className="w-full py-12 md:py-16 relative overflow-hidden infinite-slider-container">
        
        {/* Infinite scroll layout container */}
        <div className="infinite-sliding-track">
          {duplicatedScreenshots.map((imgSrc, idx) => (
            <div 
              key={idx}
              className="shrink-0 transition-all duration-300 hover:scale-[1.05] relative group/mockup"
            >
              <img 
                src={imgSrc} 
                alt={`School Partner Mobile Screen ${idx + 1}`} 
                referrerPolicy="no-referrer"
                className="w-[180px] sm:w-[210px] h-auto object-contain select-none filter grayscale opacity-70 transition-all duration-500 ease-out group-hover/mockup:filter-none group-hover/mockup:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* "Like what you see?" Bridge Element precisely styled after image reference */}
      <div className="w-full text-center py-16 md:py-24">
        <div className="inline-flex items-center justify-between gap-12 max-w-4xl w-[90%] mx-auto bg-transparent border-b border-white/10 pb-8">
          <span className="text-3xl sm:text-[42px] font-light text-white font-sans tracking-tight">
            Like what you see?
          </span>
          <button 
            type="button"
            onClick={() => window.open("https://wa.me/919358934407?text=Hi!%20I'm%20interested%20in%20school%20admission%20growth%20and%20marketing%20solutions.", "_blank")}
            className="inline-flex items-center gap-2 bg-[#eae7df] hover:bg-white text-slate-950 px-6 sm:px-7 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-lg group"
          >
            LET'S TALK
            <span className="w-5 h-5 rounded-full bg-slate-950 text-white text-[10px] flex items-center justify-center font-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* Section - 5: "Let's Meet" Main Layout */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 mt-4 pb-12 relative animate-fadeIn">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-[54px] lg:text-[62px] font-black tracking-tight text-[#eae7df] leading-tight font-sans">
            Get Your Admissions Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side Content - SkoolReady styled branding & luxury pills */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full text-white/90">
            <div>
              <div className="flex flex-col items-start mb-6 border-b border-white/5 pb-3 select-none">
                <img 
                  src="https://mediagarh.com/wp-content/uploads/2022/03/newlogo-1.png" 
                  alt="SkoolReady" 
                  className="h-10 sm:h-12 w-auto object-contain mb-2 animate-fadeIn"
                  referrerPolicy="no-referrer"
                />
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#446ef0]">
                  WE HELP SCHOOLS GROW & SUCCEED
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#eae7df] mb-4 font-sans uppercase">
                School Growth Starts Here
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-12 max-w-sm font-sans font-light">
                Generate more enquiries, improve conversions, and increase admissions with a proven school marketing system.
              </p>
            </div>

            {/* Custom Contact Labels with Floating Mini-Badges */}
            <div className="space-y-7 max-w-sm">
              
              {/* CALL US Pill Container */}
              <div className="relative pt-2 group">
                <div className="absolute -top-1 left-6 px-2.5 py-0.5 bg-slate-950 text-[8px] font-black text-slate-400 tracking-widest uppercase rounded-full border border-white/10 z-10 transition-colors group-hover:border-emerald-500/20 group-hover:text-[#446ef0]">
                  CALL US
                </div>
                <a 
                  href="tel:+919358934407"
                  className="flex items-center justify-between px-6 py-4 rounded-full bg-slate-950/80 border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-bold text-[#eae7df] tracking-wide">+91 93589 34407</span>
                  <span className="text-slate-600 group-hover:text-emerald-400 transition-colors text-xs font-bold font-mono">↗</span>
                </a>
              </div>

              {/* WHATSAPP CALL/CHAT Pill Container */}
              <div className="relative pt-2 group">
                <div className="absolute -top-1 left-6 px-2.5 py-0.5 bg-slate-950 text-[8px] font-black text-slate-400 tracking-widest uppercase rounded-full border border-white/10 z-10 transition-colors group-hover:border-emerald-500/20 group-hover:text-[#446ef0]">
                  WHATSAPP
                </div>
                <a 
                  href="https://wa.me/919358934407?text=Hi!%20I'm%20interested%20in%20school%20admissions%20growth%20plan."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-6 py-4 rounded-full bg-slate-950/80 border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-bold text-[#eae7df] tracking-wide">+91 93589 34407</span>
                  <span className="text-slate-600 group-hover:text-emerald-400 transition-colors text-xs font-bold font-mono">↗</span>
                </a>
              </div>

              {/* EMAIL Pill Container */}
              <div className="relative pt-2 group">
                <div className="absolute -top-1 left-6 px-2.5 py-0.5 bg-slate-950 text-[8px] font-black text-slate-400 tracking-widest uppercase rounded-full border border-white/10 z-10 transition-colors group-hover:border-emerald-500/20 group-hover:text-[#446ef0]">
                  EMAIL
                </div>
                <a 
                  href="mailto:kartik@mediagarh.com"
                  className="flex items-center justify-between px-6 py-4 rounded-full bg-slate-950/80 border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-bold text-[#eae7df] tracking-wide">kartik@mediagarh.com</span>
                  <span className="text-slate-600 group-hover:text-emerald-400 transition-colors text-xs font-bold font-mono">↗</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Side Form Panel - Re-engineered as standard luxury white sheet layout */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl relative text-slate-900 border border-slate-100">
            
            {isSubmitted ? (
              <div className="text-center py-16 px-4 animate-scaleUp">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-6 stroke-[1.5]" />
                <h5 className="text-2xl font-black text-slate-900 mb-2 font-sans">Thank you!</h5>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  We have received your details. Kartik from MediaGarh will reach out shortly with your customized admissions plan.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-black tracking-widest uppercase text-emerald-600 hover:text-emerald-700 transition-colors p-2"
                >
                  Configure another plan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column fields structure with fine interior lines matching the custom mockup card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Organisation Name (School Name) */}
                  <div className="relative border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-slate-400 transition-all focus-within:ring-2 focus-within:ring-[#446ef0]/20">
                    <span className="text-slate-400 text-xs font-mono uppercase bg-slate-100 p-1.5 rounded">🏢</span>
                    <div className="flex-1">
                      <input 
                        type="text"
                        required
                        placeholder="YOUR ORGANISATION NAME"
                        value={form.schoolName}
                        onChange={(e) => setForm({...form, schoolName: e.target.value})}
                        className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-black tracking-wider focus:outline-none uppercase"
                      />
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div className="relative border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-slate-400 transition-all focus-within:ring-2 focus-within:ring-[#446ef0]/20">
                    <span className="text-slate-400 text-xs font-mono uppercase bg-slate-100 p-1.5 rounded">👤</span>
                    <div className="flex-1">
                      <input 
                        type="text"
                        required
                        placeholder="CONTACT PERSON"
                        value={form.contactPerson}
                        onChange={(e) => setForm({...form, contactPerson: e.target.value})}
                        className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-black tracking-wider focus:outline-none uppercase"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div className="relative border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-slate-400 transition-all focus-within:ring-2 focus-within:ring-[#446ef0]/20">
                    <span className="text-slate-400 text-xs font-mono uppercase bg-slate-100 p-1.5 rounded">📞</span>
                    <div className="flex-1">
                      <input 
                        type="tel"
                        required
                        placeholder="MOBILE NUMBER"
                        value={form.mobileNumber}
                        onChange={(e) => setForm({...form, mobileNumber: e.target.value})}
                        className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-black tracking-wider focus:outline-none uppercase"
                      />
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="relative border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-slate-400 transition-all focus-within:ring-2 focus-within:ring-[#446ef0]/20">
                    <span className="text-slate-400 text-xs font-mono uppercase bg-slate-100 p-1.5 rounded">✉️</span>
                    <div className="flex-1">
                      <input 
                        type="email"
                        required
                        placeholder="OFFICIAL EMAIL"
                        value={form.workEmail}
                        onChange={(e) => setForm({...form, workEmail: e.target.value})}
                        className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-black tracking-wider focus:outline-none uppercase"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div className="relative border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-slate-400 transition-all focus-within:ring-2 focus-within:ring-[#446ef0]/20">
                    <span className="text-slate-400 text-xs font-mono uppercase bg-slate-100 p-1.5 rounded">📍</span>
                    <div className="flex-1">
                      <input 
                        type="text"
                        required
                        placeholder="CITY"
                        value={form.city}
                        onChange={(e) => setForm({...form, city: e.target.value})}
                        className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-black tracking-wider focus:outline-none uppercase"
                      />
                    </div>
                  </div>

                  {/* Current Website */}
                  <div className="relative border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-slate-400 transition-all focus-within:ring-2 focus-within:ring-[#446ef0]/20">
                    <span className="text-slate-400 text-xs font-mono uppercase bg-slate-100 p-1.5 rounded">🌐</span>
                    <div className="flex-1">
                      <input 
                        type="url"
                        placeholder="CURRENT WEBSITE (OPTIONAL)"
                        value={form.schoolWebsite}
                        onChange={(e) => setForm({...form, schoolWebsite: e.target.value})}
                        className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-black tracking-wider focus:outline-none uppercase"
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Date Section - Styled precisely like reference checkmarks */}
                <div className="pt-2">
                  <span className="block text-[9px] font-black uppercase text-slate-400 tracking-wider mb-3">APPOINTMENT DATE</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { day: 'MON, JUN 15' },
                      { day: 'TUE, JUN 16' },
                      { day: 'WED, JUN 17' },
                      { day: 'THU, JUN 18' },
                      { day: 'FRI, JUN 19' },
                      { day: 'SAT, JUN 20' }
                    ].map((item, id) => {
                      const isSelected = id === 0; // Replicates the orange color on active date
                      return (
                        <button
                          key={id}
                          type="button"
                          className={`py-3.5 px-3 rounded text-[10px] font-black tracking-wider uppercase text-center transition-all duration-200 ${
                            isSelected 
                              ? 'bg-[#446ef0] text-white shadow-md' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {item.day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Low-fidelity verification capcha exactly as pictured in reference design layout */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="bg-slate-100 px-4 py-2 text-slate-600 font-mono font-black tracking-[4px] text-sm select-none rounded border border-slate-200/50 line-through decoration-slate-400/80 decoration-2"
                      style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}
                    >
                      8193
                    </div>
                    <input 
                      type="text"
                      placeholder="ENTER CODE"
                      required
                      className="w-28 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-900 placeholder-slate-400 text-[10px] font-black tracking-wider rounded px-3 py-2.5 focus:outline-none uppercase focus:ring-1 focus:ring-slate-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#446ef0] hover:bg-[#345bcf] text-white font-black tracking-wider uppercase px-7 py-3 rounded text-xs transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "SUBMITTING..."
                    ) : (
                      "PROCEED"
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>

    </section>
  );
}
