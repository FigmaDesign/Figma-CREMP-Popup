import { LocationOn, TrendingUp } from '@mui/icons-material';
import type { Property } from '../Handpicked';

interface PropertyGridProps {
  properties: Property[];
  isDesktop: boolean;
}

export default function PropertyGrid({ properties, isDesktop }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-[4px]">
        <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center mb-[4px]">
          <TrendingUp sx={{ fontSize: '2rem', color: '#94a3b8' }} />
        </div>
        <p className="text-[#64748b] font-medium text-[1rem]">No properties found</p>
        <p className="text-[#94a3b8] text-[0.875rem] mt-[4px]">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-[4px] ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isDesktop={isDesktop}
        />
      ))}
    </div>
  );
}

interface PropertyCardProps {
  property: Property;
  isDesktop: boolean;
}

function PropertyCard({ property, isDesktop }: PropertyCardProps) {
  const badgeText = property.tags && property.tags.length > 0 ? property.tags[0] : property.category;

  return (
    <div className="bg-white rounded-[0.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-[#eef0f3]">
      <div className="relative">
        <div className={`w-full bg-[#f8fafc] ${isDesktop ? 'h-[12rem]' : 'h-[10.5rem]'}`}>
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>

        {badgeText && (
          <div className="absolute bottom-0 right-0 px-[8px] py-[4px] bg-[#1a2640]/95 text-white text-[0.75rem] font-medium rounded-tl-[0.25rem]">
            {badgeText}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-[4px]">
        <h3 className={`font-bold text-[#192339] m-0 mb-[4px] leading-tight ${isDesktop ? 'text-[1.4rem]' : 'text-[1.25rem]'}`}>
          {property.name}
        </h3>

        {property.investmentRange && (
          <div className="text-[#334155] mt-[4px] text-[1rem]">
            {property.investmentRange.includes('/') ? (
              <>Investment <span className="font-bold text-[#192339] text-[1.125rem]">{property.investmentRange}</span></>
            ) : (
              <span className="font-bold text-[#192339] text-[1.25rem]">{property.investmentRange}</span>
            )}
          </div>
        )}

        {property.monthlyRevenue ? (
          <div className="text-[#334155] mt-[4px] text-[1rem]">
            Earns <span className="font-bold text-[#192339]">{property.monthlyRevenue}</span>
          </div>
        ) : (
          <div className="text-[#64748b] mt-[4px] text-[0.95rem]">
            {property.tagline}
          </div>
        )}

        <div className="flex items-center gap-[4px] text-[0.85rem] text-[#64748b] mt-[4px] mb-[4px] font-medium">
          <LocationOn sx={{ fontSize: '1.1rem', color: '#dca54a' }} />
          {property.location}
        </div>

        <div className="mt-auto">
          <button className="w-full px-[4px] py-[4px] rounded-[0.25rem] bg-[#e6c475] hover:bg-[#d6b465] text-white text-[0.9rem] font-bold transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}