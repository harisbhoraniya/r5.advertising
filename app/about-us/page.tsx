'use client';
import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const values: ValueItem[] = [
  {
    icon: <Users size={24} />,
    title: 'Customer First',
    desc: 'Every decision centers on delivering value, responsiveness, and tailored manufacturing support to our clients.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Quality Excellence',
    desc: 'Uncompromising standards and rigorous quality inspection at every single stage of production.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Innovation & Engineering',
    desc: 'Continuously evolving our processes, advanced CNC machinery, and technical capabilities.',
  },
  {
    icon: <Award size={24} />,
    title: 'Reliability & Commitment',
    desc: 'Dependable long-term partnerships built on consistent trust, transparency, and verified performance.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Continuous Improvement',
    desc: 'Kaizen mindset and defect-prevention methodologies embedded across all manufacturing operations.',
  },
];

const strengths = [
  'Strong In-House Capabilities',
  'Standardized Packaging & Logistics',
  'Batch Production Flexibility',
  'Cost Optimization for Clients',
  'Export-Ready Quality Standards',
  'Advanced Quality Control Lab',
];

interface BrandItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  link: string;
}

// Brand list - "Proprietary" removed from headings and identifiers per client feedback
const brands: BrandItem[] = [
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
      {/* ── 1. Hero Banner Section (Kept unchanged per client instruction) ── */}
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

      {/* ── 2. Our Brands Section (Heading: "Our Brands", word "Proprietary" removed) ── */}
      <section className="py-16 sm:py-20 bg-[#f8f8f7] border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 pb-5 border-b border-[#e8e8e8]">
            <p className="text-[11px] font-semibold text-[#004428] tracking-[0.18em] uppercase mb-2 flex items-center gap-2.5">
              <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
              Our Brands
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a1a1a] tracking-tight">
              Our <span className="text-[#004428]">Brands</span>
            </h2>
          </div>

          {/* 3 Brand Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {brands.map((brand) => (
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

                {/* Brand Details */}
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

      {/* ── 3. Core Values Section (Redesigned as Premium Corporate Grid) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-[680px] mb-12 sm:mb-16">
            <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
              <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
              Core Values
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight mb-4">
              What <span className="text-[#8c2442]">Guides</span> Us
            </h2>
            <p className="text-[14.5px] sm:text-base font-light text-[#6b6b6b] leading-relaxed m-0">
              Our principles form the foundation of our engineering integrity, customer partnerships, and global manufacturing delivery.
            </p>
          </div>

          {/* Premium Corporate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group relative bg-[#fbfbfa] border border-[#e8e8e8] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,68,40,0.10)] hover:border-[#004428]/30 overflow-hidden ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Expanding Brand Gradient Line */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] to-[#8c2442] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                <div>
                  {/* Top Row: Icon Container & Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#004428]/10 text-[#004428] flex items-center justify-center transition-all duration-300 group-hover:bg-[#8c2442]/10 group-hover:text-[#8c2442] group-hover:scale-110">
                      {v.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 font-mono tracking-wider">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-[20px] font-semibold text-[#1a1a1a] tracking-tight mb-3 group-hover:text-[#004428] transition-colors">
                    {v.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] font-light text-[#6b6b6b] leading-relaxed m-0">
                    {v.desc}
                  </p>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="w-6 h-[2px] bg-slate-200 mt-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#004428]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Our Strength Section (Image Replaced with Real Quality Inspection Asset) ── */}
      <section className="py-16 sm:py-24 bg-[#f8f8f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Manufacturing & Inspection Photo Card */}
            <div className="relative h-[340px] sm:h-[460px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#e8e8e8] bg-slate-100">
              <img
                src="/assets/about_naepl.webp"
                alt="NAEPL Advanced Quality Inspection, Precision Engineering & Manufacturing Facility"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 bg-[#004428]/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg">
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

              <div className="flex flex-col gap-3">
                {strengths.map((s) => (
                  <div
                    key={s}
                    className="group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/70 bg-white transition-all duration-200 hover:border-[#004428]/30 hover:shadow-sm hover:translate-x-1.5 cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#004428] transition-all duration-300 group-hover:bg-[#8c2442] group-hover:scale-125 shrink-0" />
                    <span className="text-[14px] sm:text-[15px] font-medium text-[#1a1a1a]">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA Banner Section ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
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

            <Link
              href="/contact"
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
