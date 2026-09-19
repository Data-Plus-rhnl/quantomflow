'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Large watermark text in background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--qf-font-display)',
          fontSize: 'clamp(80px, 14vw, 180px)',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.04)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        QuantumFlow
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/qf-logo-avatar.png"
                  alt="Quantum Flow logo"
                  width={44}
                  height={44}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  display: 'inline-flex',
                  alignItems: 'baseline',
                }}
              >
                Quantum<span style={{ color: 'rgba(255,255,255,0.7)', marginLeft: '2px' }}>Flow</span>
              </span>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.65, maxWidth: '28ch', margin: '0 0 22px' }}>
              Website design, online ordering systems, and mobile apps for local businesses based in Dubai, UAE.
            </p>

            {/* Socials label + icons */}
            <p style={{ fontFamily: 'var(--qf-font-display)', fontWeight: 700, fontSize: '15px', color: '#FFFFFF', marginBottom: '12px' }}>
              Socials
            </p>
            <div className="social-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.84-1.95 3.78-1.95 4.05 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.37-2.05 2.8V21h-4V9Z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 3H22l-7.2 8.2L23 21h-6.5l-5.1-6.4L5.5 21H2.4l7.7-8.8L1.7 3h6.6l4.6 5.9L18.9 3Zm-1.1 16h1.7L7.3 4.9H5.5L17.8 19Z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h5>Company</h5>
            <div className="footer-links">
              <Link href="/#about">About us</Link>
              <Link href="/#industries">Industries</Link>
              <Link href="/#process">Our process</Link>
              <Link href="/#blog">Blog</Link>
              <Link href="/request-quote">Request a Quote</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5>Services</h5>
            <div className="footer-links">
              <Link href="/#services">E-commerce &amp; retail</Link>
              <Link href="/#services">Restaurants &amp; cafes</Link>
              <Link href="/#services">Booking &amp; service sites</Link>
              <Link href="/#services">Local marketing &amp; SEO</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <div className="footer-links">
              <a href="mailto:support@quantumflowit.com">support@quantumflowit.com</a>
              <a href="tel:+971528903292">+971 52 890 3292</a>
              <span>Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 Quantum Flow Information Technologies LLC. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link
              href="/privacy-policy"
              className="footer-legal-link"
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '12.5px',
                fontFamily: 'var(--qf-font-mono)',
                textDecoration: 'none',
                transition: 'color .2s ease',
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="footer-legal-link"
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '12.5px',
                fontFamily: 'var(--qf-font-mono)',
                textDecoration: 'none',
                transition: 'color .2s ease',
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-legal-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </footer>
  );
}
