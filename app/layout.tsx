import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { NavbarProvider } from '@/components/layout/NavbarContext';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import IntroAnimation from '@/components/ui/IntroAnimation';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quantum Flow — Web Design & Digital Marketing Agency Dubai | Website Development UAE',
  description:
    'Top web design & digital marketing agency in Dubai. We build fast websites, run Google Ads, and handle SEO for restaurants, clinics, salons & local businesses across the UAE. Get a free quote today.',
  keywords:
    'web design Dubai, website development Dubai, digital marketing Dubai, SEO Dubai, Google Ads Dubai, website design agency UAE, lead generation Dubai, business website Dubai, website maintenance Dubai, web development company Dubai',
  metadataBase: new URL('https://quantumflowit.com'),
  alternates: {
    canonical: 'https://quantumflowit.com',
  },
  icons: {
    icon: [{ url: '/qf-logo-avatar.png', type: 'image/png' }],
    shortcut: '/qf-logo-avatar.png',
    apple: [{ url: '/qf-logo-avatar.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Quantum Flow — Web Design & Digital Marketing Agency Dubai',
    description:
      'Fast websites, Google Ads & SEO for Dubai restaurants, clinics, salons & local businesses. Free consultation available.',
    url: 'https://quantumflowit.com',
    siteName: 'Quantum Flow',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: 'https://quantumflowit.com/QuantumFlowLogo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Quantum Flow — Web Design & Digital Marketing Agency Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Flow — Web Design & Digital Marketing Agency Dubai',
    description:
      'Fast websites, Google Ads & SEO for Dubai restaurants, clinics, salons & local businesses. Free consultation available.',
    images: ['https://quantumflowit.com/QuantumFlowLogo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
    name: 'Quantum Flow Information Technologies',
    alternateName: 'Quantum Flow Dubai',
    description:
      'Leading website design, online ordering platforms, and digital marketing agency for clinics, restaurants, salons, and businesses in Dubai, UAE.',
    url: 'https://quantumflowit.com',
    logo: 'https://quantumflowit.com/QuantumFlowLogo.jpeg',
    image: 'https://quantumflowit.com/QuantumFlowLogo.jpeg',
    telephone: '+971528903292',
    email: 'support@quantumflowit.com',
    priceRange: 'AED 4,500 – AED 25,000',
    currenciesAccepted: 'AED, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, Stripe',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'City', name: 'Sharjah' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Agency Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Web Development',
            description: 'Custom high-performance websites built with Next.js and React.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce & Online Ordering',
            description: 'Direct commerce websites with UAE payment gateway integration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads & Performance Marketing',
            description: 'High-converting search and display ad campaigns for Dubai businesses.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO & Google Maps Optimization',
            description: 'Rank local UAE businesses on Google Search and Google Maps.',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@quantumflowit.com',
      telephone: '+971528903292',
      contactType: 'sales',
      availableLanguage: ['English', 'Arabic'],
    },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/qf-logo-avatar.png" type="image/png" />
        <link rel="apple-touch-icon" href="/qf-logo-avatar.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('qf-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #qf-intro-curtain {
                position: fixed;
                inset: 0;
                width: 100vw;
                height: 100vh;
                z-index: 999999;
                pointer-events: none;
                overflow: hidden;
                background-color: #070B16;
              }
            `,
          }}
        />
      </head>
      <body>
        <div className="orb orb-1" aria-hidden="true"></div>
        <div className="orb orb-2" aria-hidden="true"></div>
        <div className="orb orb-3" aria-hidden="true"></div>
        <div className="orb orb-4" aria-hidden="true"></div>
        <div className="bg-field" aria-hidden="true"></div>
        <div className="bg-grid" aria-hidden="true"></div>
        <div className="noise" aria-hidden="true"></div>
        <IntroAnimation />
        <ThemeProvider>
          <NavbarProvider>
            {children}
          </NavbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
