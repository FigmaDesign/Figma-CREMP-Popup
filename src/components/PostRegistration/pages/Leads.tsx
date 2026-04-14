import { useState } from 'react';
import EmptyState from '../components/EmptyState';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Lead {
  id: string;
  name: string;
  contact: string;
  email: string;
  interest: string;
  date: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  company?: string;
  message?: string;
  budget?: string;
  timeline?: string;
}

const LEADS: Lead[] = [
  {
    id: '1', name: 'Rahul Sharma', contact: '123456789', email: 'rahul@example.com',
    interest: "McDonald's Franchise", date: '12 Apr 2026', status: 'new',
    company: 'Self', message: 'Interested in opening a franchise in South Mumbai. Have prior F&B experience.',
    budget: '₹1.5Cr – ₹2Cr', timeline: '3–6 months',
  },
  {
    id: '2', name: 'Priya Desai', contact: '123456789', email: 'priya@desai.co',
    interest: 'Jockey Exclusive Store', date: '10 Apr 2026', status: 'contacted',
    company: 'Desai Ventures Pvt. Ltd.', message: 'Looking for a franchise in a premium mall. Have retail experience.',
    budget: '₹25L – ₹40L', timeline: '1–3 months',
  },
  {
    id: '3', name: 'Arjun Mehta', contact: '123456789', email: 'arjun@mehta.in',
    interest: 'Anytime Fitness', date: '08 Apr 2026', status: 'qualified',
    company: 'Mehta Group', message: 'Have identified a 5000 sqft location. Ready to proceed quickly.',
    budget: '₹50L – ₹80L', timeline: 'Immediately',
  },
  {
    id: '4', name: 'Sneha Nair', contact: '123456789', email: 'sneha@nair.org',
    interest: 'Apollo Pharmacy', date: '05 Apr 2026', status: 'contacted',
    message: 'First time franchisee, exploring options in healthcare.',
    budget: '₹20L – ₹35L', timeline: '6–12 months',
  },
  {
    id: '5', name: 'Vikram Kapoor', contact: '123456789', email: 'vikram@kapoor.com',
    interest: 'NIIT Education Centre', date: '02 Apr 2026', status: 'closed',
    company: 'Kapoor Edu Services', message: 'Closed deal — signed franchise agreement on 01 Apr.',
    budget: '₹15L – ₹25L', timeline: 'Completed',
  },
];

const STATUS_CHIP: Record<Lead['status'], string> = {
  new:       'bg-blue-50 text-blue-700 border border-blue-100',
  contacted: 'bg-amber-50 text-amber-700 border border-amber-100',
  qualified: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  closed:    'bg-gray-100 text-gray-500 border border-gray-200',
};

interface LeadsProps {
  isDesktop: boolean;
}

