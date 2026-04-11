import React from 'react';
import { Select, MenuItem, FormControl, Box, Typography } from '@mui/material';

interface MainFrameNavProps {
  activePage: 'franchise' | 'handpicked' | 'mainframe' | 'wishlist';
  onPageChange: (page: 'franchise' | 'handpicked' | 'mainframe' | 'wishlist') => void;
  activeSubPage: string;
  onSubPageChange: (subPage: string) => void;
}

const MainFrameNav: React.FC<MainFrameNavProps> = ({
  onPageChange,
  activeSubPage,
  onSubPageChange
}) => {

  const handleChange = (val: string) => {
    if (val === 'wishlist') {
      // Navigate to the top-level wishlist page
      onPageChange('wishlist');
      onSubPageChange('wishlist');
    } else {
      // Stay within the mainframe popup views
      onPageChange('mainframe');
      onSubPageChange(val);
    }
  };

  // Helper for rendering the selected value cleanly in the collapsed state
  const getCurrentViewLabel = (val: string) => {
    switch (val) {
      case 'main': return '1. Main Screen';
      case 'viewAll': return '2. View All';
      case 'wishlist': return '3. Wishlist';
      case 'landViewAll': return 'Land: View All';
      default: return '1. Main Screen';
    }
  };

  return (
    <Box className="flex items-center min-w-[160px] animate-in fade-in slide-in-from-top-1 duration-500">
      <FormControl size="small" fullWidth>
        <Select
          value={activeSubPage}
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
          renderValue={(selected) => (
            <span className="truncate">
              {getCurrentViewLabel(selected)}
            </span>
          )}
        >
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
          <MenuItem value="wishlist" className="font-['Outfit'] text-xs font-semibold text-[#0f1f3d] pl-6">
            3. Wishlist
          </MenuItem>

          <Box className="px-3 py-1.5 bg-[#f8fafc] flex items-center gap-1.5 border-t border-slate-100 mt-1">
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