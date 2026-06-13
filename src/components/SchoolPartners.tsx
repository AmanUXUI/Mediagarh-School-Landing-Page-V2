import React from 'react';

interface PartnerLogo {
  id: string;
  name: string;
  url: string;
}

const schoolPartnersData: PartnerLogo[] = [
  {
    id: "pavna",
    name: "Pavna School",
    url: "https://pavnaschool.com/wp-content/uploads/2026/04/Link-Logo.webp"
  },
  {
    id: "tonsbridge",
    name: "The TonsBridge School",
    url: "https://www.thetonsbridge.com/wp-content/uploads/2026/01/thetons-logo-scaled.webp"
  },
  {
    id: "techno",
    name: "Techno School",
    url: "https://technoschool.in/wp-content/uploads/2024/11/text_format_logo-scaled-1-2048x365.jpg"
  },
  {
    id: "sas",
    name: "SAS Jaipur",
    url: "https://sasjaipur.com/wp-content/uploads/2024/09/cropped-logo-SASJ-1.webp"
  },
  {
    id: "srnmehta",
    name: "SRN Mehta School",
    url: "https://srnmehtaschool.com/wp-content/uploads/2024/02/logo.png"
  },
  {
    id: "ambervalley",
    name: "Amber Valley School",
    url: "https://ambervalleyschool.com/images/amber-valley-residential-school-logo.png"
  },
  {
    id: "tsus",
    name: "TSUS Ludhiana",
    url: "https://www.tsusludhiana.com/assets/admin/uploads/logo/yxZoEDiEm8vDNdfEGDLhFWoLSVR60z42JSyFD3da.png"
  },
  {
    id: "gyanashram",
    name: "Gyan Ashram School",
    url: "https://gyanashramschool.com/wp-content/uploads/2023/04/107f9aaa-8a51-46dd-a699-e898991d3419.png.webp"
  },
  {
    id: "hpmodi",
    name: "HP Modi School",
    url: "https://hpmodischool.org/wp-content/uploads/2025/09/Layer_1.svg"
  },
  {
    id: "patna",
    name: "International School Patna",
    url: "https://internationalschoolpatna.co.in/wp-content/uploads/2022/07/IMG-20220725-WA0002-removebg-preview-1-1-1.jpg"
  },
  {
    id: "bhartiyam",
    name: "Bhartiyam International School",
    url: "https://bhartiyaminternationalschool.com/wp-content/uploads/2025/02/Bhartiyam-Logo-e1740378640821-2048x607.png"
  },
  {
    id: "juniortoes",
    name: "Junior Toes International Preschool",
    url: "https://i.postimg.cc/WpDt6HM2/Junior-Toes-International-Preschool.png"
  },
  {
    id: "wilfred",
    name: "St. Wilfred's School",
    url: "https://stwilfredsschool.com/wp-content/uploads/2024/09/Wilfred-Jaipur-e1712040829847.png"
  }
];

export default function SchoolPartners() {
  // Let's divide partners into two rows to make a gorgeous two-tier layout
  const row1Logos = schoolPartnersData.slice(0, 7);
  const row2Logos = schoolPartnersData.slice(7);

  // Duplicate the logos multiple times to ensure perfect continuous wrap on any viewport size
  const row1Duplicated = [
    ...row1Logos,
    ...row1Logos,
    ...row1Logos,
    ...row1Logos
  ];

  const row2Duplicated = [
    ...row2Logos,
    ...row2Logos,
    ...row2Logos,
    ...row2Logos
  ];

  return (
    <section 
      id="school-partners"
      className="w-full bg-[#f4f3ef] pb-28 border-t border-slate-300/40 select-none overflow-hidden relative"
    >
      {/* Dynamic continuous marquee scrolling styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes partnerScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-25% - 5px), 0, 0);
          }
        }
        @keyframes partnerScrollRight {
          0% {
            transform: translate3d(calc(-25% - 5px), 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .partner-track-left {
          display: flex;
          gap: 20px;
          animation: partnerScrollLeft 40s linear infinite;
          width: max-content;
        }
        .partner-track-right {
          display: flex;
          gap: 20px;
          animation: partnerScrollRight 40s linear infinite;
          width: max-content;
        }
        .partners-slider-container:hover .partner-track-left,
        .partners-slider-container:hover .partner-track-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-14">
        {/* Section Header */}
        <div className="text-center pt-16">
          <div className="inline-flex items-center justify-center bg-[#eae7df] border border-slate-300/40 px-5 py-1.5 rounded-full text-[10px] font-black tracking-[0.15em] text-slate-800 uppercase mb-4 leading-none">
            OUR PREMIUM CLIENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-slate-900 leading-tight font-sans">
            Our Valued School Partners
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Logo Marquee Container with exactly 24px vertical padding (gap-6) between rows */}
      <div className="w-full flex flex-col gap-6 partners-slider-container" id="partners-logo-slider">
        
        {/* Row 1 - Sliding Left */}
        <div className="w-full overflow-hidden" id="partners-row-1">
          <div className="partner-track-left">
            {row1Duplicated.map((partner, idx) => (
              <div 
                key={`r1-${partner.id}-${idx}`}
                id={`partner-card-r1-${partner.id}-${idx}`}
                className="bg-white border border-slate-200/50 px-8 py-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center min-h-[90px] w-[180px] sm:w-[220px] shrink-0"
              >
                <img 
                  src={partner.url} 
                  alt={partner.name}
                  title={partner.name}
                  className="max-h-11 sm:max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Sliding Right (Opposite) */}
        <div className="w-full overflow-hidden" id="partners-row-2">
          <div className="partner-track-right">
            {row2Duplicated.map((partner, idx) => (
              <div 
                key={`r2-${partner.id}-${idx}`}
                id={`partner-card-r2-${partner.id}-${idx}`}
                className="bg-white border border-slate-200/50 px-8 py-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center min-h-[90px] w-[180px] sm:w-[220px] shrink-0"
              >
                <img 
                  src={partner.url} 
                  alt={partner.name}
                  title={partner.name}
                  className="max-h-11 sm:max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
