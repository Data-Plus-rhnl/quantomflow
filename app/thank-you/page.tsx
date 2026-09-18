import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Quote Request Received | Quantum Flow Dubai',
  description: 'Thank you for contacting Quantum Flow. We have received your project details.',
  robots: {
    index: false,
    follow: false,
  },
};

interface ThankYouProps {
  searchParams?: Promise<{
    name?: string;
  }>;
}

export default async function ThankYouPage(props: ThankYouProps) {
  const resolvedParams = props.searchParams ? await props.searchParams : {};
  const name = typeof resolvedParams?.name === 'string' ? resolvedParams.name.trim() : '';

  const waMessage = encodeURIComponent(
    name
      ? `Hi Quantum Flow, my name is ${name}. I just submitted a quote request on your website.`
      : 'Hi Quantum Flow, I just submitted a quote request on your website.'
  );

  return (
    <>
      <Navbar />

      <main
        id="top"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '130px',
          paddingBottom: '80px',
        }}
      >
        <div className="wrap" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: '#0D1322',
              border: '1px solid #243049',
              borderRadius: '14px',
              padding: '36px 32px',
              color: '#FFFFFF',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {/* Header: Status Icon & Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#10B981',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '22px',
                }}
              >
                ✓
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#34D399',
                  backgroundColor: '#062E24',
                  border: '1px solid #059669',
                  padding: '5px 12px',
                  borderRadius: '6px',
                }}
              >
                Request Submitted
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: '26px',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 12px 0',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--qf-font-display)',
              }}
            >
              {name ? `Thank you, ${name}.` : 'Request received.'}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: '1.65',
                color: '#CBD5E1',
                margin: '0 0 24px 0',
              }}
            >
              We received your project details. A senior technical consultant in Dubai is reviewing
              your requirements and will get back to you within <strong>1 business day</strong>.
            </p>

            {/* Next Steps Box */}
            <div
              style={{
                backgroundColor: '#131C30',
                border: '1px solid #23314E',
                borderRadius: '10px',
                padding: '18px 20px',
                marginBottom: '26px',
              }}
            >
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#94A3B8',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                What happens next
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#E2E8F0',
                  fontSize: '13.5px',
                  lineHeight: '1.75',
                }}
              >
                <li>Review of your business requirements and timeline.</li>
                <li>Delivery of a customized scope and clear AED quote.</li>
                <li>Direct follow-up via email or WhatsApp to finalize.</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '26px',
              }}
            >
              <a
                href={`https://wa.me/971528903292?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#25D366',
                  color: '#000000',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  padding: '13px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                Chat with us on WhatsApp →
              </a>

              <Link
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1B2438',
                  color: '#FFFFFF',
                  border: '1px solid #2E3C59',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                Return to homepage
              </Link>
            </div>

            {/* Direct Contact Footer */}
            <div
              style={{
                borderTop: '1px solid #202B42',
                paddingTop: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                fontSize: '12.5px',
                color: '#94A3B8',
              }}
            >
              <span>
                Call/WhatsApp: <strong style={{ color: '#FFFFFF' }}>+971 52 890 3292</strong>
              </span>
              <span>
                Email: <strong style={{ color: '#FFFFFF' }}>support@quantumflowit.com</strong>
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
