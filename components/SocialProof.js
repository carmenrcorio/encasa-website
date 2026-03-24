'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <section className="bg-charcoal py-24 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-12"
        >
          Why En Casa
        </motion.p>

        {/* Pull quote — THIS is where Playfair belongs */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-[36px] italic text-white/90 leading-snug">
            &ldquo;I spent years watching operators send guests a PDF link and call it
            a guest experience. En Casa is the product I always knew was missing.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-white/70 font-medium">
            — Carmen Corio, Founder
          </p>
          <p className="text-xs text-white/40 mt-1">
            Former Enterprise CSM, Guesty. Alumni: Airbnb, HotelTonight.
          </p>
        </motion.div>

        {/* Tech-company-style badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Former Guesty Enterprise CSM',
            'Built at Airbnb + HotelTonight',
            'No PMS required',
          ].map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 font-mono"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
