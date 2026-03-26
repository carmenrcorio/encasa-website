'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BrowserFrame from './BrowserFrame';

export default function AdminProduct() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Built for the people who care most about getting it right.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            A command center that anticipates what your team needs.
          </p>
        </motion.div>

        {/* Real admin dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <BrowserFrame
            src="/images/Command%20center%20admin.png"
            alt="En Casa admin command center — reservations, guest messaging, and trip management in one dashboard"
            cropTop={5}
          />
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              href="/operators"
              className="group block bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors"
            >
              <h3 className="font-sans text-lg font-semibold text-white mb-2">For Operators</h3>
              <p className="text-sm text-white/50 mb-4">The tools that power the experience.</p>
              <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/guests"
              className="group block bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors"
            >
              <h3 className="font-sans text-lg font-semibold text-white mb-2">For Guests</h3>
              <p className="text-sm text-white/50 mb-4">What your guests see and love.</p>
              <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
