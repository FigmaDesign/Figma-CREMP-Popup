import { useState, useRef, useEffect } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Removed unused OpportunityType import

interface FilterBarProps {
  activeFilters: { budget: string | null; runner: string | null; area: string | null; type: string | null };
  setActiveFilters: React.Dispatch<React.SetStateAction<{ budget: string | null; runner: string | null; area: string | null; type: string | null }>>;
  isDesktop: boolean;
}

type DropdownKey = 'budget' | 'runner' | 'area';

const budgetOptions = ['₹ 0–5L', '₹ 5–25L', '₹ 25–50L', '₹ 50L+'];
const runnerOptions = ['Running Business', 'Franchise New'];
const areaOptions = ['< 200 sq ft', '200–500 sq ft', '500–1000 sq ft', '1000+ sq ft'];

function FilterDropdown({
  label,
  icon,
  options,
  value,
  onChange,
  isDesktop,
}: {
  label: string;
  icon: React.ReactNode;
  options: string[];
  value: string | null;
  onChange: (v: string | null) => void;
  isDesktop: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = value !== null;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 font-semibold transition-all whitespace-nowrap ${isDesktop ? 'text-xs py-2 px-3' : 'text-[11px] py-1.5 px-2.5'
          } ${isActive
            ? 'text-[#c9a34e]'
            : 'text-[#0f1f3d] hover:text-[#c9a34e]'
          }`}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
        <span>{value || label}</span>
        <KeyboardArrowDownIcon sx={{ fontSize: 14 }} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-[#eef0f3] rounded-[5px] shadow-lg z-50 min-w-[150px] overflow-hidden">
          <button
            onClick={() => { onChange(null); setOpen(false); }}
            className={`w-full text-left px-4 py-2 text-xs font-medium transition-all ${!isActive ? 'bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white' : 'text-[#637089] hover:bg-[#f5f6f8]'
              }`}
          >
            All
          </button>
          {options.map((o) => (
            <button
              key={o}
              onClick={() => { onChange(o); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-xs font-medium transition-all ${value === o ? 'bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white' : 'text-[#0f1f3d] hover:bg-[#f5f6f8]'
                }`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterBar({ activeFilters, setActiveFilters, isDesktop }: FilterBarProps) {
  const setFilter = (key: DropdownKey) => (val: string | null) => {
    setActiveFilters((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div
      className={`bg-white border-b border-[#eef0f3] flex items-center ${isDesktop ? 'px-3 gap-0' : 'px-2 gap-0 overflow-x-auto no-scrollbar'
        }`}
    >


      <div className="w-px bg-[#eef0f3] self-stretch mx-0.5" />

      {/* Budget */}
      <FilterDropdown
        label="Budget"
        icon={<ApartmentIcon sx={{ fontSize: 14 }} />}
        options={budgetOptions}
        value={activeFilters.budget}
        onChange={setFilter('budget')}
        isDesktop={isDesktop}
      />

      <div className="w-px bg-[#eef0f3] self-stretch mx-0.5" />

      {/* Runner */}
      <FilterDropdown
        label="Runner"
        icon={<TrendingUpIcon sx={{ fontSize: 14 }} />}
        options={runnerOptions}
        value={activeFilters.runner}
        onChange={setFilter('runner')}
        isDesktop={isDesktop}
      />

      <div className="w-px bg-[#eef0f3] self-stretch mx-0.5" />

      {/* Area */}
      <FilterDropdown
        label="Area"
        icon={<SquareFootIcon sx={{ fontSize: 14 }} />}
        options={areaOptions}
        value={activeFilters.area}
        onChange={setFilter('area')}
        isDesktop={isDesktop}
      />

      <div className="w-px bg-[#eef0f3] self-stretch mx-0.5" />

    </div>
  );
}
