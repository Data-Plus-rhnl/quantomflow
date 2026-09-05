'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  { src: '/portfolio/luxury-ecommerce.jpg',    label: 'Luxe Botanicals', sub: 'AED 420K in 90 days', rotate: '-2deg', top: '44%', left: '6%',  zIndex: 4 },
  { src: '/portfolio/restaurant-ordering.jpg', label: 'The Roastery',    sub: '+184% direct orders', rotate: '4deg',  top: '54%', left: '40%', zIndex: 3 },
];

export default function Hero() {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [visible, setVisible] = useState(true);

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
    <section className="hero" id="top">

      {/* ── Background diagonal strips ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          '/portfolio/restaurant-ordering.jpg',
          '/portfolio/clinic-booking.jpg',
          '/portfolio/luxury-ecommerce.jpg',
          '/portfolio/salon-spa.jpg',
          '/portfolio/AnnarChildcare.png',
          '/portfolio/corporate-portal.jpg',
          '/portfolio/VahidDorri.png',
        ].map((src, i) => (
          <div key={src} style={{
            position: 'absolute', top: '-20%', left: `${i * 14.5 - 5}%`,
            width: '18%', height: '140%', transform: 'skewX(-18deg)',
            backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.28, outline: '2px solid rgba(10,14,26,0.9)',
          }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,14,26,0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--qf-bg) 0%, transparent 18%, transparent 82%, var(--qf-bg) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.5) 38%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 55% at 72% 110%, rgba(255,180,84,0.14) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 20% -10%, rgba(79,209,255,0.07) 0%, transparent 60%)' }} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-layout">

          {/* ── LEFT: copy ── */}
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="dot" />
              Dubai Web Agency · Est. 2022
            </div>

            <h1>
              Helping Dubai&apos;s
              <br />
              <span style={{ display: 'block', height: '1.1em', overflow: 'hidden', position: 'relative' }}>
                <span
                  className="accent"
                  style={{
                    display: 'block',
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

            <p className="hero-sub">
              We design and build fast, modern websites and mobile apps for businesses in Dubai. From online shops and booking systems to custom business portals—we build it all, start to finish.
            </p>

            <div className="hero-actions">
              <Link href="#contact" className="btn btn-primary">Start a Project →</Link>
              <Link href="#portfolio" className="btn btn-ghost">See Our Work ↓</Link>
            </div>

            <div className="hero-meta" style={{ marginTop: '28px', gap: '6px' }}>
              <span style={{ color: 'var(--qf-success)', fontSize: '11px' }}>●</span>
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
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 20px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(79,209,255,0.08)',
                  animation: `heroCardFloat ${6 + i * 1.4}s ease-in-out ${i * 0.8}s infinite alternate`,
                  willChange: 'transform',
                  background: '#0A0E1A',
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                  <Image src={item.src} alt={item.label} fill sizes="260px" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(5,8,16,0.75) 100%)' }} />
                </div>
                <div style={{
                  padding: '10px 13px', background: 'rgba(16,22,43,0.95)',
                  backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '8px',
                  borderTop: '1px solid rgba(35,43,71,0.8)',
                }}>
                  <span style={{ fontFamily: 'var(--qf-font-display)', fontSize: '11px', fontWeight: 600, color: 'rgba(232,236,245,0.9)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '9.5px', color: '#4FD1FF', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
            <div className="particles" aria-hidden="true">
              {[...Array(8)].map((_, i) => <div key={i} className="particle" />)}
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
