import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface CompareItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  franchiseFee: string;
  investmentRange: string;
  royalty: string;
  liquidCapital: string;
  locations: string;
  yearEstablished: string;
  type: string;
}

const AVAILABLE_ITEMS: CompareItem[] = [
  {
    id: '1', title: "McDonald's", category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80',
    location: 'Pan India', franchiseFee: '₹30L', investmentRange: '₹1.5Cr – ₹2Cr',
    royalty: '5%', liquidCapital: '₹50L', locations: '400+', yearEstablished: '1990', type: 'New Franchise',
  },
  {
    id: '2', title: "Domino's Pizza", category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80',
    location: 'Pan India', franchiseFee: '₹10L', investmentRange: '₹30L – ₹50L',
    royalty: '5.5%', liquidCapital: '₹15L', locations: '1500+', yearEstablished: '1995', type: 'New Franchise',
  },
  {
    id: '3', title: 'NIIT Education', category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&q=80',
    location: 'Metro Cities', franchiseFee: '₹5L', investmentRange: '₹15L – ₹25L',
    royalty: '10%', liquidCapital: '₹8L', locations: '200+', yearEstablished: '1981', type: 'New Franchise',
  },
  {
    id: '4', title: 'Apollo Pharmacy', category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&q=80',
    location: 'Pan India', franchiseFee: '₹3L', investmentRange: '₹20L – ₹35L',
    royalty: '0%', liquidCapital: '₹10L', locations: '5000+', yearEstablished: '1996', type: 'Retail Franchise',
  },
  {
    id: '5', title: 'Anytime Fitness', category: 'Fitness & Wellness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&q=80',
    location: 'Tier 1 & 2', franchiseFee: '₹20L', investmentRange: '₹50L – ₹80L',
    royalty: '7%', liquidCapital: '₹25L', locations: '80+', yearEstablished: '2010', type: 'New Franchise',
  },
];

const COMPARE_ROWS: { label: string; key: keyof CompareItem }[] = [
  { label: 'Category',         key: 'category' },
  { label: 'Location',         key: 'location' },
  { label: 'Type',             key: 'type' },
  { label: 'Year Established', key: 'yearEstablished' },
  { label: 'Franchise Fee',    key: 'franchiseFee' },
  { label: 'Investment Range', key: 'investmentRange' },
  { label: 'Liquid Capital',   key: 'liquidCapital' },
  { label: 'Royalty',         key: 'royalty' },
  { label: 'No. of Locations', key: 'locations' },
];

const MAX_COMPARE = 4;
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80';

interface CompareProps {
  isDesktop: boolean;
}

