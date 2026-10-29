'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const values = [
  { title: 'Customer First', desc: 'Every decision centers on delivering value to our clients.' },
  { title: 'Quality Excellence', desc: 'Uncompromising standards at every stage of production.' },
  { title: 'Innovation & Engineering', desc: 'Continuously evolving our processes and capabilities.' },
  { title: 'Reliability & Commitment', desc: 'Dependable partnerships built on trust and performance.' },
  { title: 'Continuous Improvement', desc: 'Kaizen mindset embedded across all operations.' },
];

const strengths = [
  'Strong In-House Capabilities',
  'Standardized Packaging & Logistics',
  'Batch Production Flexibility',
  'Cost Optimization for Clients',
  'Export-Ready Quality Standards',
  'Advanced Quality Control Lab',
];

const entities = [
  'N Gandhi & Co.',
  'NAEPL – N Gandhi Advance Engineering Pvt. Ltd.',
  'NAMTPL – N Gandhi Advance Material Technology Pvt. Ltd.',
];

interface BrandItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  link: string;
}

const proprietaryBrands: BrandItem[] = [
  {
    id: 'n-loc',
    name: 'N-LOC',
    tag: 'STAINLESS STEEL CABLE TIES',
    desc: 'Self-locking roller ball, ladder, and coated stainless steel ties in SS 304 & 316 engineered for high-tensile bundling in demanding environments.',
    img: '/assets/logo_nloc.webp',
    link: '/products/n-loc',
  },
  {
    id: 'link-box',
    name: 'LINKBOX',
    tag: 'WEATHERPROOF ENCLOSURES',
    desc: 'Heavy-duty IP66 & IP68 junction boxes and electrical link boxes manufactured in aluminium die-cast, stainless steel, and mild steel.',
    img: '/assets/logo_linkbox.webp',
    link: '/products/link-box',
  },
  {
    id: 'lugx',
    name: 'LUGX',
    tag: 'ELECTRICAL TERMINATION LUGS',
    desc: 'High-conductivity copper and bimetallic terminal lugs, heavy-duty connectors, and cable hardware engineered for critical electrical power connections.',
    img: '/assets/logo_lugx.webp',
    link: '/products/lugx',
  },
];

