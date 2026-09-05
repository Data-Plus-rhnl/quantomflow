'use client';

import React from 'react';
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
import BusinessTypesSection from '@/components/home/BusinessTypesSection';
import BlogSection from '@/components/home/BlogSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LeadGenStrip from '@/components/home/LeadGenStrip';
import CtaBand from '@/components/home/CtaBand';
import AIChatBot from '@/components/ui/AIChatBot';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <TrustBadges />
        <MarqueeStrip />
        <PortfolioSection />
        <PackagesSection />
        <TechShowcase />
        <ServicesSection />
        <BusinessTypesSection />
        <ProcessSection />
        <WhyUsSection />
        <AboutSection />
        <IndustriesSection />
        <BlogSection />
        <TestimonialsSection />
        <LeadGenStrip />
        <CtaBand />
      </main>
      <Footer />
      <AIChatBot />
      <FloatingWhatsApp />
    </>
  );
}
