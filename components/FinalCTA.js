'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="font-sans text-4xl md:text-5xl lg:text-[56px] font-bold text-olive leading-tight mb-6 tracking-tight"
        >
          Ready to elevate your guest experience?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-olive/60 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          We&apos;re onboarding select operators during our early access period.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/early-access"
            className="inline-flex items-center px-10 py-4 bg-gold text-olive font-semibold rounded-full hover:bg-gold/90 transition-colors text-base"
          >
            Request Early Access
          </Link>
          <p className="text-sm text-olive/40 mt-4">
            No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
