import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { TechCard } from '@/lib/types';

const TECH_CARDS: TechCard[] = [
  { icon: '💳', title: 'Secure Payments', description: 'Apple Pay, Google Pay, and Stripe' },
  { icon: '📱', title: 'Mobile-First Design', description: 'Optimized for phone screens' },
  { icon: '📅', title: 'Online Booking', description: 'Table reservations & appointments' },
  { icon: '🍔', title: 'Digital Menus', description: 'Interactive, fast-loading menus' },
  { icon: '💬', title: 'WhatsApp Chat', description: 'Direct chat and order updates' },
  { icon: '📈', title: 'Local SEO', description: 'Rank higher on Google Maps' },
  { icon: '🛍️', title: 'Instagram Shop', description: 'Sync products to social feed' },
  { icon: '⚙️', title: 'Easy Dashboard', description: 'Edit prices & photos instantly' },
  { icon: '⚡', title: 'Fast Loading', description: 'Optimized for slow connections' },
  { icon: '💌', title: 'Email Newsletters', description: 'Build loyalty and send offers' },
  { icon: '📊', title: 'Customer Analytics', description: 'Track visits and sales data' },
  { icon: '🔒', title: 'Secure & Reliable', description: '100% safe checkout security' },
];

export default function TechShowcase() {
  return (
    <section className="section tech-showcase section-alt">
      <div className="wrap">
        <ScrollReveal
          className="section-head"
          style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: '48px' }}
        >
          <div>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Features & Integrations
            </div>
            <h2 className="h2">Everything your website needs to succeed.</h2>
          </div>
          <p className="lede" style={{ marginTop: '20px' }}>
            We design and build features that make ordering, booking, and finding your business smooth and painless for your customers.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="tech-grid">
            {TECH_CARDS.map((card, i) => (
              <div key={i} className="tech-card">
                <div className="tech-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
