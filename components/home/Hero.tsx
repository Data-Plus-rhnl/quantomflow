'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/components/theme/ThemeContext';

const ROTATING_INDUSTRIES = [
  'restaurants & cafés',
  'clinics & salons',
  'e-commerce brands',
  'real estate firms',
  'local businesses',
];

const MOSAIC = [
  { src: '/portfolio/VahidDorri.png',          label: 'Vahid Dorri',     sub: '10x enquiry rate',    rotate: '-4deg', top: '0%',  left: '0%',  zIndex: 1 },
  { src: '/portfolio/AnnarChildcare.png',      label: 'Annar Childcare', sub: '+3x enrolment leads', rotate: '3deg',  top: '12%', left: '34%', zIndex: 2 },
  { src: '/portfolio/camofriday.png',          label: '#CAMOFRIDAY',     sub: '100% Impact Merch',   rotate: '-2deg', top: '44%', left: '6%',  zIndex: 4 },
  { src: '/portfolio/restaurant-ordering.jpg', label: 'The Roastery',    sub: '+184% direct orders', rotate: '4deg',  top: '54%', left: '40%', zIndex: 3 },
];

export default function Hero() {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndustryIndex((p) => (p + 1) % ROTATING_INDUSTRIES.length);
        setVisible(true);
      }, 320);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero"
      id="top"
      style={{
        background: isDark ? '#070B16' : '#FFFFFF',
        position: 'relative',
        transition: 'background 0.3s ease',
      }}
    >

      {/* ── Background: Dark ribbons in Dark Mode, Dedicated single light architectural image in Light Mode ── */}
      {isDark ? (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
          {[
            '/portfolio/restaurant-ordering.jpg',
            '/portfolio/clinic-booking.jpg',
            '/portfolio/camofriday.png',
            '/portfolio/salon-spa.jpg',
            '/portfolio/AnnarChildcare.png',
            '/portfolio/corporate-portal.jpg',
            '/portfolio/VahidDorri.png',
          ].map((src, i) => (
            <div key={src} style={{
              position: 'absolute', top: '-20%', left: `${i * 14.5 - 5}%`,
              width: '18%', height: '140%', transform: 'translate3d(0, 0, 0) skewX(-18deg)',
              willChange: 'transform', backfaceVisibility: 'hidden',
              backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: 0.22, outline: '2px solid rgba(7, 11, 22, 0.9)',
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(7, 11, 22, 0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #070B16 0%, transparent 18%, transparent 82%, #070B16 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7, 11, 22, 0.88) 0%, rgba(7, 11, 22, 0.55) 38%, transparent 60%)' }} />
        </div>
      ) : (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Single continuous subtle light architectural background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/light-hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              opacity: 0.75,
            }}
          />
          {/* Directional text shield to guarantee 100% high-contrast readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.88) 36%, rgba(255, 255, 255, 0.25) 70%, transparent 100%)',
            }}
          />
          {/* Top and bottom subtle blend */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, transparent 18%, transparent 85%, #FFFFFF 100%)',
            }}
          />
        </div>
      )}

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-layout">

          {/* ── LEFT: copy ── */}
          <div className="hero-copy">
            <div
              className="hero-badge"
              style={{
                background: isDark ? '#121A2E' : '#FFFFFF',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #CBD5E1',
                color: isDark ? '#94A3B8' : '#334155',
                boxShadow: isDark ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                fontWeight: 600,
              }}
            >
              <span className="dot" style={{ background: '#10B981', boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.18)' }} />
              Dubai Web Agency · Est. 2022
            </div>

            <h1 style={{ color: isDark ? '#FFFFFF' : '#070B16' }}>
              Helping Dubai&apos;s
              <br />
              <span style={{ display: 'block', height: '1.1em', overflow: 'hidden', position: 'relative' }}>
                <span
                  className="accent"
                  style={{
                    display: 'block',
                    color: '#1D63FF',
                    fontWeight: 800,
                    transition: 'opacity 0.32s ease, transform 0.32s ease',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {ROTATING_INDUSTRIES[industryIndex]}
                </span>
              </span>
              thrive online.
            </h1>

            <p
              className="hero-sub"
              style={{
                color: isDark ? '#94A3B8' : '#334155',
                fontWeight: 450,
                lineHeight: 1.65,
              }}
            >
              We design and build fast, modern websites and mobile apps for businesses in Dubai. From online shops and booking systems to custom business portals—we build it all, start to finish.
            </p>

            <div className="hero-actions">
              <Link
                href="/request-quote"
                className="btn btn-primary"
                style={{
                  background: '#1D63FF',
                  color: '#FFFFFF',
                  border: '1px solid #1D63FF',
                  boxShadow: 'none',
                  fontWeight: 600,
                }}
              >
                Start a Project →
              </Link>
              <Link
                href="#portfolio"
                className="btn btn-ghost"
                style={{
                  background: isDark ? 'transparent' : '#FFFFFF',
                  color: isDark ? '#FFFFFF' : '#070B16',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.18)' : '1.5px solid #CBD5E1',
                  boxShadow: isDark ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.03)',
                  fontWeight: 600,
                }}
              >
                See Our Work ↓
              </Link>
            </div>

            <div
              className="hero-meta"
              style={{
                marginTop: '28px',
                gap: '8px',
                color: isDark ? '#64748B' : '#475569',
                fontWeight: 500,
              }}
            >
              <span style={{ color: '#10B981', fontSize: '11px' }}>●</span>
              <span>7 live client projects &nbsp;·&nbsp; Dubai DED Licensed &nbsp;·&nbsp; DIFC &amp; Marina</span>
            </div>
          </div>

          {/* ── RIGHT: mosaic — hidden on mobile ── */}
          <div className="hero-mosaic" aria-hidden="true">
            {MOSAIC.map((item, i) => (
              <div
                key={item.src}
                style={{
                  position: 'absolute',
                  top: item.top, left: item.left,
                  width: '54%', maxWidth: '260px',
                  transform: `rotate(${item.rotate})`,
                  zIndex: item.zIndex,
                  borderRadius: '14px', overflow: 'hidden',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1.5px solid #E2E8F0',
                  boxShadow: isDark
                    ? '0 20px 60px -12px rgba(0,0,0,0.7)'
                    : '0 16px 36px -8px rgba(15, 23, 42, 0.12), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
                  animation: `heroCardFloat ${6 + i * 1.4}s ease-in-out ${i * 0.8}s infinite alternate`,
                  willChange: 'transform',
                  background: isDark ? '#0A0E1A' : '#FFFFFF',
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                  <Image src={item.src} alt={item.label} fill sizes="260px" style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: isDark
                      ? 'linear-gradient(180deg, transparent 50%, rgba(5,8,16,0.75) 100%)'
                      : 'linear-gradient(180deg, transparent 65%, rgba(15,23,42,0.12) 100%)',
                  }} />
                </div>
                <div style={{
                  padding: '11px 14px',
                  background: isDark ? 'rgba(16, 22, 43, 0.95)' : '#FFFFFF',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '8px',
                  borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #F1F5F9',
                }}>
                  <span style={{
                    fontFamily: 'var(--qf-font-display)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: isDark ? '#FFFFFF' : '#070B16',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#1D63FF',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
            <div className="particles" aria-hidden="true" style={{ opacity: isDark ? 0.35 : 0.12 }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{ background: '#1D63FF' }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }
        .hero-copy {
          position: relative;
          z-index: 1;
        }
        .hero-copy .btn-primary:hover {
          background: #1751D0 !important;
          border-color: #1751D0 !important;
          transform: translateY(-2px);
        }
        .hero-copy .btn-ghost:hover {
          background: ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#F8FAFC'} !important;
          border-color: ${isDark ? 'rgba(255, 255, 255, 0.35)' : '#070B16'} !important;
          color: ${isDark ? '#FFFFFF' : '#070B16'} !important;
          transform: translateY(-2px);
        }
        .hero-mosaic {
          position: relative;
          height: 480px;
          min-height: 380px;
        }
        @keyframes heroCardFloat {
          0%   { transform: rotate(var(--r, 0deg)) translateY(0px); }
          100% { transform: rotate(var(--r, 0deg)) translateY(-10px); }
        }
        /* Tablet: stack layout, hide mosaic */
        @media (max-width: 980px) {
          .hero-layout {
            grid-template-columns: 1fr;
          }
          .hero-mosaic {
            display: none;
          }
        }
        /* Mobile: tighten padding & font sizes */
        @media (max-width: 600px) {
          .hero-copy .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-copy .hero-actions a {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
