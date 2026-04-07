import { GridView, ViewList } from '@mui/icons-material';

interface ViewToggleProps {
  viewType: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  isDesktop?: boolean;
}

export default function ViewToggle({ viewType, onViewChange, isDesktop }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-[#f1f5f9] rounded-lg">
      <button
        onClick={() => onViewChange('grid')}
        className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ${
          viewType === 'grid'
            ? 'bg-white text-[#1c2a44] shadow-sm'
            : 'text-[#64748b] hover:text-[#1c2a44]'
        }`}
        title="Grid view"
      >
        <GridView sx={{ fontSize: isDesktop ? '1.125rem' : '1rem' }} />
        {isDesktop && (
          <span className="font-medium text-sm">
            Grid
          </span>
        )}
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ${
          viewType === 'list'
            ? 'bg-white text-[#1c2a44] shadow-sm'
            : 'text-[#64748b] hover:text-[#1c2a44]'
        }`}
        title="List view"
      >
        <ViewList sx={{ fontSize: isDesktop ? '1.125rem' : '1rem' }} />
        {isDesktop && (
          <span className="font-medium text-sm">
            List
          </span>
        )}
      </button>
    </div>
  );
}
