import Link from 'next/link';
import {
  MessageCircle,
  CalendarDays,
  Receipt,
  LayoutDashboard,
  FileText,
  Globe,
} from 'lucide-react';

export const metadata = {
  title: 'For Operators — En Casa',
  description: 'The tools that power the guest experience. AI concierge, itinerary builder, invoicing, and more.',
  openGraph: {
    title: 'For Operators — En Casa',
    description: 'The tools that power the guest experience. AI concierge, itinerary builder, invoicing, and more.',
    images: [{ url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const operatorFeatures = [
  {
    icon: MessageCircle,
    title: 'AI Concierge',
    desc: 'Responds as your brand, in your tone, 24/7. Handles common questions so your team handles exceptions.',
    details: ['Trained on your property details', 'Multi-language support', 'Escalation to human agents'],
  },
  {
    icon: CalendarDays,
    title: 'Itinerary Builder',
    desc: 'Drag-and-drop day-by-day plans. Attach activities, notes, and maps your guests actually use.',
    details: ['Template-based creation', 'Activity marketplace integration', 'Guest-facing timeline view'],
  },
  {
    icon: Receipt,
    title: 'Invoice & Folio Builder',
    desc: 'Full stay invoicing with line items, tax calculations, and Stripe-powered payment collection.',
    details: ['Itemized folio management', 'Automatic tax calculations', 'Payment links via email'],
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Command Center',
    desc: 'Reservations, CRM, task assignment, messaging, and analytics — all in one place.',
    details: ['Pipeline-style reservation view', 'Team task delegation', 'Real-time activity feed'],
  },
  {
    icon: FileText,
    title: 'Document Center',
    desc: 'Collect passports, contracts, and insurance. Organized per guest, accessible to your team.',
    details: ['Secure upload portal', 'Automatic reminders', 'Compliance-ready storage'],
  },
  {
    icon: Globe,
    title: 'White-Label Portal',
    desc: 'Your domain. Your colors. Your logo. Guests see your brand, not ours.',
    details: ['Custom domain support', 'Brand color & logo theming', 'Personalized email templates'],
  },
];

export default function OperatorsPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          For Operators
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive mb-6">
          Your command center for guest experience.
        </h1>
        <p className="text-lg text-olive/70 max-w-2xl mb-4 leading-relaxed">
          En Casa gives operators a single platform to manage reservations, guest profiles,
          itineraries, invoicing, and messaging — designed around the way boutique hospitality
          actually works.
        </p>
        <p className="text-base text-olive/50 max-w-2xl mb-16 leading-relaxed">
          Works standalone or alongside your existing PMS. No integration required to get started.
          Our dedicated onboarding team gets your first guest portal live.
        </p>

        {/* Deep-dive feature cards */}
        <div className="space-y-8 mb-16">
          {operatorFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="border border-olive/10 rounded-2xl p-8 lg:p-10 shadow-warm"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-medium text-olive mb-2">{f.title}</h3>
                    <p className="text-olive/70 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="flex flex-wrap gap-3">
                      {f.details.map((detail) => (
                        <li
                          key={detail}
                          className="inline-flex items-center px-3 py-1 bg-gold/10 rounded-full text-xs text-olive/60"
                        >
                          ✦ {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/early-access"
            className="inline-flex items-center px-8 py-3.5 bg-gold text-olive font-semibold rounded-full hover:bg-gold/90 transition-colors"
          >
            Request Early Access
          </Link>
        </div>
      </div>
    </div>
  );
}
