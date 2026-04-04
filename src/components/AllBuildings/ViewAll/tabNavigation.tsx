import React from 'react';
import PremiumTabs, { type PremiumTabOption } from '../../ui/PremiumTabs';

export type ViewAllTab = 'unitDetails' | 'media' | 'specs' | 'suited';

interface TabNavigationProps {
  activeTab: ViewAllTab;
  onTabChange: (tab: ViewAllTab) => void;
}

const tabs: PremiumTabOption<ViewAllTab>[] = [
  { value: 'unitDetails', label: 'Details' },
  { value: 'media', label: 'Media' },
  { value: 'specs', label: 'Specs' },
  { value: 'suited', label: 'Suited' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full bg-[#f8fafc] border-b border-[#1c2a44]/10">
      <PremiumTabs 
        tabs={tabs} 
        value={activeTab} 
        onChange={onTabChange} 
        className="max-w-md mx-auto" // Optional: limits width on larger screens for better tap targets
      />
    </div>
  );
};

export default TabNavigation;