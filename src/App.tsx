import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { NLocPage } from './pages/NLocPage';
import { RollerBallPage } from './pages/RollerBallPage';

import { AboutPage } from './pages/AboutPage';
import { IndustryPage } from './pages/IndustryPage';
import { BrochurePage } from './pages/BrochurePage';
import { ContactPage } from './pages/ContactPage';

import { CableCleatPage } from './pages/CableCleatPage';
import { LinkBoxPage } from './pages/LinkBoxPage';
import { LugxPage } from './pages/LugxPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full min-h-screen flex flex-col bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/industry" element={<IndustryPage />} />
          <Route path="/industries" element={<Navigate to="/industry" replace />} />
          <Route path="/brochure" element={<BrochurePage />} />
          <Route path="/download" element={<Navigate to="/brochure" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Products Catalog & Individual Product Pages */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product" element={<Navigate to="/products" replace />} />

          <Route path="/products/n-loc" element={<NLocPage />} />
          <Route path="/n-loc" element={<Navigate to="/products/n-loc" replace />} />
          <Route path="/nloc" element={<Navigate to="/products/n-loc" replace />} />

          <Route path="/products/n-loc/roller-ball" element={<RollerBallPage />} />
          <Route path="/products/roller-ball" element={<Navigate to="/products/n-loc/roller-ball" replace />} />
          <Route path="/roller-ball" element={<Navigate to="/products/n-loc/roller-ball" replace />} />
          <Route path="/roller" element={<Navigate to="/products/n-loc/roller-ball" replace />} />

          <Route path="/products/cable-cleat" element={<CableCleatPage />} />
          <Route path="/cable-cleat" element={<Navigate to="/products/cable-cleat" replace />} />
          <Route path="/cable-cleats" element={<Navigate to="/products/cable-cleat" replace />} />

          <Route path="/products/link-box" element={<LinkBoxPage />} />
          <Route path="/link-box" element={<Navigate to="/products/link-box" replace />} />
          <Route path="/junction-box" element={<Navigate to="/products/link-box" replace />} />

          <Route path="/products/lugx" element={<LugxPage />} />
          <Route path="/lugx" element={<Navigate to="/products/lugx" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
