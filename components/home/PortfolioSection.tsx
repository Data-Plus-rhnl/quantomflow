'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import { PortfolioProject } from '@/lib/types';

interface PortfolioSectionProps {}

type CategoryFilter =
  | 'all'
  | 'restaurants'
  | 'clinics'
  | 'ecommerce'
  | 'community'
  | 'salons'
  | 'corporate'
  | 'childcare'
  | 'personal-brand';

const CATEGORIES: { id: CategoryFilter; label: string; icon: string }[] = [
  { id: 'all', label: 'All Work', icon: '◈' },
  { id: 'restaurants', label: 'Restaurants', icon: '◉' },
  { id: 'clinics', label: 'Clinics', icon: '◉' },
  { id: 'ecommerce', label: 'E-Commerce', icon: '◉' },
  { id: 'community', label: 'Community & Cause', icon: '◉' },
  { id: 'salons', label: 'Salons & Spas', icon: '◉' },
  { id: 'corporate', label: 'Corporate', icon: '◉' },
  { id: 'childcare', label: 'Education', icon: '◉' },
  { id: 'personal-brand', label: 'Personal Brand', icon: '◉' },
];

const CATEGORY_ACCENT: Record<string, string> = {
  restaurants: '#1D63FF',
  clinics: '#1D63FF',
  ecommerce: '#1D63FF',
  community: '#1D63FF',
  salons: '#1D63FF',
  corporate: '#1D63FF',
  childcare: '#1D63FF',
  'personal-brand': '#1D63FF',
  all: '#1D63FF',
};

