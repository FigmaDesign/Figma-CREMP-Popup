import React from 'react';
import { Storefront, CheckCircle, Language, Instagram, LinkedIn } from '@mui/icons-material';
import { data } from '../data';
import { Card, Pill } from '../SharedUI';

export default function HeaderSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <>
      <Card>
        <div className="flex items-start gap-[12px]">
          <div className={`shrink-0 rounded-[6px] border border-[#d9dde3] flex items-center justify-center bg-gradient-to-br from-[#f5f6f8] to-[#eef0f3] ${isDesktop ? 'w-[64px] h-[64px]' : 'w-[52px] h-[52px]'}`}>
            <Storefront style={{ fontSize: isDesktop ? 28 : 22, color: '#c9a34e' }} />
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
            <div className="flex items-center gap-[6px]">
              <h1 className={`font-bold text-[#0f1f3d] m-0 leading-none truncate ${isDesktop ? 'text-[20px]' : 'text-[18px]'}`}>
                {data.basicInfo.brandName}
              </h1>
              <CheckCircle style={{ fontSize: 14, color: '#1f3b73', flexShrink: 0 }} />
            </div>
            <p className="text-[#6b7280] text-[12px] font-normal m-0 leading-snug">
              {data.basicInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-[4px] mt-[4px]">
              {[data.basicInfo.category, data.basicInfo.subcategory, data.basicInfo.microCategory].map(t => (
                <Pill key={t} text={t} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[4px] text-[11px] text-[#6b7280] font-normal">
          <span>Est. {data.basicInfo.establishedYear}</span>
          <span className="text-[#d9dde3]">·</span>
          <span>{data.basicInfo.headquarters}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[4px]">
          {[
            { icon: <Language style={{ fontSize: 13 }} />, label: data.basicInfo.website },
            { icon: <Instagram style={{ fontSize: 13 }} />, label: data.basicInfo.socialLinks.instagram },
            { icon: <LinkedIn style={{ fontSize: 13 }} />, label: data.basicInfo.socialLinks.linkedin },
          ].map((item, i) => (
            <a key={i} href="#" className="flex items-center gap-[4px] text-[#c9a34e] text-[11px] font-medium hover:text-[#b8903c] transition-colors leading-none">
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </Card>

      <div className="flex flex-wrap gap-[4px]">
        {data.conceptTags.map((tag, idx) => (
          <div key={idx} className="inline-flex items-center gap-[4px] bg-white border border-[#d9dde3] rounded-[4px] px-[8px] h-[26px] text-[11px] font-semibold text-[#0f1f3d] shadow-[0_1px_2px_rgba(15,31,61,0.05)]">
            <span className="w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#c9a34e] to-[#b8903c] shrink-0" />
            {tag}
          </div>
        ))}
      </div>
    </>
  );
}
