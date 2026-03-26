import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About — En Casa',
  description: 'Built by Carmen Corio. En Casa is the first dedicated guest experience platform for boutique hospitality.',
  openGraph: {
    title: 'About — En Casa',
    description: 'Built by Carmen Corio. En Casa is the first dedicated guest experience platform for boutique hospitality.',
    images: [{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive mb-8">
          En Casa means &ldquo;at home.&rdquo;
        </h1>

        {/* Accent image — warmth of gathering reinforces "at home" */}
        <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden mb-12 shadow-warm">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
            alt="Warm, vibrant luxury villa kitchen and gathering space"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory/20 to-transparent" />
        </div>

        <div className="space-y-6 text-lg text-olive/70 leading-relaxed mb-16">
          <p>
            Built by Carmen Corio — from years of working closely with operators
            across the hospitality industry — En Casa was born from
            a simple observation: the guest experience in boutique hospitality is broken.
          </p>
          <p>
            Property management systems handle operations. Guidebook apps handle information.
            But nobody has built a platform that treats the guest as the primary user.
          </p>
          <p>
            En Casa is the experience layer that sits on top of any PMS — or works
            entirely on its own. It&apos;s the platform that anticipates what guests need
            before they ask, and gives operators the tools to deliver it.
          </p>
          <p>
            We&apos;re not a PMS. We&apos;re not a guidebook. We&apos;re the layer that was
            always missing — crafted for the operators who care about getting
            every detail right.
          </p>
        </div>

        <div className="border-t border-olive/10 pt-12 mb-16">
          <h2 className="font-serif text-2xl text-olive mb-4">Carmen Corio</h2>
          <p className="font-mono text-xs uppercase tracking-wider text-gold mb-4">Founder &amp; CEO</p>
          <p className="text-olive/70 leading-relaxed max-w-xl">
            Carmen brings years of firsthand experience working with operators
            across luxury travel, property management, and boutique hospitality.
            She built En Casa because she understood both sides —
            what operators need to deliver, and what guests deserve to receive.
          </p>
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
