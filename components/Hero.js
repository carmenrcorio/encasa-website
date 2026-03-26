'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import BrowserFrame, { BrowserFrameCompact } from './BrowserFrame';

export default function Hero() {
    return (
          <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
                  background: 'linear-gradient(135deg, #1A2E28 0%, #2D4A3E 40%, #1A1A1A 100%)',
        }}
    >
{/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left — Copy */}
          <div>
                    <p
              className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Guest Experience Platform
                </p>

            <h1
              className="font-sans text-[40px] md:text-5xl lg:text-[64px] text-white font-extrabold leading-[1.1] mb-6 tracking-tight animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Guest experience software for luxury operators.
                </h1>

            <p
              className="text-lg lg:text-xl text-white/60 mb-10 leading-relaxed max-w-lg animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              The platform your PMS never built — and your guests will never forget.
                </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              <Link
                href="/early-access"
                className="inline-flex items-center px-7 py-3 bg-gold text-olive font-semibold rounded-full hover:bg-gold/90 transition-colors text-sm"
              >
                                  Request Early Access
                  </Link>
              <a
                href="https://app.encasasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3 border border-white/20 text-white font-medium rounded-full hover:border-white/40 transition-colors text-sm"
              >
                                  See the portal &rarr;
</a>
  </div>
  </div>

{/* Right — Real admin dashboard screenshot */}
          <div
            className="hidden lg:block animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative">
          {/* Glow behind mockup */}
              <div className="absolute -inset-8 bg-gold/5 blur-3xl rounded-full" />
                          <div className="relative">
                            <BrowserFrame
                  src="/images/Command center admin.png"
                  alt="En Casa admin command center showing active trips, upcoming reservations, and guest messages"
                  priority
                  cropTop={5}
                />
                    </div>
                    </div>
                    </div>

{/* Mobile — condensed screenshot */}
          <div
            className="lg:hidden animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <BrowserFrameCompact
              src="/images/Command center admin.png"
              alt="En Casa admin command center"
              maxHeight={300}
              cropTop={5}
            />
                </div>
                </div>
                </div>

{/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <div className="animate-bounce-slow">
                  <ChevronDown className="w-6 h-6 text-white/30" />
        </div>
        </div>
        </section>
  );
}
