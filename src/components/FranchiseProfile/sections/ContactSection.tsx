import React from 'react';
import { Phone, Mail, WhatsApp, SupportAgent } from '@mui/icons-material';
import { data } from '../data';

export default function ContactSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <div className="rounded-[6px] border border-[#1f3b73] overflow-hidden shadow-[0_2px_12px_rgba(15,31,61,0.18)]">
      <div className="w-full h-[3px] bg-gradient-to-r from-[#c9a34e] to-[#b8903c]" />
      <div className="bg-gradient-to-br from-[#0f1f3d] to-[#1f3b73] px-[16px] py-[12px] flex flex-col gap-[12px]">

        <div className="flex items-center gap-[6px] pb-[8px] border-b border-white/10">
          <Phone style={{ fontSize: 13, color: '#c9a34e' }} />
          <h2 className="text-white text-[12px] font-semibold m-0 leading-none">Contact Brand</h2>
        </div>

        <div className="flex items-center gap-[10px]">
          <div className="w-[36px] h-[36px] rounded-[6px] bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
            <SupportAgent style={{ fontSize: 18, color: '#c9a34e' }} />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-[13px] font-bold text-white leading-none">{data.contact.name}</span>
            <span className="text-[10px] text-white/50 leading-none font-normal">{data.contact.role}</span>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <a
            href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-[8px] h-[36px] px-[10px] bg-white/5 border border-white/10 rounded-[4px] hover:bg-white/10 transition-colors text-[11px] font-medium text-white/90"
          >
            <Phone style={{ fontSize: 13, color: '#c9a34e', flexShrink: 0 }} />
            {data.contact.phone}
          </a>
          <a
            href={`mailto:${data.contact.email}`}
            className="flex items-center gap-[8px] h-[36px] px-[10px] bg-white/5 border border-white/10 rounded-[4px] hover:bg-white/10 transition-colors text-[11px] font-medium text-white/90"
          >
            <Mail style={{ fontSize: 13, color: '#c9a34e', flexShrink: 0 }} />
            {data.contact.email}
          </a>
          <a
            href={`https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-[6px] h-[36px] px-[10px] bg-[#25D366] text-white rounded-[4px] hover:bg-[#1ebd5a] transition-colors text-[11px] font-bold"
          >
            <WhatsApp style={{ fontSize: 16 }} />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
