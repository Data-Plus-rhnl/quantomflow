'use client';

import React, { useState, useEffect } from 'react';
import { ContactFormData, ServicePackage } from '@/lib/types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: ServicePackage | null;
}

export default function ContactModal({ isOpen, onClose, initialPackage }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: 'E-Commerce & Online Store',
    packageSelected: initialPackage?.name || 'Growth & Direct Commerce',
    budgetRange: 'AED 5,000 – AED 15,000',
    message: '',
  });

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        packageSelected: initialPackage.name,
      }));
    }
  }, [initialPackage]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to submit form.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      projectType: 'E-Commerce & Online Store',
      packageSelected: 'Growth & Direct Commerce',
      budgetRange: 'AED 5,000 – AED 15,000',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 8, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'heroFadeIn 0.3s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '640px',
          background: 'var(--qf-bg-raised)',
          border: '1px solid var(--qf-accent-line)',
          borderRadius: 'var(--qf-radius-lg)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(79, 209, 255, 0.25)',
          padding: '36px',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--qf-text-muted)',
            fontSize: '24px',
            lineHeight: 1,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 'var(--qf-radius-sm)',
            transition: 'color 0.2s',
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                background: 'rgba(110, 231, 183, 0.15)',
                border: '2px solid var(--qf-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--qf-success)',
                fontSize: '28px',
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontFamily: 'var(--qf-font-display)',
                fontSize: '24px',
                color: 'var(--qf-text)',
                marginBottom: '12px',
              }}
            >
              Consultation Request Received!
            </h3>
            <p
              style={{
                color: 'var(--qf-text-muted)',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: '28px',
              }}
            >
              Thank you, <strong>{formData.name}</strong>. Our senior technical consultant in Dubai will review your business requirements and reply within one business day with a customized scope and quote.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              <a
                href="https://wa.me/971528903292?text=Hello%20Quantum%20Flow%2C%20I%20just%20submitted%20a%20project%20inquiry%20and%20would%20like%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ borderColor: 'rgba(110, 231, 183, 0.4)', color: '#6EE7B7' }}
              >
                Chat on WhatsApp Now
              </a>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleReset}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow">Free Consultation · UAE</div>
              <h2
                style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: 'var(--qf-text)',
                  marginBottom: '8px',
                }}
              >
                Get a Free Scope & Proposal
              </h2>
              <p style={{ color: 'var(--qf-text-muted)', fontSize: '14px' }}>
                Tell us about your business. We&apos;ll prepare a bespoke architecture plan and pricing estimate within 24 hours.
              </p>
            </div>

            {status === 'error' && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#FCA5A5',
                  padding: '12px 16px',
                  borderRadius: 'var(--qf-radius-sm)',
                  fontSize: '14px',
                  marginBottom: '20px',
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      color: 'var(--qf-text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Omar Al-Hashimi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--qf-bg-alt)',
                      border: '1px solid var(--qf-line)',
                      borderRadius: 'var(--qf-radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--qf-text)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      color: 'var(--qf-text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. omar@business.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--qf-bg-alt)',
                      border: '1px solid var(--qf-line)',
                      borderRadius: 'var(--qf-radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--qf-text)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      color: 'var(--qf-text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--qf-bg-alt)',
                      border: '1px solid var(--qf-line)',
                      borderRadius: 'var(--qf-radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--qf-text)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      color: 'var(--qf-text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Al Wasl Cafe"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--qf-bg-alt)',
                      border: '1px solid var(--qf-line)',
                      borderRadius: 'var(--qf-radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--qf-text)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      color: 'var(--qf-text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Service Package of Interest
                  </label>
                  <select
                    value={formData.packageSelected}
                    onChange={(e) => setFormData({ ...formData, packageSelected: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--qf-bg-alt)',
                      border: '1px solid var(--qf-line)',
                      borderRadius: 'var(--qf-radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--qf-text)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="Starter Launchpad (AED 4,500)">Starter Launchpad (AED 4,500)</option>
                    <option value="Growth & Direct Commerce (AED 8,900)">Growth & Direct Commerce (AED 8,900)</option>
                    <option value="Enterprise Scale & Custom Apps (AED 16,500+)">Enterprise Scale & Custom Apps (AED 16,500+)</option>
                    <option value="Google Ads & SEO Campaign Setup">Google Ads & SEO Campaign Setup</option>
                    <option value="Custom Scope / Not Sure Yet">Custom Scope / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--qf-font-mono)',
                      fontSize: '12px',
                      color: 'var(--qf-text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Industry
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--qf-bg-alt)',
                      border: '1px solid var(--qf-line)',
                      borderRadius: 'var(--qf-radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--qf-text)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="Restaurant & Cafe Ordering">Restaurant & Cafe</option>
                    <option value="Dental & Aesthetic Clinic">Dental / Aesthetic Clinic</option>
                    <option value="Salon & Spa Reservation">Salon & Spa</option>
                    <option value="E-Commerce & Retail Store">E-Commerce & Retail</option>
                    <option value="Corporate / DIFC Advisory">Corporate / Legal / Advisory</option>
                    <option value="Other Dubai Local Business">Other Local Business</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '12px',
                    color: 'var(--qf-text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Tell us about your goals *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. We want to stop paying 30% to Talabat and need a direct online ordering website with Apple Pay and Google Maps ranking in Jumeirah..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--qf-bg-alt)',
                    border: '1px solid var(--qf-line)',
                    borderRadius: 'var(--qf-radius-sm)',
                    padding: '12px 14px',
                    color: 'var(--qf-text)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="https://wa.me/971528903292?text=Hello%20Quantum%20Flow%2C%20I%20am%20interested%20in%20a%20website%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    color: '#6EE7B7',
                    fontFamily: 'var(--qf-font-mono)',
                  }}
                >
                  💬 Prefer WhatsApp? Chat with an engineer →
                </a>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={onClose}
                    disabled={status === 'submitting'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Request Proposal →'}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
