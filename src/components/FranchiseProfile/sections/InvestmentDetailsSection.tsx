import React from 'react';
import { AccountBalanceWallet, TrendingUp } from '@mui/icons-material';
import { data } from '../data';
import { Card, SectionTitle, LabelValueRow } from '../SharedUI';

export default function InvestmentDetailsSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <>
      <Card>
        <div className="grid grid-cols-2 gap-[4px]">
          {[
            { label: 'Investment', value: data.highlights.investmentRange, gold: true },
            { label: 'Franchise Fee', value: data.highlights.franchiseFee, gold: true },
            { label: 'Locations', value: data.highlights.availableLocations, gold: false },
            { label: 'Outlets', value: data.highlights.totalOutlets, gold: false, trending: true },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col gap-[4px] px-[10px] py-[8px] rounded-[4px] border ${item.gold ? 'border-[#e3c980]/40 bg-gradient-to-br from-[#fdfaf3] to-[#f5f6f8]' : 'border-[#eef0f3] bg-[#f5f6f8]'}`}>
              <span className={`text-[9px] font-semibold leading-none ${item.gold ? 'text-[#b8903c]' : 'text-[#6b7280]'}`}>{item.label}</span>
              <span className="text-[#0f1f3d] font-bold text-[13px] leading-none flex items-center gap-[2px]">
                {item.trending && <TrendingUp style={{ fontSize: 12, color: '#22c55e' }} />}
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle title="Investment Details" icon={<AccountBalanceWallet fontSize="small" />} isDesktop={isDesktop} />

        {isDesktop && (
          <div className="grid grid-cols-2 gap-[4px] pb-[4px] border-b border-[#eef0f3]">
            <span className="text-[10px] text-[#6b7280] font-semibold leading-none">Item</span>
            <span className="text-[10px] text-[#6b7280] font-semibold leading-none text-right">Amount</span>
          </div>
        )}

        <div className="flex flex-col gap-0">
          {data.investmentDetails.map((item, i) => (
            <div key={i} className={`flex min-h-[32px] items-center border-b border-[#f5f6f8] last:border-0 ${isDesktop ? 'grid grid-cols-2 gap-[4px]' : 'justify-between gap-[8px]'}`}>
              <span className="text-[12px] text-[#6b7280] font-normal">{item.item}</span>
              <span className={`text-[12px] text-[#0f1f3d] font-semibold ${isDesktop ? 'text-right' : 'shrink-0'}`}>{item.amount}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#c9a34e] to-[#b8903c] rounded-[4px] px-[12px] h-[38px] flex items-center justify-between">
          <span className="text-white text-[11px] font-medium opacity-90">Total Range</span>
          <span className="text-white text-[14px] font-bold">{data.totalInvestmentRange}</span>
        </div>
      </Card>

      <Card>
        <SectionTitle title="Franchise Model" isDesktop={isDesktop} />
        <div className="flex flex-col gap-0">
          <LabelValueRow label="Model Type" value={
            <span className="inline-flex items-center h-[20px] px-[6px] bg-[#eef0f3] border border-[#d9dde3] text-[#1f3b73] text-[10px] font-bold rounded-[4px]">
              {data.franchiseModel.modelType}
            </span>
          } />
          <LabelValueRow label="Unit Type" value={data.franchiseModel.unitType} />
        </div>
      </Card>
    </>
  );
}
