'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6"
            >
              Guest Experience Platform
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-[40px] md:text-5xl lg:text-[64px] text-white font-extrabold leading-[1.1] mb-6 tracking-tight"
            >
              Guest experience software for luxury operators.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg lg:text-xl text-white/60 mb-10 leading-relaxed max-w-lg"
            >
              The platform your PMS never built — and your guests will never forget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
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
            </motion.div>
          </div>

          {/* Right — Real admin dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-8 bg-gold/5 blur-3xl rounded-full" />
              <div className="relative">
                <BrowserFrame
                  src="/images/Command%20center%20admin.png"
                  alt="En Casa admin command center showing active trips, upcoming reservations, and guest messages"
                  priority
                  cropTop={5}
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile — condensed screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:hidden"
          >
            <BrowserFrameCompact
              src="/images/Command%20center%20admin.png"
              alt="En Casa admin command center"
              maxHeight={300}
              cropTop={5}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
