import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                Quantum<span style={{ color: 'var(--qf-accent, #4FD1FF)', marginLeft: '2px' }}>Flow</span>
              </span>
            </div>
            <p>
              Website design, online ordering systems, and mobile apps for local
              businesses based in Dubai, UAE.
            </p>
            <div className="social-row" style={{ marginTop: '20px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.84-1.95 3.78-1.95 4.05 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.37-2.05 2.8V21h-4V9Z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 3H22l-7.2 8.2L23 21h-6.5l-5.1-6.4L5.5 21H2.4l7.7-8.8L1.7 3h6.6l4.6 5.9L18.9 3Zm-1.1 16h1.7L7.3 4.9H5.5L17.8 19Z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Company</h5>
            <div className="footer-links">
              <Link href="/#about">About us</Link>
              <Link href="/#industries">Industries</Link>
              <Link href="/#process">Our process</Link>
              <Link href="/#blog">Blog</Link>
              <a href="#contact">Careers</a>
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <div className="footer-links">
              <Link href="/#services">E-commerce & retail</Link>
              <Link href="/#services">Restaurants & cafes</Link>
              <Link href="/#services">Booking & service sites</Link>
              <Link href="/#services">Local marketing & SEO</Link>
            </div>
          </div>

          <div>
            <h5>Contact</h5>
            <div className="footer-links">
              <a href="mailto:support@quantumflowit.com">
                support@quantumflowit.com
              </a>
              <a
                href="tel:+971528903292"
                style={{ fontSize: '13.8px', color: 'var(--qf-text-muted)' }}
              >
                +971 52 890 3292
              </a>
              <span
                style={{ fontSize: '13.8px', color: 'var(--qf-text-muted)' }}
              >
                Dubai, UAE
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Quantum Flow Information Technologies LLC. All rights reserved.
          </span>
          <span>Dubai, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
