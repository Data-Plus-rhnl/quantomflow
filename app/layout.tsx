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
  title: 'Quantum Flow — Website Design & Online Ordering for Dubai Businesses',
  description:
    'Quantum Flow — Premium website design, online ordering systems, and mobile apps for local cafes, restaurants, and shops in Dubai, UAE.',
  metadataBase: new URL('https://quantumflowit.com'),
  openGraph: {
    title: 'Quantum Flow — Website Design & Online Ordering for Dubai Businesses',
    description:
      'Premium website design, online ordering systems, and mobile apps for local cafes, restaurants, and shops in Dubai, UAE.',
    url: 'https://quantumflowit.com',
    siteName: 'Quantum Flow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Flow — Website Design & Online Ordering for Dubai Businesses',
    description:
      'Premium website design, online ordering systems, and mobile apps for local cafes, restaurants, and shops in Dubai, UAE.',
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
