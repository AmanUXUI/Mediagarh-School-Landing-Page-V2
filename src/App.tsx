import React, { useState, useEffect } from 'react';
import { Phone, X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Filter, Users, ShieldCheck, Play, RotateCcw, MapPin, Search } from 'lucide-react';
import EnrollmentJourneyVideo from './components/EnrollmentJourneyVideo';
import AdmissionGrowthEcosystem from './components/AdmissionGrowthEcosystem';
import TrustedSchools from './components/TrustedSchools';
import ClientTestimonials from './components/ClientTestimonials';
import SchoolPartners from './components/SchoolPartners';
import GrowthSupport from './components/GrowthSupport';

export default function App() {
  // Typewriter animation state and logic
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(60);

  const phrases = [
    "Lead Generation, School Branding & Digital Marketing Solutions",
    "Boost School Admissions & Complete Branding",
    "High-Converting Inquiries & Strategic Digital Outreach"
  ];

  // Interactive Integrated Admission Journey States
  const [journeyState, setJourneyState] = useState<'overview' | 'run' | 'capture' | 'nurture'>('overview');
  const [simulatedCampaign, setSimulatedCampaign] = useState<'google' | 'social'>('google');
  
  // Simulated Interactive Form States
  const [demoLeadName, setDemoLeadName] = useState('');
  const [demoLeadPhone, setDemoLeadPhone] = useState('');
  const [demoLeadGrade, setDemoLeadGrade] = useState('Grade 1');
  const [demoLeadStatus, setDemoLeadStatus] = useState<'idle' | 'simulating' | 'success'>('idle');

  const handleDemoLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoLeadName || !demoLeadPhone) return;
    setDemoLeadStatus('simulating');
    setTimeout(() => {
      setDemoLeadStatus('success');
    }, 1500);
  };

  const resetDemoLead = () => {
    setDemoLeadName('');
    setDemoLeadPhone('');
    setDemoLeadGrade('Grade 1');
    setDemoLeadStatus('idle');
  };

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(45 + Math.random() * 30);

        if (displayText === currentPhrase) {
          setTypingSpeed(2500); // Hold for 2.5 seconds
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(20);

        if (displayText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(400); // Delay before next phrase
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-purple-100 selection:text-indigo-900 bg-[#f4f3ef] overflow-x-hidden">
      
      {/* Premium Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex justify-between items-center gap-4">
        {/* Brand Logo - Replaced with requested image logo */}
        <div className="flex items-center select-none" id="brand-logo-container">
          <img 
            src="https://mediagarh.com/wp-content/uploads/2024/08/LOGO-2.png" 
            alt="Logo" 
            className="h-7 sm:h-8.5 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Seal - "GROWING SCHOOLS SINCE 2021" matching screenshot reference style precisely */}
        <div className="border border-[#cccccc]/80 text-slate-900 rounded-[8px] p-2.5 px-3.5 flex flex-col items-center justify-center text-center bg-[#fcfcfb] shadow-[0_1px_3px_rgba(0,0,0,0.03)] select-none shrink-0 font-sans leading-none min-w-[110px]">
          <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-900 font-sans">GROWING</span>
          <span className="text-[8px] font-extrabold tracking-[0.05em] uppercase text-slate-500 leading-none mt-1">SCHOOLS SINCE</span>
          <span className="text-[26px] font-black leading-none mt-1 tracking-tight text-slate-950 font-sans">2021</span>
        </div>
      </header>

      {/* Hero Section Container */}
      <main className="w-full flex-grow flex flex-col">
        
        {/* Main Hero Landing Portion */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center py-12 md:py-24">
          {/* Visual Hero Block */}
          <section className="text-center max-w-4xl mx-auto space-y-8 flex flex-col items-center">
            
            {/* ⭐ TRUSTED Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#e8e7e3] border border-slate-300/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 shadow-xs leading-none">
              <span className="text-yellow-600 text-xs">★</span> TRUSTED
            </div>

            {/* Majestic Hero Headline (matching photo layout precisely) */}
            <h1 className="font-cal font-[500] text-[46px] sm:text-6xl md:text-[85px] lg:text-[105px] tracking-[0.5px] leading-[1.1] lg:leading-[116px] text-slate-900 max-w-5xl text-center">
              <span className="text-[#446ef0] block drop-shadow-xs">Admission Growth</span>
              <span className="text-[#446ef0] block drop-shadow-xs">for Schools</span>
            </h1>

            {/* Subheadline (matching decoration styling with typewriter animation) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold min-h-[48px] flex items-center justify-center">
              <span className="underline decoration-slate-900 decoration-2 font-black text-slate-900 inline">
                {displayText}
              </span>
              <span className="w-[3px] h-[1.1em] bg-slate-900 ml-1 inline-block animate-pulse shrink-0 align-middle" />
            </p>

            {/* Interactive Contact Actions */}
            <div className="pt-4 flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl px-4">
                
                {/* Phone Call Button */}
                <a
                  id="hero-phone-cta"
                  href="tel:+919358934407"
                  className="w-full sm:w-auto bg-transparent hover:bg-slate-900/5 border-2 border-slate-900 text-slate-900 font-extrabold px-6 py-4 rounded-full text-base inline-flex items-center justify-center gap-3 transition-all duration-250 shadow-md hover:scale-[1.03] active:scale-95 cursor-pointer animate-none"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <span className="font-mono tracking-wider font-extrabold text-slate-900">+91 93589 34407</span>
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  id="hero-whatsapp-cta"
                  href="https://wa.me/919358934407?text=Hi!%20I'm%20interested%20in%20school%2520admission%2520growth%2520and%2520marketing%2520solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 border-2 border-emerald-600 text-white font-extrabold px-6 py-4 rounded-full text-base inline-flex items-center justify-center gap-3 transition-all duration-250 shadow-md hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-emerald-600 shrink-0">
                    <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-sans tracking-wide font-extrabold text-white text-base">WhatsApp Chat</span>
                </a>

              </div>
              <span className="text-xs text-slate-500 font-medium tracking-wide mt-1">
                Message us directly to get started
              </span>
            </div>

          </section>
        </div>

        {/* Premium Admissions Video Showcase Section */}
        <EnrollmentJourneyVideo onLetsTalkClick={() => window.open("https://wa.me/919358934407?text=Hi!%20I'm%20interested%20in%20school%20admission%20growth%20and%20marketing%20solutions.", "_blank")} />

        {/* Complete Admission Growth Ecosystem Section */}
        <AdmissionGrowthEcosystem onLetsTalkClick={() => window.open("https://wa.me/919358934407?text=Hi!%20I'm%20interested%20in%20school%20admission%20growth%20and%20marketing%20solutions.", "_blank")} />

        {/* Trusted by Schools Across India Section */}
        <TrustedSchools />

        {/* Client Testimonials Section */}
        <ClientTestimonials />

        {/* School Partners Logo Grid Section */}
        <SchoolPartners />

        {/* Growth Support Blueprint Needs Section */}
        <GrowthSupport />
      </main>

    </div>
  );
}
