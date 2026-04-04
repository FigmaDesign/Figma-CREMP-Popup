import React, { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import PremiumTabs from '../../../ui/PremiumTabs';

interface TermItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext?: string;
}

const rentTerms: TermItem[] = [
  { icon: <CurrencyRupeeIcon sx={{ fontSize: 14 }} />, label: 'Monthly Rent', value: '₹ 2.5 Lakhs', subtext: 'Negotiable' },
  { icon: <SecurityIcon sx={{ fontSize: 14 }} />, label: 'Security Deposit', value: '6 Months', subtext: '₹ 15 Lakhs' },
  { icon: <CalendarTodayIcon sx={{ fontSize: 14 }} />, label: 'Min. Lease Term', value: '3 Years', subtext: 'Renewable' },
  { icon: <HandshakeIcon sx={{ fontSize: 14 }} />, label: 'Escalation', value: '5% / Year', subtext: 'After 3 years' },
];

const leaseTerms: TermItem[] = [
  { icon: <CurrencyRupeeIcon sx={{ fontSize: 14 }} />, label: 'Lease Premium', value: '₹ 50 Lakhs', subtext: 'One-time' },
  { icon: <CalendarTodayIcon sx={{ fontSize: 14 }} />, label: 'Lease Duration', value: '10 Years', subtext: 'Extendable' },
  { icon: <CurrencyRupeeIcon sx={{ fontSize: 14 }} />, label: 'Annual Lease Rent', value: '₹ 5 Lakhs', subtext: 'Yearly' },
  { icon: <DescriptionIcon sx={{ fontSize: 14 }} />, label: 'Usage Rights', value: 'Commercial', subtext: 'As per zoning' },
];

const conditions: string[] = [
  'Subject to verification of documents',
  'Brokerage: 1 month rent',
  'Maintenance charges extra',
  'GST applicable as per law',
];

type TermTab = 'rent' | 'lease';

const termTabs = [
  { label: 'Rent Terms', value: 'rent' as TermTab },
  { label: 'Lease Terms', value: 'lease' as TermTab },
];

const LandTerms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TermTab>('rent');
  const activeTerms = activeTab === 'rent' ? rentTerms : leaseTerms;

  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none flex flex-col pb-2">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 bg-white z-10 relative">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Terms &amp; Conditions
          </h3>
        </div>

        <PremiumTabs
          tabs={termTabs}
          value={activeTab}
          onChange={(v) => setActiveTab(v as TermTab)}
          className="px-2 mb-1"
        />

        <div className="flex flex-col gap-1 px-4 mb-2">
          {activeTerms.map((term, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-1.5 rounded-[4px] hover:bg-[#f1f5f9] hover:border-[#1c2a44]/10 transition-all duration-200 group cursor-default"
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-white  text-[#1c2a44] shrink-0 group-hover:bg-[#1c2a44] group-hover:text-white transition-all duration-200">
                {React.cloneElement(term.icon as React.ReactElement<any>, {
                  color: 'inherit',
                  className: 'transition-colors duration-200 group-hover:text-white text-inherit'
                })}
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[0.55rem] font-bold text-[#1c2a44]/50 tracking-wider truncate">
                  {term.label}
                </span>
                <span className="text-[0.7rem] font-bold text-[#1c2a44] truncate leading-tight">
                  {term.value}
                </span>
              </div>

              {term.subtext && (
                <span className="text-[0.6rem] text-[#1c2a44]/50 italic whitespace-nowrap shrink-0">
                  {term.subtext}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mx-4 p-2 rounded-[4px] bg-[#FFFBEB] border border-[#FCD34D]">
          <div className="flex items-center gap-1 mb-1.5">
            <InfoIcon sx={{ fontSize: 13, color: '#F59E0B' }} />
            <span className="text-[0.7rem] font-bold text-[#92400E]">Important Conditions</span>
          </div>
          <ul className="list-disc pl-6">
            {conditions.map((condition, idx) => (
              <li key={idx} className="">
                <span className="text-[0.6rem] text-[#92400E]">{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-1.5 px-4 mt-2">
          <div className="flex-1 flex items-center gap-2 p-1.5 rounded-[4px] bg-[#ECFDF5]">
            <CheckCircleIcon sx={{ fontSize: 14, color: '#10B981' }} />
            <div>
              <span className="block text-[0.55rem] text-[#065F46]">Ready for</span>
              <span className="block text-[0.65rem] font-bold text-[#065F46]">Immediate</span>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2 p-1.5 rounded-[4px] bg-[#1B3F84]/10">
            <DescriptionIcon sx={{ fontSize: 14, color: '#1B3F84' }} />
            <div>
              <span className="block text-[0.55rem] text-[#1B3F84]">Documents</span>
              <span className="block text-[0.65rem] font-bold text-[#1B3F84]">Available</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandTerms;