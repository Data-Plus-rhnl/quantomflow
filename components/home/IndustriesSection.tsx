import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const INDUSTRIES = [
  'Cafes & Coffee Shops',
  'Restaurants & Diners',
  'E-commerce & Boutiques',
  'Salons & Spas',
  'Real Estate Agencies',
  'Medical & Dental Clinics',
  'Fitness Studios',
  'Professional Services',
  'Local Contracting',
];

export default function IndustriesSection() {
  return (
    <>
      <section className="section section-alt" id="industries">
        <div className="wrap">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '56px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Industries</div>
            <h2 className="h2">Businesses we help in Dubai.</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="chip-row">
              {INDUSTRIES.map((industry, i) => (
                <span key={i} className="chip">
                  {industry}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
