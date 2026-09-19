'use client';

import React, { useState, useRef, useCallback } from 'react';

interface PullChainSwitchProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Architectural Industrial Pull Chain Switch.
 * Crafted after precision-machined knurled brass/steel hardware (Buster + Punch / Flos style).
 * Features:
 * - Ceiling escutcheon mount
 * - Extended 80px metal ball chain
 * - Precision lathe-turned knurled pendant weight
 * - Realistic spring physics with damped pendulum oscillation
 * - Mechanical switch audio click via Web Audio API
 * - Zero AI tropes: no cheesy emojis, no labels, pure tactile minimalism
 */
export default function PullChainSwitch({
  isDark,
  onToggle,
  className = '',
  style = {},
}: PullChainSwitchProps) {
  const [pullProgress, setPullProgress] = useState(0); // 0 to 1
  const [isRebounding, setIsRebounding] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);

  // Play subtle mechanical switch click
  const playClickSound = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // First click: pull ratchet
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(1350, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.022);
      gain1.gain.setValueAtTime(0.09, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.022);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.025);

      // Second micro click: spring release
      setTimeout(() => {
        try {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(800, ctx.currentTime);
          osc2.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.028);
          gain2.gain.setValueAtTime(0.07, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.028);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start();
          osc2.stop(ctx.currentTime + 0.03);
        } catch {}
      }, 100);
    } catch {}
  }, []);

  // Trigger pull and recoil
  const triggerPull = useCallback(() => {
    if (isRebounding) return;
    playClickSound();

    // Pull down
    setPullProgress(1);

    // Toggle at max pull
    setTimeout(() => {
      onToggle();
    }, 130);

    // Rebound and oscillate
    setTimeout(() => {
      setPullProgress(0);
      setIsRebounding(true);
      setTimeout(() => {
        setIsRebounding(false);
      }, 650);
    }, 190);
  }, [isRebounding, onToggle, playClickSound]);

  // Handle Drag Pulling
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isRebounding) return;
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || isRebounding) return;
    const deltaY = Math.max(0, e.clientY - startYRef.current);
    const maxPull = 32;
    const progress = Math.min(deltaY / maxPull, 1.25);
    setPullProgress(progress);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);

    if (pullProgress > 0.4) {
      playClickSound();
      onToggle();
      setPullProgress(0);
      setIsRebounding(true);
      setTimeout(() => setIsRebounding(false), 650);
    } else {
      setPullProgress(0);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerPull();
    }
  };

  // Vertical pull displacement (up to 24px)
  const pullY = pullProgress * 24;

  // Colors based on theme:
  // Dark Mode: Precision brushed titanium / stainless steel
  // Light Mode: Precision dark gunmetal / obsidian brass
  const metalColorPrimary = isDark ? '#E2E8F0' : '#1E293B';
  const metalColorSecondary = isDark ? '#94A3B8' : '#334155';
  const metalColorDark = isDark ? '#475569' : '#0F172A';
  const metalHighlight = isDark ? '#FFFFFF' : '#64748B';

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={triggerPull}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDraggingRef.current) {
          isDraggingRef.current = false;
          setPullProgress(0);
        }
      }}
      aria-label={isDark ? 'Pull cord to switch to Light Mode' : 'Pull cord to switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode (Pull cord)' : 'Switch to Dark Mode (Pull cord)'}
      className={`architectural-pull-cord ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: isDraggingRef.current ? 'grabbing' : 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'none',
        width: '32px',
        height: '130px',
        outline: 'none',
        ...style,
      }}
    >
      {/* Ceiling Escutcheon Mount Collar */}
      <svg
        width="20"
        height="8"
        viewBox="0 0 20 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', flexShrink: 0, zIndex: 3 }}
      >
        {/* Base flange */}
        <path
          d="M0 0 H20 V2 C20 3.5 17 5 14 5.5 V8 H6 V5.5 C3 5 0 3.5 0 2 V0 Z"
          fill={metalColorSecondary}
        />
        {/* Top edge highlight */}
        <line x1="1" y1="0.5" x2="19" y2="0.5" stroke={metalHighlight} strokeWidth="1" strokeOpacity="0.6" />
        {/* Central eyelet bushing */}
        <rect x="7" y="5" width="6" height="3" rx="1" fill={metalColorDark} />
      </svg>

      {/* Hanging Chain & Knurled Weight Assembly */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transformOrigin: 'top center',
          transform: isRebounding
            ? 'none'
            : pullProgress > 0
            ? `translateY(${pullY}px)`
            : undefined,
          transition: isDraggingRef.current
            ? 'none'
            : isRebounding
            ? 'none'
            : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.4, 1)',
          animation: isRebounding
            ? 'dampedPendulumRecoil 0.65s cubic-bezier(0.18, 0.89, 0.32, 1.15) forwards'
            : pullProgress > 0
            ? 'none'
            : 'slowRopeAmbientSway 5.2s ease-in-out infinite',
          zIndex: 2,
        }}
      >
        {/* Long Metal Ball Chain */}
        <svg
          width="10"
          height="76"
          viewBox="0 0 10 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', overflow: 'visible' }}
        >
          {/* Inner core wire */}
          <line
            x1="5"
            y1="0"
            x2="5"
            y2="76"
            stroke={metalColorDark}
            strokeWidth="1"
          />
          {/* 18 Individual Ball Beads */}
          {Array.from({ length: 18 }).map((_, i) => {
            const cy = 2 + i * 4.1;
            return (
              <g key={i}>
                <circle
                  cx="5"
                  cy={cy}
                  r="1.8"
                  fill={metalColorSecondary}
                  stroke={metalColorDark}
                  strokeWidth="0.4"
                />
                {/* Specular highlight dot */}
                <circle
                  cx="4.4"
                  cy={cy - 0.5}
                  r="0.5"
                  fill={metalHighlight}
                  opacity="0.8"
                />
              </g>
            );
          })}
        </svg>

        {/* Precision Turned Knurled Pendant Weight */}
        <svg
          width="14"
          height="38"
          viewBox="0 0 14 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block',
            marginTop: '-1px',
            transformOrigin: 'top center',
            filter: isDark
              ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.7))'
              : 'drop-shadow(0 4px 6px rgba(15, 23, 42, 0.22))',
            animation: pullProgress > 0 || isRebounding ? 'none' : 'slowWeightSecondarySway 5.2s ease-in-out infinite',
            transition: 'transform 0.15s ease',
          }}
        >
          <defs>
            {/* Cylindrical metal gradient */}
            <linearGradient id={`metalGrad_${isDark ? 'dark' : 'light'}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={metalColorDark} />
              <stop offset="35%" stopColor={metalHighlight} stopOpacity="0.9" />
              <stop offset="65%" stopColor={metalColorPrimary} />
              <stop offset="100%" stopColor={metalColorDark} />
            </linearGradient>
          </defs>

          {/* Top connection ring / eyelet */}
          <rect x="5" y="0" width="4" height="3" rx="1" fill={metalColorSecondary} stroke={metalColorDark} strokeWidth="0.5" />

          {/* Tapered top cap */}
          <path d="M4 3 H10 L11.5 6 H2.5 L4 3 Z" fill={`url(#metalGrad_${isDark ? 'dark' : 'light'})`} stroke={metalColorDark} strokeWidth="0.5" />

          {/* Main knurled barrel body */}
          <rect
            x="2"
            y="6"
            width="10"
            height="22"
            rx="1"
            fill={`url(#metalGrad_${isDark ? 'dark' : 'light'})`}
            stroke={metalColorDark}
            strokeWidth="0.6"
          />

          {/* Precision diamond knurl grooves */}
          {[9, 12, 15, 18, 21, 24].map((y) => (
            <line
              key={y}
              x1="2.5"
              y1={y}
              x2="11.5"
              y2={y}
              stroke={metalColorDark}
              strokeWidth="0.8"
              strokeOpacity="0.8"
            />
          ))}
          {/* Subtle knurl cross hatch lines */}
          <line x1="3" y1="8" x2="11" y2="16" stroke={metalHighlight} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="11" y1="8" x2="3" y2="16" stroke={metalHighlight} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="3" y1="16" x2="11" y2="24" stroke={metalHighlight} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="11" y1="16" x2="3" y2="24" stroke={metalHighlight} strokeWidth="0.5" strokeOpacity="0.3" />

          {/* Bottom chamfer collar */}
          <path d="M2.5 28 H11.5 L10 31 H4 L2.5 28 Z" fill={`url(#metalGrad_${isDark ? 'dark' : 'light'})`} stroke={metalColorDark} strokeWidth="0.5" />

          {/* Solid weighted teardrop ball at bottom */}
          <circle
            cx="7"
            cy="33.5"
            r="3.5"
            fill={`url(#metalGrad_${isDark ? 'dark' : 'light'})`}
            stroke={metalColorDark}
            strokeWidth="0.6"
          />
          <circle cx="5.8" cy="32.5" r="0.9" fill={metalHighlight} opacity="0.8" />
        </svg>
      </div>

      {/* Damped pendulum recoil and ambient slow sway keyframes */}
      <style>{`
        @keyframes slowRopeAmbientSway {
          0% {
            transform: rotate(-2.6deg);
          }
          50% {
            transform: rotate(2.6deg);
          }
          100% {
            transform: rotate(-2.6deg);
          }
        }
        @keyframes slowWeightSecondarySway {
          0% {
            transform: rotate(1.3deg);
          }
          50% {
            transform: rotate(-1.3deg);
          }
          100% {
            transform: rotate(1.3deg);
          }
        }
        @keyframes dampedPendulumRecoil {
          0% {
            transform: translateY(24px) rotate(0deg);
          }
          22% {
            transform: translateY(-6px) rotate(3.5deg);
          }
          45% {
            transform: translateY(3px) rotate(-2.5deg);
          }
          65% {
            transform: translateY(-1.5px) rotate(1.5deg);
          }
          82% {
            transform: translateY(0.5px) rotate(-0.6deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
