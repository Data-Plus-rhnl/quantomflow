'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

// ─── Bespoke High-Grade Industry SVG Icons ───────────────────────────────────

function IconRestaurant({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Dish base platter */}
      <path
        d="M2 18h20a1 1 0 0 1 1 1v0.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1Z"
        fill={color}
        fillOpacity="0.18"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cloche dome */}
      <path
        d="M4 18a8 8 0 0 1 16 0"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Cloche handle */}
      <path
        d="M12 10V6.5m-1.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Luminous steam accents */}
      <path
        d="M8.5 4c-.5.8-.5 1.7 0 2.5M15.5 4c-.5.8-.5 1.7 0 2.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
    </svg>
  );
}

function IconClinic({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Shield/Emblem background */}
      <path
        d="M12 2.5L4 6v6.2c0 5.2 3.4 10 8 11.3 4.6-1.3 8-6.1 8-11.3V6l-8-3.5Z"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Medical/Aesthetic cross */}
      <path
        d="M12 8.5v7m-3.5-3.5h7"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Aesthetic sparkle accent */}
      <path
        d="M18.5 3.5l.8 1.2 1.2.8-1.2.8-.8 1.2-.8-1.2-1.2-.8 1.2-.8.8-1.2Z"
        fill={color}
        fillOpacity="0.8"
      />
    </svg>
  );
}

function IconRetail({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Shopping bag body */}
      <path
        d="M6 3 3.5 7v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7L18 3H6Z"
        fill={color}
        fillOpacity="0.14"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bag fold line */}
      <path d="M3.5 7h17" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Handles */}
      <path
        d="M16 11a4 4 0 0 1-8 0"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Modern payment contactless wave accent */}
      <path
        d="M11 15.5a2 2 0 0 1 2 0m-3.5-2a4.5 4.5 0 0 1 5 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
    </svg>
  );
}

function IconCorporate({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Enterprise skyscraper tower */}
      <path
        d="M3 21h18M5 21V7l8-4v18M13 10l6 3v8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Office windows grid */}
      <path
        d="M8 9h2m-2 3.5h2m-2 3.5h2M16 14.5h1.5m-1.5 3h1.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Rising growth trendline */}
      <path
        d="M17 3.5l3.5 3.5m0 0h-3m3 0V4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRealEstate({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Architectural Villa / Penthouse outline */}
      <path
        d="M2.5 10.5 12 3l9.5 7.5V20a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9.5Z"
        fill={color}
        fillOpacity="0.13"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Modern glass entrance */}
      <path
        d="M9.5 22V13h5v9"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Balcony / Floor lines */}
      <path
        d="M6 10h12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      {/* Location beacon dot */}
      <circle cx="12" cy="7" r="1.3" fill={color} />
    </svg>
  );
}

function IconFitness({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Barbell weights */}
      <path
        d="M6 5.5v13M18 5.5v13M2 9v6M22 9v6M6 12h12M2 12h4m12 0h4"
        stroke={color}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Weight plates fill */}
      <rect
        x="4.5"
        y="7"
        width="3"
        height="10"
        rx="1.5"
        fill={color}
        fillOpacity="0.22"
      />
      <rect
        x="16.5"
        y="7"
        width="3"
        height="10"
        rx="1.5"
        fill={color}
        fillOpacity="0.22"
      />
      {/* Pulse energy ray */}
      <path
        d="M10 10.5l1.5 3 1.5-3"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

// ─── Industry Data ────────────────────────────────────────────────────────────

const BUSINESS_TYPES = [
  {
    icon: IconRestaurant,
    badge: '0% Talabat Fee',
    title: 'Restaurants & Cafés',
    subtitle: 'F&B & Hospitality',
    desc: 'Direct online ordering systems, live kitchen dispatch, digital QR menus, and zero-commission delivery to protect your restaurant margins in Dubai.',
    capabilities: ['Direct Online Ordering', 'QR Tableside Pay & Menu', 'WhatsApp Ordering Bot'],
    color: '#FF8C42',
    href: '#contact',
  },
  {
    icon: IconClinic,
    badge: 'DHA & MOHAP Ready',
    title: 'Clinics & Aesthetics',
    subtitle: 'Healthcare & Beauty',
    desc: 'Patient booking funnels, doctor profile showcases, automated WhatsApp reminders, and SEO tuned for high-intent aesthetic and dental searches in Dubai.',
    capabilities: ['Instant Doctor Scheduling', 'Patient Inquiry Funnel', 'Local Clinic SEO Engine'],
    color: '#F472B6',
    href: '#contact',
  },
  {
    icon: IconRetail,
    badge: 'Apple Pay & Tabby',
    title: 'Retail & E-Commerce',
    subtitle: 'D2C & Luxury Brands',
    desc: 'Sub-second Next.js storefronts with Tabby & Tamara BNPL, 1-click Apple Pay checkout, Instagram Shop sync, and automated UAE courier tracking.',
    capabilities: ['1-Click Apple Pay & BNPL', 'Instagram Shop Sync', 'UAE Courier Integration'],
    color: '#A78BFA',
    href: '#contact',
  },
  {
    icon: IconCorporate,
    badge: 'DIFC & ADGM Ready',
    title: 'Corporate & Startups',
    subtitle: 'Finance, Tech & Legal',
    desc: 'Institutional-grade corporate websites, investor pitch portals, and B2B lead generation funnels designed to win high-ticket contracts in the GCC.',
    capabilities: ['High-Ticket Lead Funnels', 'Investor Data Rooms', 'Multilingual Arabic/EN'],
    color: '#34D399',
    href: '#contact',
  },
  {
    icon: IconRealEstate,
    badge: 'Bayut & CRM Sync',
    title: 'Luxury Real Estate',
    subtitle: 'Agencies & Developers',
    desc: 'High-converting property listing portals, off-plan developer showcases, interactive floorplans, and WhatsApp CRM automations for Dubai brokers.',
    capabilities: ['Off-Plan Project Portals', 'WhatsApp Lead Routing', 'Interactive Floorplans'],
    color: '#38BDF8',
    href: '#contact',
  },
  {
    icon: IconFitness,
    badge: 'ClassPass Sync',
    title: 'Fitness & Wellness',
    subtitle: 'Gyms, Studios & Spas',
    desc: 'Class scheduling engines, recurring membership subscriptions, trainer booking calendars, and mobile-first portals built to maximize client retention.',
    capabilities: ['Automated Memberships', 'Class & PT Scheduler', 'Custom Member PWA'],
    color: '#FBBF24',
    href: '#contact',
  },
];

