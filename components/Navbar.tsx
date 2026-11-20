'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  path: string;
}

// 9 Stainless Steel Cable Tie Products (N-LOC Series)
const cableTieProducts: ProductItem[] = [
  { id: 'roller-ball', title: 'Roller Ball Cable Tie', path: '/products/n-loc/roller-ball' },
  { id: 'roller-ball-hd', title: 'Roller Ball Heavy Duty Cable Tie', path: '/products/n-loc/roller-ball-hd' },
  { id: 'releasable', title: 'Releasable Cable Tie', path: '/products/n-loc/releasable' },
  { id: 'ladder', title: 'Ladder Cable Tie', path: '/products/n-loc/ladder' },
  { id: 'zig-zag', title: 'Ball Lock Spring Type', path: '/products/n-loc/zig-zag' },
  { id: 'zig-zag-hd', title: 'Ball Lock Spring Type Heavy Duty', path: '/products/n-loc/zig-zag-hd' },
  { id: 'marker-tag', title: 'Cable Marker Tag', path: '/products/n-loc/marker-tag' },
  { id: 'marker-plates', title: 'Marker Plates', path: '/products/n-loc/marker-plates' },
  { id: 'alphanumeric-characters', title: 'Alphanumeric Characters', path: '/products/n-loc/alphanumeric-characters' },
];

// Cable Cleats Products
const cableCleatProducts: ProductItem[] = [
  { id: 'trefoil-cleat', title: 'Trefoil Cable Cleats', path: '/products/cable-cleat/trefoil-cleat' },
  { id: 'single-cleat', title: 'Single Cable Cleats', path: '/products/cable-cleat/single-cleat' },
];

// Electrical Lugs & Terminals Products (LUGX Series)
const lugProducts: ProductItem[] = [
  { id: 'copper-one-hole-standard', title: 'Copper One-Hole Standard Cable Lugs', path: '/products/lugx/copper-one-hole-standard' },
  { id: 'copper-one-hole-long-barrel', title: 'Copper One-Hole Long Barrel Cable Lugs', path: '/products/lugx/copper-one-hole-long-barrel' },
  { id: 'copper-one-hole-heavy-duty', title: 'Copper One-Hole Heavy Duty Cable Lugs', path: '/products/lugx/copper-one-hole-heavy-duty' },
  { id: 'copper-one-hole-bell-mouth', title: 'Copper One-Hole Bell Mouth Cable Lugs', path: '/products/lugx/copper-one-hole-bell-mouth' },
  { id: 'copper-one-hole-narrow-palm', title: 'Copper One-Hole Narrow Palm Cable Lugs', path: '/products/lugx/copper-one-hole-narrow-palm' },
  { id: 'copper-two-hole-heavy-duty', title: 'Copper Two-Hole Heavy Duty Cable Lugs', path: '/products/lugx/copper-two-hole-heavy-duty' },
  { id: 'copper-two-hole-long-barrel', title: 'Copper Two-Hole Long Barrel Cable Lugs', path: '/products/lugx/copper-two-hole-long-barrel' },
  { id: 'copper-two-hole-long-barrel-heavy-duty', title: 'Copper Two-Hole Long Barrel Heavy Duty', path: '/products/lugx/copper-two-hole-long-barrel-heavy-duty' },
  { id: 'copper-four-hole-transformer', title: 'Copper Four-Hole Transformer Lugs', path: '/products/lugx/copper-four-hole-transformer' },
  { id: 'aluminium-one-hole-standard', title: 'Aluminium One-Hole Crimping Terminals', path: '/products/lugx/aluminium-one-hole-standard' },
  { id: 'aluminium-two-hole-standard', title: 'Aluminium Two-Hole Crimping Terminals', path: '/products/lugx/aluminium-two-hole-standard' },
  { id: 'aluminium-one-hole-long-barrel', title: 'Aluminium One-Hole Long Barrel Terminals', path: '/products/lugx/aluminium-one-hole-long-barrel' },
  { id: 'copper-ring-open-closed-soldering', title: 'Copper Ring Terminals – Soldering Type', path: '/products/lugx/copper-ring-open-closed-soldering' },
  { id: 'bimetallic-friction-welded', title: 'Bi-Metallic Friction-Welded Terminals', path: '/products/lugx/bimetallic-friction-welded' },
  { id: 'bimetallic-copper-ring', title: 'Bi-Metallic Copper Ring Terminals', path: '/products/lugx/bimetallic-copper-ring' },
  { id: 'copper-crimping-pin', title: 'Copper Crimping Pin Terminals', path: '/products/lugx/copper-crimping-pin' },
  { id: 'copper-crimping-ring', title: 'Copper Crimping Ring Terminals', path: '/products/lugx/copper-crimping-ring' },
  { id: 'copper-crimping-fork', title: 'Copper Crimping Fork Terminals', path: '/products/lugx/copper-crimping-fork' },
  { id: 'copper-ring-tongue-fork', title: 'Copper Crimping Ring Tongue Fork Terminals', path: '/products/lugx/copper-ring-tongue-fork' },
];

// Descriptive product naming per client feedback
const otherProducts: ProductItem[] = [
  { id: 'cnc-machine-component', title: 'CNC Machined Components', path: '/products/cnc-machine-component' },
  { id: 'press-parts', title: 'Sheet Metal Components', path: '/products/sheet-metal-press-parts' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cableTiesOpen, setCableTiesOpen] = useState(false);
  const [cableCleatsOpen, setCableCleatsOpen] = useState(false);
  const [lugsOpen, setLugsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCableTiesOpen, setMobileCableTiesOpen] = useState(false);
  const [mobileCableCleatsOpen, setMobileCableCleatsOpen] = useState(false);
  const [mobileLugsOpen, setMobileLugsOpen] = useState(false);

  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const cableTiesCloseTimeoutRef = useRef<number | null>(null);
  const cableCleatsCloseTimeoutRef = useRef<number | null>(null);
  const lugsCloseTimeoutRef = useRef<number | null>(null);
  const router = useRouter();
  const navigate = (p: string) => router.push(p);
  const pathname = usePathname() || '/';
  const location = { pathname };

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileCableTiesOpen(false);
    setMobileCableCleatsOpen(false);
    setMobileLugsOpen(false);
    setIsOpen(false);
    setCableTiesOpen(false);
    setCableCleatsOpen(false);
    setLugsOpen(false);
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
      setCableTiesOpen(false);
      setCableCleatsOpen(false);
      setLugsOpen(false);
    }, 180);
  };

  const handleCableTiesEnter = () => {
    if (cableTiesCloseTimeoutRef.current) {
      clearTimeout(cableTiesCloseTimeoutRef.current);
      cableTiesCloseTimeoutRef.current = null;
    }
    if (cableCleatsCloseTimeoutRef.current) clearTimeout(cableCleatsCloseTimeoutRef.current);
    if (lugsCloseTimeoutRef.current) clearTimeout(lugsCloseTimeoutRef.current);
    setCableCleatsOpen(false);
    setLugsOpen(false);
    setCableTiesOpen(true);
  };

  const handleCableTiesLeave = () => {
    if (cableTiesCloseTimeoutRef.current) {
      clearTimeout(cableTiesCloseTimeoutRef.current);
    }
    cableTiesCloseTimeoutRef.current = window.setTimeout(() => {
      setCableTiesOpen(false);
    }, 160);
  };

  const handleCableCleatsEnter = () => {
    if (cableCleatsCloseTimeoutRef.current) {
      clearTimeout(cableCleatsCloseTimeoutRef.current);
      cableCleatsCloseTimeoutRef.current = null;
    }
    if (cableTiesCloseTimeoutRef.current) clearTimeout(cableTiesCloseTimeoutRef.current);
    if (lugsCloseTimeoutRef.current) clearTimeout(lugsCloseTimeoutRef.current);
    setCableTiesOpen(false);
    setLugsOpen(false);
    setCableCleatsOpen(true);
  };

  const handleCableCleatsLeave = () => {
    if (cableCleatsCloseTimeoutRef.current) {
      clearTimeout(cableCleatsCloseTimeoutRef.current);
    }
    cableCleatsCloseTimeoutRef.current = window.setTimeout(() => {
      setCableCleatsOpen(false);
    }, 160);
  };

  const handleLugsEnter = () => {
    if (lugsCloseTimeoutRef.current) {
      clearTimeout(lugsCloseTimeoutRef.current);
      lugsCloseTimeoutRef.current = null;
    }
    if (cableTiesCloseTimeoutRef.current) clearTimeout(cableTiesCloseTimeoutRef.current);
    if (cableCleatsCloseTimeoutRef.current) clearTimeout(cableCleatsCloseTimeoutRef.current);
    setCableTiesOpen(false);
    setCableCleatsOpen(false);
    setLugsOpen(true);
  };

  const handleLugsLeave = () => {
    if (lugsCloseTimeoutRef.current) {
      clearTimeout(lugsCloseTimeoutRef.current);
    }
    lugsCloseTimeoutRef.current = window.setTimeout(() => {
      setLugsOpen(false);
    }, 160);
  };

  const handleNavigate = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (cableTiesCloseTimeoutRef.current) clearTimeout(cableTiesCloseTimeoutRef.current);
    if (cableCleatsCloseTimeoutRef.current) clearTimeout(cableCleatsCloseTimeoutRef.current);
    if (lugsCloseTimeoutRef.current) clearTimeout(lugsCloseTimeoutRef.current);
    setIsOpen(false);
    setCableTiesOpen(false);
    setCableCleatsOpen(false);
    setLugsOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] h-[64px] sm:h-[72px] flex items-center transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between w-full h-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo_naepl.webp?v=2"
            alt="N GANDHI ADVANCE ENGINEERING PRIVATE LIMITED - ISO 9001:2015"
            width={250}
            height={42}
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

            {/* Desktop Dropdown Flyout Card */}
            {isOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72 rounded-2xl bg-[#004428] shadow-[0_12px_40px_rgba(0,68,40,0.35),0_4px_16px_rgba(0,0,0,0.14)] overflow-visible transition-all duration-200 ease-out origin-top z-50 animate-in fade-in-0 zoom-in-95"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Top Center Triangular Pointer Notch */}
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#004428] rotate-45 rounded-sm shadow-sm" />

                <ul className="relative py-2 list-none m-0 p-0">
                  {/* 1. Stainless Steel Cable Ties Link with Nested Sub-Flyout */}
                  <li
                    className="relative"
                    onMouseEnter={handleCableTiesEnter}
                    onMouseLeave={handleCableTiesLeave}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white transition-colors duration-150 select-none cursor-pointer ${
                        cableTiesOpen ? 'bg-white/15' : 'hover:bg-white/15'
                      }`}
                      onClick={(e) => handleNavigate('/products/n-loc', e)}
                    >
                      <span>Stainless Steel Cable Ties</span>
                      <ChevronRight
                        size={14}
                        className={`opacity-70 shrink-0 ml-2 transition-transform duration-150 ${
                          cableTiesOpen ? 'translate-x-0.5 opacity-100 text-emerald-200' : ''
                        }`}
                      />
                    </div>
                    <div className="mx-5 h-px bg-white/15" />

                    {/* Sub-dropdown flyout on hover */}
                    {cableTiesOpen && (
                      <div
                        className="absolute left-[calc(100%-4px)] top-0 pl-2 w-72 z-50 animate-in fade-in-0 zoom-in-95 origin-top-left"
                        onMouseEnter={handleCableTiesEnter}
                        onMouseLeave={handleCableTiesLeave}
                      >
                        <div className="rounded-2xl bg-[#004428] shadow-[0_14px_44px_rgba(0,68,40,0.45),0_6px_20px_rgba(0,0,0,0.22)] border border-white/10 py-2 overflow-hidden">
                          <ul className="list-none m-0 p-0">
                            {cableTieProducts.map((subItem, sIdx) => (
                              <li key={subItem.id}>
                                <div
                                  className="block px-4 py-2 text-[0.8125rem] font-medium text-white/90 hover:text-white cursor-pointer transition-colors duration-150 hover:bg-white/15"
                                  onClick={(e) => handleNavigate(subItem.path, e)}
                                >
                                  {subItem.title}
                                </div>
                                {sIdx < cableTieProducts.length - 1 && (
                                  <div className="mx-4 h-px bg-white/10" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* 2. Cable Cleats & Accessories Link with Nested Sub-Flyout */}
                  <li
                    className="relative"
                    onMouseEnter={handleCableCleatsEnter}
                    onMouseLeave={handleCableCleatsLeave}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white transition-colors duration-150 select-none cursor-pointer ${
                        cableCleatsOpen ? 'bg-white/15' : 'hover:bg-white/15'
                      }`}
                      onClick={(e) => handleNavigate('/products/cable-cleat', e)}
                    >
                      <span>Cable Cleats & Accessories</span>
                      <ChevronRight
                        size={14}
                        className={`opacity-70 shrink-0 ml-2 transition-transform duration-150 ${
                          cableCleatsOpen ? 'translate-x-0.5 opacity-100 text-emerald-200' : ''
                        }`}
                      />
                    </div>
                    <div className="mx-5 h-px bg-white/15" />

                    {/* Sub-dropdown flyout on hover */}
                    {cableCleatsOpen && (
                      <div
                        className="absolute left-[calc(100%-4px)] top-0 pl-2 w-72 z-50 animate-in fade-in-0 zoom-in-95 origin-top-left"
                        onMouseEnter={handleCableCleatsEnter}
                        onMouseLeave={handleCableCleatsLeave}
                      >
                        <div className="rounded-2xl bg-[#004428] shadow-[0_14px_44px_rgba(0,68,40,0.45),0_6px_20px_rgba(0,0,0,0.22)] border border-white/10 py-2 overflow-hidden">
                          <ul className="list-none m-0 p-0">
                            {cableCleatProducts.map((subItem, sIdx) => (
                              <li key={subItem.id}>
                                <div
                                  className="block px-4 py-2.5 text-[0.8125rem] font-medium text-white/90 hover:text-white cursor-pointer transition-colors duration-150 hover:bg-white/15"
                                  onClick={(e) => handleNavigate(subItem.path, e)}
                                >
                                  {subItem.title}
                                </div>
                                {sIdx < cableCleatProducts.length - 1 && (
                                  <div className="mx-4 h-px bg-white/10" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* 3. Electrical Enclosures & Junction Boxes */}
                  <li 
                    onMouseEnter={() => {
                      setCableTiesOpen(false);
                      setCableCleatsOpen(false);
                      setLugsOpen(false);
                    }}
                  >
                    <div
                      className="flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white cursor-pointer transition-colors duration-150 hover:bg-white/15"
                      onClick={(e) => handleNavigate('/products/link-box', e)}
                    >
                      <span>Electrical Enclosures & Junction Boxes</span>
                      <ArrowRight size={13} className="opacity-60 shrink-0 ml-2" />
                    </div>
                    <div className="mx-5 h-px bg-white/15" />
                  </li>

                  {/* 4. Electrical Lugs & Terminals with Nested Sub-Flyout */}
                  <li
                    className="relative"
                    onMouseEnter={handleLugsEnter}
                    onMouseLeave={handleLugsLeave}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white transition-colors duration-150 select-none cursor-pointer ${
                        lugsOpen ? 'bg-white/15' : 'hover:bg-white/15'
                      }`}
                      onClick={(e) => handleNavigate('/products/lugx', e)}
                    >
                      <span>Electrical Lugs & Terminals</span>
                      <ChevronRight
                        size={14}
                        className={`opacity-70 shrink-0 ml-2 transition-transform duration-150 ${
                          lugsOpen ? 'translate-x-0.5 opacity-100 text-emerald-200' : ''
                        }`}
                      />
                    </div>
                    <div className="mx-5 h-px bg-white/15" />

                    {/* Sub-dropdown flyout on hover */}
                    {lugsOpen && (
                      <div
                        className="absolute left-[calc(100%-4px)] top-0 pl-2 w-80 z-50 animate-in fade-in-0 zoom-in-95 origin-top-left"
                        onMouseEnter={handleLugsEnter}
                        onMouseLeave={handleLugsLeave}
                      >
                        <div className="rounded-2xl bg-[#004428] shadow-[0_14px_44px_rgba(0,68,40,0.45),0_6px_20px_rgba(0,0,0,0.22)] border border-white/10 py-2 max-h-[390px] overflow-y-auto">
                          <ul className="list-none m-0 p-0">
                            {lugProducts.map((subItem, sIdx) => (
                              <li key={subItem.id}>
                                <div
                                  className="block px-4 py-2 text-[0.8125rem] font-medium text-white/90 hover:text-white cursor-pointer transition-colors duration-150 hover:bg-white/15"
                                  onClick={(e) => handleNavigate(subItem.path, e)}
                                >
                                  {subItem.title}
                                </div>
                                {sIdx < lugProducts.length - 1 && (
                                  <div className="mx-4 h-px bg-white/10" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* 5. Remaining products (CNC & Press Parts) */}
                  {otherProducts.map((item, idx) => (
                    <li 
                      key={item.id}
                      onMouseEnter={() => {
                        setCableTiesOpen(false);
                        setCableCleatsOpen(false);
                        setLugsOpen(false);
                      }}
                    >
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
          <Link href="/catalogue"
            className={`text-[14.5px] transition-all duration-200 select-none cursor-pointer relative py-1 ${
              location.pathname === '/catalogue' || location.pathname === '/brochure' || location.pathname === '/download'
                ? 'text-emerald-800 font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-700 after:rounded-full' 
                : 'text-slate-700 font-medium hover:text-emerald-800'
            }`}
          >
            Catalogue
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

          <a
            href="https://www.ngandhi.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit N. Gandhi Group website"
            className="flex items-center pl-4 border-l border-slate-200 hover:opacity-85 transition-opacity"
          >
            <img
              src="/assets/logo_ngandhi_group.png"
              alt="N. Gandhi Group"
              className="h-[26px] lg:h-[30px] w-auto object-contain"
            />
          </a>
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

            {/* Mobile Products Accordion */}
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
                  {/* Stainless Steel Cable Ties with Sub-Accordion */}
                  <div>
                    <div className="flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white transition-colors duration-150 hover:bg-white/15">
                      <Link href="/products/n-loc"
                        className="flex-1 text-white no-underline"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>Stainless Steel Cable Ties</span>
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle cable ties sub-menu"
                        className="p-1 text-white/80 hover:text-white bg-transparent border-none cursor-pointer outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileCableTiesOpen(!mobileCableTiesOpen);
                        }}
                      >
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${mobileCableTiesOpen ? 'rotate-180 text-emerald-300' : ''}`} 
                        />
                      </button>
                    </div>
                    <div className="mx-5 h-px bg-white/15" />

                    {/* 9 Cable Tie Sub-Items on Mobile */}
                    {mobileCableTiesOpen && (
                      <div className="bg-black/20 py-1 pl-3 pr-2 animate-in fade-in-0 duration-150">
                        {cableTieProducts.map((subItem, sIdx) => (
                          <div key={subItem.id}>
                            <Link
                              href={subItem.path}
                              className="block px-4 py-2.5 text-[0.8rem] font-normal text-white/90 no-underline transition-colors duration-150 hover:bg-white/15 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                            {sIdx < cableTieProducts.length - 1 && (
                              <div className="mx-4 h-px bg-white/10" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cable Cleats with Sub-Accordion */}
                  <div>
                    <div className="flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white transition-colors duration-150 hover:bg-white/15">
                      <Link href="/products/cable-cleat"
                        className="flex-1 text-white no-underline"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>Cable Cleats & Accessories</span>
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle cable cleats sub-menu"
                        className="p-1 text-white/80 hover:text-white bg-transparent border-none cursor-pointer outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileCableCleatsOpen(!mobileCableCleatsOpen);
                        }}
                      >
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${mobileCableCleatsOpen ? 'rotate-180 text-emerald-300' : ''}`} 
                        />
                      </button>
                    </div>
                    <div className="mx-5 h-px bg-white/15" />

                    {/* Cable Cleat Sub-Items on Mobile */}
                    {mobileCableCleatsOpen && (
                      <div className="bg-black/20 py-1 pl-3 pr-2 animate-in fade-in-0 duration-150">
                        {cableCleatProducts.map((subItem, sIdx) => (
                          <div key={subItem.id}>
                            <Link
                              href={subItem.path}
                              className="block px-4 py-2.5 text-[0.8rem] font-normal text-white/90 no-underline transition-colors duration-150 hover:bg-white/15 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                            {sIdx < cableCleatProducts.length - 1 && (
                              <div className="mx-4 h-px bg-white/10" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Electrical Enclosures & Junction Boxes Direct Link */}
                  <div>
                    <Link href="/products/link-box"
                      className="flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Electrical Enclosures & Junction Boxes</span>
                      <ArrowRight size={13} className="opacity-60" />
                    </Link>
                    <div className="mx-5 h-px bg-white/15" />
                  </div>

                  {/* Electrical Lugs & Terminals with Sub-Accordion */}
                  <div>
                    <div className="flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white transition-colors duration-150 hover:bg-white/15">
                      <Link href="/products/lugx"
                        className="flex-1 text-white no-underline"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>Electrical Lugs & Terminals</span>
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle lugs sub-menu"
                        className="p-1 text-white/80 hover:text-white bg-transparent border-none cursor-pointer outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileLugsOpen(!mobileLugsOpen);
                        }}
                      >
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${mobileLugsOpen ? 'rotate-180 text-emerald-300' : ''}`} 
                        />
                      </button>
                    </div>
                    <div className="mx-5 h-px bg-white/15" />

                    {/* 19 Lug Sub-Items on Mobile */}
                    {mobileLugsOpen && (
                      <div className="bg-black/20 py-1 pl-3 pr-2 max-h-[320px] overflow-y-auto animate-in fade-in-0 duration-150">
                        {lugProducts.map((subItem, sIdx) => (
                          <div key={subItem.id}>
                            <Link
                              href={subItem.path}
                              className="block px-4 py-2.5 text-[0.8rem] font-normal text-white/90 no-underline transition-colors duration-150 hover:bg-white/15 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                            {sIdx < lugProducts.length - 1 && (
                              <div className="mx-4 h-px bg-white/10" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
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

            <Link href="/catalogue"
              className={`flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-semibold transition-colors ${
                location.pathname === '/catalogue' || location.pathname === '/brochure' || location.pathname === '/download'
                  ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-700 pl-2'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Catalogue</span>
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

            <a
              href="https://www.ngandhi.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit N. Gandhi Group website"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 px-3 rounded-lg flex items-center hover:bg-slate-50 transition-colors"
            >
              <img
                src="/assets/logo_ngandhi_group.png"
                alt="N. Gandhi Group"
                className="h-[28px] w-auto object-contain"
              />
            </a>

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
