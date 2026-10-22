import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { BackToProducts } from '../components/BackToProducts';
import { ProductOverview } from '../components/ProductOverview';
import { TrustRow } from '../components/TrustRow';
import { ProductRange } from '../components/ProductRange';
import { ApplicationsSection } from '../components/ApplicationsSection';

export const NLocPage: React.FC = () => {
  return (
    <main className="w-full">
      <HeroBanner 
        bannerImage="/assets/hero_banner.png"
        altText="N-LOC Stainless Steel Cable Ties"
      />
      <BackToProducts />
      <ProductOverview />
      <TrustRow />
      <ProductRange />
      <ApplicationsSection />
    </main>
  );
};

export default NLocPage;
