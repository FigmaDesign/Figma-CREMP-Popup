import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  isDesktop: boolean;
}

export default function SearchBar({ value, onChange, isDesktop }: SearchBarProps) {
  return (
    <div className={`relative flex-1 ${isDesktop ? 'max-w-[400px]' : ''}`}>
      <SearchIcon
        sx={{ fontSize: 18, color: '#637089' }}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search area, locality…"
        className={`w-full bg-white border border-[#d9dde3] rounded-[5px] pl-9 pr-3 font-['Outfit'] text-[#0f1f3d] placeholder:text-[#9aa5b8] focus:outline-none focus:border-[#c9a34e] transition-colors ${
          isDesktop ? 'py-[9px] text-sm' : 'py-[7px] text-xs'
        }`}
      />
    </div>
  );
}
