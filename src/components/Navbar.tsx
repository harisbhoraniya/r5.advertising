import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  path: string;
}

const nlocSubItems: ProductItem[] = [
  { id: 'roller-ball', title: 'Roller Ball Cable Tie', path: '/roller-ball' },
  { id: 'roller-ball-hd', title: 'Roller Ball Heavy Duty Cable Tie', path: '/roller-ball' },
  { id: 'releasable', title: 'Releasable Cable Tie', path: '/roller-ball' },
  { id: 'ladder', title: 'Ladder Cable Tie', path: '/roller-ball' },
  { id: 'marker-tag', title: 'Cable Marker Tag', path: '/roller-ball' },
  { id: 'marker-plates', title: 'Marker Plates', path: '/roller-ball' },
];

const otherProducts: ProductItem[] = [
  { id: 'cable-cleat', title: 'Cable Cleat', path: '/product#cable-cleat' },
  { id: 'link-box', title: 'Link Box', path: '/product#link-box' },
  { id: 'lugx', title: 'LUGX', path: '/product#lugx' },
  { id: 'cnc-machine-component', title: 'CNC Machine Component', path: '/product#cnc-machine-component' },
  { id: 'press-parts', title: 'Sheet Metal Press Parts', path: '/product#press-parts' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileNLocOpen, setMobileNLocOpen] = useState(false);

  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const openSubTimeoutRef = useRef<number | null>(null);
  const subTimeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsOpen(false);
    setSubOpen(false);
  }, [location.pathname]);

  const isProductsActive =
    location.pathname === '/product' ||
    location.pathname === '/products' ||
    location.pathname.startsWith('/n-loc') ||
    location.pathname.startsWith('/roller-ball');

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (!isOpen) {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(true);
      }, 120);
    }
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setSubOpen(false);
    }, 180);
  };

  const handleSubMouseEnter = () => {
    if (subTimeoutRef.current) {
      clearTimeout(subTimeoutRef.current);
      subTimeoutRef.current = null;
    }
    if (!subOpen) {
      if (openSubTimeoutRef.current) clearTimeout(openSubTimeoutRef.current);
      openSubTimeoutRef.current = window.setTimeout(() => {
        setSubOpen(true);
      }, 100);
    }
  };

  const handleSubMouseLeave = () => {
    if (openSubTimeoutRef.current) {
      clearTimeout(openSubTimeoutRef.current);
      openSubTimeoutRef.current = null;
    }
    if (subTimeoutRef.current) {
      clearTimeout(subTimeoutRef.current);
    }
    subTimeoutRef.current = window.setTimeout(() => {
      setSubOpen(false);
    }, 180);
  };

  const handleNavigate = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openSubTimeoutRef.current) clearTimeout(openSubTimeoutRef.current);
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    setIsOpen(false);
    setSubOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 h-[64px] sm:h-[72px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between w-full h-full">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo_naepl.png?v=2"
            alt="N GANDHI ADVANCE ENGINEERING PRIVATE LIMITED - ISO 9001:2015"
            className="h-[34px] sm:h-[42px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 h-full">
          <Link 
            to="/" 
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/' 
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            Home
          </Link>
          <span className="text-[14.5px] font-medium text-slate-700 transition-all duration-200 select-none cursor-pointer hover:text-emerald-800 py-1">
            About
          </span>

          {/* Desktop Products Dropdown Trigger */}
          <div
            className="relative inline-flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/product"
              className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer inline-flex items-center gap-1.5 relative py-1 ${
                isProductsActive 
                  ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                  : 'text-slate-700 font-medium hover:text-emerald-800'
              }`}
              onClick={(e) => handleNavigate('/product', e)}
            >
              Products
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 text-current ${isOpen ? 'rotate-180' : ''}`} 
              />
            </Link>

            {/* Desktop Dropdown Flyout Card */}
            {isOpen && (
              <div
                className="absolute top-full left-0 pt-2.5 z-[1000]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="min-w-[230px] bg-white border border-slate-200/90 rounded-xl p-1.5 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.06)] animate-in fade-in-0 duration-150">
                  {/* 1. N-Loc with Roller Ball flyout submenu only */}
                  <div
                    className="relative"
                    onMouseEnter={handleSubMouseEnter}
                    onMouseLeave={handleSubMouseLeave}
                  >
                    <div
                      className={`relative flex items-center justify-between gap-2.5 px-3 py-2 text-[13.5px] rounded-lg cursor-pointer select-none transition-all duration-150 ${
                        subOpen ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                      onClick={(e) => handleNavigate('/n-loc', e)}
                    >
                      <span className="text-[13.5px] leading-tight">N-Loc</span>
                      <ChevronRight 
                        size={13} 
                        className={`shrink-0 transition-transform duration-150 ${subOpen ? 'text-emerald-800 translate-x-0.5' : 'text-slate-400'}`} 
                      />
                    </div>

                    {subOpen && (
                      <div
                        className="absolute -top-1 left-full pl-2 z-[1001]"
                        onMouseEnter={handleSubMouseEnter}
                        onMouseLeave={handleSubMouseLeave}
                      >
                        <div className="min-w-[245px] bg-white border border-slate-200/90 rounded-xl p-1.5 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.06)]">
                          {nlocSubItems.map((subItem) => (
                            <div
                              key={subItem.id}
                              className="flex items-center justify-between px-3 py-2 text-[13px] font-medium text-slate-700 rounded-lg cursor-pointer whitespace-nowrap transition-all duration-150 hover:bg-emerald-50 hover:text-emerald-800"
                              onClick={(e) => handleNavigate(subItem.path, e)}
                            >
                              <span>{subItem.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. All other products without any sub-dropdown */}
                  {otherProducts.map((item) => (
                    <div
                      key={item.id}
                      className="relative flex items-center justify-between gap-2.5 px-3 py-2 text-[13.5px] font-medium text-slate-700 rounded-lg cursor-pointer select-none transition-all duration-150 hover:bg-emerald-50 hover:text-emerald-800"
                      onMouseEnter={() => {
                        if (openSubTimeoutRef.current) clearTimeout(openSubTimeoutRef.current);
                        setSubOpen(false);
                      }}
                      onClick={(e) => handleNavigate(item.path, e)}
                    >
                      <span className="text-[13.5px] leading-tight">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className="text-[14.5px] font-medium text-slate-700 transition-all duration-200 select-none cursor-pointer hover:text-emerald-800 py-1">
            Industry
          </span>
          <span className="text-[14.5px] font-medium text-slate-700 transition-all duration-200 select-none cursor-pointer hover:text-emerald-800 py-1">
            Brochure
          </span>
          <span className="text-[14.5px] font-medium text-slate-700 transition-all duration-200 select-none cursor-pointer hover:text-emerald-800 py-1">
            Contact
          </span>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:text-emerald-800 hover:bg-slate-100 transition-colors cursor-pointer outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-[64px] sm:top-[72px] bottom-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto px-5 py-4 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to="/"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] transition-colors ${
                location.pathname === '/' 
                  ? 'bg-emerald-50 text-emerald-800 font-bold' 
                  : 'text-slate-800 font-semibold hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
            </Link>

            <div 
              className="flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About</span>
            </div>

            {/* Mobile Products Accordion */}
            <div className="rounded-lg overflow-hidden bg-slate-50/70 border border-slate-100 my-1">
              <div 
                className="flex items-center justify-between py-3 px-3 text-[15px] font-semibold text-slate-800 cursor-pointer select-none"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span className={isProductsActive ? 'text-emerald-800 font-bold' : 'text-slate-800'}>
                  Products
                </span>
                <ChevronDown 
                  size={18} 
                  className={`text-slate-500 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-emerald-800' : ''}`} 
                />
              </div>

              {mobileProductsOpen && (
                <div className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-slate-200/60 bg-white">
                  {/* N-Loc & Sub-Products */}
                  <div>
                    <div 
                      className="flex items-center justify-between py-2 px-2 text-[13.5px] font-semibold text-slate-800 hover:bg-slate-50 rounded-md cursor-pointer select-none"
                      onClick={() => setMobileNLocOpen(!mobileNLocOpen)}
                    >
                      <span>N-Loc</span>
                      <ChevronDown 
                        size={15} 
                        className={`text-slate-400 transition-transform duration-200 ${mobileNLocOpen ? 'rotate-180 text-emerald-800' : ''}`} 
                      />
                    </div>

                    {mobileNLocOpen && (
                      <div className="pl-3 py-1 flex flex-col gap-1 border-l-2 border-emerald-600/40 ml-2 mt-1">
                        {nlocSubItems.map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            className="py-1.5 px-2 text-[13px] text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60 rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Products List */}
                  <div className="border-t border-slate-100 pt-1 mt-1 flex flex-col gap-0.5">
                    {otherProducts.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className="py-2 px-2 text-[13.5px] text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-md font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Industry</span>
            </div>

            <div 
              className="flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Brochure</span>
            </div>

            <div 
              className="flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
            </div>

            {/* Mobile Footer Badge */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 px-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>ISO 9001:2015 Precision Engineering</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
