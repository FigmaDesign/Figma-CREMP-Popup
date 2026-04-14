import { useState } from 'react';
import ListingCard from '../components/ListingCard';
import type { ListingItem } from '../components/ListingCard';
import ToggleViewTabs from '../components/ToggleViewTabs';
import EmptyState from '../components/EmptyState';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

const INITIAL_LISTINGS: ListingItem[] = [
  {
    id: '1', title: "McDonald's Franchise", category: 'Food & Beverage',
    price: '₹1.5Cr – ₹2Cr', location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    savedDate: '12 Apr 2026', isSaved: true,
  },
  {
    id: '2', title: "Domino's Pizza", category: 'Food & Beverage',
    price: '₹30L – ₹50L', location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
    savedDate: '10 Apr 2026', isSaved: true,
  },
  {
    id: '3', title: 'NIIT Education Centre', category: 'Education',
    price: '₹15L – ₹25L', location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    savedDate: '08 Apr 2026', isSaved: true,
  },
  {
    id: '4', title: 'Apollo Pharmacy', category: 'Healthcare',
    price: '₹20L – ₹35L', location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&q=80',
    savedDate: '05 Apr 2026', isSaved: true,
  },
  {
    id: '5', title: 'Anytime Fitness', category: 'Fitness & Wellness',
    price: '₹50L – ₹80L', location: 'Bengaluru, Karnataka',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    savedDate: '02 Apr 2026', isSaved: true,
  },
  {
    id: '6', title: 'Jockey Exclusive Store', category: 'Retail',
    price: '₹25L – ₹40L', location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
    savedDate: '28 Mar 2026', isSaved: true,
  },
];

const CATEGORIES = ['Food & Beverage', 'Education', 'Healthcare', 'Retail', 'Fitness & Wellness'];

