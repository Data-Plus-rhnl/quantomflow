'use client';

import React, { useState } from 'react';
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

// ─── Feature data ─────────────────────────────────────────────────────────────

const FEATURES = [
  {
    Icon: CreditCard,
    title: 'Secure Payments',
    description: 'Apple Pay, Google Pay & Stripe — zero-friction checkout your customers trust.',
    color: '#4FD1FF',
    tag: 'Payments',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every pixel engineered for the phone screen where 80% of your traffic comes from.',
    color: '#B794F4',
    tag: 'Design',
  },
  {
    Icon: CalendarCheck,
    title: 'Online Booking',
    description: 'Real-time table reservations & appointment scheduling, zero phone calls needed.',
    color: '#68D391',
    tag: 'Booking',
  },
  {
    Icon: UtensilsCrossed,
    title: 'Digital Menus',
    description: 'Interactive, fast-loading menus with live price and availability updates.',
    color: '#FFB454',
    tag: 'F&B',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: 'Direct order updates & customer support via the channel they already use daily.',
    color: '#68D391',
    tag: 'Messaging',
  },
  {
    Icon: MapPin,
    title: 'Local SEO',
    description: 'Google Maps 3-Pack optimisation so nearby customers find you first, every time.',
    color: '#4FD1FF',
    tag: 'SEO',
  },
  {
    Icon: ShoppingBag,
    title: 'Instagram Shop',
    description: 'Sync your product catalogue to Instagram & Facebook for seamless social selling.',
    color: '#F687B3',
    tag: 'Social',
  },
  {
    Icon: LayoutDashboard,
    title: 'Easy Dashboard',
    description: 'Update prices, photos, and inventory in seconds — no developer required.',
    color: '#76E4F7',
    tag: 'CMS',
  },
  {
    Icon: Zap,
    title: 'Sub-Second Loading',
    description: 'Edge-deployed, image-optimised pages that score 95+ on Google PageSpeed.',
    color: '#FFB454',
    tag: 'Performance',
  },
  {
    Icon: Mail,
    title: 'Email Newsletters',
    description: 'Automated loyalty sequences and promotional campaigns that bring customers back.',
    color: '#F687B3',
    tag: 'Marketing',
  },
  {
    Icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Live dashboards tracking visits, conversions, and sales down to the dirham.',
    color: '#B794F4',
    tag: 'Analytics',
  },
  {
    Icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'SSL, DDoS protection, and Cloudflare Enterprise — uptime guaranteed.',
    color: '#68D391',
    tag: 'Security',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TechShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="section section-alt" id="tech">
      <div className="wrap">

        {/* ── Header ── */}
        <ScrollReveal>
          <div
            style={{
              textAlign: 'center',
              maxWidth: '600px',
              marginInline: 'auto',
              marginBottom: '64px',
            }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Features &amp; Integrations
            </div>
            <h2 className="h2" style={{ marginBottom: '16px' }}>
              Everything your website{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, var(--qf-accent), var(--qf-accent-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                needs to grow.
              </span>
            </h2>
            <p className="lede" style={{ marginInline: 'auto' }}>
              Battle-tested features that make booking, ordering, and finding your business
              effortless — for both you and your customers.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Grid ── */}
        <ScrollReveal>
          <div
            className="features-grid-wrap"
            style={{
              gap: '1px',
              background: 'rgba(35,43,71,0.5)',
              border: '1px solid rgba(35,43,71,0.6)',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            {FEATURES.map(({ Icon, title, description, color, tag }, i) => {
              const isHovered = hoveredIdx === i;

              return (
                <div
                  key={title}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    position: 'relative',
                    padding: '32px 28px',
                    background: isHovered
                      ? `linear-gradient(145deg, ${color}0C 0%, rgba(10,14,26,0.95) 100%)`
                      : 'rgba(10,14,26,0.92)',
                    transition: 'background 0.3s cubic-bezier(0.22,0.61,0.36,1)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    overflow: 'hidden',
                  }}
                >
                  {/* Glow streak on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: isHovered
                        ? `linear-gradient(90deg, transparent, ${color}88, transparent)`
                        : 'transparent',
                      transition: 'background 0.3s ease',
                    }}
                  />

                  {/* Tag chip */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignSelf: 'flex-start',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '9.5px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isHovered ? color : 'rgba(91,100,128,0.7)',
                      background: isHovered ? `${color}14` : 'rgba(22,29,51,0.6)',
                      border: `1px solid ${isHovered ? `${color}33` : 'rgba(35,43,71,0.6)'}`,
                      padding: '3px 8px',
                      borderRadius: '999px',
                      marginBottom: '20px',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {tag}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: isHovered
                        ? `${color}18`
                        : 'rgba(22,29,51,0.8)',
                      border: `1px solid ${isHovered ? `${color}44` : 'rgba(35,43,71,0.7)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                      boxShadow: isHovered ? `0 0 20px -4px ${color}44` : 'none',
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      color={isHovered ? color : 'rgba(91,100,128,0.8)'}
                      style={{ transition: 'color 0.25s ease' }}
                    />
                  </div>

                  {/* Text */}
                  <h4
                    style={{
                      fontFamily: 'var(--qf-font-display)',
                      fontSize: '15px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: isHovered ? '#E8ECF5' : 'rgba(200,208,224,0.85)',
                      lineHeight: 1.3,
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontSize: '12.5px',
                      color: isHovered
                        ? 'rgba(139,147,168,0.9)'
                        : 'rgba(91,100,128,0.75)',
                      lineHeight: 1.6,
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Bottom stat row ── */}
        <ScrollReveal>
          <div
            className="features-stats-wrap"
            style={{
              gap: '1px',
              background: 'rgba(35,43,71,0.4)',
              border: '1px solid rgba(35,43,71,0.5)',
              borderRadius: '16px',
              overflow: 'hidden',
              marginTop: '24px',
            }}
          >
            {[
              { value: '< 1s', label: 'Average page load time', color: '#4FD1FF' },
              { value: '99.9%', label: 'Uptime SLA guarantee', color: '#68D391' },
              { value: '95+', label: 'Google PageSpeed score', color: '#FFB454' },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                style={{
                  padding: '24px 28px',
                  background: 'rgba(10,14,26,0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
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
                    fontSize: '11.5px',
                    color: 'rgba(91,100,128,0.8)',
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

      {/* Responsive grid breakpoints */}
      <style>{`
        .features-grid-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .features-stats-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1100px) {
          .features-grid-wrap { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 760px) {
          .features-grid-wrap  { grid-template-columns: repeat(2, 1fr); }
          .features-stats-wrap { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .features-grid-wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
