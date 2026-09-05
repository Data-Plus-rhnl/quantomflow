'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import { SERVICE_PACKAGES } from '@/lib/packages-data';

interface PackagesSectionProps {}

export default function PackagesSection(_props: PackagesSectionProps) {
  return (
    <>
      <section className="section section-alt" id="packages">
        <div className="wrap">
          <ScrollReveal
            style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '56px' }}
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
              Built specifically for Dubai cafes, restaurants, clinics, and businesses. Fixed scope, guaranteed turnaround, and 100% ownership with zero monthly platform commissions.
            </p>
          </ScrollReveal>

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
                    {pkg.popular ? 'Start a Project →' : 'Start a Project →'}
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
