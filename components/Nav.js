'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/operators', label: 'Product' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/about', label: 'About' },
];

function ArchLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path
        d="M4 20 L4 12 Q4 4 12 4 Q20 4 20 12 L20 20"
        stroke="#C8A951"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHeroPage = pathname === '/';
  const useLightNav = !isHeroPage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useLightNav
            ? 'bg-[#FAF6EF]/95 backdrop-blur-md border-b border-stone-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <ArchLogo />
            <span className={`font-sans text-xl lg:text-[22px] font-semibold transition-colors ${useLightNav ? 'text-nav-olive' : 'text-white'}`}>
              En Casa
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  useLightNav ? 'text-nav-olive hover:text-gold' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — Login + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://app.encasasoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors ${
                useLightNav ? 'text-nav-olive hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Login
            </a>
            <Link
              href="/early-access"
              className="inline-flex items-center px-5 py-2 bg-gold text-olive text-sm font-semibold rounded-full hover:bg-gold/90 transition-colors"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? 'rotate-45 translate-y-1 bg-white'
                  : useLightNav ? 'bg-nav-olive' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? '-rotate-45 -translate-y-1 bg-white'
                  : useLightNav ? 'bg-nav-olive' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-sans text-2xl font-semibold text-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://app.encasasoftware.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white/70 hover:text-white transition-colors"
                >
                  Login
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/early-access"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center px-8 py-3 bg-gold text-olive font-semibold rounded-full mt-2"
                >
                  Request Access
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
