import SellerForm from './SellerForm';
import BuyerForm from './BuyerForm';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

interface PreRegistrationProps {
  viewMode: 'desktop' | 'mobile';
  userType: 'seller' | 'buyer';
}

export default function PreRegistration({ viewMode, userType }: PreRegistrationProps) {
  const isDesktop = viewMode === 'desktop';

  return (
    <div
      className={`w-full flex flex-col ${
        isDesktop ? 'items-stretch bg-[#fafafb]' : 'items-center justify-start bg-[#fafafb]'
      }`}
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <div
        className={`transition-all duration-700 ease-in-out flex flex-col ${
          isDesktop
            ? 'w-full h-full overflow-y-auto'
            : 'w-[24.375rem] shrink-0 overflow-y-auto rounded-none shadow-[0_0_40px_rgba(0,0,0,0.08)]'
        }`}
        style={isDesktop ? {} : { maxHeight: 'calc(100vh - 64px)' }}
      >
        <div className="w-full bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] relative overflow-hidden flex justify-center shrink-0 border-b border-white/[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 blur-[100px] -translate-y-1/3 translate-x-1/4 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 blur-[80px] translate-y-1/3 -translate-x-1/3 rounded-full pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className={`w-full max-w-[32rem] relative z-10 ${isDesktop ? 'px-6 py-6' : 'px-4 py-4'}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <h1 className={`font-extralight text-white m-0 tracking-wide ${isDesktop ? 'text-3xl' : 'text-xl'}`}>
                  Register as a{' '}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">
                    {userType === 'seller' ? 'Seller' : 'Buyer'}
                  </span>
                </h1>
              </div>

              <div className={`shrink-0 rounded-[4px] border border-[#d4af37]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.05)] ${isDesktop ? 'w-12 h-12' : 'w-10 h-10'}`}>
                {userType === 'seller' ? (
                  <StorefrontIcon sx={{ fontSize: isDesktop ? '1.5rem' : '1.25rem', color: '#e5c158' }} />
                ) : (
                  <PersonSearchIcon sx={{ fontSize: isDesktop ? '1.5rem' : '1.25rem', color: '#e5c158' }} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={`flex-1 flex justify-center ${isDesktop ? 'py-6 px-6' : 'py-4 px-3'} bg-[#fafafb]`}>
          <div className={`w-full ${isDesktop ? 'max-w-[48rem]' : 'max-w-full'}`}>
            <div className="bg-white rounded-[7px] border border-black/[0.03] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className={` ${isDesktop ? 'px-6 py-5' : 'px-4 py-4'}`}>
                {userType === 'seller' ? (
                  <SellerForm key="seller" isDesktop={isDesktop} />
                ) : (
                  <BuyerForm key="buyer" isDesktop={isDesktop} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}