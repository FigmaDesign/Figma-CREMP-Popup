import React, { useState } from 'react';
import {
  Layers, DashboardCustomize, Visibility, Business, Chair, AcUnit, Lightbulb,
  MeetingRoom, BrandingWatermark, WaterDrop, Power,
  TableBar, DoorFront, GridView, Construction,
  FormatPaint, Fence, Groups, Inventory, EventSeat, Desk
} from '@mui/icons-material';
import PremiumTabs from '../../ui/PremiumTabs';

type SpecificationTab = 'readiness' | 'interiors' | 'furniture';

interface SpecificationItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const specificationGroups = [
  {
    id: 'readiness' as SpecificationTab,
    title: 'Readiness',
    items: [
      { icon: <Construction sx={{ fontSize: 16 }} />, label: 'Space Condition', value: 'Warm Shell' },
      { icon: <DoorFront sx={{ fontSize: 16 }} />, label: 'Glass Facade', value: 'Yes (Branding Ok)' },
      { icon: <GridView sx={{ fontSize: 16 }} />, label: 'Flooring', value: 'Premium' },
      { icon: <FormatPaint sx={{ fontSize: 16 }} />, label: 'Walls', value: 'Painted' },
      { icon: <Power sx={{ fontSize: 16 }} />, label: 'Electricals', value: 'Fully Wired' },
      { icon: <AcUnit sx={{ fontSize: 16 }} />, label: 'HVAC (AC)', value: 'Installed' },
      { icon: <Lightbulb sx={{ fontSize: 16 }} />, label: 'Lighting', value: 'Basic' },
      { icon: <Fence sx={{ fontSize: 16 }} />, label: 'Compound Wall', value: 'Yes' },
      { icon: <WaterDrop sx={{ fontSize: 16 }} />, label: 'Water Conn.', value: 'Available' },
    ],
  },
  {
    id: 'interiors' as SpecificationTab,
    title: 'Interiors',
    items: [
      { icon: <Layers sx={{ fontSize: 16 }} />, label: 'Partitions', value: 'Glass' },
      { icon: <MeetingRoom sx={{ fontSize: 16 }} />, label: 'Rooms/Partitions', value: '4 Rooms' },
      { icon: <BrandingWatermark sx={{ fontSize: 16 }} />, label: 'Ext. Branding', value: 'Space Outside' },
      { icon: <Groups sx={{ fontSize: 16 }} />, label: 'Meeting Rooms', value: '2 Rooms' },
      { icon: <Groups sx={{ fontSize: 16 }} />, label: 'Conference Room', value: '1 Room' },
      { icon: <Visibility sx={{ fontSize: 16 }} />, label: 'Reception Area', value: 'Available' },
      { icon: <BrandingWatermark sx={{ fontSize: 16 }} />, label: 'Branding Space', value: 'Inside/Outside' },
      { icon: <Layers sx={{ fontSize: 16 }} />, label: 'False Ceiling', value: 'Done' },
      { icon: <Inventory sx={{ fontSize: 16 }} />, label: 'Storage Space', value: 'Available' },
      { icon: <DashboardCustomize sx={{ fontSize: 16 }} />, label: 'Column Free', value: 'No' },
    ],
  },
  {
    id: 'furniture' as SpecificationTab,
    title: 'Furniture',
    items: [
      { icon: <TableBar sx={{ fontSize: 16 }} />, label: 'Workstations', value: '12 Desks' },
      { icon: <Chair sx={{ fontSize: 16 }} />, label: 'Chairs', value: '15 Ergonomic' },
      { icon: <Inventory sx={{ fontSize: 16 }} />, label: 'Storage', value: 'Cupboards' },
      { icon: <EventSeat sx={{ fontSize: 16 }} />, label: 'Sofa / Lounge', value: 'Provided' },
      { icon: <Desk sx={{ fontSize: 16 }} />, label: 'Reception Desk', value: 'Included' },
      { icon: <Business sx={{ fontSize: 16 }} />, label: 'Pantry Equip.', value: 'Microwave' },
      { icon: <AcUnit sx={{ fontSize: 16 }} />, label: 'Appliances', value: 'AC, Fridge, Printer' },
    ],
  },
];

const SpecificationCard: React.FC<{ item: SpecificationItem }> = ({ item }) => (
  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#1c2a44]/20 hover:shadow-sm transition-all duration-200 group">
    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-[#e2e8f0] shrink-0 group-hover:bg-[#1c2a44] group-hover:border-[#1c2a44] transition-all duration-200">
      {React.cloneElement(item.icon as React.ReactElement<any>, {
        className: `text-[#1c2a44] group-hover:text-white transition-colors duration-200`
      })}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-[0.6rem] font-semibold text-[#6b7280] tracking-wide uppercase truncate">
        {item.label}
      </span>
      <span className="text-[0.75rem] font-bold text-[#1c2a44] truncate leading-tight">
        {item.value}
      </span>
    </div>
  </div>
);

const Specifications: React.FC = () => {
  const [tabValue, setTabValue] = useState<SpecificationTab>('readiness');
  const activeGroup = specificationGroups.find((g) => g.id === tabValue) ?? specificationGroups[0];

  const tabs = specificationGroups.map((g) => ({ label: g.title, value: g.id }));

  return (
    <div className="w-full border-none">
      <div className="bg-white flex flex-col rounded-none">

        <div className="px-4 pt-2 pb-2 flex items-center gap-2 bg-white z-10 relative">
          <div className="w-1 h-5 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded-full" />
          <h3 className="text-[0.9rem] font-extrabold text-[#1c2a44] tracking-tight">
            Specifications
          </h3>
        </div>

        <PremiumTabs
          tabs={tabs}
          value={tabValue}
          onChange={(v) => setTabValue(v as SpecificationTab)}
          className="px-3 mb-2"
        />

        <div className="px-4 pb-3 grid grid-cols-2 gap-2 bg-white relative z-10">
          {activeGroup.items.map((item, idx) => (
            <SpecificationCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
