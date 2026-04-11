import { useState } from 'react';
import type { listings as ListingsType } from '../data';

interface MapSectionProps {
  listings: typeof ListingsType;
  selectedListingId: string | null;
  onPinClick: (id: string) => void;
  isDesktop: boolean;
}

// Map bounds for Kukatpally/Ameerpet area, Hyderabad
const MAP_BOUNDS = {
  minLat: 17.42,
  maxLat: 17.49,
  minLng: 78.35,
  maxLng: 78.48,
};

function latLngToPercent(lat: number, lng: number) {
  const x = ((lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) * 100;
  const y = ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100;
  return { x, y };
}

// Static map pins data for cluster pins and individual feature pins
const staticPins = [
  { id: 'cluster1', label: '14 Opportunities', lat: 17.443, lng: 78.412, type: 'cluster' as const },
  { id: 'cluster2', label: '6 Opportunities', lat: 17.450, lng: 78.455, type: 'cluster' as const },
];

const mapLabels = [
  { label: 'Kukkapally', lat: 17.485, lng: 78.405 },
  { label: 'Ameerpet', lat: 17.437, lng: 78.437 },
  { label: 'Hitech City', lat: 17.46, lng: 78.37 },
];

const PIN_COLORS = {
  blue: { bg: '#1a3566', text: 'white' },
  gold: { bg: '#c9a34e', text: 'white' },
  cluster: { bg: '#c9a34e', text: 'white' },
};

export default function MapSection({ listings, selectedListingId, onPinClick, isDesktop }: MapSectionProps) {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ minHeight: isDesktop ? '100%' : '240px' }}>
      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full bg-[#f0f2f5]" />

      {/* Map Labels */}
      {mapLabels.map((lbl) => {
        const pos = latLngToPercent(lbl.lat, lbl.lng);
        return (
          <div
            key={lbl.label}
            className="absolute pointer-events-none text-[11px] font-semibold text-[#4a5568] tracking-wide"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            {lbl.label}
          </div>
        );
      })}

      {/* Cluster Pins */}
      {staticPins.map((pin) => {
        const pos = latLngToPercent(pin.lat, pin.lng);
        return (
          <div
            key={pin.id}
            className="absolute flex flex-col items-center"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -100%)' }}
          >
            <div
              className="px-3 py-1 rounded-[5px] text-white text-xs font-bold shadow-md whitespace-nowrap"
              style={{ background: '#c9a34e' }}
            >
              [{pin.label}]
            </div>
            <div className="w-0 h-0" style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #c9a34e' }} />
          </div>
        );
      })}

      {/* Listing Pins */}
      {listings.map((listing) => {
        const pos = latLngToPercent(listing.lat, listing.lng);
        const color = PIN_COLORS[listing.pinColor];
        const isSelected = listing.id === selectedListingId;
        const isHovered = listing.id === hoveredPin;

        // Label to show
        let label = listing.name.split(' ').slice(0, 3).join(' ');
        if (listing.type === 'running-business' && listing.salePrice) {
          label = `Runner: ₹ ${Math.round(listing.salePrice / 100000)} L`;
        }

        return (
          <div
            key={listing.id}
            className={`absolute flex flex-col items-center cursor-pointer transition-transform ${isSelected || isHovered ? 'scale-110 z-30' : 'z-20'
              }`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: `translate(-50%, -100%) scale(${isSelected || isHovered ? 1.1 : 1})` }}
            onMouseEnter={() => setHoveredPin(listing.id)}
            onMouseLeave={() => setHoveredPin(null)}
            onClick={() => onPinClick(listing.id)}
          >
            {/* Label badge */}
            <div
              className={`px-2.5 py-1 rounded-[5px] text-xs font-bold shadow-md whitespace-nowrap mb-0.5 transition-all ${isSelected ? 'ring-2 ring-white ring-offset-1' : ''
                }`}
              style={{ background: color.bg, color: color.text }}
            >
              {label}
            </div>
            {/* Pin drop */}
            <div
              className="w-0 h-0"
              style={{
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: `7px solid ${color.bg}`,
              }}
            />
            {/* Dot */}
            <div
              className="rounded-full mt-0.5 shadow"
              style={{ width: 8, height: 8, background: color.bg }}
            />
          </div>
        );
      })}

      {/* Map attribution overlay bottom */}
      <div className="absolute bottom-2 right-2 bg-white/80 rounded px-1.5 py-0.5 text-[9px] text-[#9aa5b8] pointer-events-none">
        Map data © OpenStreetMap
      </div>
    </div>
  );
}
