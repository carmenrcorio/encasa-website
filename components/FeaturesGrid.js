'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle,
  CalendarDays,
  Sparkles,
  Users,
  Globe,
  Receipt,
  FileText,
  UsersRound,
  LayoutDashboard,
} from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    name: 'AI Concierge',
    description: 'Responds as your brand. Available 24/7.',
  },
  {
    icon: CalendarDays,
    name: 'Itinerary Builder',
    description: 'Day-by-day plans your guests actually use.',
  },
  {
    icon: Sparkles,
    name: 'Activity Upsells',
    description: 'Curated experiences that generate revenue.',
  },
  {
    icon: Users,
    name: 'Guest Profiles',
    description: 'Preferences and celebrations — remembered forever.',
  },
  {
    icon: Globe,
    name: 'White-Label Portal',
    description: 'Your domain. Your brand. Your experience.',
  },
  {
    icon: Receipt,
    name: 'Invoice & Folio Builder',
    description: 'Full stay invoicing with Stripe payment.',
  },
  {
    icon: FileText,
    name: 'Document Center',
    description: 'Passports, contracts, insurance — organized.',
  },
  {
    icon: UsersRound,
    name: 'Group Trip Management',
    description: 'Travel parties, individual portals.',
  },
  {
    icon: LayoutDashboard,
    name: 'Admin Command Center',
    description: 'Reservations, CRM, messaging — one place.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-ivory py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-olive mb-4 tracking-tight">
            Everything your guests need.
            <br className="hidden md:block" />
            Everything you need to deliver it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group bg-ivory border border-olive/10 rounded-2xl p-8 hover:border-gold transition-colors shadow-warm"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-sans text-sm font-semibold text-olive mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-olive/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
