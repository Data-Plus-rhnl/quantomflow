'use client';

import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delayMs?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.08,
  delayMs = 0,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If inside an already active card deck, reveal immediately
    const parentCard = el.closest('.deck-section-sheet') as HTMLElement | null;
    if (parentCard && parentCard.getAttribute('data-card-active') === 'true') {
      if (delayMs > 0) {
        setTimeout(() => el.classList.add('is-visible'), delayMs);
      } else {
        el.classList.add('is-visible');
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => {
                el.classList.add('is-visible');
              }, delayMs);
            } else {
              el.classList.add('is-visible');
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        ...style,
        ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {}),
      }}
    >
      {children}
    </div>
  );
}
