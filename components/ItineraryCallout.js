'use client';

import { motion } from 'framer-motion';

export default function ItineraryCallout() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-dark-section border-l-4 border-gold rounded-xl p-10 lg:p-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
            For group travel designers
          </h3>
          <p className="text-white/50 leading-relaxed mb-6 max-w-2xl">
            Day-by-day itineraries your clients can follow on any device. Built inside
            the platform, delivered through their private portal.
          </p>
          <a
            href="/images/Itinerary%20%C2%B7%20En%20Casa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gold text-sm font-medium group"
          >
            View sample itinerary
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
