import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 pb-8 text-slate-600">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-9 md:gap-14 mb-14">
          {/* Column 1: Company Profile */}
          <div>
            <div className="mb-5">
              <img 
                src="/assets/logo_naepl.png?v=2" 
                alt="N Gandhi Advance Engineering Private Limited"
                className="h-10 w-auto object-contain" 
              />
            </div>
            
            <p className="text-[13.5px] leading-relaxed text-slate-500 max-w-[380px] mb-6">
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
            <h5 className="text-xs font-bold tracking-[0.12em] text-slate-900 uppercase mb-5">PAGES</h5>
            <ul className="flex flex-col gap-3 text-[13.5px] text-slate-600">
              <li><span className="cursor-pointer transition-colors duration-200 hover:text-emerald-600">Home</span></li>
              <li><span className="cursor-pointer transition-colors duration-200 hover:text-emerald-600">About</span></li>
              <li><span className="cursor-pointer transition-colors duration-200 hover:text-emerald-600">Products</span></li>
              <li><span className="cursor-pointer transition-colors duration-200 hover:text-emerald-600">Industry</span></li>
              <li><span className="cursor-pointer transition-colors duration-200 hover:text-emerald-600">Brochure</span></li>
              <li><span className="cursor-pointer transition-colors duration-200 hover:text-emerald-600">Contact</span></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.12em] text-slate-900 uppercase mb-5">CONTACT</h5>
            <ul className="flex flex-col gap-3 text-[13.5px] text-slate-600">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-slate-500 shrink-0" />
                <span>[Add Number]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-slate-500 shrink-0" />
                <span>[Add Email]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={14} className="text-slate-500 shrink-0" />
                <span>ngandhi.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-slate-500 shrink-0" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-7 text-[12.5px] text-slate-500">
          <div>
            © 2026 N Gandhi Advance Engineering Pvt. Ltd. All rights reserved.
          </div>
          <div>
            Made in India
          </div>
        </div>
      </div>
    </footer>
  );
};