export default function Leads({ isDesktop }: LeadsProps) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedLeadId(prev => prev === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-[#0a1128]">Lead Management</h2>
        <p className="text-[12px] sm:text-[13px] font-light text-[#637089]">
          <span className="font-semibold text-[#0a1128] text-[13px] sm:text-[14px]">{LEADS.length}</span> total leads
        </p>
      </div>

      {LEADS.length === 0 ? (
        <EmptyState
          title="No leads yet"
          description="Leads from interested buyers will appear here."
        />
      ) : isDesktop ? (
        <div className="bg-white rounded-[4px] border border-black/[0.03] shadow-[0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden w-full flex flex-col">
          <div className="flex items-center px-6 py-3.5 border-b border-black/5 bg-[#fafafb] text-[12px] font-semibold text-[#637089]  tracking-wider">
            <div className="flex-1">Name</div>
            <div className="w-[220px]">Interested In</div>
            <div className="w-[140px]">Date</div>
            <div className="w-[140px]">Status</div>
            <div className="w-10"></div>
          </div>
          {LEADS.map(lead => {
            const isExpanded = expandedLeadId === lead.id;
            return (
              <div key={lead.id} className="flex flex-col border-b border-black/5 last:border-0">
                <div
                  className={`flex items-center px-6 py-4 cursor-pointer hover:bg-[#fafafb] transition-colors ${isExpanded ? 'bg-[#fafafb]' : ''}`}
                  onClick={() => toggleExpand(lead.id)}
                >
                  <div className="flex-1 flex flex-col">
                    <span className="font-semibold text-[#0a1128] text-[14px]">{lead.name}</span>
                    {lead.company && <span className="text-[12px] text-[#637089] font-light">{lead.company}</span>}
                  </div>
                  <div className="w-[220px] text-[14px] font-medium text-[#0a1128]">{lead.interest}</div>
                  <div className="w-[140px] text-[13px] text-[#637089] font-light">{lead.date}</div>
                  <div className="w-[140px]">
                    <span className={`text-[11px] px-2.5 py-1 rounded-[4px] font-medium capitalize shadow-sm ${STATUS_CHIP[lead.status]}`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="w-10 flex justify-end">
                    <KeyboardArrowDownIcon className={`text-[#a0aabf] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 py-5 bg-[#fafafb] border-t border-black/5 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-4">
                        {lead.message && (
                          <div>
                            <p className="text-[11px] font-semibold text-[#637089] tracking-wide mb-1 ">Message</p>
                            <p className="text-[13px] font-light text-[#0a1128] leading-relaxed bg-white p-3 rounded-[4px] border border-black/5">{lead.message}</p>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <a href={`tel:${lead.contact}`} className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] border border-black/5 text-[#637089] text-[13px] font-medium hover:border-[#d4af37]/40 hover:text-[#0a1128] hover:shadow-sm bg-white transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                            <PhoneOutlinedIcon sx={{ fontSize: 16 }} /> Call
                          </a>
                          <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] border border-black/5 text-[#637089] text-[13px] font-medium hover:border-[#d4af37]/40 hover:text-[#0a1128] hover:shadow-sm bg-white transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                            <MailOutlinedIcon sx={{ fontSize: 16 }} /> Email
                          </a>
                          <a href={`https://wa.me/91${lead.contact}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] border border-emerald-100 text-emerald-700 text-[13px] font-medium hover:bg-emerald-50 hover:shadow-sm bg-white transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                            <WhatsAppIcon sx={{ fontSize: 16 }} /> WhatsApp
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        {lead.budget && (
                          <div className="flex flex-col border-l-2 border-[#d4af37] pl-3 py-0.5">
                            <p className="text-[11px] font-semibold text-[#637089] tracking-wide mb-0.5 ">Budget</p>
                            <p className="text-[15px] font-bold text-[#2d6d33]">{lead.budget}</p>
                          </div>
                        )}
                        {lead.timeline && (
                          <div className="flex flex-col border-l-2 border-[#d4af37] pl-3 py-0.5">
                            <p className="text-[11px] font-semibold text-[#637089] tracking-wide mb-0.5 ">Timeline</p>
                            <p className="text-[14px] font-medium text-[#0a1128]">{lead.timeline}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          {LEADS.map((lead) => (
            <div 
              key={lead.id} 
              onClick={() => setSelectedLead(lead)}
              className="bg-white rounded-[4px] border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.02)] p-3.5 flex flex-row items-center justify-between active:bg-[#fafafb] transition-colors cursor-pointer"
            >
              <div className="flex flex-col gap-1 min-w-0 pr-3">
                <span className="font-bold text-[#0a1128] text-[15px] truncate">{lead.name}</span>
                <span className="text-[12px] text-[#637089] font-light truncate">{lead.interest}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[9px] px-2 py-0.5 rounded-[4px] font-medium capitalize ${STATUS_CHIP[lead.status]}`}>
                    {lead.status}
                  </span>
                  <span className="text-[10px] text-[#a0aabf] font-light">{lead.date}</span>
                </div>
                <ChevronRightOutlinedIcon sx={{ fontSize: 18, color: '#a0aabf' }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {!isDesktop && selectedLead && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0a1128]/40 backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={() => setSelectedLead(null)}
        >
          <div 
            className="bg-white rounded-[8px] shadow-2xl w-full max-w-lg flex flex-col overflow-hidden animate-in zoom-in-95 duration-200" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/5 bg-[#fafafb]">
              <div className="flex flex-col min-w-0 pr-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0a1128] truncate">{selectedLead.name}</h3>
                {selectedLead.company && <p className="text-[12px] sm:text-[13px] text-[#637089] font-light truncate">{selectedLead.company}</p>}
              </div>
              <button 
                onClick={() => setSelectedLead(null)} 
                className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 text-[#a0aabf] hover:text-[#0a1128] transition-colors"
              >
                <CloseOutlinedIcon sx={{ fontSize: 20 }} />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-5 overflow-y-auto max-h-[60vh] hide-scrollbar">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#637089]  tracking-wider mb-0.5">Interested In</span>
                  <span className="text-[15px] font-medium text-[#0a1128]">{selectedLead.interest}</span>
                </div>
                <span className={`text-[11px] px-2.5 py-1 rounded-[4px] font-medium capitalize shadow-sm whitespace-nowrap ${STATUS_CHIP[selectedLead.status]}`}>
                  {selectedLead.status}
                </span>
              </div>

              {selectedLead.message && (
                <div className="bg-[#fafafb] p-3.5 rounded-[6px] border border-black/5">
                  <p className="text-[11px] font-semibold text-[#637089] tracking-wide mb-1.5 ">Message</p>
                  <p className="text-[13px] font-light text-[#0a1128] leading-relaxed">{selectedLead.message}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {selectedLead.budget && (
                  <div className="flex flex-col border-l-2 border-[#d4af37] pl-3 py-0.5">
                    <p className="text-[11px] font-semibold text-[#637089] tracking-wide mb-0.5 ">Budget</p>
                    <p className="text-[15px] font-bold text-[#2d6d33]">{selectedLead.budget}</p>
                  </div>
                )}
                {selectedLead.timeline && (
                  <div className="flex flex-col border-l-2 border-[#d4af37] pl-3 py-0.5">
                    <p className="text-[11px] font-semibold text-[#637089] tracking-wide mb-0.5 ">Timeline</p>
                    <p className="text-[14px] font-medium text-[#0a1128]">{selectedLead.timeline}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-5 border-t border-black/5 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 bg-white">
              <a
                href={`tel:${selectedLead.contact}`}
                className="w-full sm:flex-1 flex justify-center items-center gap-1.5 py-2.5 rounded-[4px] border border-black/5 text-[#637089] text-[13px] font-semibold hover:border-[#d4af37]/40 hover:text-[#0a1128] hover:shadow-sm bg-[#fafafb] hover:bg-white transition-all duration-300"
              >
                <PhoneOutlinedIcon sx={{ fontSize: 18 }} /> Call
              </a>
              <a
                href={`mailto:${selectedLead.email}`}
                className="w-full sm:flex-1 flex justify-center items-center gap-1.5 py-2.5 rounded-[4px] border border-black/5 text-[#637089] text-[13px] font-semibold hover:border-[#d4af37]/40 hover:text-[#0a1128] hover:shadow-sm bg-[#fafafb] hover:bg-white transition-all duration-300"
              >
                <MailOutlinedIcon sx={{ fontSize: 18 }} /> Email
              </a>
              <a
                href={`https://wa.me/91${selectedLead.contact}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex justify-center items-center gap-1.5 py-2.5 rounded-[4px] border border-emerald-100 text-emerald-700 text-[13px] font-semibold hover:bg-emerald-50 hover:shadow-sm transition-all duration-300"
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}