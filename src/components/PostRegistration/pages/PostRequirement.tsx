import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';

interface PostRequirementProps {
  isDesktop: boolean;
  userType: 'seller' | 'buyer';
}

const LOOKING_TO_OPTIONS = [
  { value: 'buy', label: 'Buy' },
  { value: 'lease', label: 'Lease' },
  { value: 'find', label: 'Find Business Opportunities' },
  { value: 'other', label: 'Other' },
];

const BUSINESS_CATEGORIES = [
  'Food & Beverage', 'Retail', 'Education', 'Healthcare',
  'Automotive', 'Fitness & Wellness', 'Technology', 'Finance', 'Other',
];

const TIMELINES = [
  { value: 'immediately', label: 'Immediately' },
  { value: '1-3', label: '1–3 months' },
  { value: '3-6', label: '3–6 months' },
  { value: '6-12', label: '6–12 months' },
  { value: '12+', label: '12+ months' },
];

interface FormData {
  intent: string;
  otherIntent: string;
  businessType: 'running' | 'new' | '';
  category: string;
  budgetMin: string;
  budgetMax: string;
  location: string;
  timeline: string;
  description: string;
  smsContact: boolean;
  whatsappContact: boolean;
  callContact: boolean;
  expiryDate: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = {
  intent: '', otherIntent: '', businessType: '', category: '', budgetMin: '', budgetMax: '',
  location: '', timeline: '', description: '', smsContact: false, whatsappContact: true,
  callContact: false, expiryDate: '',
};

/* ── POLISHED MODERN CALENDAR COMPONENT ── */
function ModernCalendar({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const prevDays = [29, 30, 31];
  const nextDays = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Parse selected day from value (e.g. "15 Apr 2026")
  const selectedDay = value ? parseInt(value.split(' ')[0], 10) : null;
  const today = 15; // Mock today's date

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border rounded-[4px] h-[42px] shadow-sm outline-none transition-all duration-300 ${
          isOpen ? 'border-[#d4af37] ring-1 ring-[#d4af37]/20' : 'border-black/10 hover:border-[#d4af37]/40'
        }`}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <CalendarTodayOutlinedIcon sx={{ fontSize: 18, color: value ? '#d4af37' : '#a0aabf' }} className="shrink-0 transition-colors" />
          <span className={`text-[13px] truncate ${value ? 'text-[#0a1128] font-medium' : 'text-[#637089] font-light'}`}>
            {value || 'Select Last Date'}
          </span>
        </div>
        <KeyboardArrowDownIcon sx={{ fontSize: 18, color: '#a0aabf' }} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-[calc(100%+6px)] sm:bottom-auto sm:top-[calc(100%+6px)] left-0 w-[280px] bg-white border border-black/10 rounded-[8px] shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[14px] font-bold text-[#0a1128] pl-1">
                April 2026
              </span>
              <div className="flex gap-1">
                <button type="button" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#fafafb] text-[#637089] transition-colors">
                  <ChevronLeftIcon sx={{ fontSize: 20 }} />
                </button>
                <button type="button" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#fafafb] text-[#637089] transition-colors">
                  <ChevronRightIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <span key={day} className="text-[11px] text-center text-[#637089] font-semibold">{day}</span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {prevDays.map(d => <span key={`p-${d}`} className="text-[12px] py-1.5 text-[#a0aabf] font-light">{d}</span>)}
              {days.map(d => {
                const isSelected = d === selectedDay;
                const isToday = d === today;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => { onChange(`${d} Apr 2026`); setIsOpen(false); }}
                    className={`text-[12px] py-1.5 rounded-[4px] font-medium transition-all ${
                      isSelected
                        ? 'bg-[#0a1128] text-white shadow-md'
                        : isToday
                          ? 'bg-white text-[#d4af37] border border-[#d4af37] hover:bg-[#fafafb]'
                          : 'bg-white text-[#0a1128] hover:bg-[#fafafb] hover:text-[#d4af37]'
                    }`}
                  >
                    {d}
                  </button>
                );
              })}
              {nextDays.map(d => <span key={`n-${d}`} className="text-[12px] py-1.5 text-[#a0aabf] font-light">{d}</span>)}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/5">
              <button type="button" onClick={() => { onChange(''); setIsOpen(false); }} className="text-[12px] text-[#637089] font-medium hover:text-[#0a1128] transition-colors px-2 py-1 rounded hover:bg-[#fafafb]">
                Clear
              </button>
              <button type="button" onClick={() => { onChange('15 Apr 2026'); setIsOpen(false); }} className="text-[12px] text-[#d4af37] font-bold hover:text-[#b38728] transition-colors px-2 py-1 rounded hover:bg-amber-50/50">
                Today
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── MODERN DROPDOWN COMPONENT ── */
function FormDropdown({ icon: Icon, placeholder, value, options, onChange, error }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find((o: any) => o.value === value)?.label;

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border rounded-[4px] transition-all duration-300 h-[42px] shadow-sm outline-none ${isOpen ? 'border-[#d4af37] ring-1 ring-[#d4af37]/20' : error ? 'border-red-400' : 'border-black/10 hover:border-[#d4af37]/40'}`}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <Icon sx={{ fontSize: 18, color: value ? '#d4af37' : '#a0aabf' }} className="shrink-0 transition-colors" />
          <span className={`text-[13px] truncate ${value ? 'text-[#0a1128] font-medium' : 'text-[#637089] font-light'}`}>{selectedLabel || placeholder}</span>
        </div>
        <KeyboardArrowDownIcon sx={{ fontSize: 18, color: '#a0aabf' }} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-black/10 rounded-[4px] shadow-xl py-1.5 z-50 max-h-[220px] overflow-y-auto">
            {options.map((opt: any) => (
              <button key={opt.value} type="button" onClick={() => { onChange(opt.value); setIsOpen(false); }} className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors hover:bg-[#fafafb] hover:text-[#d4af37] ${value === opt.value ? 'text-[#d4af37] bg-[#fafafb] font-semibold' : 'text-[#0a1128]'}`}>
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
      {error && <p className="text-[#e05252] text-[11px] mt-1 font-light">{error}</p>}
    </div>
  );
}

export default function PostRequirement({ isDesktop }: PostRequirementProps) {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!data.intent) errs.intent = 'Required';
    if (data.intent === 'other' && !data.otherIntent.trim()) errs.otherIntent = 'Required';
    if (!data.businessType) errs.businessType = 'Required';
    if (!data.category) errs.category = 'Required';
    if (!data.budgetMin.trim()) errs.budgetMin = 'Required';
    if (!data.budgetMax.trim()) errs.budgetMax = 'Required';
    if (!data.location.trim()) errs.location = 'Required';
    if (!data.timeline) errs.timeline = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 gap-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bf953f] via-[#d4af37] to-[#b38728] flex items-center justify-center shadow-lg"><CheckCircleIcon sx={{ fontSize: '2rem', color: '#ffffff' }} /></div>
        <div className="text-center"><h2 className="text-2xl font-bold text-[#0a1128]">Requirement Published</h2><p className="text-sm font-light text-[#637089]">Broadcasting to matching members.</p></div>
        <button onClick={() => { setSubmitted(false); setData(EMPTY); }} className="px-8 py-3 bg-[#0a1128] text-white rounded-[4px] hover:bg-[#121c33] transition-colors">Post Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-4xl">
      <div className="bg-white rounded-[4px] border border-black/5 shadow-sm overflow-hidden">
        <div className={`flex flex-col gap-8 ${isDesktop ? 'p-10' : 'p-4'}`}>
          
          {/* Row 1: Looking to */}
          <div className={`grid gap-4 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-[#0a1128]">Looking to</label>
              <FormDropdown icon={SearchOutlinedIcon} placeholder="Buy, Lease..." value={data.intent} options={LOOKING_TO_OPTIONS} onChange={(val: string) => set('intent', val)} error={errors.intent} />
            </div>
            {data.intent === 'other' && (
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#0a1128]">Specify Requirement</label>
                <FormInput placeholder="Describe what you are looking for..." value={data.otherIntent} onChange={(e) => set('otherIntent', e.target.value)} error={errors.otherIntent} />
              </div>
            )}
          </div>

          {/* Business Type Toggles */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-semibold text-[#0a1128]">Business Type</label>
            <div className="flex gap-3">
              {[
                { v: 'running', l: 'Buy a Running Business' },
                { v: 'new', l: 'Start a New Franchise' }
              ].map((item) => (
                <button
                  key={item.v} type="button" onClick={() => set('businessType', item.v as any)}
                  className={`flex-1 h-[42px] rounded-[4px] text-[12px] font-medium border transition-all ${data.businessType === item.v ? 'bg-[#0a1128] text-white border-[#0a1128] shadow-md' : 'bg-white text-[#637089] border-black/10 hover:border-[#d4af37]'}`}
                >
                  {item.l}
                </button>
              ))}
            </div>
          </div>

          {/* Looking for (Grouped) */}
          <div className="space-y-4">
            <h4 className="text-[14px] font-bold text-[#d4af37] border-b border-black/5 pb-1">Looking for</h4>
            <div className={`grid gap-4 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-[#637089]">Industry / Sector</label>
                <FormDropdown icon={CategoryOutlinedIcon} placeholder="Select Category" value={data.category} options={BUSINESS_CATEGORIES.map(c => ({ value: c, label: c }))} onChange={(val: string) => set('category', val)} error={errors.category} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-[#637089]">Location</label>
                <FormInput placeholder="Target City or State" value={data.location} onChange={(e) => set('location', e.target.value)} error={errors.location} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-[#637089]">Budget Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <FormInput placeholder="Min" value={data.budgetMin} onChange={(e) => set('budgetMin', e.target.value)} error={errors.budgetMin} />
                  <FormInput placeholder="Max" value={data.budgetMax} onChange={(e) => set('budgetMax', e.target.value)} error={errors.budgetMax} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-[#637089]">Timeline</label>
                <FormDropdown icon={UpdateOutlinedIcon} placeholder="Timeline" value={data.timeline} options={TIMELINES} onChange={(val: string) => set('timeline', val)} error={errors.timeline} />
              </div>
            </div>
          </div>

          {/* Comms & Expiry */}
          <div className={`grid gap-6 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <div className="space-y-3">
              <label className="text-[13px] font-semibold text-[#0a1128]">Preferred Communication</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { k: 'smsContact', l: 'SMS', i: SmsOutlinedIcon, c: 'blue' },
                  { k: 'whatsappContact', l: 'WhatsApp', i: WhatsAppIcon, c: 'emerald' },
                  { k: 'callContact', l: 'Call', i: PhoneInTalkOutlinedIcon, c: 'amber' }
                ].map((com) => (
                  <button
                    key={com.k} type="button" onClick={() => set(com.k as any, !(data as any)[com.k])}
                    className={`flex items-center gap-2 px-4 py-2 rounded-[4px] border transition-all ${(data as any)[com.k] ? `bg-${com.c}-50 border-${com.c}-200 text-${com.c}-700` : 'bg-white border-black/10 text-[#637089]'}`}
                  >
                    <com.i sx={{ fontSize: 18 }} /> <span className="text-xs font-medium">{com.l}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-[#0a1128]">Requirement Open Till</label>
              <ModernCalendar value={data.expiryDate} onChange={(val) => set('expiryDate', val)} />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-semibold text-[#0a1128]">Additional Details</label>
            <FormTextarea rows={3} placeholder="Tell us more about your preferences..." value={data.description} onChange={(e) => set('description', e.target.value)} />
          </div>
        </div>

        <div className="px-10 py-5 border-t border-black/5 bg-[#fafafb] flex justify-end">
          <button type="submit" className="w-full sm:w-auto px-10 py-3 bg-gradient-to-br from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[4px] font-bold text-[12px] uppercase tracking-widest shadow-lg hover:brightness-110 transition-all">
            Post Requirement
          </button>
        </div>
      </div>
    </form>
  );
}