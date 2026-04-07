import { FavoriteBorder } from '@mui/icons-material';

interface EmptyStateProps {
  isDesktop: boolean;
}

export default function EmptyState({ isDesktop }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className={`rounded-full bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] flex items-center justify-center mb-6 ${
        isDesktop ? 'w-24 h-24' : 'w-20 h-20'
      }`}>
        <FavoriteBorder
          sx={{
            fontSize: isDesktop ? '3rem' : '2.5rem',
            color: '#cbd5e1'
          }}
        />
      </div>

      <h2 className={`font-bold text-[#1c2a44] mb-2 ${isDesktop ? 'text-2xl' : 'text-xl'}`}>
        Your wishlist is empty
      </h2>

      <p className={`text-[#64748b] text-center max-w-md mb-6 ${isDesktop ? 'text-base' : 'text-sm'}`}>
        Start exploring franchise opportunities and save your favorites here.
        You can organize them into custom folders for easy access.
      </p>

      <button className={`px-6 py-3 rounded-lg bg-[#1c2a44] text-white font-semibold hover:bg-[#0f1f3d] transition-colors ${
        isDesktop ? 'text-base' : 'text-sm'
      }`}>
        Explore Opportunities
      </button>
    </div>
  );
}
