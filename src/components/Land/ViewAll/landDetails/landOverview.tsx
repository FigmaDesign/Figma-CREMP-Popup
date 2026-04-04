import React, { useState } from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import StraightenIcon from '@mui/icons-material/Straighten';
import FormatShapesIcon from '@mui/icons-material/FormatShapes';
import TerrainIcon from '@mui/icons-material/Terrain';
import WaterIcon from '@mui/icons-material/Water';
import PowerIcon from '@mui/icons-material/Power';
import PremiumTabs from '../../../ui/PremiumTabs';

type OverviewTab = 'plotInfo' | 'utilities' | 'surroundings';

interface OverviewItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface OverviewGroup {
  id: OverviewTab;
  title: string;
  items: OverviewItem[];
}

const overviewGroups: OverviewGroup[] = [
  {
    id: 'plotInfo',
    title: 'Plot Info',
    items: [
      { icon: <SquareFootIcon sx={{ fontSize: 14 }} />, label: 'Total Area', value: '2.5 Acres' },
      { icon: <StraightenIcon sx={{ fontSize: 14 }} />, label: 'Dimensions', value: '200 x 545 ft' },
      { icon: <FormatShapesIcon sx={{ fontSize: 14 }} />, label: 'Shape', value: 'Rectangular' },
      { icon: <TerrainIcon sx={{ fontSize: 14 }} />, label: 'Topography', value: 'Level Plain' },
    ],
  },
  {
    id: 'utilities',
    title: 'Utilities',
    items: [
      { icon: <WaterIcon sx={{ fontSize: 14 }} />, label: 'Water', value: 'Available' },
      { icon: <PowerIcon sx={{ fontSize: 14 }} />, label: 'Electricity', value: 'Available' },
      { icon: <TerrainIcon sx={{ fontSize: 14 }} />, label: 'Road Access', value: 'Paved' },
      { icon: <StraightenIcon sx={{ fontSize: 14 }} />, label: 'Frontage', value: '200 ft' },
    ],
  },
  {
    id: 'surroundings',
    title: 'Surroundings',
    items: [
      { icon: <TerrainIcon sx={{ fontSize: 14 }} />, label: 'Neighborhood', value: 'Developing' },
      { icon: <StraightenIcon sx={{ fontSize: 14 }} />, label: 'Distance to City', value: '8 km' },
      { icon: <FormatShapesIcon sx={{ fontSize: 14 }} />, label: 'Near Highway', value: 'Yes' },
      { icon: <TerrainIcon sx={{ fontSize: 14 }} />, label: 'Public Transport', value: 'Nearby' },
    ],
  },
];

const OverviewCard: React.FC<{ item: OverviewItem }> = ({ item }) => (
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

const LandOverview: React.FC = () => {
  const [tabValue, setTabValue] = useState<OverviewTab>('plotInfo');
  const activeGroup = overviewGroups.find((g) => g.id === tabValue) ?? overviewGroups[0];

  const tabs = overviewGroups.map((g) => ({ label: g.title, value: g.id }));

  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none overflow-hidden flex flex-col">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 bg-white z-10 relative">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Plot Overview
          </h3>
        </div>

        <PremiumTabs
          tabs={tabs}
          value={tabValue}
          onChange={(v) => setTabValue(v as OverviewTab)}
          className="px-2 mb-1"
        />

        <div className="px-4 pb-1 grid grid-cols-2 gap-x-2 gap-y-[6px] bg-white relative z-10">
          {activeGroup.items.map((item, idx) => (
            <OverviewCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandOverview;
