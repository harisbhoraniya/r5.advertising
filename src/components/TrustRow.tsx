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
    <section className="py-8 sm:py-10 pb-6 sm:pb-8 border-y border-slate-200 bg-[#fafbfc]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col">
        {/* All Trust Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {trustPoints.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-4 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 shadow-sm sm:shadow-none transition-all duration-200 ${
                idx === currentIndex ? 'border-emerald-500/50 ring-1 ring-emerald-500/20 sm:ring-0' : 'opacity-90'
              }`}
            >
              <h4 className="text-[14px] sm:text-[14.5px] font-bold text-slate-900 mb-1.5 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 sm:hidden" />
                {item.title}
              </h4>
              <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Bar after the entire content (Left: Previous, Right: Next) */}
        <div className="flex justify-between items-center w-full mt-7 sm:mt-9 pt-4 sm:pt-5 border-t border-slate-200">
          <button 
            type="button" 
            className="inline-flex items-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs sm:text-[13.5px] font-semibold cursor-pointer shadow-sm transition-all duration-200 select-none outline-none hover:border-emerald-700 hover:text-emerald-700 hover:bg-emerald-50 hover:shadow-md hover:-translate-x-0.5 active:scale-95" 
            onClick={handlePrev}
            aria-label="Previous item"
            title="Previous"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            <span>Previous</span>
          </button>

          {/* Dots Indicator on mobile */}
          <div className="flex items-center gap-1.5">
            {trustPoints.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === currentIndex ? 'w-4 bg-emerald-600' : 'w-1.5 bg-slate-300'
                }`}
              />
            ))}
          </div>

          <button 
            type="button" 
            className="inline-flex items-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs sm:text-[13.5px] font-semibold cursor-pointer shadow-sm transition-all duration-200 select-none outline-none hover:border-emerald-700 hover:text-emerald-700 hover:bg-emerald-50 hover:shadow-md hover:translate-x-0.5 active:scale-95" 
            onClick={handleNext}
            aria-label="Next item"
            title="Next"
          >
            <span>Next</span>
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustRow;
