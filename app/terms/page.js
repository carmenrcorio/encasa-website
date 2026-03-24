import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — En Casa',
  description: 'En Casa Terms of Service. Review the terms governing use of our platform.',
  openGraph: {
    title: 'Terms of Service — En Casa',
    description: 'Review the terms governing use of the En Casa platform.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Legal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-olive mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-olive/50 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-olive/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Early Access Program</h2>
            <p>
              En Casa is currently in early access. By signing up, you agree to participate in our
              early access program. Features, pricing, and availability may change as we refine
              the platform based on user feedback.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">No Warranty</h2>
            <p>
              During the early access period, the platform is provided &ldquo;as is&rdquo; without warranties
              of any kind, whether express or implied. We do not guarantee uninterrupted or error-free
              operation of the service. We are actively developing the platform and will work to
              resolve issues promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Acceptable Use</h2>
            <p>
              You agree to use En Casa only for lawful purposes related to hospitality operations.
              You may not:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 ml-4">
              <li>Use the platform to transmit harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to the platform or its systems</li>
              <li>Reverse engineer, decompile, or disassemble any part of the platform</li>
              <li>Use the platform in any way that could harm or impair its performance</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Your Content</h2>
            <p>
              You retain ownership of all content you upload to En Casa, including guest information,
              itineraries, and documents. We will not access, use, or share your content except as
              necessary to provide and improve the service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Termination</h2>
            <p>
              Either party may terminate the early access agreement at any time. Upon termination,
              we will provide you with a reasonable period to export your data before it is removed
              from our systems.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:hello@encasasoftware.com" className="text-gold hover:underline">
                hello@encasasoftware.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-olive/10">
          <Link href="/" className="text-sm text-gold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
