'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function RequestQuoteFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    packageSelected: 'Landing Page Offer (AED 999)',
    message: '',
  });

  useEffect(() => {
    const pkg = searchParams.get('package')?.toLowerCase();
    if (!pkg) return;

    if (pkg.includes('starter') || pkg.includes('4,500') || pkg.includes('launchpad')) {
      setFormData((prev) => ({ ...prev, packageSelected: 'Starter Launchpad (AED 4,500)' }));
    } else if (pkg.includes('growth') || pkg.includes('8,900') || pkg.includes('commerce')) {
      setFormData((prev) => ({ ...prev, packageSelected: 'Growth & Direct Commerce (AED 8,900)' }));
    } else if (pkg.includes('enterprise') || pkg.includes('16,500') || pkg.includes('scale')) {
      setFormData((prev) => ({ ...prev, packageSelected: 'Enterprise Scale & Custom Apps (AED 16,500+)' }));
    } else if (pkg.includes('landing') || pkg.includes('999')) {
      setFormData((prev) => ({ ...prev, packageSelected: 'Landing Page Offer (AED 999)' }));
    } else if (pkg.includes('ad') || pkg.includes('marketing')) {
      setFormData((prev) => ({ ...prev, packageSelected: 'Google Ads & Performance Marketing' }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          companyName: formData.companyName,
          packageSelected: formData.packageSelected,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to submit form. Please try again.');
      }

      // Redirect directly to Thank You page for Google Ads conversion tracking
      router.push('/thank-you');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />

      <main
        id="top"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
      >
        <div className="wrap" style={{ width: '100%', maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#0c1220',
              border: '1px solid #1e293b',
              borderRadius: '16px',
              padding: 'clamp(28px, 5vw, 48px)',
              color: '#ffffff',
            }}
          >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#062e24',
                  border: '1px solid #059669',
                  color: '#34d399',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                Free Consultation · Dubai, UAE
              </div>

              <h1
                style={{
                  fontSize: 'clamp(26px, 4vw, 36px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  margin: '0 0 12px 0',
                  fontFamily: 'var(--qf-font-display)',
                  letterSpacing: '-0.02em',
                }}
              >
                Request a Free Scope & Quote
              </h1>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#94a3b8',
                  maxWidth: '560px',
                  margin: '0 auto',
                }}
              >
                Tell us about your project requirements. A senior consultant in Dubai will evaluate
                your specifications and send a proposal within <strong>1 business day</strong>.
              </p>
            </div>

            {/* The Form */}
            <div
              style={{
                backgroundColor: '#101626',
                border: '1px solid #1f2a3f',
                borderRadius: '12px',
                padding: 'clamp(20px, 4vw, 32px)',
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Row 1: Name and Company */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="quote-name"
                      style={{
                        display: 'block',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '6px',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Al Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#0a0e1a',
                        border: '1px solid #27354f',
                        borderRadius: '8px',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-company"
                      style={{
                        display: 'block',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '6px',
                      }}
                    >
                      Company / Brand Name
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      placeholder="e.g. Al Wasl Cafe LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#0a0e1a',
                        border: '1px solid #27354f',
                        borderRadius: '8px',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Email */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="quote-phone"
                      style={{
                        display: 'block',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '6px',
                      }}
                    >
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#0a0e1a',
                        border: '1px solid #27354f',
                        borderRadius: '8px',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      style={{
                        display: 'block',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '6px',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#0a0e1a',
                        border: '1px solid #27354f',
                        borderRadius: '8px',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    htmlFor="quote-package"
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '6px',
                    }}
                  >
                    Service Package of Interest
                  </label>
                  <select
                    id="quote-package"
                    value={formData.packageSelected}
                    onChange={(e) => setFormData({ ...formData, packageSelected: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0a0e1a',
                      border: '1px solid #27354f',
                      borderRadius: '8px',
                      padding: '11px 14px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="Landing Page Offer (AED 999)">Landing Page Offer (AED 999)</option>
                    <option value="Starter Launchpad (AED 4,500)">Starter Launchpad (AED 4,500)</option>
                    <option value="Growth & Direct Commerce (AED 8,900)">Growth & Direct Commerce (AED 8,900)</option>
                    <option value="Enterprise Scale & Custom Apps (AED 16,500+)">Enterprise Scale & Custom Apps (AED 16,500+)</option>
                    <option value="Google Ads & Performance Marketing">Google Ads & Performance Marketing</option>
                    <option value="Custom Project / Not Sure Yet">Custom Project / Not Sure Yet</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    htmlFor="quote-message"
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '6px',
                    }}
                  >
                    Project Details & Goals *
                  </label>
                  <textarea
                    id="quote-message"
                    required
                    rows={4}
                    placeholder="Tell us what you want to build, any reference websites, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0a0e1a',
                      border: '1px solid #27354f',
                      borderRadius: '8px',
                      padding: '11px 14px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div
                    style={{
                      backgroundColor: '#450a0a',
                      border: '1px solid #991b1b',
                      color: '#f87171',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      marginBottom: '16px',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    backgroundColor: status === 'submitting' ? '#1e293b' : '#25d366',
                    color: status === 'submitting' ? '#94a3b8' : '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 20px',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Quote Request →'}
                </button>

                <div
                  style={{
                    fontSize: '12px',
                    color: '#64748b',
                    textAlign: 'center',
                    marginTop: '12px',
                  }}
                >
                  Your information is private. We respond within 24 business hours.
                </div>
              </form>
            </div>

            {/* Direct Contact Footer */}
            <div
              style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid #1e293b',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                fontSize: '13px',
                color: '#94a3b8',
              }}
            >
              <span>
                Direct WhatsApp:{' '}
                <a
                  href="https://wa.me/971528903292"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25d366', textDecoration: 'none', fontWeight: 600 }}
                >
                  +971 52 890 3292
                </a>
              </span>
              <span>
                Direct Email:{' '}
                <a
                  href="mailto:support@quantumflowit.com"
                  style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}
                >
                  support@quantumflowit.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
        Loading Quote Request Form...
      </div>
    }>
      <RequestQuoteFormContent />
    </Suspense>
  );
}
