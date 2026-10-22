import React, { useState } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { BackToProducts } from '../components/BackToProducts';
import { TrustRow } from '../components/TrustRow';

export const RollerBallPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'coated' | 'uncoated'>('uncoated');

  // Table 1: 4.6mm Width Data
  const table46Data = [
    { partNo: 'NBC46-100', width: '4.6', length: 100, thickness: '0.25', maxBundle: 18, tensile: 445 },
    { partNo: 'NBC46-127', width: '4.6', length: 127, thickness: '0.25', maxBundle: 27, tensile: 445 },
    { partNo: 'NBC46-150', width: '4.6', length: 150, thickness: '0.25', maxBundle: 34, tensile: 445 },
    { partNo: 'NBC46-200', width: '4.6', length: 200, thickness: '0.25', maxBundle: 50, tensile: 445 },
    { partNo: 'NBC46-250', width: '4.6', length: 250, thickness: '0.25', maxBundle: 66, tensile: 445 },
    { partNo: 'NBC46-260', width: '4.6', length: 260, thickness: '0.25', maxBundle: 69, tensile: 445 },
    { partNo: 'NBC46-300', width: '4.6', length: 300, thickness: '0.25', maxBundle: 82, tensile: 445 },
    { partNo: 'NBC46-360', width: '4.6', length: 360, thickness: '0.25', maxBundle: 100, tensile: 445 },
    { partNo: 'NBC46-400', width: '4.6', length: 400, thickness: '0.25', maxBundle: 114, tensile: 445 },
    { partNo: 'NBC46-450', width: '4.6', length: 450, thickness: '0.25', maxBundle: 130, tensile: 445 },
    { partNo: 'NBC46-520', width: '4.6', length: 520, thickness: '0.25', maxBundle: 151, tensile: 445 },
    { partNo: 'NBC46-620', width: '4.6', length: 620, thickness: '0.25', maxBundle: 183, tensile: 445 },
    { partNo: 'NBC46-680', width: '4.6', length: 680, thickness: '0.25', maxBundle: 203, tensile: 445 },
    { partNo: 'NBC46-840', width: '4.6', length: 840, thickness: '0.25', maxBundle: 253, tensile: 445 },
    { partNo: 'NBC46-1000', width: '4.6', length: 1000, thickness: '0.25', maxBundle: 304, tensile: 445 },
  ];

  // Table 2: 7.9mm Width Data
  const table79Data = [
    { partNo: 'NBC79-100', width: '7.9', length: 100, thickness: '0.25', maxBundle: 18, tensile: 1112 },
    { partNo: 'NBC79-127', width: '7.9', length: 127, thickness: '0.25', maxBundle: 27, tensile: 1112 },
    { partNo: 'NBC79-150', width: '7.9', length: 150, thickness: '0.25', maxBundle: 34, tensile: 1112 },
    { partNo: 'NBC79-200', width: '7.9', length: 200, thickness: '0.25', maxBundle: 50, tensile: 1112 },
    { partNo: 'NBC79-250', width: '7.9', length: 250, thickness: '0.25', maxBundle: 66, tensile: 1112 },
    { partNo: 'NBC79-260', width: '7.9', length: 260, thickness: '0.25', maxBundle: 69, tensile: 1112 },
    { partNo: 'NBC79-300', width: '7.9', length: 300, thickness: '0.25', maxBundle: 82, tensile: 1112 },
    { partNo: 'NBC79-360', width: '7.9', length: 360, thickness: '0.25', maxBundle: 100, tensile: 1112 },
    { partNo: 'NBC79-400', width: '7.9', length: 400, thickness: '0.25', maxBundle: 114, tensile: 1112 },
    { partNo: 'NBC79-450', width: '7.9', length: 450, thickness: '0.25', maxBundle: 130, tensile: 1112 },
    { partNo: 'NBC79-520', width: '7.9', length: 520, thickness: '0.25', maxBundle: 151, tensile: 1112 },
    { partNo: 'NBC79-620', width: '7.9', length: 620, thickness: '0.25', maxBundle: 183, tensile: 1112 },
    { partNo: 'NBC79-680', width: '7.9', length: 680, thickness: '0.25', maxBundle: 203, tensile: 1112 },
    { partNo: 'NBC79-840', width: '7.9', length: 840, thickness: '0.25', maxBundle: 253, tensile: 1112 },
    { partNo: 'NBC79-1000', width: '7.9', length: 1000, thickness: '0.25', maxBundle: 304, tensile: 1112 },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Banner with N-Loc Banner Image */}
      <HeroBanner 
        bannerImage="/assets/hero_banner.png"
        altText="N-LOC Stainless Steel Cable Ties"
      />

      {/* 2. Back to Products Bar */}
      <BackToProducts />

      {/* 3. Roller Ball Variants & Specifications */}
      <section className="py-9 pb-16 bg-white">
        {/* Coated / Uncoated Interactive Showcase Card */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-center items-center gap-2.5 mx-auto mb-9 w-full">
            <button
              type="button"
              className={`inline-flex items-center justify-center whitespace-nowrap h-11 px-9 text-[15px] font-semibold rounded-full transition-all duration-200 cursor-pointer outline-none ${
                activeTab === 'uncoated' 
                  ? 'bg-gradient-to-r from-[#004428] to-[#065f46] text-white shadow-[0_4px_18px_rgba(6,95,70,0.32)] -translate-y-0.5' 
                  : 'bg-white text-slate-700 border border-slate-300 shadow-sm hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-700 hover:-translate-y-0.5'
              }`}
              onClick={() => setActiveTab('uncoated')}
            >
              Uncoated
            </button>
            <button
              type="button"
              className={`inline-flex items-center justify-center whitespace-nowrap h-11 px-9 text-[15px] font-semibold rounded-full transition-all duration-200 cursor-pointer outline-none ${
                activeTab === 'coated' 
                  ? 'bg-gradient-to-r from-[#004428] to-[#065f46] text-white shadow-[0_4px_18px_rgba(6,95,70,0.32)] -translate-y-0.5' 
                  : 'bg-white text-slate-700 border border-slate-300 shadow-sm hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-700 hover:-translate-y-0.5'
              }`}
              onClick={() => setActiveTab('coated')}
            >
              Coated
            </button>
          </div>

          {/* Display Card Matching User Reference Photo */}
          <div className="relative bg-[#f8fafc] border border-slate-200 rounded-2xl p-7 md:p-11 shadow-sm overflow-hidden">
            {/* Top Area: Image on Left, Content on Right */}
            <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-10 items-center relative z-10">
              <div className="flex items-center justify-center p-4">
                <img 
                  src={activeTab === 'coated' ? '/assets/range_roller_ball.png' : '/assets/cable_tie_overview.png'} 
                  alt={activeTab === 'coated' ? 'Roller Ball Coated Cable Tie' : 'Roller Ball Uncoated Cable Tie'}
                  className="max-w-full h-auto max-h-[240px] object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col">
                <div className="text-[19px] font-normal text-slate-600 tracking-tight mb-1">
                  Stainless Steel Cable Ties
                </div>
                <h3 className="text-3xl md:text-[34px] font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                  {activeTab === 'coated' ? 'Roller Ball Coated' : 'Roller Ball Uncoated'}
                </h3>

                <ul className="flex flex-col gap-2.5 text-[14.5px] text-slate-700 leading-normal pl-4 list-disc marker:text-slate-500">
                  {activeTab === 'coated' ? (
                    <>
                      <li>Roller ball stainless steel cable ties coated.</li>
                      <li>Self-locking design for fast and secure installation.</li>
                      <li>Fully enclosed head prevents dirt or grit from interfering with locking mechanism.</li>
                      <li>Smooth rounded edges for safe handling.</li>
                      <li>Suitable for all types of cable insulation.</li>
                      <li>Fire proof.</li>
                      <li>Packaged quantity in 100/ Bag</li>
                    </>
                  ) : (
                    <>
                      <li>Roller ball stainless steel cable ties uncoated.</li>
                      <li>Self-locking design for fast and secure installation.</li>
                      <li>Fully enclosed head prevents dirt or grit from interfering with locking mechanism.</li>
                      <li>Smooth rounded edges for safe handling.</li>
                      <li>Suitable for extreme temperature and cleanroom environments.</li>
                      <li>Fire proof & non-magnetic.</li>
                      <li>Packaged quantity in 100/ Bag</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Bottom 3 Columns Matching Photo */}
            <div className="mt-11 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.35fr] gap-6 md:gap-8 relative z-10">
              <div className="flex flex-col">
                <h4 className="text-[14.5px] font-extrabold text-slate-900 mb-2 tracking-tight">Available in Grade</h4>
                <div className="text-[13.5px] text-slate-700 leading-normal flex flex-col gap-1">
                  <span>Stainless Steel.</span>
                  <span>304/304L : 316/316L</span>
                </div>
              </div>

              <div className="flex flex-col md:pl-8 md:border-l border-slate-300">
                <h4 className="text-[14.5px] font-extrabold text-slate-900 mb-2 tracking-tight">Temperature Range</h4>
                <div className="text-[13.5px] text-slate-700 leading-normal flex flex-col gap-1">
                  <span>{activeTab === 'coated' ? '-60°C to +150°C' : '-80°C to +538°C'}</span>
                </div>
              </div>

              <div className="flex flex-col md:pl-8 md:border-l border-slate-300">
                <h4 className="text-[14.5px] font-extrabold text-slate-900 mb-2 tracking-tight">Surface Finish</h4>
                <div className="text-[13.5px] text-slate-700 leading-normal flex flex-col gap-1">
                  <span>
                    {activeTab === 'coated' ? 'Polyester and  Nylon - Coated.' : 'Bare Metallic / Uncoated.'}
                  </span>
                  
                  {activeTab === 'coated' ? (
                    <>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-[22px] h-[22px] rounded-sm inline-block shadow-sm border border-black/10 bg-[#1e1e1e]" title="Black" />
                        <span className="w-[22px] h-[22px] rounded-sm inline-block shadow-sm border border-black/10 bg-[#e11d48]" title="Red" />
                        <span className="w-[22px] h-[22px] rounded-sm inline-block shadow-sm border border-black/10 bg-[#059669]" title="Green" />
                        <span className="w-[22px] h-[22px] rounded-sm inline-block shadow-sm border border-black/10 bg-[#0284c7]" title="Blue" />
                        <span className="w-[22px] h-[22px] rounded-sm inline-block shadow-sm border border-black/10 bg-[#eab308]" title="Yellow" />
                      </div>
                      <span className="text-[11.5px] text-slate-500 mt-1.5">*Colour as per requirements</span>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-[22px] h-[22px] rounded-sm inline-block shadow-sm border border-slate-400 bg-gradient-to-br from-slate-200 to-slate-400" title="Silver Metallic" />
                      </div>
                      <span className="text-[11.5px] text-slate-500 mt-1.5">*Custom finish & embossing available</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Side-by-Side Coated Tables (Responsive: Stack on small screens) */}
            {activeTab === 'coated' && (
              <div className="mt-12 pt-9 border-t border-slate-200 w-full relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
                  {/* Table 1: 4.6mm Width */}
                  <div className="bg-white border-2 border-emerald-100 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-emerald-200 hover:shadow-md">
                    <div className="bg-gradient-to-r from-[#004428] to-[#065f46] text-white text-[13.5px] font-bold tracking-wider py-3 px-4 text-center uppercase border-b-2 border-emerald-600">
                      BALL LOCK - COATED - 4.6MM WIDTH
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[12.5px] border-collapse">
                        <thead className="bg-emerald-50 border-b border-emerald-200">
                          <tr>
                            <th className="text-left py-2.5 px-3 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100">Part No.</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Width<br />mm</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Length<br />mm</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Thickness<br />mm</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Max Bundle<br />Diameter (mm)</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] leading-tight">Minimum Loop<br />Tensile strength (N)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table46Data.map((row, idx) => (
                            <tr 
                              key={row.partNo} 
                              className={`border-b border-slate-100 transition-colors hover:bg-emerald-50/70 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
                            >
                              <td className="text-left py-2 px-3 font-semibold text-emerald-800 border-r border-slate-100">{row.partNo}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.width}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.length}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.thickness}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.maxBundle}</td>
                              <td className="text-center py-2 px-2 text-slate-700">{row.tensile}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Table 2: 7.9mm Width */}
                  <div className="bg-white border-2 border-emerald-100 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-emerald-200 hover:shadow-md">
                    <div className="bg-gradient-to-r from-[#004428] to-[#065f46] text-white text-[13.5px] font-bold tracking-wider py-3 px-4 text-center uppercase border-b-2 border-emerald-600">
                      BALL LOCK - COATED – 7.9MM WIDTH
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[12.5px] border-collapse">
                        <thead className="bg-emerald-50 border-b border-emerald-200">
                          <tr>
                            <th className="text-left py-2.5 px-3 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100">Part No.</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Width<br />mm</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Length<br />mm</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Thickness<br />mm</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] border-r border-emerald-100 leading-tight">Max Bundle<br />Diameter (mm)</th>
                            <th className="text-center py-2.5 px-2 font-bold text-emerald-950 text-[11.5px] leading-tight">Minimum Loop<br />Tensile strength (N)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table79Data.map((row, idx) => (
                            <tr 
                              key={row.partNo} 
                              className={`border-b border-slate-100 transition-colors hover:bg-emerald-50/70 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
                            >
                              <td className="text-left py-2 px-3 font-semibold text-emerald-800 border-r border-slate-100">{row.partNo}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.width}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.length}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.thickness}</td>
                              <td className="text-center py-2 px-2 text-slate-700 border-r border-slate-100">{row.maxBundle}</td>
                              <td className="text-center py-2 px-2 text-slate-700">{row.tensile}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Trust Row */}
      <TrustRow />
    </div>
  );
};

export default RollerBallPage;
