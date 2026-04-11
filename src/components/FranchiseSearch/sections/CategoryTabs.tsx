import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StoreIcon from '@mui/icons-material/Store';
import type { OpportunityType } from '../data';

interface CategoryTabsProps {
  active: OpportunityType;
  onChange: (v: OpportunityType) => void;
  isDesktop: boolean;
}

const tabs: { label: string; value: OpportunityType; icon?: React.ReactNode; color?: string }[] = [
  { label: 'All Opportunities', value: 'all' },
  { label: 'Franchise (New)', value: 'franchise-new' },
  {
    label: 'Running Business - Sale',
    value: 'running-business',
    icon: <TrendingUpIcon sx={{ fontSize: 14 }} />,
    color: '#1a3566',
  },
  {
    label: 'Restaurant for Lease',
    value: 'restaurant-lease',
    icon: <StoreIcon sx={{ fontSize: 14 }} />,
    color: '#1a3566',
  },
];

export default function CategoryTabs({ active, onChange, isDesktop }: CategoryTabsProps) {
  return (
    <div className={`flex items-center gap-1 ${isDesktop ? '' : 'overflow-x-auto pb-0.5 no-scrollbar'}`}>
      {tabs.map((tab) => {
        const isActive = active === tab.value;




        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`flex items-center gap-1.5 border rounded-[5px] font-bold transition-all duration-300 ease-out whitespace-nowrap flex-shrink-0 ${
              isDesktop ? 'px-4 py-1.5 text-[13px]' : 'px-3.5 py-1 text-[12px]'
            } ${
              isActive
                ? 'border-[#0a162b] text-white bg-gradient-to-b from-[#1a3566] to-[#0a162b] shadow-[0_4px_12px_rgba(10,22,43,0.2)]'
                : 'border-[#e8edf2] text-[#7a88a0] bg-white hover:border-[#c9a34e] hover:text-[#0a162b] hover:shadow-[0_2px_8px_rgba(201,163,78,0.15)] hover:-translate-y-[1px]'
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