function MetricBadge({ primary, label, accent }: { primary: string; label: string; accent?: string }) {
  const metricColor = accent || '#00F0FF';
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '14px',
        left: '14px',
        right: '14px',
        background: '#070B16',
        border: `1.5px solid ${metricColor}55`,
        borderRadius: '12px',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--qf-font-display)',
          fontWeight: 900,
          fontSize: '22px',
          color: metricColor,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          letterSpacing: '-0.02em',
        }}
      >
        {primary}
      </span>
      <span
        style={{
          fontFamily: 'var(--qf-font-mono)',
          fontSize: '11px',
          color: '#E2E8F0',
          lineHeight: 1.4,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function CategoryPill({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <span
      style={{
        fontFamily: 'var(--qf-font-mono)',
        fontSize: '10px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: isActive ? '#4FD1FF' : 'rgba(91,100,128,0.9)',
        background: isActive ? 'rgba(79,209,255,0.12)' : 'rgba(22,29,51,0.6)',
        border: `1px solid ${isActive ? 'rgba(79,209,255,0.35)' : 'rgba(35,43,71,0.8)'}`,
        padding: '3px 9px',
        borderRadius: '999px',
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: PortfolioProject;
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const accent = CATEGORY_ACCENT[project.category] ?? '#4FD1FF';

  return (
    <ScrollReveal delayMs={index * 60}>
      <article
        role="button"
        tabIndex={0}
        aria-label={`View case study: ${project.title}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
        style={{
          background: hovered
            ? '#0F1626'
            : '#090D18',
          border: `1.5px solid ${hovered ? accent : '#1E293B'}`,
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'all 0.25s ease',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 16px 36px rgba(0,0,0,0.7), 0 0 0 1px ${accent}44`
            : '0 4px 16px rgba(0,0,0,0.4)',
          outline: 'none',
        }}
      >
        {/* Image area */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/10',
            overflow: 'hidden',
            background: '#080D1A',
            flexShrink: 0,
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            style={{
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />

          {/* Overlay gradient on hover */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, transparent 40%, rgba(5,8,16,0.85) 100%)`,
              opacity: hovered ? 1 : 0.6,
              transition: 'opacity 0.25s ease',
            }}
          />

          {/* Category badge */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              background: '#070B16',
              border: `1.5px solid ${accent}88`,
              padding: '4px 11px',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: accent,
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                fontWeight: 700,
              }}
            >
              {project.categoryLabel}
            </span>
          </div>

          {/* View CTA on hover */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#070B16',
              border: `1.5px solid ${accent}`,
              borderRadius: '999px',
              padding: '4px 12px',
              fontFamily: 'var(--qf-font-mono)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: accent,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(-4px)',
              transition: 'all 0.25s ease',
              pointerEvents: 'none',
            }}
          >
            View Case Study &rarr;
          </div>

          <MetricBadge primary={project.metrics.primary} label={project.metrics.label} accent={accent} />
        </div>

        {/* Content */}
        <div
          style={{
            padding: '22px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          {/* Client + location */}
          <div
            style={{
              fontFamily: 'var(--qf-font-mono)',
              fontSize: '11px',
              color: 'rgba(91,100,128,0.9)',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{project.clientName}</span>
            <span style={{ color: 'rgba(91,100,128,0.4)' }}>&middot;</span>
            <span>{project.location}</span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--qf-font-display)',
              fontSize: '17px',
              fontWeight: 600,
              color: hovered ? '#E8ECF5' : '#C8D0E0',
              marginBottom: '10px',
              lineHeight: 1.3,
              transition: 'color 0.25s ease',
            }}
          >
            {project.title}
          </h3>

          {/* Summary */}
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(139,147,168,0.85)',
              lineHeight: 1.65,
              flexGrow: 1,
              marginBottom: '18px',
            }}
          >
            {project.summary}
          </p>

          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '18px',
            }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--qf-font-mono)',
                  fontSize: '10px',
                  color: 'rgba(91,100,128,0.9)',
                  background: 'rgba(10,14,26,0.8)',
                  border: '1px solid rgba(35,43,71,0.9)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer row */}
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(35,43,71,0.6)',
              paddingTop: '14px',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11px',
                color: 'rgba(139,147,168,0.85)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: accent,
                  boxShadow: `0 0 6px ${accent}`,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {project.categoryLabel}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11.5px',
                fontWeight: 700,
                color: hovered ? '#040711' : accent,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                padding: '5px 12px',
                borderRadius: '999px',
                background: hovered ? accent : `${accent}18`,
                border: `1.5px solid ${accent}`,
                transition: 'all 0.2s ease',
              }}
            >
              <span>Case Study</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ProjectPresentationDeck({
  projects,
  currentIndex,
  onPrev,
  onNext,
  onSelectIndex,
  onOpenModal,
}: {
  projects: PortfolioProject[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (idx: number) => void;
  onOpenModal: (project: PortfolioProject) => void;
}) {
  const project = projects[currentIndex] ?? projects[0];
  const accent = CATEGORY_ACCENT[project?.category] ?? '#4FD1FF';
  const touchStartX = useRef<number | null>(null);

  if (!project) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) {
      onPrev();
    } else if (deltaX < -45) {
      onNext();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="presentation-deck"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Top Deck Chrome ── */}
      <div className="deck-chrome-bar">
        <div className="deck-chrome-left">
          <div className="deck-slide-counter">
            <span className="deck-num-active" style={{ color: accent, fontSize: '15px', fontWeight: 900 }}>{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="deck-num-sep">/</span>
            <span className="deck-num-total">{String(projects.length).padStart(2, '0')}</span>
          </div>

          <div className="deck-sep-line" />

          <span
            className="deck-category-badge"
            style={{
              color: '#FFFFFF',
              background: `${accent}20`,
              border: `1.5px solid ${accent}`,
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: accent,
                display: 'inline-block',
              }}
            />
            {project.categoryLabel}
          </span>
        </div>

        {/* Previous / Next Controls */}
        <div className="deck-nav-controls">
          <span className="deck-nav-hint">Use &larr; / &rarr; keys</span>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous project"
            className="deck-nav-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next project"
            className="deck-nav-btn deck-nav-btn-next"
            style={{
              background: '#1D63FF',
              borderColor: '#1D63FF',
              color: '#FFFFFF',
              fontWeight: 700,
              boxShadow: 'none',
            }}
          >
            <span>Next</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Slide Canvas ── */}
      <div className="deck-slide-grid" key={project.id}>
        {/* Left: Device / Mockup Showcase */}
        <div
          className="deck-mockup-wrapper"
          onClick={() => onOpenModal(project)}
          role="button"
          tabIndex={0}
          aria-label={`Inspect case study: ${project.title}`}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenModal(project)}
        >
          <div className="deck-browser-frame" style={{ borderColor: `${accent}44` }}>
            <div className="deck-browser-header">
              <div className="deck-window-dots">
                <span style={{ background: '#FF3B30' }} />
                <span style={{ background: '#FFCC00' }} />
                <span style={{ background: '#34C759' }} />
              </div>
              <div className="deck-window-url">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.clientName.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae`}</span>
              </div>
              <span className="deck-inspect-pill" style={{ color: accent, fontWeight: 700 }}>
                Inspect Project &rarr;
              </span>
            </div>

            <div className="deck-image-viewport">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 960px) 100vw, 55vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />

              {/* Floating Outcome Metric */}
              <div className="deck-floating-metric" style={{ border: `1.5px solid ${accent}77` }}>
                <div className="metric-headline" style={{ color: accent, fontSize: '26px', fontWeight: 900 }}>
                  {project.metrics.primary}
                </div>
                <div className="metric-caption">
                  {project.metrics.label}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Executive Presentation Brief */}
        <div className="deck-brief-col">
          <div className="deck-client-headline">
            <span className="deck-client-name">{project.clientName}</span>
            <span className="deck-sep-dot">&middot;</span>
            <span className="deck-client-location">{project.location}</span>
          </div>

          <h3 className="deck-hero-title">{project.title}</h3>

          <p className="deck-summary-text">{project.summary}</p>

          {/* Key Deliverables Checklist */}
          <div className="deck-systems-box" style={{ borderLeft: `3px solid ${accent}` }}>
            <div className="deck-systems-title" style={{ color: accent, fontWeight: 700 }}>Core Systems Engineered:</div>
            <ul className="deck-systems-list">
              {project.deliverables.slice(0, 3).map((item, idx) => (
                <li key={idx}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="deck-tech-row">
            {project.techStack.map((tech) => (
              <span key={tech} className="deck-tech-chip">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="deck-action-row">
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="deck-primary-btn"
              style={{
                background: '#1D63FF',
                borderColor: '#1D63FF',
                color: '#FFFFFF',
                fontWeight: 700,
                boxShadow: 'none',
              }}
            >
              <span>Explore Complete Case Study</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="deck-secondary-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              >
                <span>Live Site ↗</span>
              </a>
            )}

            <Link href="/request-quote" className="deck-secondary-link">
              Build Similar System &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Deck Timeline Navigation ── */}
      <div className="deck-timeline-bar">
        <div className="deck-timeline-track">
          {projects.map((p, idx) => {
            const isCurrent = idx === currentIndex;
            const itemAccent = CATEGORY_ACCENT[p.category] ?? '#00F0FF';
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`deck-timeline-item ${isCurrent ? 'is-active' : ''}`}
                style={isCurrent ? {
                  borderColor: itemAccent,
                  background: `${itemAccent}20`,
                  color: '#FFFFFF',
                } : undefined}
              >
                <span className="deck-item-num" style={{ color: isCurrent ? itemAccent : '#64748B', fontWeight: 800 }}>
                  0{idx + 1}
                </span>
                <span className="deck-item-client">
                  {p.clientName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const accent = CATEGORY_ACCENT[project.category] ?? '#4FD1FF';
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 32px)',
        background: 'rgba(4,6,14,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'linear-gradient(160deg, #0F1528 0%, #0A0E1A 100%)',
          border: `1px solid ${accent}33`,
          borderRadius: '24px',
          boxShadow: `0 40px 80px -16px rgba(0,0,0,0.9), 0 0 0 1px ${accent}22, 0 0 80px -20px ${accent}20`,
          scrollbarWidth: 'thin',
          scrollbarColor: `${accent}33 transparent`,
        }}
      >
        {/* Gradient header accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '280px',
            background: `radial-gradient(ellipse at 50% -20%, ${accent}18 0%, transparent 70%)`,
            borderRadius: '24px 24px 0 0',
            pointerEvents: 'none',
          }}
        />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close case study"
          onClick={onClose}
          style={{
            position: 'sticky',
            top: '20px',
            float: 'right',
            marginRight: '20px',
            marginTop: '20px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(22,29,51,0.9)',
            border: '1px solid rgba(35,43,71,0.9)',
            color: 'rgba(139,147,168,0.9)',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(79,209,255,0.15)';
            e.currentTarget.style.borderColor = `${accent}66`;
            e.currentTarget.style.color = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(22,29,51,0.9)';
            e.currentTarget.style.borderColor = 'rgba(35,43,71,0.9)';
            e.currentTarget.style.color = 'rgba(139,147,168,0.9)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div style={{ padding: 'clamp(24px, 4vw, 44px)', paddingTop: '28px', clear: 'both' }}>
          {/* Header */}
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '10.5px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: accent,
                background: `${accent}14`,
                border: `1px solid ${accent}33`,
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: accent,
                  boxShadow: `0 0 6px ${accent}`,
                  display: 'inline-block',
                }}
              />
              {project.categoryLabel} &middot; Case Study
            </div>

            <h2
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: 'clamp(20px,3vw,28px)',
                fontWeight: 700,
                color: '#E8ECF5',
                lineHeight: 1.2,
                marginBottom: '10px',
              }}
            >
              {project.title}
            </h2>

            <div
              style={{
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '12.5px',
                color: 'rgba(91,100,128,0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: 'rgba(139,147,168,0.8)' }}>{project.clientName}</span>
              <span style={{ color: 'rgba(35,43,71,1)' }}>&middot;</span>
              <span>{project.location}</span>
            </div>
          </div>

          {/* Hero image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '28px',
              border: `1px solid ${accent}22`,
              boxShadow: `0 0 0 1px rgba(35,43,71,0.5), 0 20px 40px -12px rgba(0,0,0,0.6)`,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 860px) 100vw, 820px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Key result banner */}
          <div
            style={{
              background: `linear-gradient(135deg, ${accent}0F 0%, ${accent}06 100%)`,
              border: `1px solid ${accent}33`,
              borderRadius: '14px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '28px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: 'clamp(28px,4vw,40px)',
                fontWeight: 800,
                color: accent,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {project.metrics.primary}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--qf-font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(91,100,128,0.9)',
                  marginBottom: '4px',
                }}
              >
                Key Result
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(200,208,224,0.9)', fontWeight: 500 }}>
                {project.metrics.label}
              </div>
            </div>
          </div>

          {/* Challenge / Solution */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            {[
              { heading: 'The Challenge', color: '#94A3B8', text: project.challenge },
              { heading: 'Our Solution', color: accent, text: project.solution },
            ].map(({ heading, color, text }) => (
              <div
                key={heading}
                style={{
                  background: 'rgba(10,14,26,0.7)',
                  border: '1px solid rgba(35,43,71,0.8)',
                  borderRadius: '14px',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      width: '3px',
                      height: '16px',
                      background: color,
                      borderRadius: '2px',
                      display: 'inline-block',
                      boxShadow: `0 0 8px ${color}66`,
                    }}
                  />
                  <h4
                    style={{
                      fontFamily: 'var(--qf-font-display)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color,
                    }}
                  >
                    {heading}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(139,147,168,0.9)',
                    lineHeight: 1.65,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div style={{ marginBottom: '28px' }}>
            <h4
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: '15px',
                fontWeight: 600,
                color: '#C8D0E0',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '3px',
                  height: '16px',
                  background: accent,
                  borderRadius: '2px',
                  display: 'inline-block',
                  boxShadow: `0 0 8px ${accent}66`,
                }}
              />
              Key Deliverables
            </h4>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '8px',
              }}
            >
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    background: 'rgba(10,14,26,0.5)',
                    border: '1px solid rgba(35,43,71,0.6)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontSize: '12.5px',
                    color: 'rgba(139,147,168,0.9)',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: accent,
                      fontWeight: 700,
                      fontSize: '13px',
                      marginTop: '1px',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '28px',
            }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--qf-font-mono)',
                  fontSize: '11px',
                  color: accent,
                  background: `${accent}0F`,
                  border: `1px solid ${accent}33`,
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Modal CTA */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              borderTop: '1px solid rgba(26,33,56,0.9)',
              paddingTop: '20px',
            }}
          >
            <p style={{ fontSize: '13px', color: 'rgba(91,100,128,0.9)' }}>
              Want a similar result for your business?
            </p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    borderColor: `${accent}66`,
                    color: '#FFFFFF',
                  }}
                >
                  <span>Visit Live Platform</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={onClose}
              >
                Close
              </button>
              <Link
                href="/request-quote"
                className="btn btn-primary btn-sm"
                onClick={() => onClose()}
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [viewMode, setViewMode] = useState<'presentation' | 'grid'>('presentation');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const totalProjects = PORTFOLIO_PROJECTS.length;

  const handleCategoryChange = (cat: CategoryFilter) => {
    setActiveCategory(cat);
    setCurrentSlide(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const safeSlideIndex = Math.min(currentSlide, Math.max(0, filteredProjects.length - 1));

  // Keyboard navigation for presentation deck
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (selectedProject !== null) return;
      if (viewMode !== 'presentation') return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, viewMode, filteredProjects.length]);

  return (
    <>
      <section className="section" id="portfolio">
        <div className="wrap">

          {/* Section header */}
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '36px' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Work</div>
              <h2 className="h2">
                Results-driven websites.
                <br />
                <span style={{ color: '#FFFFFF', fontWeight: 800 }}>
                  Real client growth.
                </span>
              </h2>
              <p className="lede" style={{ marginTop: '16px', marginInline: 'auto' }}>
                Every project is an engineered business asset &mdash; delivering measurable revenue and client trust.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11.5px',
                color: '#34D399',
                background: '#0D1322',
                border: '1px solid #1E293B',
                padding: '6px 14px',
                borderRadius: '999px',
                marginTop: '24px',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#34D399', display: 'inline-block',
                }} />
                {totalProjects} live client platforms &nbsp;&middot;&nbsp; Verified UAE Results
              </div>
            </div>
          </ScrollReveal>

          {/* ── Filter Bar & View Mode Switcher ── */}
          <ScrollReveal>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}>
              {/* Category filter tabs */}
              <div style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
                scrollbarWidth: 'none',
                maxWidth: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  padding: '6px',
                  background: '#090D18',
                  border: '1px solid #1E293B',
                  borderRadius: '14px',
                  width: 'fit-content',
                }}>
                  {CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const accent = CATEGORY_ACCENT[cat.id] ?? '#00F0FF';
                    const count = cat.id === 'all'
                      ? PORTFOLIO_PROJECTS.length
                      : PORTFOLIO_PROJECTS.filter((p) => p.category === cat.id).length;
                    if (count === 0) return null;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategoryChange(cat.id)}
                        style={{
                          fontFamily: 'var(--qf-font-mono)',
                          fontSize: '12px',
                          fontWeight: isActive ? 700 : 500,
                          padding: '7px 14px',
                          borderRadius: '99px',
                          border: isActive ? `1.5px solid ${accent}` : '1px solid #1E293B',
                          background: isActive ? `${accent}20` : 'transparent',
                          color: isActive ? '#FFFFFF' : '#94A3B8',
                          cursor: 'pointer',
                          transition: 'all 0.18s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = '#FFFFFF';
                            e.currentTarget.style.borderColor = '#475569';
                            e.currentTarget.style.background = '#111827';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = '#94A3B8';
                            e.currentTarget.style.borderColor = '#1E293B';
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        {cat.label}
                        <span style={{
                          background: isActive ? accent : '#131C30',
                          border: isActive ? 'none' : '1px solid #1E293B',
                          color: isActive ? '#040711' : '#94A3B8',
                          padding: '1px 7px',
                          borderRadius: '999px',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          lineHeight: '16px',
                        }}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* View mode toggle */}
              <div style={{
                display: 'inline-flex',
                gap: '4px',
                padding: '4px',
                background: '#090D18',
                border: '1px solid #1E293B',
                borderRadius: '10px',
                flexShrink: 0,
              }}>
                <button
                  type="button"
                  onClick={() => setViewMode('presentation')}
                  aria-label="Presentation slide view"
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '11.5px',
                    fontWeight: viewMode === 'presentation' ? 800 : 500,
                    padding: '6px 13px',
                    borderRadius: '7px',
                    border: 'none',
                    background: viewMode === 'presentation' ? '#1D63FF' : 'transparent',
                    color: viewMode === 'presentation' ? '#FFFFFF' : '#94A3B8',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Presentation</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid card view"
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '11.5px',
                    fontWeight: viewMode === 'grid' ? 800 : 500,
                    padding: '6px 13px',
                    borderRadius: '7px',
                    border: 'none',
                    background: viewMode === 'grid' ? '#1D63FF' : 'transparent',
                    color: viewMode === 'grid' ? '#FFFFFF' : '#94A3B8',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>Grid</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Main Display: Presentation Deck or Grid ── */}
          {viewMode === 'presentation' ? (
            <ProjectPresentationDeck
              projects={filteredProjects}
              currentIndex={safeSlideIndex}
              onPrev={handlePrevSlide}
              onNext={handleNextSlide}
              onSelectIndex={(idx) => setCurrentSlide(idx)}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ) : (
            <div className="portfolio-grid">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}

          {/* ── Bottom CTA ── */}
          <ScrollReveal>
            <div style={{
              marginTop: '64px',
              padding: 'clamp(28px, 4vw, 40px) clamp(24px, 4vw, 40px)',
              background: 'linear-gradient(135deg, rgba(16,22,43,0.9) 0%, rgba(10,14,26,0.7) 100%)',
              border: '1px solid rgba(79,209,255,0.15)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: 'clamp(17px, 2.2vw, 22px)',
                  fontWeight: 600,
                  color: '#E8ECF5',
                  marginBottom: '6px',
                }}>
                  Ready to be our next success story?
                </div>
                <p style={{ fontSize: '13.5px', color: 'rgba(139,147,168,0.8)' }}>
                  Tell us what you want to build &mdash; we reply within one business day.
                </p>
              </div>
              <Link href="/request-quote" className="btn btn-primary" style={{ flexShrink: 0 }}>
                Start a Project &rarr;
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="section-divider" aria-hidden="true" />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1100px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr; }
        }

        /* ── Presentation Deck High Contrast Styling (Zero Glow) ── */
        .presentation-deck {
          background: #080C16;
          border: 1px solid #1E293B;
          border-radius: 20px;
          box-shadow: 0 16px 36px rgba(0,0,0,0.6);
          overflow: hidden;
          position: relative;
        }

        .deck-chrome-bar {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          padding: 16px 28px;
          border-bottom: 1px solid #1E293B;
          background: #0B101E;
          gap: 16px;
        }

        .deck-chrome-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .deck-slide-counter {
          font-family: var(--qf-font-mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
        }
        .deck-num-active {
          color: #FFFFFF;
          font-weight: 800;
        }
        .deck-num-sep {
          color: #475569;
          margin: 0 4px;
        }
        .deck-num-total {
          color: #94A3B8;
        }

        .deck-sep-line {
          width: 1px;
          height: 16px;
          background: #1E293B;
        }

        .deck-category-badge {
          font-family: var(--qf-font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #111827;
          border: 1px solid #334155;
          color: #FFFFFF;
          font-weight: 500;
        }

        .deck-nav-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .deck-nav-hint {
          font-family: var(--qf-font-mono);
          font-size: 11px;
          color: #94A3B8;
          margin-right: 8px;
        }

        .deck-nav-btn {
          font-family: var(--qf-font-mono);
          font-size: 12px;
          font-weight: 600;
          color: #FFFFFF;
          background: #0F172A;
          border: 1px solid #334155;
          border-radius: 8px;
          padding: 7px 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .deck-nav-btn:hover {
          background: #1E293B;
          border-color: #64748B;
          color: #FFFFFF;
        }

        .deck-nav-btn-next {
          background: #FFFFFF;
          border: 1px solid #FFFFFF;
          color: #080C16;
          font-weight: 700;
        }
        .deck-nav-btn-next:hover {
          background: #E2E8F0;
          border-color: #E2E8F0;
          color: #000000;
        }

        /* ── Slide Canvas Grid ── */
        .deck-slide-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
          padding: 32px 32px 28px;
          align-items: center;
          animation: fadeInSlide 0.25s ease-out;
        }

        .deck-mockup-wrapper {
          cursor: pointer;
          border-radius: 14px;
          transition: transform 0.25s ease;
        }
        .deck-mockup-wrapper:hover {
          transform: translateY(-2px);
        }

        .deck-browser-frame {
          background: #080C16;
          border: 1px solid #1E293B;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        }

        .deck-browser-header {
          background: #0D1322;
          border-bottom: 1px solid #1E293B;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 12px;
        }

        .deck-window-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .deck-window-dots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }

        .deck-window-url {
          font-family: var(--qf-font-mono);
          font-size: 11px;
          color: #94A3B8;
          background: #080C16;
          border: 1px solid #1E293B;
          border-radius: 6px;
          padding: 3px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          max-width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .deck-inspect-pill {
          font-family: var(--qf-font-mono);
          font-size: 10.5px;
          color: #94A3B8;
          font-weight: 500;
          white-space: nowrap;
        }

        .deck-image-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #060912;
        }

        .deck-floating-metric {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: #090D18;
          border: 1px solid #2B3854;
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .metric-headline {
          font-family: var(--qf-font-display);
          font-weight: 800;
          font-size: 24px;
          line-height: 1;
          color: #FFFFFF;
          white-space: nowrap;
        }

        .metric-caption {
          font-family: var(--qf-font-mono);
          font-size: 11.5px;
          color: #CBD5E1;
          line-height: 1.35;
          font-weight: 500;
        }

        /* Brief Column */
        .deck-brief-col {
          display: flex;
          flex-direction: column;
        }

        .deck-client-headline {
          font-family: var(--qf-font-mono);
          font-size: 12px;
          color: #94A3B8;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .deck-client-name {
          color: #FFFFFF;
          font-weight: 600;
        }
        .deck-sep-dot {
          color: #475569;
        }

        .deck-hero-title {
          font-family: var(--qf-font-display);
          font-size: clamp(22px, 2.6vw, 28px);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          margin-bottom: 14px;
        }

        .deck-summary-text {
          font-size: 14px;
          color: #CBD5E1;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .deck-systems-box {
          background: #0D1322;
          border: 1px solid #1E293B;
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 20px;
        }

        .deck-systems-title {
          font-family: var(--qf-font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94A3B8;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .deck-systems-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .deck-systems-list li {
          font-size: 13px;
          color: #F1F5F9;
          font-weight: 500;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .deck-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }
        .deck-tech-chip {
          font-family: var(--qf-font-mono);
          font-size: 11px;
          color: #CBD5E1;
          background: #0D1322;
          border: 1px solid #1E293B;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 500;
        }

        .deck-action-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .deck-primary-btn {
          font-family: var(--qf-font-mono);
          font-size: 13px;
          font-weight: 700;
          border-radius: 999px;
          padding: 10px 22px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          background: #FFFFFF;
          border: 1px solid #FFFFFF;
          color: #080C16;
          transition: all 0.2s ease;
        }
        .deck-primary-btn:hover {
          background: #E2E8F0;
          border-color: #E2E8F0;
          transform: translateY(-1px);
        }

        .deck-secondary-link {
          font-family: var(--qf-font-mono);
          font-size: 12.5px;
          font-weight: 500;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .deck-secondary-link:hover {
          color: #FFFFFF;
        }

        /* ── Bottom Deck Timeline Navigation ── */
        .deck-timeline-bar {
          border-top: 1px solid #1E293B;
          background: #080C16;
          padding: 14px 24px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .deck-timeline-track {
          display: flex;
          gap: 8px;
          min-width: 100%;
          width: fit-content;
        }

        .deck-timeline-item {
          font-family: var(--qf-font-mono);
          font-size: 11.5px;
          border: 1px solid #1E293B;
          border-radius: 8px;
          padding: 7px 14px;
          background: #0D1322;
          color: #94A3B8;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .deck-timeline-item:hover {
          background: #162036;
          border-color: #334155;
          color: #FFFFFF;
        }
        .deck-timeline-item.is-active {
          border-color: #FFFFFF;
          background: #1E293B;
          color: #FFFFFF;
        }

        .deck-item-num {
          font-weight: 700;
          font-size: 10.5px;
          color: #38BDF8;
        }
        .deck-item-client {
          font-weight: 600;
        }

        /* Mobile Breakpoints */
        @media (max-width: 960px) {
          .deck-slide-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 20px 18px 22px;
          }
          .deck-chrome-bar {
            padding: 14px 18px;
          }
          .deck-nav-hint {
            display: none;
          }
          .deck-timeline-bar {
            padding: 10px 16px;
          }
        }

        @media (max-width: 600px) {
          .deck-chrome-left .deck-sep-line,
          .deck-chrome-left .deck-category-badge {
            display: none;
          }
          .deck-nav-btn span {
            display: none;
          }
          .deck-nav-btn {
            padding: 7px 10px;
          }
        }

        /* Hide scrollbars */
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
