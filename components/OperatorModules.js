'use client';

import { motion } from 'framer-motion';
import BrowserFrame from './BrowserFrame';
import BlurOverlay from './BlurOverlay';

const modules = [
  {
    label: 'Reservations',
    headline: 'Your guests, always in context',
    body: 'Every reservation surfaces the full guest picture — preferences, history, travel party, and open requests — before you even pick up the phone.',
    screenshot: '/images/Reservations%20admin.png',
    alt: 'En Casa reservations view — guest list with properties, dates, and portal status',
    pills: ['Pipeline View', 'Property Assignment', 'Portal Status'],
    cropTop: 5,
    blur: { top: '12%', left: '3%', width: '18%', height: '75%' },
  },
  {
    label: 'Guest Management',
    headline: 'A guest list that gets smarter over time',
    body: 'Profiles that build themselves. Every stay adds a layer — dietary notes, room preferences, travel companions, do-not-books.',
    screenshot: '/images/Guests%20admin.png',
    alt: 'En Casa guest management — CRM with tags, trip history, and preferences',
    pills: ['Guest Profiles', 'Tag System', 'Trip History'],
    cropTop: 5,
    blur: { top: '12%', left: '3%', width: '20%', height: '80%' },
  },
  {
    label: 'Activities',
    headline: 'Curated experiences, on your terms',
    body: 'Build your activity catalog once. Surface the right experiences to the right guests at the right moment.',
    screenshot: '/images/Acitivities%20admin%20side.png',
    alt: 'En Casa activities marketplace — curated experiences guests can browse and book',
    pills: ['Activity Marketplace', 'Revenue Tracking', 'Guest-Facing'],
    cropTop: 5,
    blur: null,
  },
  {
    label: 'Invoicing',
    headline: 'Billing that matches your service level',
    body: 'Full folio builder with accommodation, add-ons, and custom line items. Presentation-ready for guests who expect nothing less.',
    screenshot: '/images/Admin%20invoice%20center.png',
    alt: 'En Casa invoice center — billing overview with outstanding, paid, and overdue',
    pills: ['Folio Builder', 'Stripe Payments', 'Tax Calculations'],
    cropTop: 5,
    blur: null,
  },
];

export default function OperatorModules() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
            For Operators
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-olive leading-tight tracking-tight">
            The tools behind every considered stay
          </h2>
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-24 lg:space-y-32">
          {modules.map((mod, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={mod.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Text */}
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-3">
                    {mod.label}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-olive mb-4">
                    {mod.headline}
                  </h3>
                  <p className="text-olive/60 leading-relaxed mb-6">
                    {mod.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mod.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center px-3 py-1 bg-gold/10 rounded-full font-mono text-xs text-olive/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshot */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <BrowserFrame
                    src={mod.screenshot}
                    alt={mod.alt}
                    cropTop={mod.cropTop || 0}
                  >
                    {mod.blur && <BlurOverlay style={mod.blur} />}
                  </BrowserFrame>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
