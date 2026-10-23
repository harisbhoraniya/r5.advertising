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

const products: ProductItem[] = [
  {
    id: 'roller-ball',
    title: 'Roller Ball Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'SELF-LOCKING · BALL LOCK',
    image: '/assets/range_roller_ball.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'roller-ball-hd',
    title: 'Roller Ball Heavy Duty Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · HIGH TENSILE',
    image: '/assets/Cable_Ties.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'releasable',
    title: 'Releasable Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'REUSABLE · PPA571 COATED',
    image: '/assets/range_releasable.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'ladder',
    title: 'Ladder Cable Tie',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'LADDER TYPE · SELF-LOCKING',
    image: '/assets/range_ladder.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'marker-tag',
    title: 'Cable Marker Tag',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'LASER & EMBOSSED',
    image: '/assets/range_marker_tag.png',
    link: '/products/n-loc/roller-ball',
  },
  {
    id: 'marker-plates',
    title: 'Marker Plates',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'STAINLESS STEEL PLATES',
    image: '/assets/marker_tag.png',
    link: '/products/n-loc/roller-ball',
  },
];

export const ProductRange: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 pb-16 sm:pb-20 bg-white" id="products">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0d8a68] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#0d8a68]">
          OUR RANGE
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-7 sm:mb-9">
          Explore the <span className="font-accent italic font-medium text-[#d27083] ml-1 sm:ml-1.5">N-LOC Range</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item) => (
            <div 
              key={item.id} 
              id={item.id} 
              className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
            >
              <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
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
  );
};

export default ProductRange;
