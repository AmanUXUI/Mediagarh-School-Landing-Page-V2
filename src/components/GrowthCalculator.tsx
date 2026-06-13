import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  TrendingUp, 
  Coins, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function GrowthCalculator() {
  const [targetAdmissions, setTargetAdmissions] = useState(60);
  const [annualFees, setAnnualFees] = useState(85000); // Standard private school anual fees in INR
  const [currentCAC, setCurrentCAC] = useState(8500); // Cost per Acquisition

  const incrementalRevenue = targetAdmissions * annualFees;
  const standardMarketingSpend = Math.round(incrementalRevenue * 0.12); // Approx 12% standard allocation
  // Optimized agency campaign reduces CAC by 65% on average
  const optimizedCAC = Math.round(currentCAC * 0.35);
  const totalSavings = (currentCAC - optimizedCAC) * targetAdmissions;
  
  const formattedRevenue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(incrementalRevenue);

  const formattedSavings = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(totalSavings);

  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(standardMarketingSpend);

  const scrollToForm = () => {
    const formElement = document.getElementById('inquiry-form-card');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Pulse school name or fields to guide user focus
      setTimeout(() => {
        const input = document.getElementById('school-name-input');
        if (input) input.focus();
      }, 700);
    }
  };

  return (
    <div id="calculator-section" className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Sliders Area (Column 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#446ef0]">
            <Calculator className="w-3.5 h-3.5" />
            ROI Projection Engine
          </div>

          <h3 className="font-display font-medium text-2xl lg:text-3.5xl text-slate-100 tracking-tight leading-tight">
            Calculate your school's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300 font-bold">admission growth potential</span>.
          </h3>
          
          <p className="text-slate-400 text-xs lg:text-sm leading-relaxed max-w-xl">
            See how incremental enrollment gains multiply your institution's operational budget, allowing you to upgrade sports, laboratory, and teaching infrastructure.
          </p>

          <div className="space-y-6 pt-4">
            {/* Slider 1: Target Additional Admissions */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  Target Additional Admissions
                </span>
                <span className="font-mono text-base font-bold text-blue-400">
                  +{targetAdmissions} students
                </span>
              </div>
              <input
                id="target-admissions-slider"
                type="range"
                min="10"
                max="300"
                step="5"
                value={targetAdmissions}
                onChange={(e) => setTargetAdmissions(parseInt(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold font-mono">
                <span>10 Students</span>
                <span>300 Students</span>
              </div>
            </div>

            {/* Slider 2: Average Annual Tuition Fee */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-semibold flex items-center gap-2">
                  <Coins className="w-4 h-4 text-yellow-400" />
                  Average Annual School Fee per Pupil
                </span>
                <span className="font-mono text-base font-bold text-yellow-400">
                  ₹{annualFees.toLocaleString('en-IN')} / year
                </span>
              </div>
              <input
                id="annual-fees-slider"
                type="range"
                min="20000"
                max="300000"
                step="5000"
                value={annualFees}
                onChange={(e) => setAnnualFees(parseInt(e.target.value))}
                className="w-full accent-yellow-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold font-mono">
                <span>₹20K (Play school / Local K-12)</span>
                <span>₹3 Lakh+ (International Boarding)</span>
              </div>
            </div>

            {/* Slider 3: Current Cost Per Acquisition (Ad CAC) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Current Estimated Cost per Student Lead/Join
                </span>
                <span className="font-mono text-base font-bold text-emerald-400">
                  ₹{currentCAC.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                id="current-cac-slider"
                type="range"
                min="2000"
                max="25000"
                step="500"
                value={currentCAC}
                onChange={(e) => setCurrentCAC(parseInt(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold font-mono">
                <span>₹2,000 (Low-cost Ads)</span>
                <span>₹25,000 (Premium boarding agencies)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output Metrics (Column 5) */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
              Projection Report Card
            </span>

            {/* Metric 1 */}
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-0.5">Incremental Annual Revenue</span>
              <div className="text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
                {formattedRevenue}
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Unlocked with +{targetAdmissions} net admissions
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-0.5">Estimated Marketing Cost Savings</span>
              <div className="text-xl lg:text-2xl font-display font-semibold text-emerald-400">
                {formattedSavings}
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                By optimizing campaign workflows and reducing target student CAC to ₹{optimizedCAC.toLocaleString('en-IN')}.
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="text-xs text-slate-400 leading-relaxed bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <span className="font-bold text-[#446ef0] block mb-1">💡 Principal's Corner Strategy Note:</span>
              Standard school growth indicates that re-investing just <span className="font-bold text-white">{formattedBudget}</span> on structured digital frameworks generates sustainable 5x pipelines.
            </div>

            <button
              id="calculator-setup-consultation"
              onClick={scrollToForm}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-xl text-xs lg:text-sm text-center inline-flex items-center justify-center gap-2 transition-all-custom shadow-lg shadow-blue-900/40 cursor-pointer"
            >
              Apply ROI Metrics to Free Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
