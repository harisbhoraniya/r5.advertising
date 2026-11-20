'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { BackToProducts } from '@/components/BackToProducts';
import { TrustRow } from '@/components/TrustRow';
import { 
  ArrowRight,
  FileText
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { lugsCatalogItems } from '@/data/lugsProductsData';

const categories = [
  'ALL',
  'COPPER CABLE LUGS',
  'ALUMINIUM CRIMPING TERMINALS',
  'COPPER RING TERMINALS',
  'BI-METALLIC TERMINALS',
  'COPPER CRIMPING TERMINALS'
];

const LugxPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredItems = selectedCategory === 'ALL'
    ? lugsCatalogItems
    : lugsCatalogItems.filter(item => item.category === selectedCategory);

  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner ── */}
      <section className="relative w-full min-h-[365px] sm:min-h-[405px] md:min-h-[450px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/lugx/lugx_hero_banner_hd.webp"
            alt="NAEPL Electrical Termination Lugs and Connector Hardware"
            className="w-full h-full object-cover object-[center_center]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,17,14,0.85) 0%, rgba(10,17,14,0.52) 50%, rgba(10,17,14,0.18) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,17,14,0.85) 0%, rgba(10,17,14,0.25) 40%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            Electrical Termination Lugs · LUGX Series
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Electrical Termination Lugs <br className="hidden sm:inline" />
            <span className="text-[#8fd6ae]">High Conductivity &amp; Grip.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[640px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            High-conductivity electrolytic copper, aluminium, and friction-welded bi-metallic terminal lugs engineered to ensure low electrical resistance, secure mechanical grip, and long-lasting electrical distribution connections.
          </p>

          {/* Quick Action CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="font-montserrat inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore Lugs Range</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Back To Products Bar ── */}
      <BackToProducts />

      {/* ── 3. Product Overview Section ── */}
      <section className="py-10 sm:py-14 md:py-18 bg-white" id="overview">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 lg:gap-14 items-center">
          
          {/* Left Side: Product Image Showcase */}
          <div className="bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-sm">
            <img 
              src="/assets/lugx/copper_one_hole_standard.png" 
              alt="NAEPL Electrical Cable Lugs and Crimping Terminals" 
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Core Technical Features */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
              TERMINALS &amp; LUGS · LUGX SERIES
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              Secure Mechanical Grip. <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Maximum Conductivity.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NAEPL manufactures industrial-grade cable lugs and crimping terminals under the LUGX brand series, designed for high-voltage power transmission, industrial switchgear, control panels, and transformer bushing terminations. Available in pure electrolytic copper (99.9%), conductor-grade aluminium (99.5%), and molecularly bonded bi-metallic transitions, all lugs feature electro-tinned finishes for maximum corrosion resistance and low contact resistance.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-7">
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">99.9% PURE ETP COPPER</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Precision drawn from seamless electrolytic copper tube with electro-tinned finish.
                </p>
              </div>
              
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">FRICTION-WELDED BI-METALLIC</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Molecular copper-to-aluminium bond completely eliminates galvanic contact corrosion.
                </p>
              </div>

              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">TESTED UP TO 33 KV</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Engineered and verified to international standards (IEC 61238-1 / BS 4579 / DIN 46235).
                </p>
              </div>

              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">1.5 MM² TO 1000 MM²</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Full spectrum sizing with single, dual, four-hole, bell mouth, and narrow palm options.
                </p>
              </div>
            </div>

            {/* Pill Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Electro-Tinned Plating
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Pre-Filled Oxide Inhibitor
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Built to Grip. Made to Last.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Product Range Showcase: 19 Complete Products with Category Filter ── */}
      <section className="py-12 sm:py-16 pb-16 sm:pb-20 bg-slate-50 border-t border-slate-200" id="products">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
                CATALOG SPECIFICATIONS
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15]">
                Explore the <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Electrical Lugs &amp; Terminals Range</span>
              </h2>
            </div>

            {/* shadcn Select Dropdown */}
            <div className="flex flex-col gap-1.5 w-full sm:w-[340px]">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Filter by Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full bg-white border-slate-300 rounded-xl h-12 text-[13px] sm:text-[13.5px] font-semibold text-slate-800 shadow-sm hover:border-slate-400 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10 transition-all">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">ALL LUGS &amp; TERMINALS (19)</SelectItem>
                  <SelectItem value="COPPER CABLE LUGS">COPPER CABLE LUGS</SelectItem>
                  <SelectItem value="ALUMINIUM CRIMPING TERMINALS">ALUMINIUM CRIMPING TERMINALS</SelectItem>
                  <SelectItem value="COPPER RING TERMINALS">COPPER RING TERMINALS</SelectItem>
                  <SelectItem value="BI-METALLIC TERMINALS">BI-METALLIC TERMINALS</SelectItem>
                  <SelectItem value="COPPER CRIMPING TERMINALS">COPPER CRIMPING TERMINALS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filter Info & Count */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <span className="text-[13px] font-medium text-slate-600">
              Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> of {lugsCatalogItems.length} products
            </span>
            {selectedCategory !== 'ALL' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('ALL')}
                className="text-[12px] font-bold text-[#8c2442] hover:text-[#67142e] uppercase tracking-wide cursor-pointer transition-colors"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* 19 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
              >
                {/* Image Showcase */}
                <div className="relative h-[220px] sm:h-[240px] bg-slate-50 flex items-center justify-center overflow-hidden p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#004428] uppercase mb-1.5">
                    {product.category}
                  </div>
                  
                  {/* Clean text badge without icon */}
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold uppercase tracking-wider mb-2.5 self-start border border-slate-200">
                    <span>{product.badge}</span>
                  </div>

                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight m-0 mb-3 leading-snug">
                    {product.title}
                  </h3>
                  
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                  
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0 mb-6 flex-1">
                    {product.desc}
                  </p>

                  <Link 
                    href={product.link}
                    className="mt-auto pt-3 inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 hover:text-[#67142e] group-hover:gap-3"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Trust Row / Certified Engineering ── */}
      <TrustRow />

      {/* ── 6. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: A4 Brochure Mockup Card + Download PDF Brochure Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/lugx_brochure_cover.webp"
                  alt="NAEPL Terminal Lugs Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link 
                href="/brochure?doc=lugx-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download Lugs Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              {/* Clean badge without icon */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>NAEPL Technical Consultation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Stud Drilling, Plating, or Barrel Sizing?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our electrical connectivity engineering team helps OEMs, panel builders, and contractors with custom palm drilling, tin/nickel electroplating, and specialized bi-metallic transitions for demanding electrical distribution.
              </p>

              <div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-[#004428] font-bold px-7 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                >
                  <span>Request Quotation &amp; Samples</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default LugxPage;
