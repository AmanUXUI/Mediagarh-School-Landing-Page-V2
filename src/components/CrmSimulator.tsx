import React, { useState } from 'react';
import { 
  Users, 
  Download, 
  PlusCircle, 
  Search, 
  Trash2, 
  Mail, 
  Phone, 
  MapPin, 
  Filter, 
  RefreshCcw, 
  TrendingUp, 
  DollarSign, 
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Lead } from '../types';

interface CrmSimulatorProps {
  leads: Lead[];
  onAddDummyLead: () => void;
  onClearLeads: () => void;
  onUpdateLeadStatus: (id: string, newStatus: Lead['status']) => void;
  onAddCustomLead: (lead: Lead) => void;
}

export default function CrmSimulator({ 
  leads, 
  onAddDummyLead, 
  onClearLeads, 
  onUpdateLeadStatus,
  onAddCustomLead
}: CrmSimulatorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | Lead['status']>('All');
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
      
    const matchesStatus = statusFilter === 'All' ? true : lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const selectedLead = leads.find(l => l.id === selectedLeadId) || filteredLeads[0];

  // Calculate high-conversion B2B marketing stats
  const totalLeads = leads.length;
  const avgCPL = totalLeads === 0 ? 0 : Math.round(180 + Math.random() * 20); // Average Cost per lead in INR (scaled)
  
  // Calculate projected revenue locked
  const annualRevenueLocked = leads.reduce((sum, current) => {
    // If converted, add full potential, if scheduled/contacted count 30% pipeline weight
    const weight = current.status === 'Converted' ? 1 : 0.3;
    const estimatedStudentJoinMultiplier = current.schoolType === 'Boarding' ? 5 : 12;
    // let's estimate average tuition value based on school type
    const tuitionValueLookup = {
      'Boarding': 180000,
      'K-12': 85000,
      'Higher Ed': 120000,
      'Play School': 40000
    };
    const avgFee = tuitionValueLookup[current.schoolType] || 85000;
    return sum + (avgFee * estimatedStudentJoinMultiplier * weight);
  }, 0);

  const formattedRevenueLocked = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(annualRevenueLocked);

  const simulateExcelExport = () => {
    if (leads.length === 0) {
      alert('There are no leads inside the inbox to export. Submit the form on the landing page or click "Simulate Parent Lead" to generate data!');
      return;
    }
    
    // Create a beautiful comma separated text view and alert
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["ID,Principal Name,Email,Contact,School Name,City,Type,Challenge,Status,Timestamp"].join(",") + "\n"
      + leads.map(l => `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.schoolName}","${l.city}","${l.schoolType}","${l.biggestChallenge}","${l.status}","${l.timestamp}"`).join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `skoolready_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusColors = {
    'New': 'bg-blue-100 text-blue-800 border-blue-200',
    'Contacted': 'bg-amber-100 text-amber-800 border-amber-200',
    'Audit Scheduled': 'bg-purple-100 text-purple-800 border-purple-200',
    'Converted': 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <div id="crm-system-panel" className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
      {/* CRM Header */}
      <div className="bg-slate-950 text-white px-8 py-6 border-b border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
              Operational Live Sandbox Terminal
            </span>
          </div>
          <h3 className="font-display font-bold text-xl lg:text-2xl text-slate-100 tracking-tight">
            Integrated Admissions CRM & Lead Database
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            This live console simulates where your admissions desk manages parental inquiry pipelines. Leads generated on the landing page will immediately show up here.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            id="simulate-lead-btn"
            onClick={onAddDummyLead}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-xl py-2.5 px-4 flex items-center gap-1.5 transition-all shadow-sm"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            Simulate Parent Lead
          </button>
          
          <button
            id="export-csv-btn"
            onClick={simulateExcelExport}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs rounded-xl py-2.5 px-4 flex items-center gap-1.5 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>

          <button
            id="clear-leads-btn"
            onClick={onClearLeads}
            title="Reset Database"
            className="bg-slate-900 hover:bg-red-950/40 text-slate-400 hover:text-red-400 border border-slate-850 hover:border-red-900 rounded-xl p-2.5 transition-all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="bg-slate-900 px-8 py-5 border-b border-slate-850 grid grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">Total Audits Enrolled</span>
          <div className="text-xl lg:text-2xl font-bold font-mono text-slate-100 mt-0.5">{totalLeads} inquiries</div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">Average Conversion Rate</span>
          <div className="text-xl lg:text-2xl font-bold font-mono text-blue-400 mt-0.5">
            {totalLeads === 0 ? '0%' : '18.4%'}
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">Estimated Cost Per Lead (CPL)</span>
          <div className="text-xl lg:text-2xl font-bold font-mono text-[#446ef0] mt-0.5">
            {totalLeads === 0 ? '₹0' : `₹${avgCPL}`}
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">Tuition Potential Locked</span>
          <div className="text-xl lg:text-2xl font-bold font-mono text-emerald-400 mt-0.5">{formattedRevenueLocked}</div>
        </div>
      </div>

      {/* Database Viewer Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
        {/* Left: Leads Table/Scroll list (7 columns) */}
        <div className="lg:col-span-7 border-r border-slate-200/80 flex flex-col">
          {/* Controls bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/60 flex flex-col sm:flex-row gap-3 justify-between items-center">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
              <input
                id="search-leads-field"
                type="text"
                placeholder="Search school name, parent, city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-blue-500 py-1.5 pl-9 pr-3 rounded-lg text-xs outline-none transition-all"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2 w-full sm:w-auto">
              <select
                id="crm-status-filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-white border border-slate-200 py-1.5 px-2.5 rounded-lg text-xs text-slate-600 outline-none w-full sm:w-auto"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Audit Scheduled">Audit Scheduled</option>
                <option value="Converted">Converted</option>
              </select>
            </div>
          </div>

          {/* List items */}
          <div className="divide-y divide-slate-100 overflow-y-auto max-h-[350px] flex-grow">
            {filteredLeads.length === 0 ? (
              <div className="py-12 px-4 text-center text-slate-400">
                <Users className="w-10 h-10 mx-auto stroke-[1.5] mb-3 text-slate-300" />
                <span className="text-sm font-semibold block">No leads found</span>
                <span className="text-xs">Fill out the inquiry form above to record your first real-world lead database entry!</span>
              </div>
            ) : (
              filteredLeads.map((lead) => {
                const isActive = selectedLead && selectedLead.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                    className={`p-4 transition-all duration-150 cursor-pointer flex justify-between items-start ${
                      isActive ? 'bg-blue-50/50 border-l-4 border-blue-600 pl-3' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-xs text-slate-900 leading-tight">
                          {lead.schoolName}
                        </span>
                        <span className="bg-slate-100 text-slate-600 text-[9px] px-1.5 py-0.5 rounded font-medium">
                          {lead.schoolType}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-normal">
                        Contact: <strong className="text-slate-800 font-medium">{lead.name}</strong> • {lead.city}
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {lead.timestamp}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${statusColors[lead.status] || ''}`}>
                        {lead.status}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Lead Detail View / Action Deck (5 columns) */}
        <div className="lg:col-span-5 bg-slate-50 p-6 flex flex-col justify-between">
          {selectedLead ? (
            <div className="space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between pb-3.5 border-b border-slate-200">
                  <div>
                    <span className="text-[9px] font-mono text-indigo-600 font-bold uppercase tracking-widest block mb-0.5">
                      Lead ID: {selectedLead.id}
                    </span>
                    <h4 className="font-display font-bold text-sm text-slate-800 leading-snug">
                      {selectedLead.name}
                    </h4>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Admissions Officer / Lead contact
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColors[selectedLead.status]}`}>
                    {selectedLead.status}
                  </span>
                </div>

                <div className="space-y-3.5 py-4 text-xs">
                  {/* School */}
                  <div className="flex gap-4">
                    <span className="text-slate-400 w-24 shrink-0 font-medium">Institution:</span>
                    <span className="font-semibold text-slate-800">{selectedLead.schoolName} ({selectedLead.city})</span>
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 w-24 shrink-0 font-medium">Email Address:</span>
                    <a href={`mailto:${selectedLead.email}`} className="text-blue-600 hover:underline flex items-center gap-1 leading-none font-medium">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      {selectedLead.email}
                    </a>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 w-24 shrink-0 font-medium">Contact Tel:</span>
                    <a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline flex items-center gap-1 leading-none font-medium">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      {selectedLead.phone}
                    </a>
                  </div>
                  {/* Hurdle */}
                  <div className="flex gap-4">
                    <span className="text-slate-400 w-24 shrink-0 font-medium font-sans">Campaign Hurdle:</span>
                    <span className="font-medium text-slate-800 bg-red-50 text-red-700/90 rounded border border-red-100 px-1.5 py-0.5 text-[11px] leading-tight flex-1">
                      {selectedLead.biggestChallenge}
                    </span>
                  </div>
                  {/* Budget */}
                  <div className="flex gap-4">
                    <span className="text-slate-400 w-24 shrink-0 font-medium">Budget:</span>
                    <span className="font-semibold text-slate-700">{selectedLead.marketingBudget}</span>
                  </div>
                </div>

                {selectedLead.auditNotes && (
                  <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-neutral-300 font-mono text-[10px] leading-relaxed">
                    <span className="text-[#446ef0] font-bold block mb-1 uppercase tracking-widest text-[9px]">Automated System Diagnostician:</span>
                    {selectedLead.auditNotes}
                  </div>
                )}
              </div>

              {/* CRM Actions */}
              <div className="pt-4 border-t border-slate-200 mt-auto">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Update Admissions Funnel Pipeline Status:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    id={`status-contacted-${selectedLead.id}`}
                    onClick={() => onUpdateLeadStatus(selectedLead.id, 'Contacted')}
                    className={`py-2 px-1 text-center font-semibold text-[10px] rounded border transition-colors ${
                      selectedLead.status === 'Contacted'
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-white hover:bg-slate-100/80 border-slate-200 text-slate-600'
                    }`}
                  >
                    Mark Contacted
                  </button>
                  <button
                    id={`status-scheduled-${selectedLead.id}`}
                    onClick={() => onUpdateLeadStatus(selectedLead.id, 'Audit Scheduled')}
                    className={`py-2 px-1 text-center font-semibold text-[10px] rounded border transition-colors ${
                      selectedLead.status === 'Audit Scheduled'
                        ? 'bg-purple-100 border-purple-300 text-purple-800'
                        : 'bg-white hover:bg-slate-100/80 border-slate-200 text-slate-600'
                    }`}
                  >
                    Audit Scheduled
                  </button>
                  <button
                    id={`status-converted-${selectedLead.id}`}
                    onClick={() => onUpdateLeadStatus(selectedLead.id, 'Converted')}
                    className={`py-2 px-1 text-center font-semibold text-[10px] rounded border transition-colors ${
                      selectedLead.status === 'Converted'
                        ? 'bg-green-100 border-green-300 text-green-800'
                        : 'bg-white hover:bg-slate-100/80 border-slate-200 text-slate-600'
                    }`}
                  >
                    Goal Converted
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-slate-400 h-full">
              <RefreshCcw className="w-8 h-8 mb-2 animate-spin-slow text-slate-300" />
              <span className="text-xs font-medium">Select a student inquiry to invoke dashboard diagnostics</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
