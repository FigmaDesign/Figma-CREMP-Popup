import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SpecTabNavigation from './specifications/tabNavigation';
import type { SpecTab } from './specifications/tabNavigation';
import Readiness from './specifications/readiness';
import Furnishing from './specifications/furnishing';
import Interiors from './specifications/interiors';

const Specifications: React.FC = () => {
  const [activeSpecTab, setActiveSpecTab] = useState<SpecTab>('readiness');

  const renderSpecContent = () => {
    switch (activeSpecTab) {
      case 'readiness':
        return <Readiness />;
      case 'furnishing':
        return <Furnishing />;
      case 'interiors':
        return <Interiors />;
      default:
        return <Readiness />;
    }
  };

  return (
    <Box 
      sx={{ 
        padding: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}
    >
      <Box
        sx={{
          padding: '4px',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            marginBottom: '4px',
            paddingLeft: '4px',
          }}
        >
          Specifications
        </Typography>

        <SpecTabNavigation 
          activeTab={activeSpecTab} 
          onTabChange={setActiveSpecTab} 
        />

        <Box 
          sx={{ 
            marginTop: '4px',
            transition: 'all 150ms ease-in-out'
          }}
        >
          {renderSpecContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Specifications;