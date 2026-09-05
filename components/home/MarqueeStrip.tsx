import React from 'react';

const CAPABILITIES = [
  'Online Ordering',
  'E-Commerce Stores',
  'Table Reservations',
  'Appointment Bookings',
  'Stripe & Apple Pay',
  'Local Google SEO',
  'WhatsApp Ordering',
  'Mobile-First Menus',
  'Instagram Shop Integration',
  'Google Maps Optimization',
  'Easy Menu Managers',
];

export default function MarqueeStrip() {
  return (
    <>
      <div className="strip" aria-label="Capabilities">
        <div className="strip-track">
          {CAPABILITIES.map((cap, i) => (
            <span key={`strip-1-${i}`}>{cap}</span>
          ))}
          {CAPABILITIES.map((cap, i) => (
            <span key={`strip-2-${i}`}>{cap}</span>
          ))}
        </div>
      </div>
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
