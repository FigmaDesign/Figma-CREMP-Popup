import React from 'react';
import { Language, Groups } from '@mui/icons-material';
import { data } from '../data';
import { Card, SectionTitle, LabelValueRow } from '../SharedUI';

export default function TerritoryNetworkSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <>
      <Card>
        <SectionTitle title="Territory" icon={<Language fontSize="small" />} isDesktop={isDesktop} />
        <div className="flex flex-col gap-0">
          {[
            { label: 'Cities', value: data.territoryAvailability.cities },
            { label: 'Regions', value: data.territoryAvailability.regions },
            { label: 'Exclusive', value: data.territoryAvailability.exclusive },
          ].map((row, i) => (
            <LabelValueRow key={i} label={row.label} value={row.value} />
          ))}
        </div>
        <div className="bg-[#f5f6f8] border border-[#eef0f3] rounded-[4px] px-[12px] py-[8px] flex flex-col gap-[4px]">
          <span className="text-[10px] text-[#6b7280] font-semibold leading-none">Expansion Plans</span>
          <span className="text-[#0f1f3d] text-[12px] font-medium leading-[1.4]">{data.territoryAvailability.expansionPlans}</span>
        </div>
      </Card>

      <Card>
        <SectionTitle title="Existing Network" icon={<Groups fontSize="small" />} isDesktop={isDesktop} />
        <div className="grid grid-cols-2 gap-[4px]">
          <div className="flex flex-col items-center justify-center gap-[4px] py-[10px] px-[8px] bg-[#f5f6f8] rounded-[4px] border border-[#eef0f3]">
            <span className="text-[22px] font-bold text-[#0f1f3d] leading-none">{data.existingNetwork.totalUnits}</span>
            <span className="text-[9px] text-[#6b7280] font-semibold leading-none">Total Units</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[4px] py-[10px] px-[8px] rounded-[4px] border border-[#e3c980]/40 bg-gradient-to-br from-[#fdfaf3] to-[#f5f6f8]">
            <span className="text-[22px] font-bold text-[#c9a34e] leading-none">{data.existingNetwork.franchiseUnits}</span>
            <span className="text-[9px] text-[#6b7280] font-semibold leading-none">Franchise</span>
          </div>
        </div>
      </Card>
    </>
  );
}
