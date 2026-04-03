// ...existing code...
import { Handshake } from '@mui/icons-material';
import { data } from '../data';
import { Card, SectionTitle } from '../SharedUI';

export default function SupportRequirementsSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <Card>
      <SectionTitle title="Support & Requirements" icon={<Handshake fontSize="small" />} isDesktop={isDesktop} />

      <div className={`grid gap-[16px] ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[11px] font-semibold text-[#0f1f3d] m-0 leading-none pb-[6px] border-b border-[#eef0f3]">Outlet Requirements</h3>
          <div className="flex flex-col gap-[4px]">
            {data.outletRequirements.map((req, i) => (
              <div key={i} className="flex items-center gap-[8px] px-[10px] py-[7px] bg-[#f5f6f8] rounded-[4px] border border-[#eef0f3]">
                <div className="w-[24px] h-[24px] shrink-0 rounded-[4px] bg-white border border-[#d9dde3] flex items-center justify-center text-[#c9a34e]">
                  {req.icon}
                </div>
                <span className="text-[11px] text-[#6b7280] font-normal flex-1">{req.label}</span>
                <span className="text-[11px] text-[#0f1f3d] font-semibold shrink-0">{req.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[11px] font-semibold text-[#0f1f3d] m-0 leading-none pb-[6px] border-b border-[#eef0f3]">Brand Support</h3>
          <div className="flex flex-col gap-[4px]">
            {data.support.map((sup, i) => (
              <div key={i} className="px-[10px] py-[8px] border border-[#eef0f3] rounded-[4px] bg-white flex flex-col gap-[4px]">
                <div className="flex items-center gap-[6px] leading-none">
                  <span className="text-[#c9a34e] flex items-center" style={{ fontSize: 14 }}>{sup.icon}</span>
                  <span className="text-[11px] font-semibold text-[#0f1f3d]">{sup.category}</span>
                </div>
                <p className="text-[10px] text-[#6b7280] m-0 leading-[1.5] pl-[20px]">
                  {sup.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Card>
  );
}
