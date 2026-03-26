'use client';

import { motion } from 'framer-motion';
import BrowserFrame from './BrowserFrame';
import BlurOverlay from './BlurOverlay';

const portals = [
  {
    label: 'Overview',
    screenshot: '/images/Guest%20landing%20page.png',
    alt: 'En Casa guest portal — private branded landing page with trip details',
    blur: { top: '0%', left: '20%', width: '55%', height: '12%' },
    zIndex: 10,
  },
  {
    label: 'Itinerary',
    screenshot: '/images/Guest%20landing%20page%202.png',
    alt: 'En Casa guest portal — day-by-day itinerary and travel details',
    blur: { top: '0%', left: '20%', width: '55%', height: '12%' },
    zIndex: 20,
  },
  {
    label: 'Experiences',
    screenshot: '/images/Activity%20-%20Guest%20side.png',
    alt: 'En Casa guest portal — curated local experiences guests can browse and book',
    blur: null,
    zIndex: 15,
  },
  {
    label: 'Trip Guidance',
    screenshot: '/images/Trip%20Guidance.png',
    alt: 'En Casa guest portal — trip guidance and travel information',
    blur: null,
    zIndex: 25,
  },
];

export default function GuestPortalPreview() {
  return (
    <section className="bg-dark-section py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold mb-4">
            Your guests receive this.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A private portal that feels like it was designed just for them.
          </p>
        </motion.div>

        {/* Desktop: staggered overlapping layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-4xl mx-auto" style={{ height: 580 }}>
            {portals.map((portal, i) => {
              const offsets = [
                { left: '0%', top: '8%' },
                { left: '18%', top: '22%' },
                { left: '52%', top: '3%' },
                { left: '33%', top: '0%' },
              ];
              const widths = ['44%', '40%', '42%', '38%'];
              return (
                <motion.div
                  key={portal.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.1 + i * 0.15, duration: 0.7 }}
                  className="absolute"
                  style={{
                    left: offsets[i].left,
                    top: offsets[i].top,
                    width: widths[i],
                    zIndex: portal.zIndex,
                  }}
                >
                  <BrowserFrame
                    src={portal.screenshot}
                    alt={portal.alt}
                    width={1800}
                    height={1650}
                    url="portal.encasasoftware.com"
                  >
                    {portal.blur && <BlurOverlay style={portal.blur} />}
                  </BrowserFrame>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-6">
          {portals.map((portal, i) => (
            <motion.div
              key={portal.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <BrowserFrame
                src={portal.screenshot}
                alt={portal.alt}
                width={1800}
                height={1650}
                url="portal.encasasoftware.com"
              >
                {portal.blur && <BlurOverlay style={portal.blur} />}
              </BrowserFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
