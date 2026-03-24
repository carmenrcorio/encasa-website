import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://encasasoftware.com'),
  title: 'En Casa — The Guest Experience Platform for Luxury Hospitality',
  description: 'The experience layer your PMS never built. White-label guest portals, AI concierge, itinerary builder, and activity upsells for boutique hospitality operators.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    title: 'En Casa — The Guest Experience Platform for Luxury Hospitality',
    description: 'The experience layer your PMS never built. White-label guest portals, AI concierge, itinerary builder, and activity upsells for boutique hospitality operators.',
    url: 'https://encasasoftware.com',
    siteName: 'En Casa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'En Casa — Guest Experience Platform for Luxury Hospitality',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En Casa — Guest Experience Platform',
    description: 'The experience layer your PMS never built.',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://encasasoftware.com',
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className="font-sans">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  'analytics_storage': 'granted'
                });
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
