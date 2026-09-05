import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  keywords: 'web design Dubai, website development Dubai, digital marketing Dubai, SEO Dubai, Google Ads Dubai, website design agency UAE, lead generation Dubai, business website Dubai, website maintenance Dubai, web development company Dubai',
  metadataBase: new URL('https://quantumflowit.com'),
  openGraph: {
    title: 'Quantum Flow — Web Design & Digital Marketing Agency Dubai',
    description:
      'Fast websites, Google Ads & SEO for Dubai restaurants, clinics, salons & local businesses. Free consultation available.',
    url: 'https://quantumflowit.com',
    siteName: 'Quantum Flow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Flow — Web Design & Digital Marketing Agency Dubai',
    description:
      'Fast websites, Google Ads & SEO for Dubai restaurants, clinics, salons & local businesses. Free consultation available.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Quantum Flow Information Technologies',
    description:
      'Premium website design, online ordering systems, and mobile apps for local cafes, restaurants, and shops in Dubai, UAE.',
    url: 'https://quantumflowit.com',
    logo: 'https://quantumflowit.com/QuantumFlowLogo.jpeg',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {children}
      </body>
    </html>
  );
}
