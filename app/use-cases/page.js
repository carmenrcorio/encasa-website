import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Who It\'s For — En Casa',
  description: 'En Casa is designed for villa operators, event planners, retreat organizers, and group travel agencies.',
  openGraph: {
    title: 'Who It\'s For — En Casa',
    description: 'En Casa is designed for villa operators, event planners, retreat organizers, and group travel agencies.',
    images: [{ url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const useCases = [
  {
    label: 'Villa Operators',
    headline: 'Give every guest a private, branded experience.',
    body: 'Replace PDFs, scattered messages, and manual coordination with a single guest portal. Itineraries, concierge, upsells, and document management — all under your brand.',
    scenario: '"We used to send a 12-page PDF and hope guests read it. Now every guest has a live portal with their itinerary, our concierge, and bookable experiences. Our upsell revenue doubled in the first month."',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80',
    imageAlt: 'Luxury villa terrace at golden hour',
  },
  {
    label: 'Wedding & Event Planners',
    headline: 'Every attendee informed. Every detail handled.',
    body: 'A branded portal for each guest with timeline, venue details, dietary collection, and an AI concierge that answers questions so you don\'t have to.',
    scenario: '"150 guests, zero midnight texts. Every attendee had their own portal with the timeline, venue details, and dietary preferences. The concierge handled 90% of questions before they reached us."',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    imageAlt: 'Elegant outdoor wedding garden reception',
  },
  {
    label: 'Corporate Retreat Organizers',
    headline: 'Run your retreat like a five-star operation.',
    body: 'The admin command center gives your team reservations, guest management, invoicing, and triage — designed for multi-day, multi-venue programs.',
    scenario: '"We ran a 3-day executive retreat across two venues with 40 attendees. Task assignment, real-time messaging, and the folio builder saved our team 20+ hours of manual work."',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    imageAlt: 'Modern corporate retreat workspace',
  },
  {
    label: 'Group Travel Agencies',
    headline: 'Every traveler. Every trip. Personalized.',
    body: 'Persistent guest profiles remember preferences, dietary needs, and celebrations across every trip. Trip switching, group management, and custom domains included.',
    scenario: '"Our repeat guests no longer have to tell us their preferences. En Casa remembers everything — room type, dietary restrictions, even their anniversary. It makes every trip feel personal."',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80',
    imageAlt: 'Group of women travelers celebrating together',
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Who It&apos;s For
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive mb-6">
          Designed around the operators who care most.
        </h1>
        <p className="text-lg text-olive/70 max-w-2xl mb-16 leading-relaxed">
          En Casa works as a standalone platform — no PMS required.
          Operators can be live in days, not weeks.
        </p>

        <div className="space-y-16">
          {useCases.map((uc, i) => (
            <div
              key={uc.label}
              className="border border-olive/10 rounded-2xl overflow-hidden shadow-warm"
            >
              {/* Image header */}
              <div className="relative h-48 lg:h-56">
                <Image
                  src={uc.image}
                  alt={uc.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-2">
                    {uc.label}
                  </p>
                  <h2 className="font-serif text-2xl lg:text-3xl text-white">
                    {uc.headline}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-olive/70 leading-relaxed mb-6 max-w-2xl">
                  {uc.body}
                </p>
                <blockquote className="border-l-2 border-gold/40 pl-4 italic text-olive/50 text-sm leading-relaxed">
                  {uc.scenario}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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
