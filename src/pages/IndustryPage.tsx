import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface IndustryItem {
  name: string;
  category: string;
  desc: string;
  img: string;
}

const industries: IndustryItem[] = [
  {
    name: 'Electrical & Electronics',
    category: 'Power · Wiring · Components',
    desc: 'Precision-engineered components supporting electrical panels, control systems, and wiring infrastructure — built to withstand demanding electrical environments.',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=85',
  },
  {
    name: 'Industrial Manufacturing',
    category: 'Production · Machining · Assembly',
    desc: 'End-to-end manufacturing support for production lines — from machined components to press parts, engineered for consistency at scale.',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=85',
  },
  {
    name: 'Infrastructure & Utilities',
    category: 'Power Grids · Public Works',
    desc: 'Rugged, weather-resistant components engineered for power distribution, utility installations, and large-scale infrastructure projects.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=85',
  },
  {
    name: 'Engineering & Automation',
    category: 'Control Systems · Integration',
    desc: 'Supporting automation and control system builders with precision parts engineered to exacting specifications and tight lead times.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85',
  },
  {
    name: 'Oil & Gas',
    category: 'Energy · Harsh Environments',
    desc: 'Heavy-duty, corrosion-resistant components built to perform reliably in the harsh, high-stakes environments of the oil & gas sector.',
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=85',
  },
];

const sectorChips = [
  'Electrical & Electronics',
  'Industrial Manufacturing',
  'Infrastructure & Utilities',
  'Engineering & Automation',
  'Oil & Gas',
];

export const IndustryPage: React.FC = () => {
  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Banner Section ── */}
      <section className="relative w-full min-h-[560px] sm:min-h-[640px] md:min-h-[80vh] lg:min-h-[88vh] flex items-end bg-[#0c0f14] overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1800&q=85"
            alt="Sectors and Industries Overview"
            className="w-full h-full object-cover object-[center_30%]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.48) 55%, rgba(0,0,0,0.85) 100%)',
            }}
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 w-full">
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold text-white/70 tracking-[0.2em] uppercase mb-4 sm:mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-[1px] bg-white/50" />
            Sectors We Serve
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-light text-white tracking-tight leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6 max-w-[800px]">
            Industries <strong className="font-semibold text-white">We Power</strong>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[17px] text-white/75 font-light leading-relaxed max-w-[500px]">
            Engineering solutions trusted across critical sectors — built for reliability, precision, and scale wherever they&apos;re deployed.
          </p>
        </div>

        {/* Bottom 3px Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#065f46] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Industries List Section ── */}
      <section className="py-12 sm:py-20 md:py-24 bg-white">
        {/* Section Header */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 mb-10 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.18em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Industry Solutions
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-normal text-slate-900 tracking-tight leading-[1.15] m-0">
                Solutions Built for <br className="hidden sm:inline" />
                <em className="italic text-[#8c2442] font-normal">Every</em> Sector
              </h2>
            </div>
            <p className="text-sm sm:text-[15px] font-light text-slate-500 leading-relaxed max-w-[420px] m-0">
              From electrical infrastructure to heavy manufacturing, our components are engineered to meet the demanding standards each sector requires.
            </p>
          </div>
        </div>

        {/* Alternating Industry Cards */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-6 sm:gap-10">
          {industries.map((ind, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={ind.name}
                className={`group relative bg-white border border-[#e8e8e8] rounded-xl overflow-hidden grid grid-cols-1 ${
                  isReversed ? 'lg:grid-cols-[1fr_420px]' : 'lg:grid-cols-[420px_1fr]'
                } lg:h-[320px] transition-all duration-300 hover:shadow-[0_12px_44px_rgba(0,0,0,0.08)] hover:-translate-y-1`}
              >
                {/* Left/Right Vertical Hover Accent Stripe */}
                <div
                  className={`absolute top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block ${
                    isReversed ? 'right-0' : 'left-0'
                  }`}
                />

                {/* Image Container */}
                <div
                  className={`relative w-full h-[220px] sm:h-[280px] lg:h-full overflow-hidden bg-slate-100 ${
                    isReversed ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                  }`}
                >
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Card Body */}
                <div
                  className={`relative p-6 sm:p-8 md:p-12 flex flex-col justify-center ${
                    isReversed ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                  }`}
                >
                  {/* Category */}
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#8c2442] tracking-[0.16em] uppercase mb-2.5 sm:mb-3 transition-colors duration-200 group-hover:text-[#004428]">
                    {ind.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-900 tracking-tight leading-snug mb-2.5 sm:mb-3.5 transition-colors duration-200 group-hover:text-[#004428]">
                    {ind.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14.5px] font-light text-slate-600 leading-relaxed m-0">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. Sectors We Serve Section ── */}
      <section className="py-16 sm:py-24 bg-[#1a1a1a] relative overflow-hidden text-white">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(0,68,40,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(140,36,66,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8b96a5] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />
                Industries
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

      {/* ── 4. CTA Banner Section ("Looking for a reliable engineering partner?") ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#e8e8e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="relative bg-[#f8f8f7] border border-[#e8e8e8] rounded p-8 sm:p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden transition-all duration-300 hover:shadow-[0_24px_56px_rgba(0,68,40,0.10)] hover:border-[#004428]/30">
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

            <Link
              to="/contact"
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