export default function BusinessTypesSection() {
  return (
    <section className="section section-alt relative-industries" id="business-types">
      {/* Ambient background glow orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '350px',
          background: 'radial-gradient(ellipse, rgba(79, 209, 255, 0.07) 0%, rgba(123, 97, 255, 0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(40px)',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#4FD1FF',
                boxShadow: '0 0 8px #4FD1FF',
                display: 'inline-block',
                marginRight: '6px',
              }}
            />
            Tailored Industry Architecture
          </div>
          <h2 className="h2" style={{ marginTop: '12px', letterSpacing: '-0.02em' }}>
            Engineered for every Dubai business.
          </h2>
          <p className="lede" style={{ marginInline: 'auto', marginTop: '16px', fontSize: '16px', lineHeight: 1.65 }}>
            From high-volume Downtown restaurants to DIFC corporate portals and luxury clinics in Jumeirah — we build bespoke platforms tailored to local UAE customer behavior and payment rails.
          </p>
        </ScrollReveal>

        <div className="biz-grid">
          {BUSINESS_TYPES.map(({ icon: IconComponent, badge, title, subtitle, desc, capabilities, color, href }, i) => (
            <ScrollReveal key={title} delayMs={i * 60}>
              <Link
                href={href}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="biz-card group"
                  style={{ '--biz-color': color } as React.CSSProperties}
                >
                  {/* Top glowing ambient highlight line */}
                  <div
                    className="card-ambient-line"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
                    }}
                  />

                  {/* Top Bar: Icon + Market Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      className="biz-icon-box"
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: `radial-gradient(circle at 30% 30%, ${color}24 0%, ${color}08 100%)`,
                        border: `1px solid ${color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 24px -6px ${color}30`,
                        flexShrink: 0,
                        transition: 'all 0.35s ease',
                      }}
                    >
                      <IconComponent color={color} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: color,
                        background: `${color}14`,
                        border: `1px solid ${color}35`,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: `0 2px 8px ${color}10`,
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: color,
                          boxShadow: `0 0 6px ${color}`,
                        }}
                      />
                      {badge}
                    </span>
                  </div>

                  {/* Industry Title & Category */}
                  <div style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '11px',
                        color: `${color}CC`,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '4px',
                      }}
                    >
                      {subtitle}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--qf-font-display)',
                        fontSize: '19px',
                        fontWeight: 600,
                        color: '#F8FAFC',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(160, 172, 196, 0.9)',
                      lineHeight: 1.65,
                      flexGrow: 1,
                      marginBottom: '20px',
                    }}
                  >
                    {desc}
                  </p>

                  {/* Key Capabilities List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginBottom: '22px',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(10, 14, 26, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {capabilities.map((cap) => (
                      <div
                        key={cap}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '12px',
                          color: '#CBD5E1',
                          fontFamily: 'var(--qf-font-body)',
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                          <path
                            d="M3 8.5L6.5 12L13 4"
                            stroke={color}
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link / Button Footer */}
                  <div
                    className="biz-cta"
                    style={{
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                      paddingTop: '14px',
                      marginTop: 'auto',
                    }}
                  >
                    <span>Request {title.split(' ')[0]} Scope</span>
                    <span className="biz-arrow" style={{ transition: 'transform 0.25s ease' }}>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .relative-industries {
          position: relative;
          overflow: hidden;
        }
        .biz-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .biz-card {
          position: relative;
          background: linear-gradient(165deg, rgba(20, 27, 48, 0.75) 0%, rgba(10, 14, 26, 0.85) 100%);
          border: 1px solid rgba(79, 209, 255, 0.14);
          border-radius: 22px;
          padding: 28px 24px 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
          cursor: pointer;
        }
        .card-ambient-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1.5px;
          opacity: 0.35;
          transition: opacity 0.35s ease;
        }
        .biz-card:hover {
          background: linear-gradient(165deg, rgba(26, 36, 64, 0.9) 0%, rgba(14, 19, 36, 0.95) 100%);
          border-color: var(--biz-color, rgba(79, 209, 255, 0.5));
          transform: translateY(-6px);
          box-shadow: 0 24px 56px -12px rgba(0, 0, 0, 0.65), 0 0 32px -8px var(--biz-color, rgba(79, 209, 255, 0.2));
        }
        .biz-card:hover .card-ambient-line {
          opacity: 1;
        }
        .biz-card:hover .biz-icon-box {
          transform: scale(1.08);
        }
        .biz-card:hover .biz-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 1080px) {
          .biz-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 680px) {
          .biz-grid { grid-template-columns: 1fr; gap: 16px; }
          .biz-card { padding: 22px 18px 18px; }
        }
      `}</style>
    </section>
  );
}
