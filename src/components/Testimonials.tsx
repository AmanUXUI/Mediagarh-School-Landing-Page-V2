import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      quote: "Before partnering with SKOOL READY, our team spent fortune on print pamphlets and city billboard systems, yielding barely 10 offline registrations. SKOOL READY optimized our mobile parent portal and target geofenced Meta ad sets. That season, we registered 120+ student admissions, reducing our administrative CAC by 68%. Absolute gold.",
      author: "Rev. Dr. Joseph D'Souza",
      designation: "Managing Trustee & Founder",
      school: "Saint Joseph Collegiate Schools",
      avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&q=80",
      rating: 5
    },
    {
      id: 't2',
      quote: "Our play school was struggling to capture organic Google presence against large national franchises. SKOOL READY optimized our relative city maps rankings and linked structured local review automation. We shifted from a trickle of 2 cold calls to 18 high-quality admissions inquiries a day. We had to create a waitlist!",
      author: "Mrs. Shreya Malhotra",
      designation: "Academic Director & Principal",
      school: "EuroKids Uttarakhand Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
      rating: 5
    },
    {
      id: 't3',
      quote: "As a tier-1 residential boarding institution, our fee bracket requires highly qualified lead nurturing. The instant WhatsApp Prospectus responder and automated CRM onboarding workflow introduced by SKOOL READY saved our admissions desk. It keeps parent interest hot, which drove our campus visitation conversion rate to 92%.",
      author: "Col. Sanjeev Rawat (Retd.)",
      designation: "Executive Director",
      school: "Sherwood Residential Academy",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div id="testimonials-carousel" className="space-y-6">
      <div className="bg-white rounded-3xl border border-slate-200/80 p-8 lg:p-12 shadow-md relative overflow-hidden">
        {/* Quote watermark background */}
        <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-100 -scale-x-100 pointer-events-none" />

        <div className="space-y-6 relative">
          {/* Header */}
          <div className="flex gap-1">
            {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-slate-700 text-sm lg:text-base leading-relaxed font-medium italic">
            "{testimonials[activeIdx].quote}"
          </p>

          <div className="h-px bg-slate-100 w-full" />

          {/* Reviewer Details */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={testimonials[activeIdx].avatar} 
                alt={testimonials[activeIdx].author}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border border-slate-200 object-cover bg-slate-50"
              />
              <div>
                <h5 className="font-display font-bold text-sm text-slate-900">
                  {testimonials[activeIdx].author}
                </h5>
                <span className="text-[11px] text-slate-500 font-medium block leading-none mt-1">
                  {testimonials[activeIdx].designation} • <strong className="text-blue-600 font-semibold">{testimonials[activeIdx].school}</strong>
                </span>
              </div>
            </div>

            {/* Verification Seal */}
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-[10px] uppercase font-bold tracking-wider py-1 px-2.5 rounded-full border border-green-100">
              <Award className="w-3.5 h-3.5" />
              Verified Case Study
            </div>
          </div>
        </div>
      </div>

      {/* Control Navigation */}
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              id={`carousel-dot-${idx}`}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIdx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button 
            id="prev-testimonial-btn"
            onClick={handlePrev}
            className="w-9 h-9 border border-slate-200 hover:border-slate-300 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            id="next-testimonial-btn"
            onClick={handleNext}
            className="w-9 h-9 border border-slate-200 hover:border-slate-300 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
