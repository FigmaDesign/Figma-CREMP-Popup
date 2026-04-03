import { useState } from 'react';
import FranchiseProfile from '@/components/FranchiseProfile/FranchiseProfile';
import MainFrame from '@/components/AllBuildings/MainFrame';
import { DesktopWindows, Smartphone } from '@mui/icons-material';

function App() {
  const [activePage, setActivePage] = useState<'franchise' | 'mainframe'>('franchise');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const isDesktop = viewMode === 'desktop';

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f6f3] overflow-x-hidden">
      <header className="bg-white border-b border-[#eceae6] px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#181c32] rounded-[4px] flex items-center justify-center text-[#c5a059] font-bold text-xl leading-none">
            C
          </div>
          <h1 className="text-[#181c32] font-bold text-lg hidden sm:block">CREMP Workspace</h1>
        </div>

        {/* View Toggle - ONLY visible when franchise profile is active */}
        {activePage === 'franchise' && (
          <div className="hidden lg:flex bg-white border border-[#eceae6] rounded-[8px] p-[2px] shadow-sm">
            <button 
              onClick={() => setViewMode('desktop')} 
              className={`px-3 py-1.5 rounded-[4px] flex items-center gap-1.5 text-[12px] font-bold transition-colors ${isDesktop ? 'bg-[#181c32] text-[#c5a059]' : 'text-[#7a7a7a] hover:bg-[#f7f6f3]'}`}
            >
              <DesktopWindows style={{ fontSize: 16 }} /> Desktop View
            </button>
            <button 
              onClick={() => setViewMode('mobile')} 
              className={`px-3 py-1.5 rounded-[4px] flex items-center gap-1.5 text-[12px] font-bold transition-colors ${!isDesktop ? 'bg-[#181c32] text-[#c5a059]' : 'text-[#7a7a7a] hover:bg-[#f7f6f3]'}`}
            >
              <Smartphone style={{ fontSize: 16 }} /> Mobile View
            </button>
          </div>
        )}
        
        <div className="flex items-center gap-3">
          <label htmlFor="page-select" className="text-sm font-semibold text-[#7a7a7a] hidden sm:block uppercase tracking-wider text-[11px]">
            Current View
          </label>
          <select 
            id="page-select"
            value={activePage}
            onChange={(e) => setActivePage(e.target.value as 'franchise' | 'mainframe')}
            className="bg-[#fcfaf5] border border-[#e8dfc8] text-[#181c32] text-sm rounded-[4px] px-3 py-2 outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all cursor-pointer font-semibold shadow-sm"
          >
            <option value="franchise">Franchise Profile</option>
            <option value="mainframe">Main Frame (All Buildings)</option>
          </select>
        </div>
      </header>

      <main className="flex-1">
        {activePage === 'franchise' ? <FranchiseProfile viewMode={viewMode} /> : <MainFrame />}
      </main>
    </div>
  );
}

export default App;
