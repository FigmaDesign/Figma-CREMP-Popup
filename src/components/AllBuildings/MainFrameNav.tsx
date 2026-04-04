import React from 'react';
import { Select, MenuItem, FormControl, Box, Typography } from '@mui/material';

interface MainFrameNavProps {
  activePage: 'franchise' | 'mainframe';
  onPageChange: (page: 'franchise' | 'mainframe') => void;
  activeSubPage: string;
  onSubPageChange: (subPage: string) => void;
}

const MainFrameNav: React.FC<MainFrameNavProps> = ({
  activePage,
  onPageChange,
  activeSubPage,
  onSubPageChange
}) => {

  const currentValue = activePage === 'franchise' ? 'franchise' : activeSubPage;

  const handleChange = (val: string) => {
    if (val === 'franchise') {
      onPageChange('franchise');
    } else {
      onPageChange('mainframe');
      onSubPageChange(val);
    }
  };

  return (
    <Box className="flex items-center min-w-[180px] animate-in fade-in slide-in-from-top-1 duration-500">
      <FormControl size="small" fullWidth>
        <Select
          value={currentValue}
          onChange={(e) => handleChange(e.target.value as string)}
          className="bg-transparent text-[#0f1f3d] text-xs font-bold h-[36px]"
          sx={{
            borderRadius: '4px',
            fontFamily: 'Outfit, sans-serif',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(201, 163, 78, 0.4)',
              borderWidth: '1.5px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#c9a34e',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#b8903c',
              borderWidth: '2px',
            },
            '.MuiSelect-select': {
              paddingY: '6px',
              paddingX: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#0f1f3d',
              fontWeight: 800,
              fontSize: '0.8rem',
            },
            '.MuiSvgIcon-root': {
              color: '#c9a34e',
            }
          }}
        >
          <MenuItem value="franchise" className="font-['Outfit'] text-sm font-bold text-[#0f1f3d] border-b border-slate-100">
            Franchise Profile
          </MenuItem>

          <Box className="px-3 py-1.5 bg-[#f8fafc] flex items-center gap-1.5">
            <Typography className="text-[10px]  tracking-widest font-extrabold text-[#1c2a44]/40">
              All Buildings
            </Typography>
          </Box>

          <MenuItem value="main" className="font-['Outfit'] text-xs font-semibold text-[#0f1f3d] pl-6">
            1. Main Screen
          </MenuItem>
          <MenuItem value="viewAll" className="font-['Outfit'] text-xs font-semibold text-[#0f1f3d] pl-6">
            2. View All
          </MenuItem>

          <Box className="px-3 py-1.5 bg-[#f8fafc] flex items-center gap-1.5">
            <Typography className="text-[10px]  tracking-widest font-extrabold text-[#1c2a44]/40">
              Land
            </Typography>
          </Box>

          <MenuItem value="landViewAll" className="font-['Outfit'] text-xs font-semibold text-[#0f1f3d] pl-6">
            View All
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MainFrameNav;
