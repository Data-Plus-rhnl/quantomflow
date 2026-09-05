'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import { PortfolioProject } from '@/lib/types';

interface PortfolioSectionProps {}

type CategoryFilter =
  | 'all'
  | 'restaurants'
  | 'clinics'
  | 'ecommerce'
  | 'salons'
  | 'corporate'
  | 'childcare'
  | 'personal-brand';

const CATEGORIES: { id: CategoryFilter; label: string; icon: string }[] = [
  { id: 'all', label: 'All Work', icon: 'â—ˆ' },
  { id: 'restaurants', label: 'Restaurants', icon: 'â—‰' },
  { id: 'clinics', label: 'Clinics', icon: 'â—‰' },
  { id: 'ecommerce', label: 'E-Commerce', icon: 'â—‰' },
  { id: 'salons', label: 'Salons & Spas', icon: 'â—‰' },
  { id: 'corporate', label: 'Corporate', icon: 'â—‰' },
  { id: 'childcare', label: 'Education', icon: 'â—‰' },
  { id: 'personal-brand', label: 'Personal Brand', icon: 'â—‰' },
];

const CATEGORY_ACCENT: Record<string, string> = {
  restaurants: '#FF8C42',
  clinics: '#4FD1FF',
  ecommerce: '#B794F4',
  salons: '#F687B3',
  corporate: '#68D391',
  childcare: '#F6E05E',
  'personal-brand': '#76E4F7',
  all: '#4FD1FF',
};

