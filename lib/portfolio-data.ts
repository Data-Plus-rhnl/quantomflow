import { PortfolioProject } from './types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'the-roastery-al-quoz',
    title: 'Direct Online Ordering & Delivery System',
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
      'Direct Online Ordering Platform',
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
    id: 'camo-friday',
    title: 'Mental Health Awareness Movement & Apparel Platform',
    clientName: '#CAMOFRIDAY',
    location: 'Canada & Global Online Community',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Apparel',
    image: '/portfolio/camofriday.png',
    metrics: {
      primary: '100%',
      label: 'Proceeds fund mental health initiatives & scholarships',
    },
    summary:
      'A purpose-driven movement platform and official merchandise storefront designed to bring mental illness out from camouflage — fostering honest conversations through community gear, volunteer squad onboarding, and direct donation portals.',
    challenge:
      'The #CAMOFRIDAY movement needed a unified digital destination to educate the public on mental health realities (1 in 5 people), organize nationwide "Wear Camo on Friday" campaigns, and sell official merchandise where 100% of proceeds fund scholarships.',
    solution:
      'Quantum Flow engineered a modern, high-conversion web experience featuring an interactive community handbook, story submission portal, volunteer registration engine, and an apparel storefront with seamless online checkout.',
    deliverables: [
      'Movement Awareness & Story Showcase Engine',
      'Official Camo Merchandise Apparel Storefront',
      'Volunteer Squad Application & Onboarding Flow',
      'Direct Donation & Mental Health Scholarship Gateway',
      'Interactive Mental Health Resource Handbook',
      'Global Community Social Campaign Sync',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Stripe', 'Vercel Edge'],
    liveUrl: 'https://camo-friday.vercel.app/',
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
    id: 'annar-childcare',
    title: 'Premium Childcare Centre Website & Enrolment Platform',
    clientName: 'Annar Childcare',
    location: 'Dubai, UAE',
    category: 'childcare',
    categoryLabel: 'Childcare & Education',
    image: '/portfolio/AnnarChildcare.png',
    metrics: {
      primary: '+3x',
      label: 'Enrolment enquiries in first month',
    },
    summary:
      'A warm, trust-first childcare website built to convert anxious parents into enrolled families — featuring virtual tour integration, transparent curriculum showcases, and a seamless online enquiry flow.',
    challenge:
      'Annar Childcare was relying on word-of-mouth and a dated static site that gave parents no confidence in the safety standards, curriculum quality, or enrolment process before visiting in person.',
    solution:
      'We designed a reassuring, premium web presence with a virtual centre walkthrough, staff credentials showcase, EYFS curriculum breakdown, and a frictionless multi-step enquiry form with instant WhatsApp confirmation.',
    deliverables: [
      'Trust-Forward Homepage with Virtual Tour',
      'EYFS Curriculum & Age-Group Programme Pages',
      'Staff & Qualifications Showcase',
      'Multi-Step Enrolment Enquiry Form',
      'WhatsApp Instant Confirmation Workflow',
      'Local Dubai SEO & Google Maps Optimisation',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API', 'Vercel'],
    liveUrl: undefined,
  },
  {
    id: 'vahid-dorri-personal-brand',
    title: 'Executive Personal Brand & Portfolio Website',
    clientName: 'Vahid Dorri',
    location: 'Dubai, UAE',
    category: 'personal-brand',
    categoryLabel: 'Personal Brand & Executive',
    image: '/portfolio/VahidDorri.png',
    metrics: {
      primary: '10x',
      label: 'LinkedIn profile visit-to-enquiry rate',
    },
    summary:
      'A sleek executive personal brand platform that positions Vahid Dorri as a thought leader — combining a curated project portfolio, speaking engagements timeline, and a direct high-value consultation booking funnel.',
    challenge:
      'Despite a high-profile career and strong industry reputation, there was no single authoritative online destination to direct investors, media, or potential partners — leading to lost high-value opportunities.',
    solution:
      'Crafted a minimalist prestige personal site with an animated hero statement, curated career highlights, media appearances log, and a gated consultation booking form with calendar integration.',
    deliverables: [
      'Executive Hero & Personal Statement Design',
      'Career Highlights & Portfolio Showcase',
      'Speaking & Media Appearances Timeline',
      'Gated Consultation Booking with Calendar Sync',
      'LinkedIn & Social Meta Card Optimisation',
      'Performance-First Deployment on Vercel Edge',
    ],
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Calendly API', 'Vercel Edge'],
    liveUrl: undefined,
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
