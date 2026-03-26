'use client';

import { motion } from 'framer-motion';

export default function ValueStatement() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-16 h-px bg-gold mx-auto mb-12" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="font-sans text-3xl md:text-4xl lg:text-[42px] font-bold text-olive leading-snug mb-8 tracking-tight"
        >
          Your PMS manages your operations.
          <br />
          En Casa is what your guests actually experience.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-olive/70 leading-relaxed">
            Built from the inside out — with a deep understanding of what hosts,
            coordinators, and operators need to deliver an extraordinary guest experience.
            En Casa is the first platform that treats the guest as the primary user.
          </p>

          <p className="text-lg text-olive/70 leading-relaxed">
            Works standalone — no PMS required. Our dedicated onboarding team
            gets you live within 48 hours.
          </p>
        </motion.div>

        <div className="w-16 h-px bg-gold mx-auto mt-12" />
      </div>
    </section>
  );
}