function MetricBadge({ primary, label }: { primary: string; label: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        right: '16px',
        background: 'linear-gradient(135deg, rgba(5,8,16,0.92) 0%, rgba(10,20,40,0.88) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(79,209,255,0.25)',
        borderRadius: '12px',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--qf-font-display)',
          fontWeight: 700,
          fontSize: '20px',
          color: '#4FD1FF',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {primary}
      </span>
      <span
        style={{
          fontFamily: 'var(--qf-font-mono)',
          fontSize: '10.5px',
          color: 'rgba(139,147,168,0.9)',
          lineHeight: 1.4,
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
            ? 'rgba(22,29,51,0.85)'
            : 'rgba(16,22,43,0.6)',
          border: `1px solid ${hovered ? `${accent}55` : 'rgba(35,43,71,0.7)'}`,
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'all 0.35s cubic-bezier(0.22,0.61,0.36,1)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 24px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px ${accent}33, 0 0 40px -8px ${accent}22`
            : '0 4px 24px -8px rgba(0,0,0,0.4)',
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
              transition: 'transform 0.5s cubic-bezier(0.22,0.61,0.36,1)',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
            }}
          />

          {/* Overlay gradient on hover */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, transparent 40%, rgba(5,8,16,0.7) 100%)`,
              opacity: hovered ? 1 : 0.4,
              transition: 'opacity 0.35s ease',
            }}
          />

          {/* Category badge */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              background: 'rgba(5,8,16,0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: `1px solid ${accent}44`,
              padding: '4px 10px',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: accent,
                display: 'inline-block',
                boxShadow: `0 0 6px ${accent}`,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              {project.categoryLabel}
            </span>
          </div>

          {/* View CTA on hover */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(5,8,16,0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(79,209,255,0.3)',
              padding: '6px 12px',
              borderRadius: '999px',
              fontFamily: 'var(--qf-font-mono)',
              fontSize: '10px',
              color: '#4FD1FF',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(-4px)',
              transition: 'all 0.25s ease',
              pointerEvents: 'none',
            }}
          >
            View Case Study â†’
          </div>

          <MetricBadge primary={project.metrics.primary} label={project.metrics.label} />
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
            <span style={{ color: 'rgba(91,100,128,0.4)' }}>Â·</span>
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(26,33,56,0.9)',
              paddingTop: '14px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11.5px',
                color: hovered ? accent : 'rgba(79,209,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.25s ease',
              }}
            >
              Case Study
              <span
                style={{
                  display: 'inline-block',
                  transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.25s ease',
                }}
              >
                â†’
              </span>
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {project.deliverables.slice(0, 2).map((d, i) => (
                <CategoryPill key={i} label={d.split(' ').slice(0, 2).join(' ')} isActive={false} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
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
          âœ•
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
              {project.categoryLabel} Â· Case Study
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
              <span style={{ color: 'rgba(35,43,71,1)' }}>Â·</span>
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
              { heading: 'The Challenge', color: '#FFB454', text: project.challenge },
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
                    âœ“
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
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={onClose}
              >
                Close
              </button>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={() => onClose()}
              >
                Start a Project â†’
              </a>
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

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const totalProjects = PORTFOLIO_PROJECTS.length;

  return (
    <>
      <section className="section" id="portfolio">
        <div className="wrap">

          {/* Section header */}
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '40px' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Work</div>
              <h2 className="h2">
                Results-driven websites.
                <br />
                <span style={{
                  background: 'linear-gradient(90deg, var(--qf-accent), var(--qf-accent-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Real client growth.
                </span>
              </h2>
              <p className="lede" style={{ marginTop: '16px', marginInline: 'auto' }}>
                Every project is a measurable business outcome &mdash; not just a beautiful website.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11.5px',
                color: 'rgba(110,231,183,0.9)',
                background: 'rgba(110,231,183,0.07)',
                border: '1px solid rgba(110,231,183,0.2)',
                padding: '6px 14px',
                borderRadius: '999px',
                marginTop: '24px',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#6EE7B7', boxShadow: '0 0 8px rgba(110,231,183,0.8)',
                  animation: 'pulse 2s ease-in-out infinite', display: 'inline-block',
                }} />
                {totalProjects} live projects &nbsp;&middot;&nbsp; Actively taking on new clients
              </div>
            </div>
          </ScrollReveal>
          {/* â”€â”€ Filter bar â€” horizontally scrollable on mobile â”€â”€ */}
          <ScrollReveal>
            <div style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
              marginBottom: '40px',
              paddingBottom: '4px',
              scrollbarWidth: 'none',
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                padding: '6px',
                background: 'rgba(10,14,26,0.7)',
                border: '1px solid rgba(35,43,71,0.7)',
                borderRadius: '14px',
                backdropFilter: 'blur(12px)',
                width: 'fit-content',
                minWidth: '100%',
              }}>
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const accent = CATEGORY_ACCENT[cat.id];
                  const count = cat.id === 'all'
                    ? PORTFOLIO_PROJECTS.length
                    : PORTFOLIO_PROJECTS.filter((p) => p.category === cat.id).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '12px',
                        fontWeight: 500,
                        padding: '7px 14px',
                        borderRadius: '9px',
                        border: isActive ? `1px solid ${accent}55` : '1px solid transparent',
                        background: isActive ? `${accent}15` : 'transparent',
                        color: isActive ? accent : 'rgba(91,100,128,0.9)',
                        cursor: 'pointer',
                        transition: 'all 0.18s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = 'rgba(200,208,224,0.9)';
                          e.currentTarget.style.background = 'rgba(22,29,51,0.7)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = 'rgba(91,100,128,0.9)';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {cat.label}
                      <span style={{
                        background: isActive ? `${accent}22` : 'rgba(35,43,71,0.8)',
                        border: `1px solid ${isActive ? `${accent}33` : 'rgba(35,43,71,0.9)'}`,
                        color: isActive ? accent : 'rgba(91,100,128,0.7)',
                        padding: '1px 6px',
                        borderRadius: '999px',
                        fontSize: '10px',
                        fontWeight: 600,
                        lineHeight: '16px',
                      }}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* â”€â”€ Projects grid â”€â”€ */}
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

          {/* â”€â”€ Bottom CTA â”€â”€ */}
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
                  Tell us what you want to build â€” we reply within one business day.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
                Start a Project â†’
              </a>
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
        /* Hide scrollbar on filter bar */
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
