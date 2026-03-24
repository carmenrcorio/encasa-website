import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — En Casa',
  description: 'En Casa Privacy Policy. Learn how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy — En Casa',
    description: 'Learn how En Casa collects, uses, and protects your data.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Legal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-olive mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-olive/50 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-olive/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-olive mb-3">What Data We Collect</h2>
            <p>
              When you sign up for early access or use our platform, we may collect the following information:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Company or property name</li>
              <li>Operator type (villa operator, event planner, retreat organizer, or group travel agency)</li>
              <li>Any additional information you provide in your message</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">How We Use Your Data</h2>
            <p>
              We use the information you provide to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 ml-4">
              <li>Contact you about early access to En Casa</li>
              <li>Understand the needs of our prospective users</li>
              <li>Improve our product and services</li>
              <li>Send relevant product updates (you can unsubscribe at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal information with third parties for their
              marketing purposes. We may share data with service providers who help us operate our
              platform (such as hosting and email delivery), subject to strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information.
              Data is encrypted in transit and at rest. Access to personal data is restricted to
              authorized personnel only.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information at any time.
              You may also request a copy of the data we hold about you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-olive mb-3">Contact</h2>
            <p>
              For privacy-related inquiries, contact us at{' '}
              <a href="mailto:privacy@encasasoftware.com" className="text-gold hover:underline">
                privacy@encasasoftware.com
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
