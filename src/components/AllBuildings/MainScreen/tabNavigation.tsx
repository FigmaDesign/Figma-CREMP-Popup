import React from 'react';
import { Box } from '@mui/material';
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
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%' }}>
        <PremiumTabs
          tabs={premiumTabOptions}
          value={selectedTab}
          onChange={onTabChange}
        />
      </Box>
    </Box>
  );
};

export default TabNavigation;