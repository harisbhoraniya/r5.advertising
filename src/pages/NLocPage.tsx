import React from 'react';
import { Link } from 'react-router-dom';
import { BackToProducts } from '../components/BackToProducts';
import { TrustRow } from '../components/TrustRow';
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

const nlocProducts: ProductItem[] = [
  {
    id: 'roller-ball',
    title: 'Roller Ball Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'SELF-LOCKING · BALL LOCK',
    image: '/assets/nloc/roller_ball_heavy_duty.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'roller-ball-hd',
    title: 'Roller Ball Heavy Duty Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · HIGH TENSILE',
    image: '/assets/nloc/roller_ball_hd_clean.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'releasable',
    title: 'Releasable Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'REUSABLE · PPA571 COATED',
    image: '/assets/nloc/releasable_cable_tie.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'ladder',
    title: 'Ladder Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'LADDER TYPE · SELF-LOCKING',
    image: '/assets/nloc/ladder_cable_tie.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'marker-tag',
    title: 'Cable Marker Tag',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'LASER & EMBOSSED',
    image: '/assets/nloc/cable_marker_tag.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'marker-plates',
    title: 'Marker Plates',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'STAINLESS STEEL PLATES',
    image: '/assets/nloc/marker_plates.png',
    link: '/products/n-loc/roller-ball',
  },
];

export const NLocPage: React.FC = () => {
  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner (Same Premium UI as Cable Cleat / Lugx / Link Box) ── */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[640px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image from Brochure PDF */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/nloc/nloc_hero_banner_hd.webp"
            alt="NAEPL N-LOC Stainless Steel Cable Ties & Ball Lock Systems"
            className="w-full h-full object-cover object-[center_center]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,17,14,0.76) 0%, rgba(10,17,14,0.45) 50%, rgba(10,17,14,0.12) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,17,14,0.80) 0%, rgba(10,17,14,0.20) 40%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-14 sm:py-20 md:py-24 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            N-LOC · Stainless Steel Cable Ties
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Secure Today. <br className="hidden sm:inline" />
            <span className="text-[#f0859a]">Reliable Tomorrow.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[640px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            High-grade stainless steel cable ties, ball lock systems, and identification tags engineered for extreme temperatures, fire resistance, and harsh marine and industrial environments.
          </p>

          {/* Quick Action CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="font-['Manrope',sans-serif] inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore N-LOC Range</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#d27083] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Back To Products Bar ── */}
      <BackToProducts />

      {/* ── 3. Product Overview Section ── */}
      <section className="py-10 sm:py-14 md:py-18 bg-white" id="overview">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 lg:gap-14 items-center">
          
          {/* Left Side: Product Image Showcase (from PDF Page 9) */}
          <div className="bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-sm">
            <img 
              src="/assets/nloc/nloc_overview_product.png" 
              alt="NAEPL N-LOC Stainless Steel Cable Ties Mechanism" 
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Specifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#0d8a68] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#0d8a68]">
              STAINLESS STEEL CABLE TIES
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              One-Stop <span className="font-bold text-[#d27083] ml-1 sm:ml-1.5">Engineering Solutions</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NLOC is NAEPL's specialized brand focused on reliable cable management and identification 
              solutions. The brand offers stainless steel cable ties, cable markers and identification 
              products designed for secure and organized cable installations. NLOC products are suitable 
              for demanding applications where strength, durability, temperature resistance and 
              corrosion resistance are essential.
            </p>

            {/* Two Highlights from Brochure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-7">
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">PREMIUM QUALITY</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  High-grade stainless steel for durable cable fastening.
                </p>
              </div>
              
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">SUPERIOR STRENGTH</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  High tensile strength for secure, heavy-duty applications.
                </p>
              </div>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Fire Proof
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Corrosion Resistant
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Extreme Temperature Resistant
              </span>
            </div>

            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-500">
                Long lasting performance, built to withstand harsh environments and deliver lasting reliability.
              </p>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                Secure Today. Reliable Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Trust Row / Certified Engineering ── */}
      <TrustRow />

      {/* ── 5. Product Range Showcase ── */}
      <section className="py-12 sm:py-16 pb-16 sm:pb-20 bg-white" id="products">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0d8a68] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#0d8a68]">
            OUR RANGE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-7 sm:mb-9">
            Explore the <span className="font-bold text-[#d27083] ml-1 sm:ml-1.5">N-LOC Range</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {nlocProducts.map((item) => (
              <div 
                key={item.id} 
                id={item.id} 
                className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
              >
                <div className={`relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4 ${
                  item.id === 'roller-ball-hd' ? 'pt-7 sm:pt-9' : ''
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                    <span className="inline-block bg-slate-800/90 backdrop-blur-sm text-white text-[9.5px] sm:text-[10px] font-bold tracking-wider py-1 px-2.5 sm:px-3 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                    {item.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 sm:mb-5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  <Link 
                    to={item.link} 
                    className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 hover:text-[#67142e] group-hover:gap-3"
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

      {/* ── 6. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: A4 Brochure Mockup Card + Download PDF Brochure Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/page_6.png"
                  alt="NAEPL N-LOC Cable Ties Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link
                to="/brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25"
              >
                <FileText size={16} className="text-emerald-300" />
                <span>Download PDF Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>NAEPL Technical Consultation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Help Calculating Fault Currents or Sizing Cleats?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our application engineering team helps contractors, OEMs, and consultants calculate dynamic short-circuit electromagnetic forces and establish recommended cleat spacing for custom cable routes.
              </p>

              <div>
                <Link
                  to="/contact"
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
