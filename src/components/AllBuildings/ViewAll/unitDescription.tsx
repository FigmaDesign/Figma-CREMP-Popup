import React, { useState } from 'react';
import {
  SquareFoot, Height, Explore, AspectRatio,
  DashboardCustomize, Storefront, LocalParking,
  BatteryChargingFull, Wc, FireExtinguisher, EventAvailable,
  Numbers, Power, WaterDrop
} from '@mui/icons-material';
import PremiumTabs from '../../ui/PremiumTabs';

type DescriptionTab = 'size' | 'facilities' | 'availability';

interface DescriptionItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const descriptionGroups = [
  {
    id: 'size' as DescriptionTab,
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
    id: 'facilities' as DescriptionTab,
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
    id: 'availability' as DescriptionTab,
    title: 'Availability',
    items: [
      { icon: <EventAvailable sx={{ fontSize: 14 }} />, label: 'Immediate Avail.', value: 'Yes' },
      { icon: <EventAvailable sx={{ fontSize: 14 }} />, label: 'Tentative Month', value: 'N/A' },
      { icon: <Numbers sx={{ fontSize: 14 }} />, label: 'Unit No.', value: 'A-402' },
      { icon: <Numbers sx={{ fontSize: 14 }} />, label: 'Available Units', value: '1 Unit' },
    ],
  },
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

  const tabs = descriptionGroups.map((g) => ({ label: g.title, value: g.id }));

  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none overflow-hidden flex flex-col">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 bg-white z-10 relative">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Unit Details
          </h3>
        </div>

        <PremiumTabs
          tabs={tabs}
          value={tabValue}
          onChange={(v) => setTabValue(v as DescriptionTab)}
          className="px-2 mb-1"
        />

        <div className="px-4 pb-1 grid grid-cols-2 gap-x-2 gap-y-[6px] bg-white relative z-10">
          {activeGroup.items.map((item, idx) => (
            <DescriptionCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitDescription;