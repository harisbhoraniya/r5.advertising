'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  path: string;
}

// Sub-items for N-Loc dropdown (Commented out for now as dropdown is disabled)
/*
const nlocSubItems: ProductItem[] = [
  { id: 'roller-ball', title: 'Roller Ball Cable Tie', path: '/products/n-loc/roller-ball' },
  { id: 'roller-ball-hd', title: 'Roller Ball Heavy Duty Cable Tie', path: '/products/n-loc/roller-ball' },
  { id: 'releasable', title: 'Releasable Cable Tie', path: '/products/n-loc/roller-ball' },
  { id: 'ladder', title: 'Ladder Cable Tie', path: '/products/n-loc/roller-ball' },
  { id: 'marker-tag', title: 'Cable Marker Tag', path: '/products/n-loc/roller-ball' },
  { id: 'marker-plates', title: 'Marker Plates', path: '/products/n-loc/roller-ball' },
];
*/

const otherProducts: ProductItem[] = [
  { id: 'cable-cleat', title: 'Cable Cleats', path: '/products/cable-cleat' },
  { id: 'link-box', title: 'LINK BOX', path: '/products/link-box' },
  { id: 'lugx', title: 'LUGX', path: '/products/lugx' },
  { id: 'cnc-machine-component', title: 'CNC Machined Component', path: '/products/cnc-machine-component' },
  { id: 'press-parts', title: 'Sheet Metal Press Parts', path: '/products/sheet-metal-press-parts' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [subOpen, setSubOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  // const [mobileNLocOpen, setMobileNLocOpen] = useState(false);

  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  // const openSubTimeoutRef = useRef<number | null>(null);
  // const subTimeoutRef = useRef<number | null>(null);
  const router = useRouter();
  const navigate = (p: string) => router.push(p);
  const pathname = usePathname() || '/';
  const location = { pathname };

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsOpen(false);
    // setSubOpen(false);
  }, [location.pathname]);

  const isProductsActive =
    location.pathname.startsWith('/products') ||
    location.pathname.startsWith('/product') ||
    location.pathname.startsWith('/n-loc') ||
    location.pathname.startsWith('/roller-ball') ||
    location.pathname.startsWith('/cable-cleat') ||
    location.pathname.startsWith('/link-box') ||
    location.pathname.startsWith('/lugx') ||
    location.pathname.startsWith('/cnc') ||
    location.pathname.startsWith('/sheet-metal') ||
    location.pathname.startsWith('/press-parts');

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
      // setSubOpen(false);
    }, 180);
  };

  /*
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
  */

  const handleNavigate = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    // if (openSubTimeoutRef.current) clearTimeout(openSubTimeoutRef.current);
    // if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    setIsOpen(false);
    // setSubOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] h-[64px] sm:h-[72px] flex items-center transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between w-full h-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo_naepl.png?v=2"
            alt="N GANDHI ADVANCE ENGINEERING PRIVATE LIMITED - ISO 9001:2015"
            className="h-[34px] sm:h-[42px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 h-full">
          <Link href="/" 
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/' 
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            Home
          </Link>
          <Link href="/about-us" 
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/about' || location.pathname === '/about-us'
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            About Us
          </Link>

          {/* Desktop Products Dropdown Trigger */}
          <div
            className={`relative inline-flex items-center select-none cursor-pointer py-1 transition-all duration-200 ${
              isProductsActive
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full'
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1">
              <Link href="/products"
                className={`text-[14.5px] tracking-tight no-underline transition-colors duration-200 ${
                  isProductsActive 
                    ? 'text-emerald-800 font-semibold' 
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
                onClick={(e) => handleNavigate('/products', e)}
              >
                Products
              </Link>
              <button 
                type="button"
                aria-label="Open products menu"
                className={`p-0 bg-transparent border-none cursor-pointer transition-colors duration-200 outline-none flex items-center ${
                  isProductsActive ? 'text-emerald-800' : 'text-slate-500 hover:text-emerald-800'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                <ChevronDown 
                  size={13} 
                  className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-800' : ''}`} 
                />
              </button>
            </div>

            {/* Desktop Dropdown Flyout Card (ngcco style with our theme) */}
            {isOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-60 rounded-2xl bg-[#004428] shadow-[0_12px_40px_rgba(0,68,40,0.35),0_4px_16px_rgba(0,0,0,0.14)] overflow-visible transition-all duration-200 ease-out origin-top z-50 animate-in fade-in-0 zoom-in-95"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Top Center Triangular Pointer Notch */}
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#004428] rotate-45 rounded-sm shadow-sm" />

                <ul className="relative py-2 list-none m-0 p-0">
                  {/* 1. N-Loc Link (Level 2 Flyout Submenu Commented Out as requested) */}
                  <li className="relative">
                    <div>
                      <div
                        className="flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white transition-colors duration-150 select-none cursor-pointer hover:bg-white/15"
                        onClick={(e) => handleNavigate('/products/n-loc', e)}
                      >
                        <span>N-LOC</span>
                        <ArrowRight size={13} className="opacity-60 shrink-0 ml-2" />
                      </div>

                      {/* Level 2 Flyout Menu (Sub-items) - Commented out for now
                      {subOpen && (
                        <div
                          className="absolute left-[calc(100%+6px)] top-0 w-64 rounded-2xl bg-[#003820] shadow-[0_12px_40px_rgba(0,56,32,0.45),0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-200 ease-out origin-top-left z-50 animate-in fade-in-0 zoom-in-95"
                          onMouseEnter={handleSubMouseEnter}
                          onMouseLeave={handleSubMouseLeave}
                        >
                          <ul className="py-2 list-none m-0 p-0">
                            {nlocSubItems.map((subItem, sIdx) => (
                              <li key={subItem.id}>
                                <div
                                  className="flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white cursor-pointer transition-colors duration-150 hover:bg-white/15"
                                  onClick={(e) => handleNavigate(subItem.path, e)}
                                >
                                  <span>{subItem.title}</span>
                                  <ArrowRight size={13} className="opacity-60 shrink-0 ml-2" />
                                </div>
                                {sIdx < nlocSubItems.length - 1 && (
                                  <div className="mx-5 h-px bg-white/15" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      */}
                    </div>
                    <div className="mx-5 h-px bg-white/15" />
                  </li>

                  {/* 2. All other products with divider & right arrow */}
                  {otherProducts.map((item, idx) => (
                    <li key={item.id}>
                      <div
                        className="flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white cursor-pointer transition-colors duration-150 hover:bg-white/15"
                        onClick={(e) => handleNavigate(item.path, e)}
                      >
                        <span>{item.title}</span>
                        <ArrowRight size={13} className="opacity-60 shrink-0 ml-2" />
                      </div>
                      {idx < otherProducts.length - 1 && (
                        <div className="mx-5 h-px bg-white/15" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/industry"
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/industry' || location.pathname.startsWith('/industry')
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            Industry
          </Link>
          <Link href="/brochure"
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/brochure' || location.pathname === '/download'
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            Download
          </Link>
          <Link href="/contact"
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/contact'
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            Contact
          </Link>
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
            <Link href="/"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] transition-colors ${
                location.pathname === '/' 
                  ? 'bg-emerald-50 text-emerald-800 font-bold' 
                  : 'text-slate-800 font-semibold hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
            </Link>

            <Link href="/about-us"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] transition-colors ${
                location.pathname === '/about' || location.pathname === '/about-us'
                  ? 'bg-emerald-50 text-emerald-800 font-bold' 
                  : 'text-slate-800 font-semibold hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About Us</span>
            </Link>

            {/* Mobile Products Accordion (matching ngcco UI with our theme) */}
            <div className="my-1">
              <div className="flex items-center justify-between rounded-xl transition-all duration-200 hover:bg-black/3">
                <Link href="/products"
                  className={`flex-1 px-3.5 py-3 text-[15px] font-semibold no-underline transition-colors duration-200 ${
                    isProductsActive ? 'text-emerald-800 font-bold' : 'text-slate-800 hover:text-emerald-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <button
                  type="button"
                  aria-label="Toggle products menu"
                  className="px-3.5 py-3 bg-transparent border-none cursor-pointer outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileProductsOpen(!mobileProductsOpen);
                  }}
                >
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 text-slate-500 ${mobileProductsOpen ? 'rotate-180 text-emerald-800' : ''}`} 
                  />
                </button>
              </div>

              {mobileProductsOpen && (
                <div className="ml-2 mt-1 mb-2 rounded-xl bg-[#004428] overflow-hidden shadow-sm animate-in fade-in-0 duration-200">
                  {/* N-Loc Direct Link (Submenu dropdown commented out for now) */}
                  <div>
                    <Link href="/products/n-loc"
                      className="flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>N-LOC</span>
                      <ArrowRight size={13} className="opacity-60" />
                    </Link>

                    {/* Mobile N-Loc Submenu - Commented out for now
                    {mobileNLocOpen && (
                      <div className="ml-4 mr-3 mb-2 rounded-xl bg-[#003820] overflow-hidden">
                        {nlocSubItems.map((subItem, sIdx) => (
                          <div key={subItem.id}>
                            <Link href={subItem.path}
                              className="flex items-center justify-between px-4 py-2.5 text-[0.8125rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>{subItem.title}</span>
                              <ArrowRight size={12} className="opacity-60" />
                            </Link>
                            {sIdx < nlocSubItems.length - 1 && (
                              <div className="mx-4 h-px bg-white/15" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    */}
                    <div className="mx-5 h-px bg-white/15" />
                  </div>

                  {/* Other Products with Dividers & Right Arrow */}
                  {otherProducts.map((item, idx) => (
                    <div key={item.id}>
                      <Link href={item.path}
                        className="flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.title}</span>
                        <ArrowRight size={13} className="opacity-60" />
                      </Link>
                      {idx < otherProducts.length - 1 && (
                        <div className="mx-5 h-px bg-white/15" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/industry"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] transition-colors ${
                location.pathname === '/industry' || location.pathname.startsWith('/industry')
                  ? 'bg-emerald-50 text-emerald-800 font-bold' 
                  : 'text-slate-800 font-semibold hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Industry</span>
            </Link>

            <Link href="/brochure"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold transition-colors ${
                location.pathname === '/brochure' || location.pathname === '/download'
                  ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-700 pl-2'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Download</span>
            </Link>

            <Link href="/contact"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold transition-colors ${
                location.pathname === '/contact'
                  ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-700 pl-2'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
            </Link>

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