const AboutPage: React.FC = () => {
  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Banner Section ── */}
      <section className="relative w-full min-h-[390px] sm:min-h-[450px] md:min-h-[55vh] lg:min-h-[59vh] flex items-end bg-[#0a0f0d] overflow-hidden">
        {/* Background Image with Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/about_hero_banner.webp"
            alt="NAEPL Engineering Excellence and Advanced Manufacturing Plant"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(5,15,10,0.30) 0%, rgba(5,15,10,0.65) 55%, rgba(5,15,10,0.92) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        </div>

        {/* Banner Content Over Image */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            About Us · N Gandhi Group
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 whitespace-pre-line drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Engineering Excellence.{'\n'}Trusted Quality. Global Reach.
          </h1>

          {/* Subtitle */}
          <p className="max-w-[640px] text-sm sm:text-base md:text-[16.5px] font-light text-white/90 leading-relaxed mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            NAEPL is part of <strong className="text-white font-semibold">N Gandhi Group</strong> — an ISO 9001:2015 certified engineering company focused on delivering quality-driven, cost-effective manufacturing solutions to global markets.
          </p>
        </div>
      </section>

      {/* ── 2. Company Overview Section ── */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-[#f8f8f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Group Entities */}
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-4 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Company Overview
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a1a1a] leading-[1.18] tracking-tight mb-5">
                Part of <span className="text-[#004428]">N Gandhi</span> Group
              </h2>
              <p className="text-[14.5px] sm:text-base font-light text-[#6b6b6b] leading-relaxed mb-6">
                N Gandhi Group comprises three entities working together to provide complete engineering and materials solutions:
              </p>

              {/* Entity Items */}
              <div className="flex flex-col gap-3">
                {entities.map((entity) => (
                  <div
                    key={entity}
                    className="group flex items-start gap-3.5 p-3.5 sm:p-4 rounded border border-transparent transition-all duration-300 hover:bg-[#f0f7f3] hover:border-[#004428]/15 hover:translate-x-1.5 cursor-default bg-white/60 sm:bg-transparent"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#004428] shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-[#8c2442]"
                    />
                    <span className="text-[13.5px] sm:text-[14.5px] font-normal text-[#1a1a1a] leading-snug">
                      {entity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Certifications & Stats Box */}
            <div>
              <div className="relative bg-white border border-[#e8e8e8] rounded p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] overflow-hidden">
                {/* Top 3px gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />

                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div className="group p-4 rounded transition-all duration-300 hover:bg-[#f0f7f3] border-b border-[#e8e8e8] pb-6 cursor-default">
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors mb-1.5 whitespace-nowrap">
                      ISO
                    </div>
                    <div className="text-xs sm:text-[13px] font-medium text-[#4a4a4a]">
                      9001:2015
                    </div>
                  </div>

                  <div className="group p-4 rounded transition-all duration-300 hover:bg-[#f0f7f3] border-b border-[#e8e8e8] pb-6 cursor-default">
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors mb-1.5 whitespace-nowrap">
                      One-Stop
                    </div>
                    <div className="text-xs sm:text-[13px] font-medium text-[#4a4a4a]">
                      Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 3. Proprietary Brands Section (3 Brand Boxes) ── */}
      <section className="py-12 sm:py-16 bg-[#f8f8f7] border-t border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 pb-5 border-b border-[#e8e8e8]">
            <p className="text-[11px] font-semibold text-[#004428] tracking-[0.18em] uppercase mb-2 flex items-center gap-2.5">
              <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
              Our Brands
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a1a1a] tracking-tight">
              NAEPL <span className="text-[#004428]">Proprietary</span> <span className="text-[#8c2442]">Brands</span>
            </h2>
          </div>

          {/* 3 Brand Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {proprietaryBrands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.link}
                className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,68,40,0.10)] hover:border-[#004428]/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Brand Logo Container */}
                <div className="h-[190px] sm:h-[220px] bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Brand About & Details */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#8c2442] uppercase mb-1.5">
                    {brand.tag}
                  </span>
                  <h3 className="text-lg sm:text-[20px] font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-[#004428] transition-colors">
                    {brand.name}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-3.5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#004428]" />
                  <p className="text-[13px] sm:text-[13.5px] font-light text-slate-600 leading-relaxed mb-5 flex-1">
                    {brand.desc}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-[12px] font-bold tracking-wider text-[#004428] uppercase transition-all duration-200 group-hover:gap-3">
                    <span>Explore Products</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Core Values Section ("What Guides Us") ── */}
      <section className="pt-2 sm:pt-4 pb-16 sm:pb-24 bg-[#f8f8f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-10">
            <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3 sm:mb-4 flex items-center gap-2.5">
              <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
              Core Values
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight">
              What <span className="text-[#8c2442]">Guides</span> Us
            </h2>
          </div>

          {/* Numbered Value Rows */}
          <div className="flex flex-col border-t border-[#e8e8e8]">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative grid grid-cols-1 sm:grid-cols-[60px_1fr_2fr] gap-3 sm:gap-8 items-center py-6 sm:py-7 px-4 sm:px-6 border-b border-[#e8e8e8] transition-all duration-300 hover:bg-[#f4faf7] hover:pl-8 cursor-default"
              >
                {/* Left hover gradient stripe */}
                <span className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-b from-[#004428] to-[#8c2442] transition-all duration-300 group-hover:w-1" />

                <span className="text-xs sm:text-sm font-light text-[#9a9a9a] group-hover:text-[#8c2442] transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-lg sm:text-[20px] font-medium text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] font-light text-[#6b6b6b] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Our Strength Section ("Built to Deliver") ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Manufacturing Facility Photo Card */}
            <div className="relative h-[340px] sm:h-[460px] rounded overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#e8e8e8]">
              <img
                src="/assets/built_to_deliver.webp"
                alt="NAEPL Advanced Quality Control Lab, Precision CNC Manufacturing and Export-Ready Logistics"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 bg-[#004428]/95 backdrop-blur-sm px-5 py-3 rounded shadow">
                <p className="text-[13px] font-semibold text-white tracking-wide m-0">
                  Built to Deliver
                </p>
              </div>
            </div>

            {/* Right: Strengths Checklist */}
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3 sm:mb-4 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Our Strength
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a1a1a] leading-[1.18] tracking-tight mb-7 sm:mb-9">
                Built to <span className="text-[#004428]">Deliver</span>
              </h2>

              <div className="flex flex-col gap-2.5">
                {strengths.map((s) => (
                  <div
                    key={s}
                    className="group flex items-center gap-3.5 p-3 sm:p-3.5 rounded border border-transparent transition-all duration-200 hover:bg-gradient-to-r hover:from-[#004428]/5 hover:to-transparent hover:border-[#004428]/15 hover:translate-x-1.5 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004428] transition-all duration-300 group-hover:bg-[#8c2442] group-hover:scale-125" />
                    <span className="text-[14px] sm:text-[15px] font-normal text-[#1a1a1a]">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA Banner Section ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
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

export default AboutPage;
