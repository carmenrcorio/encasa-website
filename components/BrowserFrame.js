'use client';

import Image from 'next/image';

export default function BrowserFrame({ src, alt, width = 1500, height = 900, className = '', priority = false, url = 'app.encasasoftware.com', cropTop = 0, children }) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
    >
      {/* Browser chrome header */}
      <div className="bg-charcoal px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#2A2A2A] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
            <span className="font-mono text-[11px] text-white/40">{url}</span>
          </div>
        </div>
      </div>
      {/* Screenshot content — cropTop hides the app nav bar */}
      <div className="relative overflow-hidden bg-ivory">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={90}
          priority={priority}
          className="w-full h-auto object-cover"
          style={cropTop ? { marginTop: `-${cropTop}%` } : undefined}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
        />
        {children}
      </div>
    </div>
  );
}

export function BrowserFrameCompact({ src, alt, maxHeight = 300, className = '', url = 'app.encasasoftware.com', cropTop = 0 }) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
    >
      {/* Browser chrome header */}
      <div className="bg-charcoal px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-[#2A2A2A] rounded h-5 max-w-[180px] mx-auto flex items-center justify-center">
            <span className="font-mono text-[9px] text-white/40">{url}</span>
          </div>
        </div>
      </div>
      {/* Cropped content */}
      <div className="relative overflow-hidden bg-ivory" style={{ maxHeight }}>
        <Image
          src={src}
          alt={alt}
          width={1500}
          height={900}
          quality={90}
          className="w-full h-auto object-cover object-top"
          style={cropTop ? { marginTop: `-${cropTop}%` } : undefined}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
