import { useState, useRef, useEffect } from 'react';
import SearchBar from './sections/SearchBar';
import CategoryTabs from './sections/CategoryTabs';
import MapSection from './sections/MapSection';
import ListingsGrid from './sections/ListingsGrid';
import { listings, type OpportunityType } from './data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import FranchiseProfile from '../FranchiseProfile/FranchiseProfile';

interface FranchiseSearchProps {
  viewMode: 'desktop' | 'mobile';
}

export default function FranchiseSearch({ viewMode }: FranchiseSearchProps) {
  const isDesktop = viewMode === 'desktop';
  const [activeCategory, setActiveCategory] = useState<OpportunityType>('all');
  const [searchQuery, setSearchQuery] = useState('Kukatpally Area');
  const [selectedRadius, setSelectedRadius] = useState(3);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<{
    budget: string | null;
    runner: string | null;
    area: string | null;
    type: string | null;
  }>({ budget: null, runner: null, area: null, type: null });
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listingsRef = useRef<HTMLDivElement>(null);

  const filteredListings = listings.filter((l) => {
    if (activeCategory === 'all') return true;
    return l.type === activeCategory;
  });

  const handlePinClick = (listingId: string) => {
    setSelectedListingId(listingId);
    setTimeout(() => {
      const el = document.getElementById(`listing-${listingId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  return (
    <div
      className={`w-full flex flex-col ${isDesktop ? 'bg-[#f8fafc] overflow-hidden' : 'bg-[#f4f7f9] items-center justify-center overflow-hidden'
        }`}
      style={{ height: isDesktop ? 'calc(100vh - 64px)' : 'calc(100vh - 64px)' }}
    >
      {/* ── Page Header ── */}
      <div className="w-full bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] relative overflow-hidden shrink-0 border-b border-white/[0.05]">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/10 blur-[100px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        </div>
        <div className={`relative z-10 ${isDesktop ? 'px-8 py-4' : 'px-4 py-3'}`}>
          <h1 className={`font-extralight text-white m-0 tracking-wide ${isDesktop ? 'text-2xl' : 'text-xl'}`}>
            Explore{' '}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">
              Opportunities
            </span>
          </h1>
        </div>
      </div>
      {isDesktop ? (
        <DesktopLayout
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedRadius={selectedRadius}
          setSelectedRadius={setSelectedRadius}
          selectedBudget={selectedBudget}
          setSelectedBudget={setSelectedBudget}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          filteredListings={filteredListings}
          selectedListingId={selectedListingId}
          setSelectedListingId={setSelectedListingId}
          onPinClick={handlePinClick}
          listingsRef={listingsRef}
          onViewDetails={(id) => { setSelectedListingId(id); setIsModalOpen(true); }}
        />
      ) : (
        <div
          className="transition-all duration-500 mx-auto overflow-hidden shadow-2xl bg-white w-[24.375rem] shrink-0 rounded-none"
          style={{ height: '48.75rem' }}
        >
          <MobileLayout
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedRadius={selectedRadius}
            setSelectedRadius={setSelectedRadius}
            selectedBudget={selectedBudget}
            setSelectedBudget={setSelectedBudget}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            filteredListings={filteredListings}
            selectedListingId={selectedListingId}
            setSelectedListingId={setSelectedListingId}
            onPinClick={handlePinClick}
            listingsRef={listingsRef}
            onViewDetails={(id) => { setSelectedListingId(id); setIsModalOpen(true); }}
          />
        </div>
      )}

      {/* Modal Overlay for View Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f1f3d]/60 backdrop-blur-sm p-4">
          <div className={`relative bg-white rounded-[7px] shadow-2xl overflow-hidden w-full max-w-[80rem] ${isDesktop ? 'h-[90vh]' : 'h-[100dvh]'}`}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-[101] w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <CloseIcon sx={{ color: 'white' }} />
            </button>
            <div className="w-full h-full overflow-hidden">
              <FranchiseProfile viewMode={viewMode} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface LayoutProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedRadius: number;
  setSelectedRadius: (v: number) => void;
  selectedBudget: string | null;
  setSelectedBudget: (v: string | null) => void;
  activeCategory: OpportunityType;
  setActiveCategory: (v: OpportunityType) => void;
  activeFilters: { budget: string | null; runner: string | null; area: string | null; type: string | null };
  setActiveFilters: React.Dispatch<React.SetStateAction<{ budget: string | null; runner: string | null; area: string | null; type: string | null }>>;
  filteredListings: typeof listings;
  selectedListingId: string | null;
  setSelectedListingId: (v: string | null) => void;
  onPinClick: (id: string) => void;
  listingsRef: React.RefObject<HTMLDivElement | null>;
  onViewDetails: (id: string) => void;
}

function DesktopLayout({
  searchQuery, setSearchQuery, selectedRadius, setSelectedRadius,
  selectedBudget, setSelectedBudget,
  activeCategory, setActiveCategory,
  filteredListings, selectedListingId, setSelectedListingId, onPinClick, listingsRef,
  onViewDetails,
}: LayoutProps) {
  return (
    <div className="flex flex-1 min-h-0 bg-[#f8fafc]">
      {/* Left Base (Header + Map) */}
      <div className="w-[60%] flex flex-col relative flex-shrink-0 border-r border-[#e8ecf1] bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <div className="border-b border-[#e8ecf1] px-6 py-4 flex flex-col gap-3 z-20 bg-white">
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <SearchBar value={searchQuery} onChange={setSearchQuery} isDesktop={true} />
            </div>
            <div className="flex-1 min-w-0">
              <RadiusSlider radius={selectedRadius} onRadiusChange={setSelectedRadius} isDesktop={true} fullWidth />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between mt-1">
            <CategoryTabs active={activeCategory} onChange={setActiveCategory} isDesktop={true} />
            <div className="flex-shrink-0">
              <BudgetDropdown budget={selectedBudget} onBudgetChange={setSelectedBudget} isDesktop={true} />
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-0 relative">
          <MapSection
            listings={filteredListings}
            selectedListingId={selectedListingId}
            onPinClick={onPinClick}
            isDesktop={true}
          />
        </div>
      </div>

      {/* Right Base (Listings) */}
      <div className="flex-1 flex flex-col min-h-0 bg-[#f8fafc]">
        <div ref={listingsRef} className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-[0.35rem] [&::-webkit-scrollbar-thumb]:bg-[#1c2a44]/20 [&::-webkit-scrollbar-thumb]:rounded">
          <ListingsGrid
            listings={filteredListings}
            selectedListingId={selectedListingId}
            onSelect={setSelectedListingId}
            isDesktop={true}
            onViewDetails={onViewDetails}
          />
        </div>
      </div>
    </div>
  );
}

function MobileLayout({
  searchQuery, setSearchQuery, selectedRadius, setSelectedRadius,
  selectedBudget, setSelectedBudget,
  activeCategory, setActiveCategory,
  filteredListings, selectedListingId, setSelectedListingId, onPinClick, listingsRef,
  onViewDetails,
}: LayoutProps) {
  return (
    <div className="flex flex-col w-full h-full bg-[#f5f6f8]" style={{ minHeight: 0 }}>
      {/* ── Header ── */}
      <div className="bg-white border-b border-[#eef0f3] px-3 pt-3 pb-2 flex flex-col gap-2 flex-shrink-0">
        {/* Row 1: Search + Budget */}
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0">
            <SearchBar value={searchQuery} onChange={setSearchQuery} isDesktop={false} />
          </div>
          <div className="flex-shrink-0">
            <BudgetDropdown budget={selectedBudget} onBudgetChange={setSelectedBudget} isDesktop={false} />
          </div>
        </div>

        {/* Row 2: Radius Slider (Full Width) */}
        <div className="w-full">
          <RadiusSlider radius={selectedRadius} onRadiusChange={setSelectedRadius} isDesktop={false} fullWidth />
        </div>

        {/* Row 3: Category Tabs */}
        <div className="mt-1">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} isDesktop={false} />
        </div>
      </div>

      {/* ── Map ── */}
      <div className="w-full flex-shrink-0" style={{ height: '35%' }}>
        <MapSection
          listings={filteredListings}
          selectedListingId={selectedListingId}
          onPinClick={onPinClick}
          isDesktop={false}
        />
      </div>

      {/* ── Listings scrollable ── */}
      <div ref={listingsRef} className="flex-1 overflow-y-auto w-full bg-[#f5f6f8] [&::-webkit-scrollbar]:w-[0.25rem] [&::-webkit-scrollbar-thumb]:bg-[#1c2a44]/15 [&::-webkit-scrollbar-thumb]:rounded" style={{ minHeight: 0 }}>
        <ListingsGrid
          listings={filteredListings}
          selectedListingId={selectedListingId}
          onSelect={setSelectedListingId}
          isDesktop={false}
          onViewDetails={onViewDetails}
        />
      </div>
    </div>
  );
}

const BUDGET_OPTIONS = ['₹ 0–5L', '₹ 5–25L', '₹ 25–50L', '₹ 50L+'];

function RadiusSlider({ radius, onRadiusChange, isDesktop, fullWidth }: { radius: number; onRadiusChange: (v: number) => void; isDesktop: boolean; fullWidth?: boolean; }) {
  // Map 0-50 km to exactly 0 to 100 percentage layout for the gradient
  const maxRadius = 50;
  const percentage = Math.min((radius / maxRadius) * 100, 100);

  return (
    <div className={`flex items-center gap-2.5 bg-white border border-[#d9dde3] rounded-[5px] hover:border-[#c9a34e] transition-colors ${fullWidth ? 'flex-1 min-w-0 w-full' : ''} ${isDesktop ? 'px-3 py-[7px]' : 'px-2.5 py-[6px]'
      }`}>
      <span className={`font-semibold text-[#637089] whitespace-nowrap flex-shrink-0 ${isDesktop ? 'text-xs' : 'text-[11px]'}`}>Radius</span>
      <input
        type="range"
        min={1}
        max={50}
        step={1}
        value={radius}
        onChange={(e) => onRadiusChange(Number(e.target.value))}
        className="flex-1 w-full min-w-[60px] h-[4px] rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-[#1a3566] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_2px_5px_rgba(26,53,102,0.4)] [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:bg-[#1a3566] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-[0_2px_5px_rgba(26,53,102,0.4)]"
        style={{
          background: `linear-gradient(to right, #1a3566, #c9a34e ${percentage}%, #e8edf2 ${percentage}%)`
        }}
      />
      <span className={`font-bold text-[#0f1f3d] w-12 text-right flex-shrink-0 ${isDesktop ? 'text-xs' : 'text-[11px]'}`}>{radius} km</span>
    </div>
  );
}

function BudgetDropdown({ budget, onBudgetChange, isDesktop }: { budget: string | null; onBudgetChange: (v: string | null) => void; isDesktop: boolean; }) {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const budgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (budgetRef.current && !budgetRef.current.contains(e.target as Node)) setBudgetOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={budgetRef} className="relative flex-shrink-0">
      <button
        onClick={() => setBudgetOpen(!budgetOpen)}
        className={`flex items-center gap-1.5 bg-white border rounded-[5px] font-semibold transition-colors w-full justify-between ${isDesktop ? 'px-3 py-[7px] text-xs' : 'px-3 py-[6px] text-[11px]'
          } ${budget
            ? 'border-[#c9a34e] text-[#c9a34e]'
            : 'border-[#d9dde3] text-[#0f1f3d] hover:border-[#c9a34e]'
          }`}
      >
        <span className="whitespace-nowrap">{budget ?? 'Budget'}</span>
        <KeyboardArrowDownIcon sx={{ fontSize: 14 }} className={`transition-transform flex-shrink-0 ml-1 ${budgetOpen ? 'rotate-180' : ''}`} />
      </button>
      {budgetOpen && (
        <div className="absolute right-0 top-[calc(100%+4px)] bg-white border border-[#eef0f3] rounded-[5px] shadow-[0_8px_24px_rgba(15,31,61,0.12)] z-50 min-w-[140px] overflow-hidden">
          <button
            onClick={() => { onBudgetChange(null); setBudgetOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-all ${!budget ? 'bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white' : 'text-[#637089] hover:bg-[#f5f6f8]'
              }`}
          >
            All Budgets
          </button>
          {BUDGET_OPTIONS.map((o) => (
            <button
              key={o}
              onClick={() => { onBudgetChange(o); setBudgetOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-all ${budget === o ? 'bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white' : 'text-[#0f1f3d] hover:bg-[#f5f6f8]'
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
