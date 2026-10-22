import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

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
  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const openSubTimeoutRef = useRef<number | null>(null);
  const subTimeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 h-[72px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between w-full h-full">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo_naepl.png?v=2"
            alt="N GANDHI ADVANCE ENGINEERING PRIVATE LIMITED - ISO 9001:2015"
            className="h-[42px] w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 h-full">
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
      </div>
    </header>
  );
};

export default Navbar;
