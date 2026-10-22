import React from 'react';

interface ApplicationItem {
  id: string;
  title: string;
  image: string;
}

const applications: ApplicationItem[] = [
  {
    id: 'control-panels',
    title: 'Control Panels',
    image: '/assets/app_control_panels.png'
  },
  {
    id: 'solar-pv',
    title: 'Solar PV Industries',
    image: '/assets/app_solar_pv.png'
  },
  {
    id: 'wind-turbine',
    title: 'Wind Turbine',
    image: '/assets/app_wind_turbine.png'
  },
  {
    id: 'shipbuilding',
    title: 'Shipbuilding',
    image: '/assets/app_shipbuilding.png'
  }
];

export const ApplicationsSection: React.FC = () => {
  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0d8a68] mb-2 before:content-[''] before:inline-block before:w-6 before:h-[1.5px] before:bg-[#0d8a68]">
          WHERE IT'S USED
        </div>
        <h2 className="text-[28px] md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.15] mt-1 mb-9">
          Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-200 rounded-[14px] overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-full h-[190px] overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center bg-white border-t border-slate-100">
                <h4 className="text-[15px] font-bold text-gray-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
