'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/components/theme/ThemeContext';

interface DeckCardProps {
  id?: string;
  children: React.ReactNode;
  zIndex: number;
  isAlt?: boolean;
  hasRoundedTop?: boolean;
  hasShadow?: boolean;
  pinAtTop?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function DeckCard({
  id,
  children,
  zIndex,
  isAlt = false,
  hasRoundedTop = true,
  hasShadow = true,
  pinAtTop = false,
  className = '',
  style = {},
}: DeckCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const cardRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  // Calculate sticky offset so tall cards scroll completely before pinning,
  // and short footer card docks at the bottom of the viewport
  useEffect(() => {
    const updateSticky = () => {
      if (!cardRef.current) return;
      const elHeight = cardRef.current.offsetHeight;
      const vh = window.innerHeight;

      if (id === 'footer') {
        // Footer maintains natural height and docks at the bottom of viewport
        setStickyTop(Math.max(0, vh - elHeight));
      } else if (pinAtTop || elHeight <= vh) {
        setStickyTop(0);
      } else {
        // Sticky at bottom of screen once fully traversed
        setStickyTop(vh - elHeight);
      }
    };

    updateSticky();
    window.addEventListener('resize', updateSticky, { passive: true });
    const t = setTimeout(updateSticky, 500);

    return () => {
      window.removeEventListener('resize', updateSticky);
      clearTimeout(t);
    };
  }, [pinAtTop, id]);

  // Receding card-deck physics: as the next card slides over, this card scales down & blurs slightly
  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          ticking = false;
          const el = cardRef.current;
          if (!el) return;

          const nextEl = el.nextElementSibling as HTMLElement | null;
          if (!nextEl) {
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
            el.style.filter = 'none';
            return;
          }

          const nextRect = nextEl.getBoundingClientRect();
          const vh = window.innerHeight;

          // nextRect.top enters at vh and moves up to 0
          if (nextRect.top < vh && nextRect.top >= 0) {
            const progress = (vh - nextRect.top) / vh;
            const clamped = Math.max(0, Math.min(1, progress));
            const scale = 1 - clamped * 0.06; // scales from 1.0 down to 0.94
            const opacity = 1 - clamped * 0.14; // opacity from 1.0 down to 0.86
            const blur = clamped * 3; // blur up to 3px

            el.style.transform = `scale(${scale.toFixed(4)})`;
            el.style.opacity = `${opacity.toFixed(3)}`;
            el.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : 'none';
          } else if (nextRect.top < 0) {
            el.style.transform = 'scale(0.94)';
            el.style.opacity = '0.86';
            el.style.filter = 'blur(3px)';
          } else {
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
            el.style.filter = 'none';
          }
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Section entrance: trigger inner component transitions as card slides into active view
  useEffect(() => {
    let ticking = false;

    const checkActive = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
          const el = cardRef.current;
          if (!el) return;

          // Hero card is active immediately
          if (zIndex <= 10) {
            if (el.getAttribute('data-card-active') !== 'true') {
              el.setAttribute('data-card-active', 'true');
              el.querySelectorAll('.reveal').forEach((r) => r.classList.add('is-visible'));
            }
            return;
          }

          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;

          // When top of card enters the upper 80% of viewport, it becomes active
          if (rect.top <= vh * 0.80 && rect.bottom >= vh * 0.08) {
            if (el.getAttribute('data-card-active') !== 'true') {
              el.setAttribute('data-card-active', 'true');
              el.querySelectorAll('.reveal').forEach((r) => {
                r.classList.add('is-visible');
              });
            }
          } else if (rect.top > vh * 1.08) {
            // Reset when completely scrolled below viewport so it re-animates smoothly
            if (el.hasAttribute('data-card-active')) {
              el.removeAttribute('data-card-active');
              el.querySelectorAll('.reveal').forEach((r) => {
                r.classList.remove('is-visible');
              });
            }
          }
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', checkActive, { passive: true });
    checkActive();

    return () => {
      window.removeEventListener('scroll', checkActive);
    };
  }, [zIndex]);

  // Dedicated scroll color-transition logic for #why-us (White -> Royal Blue)
  useEffect(() => {
    if (id !== 'why-us') return;

    let rafId: number | null = null;
    let ticking = false;

    const handleWhyScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          ticking = false;
          const el = cardRef.current;
          if (!el) return;

          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const nextEl = el.nextElementSibling as HTMLElement | null;
          const nextRect = nextEl ? nextEl.getBoundingClientRect() : null;

          let progress = 0;

          // When top of card is at 75% of viewport, it starts at 0 (pure white)
          // As it slides up to top: 0, progress smoothly goes to 1.0
          if (rect.top > vh * 0.75) {
            progress = 0;
          } else if (rect.top > vh * 0.05) {
            const slideRatio = (vh * 0.75 - rect.top) / (vh * 0.70);
            progress = Math.max(0, Math.min(1, slideRatio));
          } else {
            // Once docked at top (rect.top <= vh * 0.05): full rich royal blue
            progress = 1;
          }

          progress = Math.max(0, Math.min(1, progress));

          // Set CSS custom properties on the card
          el.style.setProperty('--why-progress', progress.toFixed(3));
          el.style.setProperty('--why-spread', `${(progress * 160).toFixed(1)}%`);

          // Toggle color shifted state for typography and frosted cards
          if (progress >= 0.25) {
            el.setAttribute('data-color-shifted', 'true');
          } else {
            el.removeAttribute('data-color-shifted');
          }
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleWhyScroll, { passive: true });
    handleWhyScroll();

    return () => {
      window.removeEventListener('scroll', handleWhyScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [id]);

  const isFooter = id === 'footer';
  // User requirement: Remove curves from all card decks except the footer
  const shouldCurve = isFooter;

  const shadowStyle = hasShadow
    ? isDark
      ? '0 -24px 60px rgba(0, 0, 0, 0.75), 0 -1px 0 rgba(255, 255, 255, 0.08)'
      : '0 -20px 50px rgba(15, 23, 42, 0.12), 0 -1px 2px rgba(15, 23, 42, 0.04)'
    : 'none';

  return (
    <div
      id={id}
      ref={cardRef}
      className={`deck-section-sheet ${className}`}
      data-card-active={zIndex <= 10 ? 'true' : undefined}
      data-footer={isFooter ? 'true' : undefined}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        zIndex,
        minHeight: isFooter ? 'auto' : '100vh',
        boxSizing: 'border-box',
        display: isFooter ? 'block' : 'flex',
        flexDirection: isFooter ? undefined : 'column',
        justifyContent: isFooter ? undefined : 'center',
        backgroundColor: (id === 'why-us' || id === 'business-types') ? undefined : isAlt ? 'var(--qf-bg-alt)' : 'var(--qf-bg)',
        borderTopLeftRadius: shouldCurve ? 'clamp(28px, 4vw, 46px)' : 0,
        borderTopRightRadius: shouldCurve ? 'clamp(28px, 4vw, 46px)' : 0,
        boxShadow: shadowStyle,
        transformOrigin: '50% 12%',
        transition: 'background-color 0.3s ease, border-radius 0.2s ease',
        willChange: 'transform, opacity, filter',
        overflow: 'visible',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
