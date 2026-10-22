import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TrustRow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trustPoints = [
    {
      title: 'ISO 9001:2015 Certified',
      description: 'Globally recognized quality management standards.'
    },
    {
      title: 'High Precision Manufacturing',
      description: 'Tight tolerances and complex geometries with consistency.'
    },
    {
      title: 'On-Time Delivery',
      description: 'Reliable timelines and strong logistics commitment.'
    },
    {
      title: 'Flexible Batch Quantities',
      description: 'Low to high volume production runs.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? trustPoints.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === trustPoints.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 pb-8 border-y border-slate-200 bg-[#fafbfc]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col">
        {/* All Trust Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col transition-all duration-200 ${idx === currentIndex ? 'opacity-100' : 'opacity-90'}`}
            >
              <h4 className="text-[14.5px] font-bold text-slate-900 mb-1.5 tracking-tight">{item.title}</h4>
              <p className="text-[13px] leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Bar after the entire content (Left: Previous, Right: Next) */}
        <div className="flex justify-between items-center w-full mt-9 pt-5 border-t border-slate-200">
          <button 
            type="button" 
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-white border border-slate-300 text-slate-700 text-[13.5px] font-semibold cursor-pointer shadow-sm transition-all duration-200 select-none outline-none hover:border-emerald-700 hover:text-emerald-700 hover:bg-emerald-50 hover:shadow-md hover:-translate-x-1 active:scale-95" 
            onClick={handlePrev}
            aria-label="Previous"
            title="Previous"
          >
            <ChevronLeft size={20} />
            <span className="text-[13.5px] font-semibold">Previous</span>
          </button>

          <button 
            type="button" 
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-white border border-slate-300 text-slate-700 text-[13.5px] font-semibold cursor-pointer shadow-sm transition-all duration-200 select-none outline-none hover:border-emerald-700 hover:text-emerald-700 hover:bg-emerald-50 hover:shadow-md hover:translate-x-1 active:scale-95" 
            onClick={handleNext}
            aria-label="Next"
            title="Next"
          >
            <span className="text-[13.5px] font-semibold">Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
