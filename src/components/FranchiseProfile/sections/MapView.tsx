import React, { useState, useRef } from 'react';
import { ComposableMap, Marker } from 'react-simple-maps';
import { data } from '../data';

interface MapViewProps {
  isDesktop: boolean;
}

interface TooltipState {
  city: string;
  outlets: number;
  x: number;
  y: number;
}

const MapLegend: React.FC = () => (
  <div className="flex items-center gap-5 px-0.5">
    <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-[#c9a34e] shrink-0" />
      <span className="text-[0.7rem] text-[#6b7280] font-medium">Active Franchise</span>
    </div>
    <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-[#94a3b8] shrink-0" />
      <span className="text-[0.7rem] text-[#6b7280] font-medium">Expanding Soon</span>
    </div>
  </div>
);

const MapView: React.FC<MapViewProps> = ({ isDesktop }) => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<SVGCircleElement>,
    city: string,
    outlets: number
  ) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({
      city,
      outlets,
      x: e.clientX - rect.left + 10,
      y: e.clientY - rect.top - 42,
    });
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
    setHoveredCity(null);
  };

  const handleTouchStart = (
    e: React.TouchEvent<SVGCircleElement>,
    city: string,
    outlets: number
  ) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({
      city,
      outlets,
      x: touch.clientX - rect.left + 10,
      y: touch.clientY - rect.top - 42,
    });
    setHoveredCity(city);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setTooltip(null);
      setHoveredCity(null);
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-2">
      {!isDesktop && <MapLegend />}

      <div
        ref={containerRef}
        className={`relative bg-[#f8fafc] rounded border border-[#e2e8f0] overflow-hidden ${
          isDesktop ? 'h-[20rem]' : 'h-[15rem]'
        }`}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1050, center: [82.5, 23] }}
          width={800}
          height={860}
          style={{ width: '100%', height: '100%' }}
        >
          {data.mapLocations.map(loc => {
            const isHovered = hoveredCity === loc.city;
            const radius = loc.outlets >= 6 ? 7 : loc.outlets >= 3 ? 6 : 5;
            return (
              <Marker key={loc.city} coordinates={[loc.lng, loc.lat]}>
                <circle
                  r={isHovered ? radius * 1.25 : radius}
                  fill={loc.active ? '#c9a34e' : '#94a3b8'}
                  stroke="white"
                  strokeWidth={1.5}
                  opacity={isHovered ? 1 : 0.82}
                  style={{
                    cursor: 'pointer',
                    transition: 'r 0.2s ease, opacity 0.2s ease',
                    filter: isHovered
                      ? 'drop-shadow(0 0 4px rgba(201,163,78,0.55))'
                      : 'none',
                  }}
                  onMouseEnter={e => handleMouseEnter(e, loc.city, loc.outlets)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={e => handleTouchStart(e, loc.city, loc.outlets)}
                  onTouchEnd={handleTouchEnd}
                />
              </Marker>
            );
          })}
        </ComposableMap>

        {tooltip && (
          <div
            style={{ left: tooltip.x, top: tooltip.y }}
            className="absolute z-50 bg-white rounded border border-[#e2e8f0] shadow-md px-2.5 py-2 pointer-events-none"
          >
            <div className="text-[0.75rem] font-semibold text-[#1c2a44] leading-none">
              {tooltip.city}
            </div>
            {tooltip.outlets > 0 && (
              <div className="text-[0.7rem] text-[#6b7280] mt-0.5">
                {tooltip.outlets} outlet{tooltip.outlets !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        )}
      </div>

      {isDesktop && <MapLegend />}
    </div>
  );
};

export default MapView;