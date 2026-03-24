'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function PortalMockup() {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden shadow-glow bg-[#111]">
      {/* Browser chrome */}
      <div className="bg-white/5 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white/10 rounded h-5 max-w-[200px] mx-auto flex items-center justify-center">
            <span className="font-mono text-[10px] text-white/30">portal.villaparadiso.com</span>
          </div>
        </div>
      </div>
      {/* Portal content */}
      <div className="p-5 lg:p-6 space-y-4">
        {/* Property header */}
        <div>
          <p className="font-serif text-lg text-white mb-1">Villa Paradiso</p>
          <p className="text-xs text-white/40">Amalfi Coast, Italy</p>
        </div>
        {/* Countdown */}
        <div className="bg-gold/10 border border-gold/20 rounded-lg p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-gold/70 mb-1">Departure</p>
          <p className="text-xl font-bold text-gold">10 days</p>
        </div>
        {/* Trip details grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-lg p-2.5">
            <p className="text-[10px] text-white/40 mb-0.5">Guests</p>
            <p className="text-sm font-medium text-white">6</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5">
            <p className="text-[10px] text-white/40 mb-0.5">Nights</p>
            <p className="text-sm font-medium text-white">7</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5">
            <p className="text-[10px] text-white/40 mb-0.5">Status</p>
            <p className="text-sm font-medium text-emerald-400">Confirmed</p>
          </div>
        </div>
        {/* Nav tabs */}
        <div className="flex gap-1 pt-1">
          {['Overview', 'Itinerary', 'Concierge', 'Experiences'].map((tab, i) => (
            <span
              key={tab}
              className={`text-[10px] px-2.5 py-1 rounded-full ${
                i === 0
                  ? 'bg-gold/20 text-gold font-medium'
                  : 'text-white/30'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

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

          {/* Right — Product mockup */}
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
                <PortalMockup />
              </div>
            </div>
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
