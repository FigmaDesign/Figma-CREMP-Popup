import { LocationOn, AccessTime, DeleteOutline, Star } from '@mui/icons-material';
import type { WishlistItem } from '../types';

interface WishlistListProps {
  items: WishlistItem[];
  isDesktop?: boolean;
  onRemove: (id: string) => void;
}

export default function WishlistList({ items, isDesktop, onRemove }: WishlistListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center mb-4">
          <Star sx={{ fontSize: '2rem', color: '#94a3b8' }} />
        </div>
        <p className="text-[#64748b] font-medium text-base">No items in this folder</p>
        <p className="text-[#94a3b8] text-sm mt-1">Add items to your wishlist to see them here</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${isDesktop ? 'gap-3' : 'gap-2'}`}>
      {items.map((item) => (
        <WishlistListItem
          key={item.id}
          item={item}
          isDesktop={isDesktop}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

interface WishlistListItemProps {
  item: WishlistItem;
  isDesktop?: boolean;
  onRemove: (id: string) => void;
}

function WishlistListItem({ item, isDesktop, onRemove }: WishlistListItemProps) {
  const primaryTag = item.tags[0] || item.category;
  const secondaryTags = item.tags.filter(tag => tag !== primaryTag);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex border border-[#eef0f3] group">
      <div className={`relative shrink-0 overflow-hidden bg-[#f8fafc] ${isDesktop ? 'w-[16rem] min-h-[12rem]' : 'w-[6.5rem] min-h-[6.5rem]'}`}>
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {isDesktop && (
          <div className="absolute bottom-0 right-0 px-2 py-1 bg-[#1a2640]/95 text-white text-xs font-medium rounded-tl">
            {primaryTag}
          </div>
        )}
      </div>

      <div className={`flex-1 flex flex-col ${isDesktop ? 'p-3' : 'p-2'}`}>
        <div className={`flex items-start justify-between ${isDesktop ? 'gap-3' : 'gap-1'}`}>
          <div className="flex-1 min-w-0">
            <div className={`flex items-center gap-2 ${isDesktop ? 'mb-1' : 'mb-0.5'}`}>
              <h3 className={`font-bold text-[#192339] leading-tight truncate ${
                isDesktop ? 'text-lg' : 'text-[0.85rem]'
              }`}>
                {item.name}
              </h3>
            </div>

            <p className={`text-[#64748b] truncate ${isDesktop ? 'text-sm mb-2' : 'text-[0.7rem] mb-1'}`}>
              {item.tagline}
            </p>

            <div className={`flex items-center gap-1 ${isDesktop ? 'mb-2' : 'mb-1'}`}>
              <Star sx={{ fontSize: isDesktop ? '0.875rem' : '0.75rem', color: '#c9a34e' }} />
              <span className={`font-semibold text-[#192339] ${isDesktop ? 'text-sm' : 'text-[0.7rem]'}`}>
                {item.rating}
              </span>
              <span className={`text-[#94a3b8] ${isDesktop ? 'text-sm' : 'text-[0.7rem]'}`}>
                ({item.reviews} reviews)
              </span>
            </div>

            {!isDesktop && (
              <div className="flex flex-wrap gap-1 mb-1.5">
                {secondaryTags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 bg-[#f1f5f9] text-[#64748b] text-[0.6rem] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={`flex flex-wrap items-center mt-auto border-t border-[#eef0f3] ${
          isDesktop ? 'gap-4 pt-3 text-sm' : 'gap-x-3 gap-y-1 pt-1.5 text-[0.65rem]'
        }`}>
          {item.investmentRange && (
            <div className="flex items-center gap-1">
              <span className="text-[#94a3b8]">Investment:</span>
              <span className="font-semibold text-[#192339]">{item.investmentRange}</span>
            </div>
          )}

          {item.roi && (
            <div className="flex items-center gap-1">
              <span className="text-[#94a3b8]">ROI:</span>
              <span className="font-semibold text-green-600">{item.roi}</span>
            </div>
          )}

          {item.monthlyRevenue && (
            <div className="flex items-center gap-1">
              <span className="text-[#94a3b8]">Monthly:</span>
              <span className="font-semibold text-[#192339]">{item.monthlyRevenue}</span>
            </div>
          )}

          {item.paybackPeriod && (
            <div className="flex items-center gap-1">
              <AccessTime sx={{ fontSize: isDesktop ? '0.875rem' : '0.7rem', color: '#dca54a' }} />
              <span className="text-[#64748b]">{item.paybackPeriod}</span>
            </div>
          )}

          <div className={`flex items-center gap-1 ml-auto ${isDesktop ? '' : 'w-full mt-0.5'}`}>
            <LocationOn sx={{ fontSize: isDesktop ? '0.875rem' : '0.7rem', color: '#dca54a' }} />
            <span className="text-[#64748b] truncate">{item.location}</span>
          </div>
        </div>

        {isDesktop && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#eef0f3]">
            <div className="flex flex-wrap gap-2">
              {secondaryTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#f1f5f9] text-[#64748b] text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button className="px-6 py-2 rounded bg-[#e6c475] hover:bg-[#d6b465] text-white text-sm font-bold transition-colors">
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
        )}

        {!isDesktop && (
          <div className="mt-2 flex items-center gap-2">
            <button className="flex-1 px-3 py-1.5 rounded bg-[#e6c475] hover:bg-[#d6b465] text-white text-[0.75rem] font-bold transition-colors">
              View Details
            </button>
            <button
              onClick={() => onRemove(item.id)}
              className="p-1 rounded-full text-red-600 hover:bg-red-50 transition-colors shrink-0"
              title="Remove from wishlist"
            >
              <DeleteOutline sx={{ fontSize: '1.1rem' }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}