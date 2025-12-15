import React from 'react';
import { MarketingNav } from '../components/marketing/MarketingNav';
import { Hero } from '../components/marketing/Hero';
import { Problems } from '../components/marketing/Problems';
import { Features } from '../components/marketing/Features';
import { HowItWorks } from '../components/marketing/HowItWorks';
import { Testimonials } from '../components/marketing/Testimonials';
import { FinalCTA } from '../components/marketing/FinalCTA';
import { MarketingFooter } from '../components/marketing/MarketingFooter';
export function Marketing() {
  return <div className="min-h-screen bg-white">
      <MarketingNav />
      <div className="pt-16">
        <Hero />
        <Problems />
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <FinalCTA />
        <MarketingFooter />
      </div>
    </div>;
}