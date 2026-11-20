'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Thermometer, 
  Layers, 
  FileText, 
  ArrowRight, 
  ChevronRight,
  Download,
  Search
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
import { lugsProductsDetails } from '@/data/lugsProductsData';

const LugProductDetailPage: React.FC = () => {
  const params = useParams();
  const slug = (params?.slug as string) || 'copper-one-hole-standard';
  const product = lugsProductsDetails[slug] || lugsProductsDetails['copper-one-hole-standard'];

  const [searchTerm, setSearchTerm] = useState('');

  const currentTable = product.tables[0];
  const filteredRows = currentTable
    ? currentTable.rows.filter((r) => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.toLowerCase();
        return (
          r.code.toLowerCase().includes(q) ||
          r.sqmm.toLowerCase().includes(q) ||
          r.stud.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <main className="w-full bg-[#f8fafc] text-[#111827]">
      {/* ── 1. Hero Banner ── */}
      <section className="relative w-full bg-gradient-to-br from-[#07130e] via-[#0b2017] to-[#040806] text-white pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden border-b border-emerald-950/40">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#8c2442]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products" className="hover:text-emerald-400 transition-colors">Products</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products/lugx" className="hover:text-emerald-400 transition-colors">Terminals &amp; Lugs</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-emerald-300 font-semibold truncate">{product.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[800px]">
              {/* Product Badge Pill (Clean text, no icon) */}
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
                href="/products/lugx"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-all border border-white/10"
              >
                <ArrowLeft size={16} />
                <span>All Terminals &amp; Lugs</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white font-bold px-5 py-2.5 rounded-xl text-[13px] uppercase tracking-wide transition-all shadow-md hover:shadow-lg border border-emerald-500/30"
              >
                <span>Request RFQ</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Emerald to Maroon Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Product Visual Showcase & Core Specifications ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Product Image Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-sm relative overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-auto max-h-[360px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Quick Spec Highlights */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Conductor Range</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900">{product.specs.conductorRange}</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Stud / Bolt Size</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900">{product.specs.studRange}</p>
                </div>
              </div>
            </div>

            {/* Right Column: In-Depth Engineering Details */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-2 flex items-center gap-2">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                <span>{product.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Engineered for High Conductivity &amp; Dependable Crimping Grip
              </h2>

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-700 mb-6 font-normal">
                {product.description}
              </p>

              {/* Technical Specifications Matrix Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <ShieldCheck size={20} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wide">Material &amp; Purity</h4>
                    <p className="text-[13px] text-slate-600 mt-0.5">{product.specs.material}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Zap size={20} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wide">Surface Plating</h4>
                    <p className="text-[13px] text-slate-600 mt-0.5">{product.specs.surfaceFinish}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Layers size={20} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wide">Barrel Construction</h4>
                    <p className="text-[13px] text-slate-600 mt-0.5">{product.specs.barrelType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Thermometer size={20} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wide">Operating Temp &amp; Standards</h4>
                    <p className="text-[13px] text-slate-600 mt-0.5">{product.specs.operatingTemp} · {product.specs.standards}</p>
                  </div>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 uppercase tracking-wide mb-3.5 flex items-center gap-2">
                  <span>Key Features &amp; Engineering Advantages</span>
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

      {/* ── 3. Technical Sizing Matrix (shadcn Table Component) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50" id="sizing-matrix">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-1.5 flex items-center gap-2">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                <span>NAEPL Technical Sizing Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {currentTable?.title || 'Dimensional Specifications'}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-slate-600 mt-1 max-w-[700px]">
                {currentTable?.subtitle || 'Standard catalogue codes and dimensional specifications from the official NAEPL engineering brochure.'}
              </p>
            </div>

            {/* Search / Filter Input */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter part code, size..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-[12.5px] rounded-lg border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004428] focus:border-[#004428]"
                />
              </div>

              <span className="text-[11.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg uppercase tracking-wider shrink-0">
                {filteredRows.length} Sizes
              </span>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-2 sm:p-4 overflow-x-auto max-h-[640px] overflow-y-auto">
              <Table>
                <TableHeader className="bg-slate-100/90 sticky top-0 z-10">
                  <TableRow className="border-b-2 border-slate-200">
                    {currentTable?.headers.map((h, hIdx) => (
                      <TableHead 
                        key={hIdx} 
                        className={`font-bold text-[12px] sm:text-[12.5px] uppercase tracking-wider py-3.5 ${
                          hIdx === 0 ? 'text-[#004428]' : 'text-slate-700'
                        }`}
                      >
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRows.map((row, rIdx) => (
                    <TableRow 
                      key={rIdx}
                      className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50 transition-colors"
                    >
                      <TableCell className="font-bold text-slate-900 font-mono text-[12.5px] sm:text-[13px] py-2.5">
                        {row.code}
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium text-[12.5px] sm:text-[13px] py-2.5">
                        {row.sqmm}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                        {row.stud}
                      </TableCell>
                      {row.studHole && (
                        <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                          {row.studHole}
                        </TableCell>
                      )}
                      {row.extra && currentTable.headers.length >= 8 && (
                        <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                          {row.extra}
                        </TableCell>
                      )}
                      {row.barrelId && (
                        <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                          {row.barrelId}
                        </TableCell>
                      )}
                      {row.palmWidth && (
                        <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                          {row.palmWidth}
                        </TableCell>
                      )}
                      {row.barrelLength && (
                        <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                          {row.barrelLength}
                        </TableCell>
                      )}
                      {row.totalLength && (
                        <TableCell className="text-slate-900 font-semibold text-[12.5px] sm:text-[13px] py-2.5">
                          {row.totalLength}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                  {filteredRows.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={currentTable?.headers.length || 8} className="text-center py-8 text-slate-500">
                        No sizes match your search &ldquo;{searchTerm}&rdquo;. Try another term.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
                <TableCaption>
                  NAEPL Certified Terminals &amp; Lugs. Custom sizes and plating specifications manufactured upon request.
                </TableCaption>
              </Table>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Technical Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brochure Cover Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/lugx_brochure_cover.webp"
                  alt="NAEPL Electrical Terminals & Lugs Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link 
                href="/brochure?doc=lugx-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download LUGX Brochure</span>
              </Link>
            </div>

            {/* Right Column: Custom Sizing & Consultation Info */}
            <div className="lg:col-span-7 lg:pl-4">
              {/* Clean badge pill without icon */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>Custom Engineering &amp; Sizing Support</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Palm Widths, Two-Hole Pitch, or High-Voltage Certification?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our application engineering team helps switchgear builders, transformer OEMs, and EPC contractors design custom lug palms, specify plating thicknesses, and calculate crimp tensile ratings for critical electrical installations.
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
                  href="/products/lugx"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] transition-all border border-white/15"
                >
                  <span>Back to LUGX Catalog</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. Trust Row ── */}
      <TrustRow />
    </main>
  );
};

export default LugProductDetailPage;

