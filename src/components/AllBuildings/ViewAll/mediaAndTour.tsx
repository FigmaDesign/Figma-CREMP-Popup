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
    <div className="p-[2px] w-full max-w-lg">
      <div className="bg-white rounded-[4px] p-1 flex flex-col">

        {/* Header */}
        <div className="px-1 pt-1 pb-[2px] flex items-center gap-1.5">
          <div className="w-1 h-4 bg-[#1c2a44] rounded-[2px]" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Media & Tours
          </h3>
        </div>

        {/* Main Featured Image / Video */}
        <div className="relative w-full h-[180px] rounded-[4px] border border-[#1c2a44]/10 overflow-hidden mb-1 mt-1">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Media Preview"
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 bg-[#0f1a2c]/40 flex items-center justify-center transition-colors hover:bg-[#0f1a2c]/30 group cursor-pointer">
            <PlayCircleFilledIcon
              sx={{
                fontSize: 48,
                color: '#C69C44',
                filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.3))',
              }}
              className="group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="flex gap-1 p-[2px] w-full">
          {thumbnails.map((thumb, idx) => (
            <div
              key={idx}
              // Updated to full width dynamically sharing the space
              className="relative w-full flex-1 h-[56px] rounded-[4px] border border-[#C69C44]/30 overflow-hidden cursor-pointer hover:border-[#C69C44] transition-colors duration-200"
            >
              <img
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover block"
              />
              {idx === thumbnails.length - 1 && (
                <div className="absolute inset-0 bg-[#0f1a2c]/85 flex items-center justify-center rounded-[4px]">
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