'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

        {/* Admin dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-2xl overflow-hidden shadow-glow border border-white/10">
            {/* Browser chrome */}
            <div className="bg-white/5 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/10 rounded-md h-6 max-w-sm mx-auto flex items-center justify-center">
                  <span className="font-mono text-xs text-white/30">app.encasasoftware.com</span>
                </div>
              </div>
            </div>
            {/* Dashboard content */}
            <div className="bg-[#111] p-6 lg:p-8">
              {/* Sidebar + main */}
              <div className="flex gap-6">
                {/* Sidebar nav */}
                <div className="hidden md:flex flex-col gap-1 w-40 shrink-0">
                  {['Reservations', 'Guest CRM', 'Messaging', 'Invoices', 'Analytics'].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs px-3 py-2 rounded-lg ${
                        i === 0 ? 'bg-gold/10 text-gold font-medium' : 'text-white/40'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main content — reservation list */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-white">Active Reservations</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold font-mono">12 active</span>
                  </div>
                  {[
                    { name: 'Nakamura', property: 'Villa Paradiso', dates: 'Mar 28 – Apr 4', status: 'Confirmed', statusColor: 'bg-emerald-500/10 text-emerald-400' },
                    { name: 'Rodriguez', property: 'Casa Olivo', dates: 'Apr 2 – Apr 5', status: 'Pending', statusColor: 'bg-amber-500/10 text-amber-400' },
                    { name: 'Chen', property: 'Villa Paradiso', dates: 'Apr 10 – Apr 17', status: 'Confirmed', statusColor: 'bg-emerald-500/10 text-emerald-400' },
                  ].map((res) => (
                    <div key={res.name} className="flex items-center justify-between bg-white/5 border border-white/5 rounded-lg p-3">
                      <div>
                        <p className="text-xs font-medium text-white">{res.name}</p>
                        <p className="text-[10px] text-white/40">{res.property} · {res.dates}</p>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${res.statusColor}`}>{res.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
