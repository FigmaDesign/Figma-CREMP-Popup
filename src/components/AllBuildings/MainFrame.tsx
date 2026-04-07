import React from 'react';
import { Box } from '@mui/material';
import LeftPanel from './MainScreen/left';
import MainScreen from './MainScreen';
import { ViewAll } from './ViewAll';
import { Whislist } from '../Whislist';
import LandMainFrame from '../Land/LandMainFrame';

interface MainFrameProps {
  subPage: string;
  onSubPageChange: (page: string) => void;
  isMobile: boolean;
}

const MainFrame: React.FC<MainFrameProps> = ({ subPage, onSubPageChange, isMobile }) => {

  const renderContent = () => {
    switch (subPage) {
      case 'main':
        return <MainScreen />;
      case 'viewAll':
        return <ViewAll onBack={() => onSubPageChange('main')} />;
      case 'wishlist':
        return <Whislist viewMode={isMobile ? 'mobile' : 'desktop'} />;
      case 'landMain':
        return <LandMainFrame initialPage="main" onBack={() => onSubPageChange('landMain')} />;
      case 'landViewAll':
        return <LandMainFrame initialPage="viewAll" onBack={() => onSubPageChange('landMain')} />;
      default:
        return <MainScreen />;
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      }}
    >
      {/* LEFT NAVIGATION PANEL */}
      {!isMobile && (
        <LeftPanel activePage={subPage} onPageSelect={onSubPageChange} />
      )}

      {/* CENTER MOBILE VIEWPORT AREA */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '0px' : '20px',
          height: '100%',
          backgroundColor: '#f8fafc',
        }}
      >
        {/* THE "MOBILE PHONE" BOX */}
        <Box
          sx={{
            width: isMobile ? '100%' : 360,
            maxWidth: isMobile ? '450px' : 360,
            minWidth: isMobile ? '320px' : 360,
            height: isMobile ? '100%' : 'calc(100% - 40px)',
            maxHeight: isMobile ? '100%' : '800px',
            backgroundColor: 'var(--bg-card)',
            border: isMobile ? 'none' : '1px solid rgba(198, 156, 68, 0.25)',
            borderRadius: isMobile ? '0' : '16px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: isMobile ? 'none' : '0 32px 80px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(198, 156, 68, 0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* CONTENT WRAPPER */}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {renderContent()}
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDEBAR PANEL */}
      <Box
        sx={{
          width: '25%',
          minWidth: '240px',
          borderLeft: '1px solid rgba(198, 156, 68, 0.12)',
          backgroundColor: 'transparent',
          display: { xs: 'none', lg: 'block' },
        }}
      />
    </Box>
  );
};

export default MainFrame;