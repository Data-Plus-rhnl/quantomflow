'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy active section observer on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ['portfolio', 'packages', 'services', 'process', 'about', 'blog', 'contact'];
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -70% 0px',
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getHref = (anchor: string) => {
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };

  const handleConsultationClick = (e: React.MouseEvent) => {
    if (onOpenContactModal) {
      e.preventDefault();
      closeMobileMenu();
      onOpenContactModal();
    }
  };

  return (
    <>
      <header className={`nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href={getHref('top')} className="brand" onClick={closeMobileMenu}>
            <Image
              src="/QuantumFlowLogo.jpeg"
              alt="Quantum Flow logo"
              width={96}
              height={48}
              className="brand-mark"
              priority
            />
            <span className="brand-name">
              Quantum<b>Flow</b>
            </span>
          </Link>

          <nav className="nav-links">
            <Link
              href={getHref('portfolio')}
              className={activeSection === 'portfolio' ? 'active' : ''}
            >
              Work
            </Link>
            <Link
              href={getHref('packages')}
              className={activeSection === 'packages' ? 'active' : ''}
            >
              Packages
            </Link>
            <Link
              href={getHref('services')}
              className={activeSection === 'services' ? 'active' : ''}
            >
              Services
            </Link>
            <Link
              href={getHref('process')}
              className={activeSection === 'process' ? 'active' : ''}
            >
              Process
            </Link>
            <Link
              href={getHref('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </Link>
            <Link
              href={getHref('blog')}
              className={activeSection === 'blog' ? 'active' : ''}
            >
              Blog
            </Link>
            <Link
              href={getHref('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </nav>

          <div className="nav-cta">
            <a
              href="https://wa.me/971528903292?text=Hello%20Quantum%20Flow%2C%20I%20would%20like%20to%20inquire%20about%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              WhatsApp
            </a>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleConsultationClick}
            >
              Free Consultation →
            </button>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {!isMobileMenuOpen ? (
                <svg
                  id="navIconOpen"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1 3h16M1 9h16M1 15h16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  id="navIconClose"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M2 2l14 14M16 2L2 16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div className={`mnav ${isMobileMenuOpen ? 'open' : ''}`} id="mnav">
        <Link href={getHref('portfolio')} onClick={closeMobileMenu}>
          Featured Work
        </Link>
        <Link href={getHref('packages')} onClick={closeMobileMenu}>
          Packages & Pricing
        </Link>
        <Link href={getHref('services')} onClick={closeMobileMenu}>
          Services & SEO
        </Link>
        <Link href={getHref('process')} onClick={closeMobileMenu}>
          Our Process
        </Link>
        <Link href={getHref('about')} onClick={closeMobileMenu}>
          About & Dubai Office
        </Link>
        <Link href={getHref('blog')} onClick={closeMobileMenu}>
          Blog & Guides
        </Link>
        <Link href={getHref('contact')} onClick={closeMobileMenu}>
          Contact Us
        </Link>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleConsultationClick}
          style={{ marginTop: '20px' }}
        >
          Get Free Consultation →
        </button>
      </div>
    </>
  );
}
