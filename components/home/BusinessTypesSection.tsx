'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

// ─── Clean 3D Industry Assets ────────────────────────────────────────────────

const BUSINESS_TYPES = [
  {
    iconSrc: '/industries/industry-restaurant.png',
    badge: '0% Talabat Fee',
    title: 'Restaurants & Cafés',
    subtitle: 'F&B & Hospitality',
    desc: 'Direct online ordering systems, live kitchen dispatch, digital QR menus, and zero-commission delivery to protect your restaurant margins in Dubai.',
    capabilities: ['Direct Online Ordering', 'QR Tableside Pay & Menu', 'WhatsApp Ordering Bot'],
    color: '#FF8C42',
    href: '#contact',
  },
  {
    iconSrc: '/industries/industry-clinic.png',
    badge: 'DHA & MOHAP Ready',
    title: 'Clinics & Aesthetics',
    subtitle: 'Healthcare & Beauty',
    desc: 'Patient booking funnels, doctor profile showcases, automated WhatsApp reminders, and SEO tuned for high-intent aesthetic and dental searches in Dubai.',
    capabilities: ['Instant Doctor Scheduling', 'Patient Inquiry Funnel', 'Local Clinic SEO Engine'],
    color: '#F472B6',
    href: '#contact',
  },
  {
    iconSrc: '/industries/industry-retail.png',
    badge: 'Apple Pay & Tabby',
    title: 'Retail & E-Commerce',
    subtitle: 'D2C & Luxury Brands',
    desc: 'Sub-second Next.js storefronts with Tabby & Tamara BNPL, 1-click Apple Pay checkout, Instagram Shop sync, and automated UAE courier tracking.',
    capabilities: ['1-Click Apple Pay & BNPL', 'Instagram Shop Sync', 'UAE Courier Integration'],
    color: '#A78BFA',
    href: '#contact',
  },
  {
    iconSrc: '/industries/industry-corporate.png',
    badge: 'DIFC & ADGM Ready',
    title: 'Corporate & Startups',
    subtitle: 'Finance, Tech & Legal',
    desc: 'Institutional-grade corporate websites, investor pitch portals, and B2B lead generation funnels designed to win high-ticket contracts in the GCC.',
    capabilities: ['High-Ticket Lead Funnels', 'Investor Data Rooms', 'Multilingual Arabic/EN'],
    color: '#34D399',
    href: '#contact',
  },
  {
    iconSrc: '/industries/industry-realestate.png',
    badge: 'Bayut & CRM Sync',
    title: 'Luxury Real Estate',
    subtitle: 'Agencies & Developers',
    desc: 'High-converting property listing portals, off-plan developer showcases, interactive floorplans, and WhatsApp CRM automations for Dubai brokers.',
    capabilities: ['Off-Plan Project Portals', 'WhatsApp Lead Routing', 'Interactive Floorplans'],
    color: '#38BDF8',
    href: '#contact',
  },
  {
    iconSrc: '/industries/industry-fitness.png',
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
    <section className="section section-alt" id="business-types">
      <div className="wrap">
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: '56px' }}>
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
            Tailored Industry Architecture
          </div>
          <h2 className="h2" style={{ marginTop: '12px', letterSpacing: '-0.02em' }}>
            Built for every Dubai business.
          </h2>
          <p className="lede" style={{ marginInline: 'auto', marginTop: '16px', fontSize: '16px', lineHeight: 1.65 }}>
            From high-volume Downtown restaurants to DIFC corporate portals and luxury clinics in Jumeirah — we build bespoke platforms tailored to local UAE customer behavior and payment rails.
          </p>
        </ScrollReveal>

        <div className="biz-grid">
          {BUSINESS_TYPES.map(({ iconSrc, badge, title, subtitle, desc, capabilities, color, href }, i) => (
            <ScrollReveal key={title} delayMs={i * 60}>
              <Link
                href={href}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="biz-card group"
                  style={{ '--biz-color': color } as React.CSSProperties}
                >
                  {/* Top Bar: Elevated Glass Pedestal Icon + High-Contrast Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                    <div className="biz-icon-box">
                      <Image
                        src={iconSrc}
                        alt={title}
                        width={48}
                        height={48}
                        className="biz-icon-img"
                        style={{
                          width: '46px',
                          height: '46px',
                          objectFit: 'contain',
                          display: 'block',
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: color,
                        background: `${color}18`,
                        border: `1px solid ${color}38`,
                        padding: '5px 12px',
                        borderRadius: '999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
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
                      {badge}
                    </span>
                  </div>

                  {/* Industry Title & Category */}
                  <div style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: color,
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
                        color: '#FFFFFF',
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
                      color: '#94A3B8',
                      lineHeight: 1.65,
                      flexGrow: 1,
                      marginBottom: '20px',
                    }}
                  >
                    {desc}
                  </p>

                  {/* Key Capabilities List with Clear Inset Panel */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginBottom: '22px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: 'rgba(8, 12, 24, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {capabilities.map((cap) => (
                      <div
                        key={cap}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          fontSize: '12.5px',
                          color: '#E2E8F0',
                          fontFamily: 'var(--qf-font-body)',
                        }}
                      >
                        <Check size={14} color={color} strokeWidth={2.4} style={{ flexShrink: 0 }} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link Footer */}
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
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingTop: '16px',
                      marginTop: 'auto',
                    }}
                  >
                    <span>Request {title.split(' ')[0]} Scope</span>
                    <ArrowRight size={15} className="biz-arrow" style={{ transition: 'transform 0.2s ease' }} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .biz-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        /* High-contrast, non-blending card holder */
        .biz-card {
          background: linear-gradient(180deg, #151D33 0%, #0D1322 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 20px;
          padding: 26px 24px 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.65), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
          transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
          cursor: pointer;
        }
        .biz-card:hover {
          background: linear-gradient(180deg, #1A2440 0%, #10182B 100%);
          border-color: var(--biz-color, rgba(79, 209, 255, 0.5));
          transform: translateY(-6px);
          box-shadow: 0 20px 48px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
        }
        /* Elevated pedestal for the icon so it pops */
        .biz-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .biz-card:hover .biz-icon-box {
          border-color: var(--biz-color);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 100%);
          transform: scale(1.05);
        }
        .biz-card:hover .biz-icon-img {
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
