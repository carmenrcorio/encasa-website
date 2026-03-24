import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'For Guests — En Casa',
  description: 'What your guests see: a private branded portal with itinerary, concierge, and curated experiences.',
  openGraph: {
    title: 'For Guests — En Casa',
    description: 'What your guests see: a private branded portal with itinerary, concierge, and curated experiences.',
    images: [{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const journeySteps = [
  {
    step: '01',
    title: 'Receive Your Portal Link',
    description: 'No app download. No account creation. Your guest clicks a single link and arrives at their private, branded portal — designed to feel like an extension of your property.',
  },
  {
    step: '02',
    title: 'Explore Their Itinerary',
    description: 'A day-by-day plan laid out with activities, dining reservations, local recommendations, and travel logistics. Every detail in one place, beautifully presented.',
  },
  {
    step: '03',
    title: 'Ask the AI Concierge',
    description: 'Questions at midnight? Dietary changes? Restaurant recommendations? The AI concierge responds instantly in your brand\'s voice — so your team handles only the exceptions.',
  },
  {
    step: '04',
    title: 'Book Curated Experiences',
    description: 'Spa treatments, private chefs, sunset sailing, vineyard tours — guests browse and book directly through their portal. Every booking is revenue for you.',
  },
  {
    step: '05',
    title: 'Upload Documents Securely',
    description: 'Passports, travel insurance, signed agreements — guests upload everything through a secure portal. No more email attachments or WhatsApp photos.',
  },
  {
    step: '06',
    title: 'Stay Connected Across Trips',
    description: 'Guest profiles remember room preferences, dietary needs, celebrations, and allergies — across every trip they take with you. Returning guests feel instantly recognized.',
  },
];

export default function GuestsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero accent image */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
          alt="Luxury villa interior where guests gather"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-ivory" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-16 relative z-10 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          For Guests
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive mb-6">
          A private portal, crafted for every stay.
        </h1>
        <p className="text-lg text-olive/70 max-w-2xl mb-4 leading-relaxed">
          Every guest receives their own branded portal — with itinerary, concierge,
          curated experiences, and everything they need before and during their stay.
        </p>
        <p className="text-base text-olive/50 max-w-2xl mb-16 leading-relaxed">
          No app download. No login friction. Just a link that feels like luxury.
        </p>

        {/* Guest journey walkthrough */}
        <div className="space-y-0 mb-16">
          {journeySteps.map((step, i) => (
            <div
              key={step.step}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Connector line */}
              {i < journeySteps.length - 1 && (
                <div className="absolute left-[22px] top-10 w-px h-[calc(100%-16px)] bg-gold/20" />
              )}

              {/* Step number */}
              <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="font-mono text-xs text-gold font-medium">{step.step}</span>
              </div>

              <h3 className="font-serif text-xl text-olive mb-2 pt-1.5">{step.title}</h3>
              <p className="text-olive/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/early-access"
            className="inline-flex items-center px-8 py-3.5 bg-gold text-olive font-semibold rounded-full hover:bg-gold/90 transition-colors"
          >
            Request Early Access
          </Link>
          <p className="text-sm text-olive/50 mt-4">Show your operators what their guests will experience.</p>
        </div>
      </div>
    </div>
  );
}
