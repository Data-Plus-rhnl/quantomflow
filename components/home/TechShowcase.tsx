'use client';

import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import {
  CreditCard,
  Smartphone,
  CalendarCheck,
  UtensilsCrossed,
  MessageCircle,
  MapPin,
  ShoppingBag,
  LayoutDashboard,
  Zap,
  Mail,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

// ─── Feature data with distinct brand colors ──────────────────────────────────

const FEATURES = [
  {
    Icon: CreditCard,
    title: 'Secure Payments',
    description: 'Apple Pay, Google Pay & Stripe — zero-friction checkout your customers trust.',
    color: '#38BDF8',
    tag: 'Payments',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every pixel engineered for the phone screen where 80% of your traffic comes from.',
    color: '#A78BFA',
    tag: 'Design',
  },
  {
    Icon: CalendarCheck,
    title: 'Online Booking',
    description: 'Real-time table reservations & appointment scheduling, zero phone calls needed.',
    color: '#34D399',
    tag: 'Booking',
  },
  {
    Icon: UtensilsCrossed,
    title: 'Digital Menus',
    description: 'Interactive, fast-loading menus with live price and availability updates.',
    color: '#FF8C42',
    tag: 'F&B',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: 'Direct order updates & customer support via the channel they already use daily.',
    color: '#34D399',
    tag: 'Messaging',
  },
  {
    Icon: MapPin,
    title: 'Local SEO',
    description: 'Google Maps 3-Pack optimisation so nearby customers find you first, every time.',
    color: '#38BDF8',
    tag: 'SEO',
  },
  {
    Icon: ShoppingBag,
    title: 'Instagram Shop',
    description: 'Sync your product catalogue to Instagram & Facebook for seamless social selling.',
    color: '#F472B6',
    tag: 'Social',
  },
  {
    Icon: LayoutDashboard,
    title: 'Easy Dashboard',
    description: 'Update prices, photos, and inventory in seconds — no developer required.',
    color: '#22D3EE',
    tag: 'CMS',
  },
  {
    Icon: Zap,
    title: 'Sub-Second Loading',
    description: 'Edge-deployed, image-optimised pages that score 95+ on Google PageSpeed.',
    color: '#FBBF24',
    tag: 'Performance',
  },
  {
    Icon: Mail,
    title: 'Email Newsletters',
    description: 'Automated loyalty sequences and promotional campaigns that bring customers back.',
    color: '#F472B6',
    tag: 'Marketing',
  },
  {
    Icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Live dashboards tracking visits, conversions, and sales down to the dirham.',
    color: '#A78BFA',
    tag: 'Analytics',
  },
  {
    Icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'SSL, DDoS protection, and Cloudflare Enterprise — uptime guaranteed.',
    color: '#34D399',
    tag: 'Security',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TechShowcase() {
  return (
    <section className="section section-alt" id="tech">
      <div className="wrap">

        {/* ── Header ── */}
        <ScrollReveal>
          <div
            style={{
              textAlign: 'center',
              maxWidth: '680px',
              marginInline: 'auto',
              marginBottom: '56px',
            }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4FD1FF',
                  display: 'inline-block',
                  marginRight: '6px',
                }}
              />
              Features &amp; Integrations
            </div>
            <h2 className="h2" style={{ marginBottom: '16px', marginTop: '12px', letterSpacing: '-0.02em' }}>
              Everything your website{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #4FD1FF, #7B61FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                needs to grow.
              </span>
            </h2>
            <p className="lede" style={{ marginInline: 'auto', fontSize: '16px', lineHeight: 1.65 }}>
              Battle-tested features that make booking, ordering, and finding your business
              effortless — for both you and your customers.
            </p>
          </div>
        </ScrollReveal>

        {/* ── High-Contrast Feature Cards Grid ── */}
        <div className="tech-features-grid">
          {FEATURES.map(({ Icon, title, description, color, tag }, i) => (
            <ScrollReveal key={title} delayMs={i * 35}>
              <div
                className="tech-card group"
                style={{ '--feat-color': color } as React.CSSProperties}
              >
                {/* Top Row: Elevated Icon Pedestal + Category Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div className="tech-icon-box">
                    <Icon size={24} strokeWidth={2} color={color} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: color,
                      background: `${color}16`,
                      border: `1px solid ${color}35`,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: color,
                      }}
                    />
                    {tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3
                  style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: '17px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom stat row (Elevated Cardholders) ── */}
        <ScrollReveal>
          <div className="tech-stats-grid">
            {[
              { value: '< 1s', label: 'Average page load time', color: '#38BDF8' },
              { value: '99.9%', label: 'Uptime SLA guarantee', color: '#34D399' },
              { value: '95+', label: 'Google PageSpeed score', color: '#FBBF24' },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                className="tech-stat-card"
                style={{ '--stat-color': color } as React.CSSProperties}
              >
                <div
                  style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: 'clamp(26px, 2.5vw, 32px)',
                    fontWeight: 700,
                    color,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    flexShrink: 0,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '12px',
                    color: '#CBD5E1',
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        /* 4-column responsive grid with spacing */
        .tech-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        /* High-contrast, non-blending card holder */
        .tech-card {
          background: linear-gradient(180deg, #151D33 0%, #0D1322 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 24px 22px 20px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 10px 28px -8px rgba(0, 0, 0, 0.65), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
          transition: all 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
          cursor: default;
        }
        .tech-card:hover {
          background: linear-gradient(180deg, #1A2440 0%, #10182B 100%);
          border-color: var(--feat-color, rgba(79, 209, 255, 0.5));
          transform: translateY(-5px);
          box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
        }
        /* Elevated frosted pedestal for icon */
        .tech-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .tech-card:hover .tech-icon-box {
          border-color: var(--feat-color);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 100%);
          transform: scale(1.06);
        }
        /* Bottom stats bar */
        .tech-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 32px;
        }
        .tech-stat-card {
          background: linear-gradient(180deg, #151D33 0%, #0D1322 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 16px;
          padding: 22px 26px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .tech-stat-card:hover {
          border-color: var(--stat-color);
          transform: translateY(-2px);
        }
        @media (max-width: 1120px) {
          .tech-features-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
        }
        @media (max-width: 800px) {
          .tech-features-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .tech-stats-grid { grid-template-columns: 1fr; gap: 14px; }
        }
        @media (max-width: 500px) {
          .tech-features-grid { grid-template-columns: 1fr; gap: 14px; }
          .tech-card { padding: 20px 18px; }
        }
      `}</style>
    </section>
  );
}
