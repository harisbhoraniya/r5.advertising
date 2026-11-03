'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { BackToProducts } from '@/components/BackToProducts';
import { TrustRow } from '@/components/TrustRow';
import { 
  CheckCircle2, 
  ArrowRight,
  FileText
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
    link: '/products/n-loc',
  },
  {
    id: 'roller-ball-hd',
    title: 'Roller Ball Heavy Duty Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · HIGH TENSILE',
    image: '/assets/nloc/roller_ball_hd_transparent.webp',
    link: '/products/n-loc',
  },
  {
    id: 'releasable',
    title: 'Releasable Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'REUSABLE · PPA571 COATED',
    image: '/assets/nloc/releasable_cable_tie.webp',
    link: '/products/n-loc',
  },
  {
    id: 'ladder',
    title: 'Ladder Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'LADDER TYPE · SELF-LOCKING',
    image: '/assets/nloc/ladder_cable_tie.webp',
    link: '/products/n-loc',
  },
  {
    id: 'zig-zag',
    title: 'Zig Zag Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'CONTOURED · HIGH VIBRATION',
    image: '/assets/nloc/ladder_cable_tie.webp',
    link: '/products/n-loc',
  },
  {
    id: 'marker-tag',
    title: 'Cable Marker Tag',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'LASER & EMBOSSED',
    image: '/assets/nloc/cable_marker_tag.webp',
    link: '/products/n-loc',
  },
  {
    id: 'marker-plates',
    title: 'Marker Plates',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'STAINLESS STEEL PLATES',
    image: '/assets/nloc/marker_plates.webp',
    link: '/products/n-loc',
  },
];

// Verified Technical Specifications data from technical datasheets
const technicalSpecifications = [
  { spec: 'Material Grade', details: 'Stainless Steel AISI 304 (General Industrial) & AISI 316 (Marine / Chemical Grade)' },
  { spec: 'Locking Mechanism', details: 'Internal stainless steel roller ball mechanism / Ladder buckle / Releasable wing lock' },
  { spec: 'Available Types', details: 'Roller Ball Type, Heavy Duty, Releasable, Ladder Type, Zig Zag, Coated & Uncoated' },
  { spec: 'Protective Coating', details: 'Pure Polyester, Epoxy Powder, or PPA 571 Halogen-Free Non-Toxic Polymer Coating' },
  { spec: 'Loop Tensile Strength', details: 'Standard: 45 kg (100 lbs) | Heavy Duty: 114 kg to 160 kg+ (250 - 350 lbs)' },
  { spec: 'Temperature Range', details: 'Uncoated: -80°C to +538°C | Coated: -40°C to +150°C' },
  { spec: 'Flammability Rating', details: 'Non-flammable, Fire-resistant (UL 94V-0 compliant, Halogen-Free)' },
  { spec: 'Corrosion Resistance', details: 'Exceptional resistance to salt spray, UV radiation, weathering, acids, and petrochemicals' },
  { spec: 'Primary Applications', details: 'Power generation plants, oil & gas refineries, offshore platforms, mass transit, renewable energy, and heavy shipbuilding' },
];

const NLocPage: React.FC = () => {
  const [productTypes, setProductTypes] = useState<Record<string, 'coated' | 'uncoated'>>({
    'roller-ball': 'coated',
    'roller-ball-hd': 'coated',
    'releasable': 'coated',
    'ladder': 'coated',
    'zig-zag': 'coated',
  });

  const getItemImage = (item: ProductItem) => {
    const type = productTypes[item.id] || 'coated';
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
      return '/assets/nloc/ladder_cable_tie.webp';
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
            src="/assets/nloc/nloc_hero_banner_hd.webp"
            alt="NAEPL Stainless Steel Cable Ties & Ball Lock Systems"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-7">
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">PREMIUM SS 304 / 316</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Precision-manufactured from marine-grade stainless steel for corrosion-proof longevity.
                </p>
              </div>
              
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">SUPERIOR LOOP STRENGTH</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  High tensile rating up to 160 kg+ ensuring zero slippage under severe dynamic loads.
                </p>
              </div>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Fire Resistant (UL 94V-0)
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Marine &amp; Salt-Spray Proof
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                -80°C to +538°C Tested
              </span>
            </div>

            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-500">
                Engineered to withstand extreme industrial weathering and continuous UV exposure.
              </p>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                Secure Today. Reliable Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Technical Specifications Table Section ── */}
      <section className="py-12 sm:py-16 bg-[#f8f9fa] border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#004428]">
              Verified Engineering Specifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Technical Specification Table
            </h3>
            <p className="text-sm text-slate-500 mt-1 max-w-[620px]">
              Actual verified technical parameters, material specifications, and operating characteristics for NAEPL Stainless Steel Cable Ties.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500 tracking-wider">
                  <tr>
                    <th className="py-4 px-5 sm:px-6 w-1/3">Specification</th>
                    <th className="py-4 px-5 sm:px-6">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {technicalSpecifications.map((row, idx) => (
                    <tr 
                      key={row.spec} 
                      className={`transition-colors hover:bg-slate-50/80 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                      }`}
                    >
                      <td className="py-3.5 px-5 sm:px-6 font-semibold text-slate-900">
                        {row.spec}
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-slate-600 leading-relaxed">
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-7 sm:mb-9">
            Explore the <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Stainless Steel Cable Ties Range</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {nlocProducts.map((item) => (
              <div 
                key={item.id} 
                id={item.id} 
                className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
              >
                <div className={`relative h-[190px] sm:h-[220px] flex items-center justify-center overflow-hidden bg-slate-50 p-4`}>
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
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                    {item.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 sm:mb-5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  {['roller-ball', 'roller-ball-hd', 'releasable', 'ladder'].includes(item.id) && (
                    <div className="flex items-center gap-2 mb-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setProductTypes((prev) => ({ ...prev, [item.id]: 'coated' }));
                        }}
                        className={`px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-bold tracking-wider uppercase rounded-lg transition-all duration-200 border cursor-pointer ${
                          (productTypes[item.id] || 'coated') === 'coated'
                            ? 'bg-[#004428] text-white border-[#004428] shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Coated
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setProductTypes((prev) => ({ ...prev, [item.id]: 'uncoated' }));
                        }}
                        className={`px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-bold tracking-wider uppercase rounded-lg transition-all duration-200 border cursor-pointer ${
                          productTypes[item.id] === 'uncoated'
                            ? 'bg-[#004428] text-white border-[#004428] shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Uncoated
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
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
