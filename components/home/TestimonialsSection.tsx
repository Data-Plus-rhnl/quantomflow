import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

interface TestimonialsSectionProps {
  onOpenContactModal?: () => void;
}

export default function TestimonialsSection({ onOpenContactModal }: TestimonialsSectionProps) {
  return (
    <>
      <section className="section" id="testimonials">
        <div className="wrap">
          <ScrollReveal
            className="section-head"
            style={{ textAlign: 'center', maxWidth: '700px', marginInline: 'auto' }}
          >
            <div>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                Client voices
              </div>
              <h2 className="h2">What teams say about working with us.</h2>
            </div>
            <p className="lede" style={{ marginTop: '20px' }}>
              Real client testimonials coming soon. In the meantime, reach out and we&apos;ll connect you with teams we&apos;ve partnered with.
            </p>
            <div style={{ marginTop: '32px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenContactModal}
              >
                Get in touch →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
