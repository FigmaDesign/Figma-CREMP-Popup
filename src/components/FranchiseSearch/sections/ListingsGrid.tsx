import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Removed ChevronLeftIcon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { listings as ListingsType } from '../data';

interface ListingsGridProps {
  listings: typeof ListingsType;
  selectedListingId: string | null;
  onSelect: (id: string | null) => void;
  isDesktop: boolean;
  onViewDetails?: (id: string) => void;
}

function formatInr(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
}

function formatRange(min: number, max: number): string {
  return `${formatInr(min)} – ${formatInr(max)}`;
}



function ViewDetailsBtn({ onClick, isDesktop = true }: { onClick: (e: React.MouseEvent) => void; isDesktop?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-evenly  transition-all duration-300 ease-out font-bold overflow-hidden relative shadow-[0_4px_14px_rgba(15,31,61,0.1)] hover:shadow-[0_6px_20px_rgba(15,31,61,0.2)] hover:-translate-y-px
    bg-[#0a162b] text-white border border-[#0f1f3d] ${isDesktop
          ? 'rounded-[5px] w-[150px] pl-2 pr-2 h-[32px] text-[13px]'
          : 'rounded-[5px] w-full py-1 mt-1 text-[13px]'
        }`}
      style={{
        boxShadow:
          '0 4px 14px rgba(15,31,61,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
    >
      <span className="relative z-10 transition-transform group-hover:-translate-x-1">
        View Details
      </span>

      <div className="relative w-[16px] h-[16px] flex items-center justify-center overflow-hidden z-10">
        <ChevronRightIcon
          sx={{ fontSize: 16 }}
          className="absolute transition-all duration-300 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-4 text-white"
        />
        <ArrowForwardIcon
          sx={{ fontSize: 14 }}
          className="absolute transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-white"
        />
      </div>
    </button>
  );
}

function getImageUrl(category: string) {
  switch (category) {
    case 'Middle Eastern': return 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80';
    case 'Food & Beverage': return 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80';
    case 'North Indian': return 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80';
    case 'Beverages': return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80';
    case 'Desserts': return 'https://images.unsplash.com/photo-1557142046-c704a3adf8f6?w=400&q=80';
    case 'Fast Food': return 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80';
    default: return 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80';
  }
}

function ListingCard({
  listing,
  isSelected,
  onSelect,
  isDesktop,
  isFeatured,
  onViewDetails,
}: {
  listing: (typeof ListingsType)[number];
  isSelected: boolean;
  onSelect: (id: string) => void;
  isDesktop: boolean;
  isFeatured?: boolean;
  onViewDetails?: (id: string) => void;
}) {
  const imageUrl = getImageUrl(listing.category);

  // === DESKTOP VIEW (Large horizontal cards, 1 per row) ===
  if (isDesktop) {
    return (
      <div
        id={`listing-${listing.id}`}
        onClick={() => onSelect(listing.id)}
        className={`bg-white rounded-[7px] border border-[#e8edf2] transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-row h-[220px] ${isSelected
          ? 'border-[#c9a34e] shadow-[0_8px_30px_rgba(201,163,78,0.15)] ring-1 ring-[#c9a34e]/30'
          : 'hover:border-transparent hover:shadow-[0_12px_40px_rgba(15,31,61,0.08)] hover:-translate-y-0.5'
          }`}
      >
        <div className="relative flex-shrink-0 bg-[#f8fafc] w-[280px] h-full border-r border-[#e8edf2]">
          <img src={imageUrl} alt={listing.name} className="w-full h-full object-cover" />
          {/* <div className="absolute left-3 top-3 bg-[#0a162b]/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-[4px] shadow-sm">
            {listing.category}
          </div> */}
        </div>

        <div className="flex flex-col flex-1 p-6 relative">
          {/* Header Area */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <h3 className="font-extrabold text-[#0a162b] leading-tight text-[1.25rem] tracking-tight">
                {listing.name}
              </h3>
            </div>
          </div>

          {/* Data Points Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-auto">
            {(listing.investmentMin !== undefined || listing.salePrice !== undefined) && (
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-[#7a88a0] mb-0.5">Investment</span>
                <span className="text-[14px] font-bold text-[#0a162b] leading-none">
                  {listing.investmentMin !== undefined
                    ? formatRange(listing.investmentMin, listing.investmentMax!)
                    : formatInr(listing.salePrice!)}
                </span>
              </div>
            )}

            {(listing.areaMin !== undefined || listing.area !== undefined) && (
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-[#7a88a0] mb-0.5">Area Required</span>
                <span className="text-[14px] font-bold text-[#0a162b] leading-none">
                  {listing.areaMin !== undefined
                    ? `${listing.areaMin}–${listing.areaMax} sq ft`
                    : `${listing.area} sq ft`}
                </span>
              </div>
            )}
          </div>

          {/* Action Area Component */}
          <div className="absolute right-6 bottom-6 flex justify-end items-end">
            <ViewDetailsBtn
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails?.(listing.id);
              }}
              isDesktop={true}
            />
          </div>
        </div>
      </div>
    );
  }

  if (isFeatured) {
    return (
      <div
        id={`listing-${listing.id}`}
        onClick={() => onSelect(listing.id)}
        className={`relative bg-white rounded-[7px] border border-[#e8edf2] transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-row w-full ${isSelected
          ? 'shadow-[0_8px_30px_rgba(201,163,78,0.15)] ring-1 ring-[#c9a34e]/30'
          : 'hover:shadow-[0_12px_40px_rgba(15,31,61,0.08)]'
          }`}
      >
        {/* Premium Gradient Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0a162b] via-[#637089] to-[#c9a34e] z-10" />

        <div className="flex flex-col flex-1 p-4 pr-3 pt-5">
          <h3 className="font-extrabold text-[#0a162b] text-[16px] leading-tight mb-4 tracking-tight">
            {listing.name}
          </h3>


          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {(listing.investmentMin !== undefined || listing.salePrice !== undefined) && (
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#7a88a0] mb-[1.5px]">Investment</span>
                <span className="text-[12px] font-bold text-[#0a162b] leading-none">
                  {listing.investmentMin !== undefined
                    ? formatRange(listing.investmentMin, listing.investmentMax!)
                    : formatInr(listing.salePrice!)}
                </span>
              </div>
            )}
            {(listing.areaMin !== undefined || listing.area !== undefined) && (
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#7a88a0] mb-[1.5px]">Area Required</span>
                <span className="text-[12px] font-bold text-[#0a162b] leading-none">
                  {listing.areaMin !== undefined
                    ? `${listing.areaMin}–${listing.areaMax} sq ft`
                    : `${listing.area} sq ft`}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-[45%] flex-shrink-0 min-h-[140px] group">
          <img src={imageUrl} alt={listing.name} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 top-0 bg-transparent group-hover:bg-black/60 transition-colors duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); onViewDetails?.(listing.id); }}
              className="group/btn pointer-events-auto flex w-[85%] justify-center items-center gap-1.5 bg-[#0a162b]/95 border border-white/10 shadow-lg text-white rounded-[4px] py-1.5 text-[12px] font-semibold transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-[#1a3566]"
            >
              View Details
              <div className="relative w-3.5 h-3.5 flex items-center justify-center overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform group-hover/btn:-translate-x-4 group-hover/btn:opacity-0">
                  <ChevronRightIcon sx={{ fontSize: 14 }} className="text-white" />
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform translate-x-4 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                  <ArrowForwardIcon sx={{ fontSize: 14 }} className="text-white" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === MOBILE VIEW: GRID ITEM (Bento Box Half Width) ===
  return (
    <div
      id={`listing-${listing.id}`}
      onClick={() => onSelect(listing.id)}
      className={`group bg-[#fcfdff] rounded-[7px] border border-[#e8edf2] transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col h-full ${isSelected
        ? 'border-[#c9a34e] shadow-[0_6px_24px_rgba(201,163,78,0.15)] ring-1 ring-[#c9a34e]/30'
        : 'hover:border-transparent hover:shadow-[0_8px_24px_rgba(15,31,61,0.06)] hover:-translate-y-0.5'
        }`}
    >
      <div className="relative w-full h-[120px]">
        <img src={imageUrl} alt={listing.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col flex-1 p-2.5">
        <h3 className="font-extrabold text-[#0a162b] text-[15px] leading-tight tracking-tight line-clamp-1 mb-2">
          {listing.name}
        </h3>

        <div className="mt-auto pt-1 flex flex-col gap-1.5 text-[13px] mb-3">
          {listing.investmentMin !== undefined && listing.investmentMax !== undefined && (
            <div className="text-[#637089] font-medium tracking-tight">
              Investment: <span className="text-[#0a162b] font-bold ml-0.5">{formatRange(listing.investmentMin, listing.investmentMax)}</span>
            </div>
          )}
          {listing.salePrice !== undefined && (
            <div className="text-[#637089] font-medium tracking-tight">
              Sale Value: <span className="text-[#0a162b] font-bold ml-0.5">{formatInr(listing.salePrice)}</span>
            </div>
          )}
          {listing.monthlyRent !== undefined && (
            <div className="text-[#637089] font-medium tracking-tight">
              Rent: <span className="text-[#0a162b] font-bold ml-0.5">{formatInr(listing.monthlyRent)}/mo</span>
            </div>
          )}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onViewDetails?.(listing.id); }}
          className="group/btn w-full bg-[#1a3566] hover:bg-[#0a162b] transition-colors text-white rounded-[5px] py-1.5 text-[13px] font-bold flex items-center justify-between px-3"
        >
          View Details
          <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform group-hover/btn:-translate-x-4 group-hover/btn:opacity-0">
              <ChevronRightIcon sx={{ fontSize: 16 }} className="text-white" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform translate-x-4 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
              <ArrowForwardIcon sx={{ fontSize: 16 }} className="text-white" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function ListingsGrid({ listings, selectedListingId, onSelect, isDesktop, onViewDetails }: ListingsGridProps) {
  if (listings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-[#9aa5b8]">
        <LocationOnIcon sx={{ fontSize: 40, opacity: 0.3 }} />
        <p className="mt-3 text-sm font-medium">No listings found</p>
        <p className="text-xs">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-3 ${isDesktop ? 'grid-cols-1' : 'grid-cols-2 p-3'}`}>
      {listings.map((listing, index) => {
        // Bento Box applies ONLY to mobile. Featured is index 0.
        const isFeatured = !isDesktop && index === 0;
        return (
          <div key={listing.id} className={isFeatured ? 'col-span-2' : 'col-span-1'}>
            <ListingCard
              listing={listing}
              isSelected={listing.id === selectedListingId}
              onSelect={onSelect}
              isDesktop={isDesktop}
              isFeatured={isFeatured}
              onViewDetails={onViewDetails}
            />
          </div>
        );
      })}
    </div>
  );
}
