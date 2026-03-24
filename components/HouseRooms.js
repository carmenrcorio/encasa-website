'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    mockup: 'party',
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

function PortalCard() {
  return (
    <div className="w-72 rounded-xl bg-[#111] border border-white/10 p-5 space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-gold/60">Guest Portal</p>
      <p className="font-serif text-base text-white">Villa Paradiso</p>
      <div className="bg-gold/10 border border-gold/20 rounded-lg p-2.5">
        <p className="text-[10px] text-gold/60 mb-0.5">Departure countdown</p>
        <p className="text-lg font-bold text-gold">10 days</p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          Day 1 — Arrival &amp; welcome dinner
        </div>
        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          Day 2 — Boat tour + cliff walk
        </div>
      </div>
    </div>
  );
}

function PartyCard() {
  return (
    <div className="w-72 rounded-xl bg-[#111] border border-white/10 p-5 space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-gold/60">Travel Party</p>
      <p className="text-sm font-medium text-white">Rodriguez Wedding — 150 guests</p>
      <div className="flex -space-x-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-full bg-olive/40 border-2 border-[#111] flex items-center justify-center">
            <span className="text-[10px] text-white/60">{String.fromCharCode(65 + i)}</span>
          </div>
        ))}
        <div className="w-8 h-8 rounded-full bg-gold/20 border-2 border-[#111] flex items-center justify-center">
          <span className="text-[10px] text-gold">+144</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">142 confirmed</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">8 pending</span>
      </div>
    </div>
  );
}

function AdminCard() {
  return (
    <div className="w-72 rounded-xl bg-[#111] border border-white/10 p-5 space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-gold/60">Today&apos;s Priorities</p>
      <div className="space-y-2">
        {[
          { label: 'Check-in: Nakamura party', status: 'Urgent', color: 'text-red-400 bg-red-500/10' },
          { label: 'Invoice #1042 — due today', status: 'Due', color: 'text-amber-400 bg-amber-500/10' },
          { label: 'Dietary update: Suite 3', status: 'New', color: 'text-blue-400 bg-blue-500/10' },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-lg p-2.5">
            <span className="text-xs text-white/70">{item.label}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="w-72 rounded-xl bg-[#111] border border-white/10 p-5 space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-gold/60">Guest Profile</p>
      <p className="text-sm font-medium text-white">Sarah Chen</p>
      <p className="text-[10px] text-white/40">3 trips · Preferred guest since 2024</p>
      <div className="flex flex-wrap gap-1.5">
        {['Ocean view', 'Vegan', 'Early riser', 'No shellfish', 'Anniversary: June'].map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold/80 border border-gold/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const mockupComponents = {
  portal: PortalCard,
  party: PartyCard,
  admin: AdminCard,
  profile: ProfileCard,
};

function RoomSection({ room }) {
  const MockupComponent = mockupComponents[room.mockup];

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

          {/* Right — Product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <MockupComponent />
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
