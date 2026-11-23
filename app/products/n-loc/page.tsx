'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { BackToProducts } from '@/components/BackToProducts';
import { TrustRow } from '@/components/TrustRow';
import { 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Search,
  X
} from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  link: string;
}

// Descriptive product catalog for Stainless Steel Cable Ties (N-LOC Series)
// Added Zig Zag Cable Tie per client feedback
const nlocProducts: ProductItem[] = [
  {
    id: 'roller-ball',
    title: 'Roller Ball Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'SELF-LOCKING · BALL LOCK',
    image: '/assets/nloc/roller_ball_standard_transparent.webp',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'roller-ball-hd',
    title: 'Roller Ball Heavy Duty Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · HIGH TENSILE',
    image: '/assets/nloc/roller_ball_hd_transparent.webp',
    link: '/products/n-loc/roller-ball-hd',
  },
  {
    id: 'releasable',
    title: 'Releasable Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'REUSABLE · PPA571 COATED',
    image: '/assets/nloc/releasable_cable_tie.webp',
    link: '/products/n-loc/releasable',
  },
  {
    id: 'ladder',
    title: 'Ladder Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'LADDER TYPE · SELF-LOCKING',
    image: '/assets/nloc/ladder_cable_tie.webp',
    link: '/products/n-loc/ladder',
  },
  {
    id: 'zig-zag',
    title: 'Ball Lock Spring Type',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'CONTOURED · HIGH VIBRATION',
    image: '/assets/nloc/zig_zag_cable_tie_uncoated.jpg',
    link: '/products/n-loc/zig-zag',
  },
  {
    id: 'zig-zag-hd',
    title: 'Ball Lock Spring Type Heavy Duty',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · HIGH VIBRATION',
    image: '/assets/nloc/zig_zag_hd_cable_tie_uncoated.jpg',
    link: '/products/n-loc/zig-zag-hd',
  },
  {
    id: 'marker-tag',
    title: 'Cable Marker Tag',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'LASER & EMBOSSED',
    image: '/assets/nloc/cable_marker_tag.webp',
    link: '/products/n-loc/marker-tag',
  },
  {
    id: 'marker-plates',
    title: 'Marker Plates',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'STAINLESS STEEL PLATES',
    image: '/assets/nloc/marker_plates.webp',
    link: '/products/n-loc/marker-plates',
  },
  {
    id: 'alphanumeric-characters',
    title: 'Alphanumeric Characters',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'STAINLESS STEEL EMBOSSED',
    image: '/assets/nloc/alphanumeric_characters.jpg',
    link: '/products/n-loc/alphanumeric-characters',
  },
];

const NLocPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cable-ties' | 'identification'>('all');

  const [productTypes, setProductTypes] = useState<Record<string, 'coated' | 'uncoated'>>({
    'roller-ball': 'uncoated',
    'roller-ball-hd': 'uncoated',
    'releasable': 'uncoated',
    'ladder': 'uncoated',
    'zig-zag': 'uncoated',
    'zig-zag-hd': 'uncoated',
  });

  const getItemImage = (item: ProductItem) => {
    const type = productTypes[item.id] || 'uncoated';
    if (item.id === 'roller-ball') {
      return type === 'coated'
        ? '/assets/nloc/roller_ball_coated_black.webp'
        : '/assets/nloc/roller_ball_standard_transparent.webp';
    }
    if (item.id === 'roller-ball-hd') {
      return type === 'coated'
        ? '/assets/nloc/roller_ball_hd_coated.webp'
        : '/assets/nloc/roller_ball_hd_transparent.webp';
    }
    if (item.id === 'releasable') {
      return type === 'coated'
        ? '/assets/nloc/releasable_cable_tie_coated.webp'
        : '/assets/nloc/releasable_cable_tie.webp';
    }
    if (item.id === 'ladder') {
      return type === 'coated'
        ? '/assets/nloc/ladder_cable_tie_coated.webp'
        : '/assets/nloc/ladder_cable_tie.webp';
    }
    if (item.id === 'zig-zag') {
      return type === 'coated'
        ? '/assets/nloc/zig_zag_cable_tie_coated.jpg'
        : '/assets/nloc/zig_zag_cable_tie_uncoated.jpg';
    }
    if (item.id === 'zig-zag-hd') {
      return type === 'coated'
        ? '/assets/nloc/zig_zag_hd_cable_tie_coated.jpg'
        : '/assets/nloc/zig_zag_hd_cable_tie_uncoated.jpg';
    }
    return item.image;
  };

  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner (Descriptive Naming: "Stainless Steel Cable Ties", Pink colour removed) ── */}
      <section className="relative w-full min-h-[365px] sm:min-h-[405px] md:min-h-[450px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/nloc/nloc_hero_banner_hd.jpg"
            alt="NAEPL Stainless Steel Cable Ties & Ball Lock Systems"
            className="w-full h-full object-cover object-[center_center]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,17,14,0.78) 0%, rgba(10,17,14,0.42) 45%, rgba(10,17,14,0.0) 80%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,17,14,0.75) 0%, rgba(10,17,14,0.18) 40%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            Stainless Steel Cable Ties · N-LOC Series
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Stainless Steel Cable Ties <br className="hidden sm:inline" />
            <span className="text-[#8fd6ae]">High-Tensile Fastening.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[640px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            High-grade AISI 304 and AISI 316 stainless steel cable ties, ball lock systems, and identification tags engineered for extreme temperatures, fire safety, and harsh marine and industrial environments.
          </p>

          {/* Quick Action CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="font-montserrat inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore Cable Ties Range</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Accent Line (Corporate Emerald to Maroon) */}
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
              src="/assets/nloc/nloc_overview_product.webp" 
              alt="NAEPL Stainless Steel Cable Ties Self-Locking Mechanism" 
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Core Technical Features */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
              STAINLESS STEEL CABLE TIES · N-LOC SERIES
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              Secure Fastening. <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Reliable Performance.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NAEPL manufactures high-tensile stainless steel cable ties under the N-LOC brand series, engineered for reliable cable management and identification across critical infrastructure. Designed with self-locking roller ball, ladder, and releasable mechanisms, these ties deliver superior mechanical grip, non-flammability, and high resistance to aggressive chemicals, saltwater corrosion, and extreme temperatures.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
                    PREMIUM SS 316/316L &amp; 304/304L
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 m-0">
                    Precision-manufactured from marine-grade stainless steel for corrosion-proof longevity.
                  </p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
                    SUPERIOR LOOP STRENGTH
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 m-0">
                    High tensile rating up to 160 kg+ ensuring zero slippage under severe dynamic loads.
                  </p>
                </div>
              </div>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-medium rounded-full select-none">
                Fire-Proof (Non-Flammable)
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-medium rounded-full select-none">
                Corrosion Resistant
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-medium rounded-full select-none">
                UV &amp; Weather Resistant
              </span>
            </div>

            <div className="flex flex-col gap-1 border-t border-slate-200 pt-4">
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-500 m-0">
                Engineered for dependable mechanical restraint across demanding industrial installations.
              </p>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-900 m-0">
                Secure Today. Reliable Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Product Range Showcase ── */}
      <section className="py-12 sm:py-16 pb-16 sm:pb-20 bg-white" id="products">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
            OUR RANGE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-6">
            Explore the <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Stainless Steel Cable Ties Range</span>
          </h2>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Products ({nlocProducts.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('cable-ties')}
                className={`px-3.5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'cable-ties'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Cable Ties (6)
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('identification')}
                className={`px-3.5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'identification'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Identification &amp; Tags (3)
              </button>
            </div>

            {/* Quick Search Input */}
            <div className="relative min-w-[240px] md:w-[320px]">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products (e.g. Roller, Ladder)..."
                className="w-full pl-10 pr-9 py-2 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004428]/20 focus:border-[#004428] transition-all"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {(() => {
              const filteredProducts = nlocProducts.filter((item) => {
                if (selectedCategory === 'cable-ties' && item.category !== 'STAINLESS STEEL CABLE TIES') return false;
                if (selectedCategory === 'identification' && item.category !== 'IDENTIFICATION SYSTEMS') return false;
                if (searchTerm.trim()) {
                  const q = searchTerm.toLowerCase();
                  return (
                    item.title.toLowerCase().includes(q) ||
                    item.badge.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q)
                  );
                }
                return true;
              });

              if (filteredProducts.length === 0) {
                return (
                  <div className="w-full text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-200 my-4">
                    <p className="text-base font-semibold text-slate-800 mb-1">No products found</p>
                    <p className="text-[13px] text-slate-500 mb-4">No cable ties or identification systems match "{searchTerm}"</p>
                    <button
                      type="button"
                      onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                      className="px-4 py-2 bg-[#004428] text-white font-medium text-[13px] rounded-xl hover:bg-[#00331e] transition-all cursor-pointer"
                    >
                      Reset filters
                    </button>
                  </div>
                );
              }

              return filteredProducts.map((item) => (
              <Link 
                key={item.id} 
                id={item.id} 
                href={item.link}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300 block no-underline"
              >
                <div className="relative h-[190px] sm:h-[220px] flex items-center justify-center overflow-hidden bg-slate-50 p-4">
                  <img
                    src={getItemImage(item)}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3 group-hover:text-[#004428] transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-6 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  <div className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 group-hover:gap-3">
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ));
          })()}
          </div>
        </div>
      </section>

      {/* ── 6. Trust Row / Certified Engineering ── */}
      <TrustRow />

      {/* ── 7. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: A4 Brochure Mockup Card + Download PDF Brochure Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/n_loc_brochure_cover.webp"
                  alt="NAEPL Stainless Steel Cable Ties Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link href="/brochure?doc=n-loc-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download Technical Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>NAEPL Technical Consultation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Help Selecting the Right Cable Ties for Extreme Environments?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our application engineering team helps contractors, OEMs, and consultants select the optimal stainless steel grade (SS304/SS316), coating, and tensile ratings for high-vibration, corrosive, or high-temperature installations.
              </p>

              <div>
                <Link href="/contact"
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

export default NLocPage;
