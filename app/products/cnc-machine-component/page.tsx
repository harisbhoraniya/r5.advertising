'use client';
import React from 'react';
import Link from 'next/link';
import { BackToProducts } from '@/components/BackToProducts';
import { TrustRow } from '@/components/TrustRow';
import {
  CheckCircle2,
  ArrowRight,
  FileText
} from 'lucide-react';

// Verified Technical Specifications data from CNC machining engineering datasheets
const technicalSpecifications = [
  { spec: 'Material Grades', details: 'Electrolytic Copper (C11000 / C14500), Stainless Steel (SS303 / 304 / 316 / 17-4PH), Aluminium (AL6061 / 6082 / 7075), Chrome Steel (EN31 / EN19 / 52100), and Brass' },
  { spec: 'Machining Operations', details: 'Multi-axis CNC turning, CNC vertical milling (VMC), precision drilling, thread whirling, broaching, and fine cylindrical grinding' },
  { spec: 'Dimensional Tolerances', details: 'High precision achievable up to ±0.005 mm (micron-level accuracy adhering to GD&T drawings)' },
  { spec: 'Size & Capacity Range', details: 'Turning diameters from Ø 3.0 mm to Ø 300 mm; Milling work envelope up to 600 mm x 450 mm' },
  { spec: 'Surface Roughness', details: 'Fine surface finishes achievable from Ra 0.4 μm to Ra 1.6 μm' },
  { spec: 'Plating & Treatments', details: 'Electro-tin, hard silver, electroless nickel (ENP), passivation, zinc phosphating, and hard anodizing' },
  { spec: 'Inspection & Metrology', details: 'CMM inspection, optical digital profile projectors, surface roughness testers, and calibrated thread gauges' },
  { spec: 'Production Flexibility', details: 'Prototype sample development, pre-series runs, and scalable repeat batch production with PPAP documentation' },
  { spec: 'Primary Applications', details: 'Electrical switchgear, automotive sensors & powertrain assemblies, robotics, industrial fluid instrumentation, and valve mechanisms' },
];

