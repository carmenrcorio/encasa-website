'use client';

import { motion } from 'framer-motion';
import BrowserFrame from './BrowserFrame';
import BlurOverlay from './BlurOverlay';

export default function CommandCenterHero() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #1C2B25 0%, #0F1A14 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Admin Command Center
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Everything your operation needs, in one place
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A command center built for the way hospitality actually works — not how
            software thinks it should.
          </p>
        </motion.div>

        {/* Dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <BrowserFrame
            src="/images/Command%20center%20admin.png"
            alt="En Casa admin command center — trips, messages, and reservations in one dashboard"
            cropTop={5}
          >
            <BlurOverlay
              style={{
                top: '55%',
                left: '55%',
                width: '42%',
                height: '42%',
              }}
            />
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
}
