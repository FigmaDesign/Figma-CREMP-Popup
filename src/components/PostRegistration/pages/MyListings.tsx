import { useState } from 'react';
import ListingCard from '../components/ListingCard';
import type { ListingItem } from '../components/ListingCard';
import ToggleViewTabs from '../components/ToggleViewTabs';
import EmptyState from '../components/EmptyState';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const INITIAL_LISTINGS: ListingItem[] = [
  {
    id: '1', title: "Sunrise Café", category: 'Food & Beverage',
    price: '₹30L – ₹50L', location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80',
    status: 'active',
  },
  {
    id: '2', title: 'TechLearn Academy', category: 'Education',
    price: '₹20L – ₹35L', location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
    status: 'active',
  },
  {
    id: '3', title: 'FitZone Gym', category: 'Fitness & Wellness',
    price: '₹45L – ₹70L', location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    status: 'pending',
  },
  {
    id: '4', title: 'MediCare Pharmacy', category: 'Healthcare',
    price: '₹18L – ₹28L', location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&q=80',
    status: 'expired',
  },
  {
    id: '5', title: 'AutoCare Workshop', category: 'Automotive',
    price: '₹35L – ₹55L', location: 'Bengaluru, Karnataka',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80',
    status: 'active',
  },
];

const CATEGORIES = ['Food & Beverage', 'Education', 'Healthcare', 'Fitness & Wellness', 'Automotive'];

const SORT_OPTIONS = [
  { value: 'newest',  label: 'Newest First' },
  { value: 'status',  label: 'By Status' },
];

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
  const allLabel = placeholder === 'Status' ? 'All Statuses' : `All ${placeholder}s`;

  return (
    <div className={`relative w-full ${isDesktop ? 'w-auto' : ''} ${isOpen ? 'z-50' : 'z-10'}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-1 py-2 bg-white border rounded-[4px] transition-all duration-300 font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)] outline-none h-[38px] ${
          isDesktop ? 'px-3 text-[13px] min-w-[130px]' : 'px-1.5 text-[10px] sm:text-[11px]'
        } ${isOpen ? 'border-[#d4af37] ring-1 ring-[#d4af37]/20' : 'border-black/5 hover:border-[#d4af37]/40'}`}
      >
        {/* Dropdown Icon */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-hidden">
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
          <div className={`absolute top-[calc(100%+6px)] ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} min-w-[140px] ${isDesktop ? 'min-w-[180px]' : ''} bg-white border border-black/5 rounded-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
            <button
              onClick={() => { onChange(''); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 font-medium transition-colors hover:bg-[#fafafb] hover:text-[#d4af37] ${isDesktop ? 'text-[13px]' : 'text-[12px]'} ${
                value === '' ? 'text-[#d4af37] bg-[#fafafb]' : 'text-[#0a1128]'
              }`}
            >
              {allLabel}
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

interface MyListingsProps {
  isDesktop: boolean;
}

export default function MyListings({ isDesktop }: MyListingsProps) {
  const [listings, setListings] = useState<ListingItem[]>(INITIAL_LISTINGS);
  const [view, setView]         = useState<'grid' | 'list'>('grid');
  const [search, setSearch]     = useState('');
  const [category, setCategory] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'pending' | 'expired'>('all');
  const [sort, setSort]         = useState('newest');

  const handleDelete = (id: string) => {
    setListings((prev) => prev.filter((l) => l.id !== id));
  };

  const handleViewLeads = (id: string) => {
    console.log("View leads for", id);
  };

  const filtered = listings.filter((l) => {
    const matchSearch   = l.title.toLowerCase().includes(search.toLowerCase()) ||
                          l.location.toLowerCase().includes(search.toLowerCase());
    const matchCat      = category === '' || l.category === category;
    const matchStatus   = statusFilter === 'all' || l.status === statusFilter;
    return matchSearch && matchCat && matchStatus;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className={`flex ${isDesktop ? 'flex-row gap-3' : 'flex-col gap-2.5'} w-full`}>
        <div className={`flex items-center gap-2.5 w-full ${isDesktop ? 'flex-1' : ''}`}>
          <div className="relative flex-1 flex items-center bg-white border border-black/5 rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors focus-within:border-[#d4af37] focus-within:ring-1 focus-within:ring-[#d4af37]/20 hover:border-[#d4af37]/40 h-[38px]">
            <SearchOutlinedIcon
              sx={{ fontSize: 18, color: search ? '#d4af37' : '#a0aabf' }}
              className="absolute left-3 pointer-events-none transition-colors"
            />
            <input
              type="text"
              placeholder="Search your listings..."
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

        <div className={`flex items-center gap-2 ${isDesktop ? 'w-auto' : 'grid grid-cols-3 w-full'}`}>
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
            icon={FilterAltOutlinedIcon}
            placeholder="Status"
            value={statusFilter === 'all' ? '' : statusFilter}
            options={[
              { value: 'active', label: 'Active' },
              { value: 'pending', label: 'Pending' },
              { value: 'expired', label: 'Expired' }
            ]}
            onChange={(val) => setStatusFilter(val ? val as any : 'all')}
            align="center"
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
          <div className="flex shrink-0 items-center h-[38px]">
            <ToggleViewTabs view={view} onChange={setView} />
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<ListAltOutlinedIcon sx={{ fontSize: '1.75rem', color: '#d4af37' }} />}
          title="No listings found"
          description="Your listed opportunities will appear here."
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
                showStatus
                showEditAction
                showDeleteAction
                showLeadAction
                onDelete={handleDelete}
                onLead={handleViewLeads}
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
                showStatus
                showEditAction
                showDeleteAction
                showLeadAction
                onDelete={handleDelete}
                onLead={handleViewLeads}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}