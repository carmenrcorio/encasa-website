import Link from 'next/link';

const footerLinks = {
  Product: [
    { href: '/operators', label: 'For Operators' },
    { href: '/guests', label: 'For Guests' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/early-access', label: 'Early Access' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: 'https://app.encasasoftware.com', label: 'Login', external: true },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <span className="font-sans text-xl font-semibold">En Casa</span>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              The experience layer your PMS never built.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/30">
          &copy; {new Date().getFullYear()} En Casa Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
