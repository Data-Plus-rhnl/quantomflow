import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

const WA_LINK = 'https://wa.me/971528903292?text=' + encodeURIComponent('Hello Quantum Flow! I would like to get a free quote for a website.');

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 2C6.516 2 2.029 6.486 2.029 12c0 1.95.56 3.766 1.528 5.305L2.002 22l4.838-1.525A9.94 9.94 0 0 0 12.03 22c5.515 0 10.003-4.486 10.003-10s-4.488-10-10.003-10zm5.82 14.184c-.244.685-1.42 1.306-1.956 1.39-.512.08-1.18.113-3.83-1.026-3.23-1.388-5.308-4.664-5.47-4.877-.162-.213-1.307-1.74-1.307-3.319s.827-2.355 1.12-2.678c.294-.323.64-.403.854-.403.213 0 .426.002.61.012.196.01.458-.075.717.548.263.633.9 2.203.978 2.364.08.16.133.35.027.564-.107.214-.16.347-.32.535-.16.187-.336.417-.48.56-.16.16-.327.333-.14.654.186.32.827 1.365 1.773 2.209 1.217 1.085 2.244 1.42 2.564 1.58.32.16.507.133.693-.08.187-.214.8-1.014 1.013-1.362.213-.347.427-.293.72-.187.293.107 1.867.88 2.187 1.04.32.16.533.24.613.373.08.134.08.774-.164 1.46z" />
    </svg>
  );
}

export default function LeadGenStrip() {
  return (
    <section style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(40px,6vw,64px)' }}>
      <div className="wrap">
        <ScrollReveal>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(16,22,43,0.95) 0%, rgba(10,14,26,0.9) 100%)',
              border: '1px solid rgba(79,209,255,0.18)',
              borderRadius: '24px',
              padding: 'clamp(32px,5vw,56px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '32px',
              backdropFilter: 'blur(12px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(79,209,255,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#68D391',
                background: 'rgba(110,231,183,0.08)',
                border: '1px solid rgba(110,231,183,0.2)',
                padding: '5px 14px',
                borderRadius: '999px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#68D391', display: 'inline-block', boxShadow: '0 0 8px rgba(110,231,183,0.8)' }} />
              Free Consultation · No Commitment
            </div>

            {/* Headline */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: 'clamp(24px,3.5vw,38px)',
                  fontWeight: 700,
                  color: '#E8ECF5',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  marginBottom: '16px',
                }}
              >
                Ready to grow your business online?
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, var(--qf-accent), var(--qf-accent-2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Get a free quote today.
                </span>
              </h2>
              <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: 'rgba(139,147,168,0.85)', maxWidth: '52ch', marginInline: 'auto' }}>
                We reply within one business day with a clear plan, timeline, and pricing — no obligation, no sales pressure.
              </p>
            </div>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--qf-font-display)',
                  fontWeight: 600,
                  fontSize: '14.5px',
                  color: '#052430',
                  padding: '13px 28px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #4FD1FF, #FFB454)',
                  boxShadow: '0 0 30px -6px rgba(79,209,255,0.5)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 32px -4px rgba(79,209,255,0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px -6px rgba(79,209,255,0.5)';
                }}
              >
                Get a Free Quote →
              </Link>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--qf-font-display)',
                  fontWeight: 600,
                  fontSize: '14.5px',
                  color: '#fff',
                  padding: '13px 28px',
                  borderRadius: '999px',
                  background: '#25D366',
                  boxShadow: '0 0 24px -6px rgba(37,211,102,0.5)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 28px -4px rgba(37,211,102,0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 24px -6px rgba(37,211,102,0.5)';
                }}
              >
                <IconWhatsApp />
                WhatsApp Us
              </a>
            </div>

            {/* Trust micro-line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {['Dubai DED Licensed', 'Reply within 24h', 'No lock-in contracts', '7 live client projects'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '11px',
                    color: 'rgba(91,100,128,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ color: '#68D391', fontSize: '10px' }}>✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
