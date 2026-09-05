'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import MarqueeStrip from '@/components/home/MarqueeStrip';
import PortfolioSection from '@/components/home/PortfolioSection';
import PackagesSection from '@/components/home/PackagesSection';
import TechShowcase from '@/components/home/TechShowcase';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import AboutSection from '@/components/home/AboutSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import BlogSection from '@/components/home/BlogSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaBand from '@/components/home/CtaBand';
import ContactModal from '@/components/contact/ContactModal';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { ServicePackage } from '@/lib/types';

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  const openContactModal = (pkg?: ServicePackage) => {
    if (pkg) {
      setSelectedPackage(pkg);
    } else {
      setSelectedPackage(null);
    }
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <Navbar onOpenContactModal={() => openContactModal()} />

      <main id="top">
        <Hero onOpenContactModal={() => openContactModal()} />
        <TrustBadges />
        <MarqueeStrip />
        <PortfolioSection onOpenContactModal={() => openContactModal()} />
        <PackagesSection onSelectPackage={(pkg) => openContactModal(pkg)} />
        <TechShowcase />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <AboutSection />
        <IndustriesSection />
        <BlogSection />
        <TestimonialsSection onOpenContactModal={() => openContactModal()} />
        <CtaBand />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        initialPackage={selectedPackage}
      />
    </>
  );
}
