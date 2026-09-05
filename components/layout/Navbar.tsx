'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useNavbar } from './NavbarContext';

const NAV_LINKS = [
  { label: 'Work',       anchor: 'portfolio'   },
  { label: 'Packages',   anchor: 'packages'    },
  { label: 'Tech',       anchor: 'tech'        },
  { label: 'Services',   anchor: 'services'    },
  { label: 'Industries', anchor: 'industries'  },
  { label: 'Process',    anchor: 'process'     },
  { label: 'Why Us',     anchor: 'why-us'      },
  { label: 'About',      anchor: 'about'       },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const { menuOpen, setMenuOpen }       = useNavbar();
  const [activeSection, setActiveSection] = useState('');
  const pathname  = usePathname();
  const isHome    = pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = [...NAV_LINKS.map((l) => l.anchor), 'contact'];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -70% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close   = () => setMenuOpen(false);
  const href    = (a: string) => (isHome ? `#${a}` : `/#${a}`);

  return (
    <>
      {/* ── Main bar ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'all 0.35s cubic-bezier(0.22,0.61,0.36,1)',
          ...(isScrolled ? {
            margin: '10px 32px 0',
            borderRadius: '16px',
            background: 'rgba(10,14,26,0.92)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(79,209,255,0.12)',
            boxShadow: '0 8px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,209,255,0.06)',
          } : {
            margin: '0',
            borderRadius: '0',
            background: 'rgba(10,14,26,0.55)',
            backdropFilter: 'blur(16px) saturate(150%)',
            WebkitBackdropFilter: 'blur(16px) saturate(150%)',
            border: 'none',
            borderBottom: '1px solid rgba(35,43,71,0.5)',
            boxShadow: 'none',
          }),
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isScrolled ? '0 32px' : '0 clamp(24px,5vw,72px)',
            height: isScrolled ? '68px' : '82px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            transition: 'height 0.35s cubic-bezier(0.22,0.61,0.36,1), padding 0.35s cubic-bezier(0.22,0.61,0.36,1)',
          }}
        >
          {/* Logo */}
          <Link
            href={href('top')}
            onClick={close}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isScrolled ? '12px' : '14px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'gap 0.35s ease',
            }}
          >
            <div
              style={{
                width: isScrolled ? '40px' : '48px',
                height: isScrolled ? '40px' : '48px',
                borderRadius: isScrolled ? '11px' : '13px',
                overflow: 'hidden',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isScrolled 
                  ? '0 3px 12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.1)' 
                  : '0 4px 18px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.15)',
                transition: 'all 0.35s cubic-bezier(0.22,0.61,0.36,1)',
                flexShrink: 0,
              }}
            >
              <Image
                src="/qf-logo-avatar.png"
                alt="Quantum Flow"
                width={52}
                height={52}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: isScrolled ? '20px' : '24px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                lineHeight: 1,
                transition: 'all 0.35s ease',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              Quantum<span style={{ color: 'var(--qf-accent, #4FD1FF)', marginLeft: '2px' }}>Flow</span>
            </span>
          </Link>

          {/* Desktop nav links — now left-aligned with better spacing */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              flex: 1,
              maxWidth: '720px',
            }}
            className="nav-desktop"
          >
            {NAV_LINKS.map(({ label, anchor }) => {
              const active = activeSection === anchor;
              return (
                <Link
                  key={anchor}
                  href={href(anchor)}
                  style={{
                    fontFamily: 'var(--qf-font-body)',
                    fontSize: '13px',
                    fontWeight: active ? 600 : 500,
                    color: active ? '#E8ECF5' : 'rgba(139,147,168,0.85)',
                    padding: '7px 11px',
                    borderRadius: '7px',
                    background: active ? 'rgba(79,209,255,0.08)' : 'transparent',
                    border: active ? '1px solid rgba(79,209,255,0.15)' : '1px solid transparent',
                    transition: 'all 0.18s ease',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = '#E8ECF5';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = 'rgba(139,147,168,0.85)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs — more compact */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Blog link */}
            <Link
              href={href('blog')}
              className="nav-blog-link"
              style={{
                fontFamily: 'var(--qf-font-body)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(139,147,168,0.85)',
                padding: '7px 14px',
                borderRadius: '7px',
                background: 'transparent',
                transition: 'all 0.18s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E8ECF5';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(139,147,168,0.85)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Blog
            </Link>

            {/* Contact link */}
            <Link
              href={href('contact')}
              className="nav-contact-link"
              style={{
                fontFamily: 'var(--qf-font-body)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(139,147,168,0.85)',
                padding: '7px 14px',
                borderRadius: '7px',
                border: '1px solid rgba(35,43,71,0.8)',
                background: 'transparent',
                transition: 'all 0.18s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E8ECF5';
                e.currentTarget.style.borderColor = 'rgba(79,209,255,0.3)';
                e.currentTarget.style.background = 'rgba(79,209,255,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(139,147,168,0.85)';
                e.currentTarget.style.borderColor = 'rgba(35,43,71,0.8)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Contact
            </Link>

            {/* Primary CTA */}
            <Link
              href={href('contact')}
              className="nav-cta-primary"
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1a1a2e',
                padding: '8px 16px',
                borderRadius: '9px',
                background: '#FFB454',
                border: '1px solid rgba(255,180,84,0.3)',
                boxShadow: 'none',
                transition: 'all 0.18s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFC170';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFB454';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start a Project
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(22,29,51,0.8)',
                border: '1px solid rgba(35,43,71,0.8)',
                color: 'rgba(200,208,224,0.9)',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {menuOpen
                ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          background: 'rgba(10,14,26,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 24px 32px',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease, visibility 0s linear ' + (menuOpen ? '0s' : '0.25s'),
          overflowY: 'auto',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[...NAV_LINKS, { label: 'Blog', anchor: 'blog' }, { label: 'Contact', anchor: 'contact' }].map(({ label, anchor }) => (
            <Link
              key={anchor}
              href={href(anchor)}
              onClick={close}
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: '22px',
                fontWeight: 600,
                color: activeSection === anchor ? '#4FD1FF' : 'rgba(232,236,245,0.85)',
                padding: '14px 0',
                borderBottom: '1px solid rgba(35,43,71,0.5)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1100px) {
          .nav-desktop { display: none !important; }
          .nav-blog-link { display: none !important; }
          .nav-contact-link { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1101px) {
          .nav-cta-primary {
            margin-left: 4px;
          }
        }
        @media (max-width: 480px) {
          /* Prevent floating pill from eating too much screen on small phones */
          header[style*="margin: 10px 32px"] {
            margin: 8px 12px 0 !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
