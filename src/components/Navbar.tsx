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
  const closeTimeoutRef = useRef<number | null>(null);
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
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setSubOpen(false);
    }, 200);
  };

  const handleSubMouseEnter = () => {
    if (subTimeoutRef.current) {
      clearTimeout(subTimeoutRef.current);
      subTimeoutRef.current = null;
    }
    setSubOpen(true);
  };

  const handleSubMouseLeave = () => {
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
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
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
            className="relative flex items-center h-full"
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
                className="absolute top-[calc(100%+2px)] left-0 min-w-[230px] bg-white border border-slate-200 rounded-[10px] p-1.5 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_8px_10px_-6px_rgba(15,23,42,0.04)] z-[1000] before:content-[''] before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-3.5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* 1. N-Loc with Roller Ball flyout submenu only */}
                <div
                  className="relative"
                  onMouseEnter={handleSubMouseEnter}
                  onMouseLeave={handleSubMouseLeave}
                >
                  <div
                    className={`relative flex items-center justify-between gap-2.5 px-3 py-2 text-[13.5px] rounded-md cursor-pointer select-none transition-all duration-150 ${
                      subOpen ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-800 font-medium hover:bg-emerald-50 hover:text-emerald-800 hover:font-semibold'
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
                      className="absolute -top-1 left-[calc(100%+4px)] min-w-[240px] bg-white border border-slate-200 rounded-lg p-1 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_8px_10px_-6px_rgba(15,23,42,0.04)] z-[1001] before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3.5"
                      onMouseEnter={handleSubMouseEnter}
                      onMouseLeave={handleSubMouseLeave}
                    >
                      {nlocSubItems.map((subItem) => (
                        <div
                          key={subItem.id}
                          className="flex items-center justify-between px-3 py-2 text-[13px] font-medium text-slate-800 rounded-md cursor-pointer whitespace-nowrap transition-all duration-150 hover:bg-emerald-50 hover:text-emerald-800 hover:font-semibold"
                          onClick={(e) => handleNavigate(subItem.path, e)}
                        >
                          <span>{subItem.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. All other products without any sub-dropdown */}
                {otherProducts.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex items-center justify-between gap-2.5 px-3 py-2 text-[13.5px] font-medium text-slate-800 rounded-md cursor-pointer select-none transition-all duration-150 hover:bg-emerald-50 hover:text-emerald-800 hover:font-semibold"
                    onMouseEnter={() => setSubOpen(false)}
                    onClick={(e) => handleNavigate(item.path, e)}
                  >
                    <span className="text-[13.5px] leading-tight">{item.title}</span>
                  </div>
                ))}
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
