import React from 'react';
import { Storefront, CheckCircle, Language, Instagram, LinkedIn } from '@mui/icons-material';
import { data } from '../data';

interface FranchiseHeaderProps {
  isDesktop: boolean;
}

const FranchiseHeader: React.FC<FranchiseHeaderProps> = ({ isDesktop }) => {
  return (
    <div className="w-full bg-[#0f1f3d] flex justify-center">
      <div className={`w-full max-w-[80rem] ${isDesktop ? 'px-10 pt-4 pb-3' : 'px-2 pt-2 pb-2'}`}>
        <div className="flex items-start gap-2">

          {/* Logo box */}
          <div
            className={`shrink-0 rounded border border-white/20 bg-white/10 flex items-center justify-center ${
              isDesktop ? 'w-10 h-10' : 'w-9 h-9'
            }`}
          >
            <Storefront sx={{ fontSize: isDesktop ? '1.375rem' : '1.25rem', color: '#c9a34e' }} />
          </div>

          {/* Brand info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h1
                className={`font-semibold text-white m-0 leading-tight ${
                  isDesktop ? 'text-[1.25rem]' : 'text-[1.125rem]'
                }`}
              >
                {data.basicInfo.brandName}
              </h1>
              <CheckCircle sx={{ fontSize: '0.9rem', color: '#c9a34e', flexShrink: 0 }} />
            </div>

            <p className="text-[0.875rem] text-white/65 m-0 mt-0.5 leading-snug font-medium">
              {data.basicInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-1 mt-1">
              {[data.basicInfo.category, data.basicInfo.subcategory, data.basicInfo.microCategory].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[0.7rem] font-semibold text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop: right-aligned meta + socials */}
          {isDesktop && (
            <div className="flex flex-col items-end gap-2 shrink-0">
              <div className="flex items-center gap-3">
                {[
                  { icon: <Language sx={{ fontSize: '1rem' }} />, href: data.basicInfo.website ? `https://${data.basicInfo.website}` : '#' },
                  { icon: <Instagram sx={{ fontSize: '1rem' }} />, href: '#' },
                  { icon: <LinkedIn sx={{ fontSize: '1rem' }} />, href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="text-white/55 hover:text-[#c9a34e] transition-colors" target="_blank" rel="noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
              <span className="text-[0.72rem] text-white/45 font-medium">
                Est. {data.basicInfo.establishedYear} · {data.basicInfo.headquarters}
              </span>
            </div>
          )}
        </div>

        {/* Mobile: meta + socials row */}
        {!isDesktop && (
          <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/10">
            <span className="text-[0.7rem] text-white/45 font-medium">
              Est. {data.basicInfo.establishedYear} · {data.basicInfo.headquarters}
            </span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Language sx={{ fontSize: '0.9rem' }} />, href: '#' },
                { icon: <Instagram sx={{ fontSize: '0.9rem' }} />, href: '#' },
                { icon: <LinkedIn sx={{ fontSize: '0.9rem' }} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="text-white/55 hover:text-[#c9a34e] transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FranchiseHeader;