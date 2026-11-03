'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  img: string;
}

// 8 Verified Industries per client instructions
// "Process Instrumentation & Control" removed and replaced with "Automobile"
// Long descriptions and paragraphs removed for a clean, professional image-grid layout
const industries: IndustryItem[] = [
  {
    id: 'electrical-control-systems',
    name: 'Electrical & Control Systems',
    img: '/assets/sector_control_panel.webp',
  },
  {
    id: 'robotics-industrial-automation',
    name: 'Robotics & Industrial Automation',
    img: '/assets/sector_robotics_automation.webp',
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy (Solar & Wind)',
    img: '/assets/sector_renewable_energy.webp',
  },
  {
    id: 'oil-gas-petrochemicals',
    name: 'Oil & Gas / Petrochemicals',
    img: '/assets/sector_oil_gas.webp',
  },
  {
    id: 'marine-shipbuilding',
    name: 'Marine & Shipbuilding',
    img: '/assets/sector_marine_shipbuilding.webp',
  },
  {
    id: 'infrastructure-rail-transit',
    name: 'Infrastructure & Rail Transit',
    img: '/assets/sector_metro_infrastructure.webp',
  },
  {
    id: 'automobile',
    name: 'Automobile',
    img: '/assets/hero_slides/slide_5_end_to_end.webp',
  },
  {
    id: 'water-wastewater-treatment',
    name: 'Water & Wastewater Treatment',
    img: '/assets/sector_water_treatment.webp',
  },
];

const sectorChips = [
  'Electrical & Control Systems',
  'Robotics & Industrial Automation',
  'Renewable Energy (Solar & Wind)',
  'Oil & Gas / Petrochemicals',
  'Marine & Shipbuilding',
  'Infrastructure & Rail Transit',
  'Automobile',
  'Water & Wastewater Treatment',
];

const IndustryPage: React.FC = () => {
  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Banner Section ── */}
      <section className="relative w-full min-h-[390px] sm:min-h-[450px] md:min-h-[56vh] lg:min-h-[62vh] flex items-end bg-[#0c0f14] overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/industries_hero_banner.webp"
            alt="Sectors and Industries Overview - NAEPL Engineering Solutions"
            className="w-full h-full object-cover object-[center_35%]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.88) 100%)',
            }}
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            Sectors We Serve
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Industries We Power
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[540px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Engineering solutions trusted across critical sectors — built for reliability, precision, and scale wherever they&apos;re deployed.
          </p>
        </div>

        {/* Bottom 3px Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#065f46] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Clean Image-Grid Industry Section (Simple & Clean, No Long Paragraphs) ── */}
      <section className="py-12 sm:py-20 md:py-24 bg-white">
        {/* Section Header */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.18em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Industry Focus
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.15] m-0">
                Sectors Powered by <span className="text-[#8c2442]">NAEPL</span>
              </h2>
            </div>
            <p className="text-sm sm:text-[15px] font-light text-slate-500 leading-relaxed max-w-[420px] m-0">
              Our precision components and metallic fastening systems are engineered to meet the demanding standards required by each key industrial sector.
            </p>
          </div>
        </div>

        {/* Professional 8-Card Clean Image Grid (Consistent dimensions, clean styling) */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 bg-slate-950 border border-slate-200/80 aspect-[4/3] flex flex-col justify-end cursor-default"
              >
                {/* Background Image with Hover Scale */}
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Vignette & Gradient Overlays for Crystal Clear Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top-Right Number Pill Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-mono font-medium shadow-sm">
                    0{i + 1}
                  </span>
                </div>

                {/* Bottom Content Container: Displaying ONLY the Industry Title */}
                <div className="relative z-10 p-5 sm:p-6">
                  <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight leading-snug m-0 group-hover:text-[#8fd6ae] transition-colors duration-200">
                    {ind.name}
                  </h3>
                </div>

                {/* Bottom Expanding Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#34d399] to-[#8c2442] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Sectors We Serve Quick Navigation Section ── */}
      <section className="py-16 sm:py-24 bg-[#1a1a1a] relative overflow-hidden text-white">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(0,68,40,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(140,36,66,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8b96a5] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />
                Industry Coverage
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white leading-[1.18] tracking-tight">
                Sectors We <span className="text-[#8c2442]">Serve</span>
              </h2>
            </div>

            {/* Interactive Industry Chips */}
            <div className="flex flex-wrap gap-3">
              {sectorChips.map((ind) => (
                <div
                  key={ind}
                  className="text-[14px] sm:text-[15px] font-medium text-[#cccccc] border border-[#333333] rounded py-2.5 px-4 sm:px-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#004428] hover:to-[#8c2442] hover:text-white hover:border-transparent hover:-translate-y-0.5 cursor-default"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA Banner Section ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#e8e8e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="relative bg-[#f8f8f7] border border-[#e8e8e8] rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden transition-all duration-300 hover:shadow-[0_24px_56px_rgba(0,68,40,0.10)] hover:border-[#004428]/30">
            {/* Top 3px Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-medium text-[#1a1a1a] tracking-tight mb-3">
                Looking for a reliable <span className="text-[#004428]">engineering partner</span>?
              </h2>
              <p className="text-[14.5px] sm:text-base font-light text-[#6b6b6b]">
                Let&apos;s build <span className="text-[#8c2442] font-semibold">precision</span> together.
              </p>
            </div>

            <Link href="/contact"
              className="group relative inline-flex items-center gap-2.5 bg-[#1a1a1a] border border-[#1a1a1a] text-white px-8 py-4 rounded text-[13.5px] sm:text-[14.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.35)] hover:-translate-y-0.5 shrink-0 w-full sm:w-auto justify-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Contact Us Today</span>
              <ArrowRight size={15} className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustryPage;
