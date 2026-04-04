import React from 'react';
import PremiumTabs, { type PremiumTabOption } from '../../ui/PremiumTabs';

type TabType = 'retail' | 'office' | 'coworking';

interface TabNavigationProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const premiumTabOptions: PremiumTabOption<TabType>[] = [
  { label: 'Retail', value: 'retail' },
  { label: 'Office', value: 'office' },
  { label: 'Co-working', value: 'coworking' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ selectedTab, onTabChange }) => {
  return (
    <div className="w-full flex flex-col">
      <PremiumTabs
        tabs={premiumTabOptions}
        value={selectedTab}
        onChange={onTabChange}
        className="shadow-none drop-shadow-none" 
      />
    </div>
  );
};

export default TabNavigation;