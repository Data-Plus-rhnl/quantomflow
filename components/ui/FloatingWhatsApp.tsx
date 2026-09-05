'use client';

import React, { useState } from 'react';
import { useNavbar } from '../layout/NavbarContext';

const WA_NUMBER = '971528903292';
const WA_MESSAGE = encodeURIComponent(
  'Hello Quantum Flow! I would like to get a free quote for a website project.'
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 2C6.516 2 2.029 6.486 2.029 12c0 1.95.56 3.766 1.528 5.305L2.002 22l4.838-1.525A9.94 9.94 0 0 0 12.03 22c5.515 0 10.003-4.486 10.003-10s-4.488-10-10.003-10zm5.82 14.184c-.244.685-1.42 1.306-1.956 1.39-.512.08-1.18.113-3.83-1.026-3.23-1.388-5.308-4.664-5.47-4.877-.162-.213-1.307-1.74-1.307-3.319s.827-2.355 1.12-2.678c.294-.323.64-.403.854-.403.213 0 .426.002.61.012.196.01.458-.075.717.548.263.633.9 2.203.978 2.364.08.16.133.35.027.564-.107.214-.16.347-.32.535-.16.187-.336.417-.48.56-.16.16-.327.333-.14.654.186.32.827 1.365 1.773 2.209 1.217 1.085 2.244 1.42 2.564 1.58.32.16.507.133.693-.08.187-.214.8-1.014 1.013-1.362.213-.347.427-.293.72-.187.293.107 1.867.88 2.187 1.04.32.16.533.24.613.373.08.134.08.774-.164 1.46z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const { menuOpen } = useNavbar();

  // Hide when mobile menu is open
  if (menuOpen) return null;

  return (
    <>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed',
          bottom: '94px', // sits above the chatbot button
          right: '28px',
          zIndex: 48,
          width: '52px',
          height: '52px',
          borderRadius: '14px',
          background: hovered ? 'rgba(18, 26, 48, 0.98)' : 'rgba(13, 19, 34, 0.95)',
          border: hovered ? '1.5px solid #25D366' : '1.5px solid rgba(37, 211, 102, 0.75)',
          color: '#25D366',
          boxShadow: hovered
            ? '0 8px 24px rgba(0,0,0,0.65)'
            : '0 4px 16px rgba(0,0,0,0.45)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'all 0.25s cubic-bezier(0.22,0.61,0.36,1)',
          transform: hovered ? 'translateY(-2px) scale(1.04)' : 'translateY(0) scale(1)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WhatsAppIcon />
      </a>

      {/* Always visible label */}
      <div
        className="floating-label"
        style={{
          position: 'fixed',
          bottom: '103px',
          right: '88px',
          zIndex: 47,
          padding: '8px 14px',
          borderRadius: '8px',
          background: 'rgba(10,14,26,0.95)',
          border: '1px solid rgba(37,211,102,0.35)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          fontFamily: 'var(--qf-font-display)',
          fontSize: '13px',
          fontWeight: 500,
          color: '#E8ECF5',
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px -8px rgba(0,0,0,0.6)',
          pointerEvents: 'none',
        }}
      >
        Get in touch via WhatsApp
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-label {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
