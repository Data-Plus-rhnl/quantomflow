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
import AIChatBot from '@/components/ui/AIChatBot';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import DeckCard from '@/components/ui/DeckCard';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', overflow: 'visible' }}>
        {/* Card 1: Hero Experience + Trust Credibility + Client Logos */}
        <DeckCard id="hero" zIndex={10} hasRoundedTop={false} hasShadow={false} pinAtTop>
          <Hero />
          <TrustBadges />
          <MarqueeStrip />
        </DeckCard>

        {/* Card 2: Featured Portfolio / Case Studies */}
        <DeckCard id="portfolio" zIndex={20} isAlt>
          <PortfolioSection />
        </DeckCard>

        {/* Card 3: Pricing Packages */}
        <DeckCard id="packages" zIndex={30}>
          <PackagesSection />
        </DeckCard>

        {/* Card 4: Modern Tech Stack Showcase */}
        <DeckCard id="tech" zIndex={40} isAlt>
          <TechShowcase />
        </DeckCard>

        {/* Card 5: Core Digital Services */}
        <DeckCard id="services" zIndex={50}>
          <ServicesSection />
        </DeckCard>

        {/* Card 6: Tailored Solutions by Business Type */}
        <DeckCard id="business-types" zIndex={60} isAlt>
          <BusinessTypesSection />
        </DeckCard>

        {/* Card 7: 5-Stage Engineering Process */}
        <DeckCard id="process" zIndex={70}>
          <ProcessSection />
        </DeckCard>

        {/* Card 8: Why Quantum Flow */}
        <DeckCard id="why-us" zIndex={80} isAlt>
          <WhyUsSection />
        </DeckCard>

        {/* Card 9: About Quantum Flow Team & Philosophy */}
        <DeckCard id="about" zIndex={90}>
          <AboutSection />
        </DeckCard>

        {/* Card 10: Industry Domains & Verticals */}
        <DeckCard id="industries" zIndex={100} isAlt>
          <IndustriesSection />
        </DeckCard>

        {/* Card 11: Editorial Insights & Articles */}
        <DeckCard id="blog" zIndex={110}>
          <BlogSection />
        </DeckCard>

        {/* Card 12: Client Testimonials & Social Proof */}
        <DeckCard id="testimonials" zIndex={120} isAlt>
          <TestimonialsSection />
        </DeckCard>

        {/* Card 13: Instant Proposal / Lead Generation Strip */}
        <DeckCard id="contact" zIndex={130}>
          <LeadGenStrip />
        </DeckCard>
      </main>

      {/* Card 14: Global Footer Sheet */}
      <DeckCard id="footer" zIndex={140} isAlt>
        <Footer />
      </DeckCard>

      <AIChatBot />
      <FloatingWhatsApp />
    </>
  );
}
