import { LocationOn, TrendingUp, AccessTime, DeleteOutline, Star } from '@mui/icons-material';
import type { WishlistItem } from '../types';

interface WishlistGridProps {
  items: WishlistItem[];
  isDesktop?: boolean;
  onRemove: (id: string) => void;
}

export default function WishlistGrid({ items, isDesktop, onRemove }: WishlistGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center mb-4">
          <TrendingUp sx={{ fontSize: '2rem', color: '#94a3b8' }} />
        </div>
        <p className="text-[#64748b] font-medium text-base">No items in this folder</p>
        <p className="text-[#94a3b8] text-sm mt-1">Add items to your wishlist to see them here</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-4 ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
      {items.map((item) => (
        <WishlistCard
          key={item.id}
          item={item}
          isDesktop={isDesktop}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

interface WishlistCardProps {
  item: WishlistItem;
  isDesktop?: boolean;
  onRemove: (id: string) => void;
}

function WishlistCard({ item, isDesktop, onRemove }: WishlistCardProps) {
  const primaryTag = item.tags[0] || item.category;
  const secondaryTags = item.tags.filter(tag => tag !== primaryTag);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-[#eef0f3] group">
      <div className="relative">
        <div className={`w-full bg-[#f8fafc] ${isDesktop ? 'h-[12rem]' : 'h-[8rem]'}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 right-0 px-2 py-1 bg-[#1a2640]/95 text-white text-xs font-medium rounded-tl">
          {primaryTag}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-3">
        <h3 className={`font-bold text-[#192339] leading-tight mb-1 line-clamp-1 ${
          isDesktop ? 'text-base' : 'text-sm'
        }`}>
          {item.name}
        </h3>

        <p className={`text-[#64748b] line-clamp-1 mb-2 ${isDesktop ? 'text-sm' : 'text-xs'}`}>
          {item.tagline}
        </p>

        <div className="flex items-center gap-1 mb-3">
          <Star sx={{ fontSize: '0.875rem', color: '#c9a34e' }} />
          <span className={`font-semibold text-[#192339] ${isDesktop ? 'text-sm' : 'text-xs'}`}>
            {item.rating}
          </span>
          <span className={`text-[#94a3b8] ${isDesktop ? 'text-sm' : 'text-xs'}`}>
            ({item.reviews} reviews)
          </span>
        </div>

        {item.investmentRange && (
          <div className={`text-[#334155] mb-2 ${isDesktop ? 'text-sm' : 'text-xs'}`}>
            <span className="text-[#94a3b8]">Investment: </span>
            <span className="font-bold text-[#192339]">{item.investmentRange}</span>
          </div>
        )}

        {item.roi && (
          <div className={`text-[#334155] mb-2 ${isDesktop ? 'text-sm' : 'text-xs'}`}>
            <span className="text-[#94a3b8]">ROI: </span>
            <span className="font-bold text-green-600">{item.roi}</span>
          </div>
        )}

        {item.monthlyRevenue && (
          <div className={`text-[#334155] mb-2 ${isDesktop ? 'text-sm' : 'text-xs'}`}>
            <span className="text-[#94a3b8]">Monthly: </span>
            <span className="font-bold text-[#192339]">{item.monthlyRevenue}</span>
          </div>
        )}

        {item.paybackPeriod && (
          <div className={`flex items-center gap-1 text-[#64748b] mb-2 ${isDesktop ? 'text-xs' : 'text-[0.625rem]'}`}>
            <AccessTime sx={{ fontSize: '0.875rem', color: '#dca54a' }} />
            <span>Payback: {item.paybackPeriod}</span>
          </div>
        )}

        <div className={`flex items-center gap-1 text-[#64748b] mb-3 ${isDesktop ? 'text-xs' : 'text-[0.625rem]'}`}>
          <LocationOn sx={{ fontSize: '0.875rem', color: '#dca54a' }} />
          <span className="line-clamp-1">{item.location}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3 mt-auto">
          {secondaryTags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-[#f1f5f9] text-[#64748b] text-[0.625rem] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-[#eef0f3]">
          <button className="flex-1 px-3 py-2 rounded bg-[#e6c475] hover:bg-[#d6b465] text-white text-sm font-bold transition-colors">
            View Details
          </button>
          
          <button
            onClick={() => onRemove(item.id)}
            className="p-1.5 rounded-full text-red-600 hover:bg-red-50 transition-colors shrink-0"
            title="Remove from wishlist"
          >
            <DeleteOutline sx={{ fontSize: '1.25rem' }} />
          </button>
        </div>
      </div>
    </div>
  );
}