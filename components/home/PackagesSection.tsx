'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import { SERVICE_PACKAGES, LANDING_PAGE_DEAL } from '@/lib/packages-data';

interface PackagesSectionProps {}

export default function PackagesSection(_props: PackagesSectionProps) {
  const waLandingUrl = `https://wa.me/971528903292?text=${encodeURIComponent(
    'Hello Quantum Flow! I would like to claim the 999 AED Landing Page Special Offer.'
  )}`;

  return (
    <>
      <section className="section section-alt" id="packages">
        <div className="wrap">
          <ScrollReveal
            style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '44px' }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Transparent Agency Pricing
            </div>
            <h2 className="h2">
              Clear service packages.
              <br />
              No hidden costs.
            </h2>
            <p className="lede" style={{ marginTop: '16px', marginInline: 'auto' }}>
              Built specifically for Dubai cafes, restaurants, clinics, and businesses. Fixed scope, guaranteed turnaround, and 100% ownership with no hidden platform fees.
            </p>
          </ScrollReveal>

          {/* ⚡ 999 AED Special Landing Page Deal — Featured Above the 3 Packages */}
          <ScrollReveal style={{ marginBottom: '44px' }}>
            <div
              id="special-offer"
              style={{
                scrollMarginTop: '100px',
                backgroundColor: '#0c1322',
                border: '1.5px solid rgba(52, 211, 153, 0.5)',
                borderRadius: '16px',
                padding: 'clamp(24px, 4vw, 36px)',
                position: 'relative',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                {/* Left side: details */}
                <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      backgroundColor: '#062e24',
                      border: '1px solid #059669',
                      color: '#34d399',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '14px',
                    }}
                  >
                    <span>⚡ {LANDING_PAGE_DEAL.badge}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--qf-font-display)',
                      fontSize: 'clamp(22px, 3vw, 28px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '10px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {LANDING_PAGE_DEAL.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#94a3b8',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      maxWidth: '640px',
                    }}
                  >
                    {LANDING_PAGE_DEAL.description}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '10px 16px',
                    }}
                  >
                    {LANDING_PAGE_DEAL.features.map((feat, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          color: '#e2e8f0',
                        }}
                      >
                        <span style={{ color: '#34d399', fontWeight: 700 }}>✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: price and action */}
                <div
                  style={{
                    flex: '0 0 auto',
                    minWidth: '240px',
                    backgroundColor: '#111827',
                    border: '1px solid #1f293d',
                    borderRadius: '12px',
                    padding: '24px 22px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--qf-font-mono)',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '4px',
                    }}
                  >
                    Special Campaign Price
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '14px', color: 'var(--qf-accent)' }}>
                      AED
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--qf-font-display)',
                        fontSize: '42px',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1,
                      }}
                    >
                      {LANDING_PAGE_DEAL.priceAed}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
                    {LANDING_PAGE_DEAL.priceNote}
                  </div>

                  <a
                    href={waLandingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      width: '100%',
                      backgroundColor: '#25d366',
                      color: '#000000',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      padding: '11px 16px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Claim 999 AED Deal →
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Subtitle above the 3 packages */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '32px',
              color: '#94a3b8',
              fontSize: '14px',
              letterSpacing: '0.02em',
              fontWeight: 500,
            }}
          >
            Or select a complete multi-page business system below:
          </div>

          {/* The 3 Core Packages */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {SERVICE_PACKAGES.map((pkg, idx) => (
              <ScrollReveal key={pkg.id} delayMs={idx * 100}>
                <div
                  className="tech-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '36px 28px',
                    textAlign: 'left',
                    alignItems: 'stretch',
                    background: pkg.popular ? 'rgba(22, 29, 51, 0.85)' : 'rgba(22, 29, 51, 0.45)',
                    border: pkg.popular ? '1px solid var(--qf-accent)' : '1px solid var(--qf-line)',
                    boxShadow: pkg.popular
                      ? '0 0 50px -10px rgba(79, 209, 255, 0.25), 0 20px 40px -20px rgba(0,0,0,0.6)'
                      : 'var(--qf-shadow-card)',
                  }}
                >
                  {/* Top Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: pkg.popular ? 'var(--qf-accent)' : 'var(--qf-text-faint)',
                      }}
                    >
                      {pkg.turnaround}
                    </span>
                    {pkg.badge && (
                      <span
                        style={{
                          background: pkg.popular ? 'var(--qf-accent)' : 'var(--qf-bg-raised)',
                          color: pkg.popular ? '#052430' : 'var(--qf-accent-2)',
                          border: pkg.popular ? 'none' : '1px solid rgba(255, 180, 84, 0.4)',
                          fontFamily: 'var(--qf-font-mono)',
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: 'var(--qf-radius-pill)',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--qf-font-display)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--qf-text)',
                      marginBottom: '6px',
                    }}
                  >
                    {pkg.name}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: 'var(--qf-text-muted)', marginBottom: '24px', minHeight: '40px' }}>
                    {pkg.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div
                    style={{
                      background: 'var(--qf-bg)',
                      border: '1px solid var(--qf-line-soft)',
                      borderRadius: 'var(--qf-radius-md)',
                      padding: '16px 20px',
                      marginBottom: '24px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '14px', color: 'var(--qf-accent)' }}>
                        AED
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--qf-font-display)',
                          fontSize: '36px',
                          fontWeight: 700,
                          color: 'var(--qf-text)',
                          lineHeight: 1,
                        }}
                      >
                        {pkg.priceAed}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--qf-text-faint)', marginTop: '6px' }}>
                      {pkg.priceNote}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13.5px', color: 'var(--qf-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {pkg.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div style={{ flexGrow: 1, marginBottom: '28px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '11.5px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--qf-text-faint)',
                        marginBottom: '14px',
                      }}
                    >
                      Included Deliverables:
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {pkg.features.map((feat, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '13px',
                            color: 'var(--qf-text)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: 'var(--qf-success)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button */}
                  <Link
                    href="#contact"
                    className={`btn ${pkg.popular ? 'btn-primary' : 'btn-ghost'}`}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Start a Project →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
