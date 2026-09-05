'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeroProps {
  onOpenContactModal?: () => void;
}

const ROTATING_INDUSTRIES = [
  'cafes & restaurants',
  'e-commerce shops',
  'clinics & salons',
  'real estate agencies',
  'startups & local services',
];

export default function Hero({ onOpenContactModal }: HeroProps) {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndustryIndex((prev) => (prev + 1) % ROTATING_INDUSTRIES.length);
        setOpacity(1);
      }, 350);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-badge">
            <span className="dot"></span> Web Design & Digital Marketing Agency · Dubai, UAE
          </div>
          <h1>
            Helping Dubai’s
            <br />
            <span
              className="accent"
              id="rotate-text"
              style={{
                transition: 'opacity 0.35s ease-in-out',
                display: 'inline-block',
                opacity: opacity,
              }}
            >
              {ROTATING_INDUSTRIES[industryIndex]}
            </span>
            <br />
            thrive online.
          </h1>
          <p className="hero-sub">
            We engineer high-converting websites, zero-commission ordering systems, and targeted Google Ads landing pages for businesses across Dubai and the GCC. No generic templates—pure performance.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenContactModal}
            >
              Get Free Consultation →
            </button>
            <Link href="#portfolio" className="btn btn-ghost">
              Explore Our Work ↓
            </Link>
          </div>
          <div className="hero-meta">
            Dubai DED Licensed · DIFC, Downtown, Jumeirah & Marina · UTC+4
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          {/* Signature flow circuit illustration */}
          <svg viewBox="0 0 520 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--qf-accent)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--qf-accent-2)" stopOpacity="0.7" />
              </linearGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Orbit rings */}
            <circle cx="260" cy="280" r="220" stroke="var(--qf-line)" strokeWidth="1" />
            <circle cx="260" cy="280" r="160" stroke="var(--qf-line)" strokeWidth="1" />

            {/* Main flow path connecting four nodes (web, app, cloud, ai) */}
            <path
              id="mainFlow"
              d="M100 140 C 180 90, 230 90, 260 160 S 360 260, 420 220 S 460 380, 380 420 S 220 470, 150 410 S 60 260, 100 140"
              stroke="url(#flowGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />

            {/* Traveling pulses */}
            <circle r="4.5" fill="var(--qf-accent)" filter="url(#softGlow)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M100 140 C 180 90, 230 90, 260 160 S 360 260, 420 220 S 460 380, 380 420 S 220 470, 150 410 S 60 260, 100 140"
              />
            </circle>
            <circle r="3" fill="var(--qf-accent-2)" filter="url(#softGlow)">
              <animateMotion
                dur="6s"
                begin="3s"
                repeatCount="indefinite"
                path="M100 140 C 180 90, 230 90, 260 160 S 360 260, 420 220 S 460 380, 380 420 S 220 470, 150 410 S 60 260, 100 140"
              />
            </circle>

            {/* Nodes */}
            <g>
              <circle cx="100" cy="140" r="34" fill="var(--qf-bg-raised)" stroke="var(--qf-accent-line)" strokeWidth="1.2" />
              <text x="100" y="145" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--qf-text)">
                STORES
              </text>
            </g>
            <g>
              <circle cx="420" cy="220" r="34" fill="var(--qf-bg-raised)" stroke="var(--qf-accent-line)" strokeWidth="1.2" />
              <text x="420" y="225" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--qf-text)">
                MENUS
              </text>
            </g>
            <g>
              <circle cx="380" cy="420" r="34" fill="var(--qf-bg-raised)" stroke="var(--qf-accent-line)" strokeWidth="1.2" />
              <text x="380" y="425" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--qf-text)">
                BOOKINGS
              </text>
            </g>
            <g>
              <circle cx="150" cy="410" r="34" fill="var(--qf-bg-raised)" stroke="var(--qf-accent-line)" strokeWidth="1.2" />
              <text x="150" y="415" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fill="var(--qf-text)">
                LEAD GEN
              </text>
            </g>

            {/* Center quantum mark */}
            <circle cx="260" cy="280" r="46" fill="var(--qf-bg-alt)" stroke="var(--qf-accent)" strokeWidth="1.4" />
            <path d="M260 250 L284 266 V298 L260 314 L236 298 V266 Z" stroke="var(--qf-accent)" strokeWidth="1.3" fill="none" />
            <circle cx="260" cy="280" r="5" fill="var(--qf-accent)" />

            {/* Scattered fine dots */}
            <circle cx="60" cy="320" r="2" fill="var(--qf-text-faint)" />
            <circle cx="460" cy="120" r="2" fill="var(--qf-text-faint)" />
            <circle cx="470" cy="330" r="2" fill="var(--qf-text-faint)" />
            <circle cx="40" cy="200" r="2" fill="var(--qf-text-faint)" />
          </svg>

          {/* Floating particles */}
          <div className="particles" aria-hidden="true">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
