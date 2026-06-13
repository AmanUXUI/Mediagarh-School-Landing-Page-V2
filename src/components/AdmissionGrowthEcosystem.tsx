import React from 'react';
import { 
  Check, 
  ArrowUpRight, 
  Search, 
  Globe, 
  Smartphone, 
  Video, 
  Instagram, 
  Cpu, 
  Award,
  ChevronRight
} from 'lucide-react';

interface AdmissionGrowthEcosystemProps {
  onLetsTalkClick?: () => void;
}

export default function AdmissionGrowthEcosystem({ onLetsTalkClick }: AdmissionGrowthEcosystemProps) {
  const cards = [
    {
      id: "card-1",
      title: "Google & Meta Ads",
      description: "Generate high-intent admission enquiries through targeted campaigns across Google Search, Display, YouTube, Facebook, and Instagram.",
      features: [
        "Google Search Ads",
        "Google Display Ads",
        "YouTube Ads",
        "Meta Ads (Facebook & Instagram)",
        "Admission Lead Campaigns"
      ],
      icon: Globe,
      color: "text-[#1d4ed8]" // Royal blue accent
    },
    {
      id: "card-2",
      title: "SEO & Local Visibility",
      description: "Help parents discover your school through search engines, local listings, and organic visibility strategies.",
      features: [
        "Search Engine Optimization",
        "Google Business Profile",
        "Local SEO",
        "Keyword Strategy",
        "Reputation Management"
      ],
      icon: Search,
      color: "text-[#1d4ed8]"
    },
    {
      id: "card-3",
      title: "Websites & Landing Pages",
      description: "Convert visitors into admission enquiries with high-converting school websites and dedicated admission landing pages.",
      features: [
        "Web Design & Development",
        "Landing Page Design",
        "Mobile Optimization",
        "Lead Capture Forms",
        "Conversion Optimization"
      ],
      icon: Smartphone,
      color: "text-[#1d4ed8]"
    },
    {
      id: "card-4",
      title: "Creative & Video Production",
      description: "Build trust and engagement with compelling visuals, admission campaigns, and school storytelling.",
      features: [
        "Creative Designing",
        "Video Ad Production",
        "Campus Showcase Videos",
        "Student Success Stories",
        "Social Media Creatives"
      ],
      icon: Video,
      color: "text-[#1d4ed8]"
    },
    {
      id: "card-5",
      title: "Social Media Management",
      description: "Stay connected with parents and strengthen your school's digital presence through consistent content and engagement.",
      features: [
        "Content Planning",
        "Social Media Management",
        "Parent Engagement Content",
        "Brand Building",
        "Community Growth"
      ],
      icon: Instagram,
      color: "text-[#1d4ed8]"
    },
    {
      id: "card-6",
      title: "Lead Nurturing & Automation",
      description: "Convert more enquiries into admissions with structured follow-ups and automated communication.",
      features: [
        "WhatsApp Automation",
        "Lead Nurturing",
        "CRM Integration",
        "Follow-Up Workflows",
        "Admission Funnel Management"
      ],
      icon: Cpu,
      color: "text-[#1d4ed8]"
    },
    {
      id: "card-7",
      title: "School Branding & PR",
      description: "Strengthen credibility and position your institution as a preferred choice for parents.",
      features: [
        "School Branding",
        "Communication Strategy",
        "PR Activities",
        "Reputation Building",
        "Event Promotion"
      ],
      icon: Award,
      color: "text-[#1d4ed8]"
    }
  ];

  return (
    <section 
      id="admission-growth-ecosystem" 
      className="w-full bg-[#f4f3ef] text-slate-900 py-24 px-6 sm:px-12 relative overflow-hidden border-t border-slate-300 select-none"
    >
      {/* Decorative patterns mimicking premium layout */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0e11]/80 to-transparent pointer-events-none opacity-5" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block according to screenshot layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900/5 border border-slate-900/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest text-[#1d4ed8] uppercase leading-none">
            OUR SERVICES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sans text-slate-950 leading-tight">
            Complete Admission Growth Ecosystem
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Everything your school needs to attract, engage, and enroll more students.
          </p>
        </div>

        {/* Dynamic Column layout exactly copying screenshot structure with 3 top cards and 4 bottom cards on desktop */}
        <div className="space-y-6">
          
          {/* Row 1: 3 cards on desktop / grids elsewhere */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.slice(0, 3).map((card) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={card.id}
                  className="bg-white rounded-[24px] p-8 pb-10 border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:scale-[1.04] hover:-translate-y-1.5 transition-all duration-300 relative group min-h-[440px]"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-2xl font-extrabold text-slate-950 group-hover:text-[#1d4ed8] transition-colors leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-sans font-medium">
                        {card.description}
                      </p>
                    </div>

                    {/* Features checklist exactly mimicking screenshot list style but with ✔ symbol */}
                    <ul className="space-y-2.5 text-left font-sans">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-slate-800 text-xs sm:text-[13.5px] font-semibold group/item cursor-pointer">
                          <Check className="w-4 h-4 text-[#1d4ed8]/90 stroke-[3.5] shrink-0 mt-0.5" />
                          <span className="hover:underline hover:text-[#1d4ed8] transition-colors decoration-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom illustration vector symbol & trigger button row */}
                  <div className="mt-8 pt-4 flex items-end justify-between border-t border-slate-100 relative min-h-[48px]">
                    <div className="opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                      <IconComp className="w-12 h-12 stroke-[1.25] text-slate-600" />
                    </div>

                    {/* Standard Icon Switch Trigger */}
                    <div className="absolute right-0 bottom-0 scale-100 opacity-100 group-hover:scale-75 group-hover:opacity-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-none">
                      <button 
                        onClick={onLetsTalkClick}
                        className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-sm"
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>

                    {/* Expanded LET'S TALK Pill Trigger */}
                    <div className="absolute right-0 bottom-0 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <button
                        onClick={onLetsTalkClick}
                        className="inline-flex items-center gap-2 bg-white border border-slate-950 pl-4 pr-1.5 py-1 rounded-full text-[10px] font-black tracking-widest text-[#14151a] uppercase shadow-md hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>LET&apos;S TALK</span>
                        <div className="w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center text-white">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: 4 cards on desktop / grids elsewhere */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.slice(3, 7).map((card) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={card.id}
                  className="bg-white rounded-[24px] p-7 pb-10 border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:scale-[1.04] hover:-translate-y-1.5 transition-all duration-300 relative group min-h-[440px]"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-xl font-extrabold text-[#0038a8] leading-tight group-hover:text-[#1d4ed8] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-slate-600 text-[16.5px] leading-relaxed font-sans font-medium">
                        {card.description}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-2.5 text-left font-sans">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-slate-800 text-xs sm:text-[13.5px] font-semibold group/item cursor-pointer">
                          <Check className="w-4 h-4 text-[#1d4ed8]/90 stroke-[3.5] shrink-0 mt-0.5" />
                          <span className="hover:underline hover:text-[#1d4ed8] transition-colors decoration-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom illustration vector symbol & trigger button row */}
                  <div className="mt-8 pt-4 flex items-end justify-between border-t border-slate-100 relative min-h-[48px]">
                    <div className="opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                      <IconComp className="w-10 h-10 stroke-[1.25] text-slate-600" />
                    </div>

                    {/* Standard Icon Switch Trigger */}
                    <div className="absolute right-0 bottom-0 scale-100 opacity-100 group-hover:scale-75 group-hover:opacity-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-none">
                      <button 
                        onClick={onLetsTalkClick}
                        className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-sm"
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>

                    {/* Expanded LET'S TALK Pill Trigger */}
                    <div className="absolute right-0 bottom-0 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <button
                        onClick={onLetsTalkClick}
                        className="inline-flex items-center gap-2 bg-white border border-slate-950 pl-4 pr-1.5 py-1 rounded-full text-[10px] font-black tracking-widest text-[#14151a] uppercase shadow-md hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>LET&apos;S TALK</span>
                        <div className="w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center text-white">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
