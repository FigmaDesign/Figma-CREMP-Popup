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
    <Box className="flex flex-col h-screen bg-[#f5f6f8] overflow-hidden font-['Outfit']">
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

          {!isMobileScreen ? (
            <>
              {activePage === 'franchise' && (
                <Box className="absolute left-1/2 -translate-x-1/2 flex bg-[#f5f6f8] border border-[#eef0f3] rounded-[10px] p-[4px] shadow-sm">
                  <Button
                    onClick={() => setViewMode('desktop')}
                    className={`px-5 py-2 min-w-0 rounded-[8px] flex items-center gap-[8px] text-[0.75rem] font-bold transition-all duration-300 ${viewMode === 'desktop'
                      ? 'bg-gradient-to-br from-[#c9a34e] to-[#b8903c] text-[#ffffff] shadow-md'
                      : 'text-[#0f1f3d] hover:bg-[#c9a34e]/10 bg-transparent'
                      }`}
                    sx={{ textTransform: 'none', fontFamily: 'Outfit' }}
                  >
                    <DesktopWindows sx={{ fontSize: 18 }} />
                    Desktop View
                  </Button>
                  <Button
                    onClick={() => setViewMode('mobile')}
                    className={`px-5 py-2 min-w-0 rounded-[8px] flex items-center gap-[8px] text-[0.75rem] font-bold transition-all duration-300 ${viewMode === 'mobile'
                      ? 'bg-gradient-to-br from-[#c9a34e] to-[#b8903c] text-[#ffffff] shadow-md'
                      : 'text-[#0f1f3d] hover:bg-[#c9a34e]/10 bg-transparent'
                      }`}
                    sx={{ textTransform: 'none', fontFamily: 'Outfit' }}
                  >
                    <Smartphone sx={{ fontSize: 18 }} />
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
                      POPUP(Dialog)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          ) : (
            <Box className="flex-1 flex justify-center px-2">
              <MainFrameNav
                activePage={activePage}
                onPageChange={setActivePage}
                activeSubPage={activeSubPage}
                onSubPageChange={setActiveSubPage}
              />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        className="flex-1 flex flex-col w-full relative overflow-y-auto"
        sx={{ height: 'calc(100vh - 64px)' }}
      >
        {activePage === 'franchise' ? (
          <Box className="flex-1 flex flex-col">
            <FranchiseProfile viewMode={viewMode} />
          </Box>
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