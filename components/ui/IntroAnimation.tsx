'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function IntroAnimation() {
  const [active, setActive] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [offsets, setOffsets] = useState({ shift: 220, textWidth: 440, gap: 22 });

  const textRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);

  const finishIntro = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
      setActive(false);
    }, 450);
  }, []);

  // Measure text to dynamically calculate the mathematical center offset for the initial badge position:
  // Offset = (Text Width + Gap) / 2
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measure = () => {
      if (textRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const textW = Math.round(textRect.width || textRef.current.scrollWidth || 440);
        const gap = window.innerWidth < 640 ? 14 : 22;
        const shift = Math.round((textW + gap) / 2);
        setOffsets({ shift, textWidth: textW, gap });
      }
    };

    measure();
    if (document.fonts) {
      document.fonts.ready.then(measure);
    }
    const t1 = setTimeout(measure, 80);
    const t2 = setTimeout(measure, 300);

    window.addEventListener('resize', measure, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Enforce manual scroll restoration and lock page to top (0, 0)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Lock scrolling while the 10s intro animation is playing
    const prevBodyOverflow = document.body.style.overflow;
    const prevDocOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 10-second total sequence: exit trigger at 9.55s, complete and unlock at 10.0s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 9550);

    const doneTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevDocOverflow || '';
      setActive(false);
    }, 10000);

    // Keyboard listener to skip on Escape or Spacebar
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevDocOverflow || '';
    };
  }, [finishIntro]);

  if (!active) {
    return null;
  }

  return (
    <div
      id="qf-intro-curtain"
      aria-hidden="true"
      onClick={finishIntro}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: '#070B16',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s ease',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
    >
      <style>{`
        /* 
          Exact 30-Frame 10.0s Motion Storyboard:
          - 0.0s - 2.0s (Frames 1-5): Badge centered, scale in + luminous cyan/white radial bloom flare
          - 2.0s - 3.2s (Frames 6-8): Badge glides left into lockup position; electric cyan cursor appears
          - 3.2s - 5.0s (Frames 9-13): Cursor moves right while typing "Quantum" (White) & "Flow" (Sky Blue) all the way past 'w'
          - 5.0s - 6.2s (Frames 14-17): Cursor exits; "Flow" executes kinetic liquid wave ripple
          - 6.2s - 8.2s (Frames 18-25): Steady resting lockup
          - 8.2s - 9.4s (Frames 26-30): Radiant specular light sheen sweep across badge & typography
          - 9.4s - 10.0s: Dissolve curtain into live website
        */

        /* Badge shift: Starts centered at +var(--qf-shift), then smoothly moves to 0 */
        @keyframes qfBadgeSlide {
          0% {
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(0.90);
            opacity: 0;
          }
          6% {
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(1);
            opacity: 1;
          }
          20% {
            /* Hold center during radial bloom */
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(1);
            opacity: 1;
          }
          31% {
            /* Glides into left lockup position */
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
          }
        }

        /* Luminous radial bloom behind badge (Frames 2 - 5: 0.6s to 2.8s) */
        @keyframes qfBloomPulse {
          0%, 6% {
            opacity: 0;
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(0.7);
          }
          16% {
            opacity: 0.95;
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(1.22);
          }
          22% {
            opacity: 0.75;
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(1);
          }
          28% {
            opacity: 0;
            transform: translate3d(var(--qf-shift, 220px), 0, 0) scale(0.85);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.85);
          }
        }

        /* Electric Blue Cursor Bar:
           Anchored directly inside the text container.
           Travels from left: 0% (start of "Quantum") all the way to left: calc(100% - 2px) (past the 'w' of "Flow")!
        */
        @keyframes qfCursorMotion {
          0%, 27% {
            left: 0%;
            opacity: 0;
            transform: translateY(-50%) scaleY(0);
          }
          29% {
            left: 0%;
            opacity: 1;
            transform: translateY(-50%) scaleY(1);
          }
          32% {
            left: 0%;
            opacity: 1;
            transform: translateY(-50%) scaleY(1);
          }
          50% {
            left: calc(100% - 2px);
            opacity: 1;
            transform: translateY(-50%) scaleY(1);
          }
          52% {
            left: calc(100% - 2px);
            opacity: 0;
            transform: translateY(-50%) scaleY(0.4);
          }
          100% {
            left: calc(100% - 2px);
            opacity: 0;
            transform: translateY(-50%) scaleY(0);
          }
        }

        /* Text typing reveal via clip-path (Frames 9 - 13: 32% to 50%) */
        @keyframes qfTextClipReveal {
          0%, 31% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          32% {
            clip-path: inset(0 100% 0 0);
            opacity: 1;
          }
          50% {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }

        /* Fluid kinetic wave / overshoot on "Flow" (Frames 14 - 17: 52% to 63%) */
        @keyframes qfFlowWave {
          0%, 51% {
            transform: translateY(0) rotate(0deg);
          }
          55% {
            transform: translateY(-8px) rotate(1.8deg);
          }
          59% {
            transform: translateY(3px) rotate(-0.8deg);
          }
          63% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        /* Specular light sheen beam sweep across badge & typography (Frames 26 - 30: 82% to 94%) */
        @keyframes qfSpecularSheen {
          0%, 81% {
            transform: translate3d(-140%, 0, 0) skewX(-22deg);
            opacity: 0;
          }
          83% {
            opacity: 1;
          }
          93% {
            transform: translate3d(240%, 0, 0) skewX(-22deg);
            opacity: 1;
          }
          95%, 100% {
            transform: translate3d(250%, 0, 0) skewX(-22deg);
            opacity: 0;
          }
        }

        /* Gentle ambient pulse in deep space background */
        @keyframes qfAmbientPulse {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.65;
          }
        }
      `}</style>

      {/* Subtle deep nebula ambient back light */}
      <div
        style={{
          position: 'absolute',
          width: '64vw',
          height: '64vh',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29, 99, 255, 0.12) 0%, rgba(7, 11, 22, 0) 70%)',
          pointerEvents: 'none',
          animation: 'qfAmbientPulse 8s ease-in-out infinite',
        }}
      />

      {/* Master Lockup Flex Container */}
      <div
        ref={lockupRef}
        style={
          {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            userSelect: 'none',
            '--qf-shift': `${offsets.shift}px`,
            '--qf-gap': `${offsets.gap}px`,
          } as React.CSSProperties
        }
      >
        {/* Luminous Bloom Glow behind badge (Frames 2-5) */}
        <div
          style={{
            position: 'absolute',
            left: 'clamp(-22px, -2.5vw, -30px)',
            top: 'clamp(-22px, -2.5vw, -30px)',
            width: 'clamp(126px, 15vw, 160px)',
            height: 'clamp(126px, 15vw, 160px)',
            borderRadius: 'clamp(32px, 4vw, 42px)',
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(96, 165, 250, 0.7) 40%, rgba(29, 99, 255, 0.25) 70%, transparent 85%)',
            filter: 'blur(16px)',
            pointerEvents: 'none',
            zIndex: 1,
            animation: 'qfBloomPulse 10s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            willChange: 'opacity, transform',
          }}
        />

        {/* 1. App Icon Squircle Badge */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: 'clamp(82px, 9.5vw, 100px)',
            height: 'clamp(82px, 9.5vw, 100px)',
            minWidth: 'clamp(82px, 9.5vw, 100px)',
            borderRadius: 'clamp(22px, 2.7vw, 28px)',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            animation: 'qfBadgeSlide 10s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            willChange: 'transform, opacity',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '82%',
              height: '82%',
            }}
          >
            <Image
              src="/qf-logo-avatar.png"
              alt="Quantum Flow"
              fill
              priority
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Specular sheen pass across badge */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.85) 50%, transparent 80%)',
              animation: 'qfSpecularSheen 10s cubic-bezier(0.25, 1, 0.5, 1) forwards',
            }}
          />
        </div>

        {/* 2. Text Content & Typing Container */}
        <div
          ref={textRef}
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: 'clamp(14px, 2vw, 22px)',
            paddingRight: 'clamp(10px, 1.2vw, 16px)', // Padding ensures cursor stops right past 'w'
            whiteSpace: 'nowrap',
          }}
        >
          {/* Typography: "Quantum" (White) + "Flow" (Sky Blue) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(38px, 5.5vw, 68px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              animation: 'qfTextClipReveal 10s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              willChange: 'clip-path, opacity',
            }}
          >
            <span
              style={{
                color: '#FFFFFF',
                display: 'inline-block',
              }}
            >
              Quantum
            </span>

            <span
              style={{
                color: '#5B9DFF',
                marginLeft: 'clamp(8px, 1.1vw, 14px)',
                display: 'inline-block',
                transformOrigin: 'bottom left',
                animation: 'qfFlowWave 10s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                willChange: 'transform',
              }}
            >
              Flow
            </span>
          </div>

          {/* Electric Cyan Cursor Bar (`|`) - Anchored inside text box, moves 0% to 100% past 'w' */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              zIndex: 4,
              width: 'clamp(3.5px, 0.45vw, 4.5px)',
              height: 'clamp(38px, 5.5vw, 64px)',
              backgroundColor: '#5B9DFF',
              borderRadius: '2px',
              boxShadow: '0 0 12px #5B9DFF, 0 0 24px rgba(91, 157, 255, 0.7)',
              animation: 'qfCursorMotion 10s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              willChange: 'left, opacity, transform',
              pointerEvents: 'none',
            }}
          />

          {/* Specular light sheen beam sweep across typography */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.95) 48%, rgba(147, 197, 253, 0.85) 54%, transparent 80%)',
              mixBlendMode: 'screen',
              animation: 'qfSpecularSheen 10s cubic-bezier(0.25, 1, 0.5, 1) forwards',
            }}
          />
        </div>
      </div>

      {/* Subtle, elegant Skip button indicator */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          finishIntro();
        }}
        aria-label="Skip Intro Animation"
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vh, 40px)',
          right: 'clamp(24px, 4vw, 48px)',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '999px',
          padding: '8px 18px',
          color: 'rgba(255, 255, 255, 0.55)',
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        Skip Intro ✕
      </button>
    </div>
  );
}
