import React, { useState } from 'react';
import GavelIcon from '@mui/icons-material/Gavel';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LandscapeIcon from '@mui/icons-material/Landscape';
import PremiumTabs from '../../../ui/PremiumTabs';

type SpecTab = 'legal' | 'technical';

interface SpecItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  status?: 'positive' | 'negative' | 'neutral';
}

interface SpecGroup {
  id: SpecTab;
  title: string;
  items: SpecItem[];
}

const specGroups: SpecGroup[] = [
  {
    id: 'legal',
    title: 'Legal',
    items: [
      { icon: <GavelIcon sx={{ fontSize: 14 }} />, label: 'Title Clear', value: 'Yes', status: 'positive' },
      { icon: <AccountBalanceIcon sx={{ fontSize: 14 }} />, label: 'Litigation', value: 'None', status: 'positive' },
      { icon: <SecurityIcon sx={{ fontSize: 14 }} />, label: 'Encumbrance', value: 'Free', status: 'positive' },
      { icon: <CheckCircleIcon sx={{ fontSize: 14 }} />, label: 'RERA Reg.', value: 'Approved', status: 'positive' },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    items: [
      { icon: <ArchitectureIcon sx={{ fontSize: 14 }} />, label: 'FSI Allowed', value: '2.5' },
      { icon: <HomeWorkIcon sx={{ fontSize: 14 }} />, label: 'Ground Coverage', value: '60%' },
      { icon: <LandscapeIcon sx={{ fontSize: 14 }} />, label: 'Height Limit', value: '45m' },
      { icon: <GavelIcon sx={{ fontSize: 14 }} />, label: 'Setback', value: '15m' },
    ],
  },
];

const getStatusClass = (status?: string) => {
  switch (status) {
    case 'positive': return 'text-[#10B981]';
    case 'negative': return 'text-[#EF4444]';
    default: return 'text-[#1c2a44]';
  }
};

const SpecCard: React.FC<{ item: SpecItem }> = ({ item }) => (
  <div className="flex items-center gap-1.5 p-[2px] rounded-[4px] bg-transparent hover:bg-[#f8fafc] transition-all group overflow-hidden cursor-default">
    <div className={`w-7 h-7 flex items-center justify-center rounded-[4px] bg-[#f8fafc] shrink-0 border border-[#f1f5f9] group-hover:bg-[#1c2a44] transition-all duration-200 ${getStatusClass(item.status)} group-hover:text-white`}>
      {React.cloneElement(item.icon as React.ReactElement<any>, {
        color: 'inherit',
        className: 'transition-colors duration-200 text-inherit'
      })}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-[0.55rem] font-bold text-[#1c2a44]/50 tracking-wider truncate">
        {item.label}
      </span>
      <span className={`text-[0.7rem] font-bold truncate leading-tight ${getStatusClass(item.status)}`}>
        {item.value}
      </span>
    </div>
  </div>
);

const LandSpecifications: React.FC = () => {
  const [tabValue, setTabValue] = useState<SpecTab>('legal');
  const activeGroup = specGroups.find((g) => g.id === tabValue) ?? specGroups[0];

  const tabs = specGroups.map((g) => ({ label: g.title, value: g.id }));

  return (
    <div className="w-full border-none">
      <div className="bg-white flex flex-col rounded-none">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 bg-white z-10 relative">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Specifications
          </h3>
        </div>

        <PremiumTabs
          tabs={tabs}
          value={tabValue}
          onChange={(v) => setTabValue(v as SpecTab)}
          className="px-2 mb-1"
        />

        <div className="px-4 pb-2 grid grid-cols-2 gap-x-2 gap-y-1 bg-white relative z-10">
          {activeGroup.items.map((item, idx) => (
            <SpecCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandSpecifications;