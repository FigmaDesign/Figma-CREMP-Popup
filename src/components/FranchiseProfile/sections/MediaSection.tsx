import React from 'react';
import {
  PlayCircleOutline,
  PictureAsPdf,
  Photo,
  Phone,
  Email,
  WhatsApp,
  OpenInNew,
} from '@mui/icons-material';
import { data } from '../data';

interface MediaSectionProps {
  isDesktop: boolean;
}

const mediaGallery = [
  { type: 'image', label: 'Store Interior', bg: '#dce4ef' },
  { type: 'image', label: 'Signature Brew', bg: '#e8ddd0' },
  { type: 'video', label: 'Brand Story Video', bg: '#d0dae8' },
  { type: 'image', label: 'Grand Opening', bg: '#dde8d0' },
];

const downloads = [
  { label: 'Franchise Brochure', sub: 'PDF · 2.4 MB', icon: <PictureAsPdf sx={{ fontSize: '1.25rem', color: '#c9a34e' }} /> },
  { label: 'Menu Card', sub: 'PDF · 1.1 MB', icon: <PictureAsPdf sx={{ fontSize: '1.25rem', color: '#c9a34e' }} /> },
  { label: 'Brand Guidelines', sub: 'PDF · 3.8 MB', icon: <PictureAsPdf sx={{ fontSize: '1.25rem', color: '#c9a34e' }} /> },
];

const MediaSection: React.FC<MediaSectionProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? '' : 'px-[1rem] py-[1.25rem] overflow-hidden'}>

      {/* ── Brand Media ── */}
      <h3 className={`font-semibold text-[#1c2a44] m-0 mb-[0.75rem] ${isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'}`}>
        Brand Media
      </h3>

      <div className={`grid gap-[0.625rem] mb-[1.5rem] ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
        {mediaGallery.map((item, i) => (
          <div
            key={i}
            className="relative rounded-[0.25rem] overflow-hidden aspect-[4/3] flex items-end cursor-pointer group"
            style={{ background: item.bg }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              {item.type === 'video'
                ? <PlayCircleOutline sx={{ fontSize: '2.5rem', color: '#1c2a44' }} />
                : <Photo sx={{ fontSize: '2.5rem', color: '#1c2a44' }} />}
            </div>

            <div className="absolute inset-0 bg-[#0f1f3d]/0 group-hover:bg-[#0f1f3d]/30 transition-all duration-200" />

            <div className="relative w-full px-[0.625rem] py-[0.375rem] bg-[#0f1f3d]/60">
              <span className="text-[0.75rem] font-semibold text-white leading-none">{item.label}</span>
              {item.type === 'video' && (
                <PlayCircleOutline sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', ml: '0.25rem', verticalAlign: 'middle' }} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Downloads ── */}
      <div className="flex items-center justify-between mb-[0.75rem]">
        <h3 className={`font-semibold text-[#1c2a44] m-0 ${isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'}`}>
          Downloads
        </h3>
        <button className="flex items-center gap-[0.25rem] text-[0.75rem] font-semibold text-[#c9a34e] hover:text-[#b8903c] transition-colors">
          View all
          <OpenInNew sx={{ fontSize: '0.875rem' }} />
        </button>
      </div>

      {/* Changed to a 2-column grid on mobile (grid-cols-2) instead of flex horizontal scroll */}
      <div className={`grid gap-[0.625rem] mb-[1.5rem] ${isDesktop ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {downloads.map((dl, i) => (
          <div
            key={i}
            className={`flex ${isDesktop ? 'flex-row items-center gap-[0.625rem]' : 'flex-col items-start gap-[0.5rem]'} px-[0.875rem] py-[0.75rem] rounded-[0.25rem] bg-[#f8fafc] border border-[#f1f5f9] hover:border-[#c9a34e]/40 transition-colors cursor-pointer`}
          >
            <div className={`${!isDesktop ? 'bg-white p-[0.375rem] rounded-[0.25rem] border border-[#e2e8f0] shadow-sm mb-[0.25rem]' : ''}`}>
              {dl.icon}
            </div>
            <div className="min-w-0 w-full">
              <span className="text-[0.875rem] font-semibold text-[#1c2a44] block leading-tight truncate">{dl.label}</span>
              <span className="text-[0.75rem] font-medium text-[#9ca3af] truncate mt-[0.125rem] block">{dl.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Get in Touch ── */}
      <h3 className={`font-semibold text-[#1c2a44] m-0 mb-[0.75rem] ${isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'}`}>
        Get in Touch
      </h3>

      <div className={`grid gap-[0.625rem] ${isDesktop ? 'grid-cols-3' : 'grid-cols-1'}`}>
        {[
          {
            icon: <Phone sx={{ fontSize: '1.125rem', color: '#c9a34e' }} />,
            label: 'Call',
            value: data.contact.phone,
            href: `tel:${data.contact.phone.replace(/\s/g, '')}`,
          },
          {
            icon: <Email sx={{ fontSize: '1.125rem', color: '#c9a34e' }} />,
            label: 'Email',
            value: data.contact.email,
            href: `mailto:${data.contact.email}`,
          },
          {
            icon: <WhatsApp sx={{ fontSize: '1.125rem', color: '#25D366' }} />,
            label: 'WhatsApp',
            value: data.contact.whatsapp,
            href: `https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`,
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[0.625rem] px-[0.875rem] py-[0.625rem] rounded-[0.25rem] bg-[#f8fafc] border border-[#f1f5f9] hover:border-[#c9a34e]/40 transition-colors no-underline"
          >
            {item.icon}
            <div className="min-w-0">
              <span className="text-[0.75rem] font-medium text-[#9ca3af] block leading-tight">{item.label}</span>
              <span className="text-[0.875rem] font-semibold text-[#1c2a44] truncate block mt-[0.125rem]">{item.value}</span>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default MediaSection;