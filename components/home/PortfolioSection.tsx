'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import { PortfolioProject } from '@/lib/types';

interface PortfolioSectionProps {
  onOpenContactModal?: () => void;
}

type CategoryFilter = 'all' | 'restaurants' | 'clinics' | 'ecommerce' | 'salons' | 'corporate';

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'restaurants', label: 'Restaurants & Cafés' },
  { id: 'clinics', label: 'Clinics & Aesthetics' },
  { id: 'ecommerce', label: 'E-Commerce & Retail' },
  { id: 'salons', label: 'Salons & Spas' },
  { id: 'corporate', label: 'Corporate & Tech' },
];

export default function PortfolioSection({ onOpenContactModal }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="section" id="portfolio">
        <div className="wrap">
          <ScrollReveal className="section-head">
            <div>
              <div className="eyebrow">Featured Client Work</div>
              <h2 className="h2">
                Proven websites.
                <br />
                Real Dubai results.
              </h2>
            </div>
            <p className="lede">
              Explore how we help local restaurants, clinics, luxury retailers, and corporate leaders in Dubai gain direct clients, eliminate commission fees, and drive measurable revenue.
            </p>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '40px',
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '13px',
                    padding: '8px 18px',
                    borderRadius: 'var(--qf-radius-pill)',
                    border: activeCategory === cat.id ? '1px solid var(--qf-accent)' : '1px solid var(--qf-line)',
                    background: activeCategory === cat.id ? 'var(--qf-accent-dim)' : 'rgba(22, 29, 51, 0.4)',
                    color: activeCategory === cat.id ? 'var(--qf-accent)' : 'var(--qf-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.25s var(--qf-ease)',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
            }}
          >
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delayMs={idx * 80}>
                <div
                  className="tech-card"
                  style={{
                    padding: '0',
                    overflow: 'hidden',
                    alignItems: 'stretch',
                    textAlign: 'left',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Mockup Image Preview */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#0D1220',
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s var(--qf-ease)',
                      }}
                      className="portfolio-thumb"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(10, 14, 26, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid var(--qf-line)',
                        padding: '4px 10px',
                        borderRadius: 'var(--qf-radius-pill)',
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '11px',
                        color: 'var(--qf-accent)',
                      }}
                    >
                      {project.categoryLabel}
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        right: '14px',
                        background: 'rgba(5, 36, 48, 0.9)',
                        border: '1px solid var(--qf-accent-line)',
                        padding: '4px 12px',
                        borderRadius: 'var(--qf-radius-pill)',
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#4FD1FF',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      }}
                    >
                      {project.metrics.primary} {project.metrics.label}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div
                      style={{
                        fontFamily: 'var(--qf-font-mono)',
                        fontSize: '12px',
                        color: 'var(--qf-text-faint)',
                        marginBottom: '6px',
                      }}
                    >
                      {project.clientName} · {project.location}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--qf-font-display)',
                        fontSize: '19px',
                        fontWeight: 600,
                        color: 'var(--qf-text)',
                        marginBottom: '10px',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: 'var(--qf-text-muted)',
                        lineHeight: 1.6,
                        flexGrow: 1,
                        marginBottom: '20px',
                      }}
                    >
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: 'var(--qf-font-mono)',
                            fontSize: '10.5px',
                            color: 'var(--qf-text-faint)',
                            background: 'var(--qf-bg)',
                            border: '1px solid var(--qf-line)',
                            padding: '3px 8px',
                            borderRadius: 'var(--qf-radius-sm)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid var(--qf-line-soft)',
                        paddingTop: '14px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--qf-font-mono)',
                          fontSize: '12.5px',
                          color: 'var(--qf-accent)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        View Case Study Details →
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--qf-text-faint)' }}>Dubai, UAE</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: 'rgba(5, 8, 16, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '780px',
              background: 'var(--qf-bg-raised)',
              border: '1px solid var(--qf-accent-line)',
              borderRadius: 'var(--qf-radius-lg)',
              boxShadow: '0 30px 60px -12px rgba(0,0,0,0.8), 0 0 50px -10px rgba(79, 209, 255, 0.25)',
              padding: '36px',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--qf-text-muted)',
                fontSize: '24px',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow">{selectedProject.categoryLabel} · Case Study</div>
              <h2
                style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: 'var(--qf-text)',
                  marginBottom: '8px',
                }}
              >
                {selectedProject.title}
              </h2>
              <div style={{ fontFamily: 'var(--qf-font-mono)', fontSize: '13px', color: 'var(--qf-text-muted)' }}>
                Client: <strong>{selectedProject.clientName}</strong> · {selectedProject.location}
              </div>
            </div>

            {/* Main Mockup in Modal */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: 'var(--qf-radius-md)',
                overflow: 'hidden',
                marginBottom: '28px',
                border: '1px solid var(--qf-line)',
              }}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Highlight Metric Banner */}
            <div
              style={{
                background: 'rgba(79, 209, 255, 0.08)',
                border: '1px solid var(--qf-accent-line)',
                borderRadius: 'var(--qf-radius-md)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--qf-accent)',
                  lineHeight: 1,
                }}
              >
                {selectedProject.metrics.primary}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--qf-text-muted)' }}>
                <strong>Key Result:</strong> {selectedProject.metrics.label}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
              <div
                style={{
                  background: 'var(--qf-bg-alt)',
                  border: '1px solid var(--qf-line)',
                  borderRadius: 'var(--qf-radius-md)',
                  padding: '20px',
                }}
              >
                <h4 style={{ fontFamily: 'var(--qf-font-display)', fontSize: '16px', color: '#FFB454', marginBottom: '8px' }}>
                  The Challenge
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--qf-text-muted)', lineHeight: 1.6 }}>
                  {selectedProject.challenge}
                </p>
              </div>

              <div
                style={{
                  background: 'var(--qf-bg-alt)',
                  border: '1px solid var(--qf-line)',
                  borderRadius: 'var(--qf-radius-md)',
                  padding: '20px',
                }}
              >
                <h4 style={{ fontFamily: 'var(--qf-font-display)', fontSize: '16px', color: 'var(--qf-accent)', marginBottom: '8px' }}>
                  The Solution
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--qf-text-muted)', lineHeight: 1.6 }}>
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontFamily: 'var(--qf-font-display)', fontSize: '16px', color: 'var(--qf-text)', marginBottom: '12px' }}>
                Key Deliverables
              </h4>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {selectedProject.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13.5px',
                      color: 'var(--qf-text-muted)',
                    }}
                  >
                    <span style={{ color: 'var(--qf-success)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                borderTop: '1px solid var(--qf-line-soft)',
                paddingTop: '20px',
              }}
            >
              <div style={{ fontSize: '13px', color: 'var(--qf-text-faint)' }}>
                Want a similar solution for your business?
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProject(null);
                    if (onOpenContactModal) onOpenContactModal();
                  }}
                >
                  Get a Free Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