export default function Compare({ isDesktop }: CompareProps) {
  const [selected, setSelected] = useState<CompareItem[]>([AVAILABLE_ITEMS[0], AVAILABLE_ITEMS[1]]);
  const [pickerOpen, setPickerOpen] = useState(false);

  const addItem = (item: CompareItem) => {
    if (selected.length < MAX_COMPARE && !selected.find((s) => s.id === item.id)) {
      setSelected((prev) => [...prev, item]);
    }
    setPickerOpen(false);
  };

  const removeItem = (id: string) => {
    setSelected((prev) => prev.filter((s) => s.id !== id));
  };

  const available = AVAILABLE_ITEMS.filter((a) => !selected.find((s) => s.id === a.id));

  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto w-full">
      {/* Header controls */}
      <div className="flex items-center justify-between gap-3 flex-wrap bg-white p-4 rounded-[7px] border border-black/5 shadow-sm">
        <p className="text-[13px] sm:text-sm font-light text-[#637089]">
          Comparing <span className="font-semibold text-[#0a1128]">{selected.length}</span> of{' '}
          <span className="font-semibold text-[#0a1128]">{MAX_COMPARE}</span> franchises
        </p>
        {selected.length < MAX_COMPARE && (
          <button
            onClick={() => setPickerOpen((p) => !p)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#0a1128] text-white text-[13px] font-medium hover:bg-[#121c33] transition-colors shadow-sm"
          >
            <AddCircleOutlineIcon sx={{ fontSize: 16 }} />
            Add Franchise
          </button>
        )}
      </div>

      {/* Franchise picker dropdown */}
      {pickerOpen && (
        <div className="bg-white rounded-[7px] border border-[#d4af37]/30 shadow-lg p-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-[14px] font-semibold text-[#0a1128] mb-3">
            Available Franchises
          </p>
          <div className="flex flex-wrap gap-2.5">
            {available.length === 0 ? (
              <p className="text-[13px] font-light text-[#a0aabf]">You've selected all available options.</p>
            ) : (
              available.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addItem(item)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-[4px] border border-black/10 text-[13px] font-medium text-[#0a1128] hover:border-[#d4af37]/60 hover:bg-[#fafafb] transition-all duration-200 bg-white shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-6 h-6 rounded-[3px] object-cover bg-gray-100"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                  />
                  {item.title}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {/* Comparison Table */}
      {selected.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 bg-white rounded-[7px] border border-black/5">
          <p className="text-[13px] sm:text-sm font-light text-[#637089]">Add at least 2 franchises to compare.</p>
        </div>
      ) : (
        <div className="bg-white rounded-[7px] border border-black/[0.05] shadow-sm overflow-hidden relative">
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-separate" style={{ borderSpacing: 0 }}>
              
              {/* Header row with franchise cards */}
              <thead>
                <tr>
                  {/* Sticky Header Column */}
                  <th className="sticky left-0 z-20 bg-white w-28 sm:w-40 px-3 sm:px-5 py-4 border-b border-r border-black/[0.05] shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] align-bottom">
                    <span className="text-[12px] sm:text-[14px] font-semibold text-[#637089]">
                      Attribute
                    </span>
                  </th>

                  {/* Data Header Columns */}
                  {selected.map((item) => (
                    <th key={item.id} className="px-4 sm:px-6 py-5 border-b border-black/[0.05] min-w-[130px] sm:min-w-[180px] align-top bg-white">
                      <div className="flex flex-col items-start">
                        <div className="relative inline-block mb-3 sm:mb-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-[6px] bg-[#f0f0f5] border border-black/5 shadow-sm"
                            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                          />
                          <button
                            onClick={() => removeItem(item.id)}
                            className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-red-50 text-[#a0aabf] hover:text-red-500 hover:border-red-200 shadow-md transition-colors z-10"
                            title="Remove from comparison"
                          >
                            <CloseIcon sx={{ fontSize: isDesktop ? 14 : 12 }} />
                          </button>
                        </div>
                        <p className="text-[14px] sm:text-[16px] font-semibold text-[#0a1128] truncate w-full">{item.title}</p>
                        <div className="flex items-center gap-1 mt-0.5 w-full">
                          <LocationOnOutlinedIcon sx={{ fontSize: 13, color: '#d4af37' }} className="shrink-0" />
                          <span className="text-[11px] sm:text-[12px] text-[#637089] font-light truncate">{item.location}</span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Data rows */}
              <tbody>
                {COMPARE_ROWS.map(({ label, key }, rowIdx) => {
                  const isEven = rowIdx % 2 === 0;
                  const rowBg = isEven ? 'bg-white' : 'bg-[#fafafb]';
                  
                  return (
                    <tr key={key} className="group">
                      {/* Sticky Data Column */}
                      <td className={`sticky left-0 z-10 ${rowBg} w-28 sm:w-40 px-3 sm:px-5 py-3.5 text-[12px] sm:text-[13px] font-medium text-[#0a1128] border-b border-r border-black/[0.05] shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] group-hover:bg-gray-50/80 transition-colors`}>
                        {label}
                      </td>

                      {/* Data Columns */}
                      {selected.map((item) => (
                        <td key={item.id} className={`px-4 sm:px-6 py-3.5 text-[12px] sm:text-[14px] font-light text-[#637089] border-b border-black/[0.05] ${rowBg} group-hover:bg-gray-50/80 transition-colors`}>
                          <span className={`${key === 'franchiseFee' || key === 'investmentRange' ? 'font-medium text-[#2d6d33]' : ''}`}>
                            {String(item[key])}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>

              {/* Final row (Visible on Mobile & Desktop) */}
              {selected.length >= 2 && (
                <tfoot>
                  <tr className="bg-white">
                    <td className="sticky left-0 z-10 bg-white w-28 sm:w-40 px-3 sm:px-5 py-4 text-[12px] sm:text-[14px] font-semibold text-[#0a1128] border-r border-black/[0.05] shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)]">
                      Pick
                    </td>
                    {selected.map((item, i) => (
                      <td key={item.id} className="px-4 sm:px-6 py-4 bg-white">
                        <span className={`inline-flex items-center justify-center w-full sm:w-auto gap-1.5 text-[11px] sm:text-[13px] px-3 py-1.5 rounded-[4px] font-medium shadow-sm border ${
                          i === 0
                            ? 'bg-[#d4af37] text-white border-[#b38728]'
                            : 'bg-[#fafafb] text-[#637089] border-black/10'
                        }`}>
                          {i === 0 && <CheckIcon sx={{ fontSize: 16 }} />}
                          {i === 0 ? 'Top Pick' : 'Alternative'}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}