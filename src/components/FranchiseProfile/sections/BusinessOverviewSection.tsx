import React from 'react';
import { AssignmentTurnedIn, CheckCircle } from '@mui/icons-material';
import { data } from '../data';
import { Card, SectionTitle } from '../SharedUI';

export default function BusinessOverviewSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <Card>
      <SectionTitle title="Business Overview" icon={<AssignmentTurnedIn fontSize="small" />} isDesktop={isDesktop} />

      <p className="text-[#4b5563] text-[12px] font-normal leading-[1.6] m-0">
        {data.businessOverview.description}
      </p>

      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[11px] font-semibold text-[#0f1f3d] m-0 leading-none">Unique Selling Points</h3>
        <ul className="flex flex-col gap-[6px] m-0 p-0 list-none">
          {data.businessOverview.usps.map((usp, i) => (
            <li key={i} className="flex items-start gap-[8px]">
              <CheckCircle style={{ fontSize: 13, color: '#c9a34e', marginTop: 2, flexShrink: 0 }} />
              <span className="text-[12px] text-[#4b5563] font-normal leading-[1.5]">{usp}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[6px]">
        <h3 className="text-[11px] font-semibold text-[#0f1f3d] m-0 leading-none">Business Model</h3>
        <div className="bg-[#f5f6f8] border border-[#eef0f3] rounded-[4px] px-[12px] py-[8px] text-[12px] font-normal text-[#1f3b73] leading-[1.5]">
          {data.businessOverview.modelSummary}
        </div>
      </div>
    </Card>
  );
}
