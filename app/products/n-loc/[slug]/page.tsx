'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Thermometer, 
  Layers, 
  FileText, 
  ArrowRight, 
  ChevronRight,
  Package
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableCaption 
} from '@/components/ui/table';
import { TrustRow } from '@/components/TrustRow';
import { nlocProductsDetails } from '@/data/nlocProductsData';

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const slug = (params?.slug as string) || 'roller-ball';
  const product = nlocProductsDetails[slug] || nlocProductsDetails['roller-ball'];

  const [activeFinish, setActiveFinish] = useState<'uncoated' | 'coated'>('uncoated');
  const [activeSubTableIdx, setActiveSubTableIdx] = useState<number>(0);

  // When finish changes, reset sub-table index to 0
  useEffect(() => {
    setActiveSubTableIdx(0);
  }, [activeFinish]);

  const hasCoatedOption = Boolean(product.images.coated);

  const currentImage = (activeFinish === 'coated' && product.images.coated) 
    ? product.images.coated 
    : product.images.uncoated;

  // Filter tables strictly based on selected finish (or 'all' for marker items)
  const visibleTables = product.tables.filter((tbl) => {
    if (!tbl.finishType || tbl.finishType === 'all') return true;
    return tbl.finishType === activeFinish;
  });

  const activeTable = visibleTables[activeSubTableIdx] || visibleTables[0] || product.tables[0];

  const currentTemp = (activeFinish === 'coated' && product.specs.tempRangeCoated)
    ? product.specs.tempRangeCoated
    : (product.specs.tempRangeUncoated || product.specs.tempRange);

  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827] min-h-screen">
      {/* ── 1. Top Breadcrumb & Hero Header ── */}
      <section className="relative w-full bg-[#0a110e] text-white pt-8 pb-12 sm:pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8fd6ae_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products" className="hover:text-emerald-400 transition-colors">Products</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products/n-loc" className="hover:text-emerald-400 transition-colors">Stainless Steel Cable Ties</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-emerald-300 font-semibold truncate">{product.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[780px]">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-[12px] font-bold tracking-wider uppercase mb-3.5">
                <span>{product.badge}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
                {product.title}
              </h1>
              
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-light">
                {product.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products/n-loc"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-all border border-white/10"
              >
                <ArrowLeft size={16} />
                <span>All Cable Ties</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white font-bold px-5 py-2.5 rounded-xl text-[13px] uppercase tracking-wide transition-all shadow-md hover:shadow-lg border border-emerald-500/30"
              >
                <span>Request RFQ</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] pointer-events-none" />
      </section>

      {/* ── 2. Product Overview & Key Engineering Highlights ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Product Showcase Image & Finish Toggle */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 flex items-center justify-center shadow-sm relative overflow-hidden min-h-[320px] sm:min-h-[380px]">
                <img
                  src={currentImage}
                  alt={`${product.title} - ${activeFinish}`}
                  className="max-h-[300px] sm:max-h-[340px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                />

                {/* Status indicator on image */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-sm ${
                    activeFinish === 'coated'
                      ? 'bg-emerald-950 text-emerald-200 border-emerald-800'
                      : 'bg-white/95 text-slate-800 border-slate-300'
                  }`}>
                    {activeFinish === 'coated' ? 'Polyester Coated' : 'Metallic Uncoated'}
                  </span>
                </div>
              </div>

              {/* Coated / Uncoated Toggle Buttons */}
              {hasCoatedOption && (
                <div className="w-full mt-4 flex items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setActiveFinish('uncoated')}
                    className={`flex-1 py-2.5 text-[12px] sm:text-[13px] font-bold tracking-wide uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeFinish === 'uncoated'
                        ? 'bg-[#004428] text-white shadow-md'
                        : 'bg-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Uncoated</span>
                    <span className="text-[10px] opacity-75 font-normal">(Metallic)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFinish('coated')}
                    className={`flex-1 py-2.5 text-[12px] sm:text-[13px] font-bold tracking-wide uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeFinish === 'coated'
                        ? 'bg-[#004428] text-white shadow-md'
                        : 'bg-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Coated</span>
                    <span className="text-[10px] opacity-75 font-normal">(Polyester)</span>
                  </button>
                </div>
              )}

              {/* Quick Specification Badges Row */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Material Grade</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">AISI 304 &amp; 316</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <Thermometer size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Temp Rating</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">{currentTemp}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <Flame size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Flammability</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">UL 94V-0 Fireproof</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <Package size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Standard Pack</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">100 Nos. / Bag</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Product Narrative & Features */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                ENGINEERING SPECIFICATIONS · NAEPL N-LOC
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-4">
                Engineered for High-Tensile Reliability in Demanding Environments
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-700 mb-6">
                {product.description}
              </p>

              {/* Key Features List */}
              <div className="mb-8">
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 mb-3.5 flex items-center gap-2">
                  <Layers size={16} className="text-[#004428]" />
                  <span>Key Features &amp; Advantages</span>
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-slate-700 leading-normal">
                      <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Typical Industrial Applications (Styled identical to "Sectors We Serve" from Homepage) ── */}
      <section className="py-14 sm:py-20 bg-[#1a1a1a] relative overflow-hidden text-white">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(0,68,40,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(140,36,66,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8b96a5] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />
                Applications
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium text-white leading-[1.2] tracking-tight">
                Typical Industrial <br className="hidden sm:inline" />
                <span className="text-[#8c2442]">Applications</span>
              </h2>
              <p className="text-[13.5px] text-white/60 mt-3 font-light leading-relaxed max-w-[340px]">
                Engineered to deliver dependable retention across demanding mission-critical operating environments.
              </p>
            </div>

            {/* Interactive Application Chips */}
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="text-[14px] sm:text-[15px] font-medium text-[#cccccc] border border-[#333333] rounded py-2.5 px-4 sm:px-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#004428] hover:to-[#8c2442] hover:text-white hover:border-transparent hover:-translate-y-0.5 cursor-pointer shadow-sm select-none"
                >
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Technical Sizing & Part Numbers (Strictly filtered by Uncoated / Coated) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f8fafc] border-y border-slate-200" id="specifications">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#004428] mb-1.5 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                TECHNICAL DATA SHEET
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {activeFinish === 'coated' ? 'Coated Sizing & Part Numbers' : 'Uncoated Sizing & Part Numbers'}
              </h2>
              <p className="text-[13.5px] text-slate-500 mt-1">
                Showing {activeFinish.toUpperCase()} specifications from official NAEPL catalog
              </p>
            </div>

            {/* Finish & Sub-Table Switcher Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Finish Switcher (Uncoated / Coated) */}
              {hasCoatedOption && (
                <div className="flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveFinish('uncoated')}
                    className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeFinish === 'uncoated'
                        ? 'bg-[#004428] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Uncoated Tables
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFinish('coated')}
                    className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeFinish === 'coated'
                        ? 'bg-[#004428] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Coated Tables
                  </button>
                </div>
              )}

              {/* Sub-Tabs for multiple widths within the selected finish */}
              {visibleTables.length > 1 && (
                <div className="flex items-center gap-1.5 p-1 bg-emerald-50/70 border border-emerald-200/60 rounded-xl">
                  {visibleTables.map((tbl, idx) => {
                    const widthLabel = tbl.title.split('–')[1] || tbl.title.split('-')[1] || `Width ${idx + 1}`;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveSubTableIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold uppercase tracking-wide transition-all cursor-pointer ${
                          activeSubTableIdx === idx
                            ? 'bg-[#004428] text-white shadow-sm'
                            : 'text-emerald-900 hover:bg-emerald-100/60'
                        }`}
                      >
                        {widthLabel.trim()}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Active Table Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-[16px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>{activeTable.title}</span>
                  <span className={`text-[10.5px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    activeFinish === 'coated'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-200 text-slate-800'
                  }`}>
                    {activeFinish === 'coated' ? 'Polyester Coated' : 'Metallic Uncoated'}
                  </span>
                </h3>
                {activeTable.subtitle && (
                  <p className="text-[12.5px] text-slate-500 mt-0.5">
                    {activeTable.subtitle}
                  </p>
                )}
              </div>
              <span className="text-[11.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
                {activeTable.rows.length} Sizes Available
              </span>
            </div>

            {/* shadcn Table Component */}
            <div className="p-2 sm:p-4 overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-100/90">
                  <TableRow className="border-b-2 border-slate-200">
                    <TableHead className="font-bold text-[#004428] text-[12.5px] uppercase tracking-wider py-3.5">
                      Part No.
                    </TableHead>
                    <TableHead className="font-bold text-slate-700 text-[12.5px] uppercase tracking-wider py-3.5">
                      Width (mm)
                    </TableHead>
                    <TableHead className="font-bold text-slate-700 text-[12.5px] uppercase tracking-wider py-3.5">
                      Length (mm)
                    </TableHead>
                    <TableHead className="font-bold text-slate-700 text-[12.5px] uppercase tracking-wider py-3.5">
                      Thickness (mm)
                    </TableHead>
                    <TableHead className="font-bold text-slate-700 text-[12.5px] uppercase tracking-wider py-3.5">
                      Max Bundle Dia (mm)
                    </TableHead>
                    <TableHead className="font-bold text-slate-700 text-[12.5px] uppercase tracking-wider py-3.5 text-right">
                      Min. Loop Tensile (N)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeTable.rows.map((row, rIdx) => (
                    <TableRow 
                      key={rIdx}
                      className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50 transition-colors"
                    >
                      <TableCell className="font-bold text-slate-900 font-mono text-[13px]">
                        {row.partNo}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[13px]">
                        {row.width}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[13px]">
                        {row.length}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[13px]">
                        {row.thickness}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[13px]">
                        {row.maxBundleDia}
                      </TableCell>
                      <TableCell className="text-slate-900 font-semibold text-[13px] text-right">
                        {row.tensileStrength}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>
                  Standard pack: 100 Nos./Bag. Material: AISI 304 / 316. Custom lengths manufactured upon request.
                </TableCaption>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Technical Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brochure Cover Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/n_loc_brochure_cover.webp"
                  alt="NAEPL Stainless Steel Cable Ties Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link 
                href="/brochure?doc=n-loc-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download N-LOC Brochure</span>
              </Link>
            </div>

            {/* Right Column: Custom Sizing & Consultation Info */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>Custom Engineering &amp; Sizing Support</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Ties, Pre-Cut Lengths, or Material Certification?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our application engineering team helps contractors, EPCs, and OEMs select the right stainless steel grade (SS304/SS316), protective polymer coating, and custom band widths for specific dynamic loads and environmental exposure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-[#004428] font-bold px-7 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                >
                  <span>Request Quotation &amp; Samples</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/products/n-loc"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] transition-all border border-white/15"
                >
                  <span>Back to N-LOC Catalog</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Trust Row ── */}
      <TrustRow />
    </main>
  );
};

export default ProductDetailPage;
