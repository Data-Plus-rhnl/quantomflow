'use client';

import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const SERVICES = [
  {
    num: '01',
    color: '#EEF2FF',
    iconColor: '#4F6EF7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8M12 18v3" />
      </svg>
    ),
    title: 'E-Commerce & Stores',
    desc: 'Sell products directly online. Beautiful storefronts with secure checkout, automated inventory, discount systems, and easy shipping integrations.',
    tags: ['Shopify', 'WooCommerce', 'Custom Shops'],
    tagColor: '#EEF2FF',
    tagText: '#4F6EF7',
  },
  {
    num: '02',
    color: '#ECFDF5',
    iconColor: '#10B981',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M10 18h4" />
      </svg>
    ),
    title: 'Business & Brand Sites',
    desc: 'Clean, fast, and modern websites for startups, corporate brands, real estate brokers, consultants, and creative portfolios.',
    tags: ['Corporate Sites', 'SaaS Landing Pages', 'Real Estate'],
    tagColor: '#ECFDF5',
    tagText: '#059669',
  },
  {
    num: '03',
    color: '#F5F3FF',
    iconColor: '#8B5CF6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 17a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18 11.5a3.5 3.5 0 0 1-.5 7H7Z" />
      </svg>
    ),
    title: 'Custom Web & Mobile Apps',
    desc: 'Specialized systems built for your workflow. From table booking and online food ordering to client dashboards and customer portals.',
    tags: ['Online Ordering', 'Booking Portals', 'Dashboards'],
    tagColor: '#F5F3FF',
    tagText: '#7C3AED',
  },
  {
    num: '04',
    color: '#FFF7ED',
    iconColor: '#F97316',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
    title: 'Local Marketing & SEO',
    desc: 'Get found online. We optimize your website and Google Maps presence to ensure local customers find you first when searching for services.',
    tags: ['Google Maps', 'Local Rankings', 'SEO Audits'],
    tagColor: '#FFF7ED',
    tagText: '#EA580C',
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        {/* Header */}
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: '64px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Solutions for your business</div>
          <h2
            className="h2"
            style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800, lineHeight: 1.1, marginTop: '16px' }}
          >
            Tailored websites.
            <br />
            Designed for <span style={{ color: '#1D63FF' }}>growth.</span>
          </h2>
          <p className="lede" style={{ marginInline: 'auto', marginTop: '20px', fontSize: 'clamp(15px, 1.8vw, 18px)' }}>
            We design and build custom websites, e-commerce stores, and mobile apps tailored around how you run your business&mdash;start to finish.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="svc-grid">
          {SERVICES.map((svc, i) => (
            <ScrollReveal key={svc.num} delayMs={i * 80}>
              <article className="svc-card">
                {/* Colored icon badge */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: svc.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '22px',
                    color: svc.iconColor,
                    flexShrink: 0,
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={svc.iconColor} strokeWidth="1.8">
                    {svc.icon.props.children}
                  </svg>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.7, flexGrow: 1 }}>
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="svc-tags" style={{ marginTop: '20px' }}>
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: svc.tagColor,
                        color: svc.tagText,
                        border: 'none',
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        fontFamily: 'var(--qf-font-display)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
