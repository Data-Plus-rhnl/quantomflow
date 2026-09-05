import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function CtaBand() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <ScrollReveal>
          <div className="cta-band">
            <div>
              <h3>Ready to start your project or ask a question?</h3>
              <p>
                Tell us what you want to build. We&apos;ll reply within one business day with a clear plan and pricing — no obligation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="mailto:support@quantumflowit.com"
                className="btn btn-primary"
              >
                support@quantumflowit.com
              </a>
              <a href="tel:+971528903292" className="btn btn-ghost">
                +971 52 890 3292
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
