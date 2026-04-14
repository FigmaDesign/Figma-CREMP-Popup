interface HandpickedHeaderProps {
  isDesktop: boolean;
}

export default function HandpickedHeader({ isDesktop }: HandpickedHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] flex justify-center relative overflow-hidden shrink-0 border-b border-white/[0.05]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 blur-[100px] -translate-y-1/3 translate-x-1/4 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 blur-[80px] translate-y-1/3 -translate-x-1/3 rounded-full pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className={`w-full max-w-[80rem] relative z-10 ${isDesktop ? 'px-10 py-10' : 'px-4 py-6'}`}>
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <h1 className={`font-extralight text-white m-0 tracking-wide ${isDesktop ? 'text-[2.75rem]' : 'text-[2rem]'}`}>
              Handpicked{' '}<span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">Opportunities</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}