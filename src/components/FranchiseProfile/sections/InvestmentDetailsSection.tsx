// ...existing code...
import { TrendingUp } from '@mui/icons-material';
import { data } from '../data';

export default function InvestmentDetailsSection({ isDesktop }: { isDesktop: boolean }) {
  return (
    <div className={isDesktop ? 'py-[0.5rem]' : 'px-[1rem] py-[0.75rem]'}>
      
      {/* Top Highlights Grid */}
      <div className={`grid gap-[0.5rem] mb-[1.5rem] ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
        {[
          { label: 'Investment', value: data.highlights.investmentRange, gold: true },
          { label: 'Franchise Fee', value: data.highlights.franchiseFee, gold: true },
          { label: 'Locations', value: data.highlights.availableLocations, gold: false },
          { label: 'Outlets', value: data.highlights.totalOutlets, gold: false, trending: true },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex flex-col gap-[0.25rem] p-[0.75rem] rounded-[0.25rem] border ${
              item.gold
                ? 'border-[#e3c980]/40 bg-gradient-to-br from-[#fdfaf3] to-[#f8fafc]'
                : 'border-[#e2e8f0] bg-[#f8fafc]'
            } hover:border-[#c9a34e]/40 transition-colors cursor-default`}
          >
            <span
              className={`text-[0.75rem] font-semibold leading-none ${
                item.gold ? 'text-[#b8903c]' : 'text-[#64748b]'
              }`}
            >
              {item.label}
            </span>
            <span
              className={`text-[#1c2a44] font-bold ${
                isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'
              } leading-none flex items-center gap-[0.25rem] mt-[0.125rem]`}
            >
              {item.trending && (
                <TrendingUp sx={{ fontSize: '1.125rem', color: '#22c55e' }} />
              )}
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Investment Details Table */}
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.5rem] ${
          isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'
        }`}
      >
        Investment Details
      </h3>

      <div className="flex flex-col">
        {/* Table Rows */}
        <div className={`grid gap-x-[1.5rem] ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {data.investmentDetails.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-[0.5rem] border-b border-[#e2e8f0] last:border-0 md:last:border-b"
            >
              <span className="text-[0.875rem] font-medium text-[#64748b]">
                {item.item}
              </span>
              <span className="text-[0.875rem] font-semibold text-[#1c2a44] text-right shrink-0">
                {item.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Total Sum Bar */}
        <div
          className={`mt-[1rem] bg-[#0f1f3d] rounded-[0.25rem] px-[1rem] flex items-center justify-between shadow-sm ${
            isDesktop ? 'h-[3rem]' : 'h-[2.75rem]'
          }`}
        >
          <span className="text-white/80 font-medium text-[0.875rem]">
            Estimated Total
          </span>
          <span className="text-white font-bold text-[1rem]">
            {data.totalInvestmentRange}
          </span>
        </div>
      </div>

      {/* Franchise Model Section */}
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.5rem] mt-[1.5rem] ${
          isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'
        }`}
      >
        Franchise Model
      </h3>
      
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-[0.5rem] border-b border-[#e2e8f0]">
          <span className="text-[0.875rem] font-medium text-[#64748b]">Model Type</span>
          <span className="inline-flex items-center px-[0.625rem] py-[0.25rem] bg-[#f8fafc] border border-[#e2e8f0] text-[#1c2a44] font-semibold rounded-[0.25rem] text-[0.75rem]">
            {data.franchiseModel.modelType}
          </span>
        </div>
        <div className="flex items-center justify-between py-[0.5rem] border-b border-[#e2e8f0]">
          <span className="text-[0.875rem] font-medium text-[#64748b]">Unit Type</span>
          <span className="text-[0.875rem] font-semibold text-[#1c2a44]">
            {data.franchiseModel.unitType}
          </span>
        </div>
      </div>

    </div>
  );
}