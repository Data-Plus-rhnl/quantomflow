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

// ─── Feature data with distinct brand colors matching Services Section ──────────────────

const FEATURES = [
  {
    Icon: CreditCard,
    title: 'Secure Payments',
    description: 'Apple Pay, Google Pay & Stripe — zero-friction checkout your customers trust.',
    badgeBg: '#EEF2FF',
    iconColor: '#2563EB',
    tag: 'Payments',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every pixel engineered for the phone screen where 80% of your traffic comes from.',
    badgeBg: '#ECFDF5',
    iconColor: '#059669',
    tag: 'Mobile UI',
  },
  {
    Icon: CalendarCheck,
    title: 'Online Booking',
    description: 'Real-time table reservations & appointment scheduling, zero phone calls needed.',
    badgeBg: '#F5F3FF',
    iconColor: '#7C3AED',
    tag: 'Reservations',
  },
  {
    Icon: UtensilsCrossed,
    title: 'Digital Menus',
    description: 'Interactive, fast-loading menus with live price and availability updates.',
    badgeBg: '#FFF7ED',
    iconColor: '#EA580C',
    tag: 'F&B Menus',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: 'Direct order updates & customer support via the channel they already use daily.',
    badgeBg: '#F0FDF4',
    iconColor: '#16A34A',
    tag: 'Instant Chat',
  },
  {
    Icon: MapPin,
    title: 'Local SEO',
    description: 'Google Maps 3-Pack optimisation so nearby customers find you first, every time.',
    badgeBg: '#FEF2F2',
    iconColor: '#E11D48',
    tag: 'Google Maps',
  },
  {
    Icon: ShoppingBag,
    title: 'Instagram Shop',
    description: 'Sync your product catalogue to Instagram & Facebook for seamless social selling.',
    badgeBg: '#FDF2F8',
    iconColor: '#DB2777',
    tag: 'Social Commerce',
  },
  {
    Icon: LayoutDashboard,
    title: 'Easy Dashboard',
    description: 'Update prices, photos, and inventory in seconds — no developer required.',
    badgeBg: '#EFF6FF',
    iconColor: '#0284C7',
    tag: 'Client CMS',
  },
  {
    Icon: Zap,
    title: 'Sub-Second Loading',
    description: 'Edge-deployed, image-optimised pages that score 95+ on Google PageSpeed.',
    badgeBg: '#FEFCE8',
    iconColor: '#D97706',
    tag: '95+ Speed',
  },
  {
    Icon: Mail,
    title: 'Email Newsletters',
    description: 'Automated loyalty sequences and promotional campaigns that bring customers back.',
    badgeBg: '#F0FDFA',
    iconColor: '#0D9488',
    tag: 'Retention',
  },
  {
    Icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Live dashboards tracking visits, conversions, and sales down to the dirham.',
    badgeBg: '#EEF2FF',
    iconColor: '#4F46E5',
    tag: 'Live Metrics',
  },
  {
    Icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'SSL, DDoS protection, and Cloudflare Enterprise — uptime guaranteed.',
    badgeBg: '#F1F5F9',
    iconColor: '#2563EB',
    tag: 'Cloudflare',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TechShowcase() {
  return (
    <section className="section" id="tech">
      <div className="wrap">

        {/* ── Header ── */}
        <ScrollReveal>
          <div
            style={{
              textAlign: 'center',
              maxWidth: '720px',
              marginInline: 'auto',
              marginBottom: '64px',
            }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Features &amp; Integrations
            </div>
            <h2
              className="h2"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: '16px',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Everything your website
              <br />
              needs to <span style={{ color: '#1D63FF' }}>grow.</span>
            </h2>
            <p className="lede" style={{ marginInline: 'auto', marginTop: '16px', fontSize: 'clamp(15px, 1.8vw, 18px)' }}>
              Battle-tested features that make booking, ordering, and finding your business
              effortless &mdash; for both you and your customers.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Feature Cards Grid ── */}
        <div className="tech-features-grid">
          {FEATURES.map(({ Icon, title, description, badgeBg, iconColor, tag }, i) => (
            <ScrollReveal key={title} delayMs={i * 30}>
              <div className="tech-card group">
                {/* Colored icon badge matching ServicesSection */}
                <div
                  className="tech-icon-box"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: badgeBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    color: iconColor,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} strokeWidth={2.2} color={iconColor} />
                </div>

                {/* Title & Description */}
                <h3>{title}</h3>
                <p>{description}</p>

                {/* Tag pill */}
                <div style={{ marginTop: '18px' }}>
                  <span
                    style={{
                      background: badgeBg,
                      color: iconColor,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--qf-font-display)',
                      display: 'inline-block',
                    }}
                  >
                    {tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom stat row ── */}
        <ScrollReveal>
          <div className="tech-stats-grid">
            {[
              { value: '< 1s', label: 'Average page load time', color: '#1D63FF' },
              { value: '99.9%', label: 'Uptime SLA guarantee', color: '#1D63FF' },
              { value: '95+', label: 'Google PageSpeed score', color: '#1D63FF' },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                className="tech-stat-card"
              >
                <div
                  style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: 'clamp(28px, 2.5vw, 36px)',
                    fontWeight: 800,
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
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: 'var(--qf-text-muted)',
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
        /* Card matching ServicesSection */
        .tech-card {
          background: var(--qf-bg);
          border: 1.5px solid var(--qf-line-soft);
          border-radius: 18px;
          padding: 28px 22px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
          transition: transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }
        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
          border-color: var(--qf-line);
        }
        .tech-icon-box {
          transition: transform 0.25s ease;
        }
        .tech-card:hover .tech-icon-box {
          transform: scale(1.1);
        }
        .tech-card h3 {
          font-family: var(--qf-font-display);
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--qf-text);
          line-height: 1.3;
        }
        .tech-card p {
          font-size: 13.8px;
          color: var(--qf-text-muted);
          line-height: 1.65;
          margin: 0;
          flex-grow: 1;
        }
        /* Bottom stats bar */
        .tech-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 36px;
        }
        .tech-stat-card {
          background: var(--qf-bg);
          border: 1.5px solid var(--qf-line-soft);
          border-radius: 18px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 18px;
          box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .tech-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.1);
          border-color: var(--qf-line);
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
          .tech-card { padding: 22px 18px; }
        }
      `}</style>
    </section>
  );
}
