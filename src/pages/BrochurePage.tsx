import React from 'react';
import { Download } from 'lucide-react';

const highlights = [
  'N-Loc Brochure',
  'Link Box Brochure',
  'LUGX Brochure',
];

export const BrochurePage: React.FC = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Opens a new tab or prompts download
    alert('Thank you for your interest! The comprehensive corporate brochure PDF download will begin shortly.');
  };

  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Information & Download */}
            <div>
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-4 sm:mb-5 flex items-center gap-2.5">
                <span className="inline-block w-4 h-[1.5px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />
                Brochure
              </p>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium text-[#1a1a1a] leading-[1.08] tracking-tight mb-4 sm:mb-6">
                Download Our<br />
                <span className="text-[#004428]">Company</span> <span className="text-[#8c2442]">Profile.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-base font-light text-[#6b6b6b] leading-relaxed mb-8 max-w-[520px]">
                Explore detailed information about our <strong className="text-[#004428] font-medium">products, capabilities</strong>, infrastructure, and quality standards — all in one comprehensive document.
              </p>

              {/* Highlights List */}
              <div className="flex flex-col gap-1.5 mb-9 sm:mb-11 max-w-[500px]">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="group flex items-center gap-3.5 py-2.5 px-3 rounded border border-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-[#004428]/[0.06] hover:to-transparent hover:border-[#004428]/15 hover:translate-x-1.5 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004428] shrink-0 transition-all duration-300 group-hover:bg-[#8c2442] group-hover:scale-150" />
                    <span className="text-[13.5px] sm:text-[14.5px] font-light text-[#1a1a1a]">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Download Button */}
              <a
                href="#download"
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#1a1a1a] text-white px-8 py-4 rounded text-[13.5px] sm:text-[14.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.30)] hover:-translate-y-0.5 hover:border-transparent w-full sm:w-auto justify-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={16} className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span className="relative z-10">Download Brochure</span>
              </a>
            </div>

            {/* Right Column: High-End Brochure Mockup */}
            <div className="relative h-[340px] sm:h-[460px] lg:h-[520px] w-full flex items-center justify-center">
              {/* Subtle ambient decorative backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#004428]/10 via-transparent to-[#8c2442]/10 rounded-2xl filter blur-xl pointer-events-none" />

              {/* Main Brochure Mockup Card */}
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_28px_72px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_84px_rgba(0,0,0,0.22)] border border-slate-200/80 bg-[#0c120e]">
                <img
                  src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?w=900&q=85"
                  alt="Company Profile Brochure Cover"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004428]/85 via-[#004428]/55 to-[#111317]/80" />

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#34d399] to-[#8c2442]" />

                {/* Text Overlay */}
                <div className="absolute inset-0 p-7 sm:p-10 md:p-12 flex flex-col justify-end text-white">
                  <div className="text-right">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 mb-2">
                      Company Profile
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white tracking-tight leading-snug mb-2.5">
                      N Gandhi Advance<br />Engineering Pvt. Ltd.
                    </h3>
                    <p className="text-xs sm:text-[13px] font-light text-white/75">
                      ISO 9001:2015 Certified · Made in India
                    </p>
                    <div className="mt-5 w-14 h-[2px] bg-gradient-to-r from-[#004428] to-[#8c2442] ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrochurePage;
