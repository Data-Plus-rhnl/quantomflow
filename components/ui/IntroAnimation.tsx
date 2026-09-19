'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroAnimation() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Enforce manual scroll restoration and lock page to top (0, 0)
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Lock scrolling while the 5s intro animation is playing
      const prevBodyOverflow = document.body.style.overflow;
      const prevDocOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.body.style.overflow = prevBodyOverflow || '';
        document.documentElement.style.overflow = prevDocOverflow || '';
        setActive(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = prevBodyOverflow || '';
        document.documentElement.style.overflow = prevDocOverflow || '';
      };
    }
  }, []);

  if (!active) {
    return null;
  }

  return (
    <div
      id="qf-intro-curtain"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        pointerEvents: 'none', // NEVER trap clicks or scrolling
        overflow: 'hidden',
        backgroundColor: '#070B16', // Deep Obsidian Navy V-valley
        animation: 'qfContainerFadeOut 0.4s ease-out 4.6s forwards',
      }}
    >
      <style>{`
        /* 
          Twin-Arch Liquid Wave Intro Sequence:
          - Navy (#070B16) top V-valley
          - Solid Royal Cobalt (#1D63FF) twin-arch wave at bottom
          - Wordmark at center: "Quantum" in White (#FFFFFF) + "Flow" in Royal Blue (#1D63FF)
          - Logo fades out first, then curtain exits to reveal landing page
        */

        @keyframes qfWaveEntranceAndExit {
          0% {
            transform: translate3d(0, 35%, 0);
          }
          18% {
            transform: translate3d(0, 0%, 0);
          }
          66% {
            transform: translate3d(0, 0%, 0);
          }
          96% {
            transform: translate3d(0, 105%, 0);
          }
          100% {
            transform: translate3d(0, 105%, 0);
          }
        }

        @keyframes qfLogoSequence {
          0%, 14% {
            opacity: 0;
            transform: translate3d(-50%, -46%, 0) scale(0.92);
          }
          24% {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0) scale(1.02);
          }
          32% {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0) scale(1);
          }
          58% {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0) scale(1);
          }
          66% {
            opacity: 0;
            transform: translate3d(-50%, -54%, 0) scale(0.98);
          }
          100% {
            opacity: 0;
            transform: translate3d(-50%, -54%, 0) scale(0.98);
          }
        }

        @keyframes qfContainerFadeOut {
          0% {
            opacity: 1;
            visibility: visible;
          }
          99% {
            opacity: 0;
            visibility: visible;
          }
          100% {
            opacity: 0;
            visibility: hidden;
            display: none;
          }
        }
      `}</style>

      {/* The Solid Royal Cobalt Twin-Arch Curtain Wave (Filling the bottom half) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
          animation: 'qfWaveEntranceAndExit 4.8s cubic-bezier(0.76, 0, 0.24, 1) forwards',
          willChange: 'transform',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* SVG Header: Twin-Arch Peaks in Solid Royal Cobalt Blue (#1D63FF) */}
        <svg
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          style={{
            width: '100vw',
            height: '100vh',
            display: 'block',
          }}
          aria-hidden="true"
        >
          <path
            d="
              M 0,700
              L 0,220
              C 30,200 70,190 180,190
              C 270,190 380,350 490,480
              C 510,500 520,500 540,480
              C 650,350 760,190 850,190
              C 940,190 980,200 1000,220
              L 1000,700
              Z
            "
            fill="#1D63FF" // 100% Solid Royal Cobalt Blue — strictly ZERO glow
          />
        </svg>
      </div>

      {/* Center Brand Display: Logo Emblem + "Quantum" (White) & "Flow" (Royal Blue) inside the Navy V */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          textAlign: 'center',
          animation: 'qfLogoSequence 4.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
          willChange: 'transform, opacity',
          userSelect: 'none',
        }}
      >
        {/* Solid Icon Badge — crisp 2px border, ZERO glow */}
        <div
          style={{
            width: '92px',
            height: '92px',
            borderRadius: '24px',
            backgroundColor: '#070B16',
            border: '2px solid rgba(255, 255, 255, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/qf-logo-avatar.png"
            alt="Quantum Flow"
            width={82}
            height={82}
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        {/* Brand Text: Quantum in White & Flow in Royal Blue */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(34px, 5.5vw, 54px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'baseline',
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Quantum</span>
            <span style={{ color: '#1D63FF', marginLeft: '3px' }}>Flow</span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '11px',
              fontWeight: 700,
              color: '#94A3B8', // Clean slate gray
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
            }}
          >
            Digital Agency Dubai
          </span>
        </div>
      </div>
    </div>
  );
}