const SORT_OPTIONS = [
  { value: 'newest',     label: 'Newest First' },
  { value: 'oldest',     label: 'Oldest First' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

/* ── MODERN DROPDOWN COMPONENT ── */
interface ModernDropdownProps {
  icon: React.ElementType;
  placeholder: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
  align?: 'left' | 'center' | 'right';
  isDesktop: boolean;
}

function ModernDropdown({ icon: Icon, placeholder, value, options, onChange, align = 'left', isDesktop }: ModernDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <div className={`relative w-full ${isDesktop ? 'w-auto' : ''} ${isOpen ? 'z-50' : 'z-10'}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-1 py-2 bg-white border rounded-[4px] transition-all duration-300 font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)] outline-none h-[38px] ${
          isDesktop ? 'px-3 text-[13px] min-w-[150px]' : 'px-2 text-[11px]'
        } ${isOpen ? 'border-[#d4af37] ring-1 ring-[#d4af37]/20' : 'border-black/5 hover:border-[#d4af37]/40'}`}
      >
        <div className="flex items-center gap-1.5 overflow-hidden">
          <Icon sx={{ fontSize: isDesktop ? 16 : 14, color: value ? '#d4af37' : '#a0aabf' }} className="shrink-0 transition-colors" />
          <span className={`truncate ${value ? 'text-[#0a1128]' : 'text-[#637089] font-light'}`}>
            {selectedLabel || placeholder}
          </span>
        </div>
        <KeyboardArrowDownIcon
          sx={{ fontSize: 14, color: '#a0aabf' }}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} />
          <div className={`absolute top-[calc(100%+6px)] ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} min-w-[150px] ${isDesktop ? 'min-w-[180px]' : ''} bg-white border border-black/5 rounded-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
            <button
              onClick={() => { onChange(''); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 font-medium transition-colors hover:bg-[#fafafb] hover:text-[#d4af37] ${isDesktop ? 'text-[13px]' : 'text-[12px]'} ${
                value === '' ? 'text-[#d4af37] bg-[#fafafb]' : 'text-[#0a1128]'
              }`}
            >
              All {placeholder}s
            </button>
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 font-medium transition-colors hover:bg-[#fafafb] hover:text-[#d4af37] ${isDesktop ? 'text-[13px]' : 'text-[12px]'} ${
                  value === opt.value ? 'text-[#d4af37] bg-[#fafafb]' : 'text-[#0a1128]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface SavedListingsProps {
  isDesktop: boolean;
}

export default function SavedListings({ isDesktop }: SavedListingsProps) {
  const [listings, setListings] = useState<ListingItem[]>(INITIAL_LISTINGS);
  const [view, setView]         = useState<'grid' | 'list'>('grid');
  const [search, setSearch]     = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort]         = useState('newest');

  const handleUnsave = (id: string) => {
    setListings((prev) => prev.filter((l) => l.id !== id));
  };

  const filtered = listings
    .filter((l) =>
      (category === '' || l.category === category) &&
      (l.title.toLowerCase().includes(search.toLowerCase()) ||
        l.location.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sort === 'oldest') return (a.savedDate ?? '').localeCompare(b.savedDate ?? '');
      return (b.savedDate ?? '').localeCompare(a.savedDate ?? '');
    });

  return (
    <div className="flex flex-col gap-4">
      {/* Filters Row */}
      <div className={`flex ${isDesktop ? 'flex-row gap-3' : 'flex-col gap-2.5'} w-full`}>
        <div className={`flex items-center gap-2.5 w-full ${isDesktop ? 'flex-1' : ''}`}>
          <div className="relative flex-1 flex items-center bg-white border border-black/5 rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors focus-within:border-[#d4af37] focus-within:ring-1 focus-within:ring-[#d4af37]/20 hover:border-[#d4af37]/40 h-[38px]">
            <SearchOutlinedIcon
              sx={{ fontSize: 18, color: search ? '#d4af37' : '#a0aabf' }}
              className="absolute left-3 pointer-events-none transition-colors"
            />
            <input
              type="text"
              placeholder="Search saved opportunities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full bg-transparent pl-9 pr-3 text-[#0a1128] text-[13px] outline-none placeholder:text-[#a0aabf] font-light font-['Outfit'] rounded-[4px]"
            />
          </div>

          {!isDesktop && (
            <div className="shrink-0 flex items-center h-[38px]">
              <ToggleViewTabs view={view} onChange={setView} />
            </div>
          )}
        </div>

        <div className={`flex items-center gap-2 ${isDesktop ? 'w-auto' : 'grid grid-cols-2 w-full'}`}>
          <ModernDropdown
            isDesktop={isDesktop}
            icon={CategoryOutlinedIcon}
            placeholder="Sector"
            value={category}
            options={CATEGORIES.map(c => ({ value: c, label: c }))}
            onChange={setCategory}
            align="left"
          />
          <ModernDropdown
            isDesktop={isDesktop}
            icon={SortOutlinedIcon}
            placeholder="Sort By"
            value={sort}
            options={SORT_OPTIONS}
            onChange={setSort}
            align="right"
          />
        </div>

        {isDesktop && (
          <div className="flex shrink-0 items-center h-[38px] ml-auto">
            <ToggleViewTabs view={view} onChange={setView} />
          </div>
        )}
      </div>

      {/* Grid Display */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={<BookmarkBorderOutlinedIcon sx={{ fontSize: '1.75rem', color: '#d4af37' }} />}
          title="No saved listings"
          description="Opportunities you save while browsing will appear here."
        />
      ) : view === 'grid' ? (
        <div className={`grid gap-4 ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {filtered.map((item) => {
            if (!item) return null;
            return (
              <ListingCard
                key={item.id}
                item={item}
                mode="grid"
                isDesktop={isDesktop}
                showSaveAction
                onSave={handleUnsave}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col">
          {filtered.map((item) => {
            if (!item) return null;
            return (
              <ListingCard
                key={item.id}
                item={item}
                mode="list"
                isDesktop={isDesktop}
                showSaveAction
                onSave={handleUnsave}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}