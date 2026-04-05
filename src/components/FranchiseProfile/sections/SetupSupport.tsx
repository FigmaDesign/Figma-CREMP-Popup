import React from 'react';
import { data } from '../data';

interface SetupSupportProps {
  isDesktop: boolean;
}

const SetupSupport: React.FC<SetupSupportProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? 'py-[1rem]' : 'px-[1rem] py-[1rem]'}>
      
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.75rem] ${
          isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'
        }`}
      >
        Setup Requirements
      </h3>

      <div className={`grid gap-[0.5rem] mb-[1.5rem] ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
        {data.outletRequirements.map((req, i) => (
          <div
            key={i}
            className="group flex items-center gap-[0.5rem] p-[0.625rem] rounded-[0.25rem] bg-[#f8fafc] border border-transparent hover:border-[#c9a34e]/40 transition-all duration-300 cursor-default"
          >
            {/* Reduced icon box size */}
            <div className="w-[2rem] h-[2rem] shrink-0 flex items-center justify-center rounded-[0.25rem] bg-white text-[#c9a34e] border border-transparent group-hover:bg-[#1c2a44] group-hover:text-white group-hover:border-[#c9a34e]/30 transition-all duration-300 [&_svg]:!w-[1.125rem] [&_svg]:!h-[1.125rem] [&_svg]:group-hover:!fill-white [&_svg]:transition-colors [&_svg]:duration-300">
              {req.icon}
            </div>
            
            <div className="min-w-0 flex-1">
              <span className="text-[0.7rem] font-medium text-[#64748b] block mb-[0.125rem] leading-none">
                {req.label}
              </span>
              {/* Removed truncate, reduced font size slightly, and set leading-tight for multi-line text */}
              <span className="text-[0.8rem] font-semibold text-[#1c2a44] leading-tight block">
                {req.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.75rem] ${
          isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'
        }`}
      >
        Brand Support
      </h3>

      <div className={`grid gap-[0.5rem] ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
        {data.support.map((sup, i) => (
          <div
            key={i}
            className="group p-[0.75rem] rounded-[0.25rem] bg-[#f8fafc] border border-transparent hover:border-[#c9a34e]/40 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-[0.5rem] mb-[0.5rem]">
              {/* Reduced icon box size */}
              <div className="w-[1.75rem] h-[1.75rem] shrink-0 flex items-center justify-center rounded-[0.25rem] bg-white text-[#c9a34e] border border-transparent group-hover:bg-[#1c2a44] group-hover:text-white group-hover:border-[#c9a34e]/30 transition-all duration-300 [&_svg]:!w-[1rem] [&_svg]:!h-[1rem] [&_svg]:group-hover:!fill-white [&_svg]:transition-colors [&_svg]:duration-300">
                {sup.icon}
              </div>
              <h4 className="text-[0.8rem] font-semibold text-[#1c2a44] m-0 leading-tight">
                {sup.category}
              </h4>
            </div>
            
            <ul className="list-none m-0 p-0 flex flex-col gap-[0.25rem]">
              {sup.items.map((item, j) => (
                <li key={j} className="text-[0.7rem] font-medium text-[#64748b] leading-snug flex items-start gap-[0.25rem]">
                  <span className="text-[#c9a34e] font-bold mt-[-0.1rem] opacity-70 group-hover:opacity-100 transition-opacity">
                    ·
                  </span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SetupSupport;