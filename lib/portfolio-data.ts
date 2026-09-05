import { PortfolioProject } from './types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'the-roastery-al-quoz',
    title: 'Zero-Commission Online Ordering & Delivery System',
    clientName: 'The Roastery & Kitchen',
    location: 'Al Quoz Industrial 1 & Dubai Marina, UAE',
    category: 'restaurants',
    categoryLabel: 'Restaurants & Cafés',
    image: '/portfolio/restaurant-ordering.jpg',
    metrics: {
      primary: '+184%',
      label: 'Direct orders vs aggregator apps',
    },
    summary:
      'A bespoke direct-to-consumer online ordering and pickup platform designed to eliminate heavy 30% aggregator commissions for an artisanal Dubai sourdough bakery and specialty coffee brand.',
    challenge:
      'The client was losing over AED 28,000 monthly to food delivery apps like Talabat and Deliveroo in aggregator commission fees, while having zero direct customer contact details for remarketing.',
    solution:
      'Quantum Flow built a mobile-first Next.js ordering web app featuring 1-tap Apple Pay checkout, automated WhatsApp delivery updates to the customer, and a real-time kitchen display tablet app.',
    deliverables: [
      'Zero-Commission Online Ordering Platform',
      'Apple Pay, Google Pay & UAE Gateway Integration',
      'Direct WhatsApp Order Notification Bot',
      'Live Kitchen Order Management Dashboard',
      'Local Google Maps 3-Pack Optimization',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Stripe UAE', 'WhatsApp Business API'],
  },
  {
    id: 'aura-dental-aesthetics',
    title: 'VIP Clinic Patient Booking & Consultation Portal',
    clientName: 'Aura Dental & Aesthetics Clinic',
    location: 'Jumeirah Beach Road, Dubai, UAE',
    category: 'clinics',
    categoryLabel: 'Clinics & Healthcare',
    image: '/portfolio/clinic-booking.jpg',
    metrics: {
      primary: '240+',
      label: 'Qualified patient leads per month',
    },
    summary:
      'High-conversion luxury medical and aesthetic booking website with real-time doctor schedule synchronization, treatment catalogs, and automated SMS/WhatsApp reminders.',
    challenge:
      'The clinic struggled with high patient no-show rates (over 22%) and a clunky phone-only booking process that turned away international and VIP expatriate clients.',
    solution:
      'Designed a prestige medical booking portal with interactive doctor portfolios, verified Google patient reviews, consultation deposit pre-authorization, and bilingual Arabic/English navigation.',
    deliverables: [
      'VIP Patient Booking Calendar Engine',
      'Doctor & Treatment Profile Showcase',
      'Automated SMS & WhatsApp Appointment Reminders',
      'Google Ads Landing Page Optimization (ROAS 4.2x)',
      'Arabic / English Multilingual System',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailored CSS', 'Twilio SMS', 'Google Ads API'],
  },
  {
    id: 'luxe-botanicals-downtown',
    title: 'Luxury Perfume & Artisanal E-Commerce Store',
    clientName: 'Luxe Botanicals',
    location: 'Downtown Dubai, UAE',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    image: '/portfolio/luxury-ecommerce.jpg',
    metrics: {
      primary: 'AED 420K+',
      label: 'Direct online sales in 90 days',
    },
    summary:
      'A high-fashion headless e-commerce storefront tailored for high-ticket GCC perfume collectors, featuring instant Apple Pay, Tabby buy-now-pay-later, and same-day Dubai courier integration.',
    challenge:
      'A generic Shopify template was loading in 4.8 seconds on mobile, causing 60% of paid Instagram and Google Ads traffic to drop off before seeing the fragrance catalog.',
    solution:
      'Migrated to a lightning-fast custom headless storefront loading in 620ms, with rich sensory product animations, Tabby installment checkout, and localized UAE gift-wrapping options.',
    deliverables: [
      'Sub-second Headless E-Commerce Store',
      'Apple Pay, Network International & Tabby Checkout',
      'Instagram Shop & Meta Product Feed Sync',
      'Localized UAE Courier Automated Waybill Generation',
      'VIP Loyalty & Gifting Portal',
    ],
    techStack: ['Next.js', 'Shopify Storefront API', 'Tabby BNPL', 'Apple Pay', 'Vercel Edge'],
  },
  {
    id: 'velvet-lounge-palm-jumeirah',
    title: 'Boutique Salon & Wellness Reservation Platform',
    clientName: 'Velvet Hair & Wellness Lounge',
    location: 'Palm Jumeirah, Dubai, UAE',
    category: 'salons',
    categoryLabel: 'Salons & Spas',
    image: '/portfolio/salon-spa.jpg',
    metrics: {
      primary: '92%',
      label: 'Online self-booking adoption rate',
    },
    summary:
      'An elegant mobile-first salon appointment reservation platform with stylist portfolios, service duration calculators, and integrated bridal package inquiries.',
    challenge:
      'Front-desk staff spent 4 hours every day handling phone calls, Instagram DMs, and scheduling conflicts, resulting in double-bookings and lost revenue.',
    solution:
      'Built a seamless mobile reservation engine allowing clients to pick their preferred master stylist, select treatment add-ons, and secure their time slot in under 60 seconds.',
    deliverables: [
      'Master Stylist & Treatment Booking Engine',
      'Instagram Story Link-in-Bio Landing Experience',
      'Bridal & VIP Event Group Booking Flow',
      'Automated Re-booking Loyalty Sequences',
      'Local Dubai SEO & Google Maps Verification',
    ],
    techStack: ['Next.js', 'React', 'Cloudflare Workers', 'Google Maps API'],
  },
  {
    id: 'al-wasl-capital-difc',
    title: 'Institutional Family Office & Private Equity Platform',
    clientName: 'Al Wasl Capital Partners',
    location: 'Gate Village 5, DIFC, Dubai, UAE',
    category: 'corporate',
    categoryLabel: 'Corporate & Tech',
    image: '/portfolio/corporate-portal.jpg',
    metrics: {
      primary: '100%',
      label: 'DFSA Regulatory & Security Compliance',
    },
    summary:
      'Prestige institutional web platform and secure investor portal for a DIFC-regulated multi-family office and private equity fund managing assets across the GCC.',
    challenge:
      'Needed an authoritative digital presence matching the stature of tier-one global investment banks while adhering to strict DFSA regulatory disclosure and data privacy standards.',
    solution:
      'Engineered an ultra-secure, bilingual institutional portal with interactive portfolio performance summaries, gated LP investor document room, and encrypted enquiry dispatch.',
    deliverables: [
      'Institutional Bilingual (Arabic/English) Architecture',
      'Gated LP Investor Document Room',
      'DFSA Regulatory Compliance Framework',
      'Enterprise Grade CDN & Security Hardening',
      'C-Suite Executive Biography Showcase',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailored Design System', 'Cloudflare Enterprise'],
  },
];
