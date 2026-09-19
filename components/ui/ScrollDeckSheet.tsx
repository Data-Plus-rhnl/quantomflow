'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/components/theme/ThemeContext';

export type DeckTone = 'auto' | 'light' | 'royal-blue' | 'dark-navy';

interface ScrollDeckSheetProps {
  id?: string;
  children: React.ReactNode;
  tone?: DeckTone;
  zIndex?: number;
  hasRoundedTop?: boolean;
  recedeOnScroll?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ScrollDeckSheet:
 * Full-page card-deck stacked sheet inspired by socia.ph.
 * Features:
 * - Rounded top corners (clamp(24px, 3.5vw, 44px))
 * - Elevation top shadow that stacks over previous sections
 * - Dynamic color tones (light, vibrant royal blue, deep obsidian navy)
 * - Optional subtle receding scale & blur when subsequent sheets scroll over
 */
export default function ScrollDeckSheet({
  id,
  children,
  tone = 'auto',
  zIndex = 1,
  hasRoundedTop = true,
  recedeOnScroll = false,
  className = '',
  style = {},
}: ScrollDeckSheetProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sheetRef = useRef<HTMLDivElement>(null);
  const [recedeScale, setRecedeScale] = useState(1);
  const [recedeBlur, setRecedeBlur] = useState(0);

  useEffect(() => {
    if (!recedeOnScroll) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sheetRef.current) return;
          const rect = sheetRef.current.getBoundingClientRect();
          // When bottom of sheet starts scrolling out of view
          if (rect.top < 0 && rect.bottom > 0) {
            const progress = Math.min(Math.abs(rect.top) / (window.innerHeight * 0.8), 1);
            setRecedeScale(1 - progress * 0.05); // scales down to 0.95
            setRecedeBlur(progress * 6); // blurs up to 6px
          } else if (rect.top >= 0) {
            setRecedeScale(1);
            setRecedeBlur(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [recedeOnScroll]);

  // Determine background color based on tone and theme
  let background = 'transparent';
  let textColor = 'inherit';

  switch (tone) {
    case 'royal-blue':
      background = '#1D63FF';
      textColor = '#FFFFFF';
      break;
    case 'dark-navy':
      background = '#070B16';
      textColor = '#FFFFFF';
      break;
    case 'light':
      background = '#FFFFFF';
      textColor = '#070B16';
      break;
    case 'auto':
    default:
      background = isDark ? '#070B16' : '#FFFFFF';
      textColor = isDark ? '#FFFFFF' : '#070B16';
      break;
  }

  // Elevation shadow for stacking edge
  const shadow = hasRoundedTop
    ? isDark
      ? '0 -24px 60px rgba(0, 0, 0, 0.7), 0 -2px 10px rgba(255, 255, 255, 0.04)'
      : '0 -20px 48px rgba(15, 23, 42, 0.12), 0 -2px 8px rgba(15, 23, 42, 0.04)'
    : 'none';

  return (
    <div
      id={id}
      ref={sheetRef}
      className={`scroll-deck-sheet tone-${tone} ${className}`}
      style={{
        position: 'relative',
        zIndex,
        background,
        color: textColor,
        borderTopLeftRadius: hasRoundedTop ? 'clamp(24px, 3.5vw, 44px)' : '0',
        borderTopRightRadius: hasRoundedTop ? 'clamp(24px, 3.5vw, 44px)' : '0',
        boxShadow: shadow,
        marginTop: hasRoundedTop ? '-32px' : '0',
        transform: recedeOnScroll
          ? `scale(${recedeScale})`
          : undefined,
        filter: recedeOnScroll && recedeBlur > 0.5
          ? `blur(${recedeBlur}px)`
          : undefined,
        transformOrigin: 'top center',
        transition: 'background 0.3s ease, border-radius 0.2s ease',
        willChange: recedeOnScroll ? 'transform, filter' : 'auto',
        overflow: 'visible',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
