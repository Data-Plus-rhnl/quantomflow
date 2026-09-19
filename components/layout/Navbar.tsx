'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useNavbar } from './NavbarContext';
import { useTheme } from '@/components/theme/ThemeContext';
import PullChainSwitch from '@/components/ui/PullChainSwitch';

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
  const [isVisible, setIsVisible]       = useState(true);
  const { menuOpen, setMenuOpen }       = useNavbar();
  const { theme, toggleTheme }          = useTheme();
  const isDark                          = theme === 'dark';
  const [activeSection, setActiveSection] = useState('');
  const pathname  = usePathname();
  const isHome    = pathname === '/';

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Blur / compact state threshold
          setIsScrolled(currentScrollY > 20);

          // Hide on scroll down, show on scroll up
          if (menuOpen) {
            setIsVisible(true);
          } else if (currentScrollY <= 60) {
            // Near top of page: always visible
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
            // Scrolling down: hide
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
            // Scrolling up: show
            setIsVisible(true);
          }

          lastScrollY = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

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

  const close = () => setMenuOpen(false);
  const href  = (a: string) => (isHome ? `#${a}` : `/#${a}`);

  /**
   * Scroll to a section by id, accounting for:
   *  - The fixed navbar height
   *  - Sticky-positioned DeckCard elements (which report incorrect getBoundingClientRect
   *    when already stacked/pinned). We resolve the true document offset by walking
   *    offsetParent chains.
   */
  const scrollToSection = (e: React.MouseEvent, anchor: string) => {
    if (!isHome) return; // Let Next.js handle cross-page navigation normally
    e.preventDefault();
    close();

    if (anchor === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(anchor);
    if (!el) return;

    // Walk the offsetParent chain to get true document top offset
    let offsetTop = 0;
    let node: HTMLElement | null = el;
    while (node) {
      offsetTop += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }

    // Subtract the navbar height so the section isn't hidden behind it
    const navbarHeight = isScrolled ? 68 : 82;
    const target = Math.max(0, offsetTop - navbarHeight);

    setIsVisible(true);
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Main bar ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          transform: isVisible || menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.22,0.61,0.36,1), background 0.35s cubic-bezier(0.22,0.61,0.36,1), border-color 0.35s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.35s cubic-bezier(0.22,0.61,0.36,1), height 0.35s cubic-bezier(0.22,0.61,0.36,1)',
          ...(isDark ? {
            ...(isScrolled ? {
              background: 'rgba(7, 11, 22, 0.96)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 8px 32px -8px rgba(0,0,0,0.7)',
            } : {
              background: 'rgba(10, 14, 26, 0.85)',
              backdropFilter: 'blur(16px) saturate(150%)',
              WebkitBackdropFilter: 'blur(16px) saturate(150%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'none',
            }),
          } : {
            ...(isScrolled ? {
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1.5px solid #94A3B8',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
            } : {
              background: '#FFFFFF',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1.5px solid #CBD5E1',
              boxShadow: '0 2px 10px rgba(15, 23, 42, 0.05)',
            }),
          }),
        }}
      >
        <div
          className="nav-container"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isScrolled ? '0 32px' : '0 clamp(24px,5vw,72px)',
            height: isScrolled ? '68px' : '82px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            transition: 'height 0.35s cubic-bezier(0.22,0.61,0.36,1), padding 0.35s cubic-bezier(0.22,0.61,0.36,1)',
          }}
        >
          {/* Logo */}
          <Link
            href={href('top')}
            onClick={(e) => scrollToSection(e, 'top')}
            className="nav-logo-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isScrolled ? '10px' : '12px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'gap 0.35s ease',
            }}
          >
            <div
              className="nav-logo-badge"
              style={{
                width: isScrolled ? '40px' : '48px',
                height: isScrolled ? '40px' : '48px',
                borderRadius: isScrolled ? '11px' : '13px',
                overflow: 'hidden',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isDark
                  ? '0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12)'
                  : '0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px #CBD5E1',
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
              className="nav-logo-text"
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: isScrolled ? '20px' : '24px',
                fontWeight: 800,
                color: isDark ? '#FFFFFF' : '#070B16',
                letterSpacing: '-0.025em',
                lineHeight: 1,
                transition: 'all 0.35s ease',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              Quantum<span style={{ color: '#1D63FF', marginLeft: '2px' }}>Flow</span>
            </span>
          </Link>

          {/* Desktop nav links */}
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
                  onClick={(e) => scrollToSection(e, anchor)}
                  style={{
                    fontFamily: 'var(--qf-font-body)',
                    fontSize: '13px',
                    fontWeight: active ? 700 : 500,
                    color: isDark
                      ? (active ? '#1D63FF' : '#94A3B8')
                      : (active ? '#1D63FF' : '#334155'),
                    padding: '7px 11px',
                    borderRadius: '7px',
                    background: active
                      ? (isDark ? 'rgba(29, 99, 255, 0.12)' : 'rgba(29, 99, 255, 0.08)')
                      : 'transparent',
                    border: active
                      ? (isDark ? '1px solid rgba(29, 99, 255, 0.28)' : '1px solid rgba(29, 99, 255, 0.25)')
                      : '1px solid transparent',
                    transition: 'all 0.18s ease',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = isDark ? '#FFFFFF' : '#070B16';
                      e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = isDark ? '#94A3B8' : '#334155';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Blog link */}
            <Link
              href={href('blog')}
              onClick={(e) => scrollToSection(e, 'blog')}
              className="nav-blog-link"
              style={{
                fontFamily: 'var(--qf-font-body)',
                fontSize: '13px',
                fontWeight: 500,
                color: isDark ? '#94A3B8' : '#334155',
                padding: '7px 14px',
                borderRadius: '7px',
                background: 'transparent',
                transition: 'all 0.18s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark ? '#FFFFFF' : '#070B16';
                e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? '#94A3B8' : '#334155';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Blog
            </Link>

            {/* Contact link */}
            <Link
              href={href('contact')}
              onClick={(e) => scrollToSection(e, 'contact')}
              className="nav-contact-link"
              style={{
                fontFamily: 'var(--qf-font-body)',
                fontSize: '13px',
                fontWeight: 600,
                color: isDark ? '#FFFFFF' : '#070B16',
                padding: '7px 14px',
                borderRadius: '7px',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid #CBD5E1',
                background: isDark ? 'transparent' : '#FFFFFF',
                transition: 'all 0.18s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (isDark) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                } else {
                  e.currentTarget.style.borderColor = '#94A3B8';
                  e.currentTarget.style.background = '#F8FAFC';
                }
              }}
              onMouseLeave={(e) => {
                if (isDark) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.background = 'transparent';
                } else {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.background = '#FFFFFF';
                }
              }}
            >
              Contact
            </Link>

            {/* Primary CTA */}
            <Link
              href="/request-quote"
              className="nav-cta-primary"
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#FFFFFF',
                padding: '9px 18px',
                borderRadius: '9px',
                background: '#1D63FF',
                border: '1px solid #1D63FF',
                boxShadow: 'none',
                transition: 'all 0.18s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2E72FF';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1D63FF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start <span className="nav-cta-sub">a Project</span>
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
                background: isDark ? 'rgba(22, 29, 51, 0.8)' : '#F1F5F9',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #CBD5E1',
                color: isDark ? '#FFFFFF' : '#070B16',
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

        {/* Architectural Pull Cord Switch mounted at the absolute FURTHEST RIGHT of the header */}
        <div
          className="header-furthest-right-pull"
          style={{
            position: 'absolute',
            top: 0,
            right: 'clamp(14px, 2.2vw, 36px)',
            zIndex: 60,
          }}
        >
          <PullChainSwitch isDark={isDark} onToggle={toggleTheme} />
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          background: isDark ? 'rgba(7, 11, 22, 0.98)' : 'rgba(255, 255, 255, 0.98)',
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          paddingBottom: '16px',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #E2E8F0',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--qf-font-display)',
              fontSize: '15px',
              fontWeight: 700,
              color: isDark ? '#FFFFFF' : '#070B16',
            }}>
              Appearance
            </div>
            <div style={{
              fontSize: '12px',
              color: isDark ? '#94A3B8' : '#64748B',
              marginTop: '2px',
            }}>
              {isDark ? 'Dark Mode (Pull to switch)' : 'Light Mode (Pull to switch)'}
            </div>
          </div>
          <PullChainSwitch isDark={isDark} onToggle={toggleTheme} />
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[...NAV_LINKS, { label: 'Blog', anchor: 'blog' }, { label: 'Contact', anchor: 'contact' }].map(({ label, anchor }) => (
            <Link
              key={anchor}
              href={href(anchor)}
              onClick={(e) => scrollToSection(e, anchor)}
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: '22px',
                fontWeight: 600,
                color: activeSection === anchor
                  ? '#1D63FF'
                  : (isDark ? '#FFFFFF' : '#070B16'),
                padding: '14px 0',
                borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #E2E8F0',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: '24px' }}>
            <Link
              href="/request-quote"
              onClick={close}
              className="btn btn-primary"
              style={{
                width: '100%',
                textAlign: 'center',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 700,
                display: 'block',
                background: '#1D63FF',
                color: '#FFFFFF',
                boxShadow: 'none',
              }}
            >
              Start a Project / Request Quote →
            </Link>
          </div>
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
        @media (max-width: 640px) {
          header {
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .nav-container {
            padding: 0 46px 0 12px !important;
            height: 60px !important;
            gap: 6px !important;
          }
          .nav-logo-link {
            gap: 8px !important;
          }
          .nav-logo-badge {
            width: 32px !important;
            height: 32px !important;
            border-radius: 9px !important;
          }
          .nav-logo-text {
            font-size: 16.5px !important;
            letter-spacing: -0.02em !important;
          }
          .header-furthest-right-pull {
            right: 8px !important;
            transform: scale(0.85);
            transform-origin: top right;
          }
          .nav-cta-primary {
            display: inline-flex !important;
            padding: 6px 11px !important;
            font-size: 11.5px !important;
            border-radius: 8px !important;
            gap: 3px !important;
          }
          .nav-cta-primary svg {
            width: 10px !important;
            height: 10px !important;
          }
          .nav-hamburger {
            display: flex !important;
            width: 34px !important;
            height: 34px !important;
            border-radius: 8px !important;
          }
        }
        @media (max-width: 375px) {
          .nav-cta-sub {
            display: none !important;
          }
          .nav-container {
            padding: 0 40px 0 8px !important;
          }
        }
      `}</style>
    </>
  );
}
