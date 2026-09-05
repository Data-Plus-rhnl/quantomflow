import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function TestimonialsSection() {
  return (
    <>
      <section className="section" id="testimonials">
        <div className="wrap">
          <ScrollReveal
            className="section-head"
            style={{ textAlign: 'center', maxWidth: '700px', marginInline: 'auto' }}
          >
            <div>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>Client voices</div>
              <h2 className="h2">What teams say about working with us.</h2>
            </div>
            <p className="lede" style={{ marginTop: '20px' }}>
              Real client testimonials coming soon. In the meantime, reach out and we&apos;ll connect you with teams we&apos;ve partnered with.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link href="#contact" className="btn btn-primary">
                Get in Touch →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
