import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const thumbnails = [
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=200&q=80',
];

const LandMedia: React.FC = () => {
  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none flex flex-col gap-2 pb-3">

        <div className="px-4 pt-2 flex items-center gap-1.5">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Media &amp; Documents
          </h3>
        </div>

        <div className="relative h-[180px] mx-4 rounded-[6px] border border-[#1c2a44]/10 overflow-hidden cursor-pointer group">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
            alt="Land Plot Media Preview"
            className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-[#0f1a2c]/30 transition-colors duration-300">
            <PlayCircleFilledIcon
              sx={{
                fontSize: 48,
                color: '#C69C44',
                filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.3))',
              }}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex gap-2 w-full px-4">
          {thumbnails.map((thumb, idx) => (
            <div
              key={idx}
              className="relative flex-1 h-[56px] rounded-[4px] border border-[#C69C44]/30 overflow-hidden cursor-pointer hover:border-[#C69C44] transition-colors duration-200 group"
            >
              <img
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-110"
              />
              {idx === thumbnails.length - 1 && (
                <div className="absolute inset-0 bg-[#0f1a2c]/85 flex items-center justify-center">
                  <span className="text-[#C69C44] text-[0.65rem] font-bold">
                    +8 More
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LandMedia;