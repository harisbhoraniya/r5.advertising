import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    title: 'N-Loc',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'STAINLESS STEEL CABLE TIES',
    image: '/assets/Cable_Ties.png',
    link: '/n-loc',
  },
  {
    id: 'cable-cleat',
    title: 'Cable Cleat',
    category: 'CABLE MANAGEMENT',
    badge: 'CABLE MANAGEMENT',
    image: '/assets/Cable_cleats.png',
    link: '/n-loc',
  },
  {
    id: 'link-box',
    title: 'Link Box',
    category: 'ENCLOSURES',
    badge: 'ENCLOSURES',
    image: '/assets/Junction_Box.jpg',
    link: '/n-loc',
  },
  {
    id: 'lugx',
    title: 'LUGX',
    category: 'ELECTRICAL FITTINGS',
    badge: 'ELECTRICAL FITTINGS',
    image: '/assets/app_control_panels.png',
    link: '/n-loc',
  },
  {
    id: 'cnc-machine-component',
    title: 'CNC Machine Component',
    category: 'CNC MACHINING',
    badge: 'CNC MACHINING',
    image: '/assets/Machine_Components.png',
    link: '/n-loc',
  },
  {
    id: 'press-parts',
    title: 'Sheet Metal Press Parts',
    category: 'PRESS COMPONENTS · STRAPPING',
    badge: 'PRESS COMPONENTS · STRAPPING',
    image: '/assets/Press_Parts.png',
    link: '/n-loc',
  },
];

export const ProductsPage: React.FC = () => {
  return (
    <main className="bg-[#fbfbfa] min-h-screen text-[#1a1a1a]">
      {/* 1. Hero Banner Matching Reference */}
      <section className="relative w-full bg-[#12151a] overflow-hidden leading-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3.5px] after:bg-gradient-to-r after:from-[#004428] after:via-[#065f46] after:to-[#8c2442] after:z-10">
        <img
          src="/assets/product_banner.png"
          alt="Our Product Range - Precision-engineered components and solutions"
          className="w-full h-auto block"
        />
      </section>

      {/* 2. Main Section Header & Products Grid */}
      <section className="py-20 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 mb-14 pb-7 border-b border-slate-200">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-slate-900 leading-[1.22] tracking-tight m-0">
                Engineered for <br />
                <span className="italic font-normal text-[#8c2442]">Demanding</span> Applications
              </h1>
            </div>
            <div>
              <p className="max-w-[480px] text-[15px] font-normal text-slate-500 leading-relaxed m-0">
                Every product in our range is built to perform — precision materials, exacting tolerances, and global-standard certifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCatalog.map((product) => (
              <div 
                key={product.id} 
                id={product.id} 
                className={`group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300 ${
                  product.id === 'press-parts' ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''
                }`}
              >
                <div className="relative h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-block bg-slate-700/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider py-1 px-3 rounded-full uppercase">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 pb-6.5 flex flex-col flex-1">
                  <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {product.category}
                  </div>
                  <h3 className="text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3.5">
                    {product.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  <Link 
                    to={product.link} 
                    className="mt-auto inline-flex items-center gap-2 text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 hover:text-[#5c182c] group-hover:gap-3"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom Custom Solutions CTA Section */}
      <section className="relative w-full bg-[#111317] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2.5px] before:bg-gradient-to-r before:from-[#004428] before:via-[#065f46] before:to-[#8c2442] before:z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-[72px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="max-w-[580px]">
            <span className="block text-[13.5px] font-normal text-[#8b96a5] mb-3">Custom Solutions</span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-4 leading-tight tracking-tight">
              Need a Custom <br />
              Solution?
            </h2>
            <p className="text-[14.5px] text-slate-400 max-w-[480px] leading-relaxed m-0">
              We engineer to specification. Share your requirements and our team will respond promptly.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-3 bg-transparent text-white border border-white/20 rounded py-3.5 px-7 text-[12.5px] font-semibold tracking-wider uppercase transition-all duration-200 hover:border-white hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <span>REQUEST PRODUCT DETAILS</span>
              <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
