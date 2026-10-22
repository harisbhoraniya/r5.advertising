import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { BackToProducts } from '../components/BackToProducts';
import { ProductOverview } from '../components/ProductOverview';
import { TrustRow } from '../components/TrustRow';
import { ProductRange } from '../components/ProductRange';
import { ApplicationsSection } from '../components/ApplicationsSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroBanner 
        bannerImage="/assets/product_banner.png"
        altText="Our Product Range - Precision-engineered components and solutions"
      />
      <BackToProducts />
      <ProductOverview />
      <TrustRow />
      <ProductRange />
      <ApplicationsSection />
    </main>
  );
};

export default HomePage;
