import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 sm:py-16 pb-8 text-slate-600">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-14 mb-10 md:mb-14">
          {/* Column 1: Company Profile */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-5">
              <Link to="/">
                <img 
                  src="/assets/logo_naepl.png?v=2" 
                  alt="N Gandhi Advance Engineering Private Limited"
                  className="h-9 sm:h-10 w-auto object-contain" 
                />
              </Link>
            </div>
            
            <p className="text-[13.5px] leading-relaxed text-slate-500 max-w-[380px] mb-5 sm:mb-6">
              ISO 9001:2015 certified precision engineering company delivering CNC machining, 
              fabrication, and industrial solutions.
            </p>

            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-slate-300 bg-white text-xs font-medium text-slate-700">
              <span className="w-[7px] h-[7px] rounded-full bg-emerald-600" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Column 2: Pages Navigation */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.12em] text-slate-900 uppercase mb-4 sm:mb-5">PAGES</h5>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[13.5px] text-slate-600">
              <li>
                <Link to="/" className="cursor-pointer transition-colors duration-200 hover:text-emerald-700 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="cursor-pointer transition-colors duration-200 hover:text-emerald-700 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/product" className="cursor-pointer transition-colors duration-200 hover:text-emerald-700 font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industry" className="cursor-pointer transition-colors duration-200 hover:text-emerald-700 font-medium">
                  Industry
                </Link>
              </li>
              <li>
                <Link to="/brochure" className="cursor-pointer transition-colors duration-200 hover:text-emerald-700 font-medium">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/contact" className="cursor-pointer transition-colors duration-200 hover:text-emerald-700 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.12em] text-slate-900 uppercase mb-4 sm:mb-5">CONTACT</h5>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[13.5px] text-slate-600">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-emerald-700 shrink-0" />
                <span>+91 (022) 2850-XXXX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-emerald-700 shrink-0" />
                <a href="mailto:info@ngandhi.com" className="hover:text-emerald-700 transition-colors">
                  info@ngandhi.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={14} className="text-emerald-700 shrink-0" />
                <a href="https://naepl.r5advertising.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">
                  naepl.r5advertising.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-6 sm:pt-7 text-[12px] sm:text-[12.5px] text-slate-500 text-center sm:text-left">
          <div>
            © 2026 N Gandhi Advance Engineering Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-slate-400">
            Made in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
