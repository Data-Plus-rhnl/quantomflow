'use client';

import React from 'react';

// ─── Real hand-crafted SVG icons — each one purpose-built for its badge ──────

// UAE flag icon — official colors: Green (top), White (middle), Black (bottom), Red (hoist)
function IconUAE() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g clipPath="url(#uae-flag-clip)">
        {/* Horizontal bands: Green, White, Black */}
        <rect x="2" y="5" width="20" height="4.67" fill="#00732F" />
        <rect x="2" y="9.67" width="20" height="4.67" fill="#FFFFFF" />
        <rect x="2" y="14.33" width="20" height="4.67" fill="#000000" />
        {/* Vertical red band on hoist */}
        <rect x="2" y="5" width="5.5" height="14" fill="#E4002B" />
      </g>
      {/* Flag border */}
      <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
      <defs>
        <clipPath id="uae-flag-clip">
          <rect x="2" y="5" width="20" height="14" rx="2" />
        </clipPath>
      </defs>
    </svg>
  );
}

// No Hidden Fees: shield with a crisp checkmark indicating transparency and trust
function IconNoHiddenFees() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L3.5 6v6.2c0 5.17 3.63 10.01 8.5 11.23 4.87-1.22 8.5-6.06 8.5-11.23V6L12 2z"
        stroke="#1D63FF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(29, 99, 255, 0.12)"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#1D63FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 4.9 star: filled star in Royal Cobalt Blue
function IconStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Full filled star */}
      <path
        d="M12 2l2.9 5.9 6.5.95-4.7 4.58 1.1 6.43L12 17.02l-5.8 3.05 1.1-6.43L2.6 8.85l6.5-.95L12 2z"
        fill="#1D63FF"
        stroke="#1D63FF"
        strokeWidth="0.5"
      />
      {/* Shine glint */}
      <path
        d="M12 4.5l1.8 3.6 4 .58-2.9 2.82.68 3.97L12 13.3"
        fill="rgba(255,255,255,0.25)"
      />
      {/* 4.9 text hint — small dot below */}
      <circle cx="12" cy="21" r="1" fill="#1D63FF" opacity="0.6" />
    </svg>
  );
}

// Google Ads: the 4-color Google G made of dots/arcs
function IconGoogleAds() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Google G — four colored segments */}
      <path d="M21.5 12.18c0-.68-.06-1.34-.17-1.97H12v3.73h5.33a4.56 4.56 0 01-1.97 2.99v2.48h3.19c1.87-1.72 2.95-4.26 2.95-7.23z" fill="#4285F4" />
      <path d="M12 22c2.67 0 4.91-.88 6.55-2.39l-3.19-2.48c-.89.6-2.02.95-3.36.95-2.58 0-4.77-1.74-5.55-4.09H3.17v2.56A9.99 9.99 0 0012 22z" fill="#34A853" />
      <path d="M6.45 13.99a5.97 5.97 0 010-3.98V7.45H3.17a9.99 9.99 0 000 9.1l3.28-2.56z" fill="#FBBC05" />
      <path d="M12 6.93c1.45 0 2.76.5 3.79 1.48l2.84-2.84A9.97 9.97 0 0012 2a9.99 9.99 0 00-8.83 5.45l3.28 2.56C7.23 8.67 9.42 6.93 12 6.93z" fill="#EA4335" />
    </svg>
  );
}

// Payment: credit card with Royal Blue styling
function IconPayments() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Card body */}
      <rect x="2" y="5" width="20" height="14" rx="3" fill="#0C1322" stroke="#1D63FF" strokeWidth="1.2" />
      {/* Magnetic stripe */}
      <rect x="2" y="9" width="20" height="3" fill="#1D63FF" opacity="0.35" />
      {/* Chip */}
      <rect x="5" y="13.5" width="5" height="3" rx="1" fill="#1D63FF" opacity="0.6" />
      {/* Contactless waves */}
      <path d="M15 13a2 2 0 010 2" stroke="#1D63FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M17 11.5a4 4 0 010 5" stroke="#1D63FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// ─── Badge data ───────────────────────────────────────────────────────────────

const BADGES = [
  {
    Icon: IconUAE,
    label: 'Dubai DED Registered',
    sub: 'Licensed tech agency · UAE',
    color: '#1D63FF',
  },
  {
    Icon: IconNoHiddenFees,
    label: 'No Hidden Fees',
    sub: '100% transparent pricing',
    color: '#1D63FF',
  },
  {
    Icon: IconStar,
    label: '4.9 / 5.0 Rating',
    sub: 'Verified UAE client reviews',
    color: '#1D63FF',
  },
  {
    Icon: IconGoogleAds,
    label: 'Google Ads Certified',
    sub: 'High-converting lead gen',
    color: '#1D63FF',
  },
  {
    Icon: IconPayments,
    label: 'UAE Payment Gateways',
    sub: 'Stripe · Apple Pay · Tabby',
    color: '#1D63FF',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustBadges() {
  return (
    <div
      style={{
        borderTop: '1px solid #1E293B',
        borderBottom: '1px solid #1E293B',
        background: '#060A14',
        paddingBlock: '0',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      <div className="wrap">
        <div
          className="trust-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0' }}
        >
          {BADGES.map(({ Icon, label, sub, color }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px 22px',
                borderRight:
                  i < BADGES.length - 1
                    ? '1px solid #1E293B'
                    : 'none',
                transition: 'background 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#0B1120';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'transparent';
              }}
            >
              {/* Icon container — crisp high contrast, zero glow */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#0A0F1D',
                  border: `1.5px solid ${color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'none',
                }}
              >
                <Icon />
              </div>

              {/* High-Contrast Text */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    marginBottom: '3px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '11px',
                    color: '#94A3B8',
                    lineHeight: 1.35,
                    fontWeight: 500,
                  }}
                >
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .trust-grid > div:nth-child(3) { border-right: none !important; }
        }
        @media (max-width: 560px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid > div:nth-child(2n) { border-right: none !important; }
          .trust-grid > div { border-bottom: 1px solid #1E293B; }
          .trust-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}
