import React from 'react';
import { Box, Typography } from '@mui/material';

const MainFrame: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {/* LEFT PAGES PANEL */}
      <Box
        sx={{
          width: '25%',
          p: 3,
        }}
      >
        <Typography variant="h6">Pages</Typography>

        <Typography sx={{ mt: 2 }}>All buildings</Typography>
        <Typography variant="body2">1. Main screen</Typography>
        <Typography variant="body2">2. View All</Typography>

        <Typography sx={{ mt: 3 }}>Land</Typography>
        <Typography variant="body2">1. Main screen</Typography>
        <Typography variant="body2">2. View All</Typography>
      </Box>

      {/* MOBILE FRAME (CENTER) */}
      <Box
        sx={{
          width: 360,
          height: '100%',
          backgroundColor: '#FFFFFF',
          border: '1px solid #222',
          borderRadius: '2px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          mx: 'auto',
        }}
      >
        <Box sx={{ p: 2 }}>Main Frame</Box>
      </Box>

      {/* RIGHT EMPTY PANEL */}
      <Box
        sx={{
          width: '25%',
        }}
      />
    </Box>
  );
};

export default MainFrame;
