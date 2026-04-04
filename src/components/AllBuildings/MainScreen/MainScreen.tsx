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
        backgroundColor: 'var(--bg-app)',
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
            backgroundColor: 'var(--border-default)',
            borderRadius: '4px',
          },
        }}
      >
        <TopSection />
        
        <TabNavigation selectedTab={selectedTab} onTabChange={setSelectedTab} />
        
        <Box 
          sx={{ 
            paddingBottom: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {renderTabContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default MainScreen;