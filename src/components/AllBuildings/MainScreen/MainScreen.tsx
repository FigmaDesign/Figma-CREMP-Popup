import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopSection from './TopSection';
import TabNavigation from './tabNavigation';
import RetailSpaces from './retailSpaces';
import OfficeSpace from './officeSpace';
import CoWorkingSpaces from './coWorkingSpaces';

type TabType = 'retail' | 'office' | 'coworking';

const MainScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('retail');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'retail':
        return <RetailSpaces />;
      case 'office':
        return <OfficeSpace />;
      case 'coworking':
        return <CoWorkingSpaces />;
      default:
        return <RetailSpaces />;
    }
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-app, #ffffff)',
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '4px',
          '&::-webkit-scrollbar': {
            width: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--border-default, #cbd5e1)',
            borderRadius: '4px',
          },
        }}
      >
        <TopSection />

        <div className="pt-1 pb-1 px-2 flex items-center gap-2">
          <div className="w-1 h-[18px] bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h1 className="m-0 text-[1.1rem] font-extrabold text-[#1c2a44] tracking-tight">
            Active Listings
          </h1>
        </div>

        <TabNavigation selectedTab={selectedTab} onTabChange={setSelectedTab} />

        <div className="pb-3 flex flex-col gap-1">
          {renderTabContent()}
        </div>
      </Box>
    </Box>
  );
};

export default MainScreen;