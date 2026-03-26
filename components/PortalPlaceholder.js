'use client';

export default function PortalPlaceholder({ label = 'Guest Portal', className = '' }) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
    >
      {/* Browser chrome header */}
      <div className="bg-[#1A1A1A] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#2A2A2A] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
            <span className="font-mono text-[11px] text-white/40">portal.encasasoftware.com</span>
          </div>
        </div>
      </div>
      {/* Elegant placeholder content */}
      <div className="bg-[#1A1A1A] px-8 py-16 flex flex-col items-center justify-center text-center space-y-6">
        {/* Gold arch icon — En Casa logo mark */}
        <div className="w-16 h-16 flex items-center justify-center">
          <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
            <path
              d="M24 4C14 4 8 16 8 28c0 4 1.5 7 4 9.5S18 42 24 42s8.5-2 11-4.5S40 32 40 28C40 16 34 4 24 4z"
              stroke="#C8A951"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M24 14c-4 0-7 5-7 12 0 2 .5 3.5 1.5 4.5S21 32 24 32s4-.5 5.5-1.5S31 28 31 26c0-7-3-12-7-12z"
              fill="#C8A951"
              opacity="0.3"
            />
          </svg>
        </div>
        {/* Label */}
        <p className="font-mono text-sm tracking-widest text-[#C8A951]">{label}</p>
        {/* Subtext */}
        <p className="font-sans text-sm text-white/40">Preview coming soon</p>
        {/* Tab pills */}
        <div className="flex gap-2 pt-2">
          {['Overview', 'Itinerary', 'Concierge'].map((tab) => (
            <span
              key={tab}
              className="px-4 py-1.5 rounded-full bg-white/[0.08] text-white/30 text-xs font-mono"
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortalPlaceholderLabeled({ label = 'Guest Portal', section = '' }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
    >
      {/* Browser chrome */}
      <div className="bg-[#1A1A1A] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#2A2A2A] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
            <span className="font-mono text-[11px] text-white/40">portal.encasasoftware.com</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="bg-[#1A1A1A] px-6 py-12 flex flex-col items-center justify-center text-center space-y-4">
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
          <path
            d="M24 4C14 4 8 16 8 28c0 4 1.5 7 4 9.5S18 42 24 42s8.5-2 11-4.5S40 32 40 28C40 16 34 4 24 4z"
            stroke="#C8A951"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M24 14c-4 0-7 5-7 12 0 2 .5 3.5 1.5 4.5S21 32 24 32s4-.5 5.5-1.5S31 28 31 26c0-7-3-12-7-12z"
            fill="#C8A951"
            opacity="0.3"
          />
        </svg>
        <p className="font-mono text-xs tracking-widest text-[#C8A951]">{label}</p>
        {section && (
          <p className="font-sans text-xs text-white/30">{section}</p>
        )}
        <p className="font-sans text-[11px] text-white/20">Preview coming soon</p>
      </div>
    </div>
  );
}
