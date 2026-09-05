import React from 'react';

const CAPABILITIES = [
  'Online Ordering',
  'E-Commerce Stores',
  'Table Reservations',
  'Appointment Bookings',
  'Stripe & Apple Pay',
  'Local Google SEO',
  'WhatsApp Ordering',
  'Mobile-First Design',
  'Instagram Shop Integration',
  'Google Maps Optimization',
  'Custom Web Apps',
  'Zero Commission Systems',
  'Fast-Loading Websites',
  'Dubai DED Licensed',
];

export default function MarqueeStrip() {
  return (
    <div
      aria-label="Capabilities"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(135deg, rgba(79,209,255,0.08) 0%, rgba(16,22,43,0.98) 40%, rgba(16,22,43,0.98) 60%, rgba(255,180,84,0.07) 100%)',
        borderTop: '1px solid rgba(79,209,255,0.2)',
        borderBottom: '1px solid rgba(79,209,255,0.2)',
        paddingBlock: 'clamp(14px, 3vw, 20px)',
        overflow: 'hidden',
        boxShadow: '0 8px 32px -4px rgba(0,0,0,0.5), 0 -8px 32px -4px rgba(0,0,0,0.5)',
      }}
    >
      {/* Edge fade masks */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
        background: 'linear-gradient(90deg, rgba(16,22,43,1) 0%, transparent 8%, transparent 92%, rgba(16,22,43,1) 100%)',
      }} />

      {/* Scrolling track */}
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 32s linear infinite', gap: '0', willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
        {[...Array(3)].map((_, copy) =>
          CAPABILITIES.map((cap, i) => (
            <span
              key={`${copy}-${i}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '0 clamp(16px, 3vw, 28px)',
                fontFamily: 'var(--qf-font-display)',
                fontWeight: 600,
                fontSize: 'clamp(12px, 2vw, 14px)',
                letterSpacing: '0.01em',
                color: 'rgba(232,236,245,0.9)',
                whiteSpace: 'nowrap',
              }}
            >
              {cap}
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden="true">
                <rect x="3" y="0" width="4.24" height="4.24" transform="rotate(45 3 3)" fill="#4FD1FF" opacity="0.7" />
              </svg>
            </span>
          ))
        )}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-33.333%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
