import React from 'react';
import { data } from '../data';

interface SetupSupportProps {
  isDesktop: boolean;
}

const SetupSupport: React.FC<SetupSupportProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? '' : 'px-4 py-5'}>
      {/* Setup Requirements */}
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-4 ${
          isDesktop ? 'text-[1rem]' : 'text-[0.95rem]'
        }`}
      >
        Setup Requirements
      </h3>

      <div className={`grid gap-2 mb-6 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {data.outletRequirements.map((req, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-3 py-2.5 rounded bg-[#f8fafc] border border-[#f1f5f9]"
          >
            <span className="text-[#c9a34e] flex items-center shrink-0">{req.icon}</span>
            <div className="min-w-0 flex-1">
              <span className="text-[0.68rem] font-medium text-[#6b7280] block">{req.label}</span>
              <span className="text-[0.8rem] font-semibold text-[#1c2a44] leading-snug">
                {req.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Support */}
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-4 ${
          isDesktop ? 'text-[1rem]' : 'text-[0.95rem]'
        }`}
      >
        Brand Support
      </h3>

      <div className={`grid gap-3 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {data.support.map((sup, i) => (
          <div
            key={i}
            className="p-3 rounded border border-[#f1f5f9] bg-white border-l-2 border-l-[#c9a34e]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#c9a34e] flex items-center">{sup.icon}</span>
              <h4 className="text-[0.875rem] font-semibold text-[#1c2a44] m-0">
                {sup.category}
              </h4>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {sup.items.map((item, j) => (
                <li key={j} className="text-[0.78rem] font-medium text-[#6b7280] leading-snug">
                  · {item}
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