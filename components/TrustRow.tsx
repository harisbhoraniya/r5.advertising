import React from 'react';

export const TrustRow: React.FC = () => {

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


  return (
    <section className="py-8 sm:py-10 pb-6 sm:pb-8 border-y border-slate-200 bg-[#fafbfc]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col">
        {/* All Trust Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {trustPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col p-4 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 shadow-sm sm:shadow-none transition-all duration-200"
            >
              <h4 className="text-[14px] sm:text-[14.5px] font-bold text-slate-900 mb-1.5 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 sm:hidden" />
                {item.title}
              </h4>
              <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TrustRow;