const CncMachineComponentPage: React.FC = () => {
  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner (Pink removed, corporate styling applied) ── */}
      <section className="relative w-full min-h-[365px] sm:min-h-[405px] md:min-h-[450px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/cnc_machined/cnc_hero_banner_hd.webp"
            alt="NAEPL CNC Machined Components Precision Engineering"
            className="w-full h-full object-cover object-[center_center]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,17,14,0.85) 0%, rgba(10,17,14,0.52) 50%, rgba(10,17,14,0.18) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,17,14,0.85) 0%, rgba(10,17,14,0.25) 40%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            CNC Machined Components · Precision Engineering
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Precision CNC Components <br className="hidden sm:inline" />
            <span className="text-[#8fd6ae]">Performance You Can Trust.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[640px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Custom precision CNC turned, milled, and drilled components manufactured strictly to customer drawings and CAD models across Copper, Stainless Steel, Aluminium, and Chrome Steel for demanding global assemblies.
          </p>

          {/* Quick Action CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="font-montserrat inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore CNC Range</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Back To Products Bar ── */}
      <BackToProducts />

      {/* ── 3. Product Overview Section ── */}
      <section className="py-10 sm:py-14 md:py-18 bg-white" id="overview">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 lg:gap-14 items-center">

          {/* Left Side: Single Product Image Showcase */}
          <div className="bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-sm">
            <img
              src="/assets/cnc_machined/page_91_img_0.webp"
              alt="NAEPL CNC Machined Components"
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Core Specifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
              CNC MACHINED COMPONENTS · PRECISION TURNING &amp; MILLING
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              Precision You Can Measure. <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Performance You Can Trust.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NAEPL produces custom precision machined components strictly as per technical drawings and physical samples provided by clients. Leveraging multi-axis CNC lathes, vertical machining centers (VMC), and high-precision inspection metrology, we deliver micron-accurate dimensions, uniform concentricity, fine thread pitch consistency, and exceptional surface finishes across diverse industrial applications.
            </p>

            {/* Two Simple Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-7">
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">MICRON-LEVEL ACCURACY</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Tolerances up to ±0.005 mm maintained across high-volume repeat manufacturing runs.
                </p>
              </div>

              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">MULTI-ALLOY EXPERTISE</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Machining Copper, SS316, AL6061, Chrome Steel EN31, and Brass with custom surface treatments.
                </p>
              </div>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Tight Tolerances (±0.005 mm)
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                CMM Quality Inspection
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                PPAP &amp; Traceability
              </span>
            </div>

            {/* Bottom Tagline Container */}
            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-500">
                Precision manufactured for consistent, dependable quality across global assembly lines.
              </p>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                Precision You Can Measure. Performance You Can Trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Technical Specifications Table Section ── */}
      <section className="py-12 sm:py-16 bg-[#f8f9fa] border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#004428]">
              Verified Engineering Specifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Technical Specification Table
            </h3>
            <p className="text-sm text-slate-500 mt-1 max-w-[620px]">
              Actual verified machining parameters, metallurgical grades, and tolerance capabilities for NAEPL CNC Machined Components.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500 tracking-wider">
                  <tr>
                    <th className="py-4 px-5 sm:px-6 w-1/3">Specification</th>
                    <th className="py-4 px-5 sm:px-6">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {technicalSpecifications.map((row, idx) => (
                    <tr 
                      key={row.spec} 
                      className={`transition-colors hover:bg-slate-50/80 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                      }`}
                    >
                      <td className="py-3.5 px-5 sm:px-6 font-semibold text-slate-900">
                        {row.spec}
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-slate-600 leading-relaxed">
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Product Range Showcase ── */}
      <section className="py-12 sm:py-16 pb-16 sm:pb-20 bg-white" id="products">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
            OUR RANGE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-7 sm:mb-9">
            Explore the <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">CNC Machined Components Range</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                id: 'copper-machined-components',
                title: 'Copper Machined Components',
                category: 'COPPER PRECISION MACHINED COMPONENTS',
                badge: 'C11000 · C14500 · C18200',
                image: '/assets/cnc_machined/page_92_img_9.webp',
                desc: 'Precision copper turned parts with exceptional conductivity for switchgear and electrical terminals.',
              },
              {
                id: 'stainless-steel-cnc-components',
                title: 'Stainless Steel CNC Components',
                category: 'STAINLESS STEEL MACHINED COMPONENTS',
                badge: 'SS 303 / 304 / 316 / 17-4PH',
                image: '/assets/cnc_machined/page_93_img_8.webp',
                desc: 'Marine-grade and surgical alloy turned and milled components with high corrosion resistance.',
              },
              {
                id: 'aluminium-machined-components',
                title: 'Aluminium Machined Components',
                category: 'ALUMINIUM CNC MACHINED COMPONENTS',
                badge: 'AL 6061 · 6082 · 7075',
                image: '/assets/cnc_machined/page_94_img_0.webp',
                desc: 'Lightweight, high-strength CNC milled parts with precision anodized and passivated finishes.',
              },
              {
                id: 'custom-alloy-cnc-parts',
                title: 'Chrome Steel & Alloy Parts',
                category: 'CHROME STEEL & ALLOY MACHINED COMPONENTS',
                badge: 'EN31 · EN19 · 52100',
                image: '/assets/cnc_machined/page_91_img_0.webp',
                desc: 'Wear-resistant bearing pins, shafts, bushings, and high-load mechanical drive components.',
              },
            ].map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
              >
                <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {product.category}
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight m-0 mb-3 leading-snug">
                    {product.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Trust Row / Certified Engineering ── */}
      <TrustRow />

      {/* ── 7. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: A4 Brochure Mockup Card + Download PDF Brochure Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/cnc_brochure_cover.webp"
                  alt="NAEPL CNC Machined Components Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link href="/brochure?doc=cnc-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12px] sm:text-[13px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download CNC Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>NAEPL Technical Consultation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Have a Custom CAD Drawing, 3D STEP File, or Physical Sample?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our CNC precision machining engineering team reviews your drawings, GD&amp;T tolerances, and material specifications for feasibility and optimal manufacturing efficiency. We deliver fast quotation turnaround with prototype samples.
              </p>

              <div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-[#004428] font-bold px-7 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                >
                  <span>Request Quotation &amp; Samples</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default CncMachineComponentPage;
