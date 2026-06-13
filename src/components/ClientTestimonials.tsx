import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  schoolName: string;
  subtext: string;
  stars: number;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    schoolName: "Bhartiyam International School",
    subtext: "Uttarakhand, India",
    stars: 5,
    quote: "The team helped us strengthen our digital presence and generate consistent admission enquiries through targeted campaigns and website optimization."
  },
  {
    schoolName: "Amber Valley School",
    subtext: "Chikkamagaluru, India",
    stars: 5,
    quote: "From website improvements to admission marketing, every initiative was aligned with our enrollment goals. The process was smooth and results-driven."
  },
  {
    schoolName: "Gyan Ashram School",
    subtext: "Rajasthan, India",
    stars: 5,
    quote: "Their understanding of the education sector helped us improve visibility, parent engagement, and enquiry generation."
  },
  {
    schoolName: "HP Modi School",
    subtext: "Rajasthan, India",
    stars: 5,
    quote: "The website experience and digital campaigns significantly improved how prospective parents interact with our school online."
  },
  {
    schoolName: "International School Patna",
    subtext: "Patna, Bihar",
    stars: 5,
    quote: "Professional execution, quick support, and a strong focus on admissions made them a valuable growth partner for our institution."
  },
  {
    schoolName: "Kaizen School",
    subtext: "Gujarat, India",
    stars: 5,
    quote: "Their strategic approach helped us improve our online visibility and attract more qualified admission enquiries."
  },
  {
    schoolName: "Pavna School",
    subtext: "Uttar Pradesh, India",
    stars: 5,
    quote: "The team delivered a modern website and marketing strategy that aligned perfectly with our school's growth objectives."
  },
  {
    schoolName: "The TonsBridge School",
    subtext: "Dehradun, India",
    stars: 5,
    quote: "Their expertise in school marketing and branding helped us showcase our strengths more effectively to prospective parents."
  },
  {
    schoolName: "Techno School",
    subtext: "Karnataka, India",
    stars: 5,
    quote: "From creative campaigns to website optimization, their work has contributed positively to our admission outreach efforts."
  },
  {
    schoolName: "SAS Jaipur",
    subtext: "Jaipur, Rajasthan",
    stars: 5,
    quote: "Reliable, responsive, and focused on results. Their team understands what schools need to grow in a competitive market."
  },
  {
    schoolName: "SRN Mehta School",
    subtext: "Maharashtra, India",
    stars: 5,
    quote: "A dedicated team that combines creativity, technology, and marketing expertise to support admission growth."
  },
  {
    schoolName: "TSUS Jaipur",
    subtext: "Jaipur, Rajasthan",
    stars: 5,
    quote: "Their admission-focused strategies helped us build stronger visibility and connect with more prospective families."
  }
];

// Distribute evenly into two rows
const row1Testimonials = testimonialsData.slice(0, 6);
const row2Testimonials = testimonialsData.slice(6, 12);

// Triple each row to ensure seamless infinite loops on larger screens
const row1Duplicated = [...row1Testimonials, ...row1Testimonials, ...row1Testimonials];
const row2Duplicated = [...row2Testimonials, ...row2Testimonials, ...row2Testimonials];

export default function ClientTestimonials() {
  return (
    <section 
      id="client-testimonials"
      className="w-full bg-[#f4f3ef] pt-20 pb-28 border-t border-slate-300/60 select-none overflow-hidden relative"
    >
      {/* Self-contained style block for smooth horizontal marquee animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testimonialScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-33.333% - 16px), 0, 0);
          }
        }
        @keyframes testimonialScrollRight {
          0% {
            transform: translate3d(calc(-33.333% - 16px), 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .testimonial-track-left {
          display: flex;
          gap: 24px;
          animation: testimonialScrollLeft 45s linear infinite;
          width: max-content;
        }
        .testimonial-track-right {
          display: flex;
          gap: 24px;
          animation: testimonialScrollRight 45s linear infinite;
          width: max-content;
        }
        .testimonial-slider-container:hover .testimonial-track-left,
        .testimonial-slider-container:hover .testimonial-track-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-[#eae7df] border border-slate-300/40 px-5 py-1.5 rounded-full text-[10px] font-black tracking-[0.15em] text-slate-800 uppercase mb-4 leading-none">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-slate-900 leading-tight font-sans">
            Trusted by Leading Schools
          </h2>
        </div>
      </div>

      {/* Full-width canvas for dynamic infinite loop scrolling (2 rows) */}
      <div className="w-full space-y-8 testimonial-slider-container">
        
        {/* Row 1 - Sliding Left */}
        <div className="w-full overflow-hidden py-0" id="client-testimonials-row-1">
          <div className="testimonial-track-left">
            {row1Duplicated.map((t, idx) => (
              <div 
                key={`r1-${idx}`}
                className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] w-[340px] sm:w-[420px] shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <h3 className="font-black text-sm sm:text-base text-slate-900 leading-snug tracking-tight uppercase truncate">
                      {t.schoolName}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                      {t.subtext}
                    </p>
                  </div>

                  <div className="h-px bg-slate-100 w-full mb-4" />

                  <div className="flex gap-0.5 text-amber-500 mb-4" id={`r1-stars-${idx}`}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-800 italic text-sm sm:text-base leading-relaxed font-medium">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Sliding Right */}
        <div className="w-full overflow-hidden py-0" id="client-testimonials-row-2">
          <div className="testimonial-track-right">
            {row2Duplicated.map((t, idx) => (
              <div 
                key={`r2-${idx}`}
                className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] w-[340px] sm:w-[420px] shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <h3 className="font-black text-sm sm:text-base text-slate-900 leading-snug tracking-tight uppercase truncate">
                      {t.schoolName}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                      {t.subtext}
                    </p>
                  </div>

                  <div className="h-px bg-slate-100 w-full mb-4" />

                  <div className="flex gap-0.5 text-amber-500 mb-4" id={`r2-stars-${idx}`}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-800 italic text-sm sm:text-base leading-relaxed font-medium">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
