import React, { useState } from 'react';
import {
  Layers, DashboardCustomize, Visibility, Business, Chair, AcUnit, Lightbulb,
  MeetingRoom, BrandingWatermark, WaterDrop, Power,
  TableBar, DoorFront, GridView, Construction,
  FormatPaint, Fence, Groups, Inventory, EventSeat, Desk
} from '@mui/icons-material';

type SpecificationTab = 'readiness' | 'interiors' | 'furniture';

interface SpecificationItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const specificationGroups = [
  {
    id: 'readiness',
    title: 'Readiness',
    items: [
      { icon: <Construction sx={{ fontSize: 14 }} />, label: 'Space Condition', value: 'Warm Shell' },
      { icon: <DoorFront sx={{ fontSize: 14 }} />, label: 'Glass Facade', value: 'Yes (Branding Ok)' },
      { icon: <GridView sx={{ fontSize: 14 }} />, label: 'Flooring', value: 'Premium' },
      { icon: <FormatPaint sx={{ fontSize: 14 }} />, label: 'Walls', value: 'Painted' },
      { icon: <Power sx={{ fontSize: 14 }} />, label: 'Electricals', value: 'Fully Wired' },
      { icon: <AcUnit sx={{ fontSize: 14 }} />, label: 'HVAC (AC)', value: 'Installed' },
      { icon: <Lightbulb sx={{ fontSize: 14 }} />, label: 'Lighting', value: 'Basic' },
      { icon: <Fence sx={{ fontSize: 14 }} />, label: 'Compound Wall', value: 'Yes' },
      { icon: <WaterDrop sx={{ fontSize: 14 }} />, label: 'Water Conn.', value: 'Available' },
    ],
  },
  {
    id: 'interiors',
    title: 'Interiors',
    items: [
      { icon: <Layers sx={{ fontSize: 14 }} />, label: 'Partitions', value: 'Glass' },
      { icon: <MeetingRoom sx={{ fontSize: 14 }} />, label: 'Rooms/Partitions', value: '4 Rooms' },
      { icon: <BrandingWatermark sx={{ fontSize: 14 }} />, label: 'Ext. Branding', value: 'Space Outside' },
      { icon: <Groups sx={{ fontSize: 14 }} />, label: 'Meeting Rooms', value: '2 Rooms' },
      { icon: <Groups sx={{ fontSize: 14 }} />, label: 'Conference Room', value: '1 Room' },
      { icon: <Visibility sx={{ fontSize: 14 }} />, label: 'Reception Area', value: 'Available' },
      { icon: <BrandingWatermark sx={{ fontSize: 14 }} />, label: 'Branding Space', value: 'Inside/Outside' },
      { icon: <Layers sx={{ fontSize: 14 }} />, label: 'False Ceiling', value: 'Done' },
      { icon: <Inventory sx={{ fontSize: 14 }} />, label: 'Storage Space', value: 'Available' },
      { icon: <DashboardCustomize sx={{ fontSize: 14 }} />, label: 'Column Free', value: 'No' },
    ],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    items: [
      { icon: <TableBar sx={{ fontSize: 14 }} />, label: 'Workstations', value: '12 Desks' },
      { icon: <Chair sx={{ fontSize: 14 }} />, label: 'Chairs', value: '15 Ergonomic' },
      { icon: <Inventory sx={{ fontSize: 14 }} />, label: 'Storage', value: 'Cupboards' },
      { icon: <EventSeat sx={{ fontSize: 14 }} />, label: 'Sofa / Lounge', value: 'Provided' },
      { icon: <Desk sx={{ fontSize: 14 }} />, label: 'Reception Desk', value: 'Included' },
      { icon: <Business sx={{ fontSize: 14 }} />, label: 'Pantry Equip.', value: 'Microwave' },
      { icon: <AcUnit sx={{ fontSize: 14 }} />, label: 'Appliances', value: 'AC, Fridge, Printer' },
    ],
  }
];

const SpecificationCard: React.FC<{ item: SpecificationItem }> = ({ item }) => (
  <div className="flex items-center gap-1.5 p-1 rounded-[4px] bg-transparent hover:bg-[#f8fafc] transition-all group overflow-hidden cursor-default border border-transparent hover:border-slate-100">
    <div className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-[#f8fafc] shrink-0 group-hover:bg-[#1c2a44] transition-all duration-200">
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

const Specifications: React.FC = () => {
  const [tabValue, setTabValue] = useState<SpecificationTab>('readiness');
  const activeGroup = specificationGroups.find((g) => g.id === tabValue) ?? specificationGroups[0];

  return (
    <div className="w-full border-none">
      <div className="bg-white flex flex-col rounded-none">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 bg-white z-10 relative">
          <div className="w-1 h-4 bg-[#1c2a44] rounded-[2px]" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight ">
            Specifications
          </h3>
        </div>

        <div className="flex items-end w-full space-x-[-12px] px-2 pt-[2px] pb-[2px] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#ffffff] mb-1">
          {specificationGroups.map((group, index) => {
            const isActive = group.id === tabValue;
            const activeGradId = `grad-spec-${group.id}`;

            return (
              <button
                key={group.id}
                onClick={() => setTabValue(group.id as SpecificationTab)}
                style={{ zIndex: isActive ? 50 : 40 - index }}
                className="relative h-[32px] flex-1 min-w-[90px] outline-none group transition-all duration-300 bg-transparent drop-shrink-0"
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

        {/* Added Border properties here for the "Table" Grid */}
        <div className="px-4 pb-2 grid grid-cols-2 gap-x-2 gap-y-1 bg-white relative z-10">
          {activeGroup.items.map((item, idx) => (
            <SpecificationCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specifications;