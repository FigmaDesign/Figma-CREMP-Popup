// ...existing code...
import { Campaign, Storefront, PlayCircleOutline, PictureAsPdf } from '@mui/icons-material';
import { Card, SectionTitle } from '../SharedUI';

export default function MediaDownloadsSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <Card>
      <SectionTitle title="Media & Downloads" icon={<Campaign fontSize="small" />} isDesktop={isDesktop} />

      <div className={`gap-[4px] overflow-x-auto snap-x snap-mandatory hide-scrollbar ${isDesktop ? 'grid grid-cols-4' : 'flex'}`}>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`shrink-0 snap-center rounded-[4px] overflow-hidden relative group cursor-pointer border border-[#d9dde3] bg-gradient-to-br from-[#eef0f3] to-[#d9dde3] ${isDesktop ? 'aspect-video w-auto' : 'aspect-video w-[75%]'}`}
          >
            <div className="absolute inset-0 bg-[#0f1f3d]/5 group-hover:bg-[#0f1f3d]/10 transition-colors" />
            <Storefront className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }} />
            <span className="absolute bottom-[6px] left-[8px] text-[9px] text-white font-semibold leading-none drop-shadow-sm">Store Image {item}</span>
          </div>
        ))}
        <div className={`shrink-0 snap-center rounded-[4px] overflow-hidden relative group cursor-pointer border border-[#1f3b73] bg-gradient-to-br from-[#0f1f3d] to-[#1f3b73] flex items-center justify-center ${isDesktop ? 'aspect-video w-auto' : 'aspect-video w-[75%]'}`}>
          <PlayCircleOutline style={{ fontSize: 28, color: '#c9a34e' }} />
          <span className="absolute bottom-[6px] left-[8px] text-[9px] text-white font-semibold leading-none">Brand Video</span>
        </div>
      </div>

      <div className={`flex gap-[8px] ${isDesktop ? 'flex-row' : 'flex-col'}`}>
        <button className={`flex items-center justify-center gap-[6px] h-[34px] px-[12px] text-[11px] font-semibold bg-[#f5f6f8] border border-[#d9dde3] rounded-[4px] hover:bg-[#eef0f3] hover:border-[#c9a34e] transition-all text-[#0f1f3d] ${isDesktop ? '' : 'w-full'}`}>
          <PictureAsPdf style={{ fontSize: 14, color: '#e3c980' }} />
          Brochure
        </button>
        <button className={`flex items-center justify-center gap-[6px] h-[34px] px-[12px] text-[11px] font-semibold bg-[#f5f6f8] border border-[#d9dde3] rounded-[4px] hover:bg-[#eef0f3] hover:border-[#c9a34e] transition-all text-[#0f1f3d] ${isDesktop ? '' : 'w-full'}`}>
          <PictureAsPdf style={{ fontSize: 14, color: '#1f3b73' }} />
          Pitch Deck
        </button>
      </div>
    </Card>
  );
}
