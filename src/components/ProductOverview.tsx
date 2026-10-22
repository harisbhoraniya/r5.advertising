import React from 'react';

export const ProductOverview: React.FC = () => {
  const badges = [
    'Fire Proof',
    'Corrosion Resistant',
    'Extreme Temperature Resistant',
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-8 lg:gap-14 items-center">
        {/* Left Side: Product Image Showcase */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 sm:p-6 flex items-center justify-center shadow-sm">
          <img 
            src="/assets/cable_tie_overview.png" 
            alt="N-LOC Stainless Steel Cable Tie Mechanism" 
            className="w-full h-auto rounded-lg object-cover max-h-[280px] sm:max-h-none"
          />
        </div>

        {/* Right Side: Product Details & Specifications */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0d8a68] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#0d8a68]">
            STAINLESS STEEL CABLE TIES
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-[22px]">
            One-Stop <span className="font-accent italic font-medium text-[#d27083] ml-1 sm:ml-1.5">Engineering Solutions</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-gray-600 mb-5 font-normal">
            NLOC is NAEPL's specialized brand focused on reliable cable management and identification 
            solutions. The brand offers stainless steel cable ties, cable markers and identification 
            products designed for secure and organized cable installations. NLOC products are suitable 
            for demanding applications where strength, durability, temperature resistance and 
            corrosion resistance are essential.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-7">
            <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">PREMIUM QUALITY</h4>
              <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">High-grade stainless steel for durable cable fastening</p>
            </div>
            
            <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">SUPERIOR STRENGTH</h4>
              <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">High tensile strength for secure, heavy-duty applications.</p>
            </div>
          </div>

          {/* Badges / Pill Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
            {badges.map((badge, idx) => (
              <span 
                key={idx} 
                className="inline-block py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none"
              >
                {badge}
              </span>
            ))}
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
  );
};

export default ProductOverview;
