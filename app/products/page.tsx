'use client';
import React from 'react';
import Link from 'next/link';

interface ProductItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  link: string;
}

const productCatalog: ProductItem[] = [
  {
    id: 'n-loc',
    title: 'N-LOC',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'STAINLESS STEEL CABLE TIES',
    image: '/assets/featured_products/featured_nloc.webp',
    link: '/products/n-loc',
  },
  {
    id: 'cable-cleat',
    title: 'Cable Cleats',
    category: 'POWER CABLE ACCESSORIES',
    badge: 'POWER CABLE ACCESSORIES',
    image: '/assets/featured_products/featured_cable_cleats.webp',
    link: '/products/cable-cleat',
  },
  {
    id: 'link-box',
    title: 'LINKBOX',
    category: 'ENCLOSURES & JUNCTION BOXES',
    badge: 'ENCLOSURES & JUNCTION BOXES',
    image: '/assets/featured_products/featured_link_box.webp',
    link: '/products/link-box',
  },
  {
    id: 'lugx',
    title: 'LUGX',
    category: 'ELECTRICAL LUGS & TERMINALS',
    badge: 'ELECTRICAL LUGS & TERMINALS',
    image: '/assets/featured_products/featured_lugx.webp',
    link: '/products/lugx',
  },
  {
    id: 'cnc-machine-component',
    title: 'CNC Machined Component',
    category: 'PRECISION ENGINEERING',
    badge: 'PRECISION ENGINEERING',
    image: '/assets/featured_products/featured_cnc.webp',
    link: '/products/cnc-machine-component',
  },
  {
    id: 'press-parts',
    title: 'Sheet Metal Press Parts',
    category: 'SHEET METAL COMPONENTS',
    badge: 'SHEET METAL COMPONENTS',
    image: '/assets/sheet_metal/page_98_img_0.png',
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
            alt="Our Product Range Overview - NAEPL Precision Engineered Hardware"
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
            Our Range
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Our Product Range
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[540px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Precision-engineered components and solutions for demanding industrial applications worldwide.
          </p>
        </div>

        {/* Bottom 3px Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#065f46] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* 2. Main Section Header & Products Grid */}
      <section className="py-10 sm:py-16 md:py-20 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 mb-10 sm:mb-14 pb-6 sm:pb-7 border-b border-slate-200">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-slate-900 leading-[1.25] tracking-tight m-0">
                Engineered for <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#8c2442]">Demanding</span> Applications
              </h1>
            </div>
            <div>
              <p className="max-w-[480px] text-[14px] sm:text-[15px] font-normal text-slate-500 leading-relaxed m-0">
                Every product in our range is built to perform — precision materials, exacting tolerances, and global-standard certifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productCatalog.map((product) => (
              <div 
                key={product.id} 
                id={product.id} 
                className={`group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300 ${
                  product.id === 'press-parts' ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''
                }`}
              >
                <div className="relative h-[190px] sm:h-[220px] bg-white overflow-hidden rounded-t-2xl border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {product.category}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                    {product.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 sm:mb-5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  {/* <Link href={product.link} 
                    className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 hover:text-[#5c182c] group-hover:gap-3"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom Custom Solutions CTA Section */}
      <section className="relative w-full bg-[#111317] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2.5px] before:bg-gradient-to-r before:from-[#004428] before:via-[#065f46] before:to-[#8c2442] before:z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-[72px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
          <div className="max-w-[580px]">
            <span className="block text-[12.5px] sm:text-[13.5px] font-normal text-[#8b96a5] mb-2 sm:mb-3">Custom Solutions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-3 sm:mb-4 leading-tight tracking-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-400 max-w-[480px] leading-relaxed m-0">
              We engineer to specification. Share your requirements and our team will respond promptly.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <Link href="/contact" 
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
