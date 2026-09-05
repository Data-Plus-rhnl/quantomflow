'use client';

import React from 'react';

// ─── Real hand-crafted SVG icons — each one purpose-built for its badge ──────

// UAE flag icon — red & green with white crescent feel
function IconUAE() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Flag body */}
      <rect x="3" y="5" width="18" height="4.5" rx="0" fill="#00732F" />
      <rect x="3" y="9.5" width="18" height="4.5" rx="0" fill="#FFFFFF" />
      <rect x="3" y="14" width="18" height="4.5" rx="0" fill="#FF0000" />
      {/* Red left bar */}
      <rect x="3" y="5" width="5" height="13.5" rx="1" fill="#FF0000" />
      {/* Flag border */}
      <rect x="3" y="5" width="18" height="13.5" rx="1" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
    </svg>
  );
}

// No-commission: bold percent with a strike-through cross
function IconZeroCommission() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="2.5" stroke="#FFB454" strokeWidth="1.8" />
      <circle cx="15.5" cy="15.5" r="2.5" stroke="#FFB454" strokeWidth="1.8" />
      <line x1="5" y1="19" x2="19" y2="5" stroke="#FFB454" strokeWidth="1.8" strokeLinecap="round" />
      {/* Strike line through the whole thing */}
      <line x1="3" y1="21" x2="21" y2="3" stroke="#FF6B6B" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// 4.9 star: filled gold star with a subtle half-fill
function IconStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Full filled star */}
      <path
        d="M12 2l2.9 5.9 6.5.95-4.7 4.58 1.1 6.43L12 17.02l-5.8 3.05 1.1-6.43L2.6 8.85l6.5-.95L12 2z"
        fill="#FFB454"
        stroke="#FFB454"
        strokeWidth="0.5"
      />
      {/* Shine glint */}
      <path
        d="M12 4.5l1.8 3.6 4 .58-2.9 2.82.68 3.97L12 13.3"
        fill="rgba(255,255,255,0.18)"
      />
      {/* 4.9 text hint — small dot below */}
      <circle cx="12" cy="21" r="1" fill="#FFB454" opacity="0.6" />
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

// Payment: credit card with Stripe purple + Apple Pay styling
function IconPayments() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Card body */}
      <rect x="2" y="5" width="20" height="14" rx="3" fill="#1A1F36" stroke="#B794F4" strokeWidth="1.2" />
      {/* Magnetic stripe */}
      <rect x="2" y="9" width="20" height="3" fill="#B794F4" opacity="0.35" />
      {/* Chip */}
      <rect x="5" y="13.5" width="5" height="3" rx="1" fill="#B794F4" opacity="0.6" />
      {/* Contactless waves */}
      <path d="M15 13a2 2 0 010 2" stroke="#B794F4" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M17 11.5a4 4 0 010 5" stroke="#B794F4" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// ─── Badge data ───────────────────────────────────────────────────────────────

const BADGES = [
  {
    Icon: IconUAE,
    label: 'Dubai DED Registered',
    sub: 'Licensed tech agency · UAE',
    color: '#4FD1FF',
    glow: 'rgba(79,209,255,0.15)',
  },
  {
    Icon: IconZeroCommission,
    label: 'Zero Commission',
    sub: 'You keep 100% of every order',
    color: '#FFB454',
    glow: 'rgba(255,180,84,0.15)',
  },
  {
    Icon: IconStar,
    label: '4.9 / 5.0 Rating',
    sub: 'Verified UAE client reviews',
    color: '#FFB454',
    glow: 'rgba(255,180,84,0.15)',
  },
  {
    Icon: IconGoogleAds,
    label: 'Google Ads Certified',
    sub: 'High-converting lead gen',
    color: '#68D391',
    glow: 'rgba(110,231,183,0.15)',
  },
  {
    Icon: IconPayments,
    label: 'UAE Payment Gateways',
    sub: 'Stripe · Apple Pay · Tabby',
    color: '#B794F4',
    glow: 'rgba(183,148,244,0.15)',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustBadges() {
  return (
    <div
      style={{
        borderTop: '1px solid rgba(35,43,71,0.6)',
        borderBottom: '1px solid rgba(35,43,71,0.6)',
        background: 'rgba(10,14,26,0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        paddingBlock: '0',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      {/* Amber warmth line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(255,180,84,0.4), transparent)',
        }}
      />

      <div className="wrap">
        <div
          className="trust-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0' }}
        >
          {BADGES.map(({ Icon, label, sub, color, glow }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '13px',
                padding: '20px 22px',
                borderRight:
                  i < BADGES.length - 1
                    ? '1px solid rgba(35,43,71,0.5)'
                    : 'none',
                transition: 'background 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = glow;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'transparent';
              }}
            >
              {/* Icon container — larger, more presence */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '11px',
                  background: `${color}12`,
                  border: `1px solid ${color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 0 14px -4px ${color}44`,
                }}
              >
                <Icon />
              </div>

              {/* Text */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: 'rgba(232,236,245,0.95)',
                    lineHeight: 1.25,
                    marginBottom: '4px',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '10.5px',
                    color: 'rgba(91,100,128,0.85)',
                    lineHeight: 1.3,
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
          .trust-grid > div { border-bottom: 1px solid rgba(35,43,71,0.5); }
          .trust-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}
