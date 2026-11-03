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

// Verified Technical Specifications data from enclosure engineering datasheets
const technicalSpecifications = [
  { spec: 'Enclosure Material', details: 'Aluminium Die-Cast (LM6 / ADC12), Stainless Steel (AISI 304 / 316), and Mild Steel (CRCA)' },
  { spec: 'Ingress Protection', details: 'IP66, IP67, and IP68 certified weatherproof, watertight, and dust-tight sealing' },
  { spec: 'Gasket Sealing', details: 'Continuous closed-cell Neoprene, EPDM, or Silicone weather-resistant gaskets' },
  { spec: 'Surface Treatment', details: 'Epoxy polyester powder coating (RAL 7035 / RAL 7032), natural brushed SS, or hot-dip galvanizing' },
  { spec: 'Cover Fastening', details: 'Stainless steel captive screws, heavy-duty hinges, and quick-release toggle clamps' },
  { spec: 'Internal Provisions', details: 'Zinc-plated component mounting plates, DIN rail brackets, and internal/external copper earthing studs' },
  { spec: 'Operating Temperature', details: '-40°C to +100°C (Silicone gasket rated up to +180°C)' },
  { spec: 'Custom Machining', details: 'Factory precision CNC drilled gland entries, threaded conduit ports, and pre-wired terminal arrangements' },
  { spec: 'Primary Applications', details: 'Outdoor solar PV combiner boxes, railway signalling, petrochemical facilities, marine dock installations, and industrial automation' },
];

const LinkBoxPage: React.FC = () => {
  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner (Descriptive Naming: "Weatherproof Junction Boxes & Enclosures", Pink removed) ── */}
      <section className="relative w-full min-h-[365px] sm:min-h-[405px] md:min-h-[450px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/link_box/linkbox_hero_banner_hd.webp"
            alt="NAEPL Weatherproof Junction Boxes and Industrial Enclosures"
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
            Weatherproof Junction Boxes · LINKBOX Series
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Weatherproof Junction Boxes <br className="hidden sm:inline" />
            <span className="text-[#8fd6ae]">Built to Protect.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[640px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Engineered to safely house and protect critical electrical connections and electronic components, LINKBOX series products deliver IP66 and IP68 certified protection for demanding outdoor and industrial environments.
          </p>

          {/* Quick Action CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="font-montserrat inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore Enclosures Range</span>
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
              src="/assets/link_box/junction_box_overview.webp"
              alt="NAEPL Weatherproof Industrial Enclosures"
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Core Specifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
              WEATHERPROOF ENCLOSURES · LINKBOX SERIES
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              Built to Protect. <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Designed to Connect.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NAEPL manufactures precision electrical junction boxes and terminal enclosures under the LINKBOX series in die-cast Aluminium, Stainless Steel, and Mild Steel. Designed to shield internal electrical connections from moisture ingress, dust storms, UV radiation, and mechanical impacts, these enclosures offer dependable IP66/IP68 ingress protection across industrial manufacturing and infrastructure networks.
            </p>

            {/* Two Simple Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-7">
              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">PREMIUM MATERIALS</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  Die-cast aluminium (LM6), stainless steel (SS304/316), and heavy-gauge mild steel.
                </p>
              </div>

              <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">IP66 / IP68 PROTECTION</h4>
                <p className="text-[13px] sm:text-[13.5px] leading-normal text-slate-500">
                  High ingress resistance with precision-moulded closed-cell continuous gaskets.
                </p>
              </div>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Weather Resistant (IP66/IP68)
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Corrosion Resistant
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                UV &amp; Thermal Tested
              </span>
            </div>

            {/* Bottom Tagline Container */}
            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-500">
                Secure protection for electrical connections in harsh and hazardous industrial environments.
              </p>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                Built to Protect. Designed to Connect.
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
              Actual verified mechanical characteristics, ingress ratings, and fabrication specifications for NAEPL Weatherproof Enclosures.
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
            Explore the <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Enclosures &amp; Junction Boxes Range</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Card 1: Aluminium Die Cast Junction Box */}
            <div
              id="aluminium-enclosure"
              className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
            >
              <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  src="/assets/link_box/aluminium_junction_box.webp"
                  alt="Aluminium Die Cast Junction Box"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  ALUMINIUM DIE-CAST ENCLOSURES
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                  Aluminium Die Cast Enclosures
                </h3>
                <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0">
                  Corrosion-resistant die-cast aluminium enclosures offering IP66 protection against mechanical impacts.
                </p>
              </div>
            </div>

            {/* Card 2: Stainless Steel Watertight Junction Box */}
            <div
              id="ss-enclosure"
              className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
            >
              <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  src="/assets/link_box/stainless_steel_junction_box.webp"
                  alt="Stainless Steel Watertight Junction Box"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  STAINLESS STEEL ENCLOSURES
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                  Stainless Steel Enclosures
                </h3>
                <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0">
                  Fabricated in AISI 304/316 for severe marine, offshore, and chemical washdown applications.
                </p>
              </div>
            </div>

            {/* Card 3: Mild Steel Clamp-Secured Junction Box */}
            <div
              id="ms-enclosure"
              className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
            >
              <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  src="/assets/link_box/mild_steel_junction_box.webp"
                  alt="Mild Steel Clamp-Secured Junction Box"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  MILD STEEL JUNCTION BOXES
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                  Mild Steel Junction Boxes
                </h3>
                <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0">
                  Heavy-gauge CRCA sheet steel enclosures with high-grade powder coating for industrial indoor use.
                </p>
              </div>
            </div>

            {/* Card 4: Custom Machined & Terminal Enclosures */}
            <div
              id="custom-enclosure"
              className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
            >
              <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  src="/assets/link_box/custom_machined_enclosure.webp"
                  alt="Custom Machined & Pre-Assembled Enclosures"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  CUSTOM ELECTRICAL ENCLOSURES
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                  Custom Terminal Enclosures
                </h3>
                <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0">
                  Factory pre-drilled gland entries, terminal rails, and custom internal assembly to specification.
                </p>
              </div>
            </div>

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
                  src="/assets/brochure_covers/link_box_brochure_cover.webp"
                  alt="NAEPL Weatherproof Enclosures Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link href="/brochure?doc=link-box-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download Enclosures Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>NAEPL Technical Consultation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Machining, Sizing, or Terminal Assembly?
              </h2>

              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our enclosure engineering team helps OEMs, contractors, and consultants with custom cutouts, terminal rail configurations, cable gland drilling, and application-specific ingress certification.
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

export default LinkBoxPage;
