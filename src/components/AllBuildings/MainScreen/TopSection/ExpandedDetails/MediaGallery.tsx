import React from 'react';
import { mediaThumbs } from '../data';

const MediaGallery: React.FC = () => {
  return (
    <div className="mb-1">
      <div className="relative w-full h-[240px] rounded-[4px] overflow-hidden mb-1 shadow-lg shadow-[#1c2a44]/15 cursor-pointer group">
        <img
          src={mediaThumbs.mainVideo}
          alt="Main Video"
          className="w-full h-full object-cover block transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c2a44]/80 via-[#1c2a44]/20 to-[#1c2a44]/30 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500 ease-out">
            <div
              className="w-0 h-0 ml-1.5"
              style={{
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: '14px solid rgba(255, 255, 255, 0.95)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1 overflow-hidden">
        {mediaThumbs.images.slice(0, 4).map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-[4px] overflow-hidden cursor-pointer shadow-sm shadow-[#1c2a44]/10 group bg-gray-100"
          >
            <img
              src={src}
              alt={`Image ${i + 1}`}
              className="w-full h-full object-cover block transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {i !== 3 && (
              <div className="absolute inset-0 bg-[#1c2a44]/0 group-hover:bg-[#1c2a44]/20 transition-colors duration-500" />
            )}
            {i === 3 && (
              <div className="absolute inset-0 bg-[#1c2a44]/70 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-[#1c2a44]/85 transition-all duration-500">
                <span className="text-[#D4AF37] text-[0.75rem] font-medium ">
                  +14 More
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;