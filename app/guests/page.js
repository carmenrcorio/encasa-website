import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from '../../components/BrowserFrame';
import BlurOverlay from '../../components/BlurOverlay';
import { PortalPlaceholderLabeled } from '../../components/PortalPlaceholder';

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
    screenshot: '/images/Guest%20landing%20page.png',
    screenshotAlt: 'En Casa guest portal — private branded landing page',
    blur: { top: '0%', left: '20%', width: '55%', height: '12%' },
  },
  {
    step: '02',
    title: 'Explore Their Itinerary',
    description: 'A day-by-day plan laid out with activities, dining reservations, local recommendations, and travel logistics. Every detail in one place, beautifully presented.',
    screenshot: '/images/Guest%20landing%20page%202.png',
    screenshotAlt: 'En Casa guest portal — day-by-day itinerary view',
    blur: { top: '0%', left: '20%', width: '55%', height: '12%' },
  },
  {
    step: '03',
    title: 'Ask the AI Concierge',
    description: 'Questions at midnight? Dietary changes? Restaurant recommendations? The AI concierge responds instantly in your brand\'s voice — so your team handles only the exceptions.',
    screenshot: '/images/Trip%20Guidance.png',
    screenshotAlt: 'En Casa guest portal — trip guidance and AI concierge',
    blur: null,
  },
  {
    step: '04',
    title: 'Book Curated Experiences',
    description: 'Spa treatments, private chefs, sunset sailing, vineyard tours — guests browse and book directly through their portal. Every booking is revenue for you.',
    screenshot: '/images/Activity%20-%20Guest%20side.png',
    screenshotAlt: 'En Casa guest portal — curated local experiences to browse and book',
    blur: null,
  },
  {
    step: '05',
    title: 'Upload Documents Securely',
    description: 'Passports, travel insurance, signed agreements — guests upload everything through a secure portal. No more email attachments or WhatsApp photos.',
    screenshot: null,
    placeholder: { label: 'Guest Portal', section: 'Documents' },
  },
  {
    step: '06',
    title: 'Stay Connected Across Trips',
    description: 'Guest profiles remember room preferences, dietary needs, celebrations, and allergies — across every trip they take with you. Returning guests feel instantly recognized.',
    screenshot: null,
    placeholder: { label: 'Guest Portal', section: 'Profile' },
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

      <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-16 relative z-10 pb-24">
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

        {/* Guest journey with real screenshots */}
        <div className="space-y-16 mb-16">
          {journeySteps.map((step, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={step.step}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                {/* Text */}
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-xs text-gold font-medium">{step.step}</span>
                    </div>
                    <h3 className="font-serif text-xl text-olive">{step.title}</h3>
                  </div>
                  <p className="text-olive/60 leading-relaxed pl-[60px]">{step.description}</p>
                </div>
                {/* Screenshot or placeholder */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  {step.screenshot ? (
                    <BrowserFrame
                      src={step.screenshot}
                      alt={step.screenshotAlt}
                      width={1800}
                      height={1650}
                      url="portal.encasasoftware.com"
                    >
                      {step.blur && <BlurOverlay style={step.blur} />}
                    </BrowserFrame>
                  ) : (
                    <PortalPlaceholderLabeled
                      label={step.placeholder.label}
                      section={step.placeholder.section}
                    />
                  )}
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
          <p className="text-sm text-olive/50 mt-4">Show your operators what their guests will experience.</p>
        </div>
      </div>
    </div>
  );
}
