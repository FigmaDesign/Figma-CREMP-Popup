import { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  KeyboardArrowDown, 
  CategoryOutlined, 
  CurrencyRupee, 
  PlaceOutlined,
  Check
} from '@mui/icons-material';
import ViewToggle from './ViewToggle';

interface WhislistHeaderProps {
  isDesktop: boolean;
  viewType: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  investmentFilter: string;
  onInvestmentFilterChange: (value: string) => void;
  locationFilter: string;
  onLocationFilterChange: (value: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (value: string) => void;
  locations?: string[];
  categories?: string[];
  investmentRanges?: string[];
}

interface PremiumDropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  icon: React.ElementType;
}

function PremiumDropdown({ value, onChange, options, placeholder, icon: Icon }: PremiumDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-2 py-2 md:px-3 md:py-2.5 rounded-[4px] border transition-all duration-300 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
          isOpen 
            ? 'border-[#c9a34e] ring-1 ring-[#c9a34e]/20 text-[#1c2a44]' 
            : 'border-[#e2e8f0] text-[#64748b] hover:border-[#c9a34e]/50'
        }`}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <Icon sx={{ fontSize: '1.1rem' }} className={`shrink-0 ${value ? 'text-[#c9a34e]' : 'text-[#94a3b8]'}`} />
          <span className={`text-xs md:text-sm font-medium truncate ${value ? 'text-[#1c2a44]' : ''}`}>
            {value || placeholder}
          </span>
        </div>
        <KeyboardArrowDown 
          sx={{ fontSize: '1.1rem' }} 
          className={`text-[#94a3b8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-max min-w-full max-w-[200px] bg-white/95 backdrop-blur-xl border border-[#e2e8f0] rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onMouseDown={(e) => { 
              e.preventDefault();
              onChange(''); 
              setIsOpen(false); 
            }}
            className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between hover:bg-[#f8fafc] ${
              !value ? 'text-[#c9a34e] font-semibold bg-[#f8fafc]/50' : 'text-[#64748b]'
            }`}
          >
            <span>Any / Clear</span>
            {!value && <Check sx={{ fontSize: '1.1rem' }} />}
          </button>
          
          <div className="h-[1px] w-full bg-[#eef0f3] my-1" />

          <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onMouseDown={(e) => { 
                  e.preventDefault();
                  onChange(opt); 
                  setIsOpen(false); 
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between hover:bg-[#f8fafc] ${
                  value === opt ? 'text-[#c9a34e] font-semibold bg-[#f8fafc]/50' : 'text-[#1c2a44]'
                }`}
              >
                <span className="truncate pr-4">{opt}</span>
                {value === opt && <Check sx={{ fontSize: '1.1rem', flexShrink: 0 }} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function WhislistHeader({
  isDesktop,
  viewType,
  onViewChange,
  searchTerm,
  onSearchChange,
  investmentFilter,
  onInvestmentFilterChange,
  locationFilter,
  onLocationFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  locations = ['Pan India', 'Metro Cities', 'Tier 1 Cities', 'Urban Areas', 'Residential Areas'],
  categories = ['Food & Beverage', 'Health & Fitness', 'Real Estate', 'Retail', 'Education', 'Healthcare'],
  investmentRanges = ['₹20L - ₹35L', '₹25L - ₹40L', '₹30L - ₹50L', '₹50L - ₹80L', '₹80L - ₹1.2Cr', '₹1Cr - ₹2Cr'],
}: WhislistHeaderProps) {
  return (
    <div className="relative z-10">
      <div className="w-full bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] flex justify-center relative overflow-hidden shadow-inner">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a34e]/5 blur-3xl -translate-y-1/2 translate-x-1/3 rounded-[4px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4e7ec9]/5 blur-3xl translate-y-1/2 -translate-x-1/4 rounded-[4px]" />
        
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className={`w-full max-w-[80rem] relative z-10 ${isDesktop ? 'px-10 py-12' : 'px-4 py-8'}`}>
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <h1 className={`font-light text-white m-0 leading-tight ${isDesktop ? 'text-[2.75rem]' : 'text-[2rem]'}`}>
                My <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e6c475] to-[#c9a34e]">Wishlist</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className={`max-w-[80rem] mx-auto ${isDesktop ? 'px-10 py-4' : 'px-4 py-3'}`}>
          
          {isDesktop ? (
            <div className="flex items-center gap-4">
              <div className="relative w-72 shrink-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search sx={{ fontSize: '1.25rem' }} className="text-[#94a3b8]" />
                </div>
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-[4px] text-sm focus:outline-none focus:bg-white focus:border-[#c9a34e] focus:ring-1 focus:ring-[#c9a34e]/50 transition-all duration-300 text-[#1c2a44] placeholder:text-[#94a3b8]"
                />
              </div>
              <div className="flex flex-1 gap-3">
                <div className="flex-1 min-w-0">
                  <PremiumDropdown value={categoryFilter} onChange={onCategoryFilterChange} options={categories} placeholder="Sector" icon={CategoryOutlined} />
                </div>
                <div className="flex-1 min-w-0">
                  <PremiumDropdown value={investmentFilter} onChange={onInvestmentFilterChange} options={investmentRanges} placeholder="Capital" icon={CurrencyRupee} />
                </div>
                <div className="flex-1 min-w-0">
                  <PremiumDropdown value={locationFilter} onChange={onLocationFilterChange} options={locations} placeholder="Region" icon={PlaceOutlined} />
                </div>
              </div>
              <div className="shrink-0">
                <ViewToggle viewType={viewType} onViewChange={onViewChange} isDesktop={true} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 w-full">
                <div className="relative flex-1 min-w-0">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search sx={{ fontSize: '1.1rem' }} className="text-[#94a3b8]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search opportunities..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-[4px] text-sm focus:outline-none focus:bg-white focus:border-[#c9a34e] focus:ring-1 focus:ring-[#c9a34e]/50 transition-all duration-300 text-[#1c2a44] placeholder:text-[#94a3b8]"
                  />
                </div>
                <div className="shrink-0">
                  <ViewToggle viewType={viewType} onViewChange={onViewChange} isDesktop={false} />
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <div className="flex-1 min-w-0">
                  <PremiumDropdown value={categoryFilter} onChange={onCategoryFilterChange} options={categories} placeholder="Sector" icon={CategoryOutlined} />
                </div>
                <div className="flex-1 min-w-0">
                  <PremiumDropdown value={investmentFilter} onChange={onInvestmentFilterChange} options={investmentRanges} placeholder="Capital" icon={CurrencyRupee} />
                </div>
                <div className="flex-1 min-w-0">
                  <PremiumDropdown value={locationFilter} onChange={onLocationFilterChange} options={locations} placeholder="Region" icon={PlaceOutlined} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}