import React, { useState } from 'react';
import {
  SquareFoot, Straighten, Layers, Height, Explore, AspectRatio,
  DashboardCustomize, Map, Storefront, Signpost, LocalParking,
  BatteryChargingFull, Wc, FireExtinguisher, EventAvailable,
  Numbers, LocationCity, Power, WaterDrop
} from '@mui/icons-material';

type DescriptionTab = 'size' | 'facilities' | 'availability';

interface DescriptionItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const descriptionGroups = [
  {
    id: 'size',
    title: 'Size',
    items: [

      { icon: <Explore sx={{ fontSize: 14 }} />, label: 'Unit Facing', value: 'North-East' },
      { icon: <AspectRatio sx={{ fontSize: 14 }} />, label: 'Layout (L x B)', value: '40ft x 30ft' },
      { icon: <SquareFoot sx={{ fontSize: 14 }} />, label: 'Carpet Area', value: '1,200 sq.ft' },

      { icon: <Storefront sx={{ fontSize: 14 }} />, label: 'Ideal For', value: 'Office / Retail' },
      { icon: <DashboardCustomize sx={{ fontSize: 14 }} />, label: 'Corner Unit', value: 'Yes' },
      { icon: <Height sx={{ fontSize: 14 }} />, label: 'Ceiling Height', value: '14 ft' },
    ],
  },
  {
    id: 'facilities',
    title: 'Facilities',
    items: [
      { icon: <LocalParking sx={{ fontSize: 14 }} />, label: 'Designated Parking', value: 'Yes' },
      { icon: <LocalParking sx={{ fontSize: 14 }} />, label: 'No. of Parkings', value: '2 Slots' },
      { icon: <LocalParking sx={{ fontSize: 14 }} />, label: 'Visitor Parking', value: 'Available' },
      { icon: <BatteryChargingFull sx={{ fontSize: 14 }} />, label: 'Power Backup', value: '100%' },
      { icon: <Power sx={{ fontSize: 14 }} />, label: 'Power Load', value: '5kW Sanctioned' },
      { icon: <Power sx={{ fontSize: 14 }} />, label: 'Power Phase', value: '3 Phase' },
      { icon: <Wc sx={{ fontSize: 14 }} />, label: 'Washrooms', value: '2 Inside Unit' },
      { icon: <FireExtinguisher sx={{ fontSize: 14 }} />, label: 'Fire Sprinklers', value: 'Installed' },
      { icon: <FireExtinguisher sx={{ fontSize: 14 }} />, label: 'Fire Extinguisher', value: 'Available' },
      { icon: <WaterDrop sx={{ fontSize: 14 }} />, label: 'Water Conn.', value: 'Municipal' },
    ],
  },
  {
    id: 'availability',
    title: 'Availability',
    items: [
      { icon: <EventAvailable sx={{ fontSize: 14 }} />, label: 'Immediate Avail.', value: 'Yes' },
      { icon: <EventAvailable sx={{ fontSize: 14 }} />, label: 'Tentative Month', value: 'N/A' },
      { icon: <Numbers sx={{ fontSize: 14 }} />, label: 'Unit No.', value: 'A-402' },
      { icon: <Numbers sx={{ fontSize: 14 }} />, label: 'Available Units', value: '1 Unit' },
    ],
  }
];

const DescriptionCard: React.FC<{ item: DescriptionItem }> = ({ item }) => (
  <div className="flex items-center gap-1.5 p-[2px] rounded-[4px] bg-transparent hover:bg-[#f8fafc] transition-all group overflow-hidden cursor-default">
    <div className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-[#f8fafc] shrink-0 border border-[#f1f5f9] group-hover:bg-[#1c2a44] transition-all duration-200">
      {React.cloneElement(item.icon as React.ReactElement<any>, {
        className: `text-[#1c2a44] group-hover:text-white transition-colors duration-200`
      })}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-[0.55rem] font-bold text-[#1c2a44]/50 tracking-wider truncate">
        {item.label}
      </span>
      <span className="text-[0.7rem] font-bold text-[#1c2a44] truncate leading-tight">
        {item.value}
      </span>
    </div>
  </div>
);

const UnitDescription: React.FC = () => {
  const [tabValue, setTabValue] = useState<DescriptionTab>('size');
  const activeGroup = descriptionGroups.find((g) => g.id === tabValue) ?? descriptionGroups[0];

  return (
    <div className="p-[2px] w-full max-w-lg">
      <div className="bg-white rounded-[4px]  overflow-hidden flex flex-col">

        <div className="px-1 pt-1 pb-[2px] flex items-center gap-1.5 bg-white z-10 relative">
          <div className="w-1 h-4 bg-[#1c2a44] rounded-[2px]" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Unit Specifications
          </h3>
        </div>

        <div className="flex items-end w-full space-x-[-12px] px-1 pt-[2px] pb-[2px] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#ffffff] mb-1">
          {descriptionGroups.map((group, index) => {
            const isActive = group.id === tabValue;
            const activeGradId = `grad-active-${group.id}`;

            return (
              <button
                key={group.id}
                onClick={() => setTabValue(group.id as DescriptionTab)}
                style={{ zIndex: isActive ? 50 : 40 - index }}
                className="relative h-[32px] flex-1 min-w-[75px] outline-none group transition-all duration-300 bg-transparent drop-shrink-0"
              >
                <svg
                  className="absolute inset-0 block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 40"
                >
                  <defs>
                    <linearGradient id={activeGradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2A3F63" />
                      <stop offset="100%" stopColor="#1c2a44" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 40 L 20 5 C 22 2 25 0 30 0 L 170 0 C 175 0 178 2 180 5 L 200 40 Z"
                    fill={isActive ? `url(#${activeGradId})` : '#f1f5f9'}
                    className="transition-colors duration-300"
                  />
                </svg>

                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-[2px]">
                  <span
                    className={`text-[0.6rem] font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#595959] group-hover:text-[#1c2a44]'
                      }`}
                  >
                    {group.title}
                  </span>

                  <div
                    className={`h-[2px] w-5 mt-0.5 rounded-full transition-all duration-300 absolute bottom-1 ${isActive ? 'bg-[#C69C44] opacity-100' : 'bg-transparent opacity-0'
                      }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="px-1 pb-1 grid grid-cols-2 gap-x-1 gap-y-[2px] bg-white relative z-10">
          {activeGroup.items.map((item, idx) => (
            <DescriptionCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitDescription;