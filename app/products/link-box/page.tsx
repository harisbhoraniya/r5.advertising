'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { BackToProducts } from '@/components/BackToProducts';
import { TrustRow } from '@/components/TrustRow';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileText,
  Search,
  X,
  Check
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  aluminiumEnclosuresData,
  mildSteelJunctionBoxesData,
  stainlessSteelJunctionBoxesData,
  pushButtonPanelsData,
} from '@/data/linkBoxProductsData';

const LinkBoxPage: React.FC = () => {
  const [activeTable, setActiveTable] = useState<'aluminium' | 'mild-steel' | 'stainless-steel' | 'push-button'>('aluminium');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner (Descriptive Naming: "Weatherproof Junction Boxes & Enclosures", Pink removed) ── */}
      <section className="relative w-full min-h-[365px] sm:min-h-[405px] md:min-h-[450px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/link_box/linkbox_hero_banner_hd.webp"
            alt="NAEPL Junction Boxes and Industrial Enclosures"
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
            Junction Boxes · LINKBOX Series
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Junction Boxes <br className="hidden sm:inline" />
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
              alt="NAEPL Industrial Enclosures"
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Core Specifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
              ENCLOSURES &amp; JUNCTION BOXES · LINKBOX SERIES
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              Built to Protect. <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Designed to Connect.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NAEPL manufactures precision electrical junction boxes and terminal enclosures under the LINKBOX series in die-cast Aluminium, Stainless Steel, and Mild Steel. Designed to shield internal electrical connections from moisture ingress, dust storms, and mechanical impacts, these enclosures offer dependable IP66/IP68 ingress protection across industrial manufacturing and infrastructure networks.
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
                  src="/assets/link_box/aluminium_die_cast_enclosure.jpg"
                  alt="Aluminium Die Cast Enclosures"
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
                  Precision die-cast aluminium enclosures designed for electrical components and control applications, offering a robust construction and compact housing solution.
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
                  Stainless steel enclosures manufactured in SS 304 and SS 316, suitable for electrical installations, industrial equipment and demanding application environments.
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
                  Heavy-duty CRCA sheet steel junction boxes with powder-coated finishes, manufactured for reliable electrical housing and industrial applications.
                </p>
              </div>
            </div>

            {/* Card 4: SS Push Button Panels */}
            <div
              id="ss-push-button-panel"
              className="group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
            >
              <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  src="/assets/link_box/ss_push_button_panel.png"
                  alt="SS Push Button Panels"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  STAINLESS STEEL CONTROL ENCLOSURES
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                  SS Push Button Panels
                </h3>
                <div className="w-7 h-[2px] bg-slate-200 mb-4 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0">
                  Precision-fabricated stainless steel push button panels featuring 1, 2 and 3-way configurations, standard 22.5 mm cut-outs and IP66 sealing options.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Technical Sizing Tables Section (From Official NAEPL Catalogue) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f8fafc] border-y border-slate-200" id="specifications">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#004428] mb-1.5 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                TECHNICAL DATA SHEET · SIZING MATRIX
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Enclosure Sizing &amp; Part Numbers
              </h2>
              <p className="text-[13.5px] text-slate-500 mt-1">
                Standard catalogue models and dimensions. Custom drillings, gland cutouts, and bespoke sizes manufactured upon request.
              </p>
            </div>

            {/* Table Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
              <button
                type="button"
                onClick={() => { setActiveTable('aluminium'); setSearchQuery(''); }}
                className={`px-3.5 py-2 rounded-lg text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTable === 'aluminium'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Aluminium Enclosures (20)
              </button>
              <button
                type="button"
                onClick={() => { setActiveTable('mild-steel'); setSearchQuery(''); }}
                className={`px-3.5 py-2 rounded-lg text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTable === 'mild-steel'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Mild Steel JB (9)
              </button>
              <button
                type="button"
                onClick={() => { setActiveTable('stainless-steel'); setSearchQuery(''); }}
                className={`px-3.5 py-2 rounded-lg text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTable === 'stainless-steel'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Stainless Steel JB (8)
              </button>
              <button
                type="button"
                onClick={() => { setActiveTable('push-button'); setSearchQuery(''); }}
                className={`px-3.5 py-2 rounded-lg text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTable === 'push-button'
                    ? 'bg-[#004428] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Push Button Panels (7)
              </button>
            </div>
          </div>

          {/* Active Table Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-[16px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>
                    {activeTable === 'aluminium' && 'Aluminium Die-Cast Enclosures (IP66/67)'}
                    {activeTable === 'mild-steel' && 'Mild Steel Clamp-Secured Junction Boxes'}
                    {activeTable === 'stainless-steel' && 'Stainless Steel AISI 304 / 316 Enclosures'}
                    {activeTable === 'push-button' && 'SS Push Button Enclosures & Control Stations'}
                  </span>
                  <span className="text-[10.5px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    Official NAEPL Catalogue
                  </span>
                </h3>
                <p className="text-[12.5px] text-slate-500 mt-0.5">
                  {activeTable === 'aluminium' && 'High corrosion resistance, polyurethane gasket, internal earthing screw.'}
                  {activeTable === 'mild-steel' && 'Heavy-duty CRCA construction with polyurethane door seal and internal mounting panel.'}
                  {activeTable === 'stainless-steel' && 'AISI 304 / 316 grade stainless steel with brushed grain finish for sanitary and marine use.'}
                  {activeTable === 'push-button' && 'Pre-punched standard 22.5 mm actuator holes with silicone/neoprene oil-resistant seals.'}
                </p>
              </div>

              {/* Table Search */}
              <div className="flex items-center gap-3">
                <div className="relative w-full sm:w-[260px]">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Part No., dimensions..."
                    className="w-full pl-9 pr-8 py-1.5 bg-white border border-slate-200 rounded-xl text-[12px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004428]/20 focus:border-[#004428] transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Table Display */}
            <div className="p-2 sm:p-4 overflow-x-auto">
              {activeTable === 'aluminium' && (
                <Table>
                  <TableHeader className="bg-slate-100/90">
                    <TableRow className="border-b-2 border-slate-200">
                      <TableHead className="font-bold text-[#004428] text-[12px] uppercase tracking-wider py-3.5">Part No.</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Width (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Length (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Height (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5 text-center">Mounting Plate</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5 text-center">DIN Rail (T15)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5 text-center">DIN Rail (T35)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5 text-center">Hinges Set</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5 text-center">Mounting Bracket</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchQuery.toLowerCase().trim();
                      const filtered = q
                        ? aluminiumEnclosuresData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.width.includes(q) ||
                              r.length.includes(q) ||
                              r.height.includes(q)
                          )
                        : aluminiumEnclosuresData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={9} className="text-center py-10 text-slate-500 text-[13px]">
                              No enclosures match your search "{searchQuery}".
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50">
                          <TableCell className="font-bold text-slate-900 font-mono text-[12.5px]">{row.partNo}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.width}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.length}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.height}</TableCell>
                          <TableCell className="text-center">
                            {row.mountingPlate ? <Check size={16} className="text-emerald-700 inline" /> : <span className="text-slate-300 font-bold">—</span>}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.dinRailT15 ? <Check size={16} className="text-emerald-700 inline" /> : <span className="text-slate-300 font-bold">—</span>}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.dinRailT35 ? <Check size={16} className="text-emerald-700 inline" /> : <span className="text-slate-300 font-bold">—</span>}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.hingesSet ? <Check size={16} className="text-emerald-700 inline" /> : <span className="text-slate-300 font-bold">—</span>}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.mountingBracket ? <Check size={16} className="text-emerald-700 inline" /> : <span className="text-slate-300 font-bold">—</span>}
                          </TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

              {activeTable === 'mild-steel' && (
                <Table>
                  <TableHeader className="bg-slate-100/90">
                    <TableRow className="border-b-2 border-slate-200">
                      <TableHead className="font-bold text-[#004428] text-[12px] uppercase tracking-wider py-3.5">Part No.</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Enclosure Height (H)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Enclosure Width (W)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Enclosure Depth (D)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Panel Height (H)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Panel Width (W)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchQuery.toLowerCase().trim();
                      const filtered = q
                        ? mildSteelJunctionBoxesData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.enclosureH.includes(q) ||
                              r.enclosureW.includes(q) ||
                              r.enclosureD.includes(q)
                          )
                        : mildSteelJunctionBoxesData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-10 text-slate-500 text-[13px]">
                              No mild steel boxes match your search "{searchQuery}".
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50">
                          <TableCell className="font-bold text-slate-900 font-mono text-[12.5px]">{row.partNo}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.enclosureH}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.enclosureW}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.enclosureD}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.panelH}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.panelW}</TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

              {activeTable === 'stainless-steel' && (
                <Table>
                  <TableHeader className="bg-slate-100/90">
                    <TableRow className="border-b-2 border-slate-200">
                      <TableHead className="font-bold text-[#004428] text-[12px] uppercase tracking-wider py-3.5">Part No.</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Width (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Length (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Height (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Weight (kg approx.)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchQuery.toLowerCase().trim();
                      const filtered = q
                        ? stainlessSteelJunctionBoxesData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.width.includes(q) ||
                              r.length.includes(q) ||
                              r.height.includes(q)
                          )
                        : stainlessSteelJunctionBoxesData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-10 text-slate-500 text-[13px]">
                              No stainless steel enclosures match your search "{searchQuery}".
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50">
                          <TableCell className="font-bold text-slate-900 font-mono text-[12.5px]">{row.partNo}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.width}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.length}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.height}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.weight}</TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

              {activeTable === 'push-button' && (
                <Table>
                  <TableHeader className="bg-slate-100/90">
                    <TableRow className="border-b-2 border-slate-200">
                      <TableHead className="font-bold text-[#004428] text-[12px] uppercase tracking-wider py-3.5">Part No.</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Holes / Cut-Outs</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Width (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Length (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Height (mm)</TableHead>
                      <TableHead className="font-bold text-slate-700 text-[12px] uppercase tracking-wider py-3.5">Weight (kg approx.)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchQuery.toLowerCase().trim();
                      const filtered = q
                        ? pushButtonPanelsData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.holes.includes(q) ||
                              r.width.includes(q) ||
                              r.length.includes(q)
                          )
                        : pushButtonPanelsData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-10 text-slate-500 text-[13px]">
                              No push button panels match your search "{searchQuery}".
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50">
                          <TableCell className="font-bold text-slate-900 font-mono text-[12.5px]">{row.partNo}</TableCell>
                          <TableCell className="font-bold text-emerald-800 text-[12.5px]">{row.holes} {row.holes === '1' ? 'Hole (22.5mm)' : 'Holes (22.5mm)'}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.width}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.length}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.height}</TableCell>
                          <TableCell className="text-slate-700 text-[12.5px]">{row.weight}</TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* ── Redirecting Navigation Bar Below Table (Matching Client Design) ── */}
          <div className="mt-8 p-6 sm:p-7 bg-[#0b1310] rounded-2xl border border-white/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 block mb-1">
                FAST DIRECT INQUIRY &middot; NAEPL LINK-BOX
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Need Custom Machining, Holes, or Terminal Assembly?
              </h3>
              <p className="text-[13px] text-white/70 mt-1 max-w-[560px]">
                We supply pre-drilled enclosures, terminal blocks, DIN rails, and IP68 cable glands as pre-assembled kits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="#our-range"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1b231f] hover:bg-[#25322c] text-white/90 hover:text-white font-medium text-[13px] transition-all border border-white/15 cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>All Enclosures Range</span>
              </a>
              <Link
                href="/contact?subject=RFQ%20for%20Link-Box%20Enclosures"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#004d2e] hover:bg-[#005f38] text-white font-bold text-[13px] uppercase tracking-wider transition-all shadow-md border border-emerald-500/40"
              >
                <span>REQUEST RFQ</span>
                <ArrowRight size={15} />
              </Link>
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
                  alt="NAEPL Enclosures Catalog Brochure (A4)"
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
