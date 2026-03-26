'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BrowserFrame from './BrowserFrame';
import BlurOverlay from './BlurOverlay';
import PortalPlaceholder from './PortalPlaceholder';

const rooms = [
  {
    id: 'terrace',
    label: 'FOR VILLA OPERATORS',
    headline: 'Your guests deserve more than a PDF.',
    body: 'A private portal with itinerary, AI concierge, and curated experiences — all under your brand.',
    pills: ['AI Concierge', 'Itinerary Builder', 'Activity Upsells', 'Document Management'],
    cta: { text: 'See how it works', href: '/operators' },
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80',
    imageAlt: 'Luxury villa terrace at golden hour',
    mockup: 'portal',
  },
  {
    id: 'garden',
    label: 'FOR EVENT PLANNERS',
    headline: "Your guests shouldn\u2019t be texting you at midnight.",
    body: "A branded portal for every attendee. Timeline, venue details, dietary collection, and a concierge that answers so you don\u2019t have to.",
    pills: ['Multi-Guest Portals', 'Document Collection', 'Travel Party Management', 'White-Label'],
    cta: { text: 'See how it works', href: '/use-cases' },
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    imageAlt: 'Elegant outdoor wedding garden reception',
    mockup: 'reservations',
  },
  {
    id: 'study',
    label: 'FOR RETREAT ORGANIZERS',
    headline: 'Run your retreat like a five-star operation.',
    body: 'Reservations, guest management, invoicing, and team chat triage — all in one place.',
    pills: ['Admin Command Center', 'Invoice Builder', 'Team Assignment', 'Audit Trail'],
    cta: { text: 'See how it works', href: '/use-cases' },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    imageAlt: 'Modern corporate retreat workspace',
    mockup: 'admin',
  },
  {
    id: 'kitchen',
    label: 'FOR GROUP TRAVEL AGENCIES',
    headline: 'Every traveler feels like the trip was designed for them.',
    body: 'Guest profiles remember preferences, dietary needs, celebrations, and hard nos — across every trip.',
    pills: ['Guest Profiles', 'Trip Switching', 'Group Management', 'Custom Domain'],
    cta: { text: 'See how it works', href: '/use-cases' },
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80',
    imageAlt: 'Group of women travelers celebrating together',
    mockup: 'profile',
  },
];

function RoomMockup({ type }) {
  switch (type) {
    case 'portal':
      return (
        <BrowserFrame
          src="/images/Guest%20landing%20page.png"
          alt="En Casa guest portal — private branded landing page with trip overview"
          width={1800}
          height={1650}
          url="portal.encasasoftware.com"
        >
          <BlurOverlay style={{ top: '0%', left: '20%', width: '55%', height: '12%' }} />
        </BrowserFrame>
      );
    case 'reservations':
      return (
        <BrowserFrame
          src="/images/Reservations%20admin.png"
          alt="En Casa reservations view — guest list with properties, dates, and portal status"
          cropTop={5}
        >
          <BlurOverlay style={{ top: '12%', left: '3%', width: '18%', height: '75%' }} />
        </BrowserFrame>
      );
    case 'admin':
      return (
        <BrowserFrame
          src="/images/Command%20center%20admin.png"
          alt="En Casa admin command center — reservations, messaging, and trip management"
          cropTop={5}
        >
          <BlurOverlay style={{ top: '50%', left: '55%', width: '42%', height: '45%' }} />
        </BrowserFrame>
      );
    case 'profile':
      return (
        <BrowserFrame
          src="/images/Trip%20Guidance.png"
          alt="En Casa guest portal — trip guidance and travel details"
          width={1800}
          height={1600}
          url="portal.encasasoftware.com"
        />
      );
    default:
      return <PortalPlaceholder />;
  }
}

function RoomSection({ room }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={room.image}
          alt={room.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Darker overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
              {room.label}
            </p>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-6 tracking-tight">
              {room.headline}
            </h2>
            <p className="text-base lg:text-[17px] text-white/70 leading-relaxed mb-8">
              {room.body}
            </p>

            {/* Software-style pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {room.pills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-xs text-white/80"
                >
                  {pill}
                </span>
              ))}
            </div>

            <Link
              href={room.cta.href}
              className="inline-flex items-center text-white text-sm font-medium group"
            >
              {room.cta.text}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>

          {/* Right — Product screenshot or placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="w-full max-w-md">
              <RoomMockup type={room.mockup} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HouseRooms() {
  return (
    <>
      {rooms.map((room) => (
        <RoomSection key={room.id} room={room} />
      ))}
    </>
  );
}
