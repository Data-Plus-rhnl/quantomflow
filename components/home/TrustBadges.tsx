import React from 'react';

export default function TrustBadges() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--qf-line-soft)',
        borderBottom: '1px solid var(--qf-line-soft)',
        background: 'rgba(16, 22, 43, 0.5)',
        backdropFilter: 'blur(10px)',
        paddingBlock: '18px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>🇦🇪</span>
            <div>
              <div style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '12px', color: 'var(--qf-text)', fontWeight: 600 }}>
                Dubai DED Registered
              </div>
              <div style={{ fontSize: '11px', color: 'var(--qf-text-faint)' }}>
                Licensed Tech Agency · UAE
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>⚡</span>
            <div>
              <div style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '12px', color: 'var(--qf-text)', fontWeight: 600 }}>
                Zero Commissions
              </div>
              <div style={{ fontSize: '11px', color: 'var(--qf-text-faint)' }}>
                Keep 100% of orders & bookings
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>⭐</span>
            <div>
              <div style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '12px', color: 'var(--qf-text)', fontWeight: 600 }}>
                4.9 / 5.0 Rating
              </div>
              <div style={{ fontSize: '11px', color: 'var(--qf-text-faint)' }}>
                Verified UAE Client Reviews
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>🎯</span>
            <div>
              <div style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '12px', color: 'var(--qf-text)', fontWeight: 600 }}>
                Google Ads Certified
              </div>
              <div style={{ fontSize: '11px', color: 'var(--qf-text-faint)' }}>
                High-Converting Lead Gen
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>🔒</span>
            <div>
              <div style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '12px', color: 'var(--qf-text)', fontWeight: 600 }}>
                UAE Gateways
              </div>
              <div style={{ fontSize: '11px', color: 'var(--qf-text-faint)' }}>
                Stripe, Apple Pay & Tabby
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
