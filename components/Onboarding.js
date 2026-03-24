'use client';

import { motion } from 'framer-motion';

export default function Onboarding() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            White-glove implementation included.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Our dedicated onboarding team configures your workspace,
            sets up your first guest portal, and gets you live —
            typically within 48 hours of signup. No PMS required.
            No technical setup needed from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
