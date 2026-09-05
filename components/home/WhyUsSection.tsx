import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhyUsSection() {
  return (
    <section className="section" id="why-us">
      <div className="wrap">
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Why Quantum Flow</div>
          <h2 className="h2">Built for local business growth.</h2>
          <p className="lede" style={{ marginInline: 'auto', marginTop: '16px' }}>
            We design beautiful, reliable web platforms that work flawlessly for your users and are easy for you to manage day-to-day.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="why-grid">
            <div className="why-item">
              <svg className="why-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h4>Zero commissions</h4>
              <p>
                Keep 100% of your sales. We set up your ordering and booking systems so you never pay monthly commissions to third-party apps.
              </p>
            </div>

            <div className="why-item">
              <svg className="why-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h4>Designed to be updated</h4>
              <p>
                Easily edit menus, change prices, or upload new products on your own. No coding or ongoing developer costs required.
              </p>
            </div>

            <div className="why-item">
              <svg className="why-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <h4>Mobile-first focus</h4>
              <p>
                Most customers visit on their phones. We optimize every button, form, and page to be fast and frictionless on mobile screens.
              </p>
            </div>

            <div className="why-item">
              <svg className="why-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <h4>Dubai-based support</h4>
              <p>
                We are based right here in Dubai. We understand the local market and are always available for quick updates or assistance.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
