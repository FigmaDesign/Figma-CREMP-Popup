import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { DetailSection } from '../data';

const InfoRow: React.FC<{ label: string; value: string; isLast: boolean }> = ({ label, value, isLast }) => {
  return (
    <>
      <div className="flex justify-between items-center py-1 px-1 group">
        <span className="text-[0.65rem] text-[#1c2a44]/70 font-medium tracking-wide transition-colors group-hover:text-[#1c2a44]">
          {label}
        </span>
        
        <div className="flex items-center gap-1 max-w-[65%] justify-end">
          <span className="text-[0.7rem] text-[#1c2a44] font-bold text-right leading-tight">
            {value}
          </span>
        </div>
      </div>
      
      {!isLast && (
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#1c2a44]/10 to-transparent" />
      )}
    </>
  );
};

const InfoSection: React.FC<DetailSection> = ({ title, icon, rows }) => {
  const isLocationTitle = title.toLowerCase().includes('location') || title.toLowerCase().includes('address');
  const finalIcon = icon || (isLocationTitle ? <LocationOnIcon sx={{ fontSize: 16, color: '#D4AF37' }} /> : null);

  return (
    <div className="mb-1 flex flex-col gap-1">
      <div className="flex items-center gap-1.5 px-1 mb-[2px]">
        {finalIcon && (
          <div className="text-[#1c2a44] flex items-center justify-center">
            {finalIcon}
          </div>
        )}
        <h3 className="text-[0.75rem] font-bold text-[#1c2a44] tracking-wide m-0">
          {title}
        </h3>
      </div>
      
      <div className="bg-white rounded-md p-1 border border-[#1c2a44]/5 shadow-sm shadow-[#1c2a44]/5">
        {rows.map((row, index) => (
          <InfoRow key={row.label} label={row.label} value={row.value} isLast={index === rows.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;