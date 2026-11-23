'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  FileText, 
  ArrowRight, 
  ChevronRight,
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
import { cableCleatsProductsDetails } from '@/data/cableCleatsData';

const CableCleatDetailPage: React.FC = () => {
  const params = useParams();
  const slug = (params?.slug as string) || 'trefoil-cleat';
  const product = cableCleatsProductsDetails[slug] || cableCleatsProductsDetails['trefoil-cleat'];

  const [searchTerm, setSearchTerm] = useState('');

  const currentTable = product.tables[0];
  const filteredRows = currentTable
    ? currentTable.rows.filter((r) => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.toLowerCase();
        return (
          r.partNo.toLowerCase().includes(q) ||
          r.minDia.toLowerCase().includes(q) ||
          r.midDia.toLowerCase().includes(q) ||
          r.maxDia.toLowerCase().includes(q) ||
          r.height.toLowerCase().includes(q) ||
          r.width.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <main className="w-full bg-[#f8fafc] text-[#111827]">
      {/* ── 1. Hero Banner (Identical layout to LUGX details page) ── */}
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
            <Link href="/products/cable-cleat" className="hover:text-emerald-400 transition-colors">Cable Cleats</Link>
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
                href="/products/cable-cleat"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-all border border-white/10"
              >
                <ArrowLeft size={16} />
                <span>All Cable Cleats</span>
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

                {/* Status indicator on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-sm backdrop-blur-sm">
                    {product.formation}
                  </span>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Peak Current</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900">Up to 180 kA</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Frame Material</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-emerald-800">AISI 316L SS</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Cushioning</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900">Integral LSZH Pad</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Temperature</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900">-40°C to +60°C</p>
                </div>
              </div>

              {/* Brochure Download Link */}
              <div className="w-full mt-4">
                <Link
                  href="/brochure?doc=cable-cleats-brochure"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-xl text-[13px] transition-colors border border-slate-200"
                >
                  <FileText size={16} className="text-slate-500" />
                  <span>Download Cable Cleats Data Sheet</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Detailed Engineering Description & Highlights */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                ENGINEERING SPECIFICATIONS · NAEPL CABLE CLEATS
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
                {product.title}
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed font-normal mb-6">
                {product.description}
              </p>

              {/* Key Features List */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-[12.5px] mb-3.5 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#004428]" />
                  <span>Key Engineering Features &amp; Advantages</span>
                </h3>

                <div className="grid grid-cols-1 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-slate-700 leading-normal">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Technical Specifications Grid */}
              <div>
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-[12.5px] mb-3.5 flex items-center gap-2">
                  <Zap size={17} className="text-[#004428]" />
                  <span>Technical Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Frame Construction</span>
                    <span className="font-semibold text-slate-800">{product.specs.frameMaterial}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Hardware &amp; Fasteners</span>
                    <span className="font-semibold text-slate-800">{product.specs.boltsFasteners}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Locking Mechanism</span>
                    <span className="font-semibold text-slate-800">{product.specs.lockingSystem}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Cushioning Protection</span>
                    <span className="font-semibold text-slate-800">{product.specs.cushioningPad}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:col-span-2">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Short-Circuit Withstand</span>
                    <span className="font-bold text-emerald-800">{product.specs.shortCircuitWithstand}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Operating Temperature</span>
                    <span className="font-semibold text-slate-800">{product.specs.operatingTemp}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Fire Safety &amp; Flammability</span>
                    <span className="font-semibold text-slate-800">{product.specs.flameResistance}</span>
                  </div>
                </div>
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
                {currentTable?.title || 'Dimensional Sizing Specifications'}
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
                        <span className="text-[#004428]">{row.partNo}</span>
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium text-[12.5px] sm:text-[13px] py-2.5">
                        {row.minDia}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                        {row.midDia}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                        {row.maxDia}
                      </TableCell>
                      <TableCell className="text-slate-700 text-[12.5px] sm:text-[13px] py-2.5">
                        {row.height}
                      </TableCell>
                      <TableCell className="text-slate-900 font-semibold text-[12.5px] sm:text-[13px] py-2.5">
                        {row.width}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredRows.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={currentTable?.headers.length || 6} className="text-center py-8 text-slate-500">
                        No sizes match your search &ldquo;{searchTerm}&rdquo;. Try another term.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* ── Redirecting Navigation & Action Bar Below Table ── */}
          <div className="mt-8 p-6 sm:p-7 bg-[#0b1310] rounded-2xl border border-white/10 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 block mb-1">
                FAST DIRECT INQUIRY &middot; NAEPL CABLE CLEATS
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Need Fault Current Calculation or Cleat Spacing Support?
              </h3>
              <p className="text-[13px] text-white/70 mt-1 max-w-[560px]">
                Our engineering team assists with dynamic short-circuit calculation, cleat sizing, and custom mounting hardware supply.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/products/cable-cleat"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1e2420] hover:bg-[#2b3530] text-white/95 font-medium text-[13px] transition-all border border-white/15"
              >
                <ArrowLeft size={15} />
                <span>All Cable Cleats</span>
              </Link>
              <Link
                href={`/contact?subject=RFQ%20for%20${encodeURIComponent(product.title)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#004d2e] hover:bg-[#005f38] text-white font-bold text-[13px] uppercase tracking-wider transition-all shadow-md border border-emerald-500/40"
              >
                <span>REQUEST RFQ</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4B. Short Circuit Withstand Capability Table (for Single Cleats) ── */}
      {product.withstandTable && (
        <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-1.5 flex items-center gap-2">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                <span>ELECTROMECHANICAL WITHSTAND SPECIFICATIONS · NAEPL CABLE CLEATS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {product.withstandTable.title}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-slate-600 mt-1 max-w-[800px]">
                {product.withstandTable.subtitle}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-2 sm:p-4 overflow-x-auto max-h-[640px] overflow-y-auto">
                <Table>
                  <TableHeader className="bg-slate-100/90 sticky top-0 z-10">
                    <TableRow className="border-b-2 border-slate-200">
                      <TableHead className="font-bold text-[12px] sm:text-[12.5px] uppercase tracking-wider py-3.5 text-[#004428] pl-4 whitespace-nowrap">
                        Max Spacing (A)
                      </TableHead>
                      {product.withstandTable.spacingHeaders.map((sp, idx) => (
                        <TableHead 
                          key={idx} 
                          className="font-bold text-[11px] uppercase tracking-wider py-3.5 text-center px-2 min-w-[42px] text-slate-700"
                        >
                          {sp} mm
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.withstandTable.rows.map((row, idx) => (
                      <TableRow 
                        key={idx}
                        className="border-b border-slate-100 hover:bg-emerald-50/40 odd:bg-white even:bg-slate-50/50 transition-colors"
                      >
                        <TableCell className="pl-4 font-bold text-[#004428] text-[12.5px] sm:text-[13px] py-2.5 whitespace-nowrap">
                          {row.maxSpacing}
                        </TableCell>
                        {row.values.map((v, i) => (
                          <TableCell key={i} className="text-slate-700 text-[12px] py-2.5 text-center px-2 font-mono">
                            {v}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableCaption>
                    Peak current ratings expressed in kiloamperes (kA IP Peak) · Conductor centers spacing 23 mm to 61 mm
                  </TableCaption>
                </Table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Technical Support & RFQ Banner (Identical to LUGX details page) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brochure Cover Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/cable_cleats_brochure_cover.webp"
                  alt="NAEPL Cable Cleats Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link 
                href="/brochure?doc=cable-cleats-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download Cable Cleats Catalogue</span>
              </Link>
            </div>

            {/* Right Column: Engineering Consultation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>NAEPL Technical Consultation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Help Calculating Fault Currents or Sizing Cleats?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our application engineering team helps contractors, OEMs, and EPC consultants calculate dynamic short-circuit electromagnetic forces and establish recommended cleat spacing for custom cable routes.
              </p>

              <div>
                <Link 
                  href="/contact"
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

      {/* ── 6. Trust Row / Certified Engineering ── */}
      <TrustRow />

    </main>
  );
};

export default CableCleatDetailPage;
