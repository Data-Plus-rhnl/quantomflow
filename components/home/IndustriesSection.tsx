'use client';

import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { useTheme } from '@/components/theme/ThemeContext';

const ROW_ONE = [
  'Cafes & Coffee Shops',
  'Restaurants & Diners',
  'E-Commerce & Boutiques',
  'Salons & Spas',
  'Real Estate Agencies',
  'Hotels & Hospitality',
  'Food Delivery',
  'Retail Stores',
];

const ROW_TWO = [
  'Medical & Dental Clinics',
  'Fitness Studios',
  'Professional Services',
  'Local Contracting',
  'Auto Dealerships',
  'Education & Tutoring',
  'Interior Design',
  'Events & Photography',
];

function IndustryItem({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <span
      className="ind-tattoo-item"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'clamp(16px, 2.2vw, 32px)',
        margin: '0 clamp(12px, 1.8vw, 24px)',
        padding: '6px 0',
        background: 'transparent',
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none',
        fontFamily: "'Grenze Gotisch', 'Pirata One', 'UnifrakturCook', 'UnifrakturMaguntia', 'New Rocker', cursive, fantasy, sans-serif",
        fontSize: 'clamp(30px, 3.6vw, 46px)',
        fontWeight: 800,
        color: isDark ? '#FFFFFF' : '#0B0F19',
        letterSpacing: '0.03em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        textTransform: 'uppercase',
        transition: 'color 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          color: '#1D63FF',
          fontSize: 'clamp(20px, 2.4vw, 30px)',
          lineHeight: 1,
          flexShrink: 0,
          opacity: 0.95,
          transform: 'translateY(-1px)',
        }}
        aria-hidden="true"
      >
        ✦
      </span>
      <span>{label}</span>
    </span>
  );
}

export default function IndustriesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const fadeMask = isDark
    ? 'linear-gradient(90deg, var(--qf-bg) 0%, transparent 8%, transparent 92%, var(--qf-bg) 100%)'
    : 'linear-gradient(90deg, var(--qf-bg) 0%, transparent 8%, transparent 92%, var(--qf-bg) 100%)';

  return (
    <>
      <section
        className="section section-alt"
        id="industries"
        style={{ paddingBottom: 'clamp(48px, 8vw, 96px)' }}
      >
        {/* Header */}
        <div className="wrap">
          <ScrollReveal
            style={{
              textAlign: 'center',
              maxWidth: '680px',
              marginInline: 'auto',
              marginBottom: 'clamp(44px, 6vw, 68px)',
            }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Industries
            </div>
            <h2 className="h2">Businesses we help in Dubai.</h2>
          </ScrollReveal>
        </div>

        {/* Marquee wrapper */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(16px, 2.5vw, 28px)',
          }}
        >
          {/* Edge fade masks */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 2,
              background: fadeMask,
            }}
          />

          {/* Row 1 — scrolls LEFT */}
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'industries-left 40s linear infinite',
              willChange: 'transform',
            }}
            className="industries-row-left"
          >
            {[...Array(4)].map((_, copy) =>
              ROW_ONE.map((label, i) => (
                <IndustryItem key={`r1-${copy}-${i}`} label={label} isDark={isDark} />
              ))
            )}
          </div>

          {/* Row 2 — scrolls RIGHT */}
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'industries-right 44s linear infinite',
              willChange: 'transform',
            }}
            className="industries-row-right"
          >
            {[...Array(4)].map((_, copy) =>
              ROW_TWO.map((label, i) => (
                <IndustryItem key={`r2-${copy}-${i}`} label={label} isDark={isDark} />
              ))
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes industries-left {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-25%, 0, 0); }
        }
        @keyframes industries-right {
          from { transform: translate3d(-25%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .industries-row-left:hover,
        .industries-row-right:hover {
          animation-play-state: paused;
        }
        .ind-tattoo-item:hover {
          color: #1D63FF !important;
          transform: scale(1.06);
        }
      `}</style>
    </>
  );
}
