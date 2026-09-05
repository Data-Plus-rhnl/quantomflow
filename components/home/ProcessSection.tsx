import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function ProcessSection() {
  return (
    <section className="section section-alt" id="process">
      <div className="wrap">
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>How we work</div>
          <h2 className="h2">A simple, collaborative process.</h2>
        </ScrollReveal>

        <ScrollReveal className="flow-wrap">
          <div className="flow-steps">
            <div className="flow-step">
              <div className="fnum">01</div>
              <h4>Talk & plan</h4>
              <p>
                We discuss your business goals, your menu or product catalog, and plan the layout and pages together.
              </p>
            </div>
            <div className="flow-step">
              <div className="fnum">02</div>
              <h4>Design & content</h4>
              <p>
                We design a custom site that matches your brand style and feels inviting to your customers.
              </p>
            </div>
            <div className="flow-step">
              <div className="fnum">03</div>
              <h4>Build & integrate</h4>
              <p>
                We build the site, hook up secure payment links, upload products/menus, and test it all on mobile.
              </p>
            </div>
            <div className="flow-step">
              <div className="fnum">04</div>
              <h4>Launch & support</h4>
              <p>
                We push your website live, submit it to Google, and show you how to easily manage it in 15 minutes.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
