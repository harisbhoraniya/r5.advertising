'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  brandTag?: string;
  category: string;
  badge: string;
  desc: string;
  image: string;
  link: string;
}

// Product catalog with descriptive product naming per client instructions.
// Brand names are retained only as secondary identifiers.
const productCatalog: ProductItem[] = [
  {
    id: 'stainless-steel-cable-ties',
    title: 'Stainless Steel Cable Ties',
    brandTag: 'N-LOC Series',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'BALL LOCK & LADDER TIES',
    desc: 'Self-locking roller ball, ladder, releasable and coated stainless steel ties in SS 304 & 316 for extreme temperature bundling.',
    image: '/assets/featured_products/featured_nloc.webp',
    link: '/products/n-loc',
  },
  {
    id: 'zig-zag-cable-ties',
    title: 'Zig Zag Cable Ties',
    brandTag: 'N-LOC Series',
    category: 'STAINLESS STEEL FASTENING',
    badge: 'CONTOURED RETENTION TIES',
    desc: 'Contoured stainless steel ties engineered for secure retention on vibrating, high-flexibility, and uneven industrial bundling profiles.',
    image: '/assets/nloc/ladder_cable_tie.webp',
    link: '/products/n-loc',
  },
  {
    id: 'cable-cleats',
    title: 'Cable Cleats',
    brandTag: 'Power Accessories',
    category: 'POWER CABLE ACCESSORIES',
    badge: 'IEC 61914 CERTIFIED',
    desc: 'Short-circuit withstand retention cleats for single and trefoil power cables engineered to withstand up to 180 kA peak fault forces.',
    image: '/assets/featured_products/featured_cable_cleats.webp',
    link: '/products/cable-cleat',
  },
  {
    id: 'junction-boxes',
    title: 'Weatherproof Junction Boxes & Enclosures',
    brandTag: 'LINKBOX Series',
    category: 'ENCLOSURES & JUNCTION BOXES',
    badge: 'IP66 / IP68 WEATHERPROOF',
    desc: 'Heavy-duty industrial terminal enclosures and junction boxes in die-cast aluminium, stainless steel, and mild steel.',
    image: '/assets/featured_products/featured_link_box.webp',
    link: '/products/link-box',
  },
  {
    id: 'electrical-lugs',
    title: 'Electrical Termination Lugs & Connectors',
    brandTag: 'LUGX Series',
    category: 'ELECTRICAL LUGS & TERMINALS',
    badge: 'HIGH CONDUCTIVITY COPPER / AL',
    desc: 'Precision copper, aluminium, and bi-metallic friction-welded cable lugs, ring terminals, and electrical power connectors.',
    image: '/assets/featured_products/featured_lugx.webp',
    link: '/products/lugx',
  },
  {
    id: 'cnc-machined-components',
    title: 'CNC Machined Components',
    brandTag: 'Precision Turning & Milling',
    category: 'PRECISION ENGINEERING',
    badge: 'MICRON TOLERANCE MACHINING',
    desc: 'Multi-axis CNC turned, milled, and drilled components in Copper, SS, Aluminium, and Chrome Steel manufactured to drawings.',
    image: '/assets/featured_products/featured_cnc.webp',
    link: '/products/cnc-machine-component',
  },
  {
    id: 'press-parts',
    title: 'Sheet Metal Press Parts & Banding',
    brandTag: 'Stamping & Banding',
    category: 'SHEET METAL COMPONENTS',
    badge: 'PROGRESSIVE DIE STAMPING',
    desc: 'Precision progressive tool stamping, pressed parts, stainless steel banding straps, and buckles for global assemblies.',
    image: '/assets/sheet_metal/page_98_img_0.webp',
    link: '/products/sheet-metal-press-parts',
  },
];

const ProductsPage: React.FC = () => {
  return (
    <main className="bg-[#fbfbfa] min-h-screen text-[#1a1a1a]">
      {/* ── 1. Hero Banner Section ── */}
      <section className="relative w-full min-h-[390px] sm:min-h-[450px] md:min-h-[56vh] lg:min-h-[62vh] flex items-end bg-[#0c0f14] overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/products_hero_banner.webp"
            alt="NAEPL Engineered Hardware and Industrial Component Range"
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
            Engineered Range · ISO 9001:2015
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Our Product Range
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[580px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Precision-engineered metallic fastening, short-circuit cable retention, weatherproof enclosures, electrical connectivity, and custom CNC components.
          </p>
        </div>

        {/* Bottom 3px Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#065f46] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Main Section Header & Products Grid ── */}
      <section className="py-12 sm:py-16 md:py-20 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 mb-10 sm:mb-14 pb-6 sm:pb-7 border-b border-slate-200">
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Industrial Engineering Catalog
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium text-slate-900 leading-[1.2] tracking-tight m-0">
                Engineered for <br className="hidden sm:inline" />
                <span className="text-[#8c2442]">Demanding</span> Applications
              </h2>
            </div>
            <div>
              <p className="max-w-[480px] text-[14px] sm:text-[15px] font-normal text-slate-500 leading-relaxed m-0">
                Every product in our catalog is engineered to perform — manufactured from verified materials, built to tight tolerances, and backed by ISO 9001:2015 quality standards.
              </p>
            </div>
          </div>

          {/* Responsive Card Grid with Descriptive Product Naming */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productCatalog.map((product) => (
              <Link 
                key={product.id} 
                id={product.id} 
                href={product.link}
                className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-[#004428]/40 cursor-pointer block no-underline"
              >
                {/* Image Container */}
                <div className="relative h-[190px] sm:h-[220px] bg-slate-50/60 overflow-hidden rounded-t-2xl border-b border-slate-100 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase truncate">
                      {product.category}
                    </span>
                    {product.brandTag && (
                      <span className="text-[10px] font-semibold text-[#004428] bg-emerald-50 px-2 py-0.5 rounded shrink-0">
                        {product.brandTag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 tracking-tight m-0 mb-3 group-hover:text-[#004428] transition-colors">
                    {product.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 sm:mb-5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 group-hover:gap-3 group-hover:text-[#5c182c]">
                    <span>EXPLORE PRODUCTS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Bottom Custom Solutions CTA Section ── */}
      <section className="relative w-full bg-[#111317] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2.5px] before:bg-gradient-to-r before:from-[#004428] before:via-[#065f46] before:to-[#8c2442] before:z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-[72px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
          <div className="max-w-[580px]">
            <span className="block text-[12.5px] sm:text-[13.5px] font-normal text-[#8b96a5] mb-2 sm:mb-3">Custom Solutions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-3 sm:mb-4 leading-tight tracking-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-400 max-w-[480px] leading-relaxed m-0">
              We engineer directly to customer CAD drawings, samples, and specifications. Share your requirements and our technical team will respond promptly.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 bg-transparent text-white border border-white/20 rounded-lg py-3 sm:py-3.5 px-6 sm:px-7 text-[12px] sm:text-[12.5px] font-semibold tracking-wider uppercase transition-all duration-200 hover:border-white hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <span>REQUEST PRODUCT DETAILS</span>
              <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
