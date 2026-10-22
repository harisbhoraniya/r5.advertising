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

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full min-h-screen flex flex-col bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/industry" element={<IndustryPage />} />
          <Route path="/industries" element={<Navigate to="/industry" replace />} />
          <Route path="/brochure" element={<BrochurePage />} />
          <Route path="/download" element={<Navigate to="/brochure" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/n-loc" element={<NLocPage />} />
          <Route path="/nloc" element={<Navigate to="/n-loc" replace />} />
          <Route path="/products/n-loc" element={<Navigate to="/n-loc" replace />} />
          <Route path="/roller-ball" element={<RollerBallPage />} />
          <Route path="/roller" element={<Navigate to="/roller-ball" replace />} />
          <Route path="/products/roller-ball" element={<Navigate to="/roller-ball" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
