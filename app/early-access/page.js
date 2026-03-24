'use client';

import { useState } from 'react';

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect to form backend (e.g. Formspree, Supabase, or API route)
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">
          Early Access
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-olive mb-4 text-center">
          Request early access.
        </h1>
        <p className="text-lg text-olive/70 text-center mb-12 leading-relaxed">
          We&apos;re onboarding select operators during our early access period.
          Our implementation team handles your setup — you focus on your guests.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✦</span>
            </div>
            <h2 className="font-serif text-2xl text-olive mb-3">
              We&apos;ll be in touch.
            </h2>
            <p className="text-olive/70">
              Thank you for your interest. Our team will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-olive/60 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-white border border-olive/15 rounded-xl text-olive placeholder:text-olive/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                placeholder="Carmen Corio"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-olive/60 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white border border-olive/15 rounded-xl text-olive placeholder:text-olive/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                placeholder="carmen@encasasoftware.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block font-mono text-xs uppercase tracking-wider text-olive/60 mb-2">
                Company / Property
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full px-4 py-3 bg-white border border-olive/15 rounded-xl text-olive placeholder:text-olive/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                placeholder="Villa Paradiso"
              />
            </div>

            <div>
              <label htmlFor="type" className="block font-mono text-xs uppercase tracking-wider text-olive/60 mb-2">
                Operator Type
              </label>
              <select
                id="type"
                name="type"
                className="w-full px-4 py-3 bg-white border border-olive/15 rounded-xl text-olive focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
              >
                <option value="">Select one</option>
                <option value="villa">Villa / Boutique Hotel</option>
                <option value="events">Weddings & Events</option>
                <option value="retreats">Corporate Retreats</option>
                <option value="travel">Group Travel Agency</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-olive/60 mb-2">
                Anything else? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-4 py-3 bg-white border border-olive/15 rounded-xl text-olive placeholder:text-olive/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                placeholder="Tell us about your operation..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gold text-olive font-semibold rounded-full hover:bg-gold/90 transition-colors"
            >
              Request Early Access
            </button>

            <p className="text-xs text-olive/40 text-center">
              No credit card required. No commitment.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
