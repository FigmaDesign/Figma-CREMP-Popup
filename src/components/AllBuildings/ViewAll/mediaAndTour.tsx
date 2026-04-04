import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const thumbnails = [
  'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80',
];

const MediaAndTour: React.FC = () => {
  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none flex flex-col gap-2 pb-3">

        <div className="px-4 pt-2 flex items-center gap-1.5">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight ">
            Media & Tours
          </h3>
        </div>

        <div className="relative h-[180px] mx-4 rounded-[6px] border border-[#1c2a44]/10 overflow-hidden cursor-pointer group">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Media Preview"
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
                    +12 More
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

export default MediaAndTour;