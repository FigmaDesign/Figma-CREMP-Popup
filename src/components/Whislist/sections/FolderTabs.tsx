import { useState, useRef, useEffect } from 'react';
import { Add, Close } from '@mui/icons-material';

import type { Folder } from '../types';

interface FolderTabsProps {
  folders: Folder[];
  activeFolderId: string;
  onFolderChange: (folderId: string) => void;
  onCreateFolder: (name: string) => void;
  isDesktop?: boolean;
}

export default function FolderTabs({
  folders,
  activeFolderId,
  onFolderChange,
  onCreateFolder,
  isDesktop = false,
}: FolderTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    if (!scrollRef.current) return;
    const activeTabBtn = scrollRef.current.querySelector(`button[data-folder-id="${activeFolderId}"]`);
    if (activeTabBtn) {
      activeTabBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeFolderId]);

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim());
      setNewFolderName('');
      setIsDialogOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCreateFolder();
    } else if (e.key === 'Escape') {
      setIsDialogOpen(false);
      setNewFolderName('');
    }
  };

  return (
    <div className="relative flex items-center w-full bg-white">
      <div
        ref={scrollRef}
        className={`flex items-end w-full scroll-smooth ${
          isDesktop
            ? 'overflow-hidden gap-1 px-2 pt-2'
            : 'overflow-x-auto [&::-webkit-scrollbar]:hidden px-0 pt-2'
        }`}
      >
        {folders.map((folder) => {
          const isActive = folder.id === activeFolderId;
          const activeGradId = `grad-active-${folder.id}`;

          return (
            <button
              key={folder.id}
              data-folder-id={folder.id}
              onClick={() => onFolderChange(folder.id)}
              className={`relative shrink-0 flex-1 outline-none group transition-all duration-300 bg-transparent ${
                isDesktop
                  ? 'h-[2.5rem] min-w-[7rem] max-w-[10rem]'
                  : 'h-[2rem] min-w-[5.5rem] max-w-[8rem] -ml-2 first:ml-0' // Negative margin pulls tabs together visually
              }`}
              style={{ zIndex: isActive ? 10 : 1 }}
            >
              <svg
                className="absolute inset-0 block w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 200 40"
              >
                <defs>
                  <linearGradient id={activeGradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c2a44" />
                    <stop offset="100%" stopColor="#0f1f3d" />
                  </linearGradient>
                </defs>
                <path
                  d="M 12 40 L 25 5 C 27 2 30 0 35 0 L 165 0 C 170 0 173 2 175 5 L 188 40 Z"
                  fill={isActive ? `url(#${activeGradId})` : '#f8fafc'}
                  stroke={isActive ? 'none' : '#e2e8f0'}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-300"
                />
              </svg>

              <div
                className={`relative z-10 flex items-center justify-center w-full h-full ${
                  isDesktop ? 'pb-1 gap-2 px-3' : 'pb-0.5 gap-1 px-1.5'
                }`}
              >
                <span
                  className={`font-semibold tracking-tight transition-colors duration-300 whitespace-nowrap ${
                    isDesktop ? 'text-[0.875rem]' : 'text-[0.75rem]'
                  } ${
                    isActive ? 'text-white' : 'text-[#64748b] group-hover:text-[#1c2a44]'
                  }`}
                >
                  {folder.name}
                </span>

                <span
                  className={`font-medium rounded-full ${
                    isDesktop ? 'text-[0.75rem] px-1.5 py-0.5' : 'text-[0.65rem] px-1 py-px'
                  } ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#cbd5e1] text-[#475569]'
                  }`}
                >
                  {folder.itemIds.length}
                </span>

                {isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#c9a34e] rounded-full" />
                )}
              </div>
            </button>
          );
        })}

        <button
          onClick={() => setIsDialogOpen(true)}
          className={`relative shrink-0 flex items-center justify-center outline-none transition-all duration-300 group ${
            isDesktop ? 'h-[2.5rem] gap-1 px-3' : 'h-[2rem] gap-0.5 px-2 -ml-2' // Follows the same negative margin pattern
          }`}
          style={{ zIndex: 1 }}
        >
          <svg
            className="absolute inset-0 block w-full h-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 200 40"
          >
            <path
              d="M 12 40 L 25 5 C 27 2 30 0 35 0 L 165 0 C 170 0 173 2 175 5 L 188 40 Z"
              fill="transparent"
              stroke="#cbd5e1"
              strokeWidth="1"
              strokeDasharray="4,2"
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-300 group-hover:stroke-[#94a3b8]"
            />
          </svg>

          <div className="relative z-10 flex items-center gap-1 text-[#64748b] group-hover:text-[#1c2a44]">
            <Add sx={{ fontSize: isDesktop ? '1.125rem' : '1rem' }} />
            <span
              className={`font-semibold whitespace-nowrap ${
                isDesktop ? 'text-[0.875rem]' : 'text-[0.75rem]'
              }`}
            >
              New
            </span>
          </div>
        </button>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1c2a44]">
                Create New Folder
              </h3>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  setNewFolderName('');
                }}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Close sx={{ fontSize: '1.25rem', color: '#64748b' }} />
              </button>
            </div>

            <p className="text-sm text-[#64748b] mb-4">
              Enter a name for your new wishlist folder.
            </p>

            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., High ROI Opportunities"
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1c2a44] focus:ring-2 focus:ring-[#1c2a44]/10 outline-none transition-all text-[#1c2a44] placeholder:text-[#94a3b8]"
              autoFocus
            />

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  setNewFolderName('');
                }}
                className="flex-1 px-4 py-2.5 rounded-lg border border-[#e2e8f0] text-[#64748b] font-medium hover:bg-[#f8fafc] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                disabled={!newFolderName.trim()}
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#1c2a44] text-white font-medium hover:bg-[#0f1f3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}