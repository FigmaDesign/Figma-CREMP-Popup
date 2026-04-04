import { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, AppBar, Toolbar, Button, useMediaQuery, useTheme } from '@mui/material';
import { DesktopWindows, Smartphone } from '@mui/icons-material';
import FranchiseProfile from '@/components/FranchiseProfile/FranchiseProfile';
import MainFrame from '@/components/AllBuildings/MainFrame';
import MainFrameNav from '@/components/AllBuildings/MainFrameNav';

export default function App() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [activePage, setActivePage] = useState<'franchise' | 'mainframe'>('franchise');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeSubPage, setActiveSubPage] = useState<string>('main');
  const isMobile = isMobileScreen || viewMode === 'mobile';

  return (
    <Box className="min-h-screen flex flex-col bg-[#f5f6f8] overflow-x-hidden font-['Outfit']">
      <AppBar
        position="sticky"
        elevation={0}
        className="bg-[#ffffff] border-b border-[#eef0f3] z-50 shadow-[0px_4px_20px_rgba(15,31,61,0.02)]"
      >
        <Toolbar className="justify-between px-6 py-3 min-h-[64px]">
          <Box className="flex items-center gap-[4px]">
            <Box className="w-8 h-8 rounded-[4px] bg-gradient-to-br from-[#0f1f3d] to-[#1f3b73] flex items-center justify-center text-[#e3c980] font-bold text-xl leading-none shadow-sm">
              C
            </Box>
            <Typography variant="h6" className="text-[#0f1f3d] font-bold text-lg hidden sm:block ml-2 tracking-tight">
              CREMP Workspace
            </Typography>
          </Box>

          {isMobile ? (
            <Box className="flex-1 flex justify-center px-2">
              <MainFrameNav 
                activePage={activePage}
                onPageChange={setActivePage}
                activeSubPage={activeSubPage}
                onSubPageChange={setActiveSubPage}
              />
            </Box>
          ) : (
            <>
              {activePage === 'franchise' && (
                <Box className="flex bg-[#f5f6f8] border border-[#eef0f3] rounded-[6px] p-[2px] ml-4">
                  <Button
                    onClick={() => setViewMode('desktop')}
                    className={`px-4 py-1.5 min-w-0 rounded-[4px] flex items-center gap-[4px] text-xs font-semibold transition-all duration-300 ${viewMode === 'desktop'
                        ? 'bg-gradient-to-br from-[#c9a34e] to-[#b8903c] text-[#ffffff] shadow-[0px_2px_8px_rgba(201,163,78,0.25)]'
                        : 'text-[#637089] hover:bg-[#eef0f3] hover:text-[#0f1f3d] bg-transparent'
                      }`}
                  >
                    <DesktopWindows sx={{ fontSize: 16 }} />
                    Desktop View
                  </Button>
                  <Button
                    onClick={() => setViewMode('mobile')}
                    className={`px-4 py-1.5 min-w-0 rounded-[4px] flex items-center gap-[4px] text-xs font-semibold transition-all duration-300 ${(viewMode as string) === 'mobile'
                        ? 'bg-gradient-to-br from-[#c9a34e] to-[#b8903c] text-[#ffffff] shadow-[0px_2px_8px_rgba(201,163,78,0.25)]'
                        : 'text-[#637089] hover:bg-[#eef0f3] hover:text-[#0f1f3d] bg-transparent'
                      }`}
                  >
                    <Smartphone sx={{ fontSize: 16 }} />
                    Mobile View
                  </Button>
                </Box>
              )}

              <Box className="flex items-center gap-[4px] ml-auto">
                <Typography className="text-[11px] font-semibold text-[#637089] hidden sm:block tracking-widest mr-2">
                  Current View
                </Typography>
                <FormControl size="small">
                  <Select
                    value={activePage}
                    onChange={(e) => setActivePage(e.target.value as 'franchise' | 'mainframe')}
                    className="bg-[#ffffff] text-[#0f1f3d] text-sm font-semibold h-[36px]"
                    sx={{
                      borderRadius: '4px',
                      fontFamily: 'Outfit, sans-serif',
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#eef0f3',
                        borderWidth: '1px',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c9a34e',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#b8903c',
                        borderWidth: '1px',
                      },
                      '.MuiSelect-select': {
                        paddingY: '6px',
                        paddingX: '14px',
                      },
                    }}
                  >
                    <MenuItem value="franchise" className="font-['Outfit'] text-sm font-medium text-[#0f1f3d]">
                      Franchise Profile
                    </MenuItem>
                    <MenuItem value="mainframe" className="font-['Outfit'] text-sm font-medium text-[#0f1f3d]">
                      Main Frame (All Buildings)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" className="flex-1 flex flex-col w-full relative">
        {activePage === 'franchise' ? (
          <FranchiseProfile viewMode={viewMode} />
        ) : (
          <MainFrame 
            subPage={activeSubPage} 
            onSubPageChange={setActiveSubPage} 
            isMobile={isMobile}
          />
        )}
      </Box>
    </Box>
  );
}