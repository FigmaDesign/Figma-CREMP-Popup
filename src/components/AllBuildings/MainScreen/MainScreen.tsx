import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopSection from './topsection';
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
        backgroundColor: '#f9fafb',
      }}
    >
      {/* Scrollable content */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: 3 },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.12)',
            borderRadius: 4,
          },
        }}
      >
        {/* Top Section: Hero + Title + Stats */}
        <TopSection />

        {/* Tab Navigation */}
        <TabNavigation selectedTab={selectedTab} onTabChange={setSelectedTab} />

        {/* Tab Content */}
        <Box sx={{ pb: 3 }}>
          {renderTabContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default MainScreen;
