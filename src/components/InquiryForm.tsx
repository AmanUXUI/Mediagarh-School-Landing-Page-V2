import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  HelpCircle, 
  Mail, 
  Phone, 
  User, 
  Check, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { Lead } from '../types';

interface InquiryFormProps {
  onLeadSubmit: (lead: Lead) => void;
}

export default function InquiryForm({ onLeadSubmit }: InquiryFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    city: '',
    schoolType: 'K-12' as 'K-12' | 'Play School' | 'Boarding' | 'Higher Ed',
    currentEnrollment: 250,
    marketingBudget: '₹50,000 - ₹2,00,000',
    biggestChallenge: 'Low inquiries from parents online',
    termsAccepted: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showDiagnosticHint, setShowDiagnosticHint] = useState<string | null>(
    'Low inquiries from parents online'
  );

  const challenges = [
    { value: 'Low inquiries from parents online', hint: 'This usually stems from poor visibility on search engines and a outdated website that isn\'t conversion-friendly.', impact: 'Requires SEO Audit & Conversion Rate Optimization (CRO)' },
    { value: 'High ad costs (CPL) with low conversions', hint: 'Typically caused by generic ad targeting and lack of dedicated high-converting landing pages.', impact: 'Requires Meta Ads Audit & Ad Copy Restructuring' },
    { value: 'Parent inquiries drop-off during admissions', hint: 'Often a result of loose lead management and late response times. Parents expect instant responses.', impact: 'Requires automated CRM onboarding & instant WhatsApp automation' },
    { value: 'Negative or zero review presence online', hint: '90% of modern parents choose a school based on local Google reviews. A dry page hurts credibility.', impact: 'Requires active Google Maps reputation campaign' }
  ];

  const handleChallengeChange = (val: string) => {
    setFormData({ ...formData, biggestChallenge: val });
    const match = challenges.find(c => c.value === val);
    setShowDiagnosticHint(match ? `${match.hint} — ${match.impact}` : null);
  };

  const nextStep = () => {
    if (step === 1 && (!formData.schoolName || !formData.city)) {
      alert('Please fill out your School Name and City to continue.');
      return;
    }
    if (step === 2 && !formData.biggestChallenge) {
      alert('Please select your biggest growth hurdle.');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in your contact information to claim your audit.');
      return;
    }

    setIsSubmitting(true);

    // Simulate elite analytical processing
    setTimeout(() => {
      const newLead: Lead = {
        id: 'lead-' + Date.now().toString(36),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        schoolName: formData.schoolName,
        city: formData.city,
        schoolType: formData.schoolType,
        currentEnrollment: formData.currentEnrollment,
        marketingBudget: formData.marketingBudget,
        biggestChallenge: formData.biggestChallenge,
        status: 'Audit Scheduled',
        timestamp: new Date().toLocaleString(),
        auditNotes: `Automated diagnostic triggers executed. Primary focus: ${formData.biggestChallenge}. Recommended action item: Establish targeted localized digital pathways for ${formData.city} region.`
      };

      onLeadSubmit(newLead);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div id="inquiry-form-card" className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden relative">
      {/* Dynamic Header Indicator */}
      <div className="bg-slate-900 px-8 py-5 text-white flex justify-between items-center">
        <div>
          <span className="text-[#446ef0] font-mono text-xs tracking-wider uppercase font-semibold block mb-0.5">
            Admission Diagnostic
          </span>
          <h3 className="font-display font-medium text-lg leading-tight">
            {!submitted ? 'Request Your Free Admission Audit Report' : 'Diagnostic Complete!'}
          </h3>
        </div>
        {!submitted && (
          <div className="bg-slate-800 text-slate-300 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold flex items-center gap-1.5 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            Step {step} of 3
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {!submitted && (
        <div className="w-full bg-slate-100 h-1">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      )}

      <div className="p-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <div key="form-steps">
              {/* Step 1: School Profile */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-5"
                >
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Tell us about your educational institution to tailor the marketing audit metrics for your market.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          id="school-name-input"
                          type="text"
                          required
                          value={formData.schoolName}
                          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                          placeholder="e.g. St. Xavier International"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Location / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="school-city-input"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Dehradun, Uttarakhand"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-3 px-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        School Category
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['K-12', 'Play School', 'Boarding', 'Higher Ed'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, schoolType: type })}
                            className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all duration-200 text-center ${
                              formData.schoolType === type 
                                ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm' 
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Approx. Student Strength ({formData.currentEnrollment})
                      </label>
                      <div className="space-y-2 pt-2">
                        <input
                          id="strength-slider"
                          type="range"
                          min="50"
                          max="3000"
                          step="50"
                          value={formData.currentEnrollment}
                          onChange={(e) => setFormData({ ...formData, currentEnrollment: parseInt(e.target.value) })}
                          className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
                        />
                        <div className="flex justify-between text-[10px] font-semibold font-mono text-slate-400">
                          <span>50 Students</span>
                          <span>3,000+ Students</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      id="next-step-1"
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl py-3 px-5 inline-flex items-center gap-1.5 transition-all duration-200 shadow-md shadow-blue-500/10"
                    >
                      Diagnose Marketing Hurdles
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Growth Challenges */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-slate-500">
                    What is your institution's primary obstacle in scaling physical inquiries & enrolling quality students?
                  </p>

                  <div className="space-y-2">
                    {challenges.map((c) => (
                      <label 
                        key={c.value}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                          formData.biggestChallenge === c.value
                            ? 'bg-blue-50 border-blue-400 text-indigo-950 shadow-sm'
                            : 'bg-slate-50 hover:bg-slate-100/70 border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="challenge"
                          value={c.value}
                          checked={formData.biggestChallenge === c.value}
                          onChange={() => handleChallengeChange(c.value)}
                          className="mt-1 accent-blue-600"
                        />
                        <div>
                          <span className="text-xs font-semibold block">{c.value}</span>
                          <span className="text-[11px] text-slate-500 block leading-normal mt-0.5">{c.hint}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {showDiagnosticHint && (
                    <div className="p-3 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-xl flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-[#446ef0] flex-shrink-0 mt-0.5" />
                      <div className="text-[11px] font-mono leading-relaxed">
                        <span className="text-[#446ef0] font-bold block mb-0.5 uppercase tracking-wider">Professional Strategy Team Insights:</span>
                        {showDiagnosticHint}
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                    <button
                      id="prev-step-2"
                      type="button"
                      onClick={prevStep}
                      className="text-slate-500 hover:text-slate-800 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      id="next-step-2"
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl py-3 px-5 inline-flex items-center gap-1.5 transition-all duration-200 shadow-md shadow-blue-500/10"
                    >
                      Proceed to Contact Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact details & Authorization */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Provide the professional details of the principal, director, or admissions officer who will receive this tailored Audit Report.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name / Designation <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          id="contact-name-input"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Ramesh Sharma (Principal)"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Professional Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                          <input
                            id="contact-email-input"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. ramesh@stxavier.edu"
                            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Direct Contact Number / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                          <input
                            id="contact-phone-input"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +91 94562 XXXXX"
                            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        School Annual Marketing Budget Range
                      </label>
                      <select
                        id="budget-select"
                        value={formData.marketingBudget}
                        onChange={(e) => setFormData({ ...formData, marketingBudget: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-2.5 px-3 text-sm font-medium text-slate-800 outline-none transition-all duration-200"
                      >
                        <option value="₹50,000 - ₹2,00,000">₹50,000 to ₹2,00,000 (Conservative)</option>
                        <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 to ₹5,00,000 (Recommended standard)</option>
                        <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 to ₹10,00,000 (Aggressive expansion)</option>
                        <option value="₹10,00,000+">₹10,00,000+ (Tier-1 Branding Suite)</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-2.5 pt-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                        className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 accent-blue-600"
                      />
                      <span className="text-[11px] text-slate-500 leading-normal">
                        I authorize SKOOL READY to conduct a digital footprints check on my school’s social media and website SEO, and build an exclusive PDF report.
                      </span>
                    </label>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                    <button
                      id="prev-step-3"
                      type="button"
                      onClick={prevStep}
                      className="text-slate-500 hover:text-slate-800 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      id="submit-form-btn"
                      type="button"
                      disabled={isSubmitting || !formData.termsAccepted}
                      onClick={handleSubmit}
                      className="bg-[#446ef0] hover:bg-[#345bcf] disabled:opacity-50 text-white font-semibold text-sm rounded-xl py-3 px-6 inline-flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#446ef0]/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Analyzing Footprints...
                        </>
                      ) : (
                        <>
                          Generate My Audit Now
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            /* Thank you page + Simulated instant audit diagnosis! Crucial B2B Conversion Psychology */
            <motion.div
              key="form-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="flex justify-center flex-col items-center text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border border-green-200 text-green-600 mb-4 animate-bounce">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="font-display font-bold text-2xl text-slate-800">
                  Audit Report Triggered!
                </h4>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  We've sent a confirmation email to <span className="text-blue-600">{formData.email}</span>
                </p>
              </div>

              {/* Dynamic Simulated Audit Summary */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 space-y-4">
                <div className="flex items-center gap-2 text-blue-800 font-semibold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-blue-600" />
                  Instant Diagnostic Executive Summary
                </div>

                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center text-xs pb-1.5 border-b border-blue-100/50">
                    <span className="text-slate-500">School Profiled</span>
                    <span className="font-medium text-slate-800">{formData.schoolName} ({formData.city})</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-1.5 border-b border-blue-100/50">
                    <span className="text-slate-500">Target Segment</span>
                    <span className="font-medium text-slate-800">{formData.schoolType} — Student Strength: {formData.currentEnrollment}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-1.5 border-b border-blue-100/50">
                    <span className="text-slate-500">Primary Hurdle</span>
                    <span className="font-medium text-slate-800">{formData.biggestChallenge}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Priority Score</span>
                    <span className="font-mono font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded text-[10px]">9.4 / 10 (Critical Attention Needed)</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-blue-100 text-slate-600 text-xs leading-relaxed font-mono">
                  <span className="font-bold text-blue-800 block mb-1 font-sans">Immediate Core Prescription:</span>
                  Your local competitor schools are heavily capturing organic leads on Google within <span className="font-bold text-blue-700">{formData.city}</span>. Your current biggest opportunity is establishing localized landing systems focused exclusively on high-conversion enrollment.
                </div>
              </div>

              {/* Trust Callout */}
              <div className="flex items-center justify-center gap-2.5 text-xs text-slate-500 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Your consultation is booked. Our Lead Architect will call you on <span className="font-bold">{formData.phone}</span> within 2 hours.
              </div>

              {/* Button to restart for demo purposes */}
              <div className="text-center">
                <button
                  id="diagnose-another-btn"
                  onClick={() => {
                    setStep(1);
                    setSubmitted(false);
                  }}
                  className="text-[11px] text-blue-500 hover:text-blue-700 font-semibold underline"
                >
                  Diagnose another school format →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
