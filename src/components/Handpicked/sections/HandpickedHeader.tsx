interface HandpickedHeaderProps {
  isDesktop: boolean;
}

export default function HandpickedHeader({ isDesktop }: HandpickedHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-br from-[#0f1f3d] via-[#1c2a44] to-[#0f1f3d] flex justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="w-full max-w-[80rem] relative p-[4px]">
        <div className="flex items-start justify-between gap-[6px]">
          <div className="flex-1">
            <h1 className={`font-bold text-white m-0 leading-tight ${isDesktop ? 'text-[2rem]' : 'text-[1.5rem]'}`}>
              Handpicked{' '}
              <span className="text-[#c9a34e]">Opportunities</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}