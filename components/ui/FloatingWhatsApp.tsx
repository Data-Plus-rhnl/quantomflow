'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappNumber = '971528903292';
  const defaultMessage = encodeURIComponent(
    'Hello Quantum Flow, I would like to discuss a website / app project for my business.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(16, 22, 43, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(110, 231, 183, 0.35)',
        borderRadius: 'var(--qf-radius-pill)',
        padding: '10px 18px',
        color: '#6EE7B7',
        fontSize: '13px',
        fontFamily: 'var(--qf-font-mono)',
        fontWeight: 500,
        boxShadow: '0 8px 24px -4px rgba(0,0,0,0.5), 0 0 20px -4px rgba(110, 231, 183, 0.3)',
        transition: 'transform 0.25s var(--qf-ease), box-shadow 0.25s var(--qf-ease)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow =
          '0 12px 28px -4px rgba(0,0,0,0.6), 0 0 30px -4px rgba(110, 231, 183, 0.45)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow =
          '0 8px 24px -4px rgba(0,0,0,0.5), 0 0 20px -4px rgba(110, 231, 183, 0.3)';
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ flexShrink: 0 }}
      >
        <path d="M12.031 2C6.516 2 2.029 6.486 2.029 12c0 1.95.56 3.766 1.528 5.305L2.002 22l4.838-1.525A9.94 9.94 0 0 0 12.03 22c5.515 0 10.003-4.486 10.003-10s-4.488-10-10.003-10zm5.82 14.184c-.244.685-1.42 1.306-1.956 1.39-.512.08-1.18.113-3.83-1.026-3.23-1.388-5.308-4.664-5.47-4.877-.162-.213-1.307-1.74-1.307-3.319s.827-2.355 1.12-2.678c.294-.323.64-.403.854-.403.213 0 .426.002.61.012.196.01.458-.075.717.548.263.633.9 2.203.978 2.364.08.16.133.35.027.564-.107.214-.16.347-.32.535-.16.187-.336.417-.48.56-.16.16-.327.333-.14.654.186.32.827 1.365 1.773 2.209 1.217 1.085 2.244 1.42 2.564 1.58.32.16.507.133.693-.08.187-.214.8-1.014 1.013-1.362.213-.347.427-.293.72-.187.293.107 1.867.88 2.187 1.04.32.16.533.24.613.373.08.134.08.774-.164 1.46z" />
      </svg>
      <span>WhatsApp Us</span>
    </a>
  );
}
