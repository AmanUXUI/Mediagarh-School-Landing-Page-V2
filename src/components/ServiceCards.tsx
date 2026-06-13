import React from 'react';
import { 
  Globe, 
  Megaphone, 
  Search, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { ServiceDetail } from '../types';

export default function ServiceCards() {
  const servicesStatic = [
    {
      id: 'website',
      title: 'High-Converting Websites',
      tagline: 'Mobile-Optimized Parent Portals',
      description: '90% of parent evaluations start on a mobile phone. We engineer lightning-fast school portals featuring virtual campus tours, physical prospectus request pipelines, and crisp UX that demands administrative authority.',
      deliverables: ['3D Virtual tour integrations', 'Admissions application portals', 'Ultra-fast mobile loading speed (<2s)', 'Interactive alumni testimonials'],
      impactMetric: 'Average 3.8x Lead Increase',
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'ads',
      title: 'Targeted Admissions Ad Suites',
      tagline: 'Localized Demographics Retargeting',
      description: 'Stop throwing structural capital at print billboards. We install geofenced, demographically pinpointed digital campaigns on Meta & Google targeting verified parents in premium local segments.',
      deliverables: ['Micro-geographical campaign maps', 'Psychometric parent copywriting', 'Negative-spend prevention models', 'Real-time pipeline attribution dashboards'],
      impactMetric: '-62% Student CAC Secured',
      icon: <Megaphone className="w-6 h-6 text-purple-600" />
    },
    {
      id: 'seo',
      title: 'Google Local Maps Monopoly',
      tagline: 'Dominating Searches in Your City',
      description: 'When parents query "best CBSE schools in My City", we guarantee your profile Commands the Top 3 positions. We optimize local Google Business citations and automate parent review collection pipelines.',
      deliverables: ['Google Maps reviews booster', 'Geolocal keyword ranking dominance', 'Structured Local Schema injection', 'Competitive maps rank auditing'],
      impactMetric: '+4.2x Map Call Volume',
      icon: <Search className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'automation',
      title: 'Insta-Response CRM Onboarding',
      tagline: 'Prospectus Routing in 60 Seconds',
      description: 'Admissions are won by speed of response. When a parent inquires, our system automatically routes a personalized high-end prospectus on WhatsApp and schedules a physical coordinator telephone checkout.',
      deliverables: ['Auto-WhatsApp prospectus workflows', 'SMS principal alert notifications', 'Integrated digital enrollment forms', 'Missed call request routing agents'],
      impactMetric: '+88% Campus Visitation Rate',
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <div id="school-growth-ecosystem" className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800">
      {servicesStatic.map((s) => (
        <div 
          key={s.id}
          className="bg-white rounded-3xl border border-slate-200/80 p-6 lg:p-8 hover:shadow-xl hover:translate-y-[-4px] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                {s.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 block uppercase">
                  {s.tagline}
                </span>
                <h4 className="font-display font-bold text-lg text-slate-800 tracking-tight">
                  {s.title}
                </h4>
              </div>
            </div>

            <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">
              {s.description}
            </p>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest block mb-2.5">
                Deliverables Included:
              </span>
              <ul className="text-xs space-y-2 text-slate-600 font-medium">
                {s.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              {s.impactMetric}
            </div>
            
            <button 
              id={`service-learn-${s.id}`}
              onClick={() => {
                const formElement = document.getElementById('inquiry-form-card');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // prefill challenge in inputs
                  const budgetSelect = document.getElementById('budget-select') as HTMLSelectElement;
                  if (budgetSelect) {
                    budgetSelect.focus();
                  }
                }
              }}
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 inline-flex items-center gap-1 cursor-pointer hover:underline"
            >
              Add to Audit
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
