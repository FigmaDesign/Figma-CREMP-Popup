import FolderTabs from './FolderTabs';
import ViewToggle from './ViewToggle';
import type { Folder } from '../types';

interface WhislistHeaderProps {
  isDesktop: boolean;
  itemCount: number;
  folders: Folder[];
  activeFolderId: string;
  onFolderChange: (folderId: string) => void;
  onCreateFolder: (name: string) => void;
  viewType: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export default function WhislistHeader({
  isDesktop,
  itemCount,
  folders,
  activeFolderId,
  onFolderChange,
  onCreateFolder,
  viewType,
  onViewChange,
}: WhislistHeaderProps) {
  return (
    <div>
      <div className="w-full bg-gradient-to-br from-[#0f1f3d] via-[#1c2a44] to-[#0f1f3d] flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className={`w-full max-w-[80rem] relative ${isDesktop ? 'px-10 py-10' : 'px-4 py-6'}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className={`font-bold text-white m-0 leading-tight ${isDesktop ? 'text-[2rem]' : 'text-[1.5rem]'}`}>
                My{' '}
                <span className="text-[#c9a34e]">Wishlist</span>
                <span className="ml-3 text-sm font-normal text-white/60 vertical-middle">
                  ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white">
        <div className={isDesktop ? 'max-w-[80rem] mx-auto' : 'w-full shadow-sm'}>
          <div className={`flex ${isDesktop ? 'items-center justify-between' : 'flex-col'}`}>
            
            <div className={`overflow-hidden ${isDesktop ? 'flex-1' : 'w-full'}`}>
              <FolderTabs
                folders={folders}
                activeFolderId={activeFolderId}
                onFolderChange={onFolderChange}
                onCreateFolder={onCreateFolder}
                isDesktop={isDesktop}
              />
            </div>

            <div className={`${isDesktop ? 'px-6 py-2' : 'px-3 py-2 flex justify-end w-full'}`}>
              <ViewToggle
                viewType={viewType}
                onViewChange={onViewChange}
                isDesktop={isDesktop}
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}