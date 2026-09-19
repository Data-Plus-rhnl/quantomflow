import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Solutions for your business</div>
          <h2 className="h2">
            Tailored websites.
            <br />
            Designed for growth.
          </h2>
          <p className="lede" style={{ marginInline: 'auto', marginTop: '16px' }}>
            We design and build custom websites, e-commerce stores, and mobile apps tailored around how you run your business&mdash;start to finish.
          </p>
        </ScrollReveal>

        <div className="svc-grid">
          <ScrollReveal>
            <article className="svc-card">
              <span className="svc-num">01</span>
              <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 9h18M8 21h8M12 18v3" />
              </svg>
              <h3>E-Commerce & Stores</h3>
              <p>
                Sell products directly online. Beautiful storefronts with secure checkout, automated inventory, discount systems, and easy shipping integrations.
              </p>
              <div className="svc-tags">
                <span>Shopify</span>
                <span>WooCommerce</span>
                <span>Custom Shops</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <article className="svc-card">
              <span className="svc-num">02</span>
              <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="6" y="2" width="12" height="20" rx="2.5" />
                <path d="M10 18h4" />
              </svg>
              <h3>Business & Brand Sites</h3>
              <p>
                Clean, fast, and modern websites for startups, corporate brands, real estate brokers, consultants, and creative portfolios.
              </p>
              <div className="svc-tags">
                <span>Corporate Sites</span>
                <span>SaaS Landing Pages</span>
                <span>Real Estate</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={160}>
            <article className="svc-card">
              <span className="svc-num">03</span>
              <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M7 17a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18 11.5a3.5 3.5 0 0 1-.5 7H7Z" />
              </svg>
              <h3>Custom Web & Mobile Apps</h3>
              <p>
                Specialized systems built for your workflow. From table booking and online food ordering to client dashboards and customer portals.
              </p>
              <div className="svc-tags">
                <span>Online Ordering</span>
                <span>Booking Portals</span>
                <span>Dashboards</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <article className="svc-card">
              <span className="svc-num">04</span>
              <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
              </svg>
              <h3>Local Marketing & SEO</h3>
              <p>
                Get found online. We optimize your website and Google Maps presence to ensure local customers find you first when searching for services.
              </p>
              <div className="svc-tags">
                <span>Google Maps</span>
                <span>Local Rankings</span>
                <span>SEO Audits</span>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
