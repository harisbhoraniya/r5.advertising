'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Download,
  X,
  CheckCircle2,
  User,
  Mail,
  Building2,
  Phone,
  FileText,
  Loader2,
  Check,
  ArrowDown,
  ShieldCheck,
} from 'lucide-react';

interface CatalogueItem {
  id: string;
  title: string;
  series: string;
  subtitle: string;
  filename: string;
  coverImage: string;
}

// 6 Official Catalogues with descriptive naming per client instructions
const catalogues: CatalogueItem[] = [
  {
    id: 'stainless-steel-cable-ties-catalogue',
    title: 'Stainless Steel Cable Ties Catalogue',
    series: 'N-LOC Series',
    subtitle:
      'Roller ball, ladder, releasable, zig zag ties, coated variants & tensile strength data sheets',
    filename: 'NAEPL_Stainless_Steel_Cable_Ties_Catalogue.pdf',
    coverImage: '/assets/brochure_covers/n_loc_brochure_cover.webp',
  },
  {
    id: 'cable-cleats-catalogue',
    title: 'Cable Cleats Catalogue',
    series: 'IEC 61914 Certified',
    subtitle:
      'Short-circuit withstand up to 180 kA, trefoil & single cable clamps with LSOH liners',
    filename: 'NAEPL_Cable_Cleats_Catalogue.pdf',
    coverImage: '/assets/brochure_covers/cable_cleats_brochure_cover.webp',
  },
  {
    id: 'weatherproof-junction-boxes-catalogue',
    title: 'Weatherproof Junction Boxes & Enclosures Catalogue',
    series: 'LINKBOX Series',
    subtitle:
      'IP66 / IP68 aluminium die-cast & stainless steel junction boxes with terminal arrangements',
    filename: 'NAEPL_Weatherproof_Junction_Boxes_Catalogue.pdf',
    coverImage: '/assets/brochure_covers/link_box_brochure_cover.webp',
  },
  {
    id: 'electrical-termination-lugs-catalogue',
    title: 'Electrical Termination Lugs & Connectors Catalogue',
    series: 'LUGX Series',
    subtitle:
      'High-conductivity copper, aluminium & bi-metallic crimping lugs (BS / DIN / IEC standards)',
    filename: 'NAEPL_Electrical_Termination_Lugs_Catalogue.pdf',
    coverImage: '/assets/brochure_covers/lugx_brochure_cover.webp',
  },
  {
    id: 'cnc-machined-components-catalogue',
    title: 'CNC Machined Components Catalogue',
    series: 'Precision Machining',
    subtitle:
      'Precision turned components, custom tooling, micron tolerances & multi-axis CNC parts',
    filename: 'NAEPL_CNC_Machined_Components_Catalogue.pdf',
    coverImage: '/assets/brochure_covers/cnc_brochure_cover.webp',
  },
  {
    id: 'sheet-metal-press-parts-catalogue',
    title: 'Sheet Metal Press Parts Catalogue',
    series: 'Press Stamping & Banding',
    subtitle:
      'Custom progressive stamping, brackets, stainless steel banding strapping & wing seals',
    filename: 'NAEPL_Sheet_Metal_Press_Parts_Catalogue.pdf',
    coverImage: '/assets/brochure_covers/sheet_metal_brochure_cover.webp',
  },
];

const CatalogueContent: React.FC = () => {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CatalogueItem>(catalogues[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const docParam = searchParams?.get('doc');
    if (docParam) {
      const match = catalogues.find(
        (c) =>
          c.id === docParam ||
          c.id.includes(docParam) ||
          docParam.includes(c.id.split('-')[0])
      );
      if (match) {
        setSelectedItem(match);
        setIsModalOpen(true);
      }
    }
  }, [searchParams]);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = (item?: CatalogueItem) => {
    if (item) {
      setSelectedItem(item);
    } else {
      setSelectedItem(catalogues[0]);
    }
    setErrors({});
    setIsSuccess(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSuccess(false);
      setErrors({});
    }, 300);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work email address';
    }
    if (!formData.company.trim()) {
      errs.company = 'Please enter your company name';
    }
    // Phone Number is strictly mandatory per client feedback
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number (mandatory)';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number (minimum 7 digits)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerDownload = (filename: string = '', title: string = '') => {
    try {
      const samplePdfContent = `%PDF-1.4\n1 0 obj\n<<\n/Title (${
        title || selectedItem.title
      })\n/Author (N Gandhi Advance Engineering Pvt. Ltd.)\n/Subject (Product Catalogue)\n>>\nendobj\n%%EOF`;
      const blob = new Blob([samplePdfContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename || selectedItem.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      window.open('#download', '_blank');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        '3f07030f-0894-4634-9ac1-392f3f8ca19d';

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'NAEPL Catalogue Download System',
          subject: `Catalogue Download Request: ${selectedItem.title} - ${formData.name}`,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone.trim(),
          catalogue: selectedItem.title,
        }),
      });

      // Save lead locally
      const existingLeads = JSON.parse(
        localStorage.getItem('naepl_catalogue_leads') || '[]'
      );
      existingLeads.push({
        ...formData,
        catalogue: selectedItem.title,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('naepl_catalogue_leads', JSON.stringify(existingLeads));
    } catch {
      // Graceful fallback
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto-trigger the PDF download
    triggerDownload(selectedItem.filename, selectedItem.title);
  };

  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Section (Clean single-instance layout, no duplicate lists) ── */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Information & CTAs */}
            <div>
              {/* Eyebrow */}
              <p className="text-[12px] sm:text-[13px] font-semibold text-[#004428] tracking-[0.14em] uppercase mb-4 sm:mb-5 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Official Technical Catalogues
              </p>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[56px] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Technical <span className="text-[#004428]">Product</span>
                <br />
                <span className="text-[#8c2442]">Catalogues.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-[16.5px] font-light text-[#6b6b6b] leading-relaxed mb-7 max-w-[520px]">
                Explore verified technical specifications, dimensional drawings,
                tensile ratings, and international certifications for our complete
                range of industrial engineering and electrical solutions.
              </p>

              {/* Engineering Scope Highlights */}
              <div className="space-y-3 mb-9 max-w-[480px]">
                {[
                  'IEC 61914 Certified Short-Circuit Withstand Data',
                  'Tensile Strength, Loop Load & Material Grade Sheets (SS304 / SS316)',
                  'IP66 / IP68 Ingress Protection & Enclosure Sizing Charts',
                  'Micron-Tolerance CNC Machining & Progressive Press Dimensions',
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#004428] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span className="font-light">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal(catalogues[0])}
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] border border-[#1a1a1a] text-white px-7 py-4 rounded text-[13.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.30)] hover:-translate-y-0.5 hover:border-transparent cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download size={16} className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <span className="relative z-10">Download Catalogue</span>
                </button>

                <a
                  href="#catalogues-grid"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:border-[#004428] text-slate-700 hover:text-[#004428] px-6 py-4 rounded text-[13.5px] font-medium tracking-wider uppercase transition-all hover:bg-emerald-50/40 no-underline cursor-pointer"
                >
                  <span>View All 6 Catalogues</span>
                  <ArrowDown size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: High-End Company Profile Catalogue Showcase */}
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#004428]/15 via-transparent to-[#8c2442]/15 rounded-3xl filter blur-2xl pointer-events-none" />

              <div
                onClick={() => openModal(catalogues[0])}
                className="group relative w-full max-w-[390px] aspect-[210/297] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_76px_rgba(0,0,0,0.22)] border border-slate-200/80 bg-white cursor-pointer select-none"
              >
                <img
                  src="/assets/brochure_covers/company_profile_brochure_cover.webp"
                  alt="NAEPL Corporate Engineering Catalogue Cover"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 pointer-events-none rounded-2xl" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white text-sm font-medium flex items-center gap-2">
                    <Download size={16} />
                    <span>Click to Download Official Catalogue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Official Catalogues Grid (Single rendered instance, no duplicates) ── */}
      <section
        className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80"
        id="catalogues-grid"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-[720px] mx-auto mb-12 sm:mb-16">
            <p className="text-[12px] sm:text-[13px] font-semibold text-[#004428] tracking-[0.14em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
              Official Product Catalogues
              <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Download Technical Catalogues
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Select any product category below to access verified technical
              parameters, dimensional drawings, material grades, and load ratings.
            </p>
          </div>

          {/* 6 Clean Catalogue Cards (3 Top, 3 Bottom) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {catalogues.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between"
              >
                {/* A4 Catalogue Cover Image */}
                <div
                  onClick={() => openModal(item)}
                  className="w-full aspect-[210/297] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm relative mb-5 cursor-pointer group-hover:border-[#004428]/40 transition-colors"
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-xl" />

                  {/* Series Pill Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200/80 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#004428] shadow-sm">
                    {item.series}
                  </div>
                </div>

                {/* Info & Download Button */}
                <div className="flex flex-col flex-1 justify-between">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-[#004428] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Download Button */}
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white py-3 px-4 rounded-xl text-[12px] sm:text-[13px] font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-[#004428]/25 cursor-pointer"
                  >
                    <Download size={15} className="shrink-0" />
                    <span className="truncate">Download Catalogue</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Lead Capture Popup Modal Form (Mandatory Phone Number) ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-md transition-all duration-300 animate-in fade-in-0"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[520px] bg-white rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.30)] border border-slate-100 overflow-hidden transition-all duration-300 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Brand Accent Stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#004428] via-[#065f46] to-[#8c2442]" />

            {/* Modal Header */}
            <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight m-0">
                  {isSuccess ? 'Download Ready!' : 'Download Technical Catalogue'}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-1 leading-relaxed m-0">
                  {isSuccess
                    ? 'Your download has started automatically.'
                    : 'Please enter your professional details to download the technical documentation.'}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                aria-label="Close modal"
                onClick={closeModal}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer border-none bg-transparent outline-none -mr-2 -mt-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {isSuccess ? (
                /* Success View */
                <div className="text-center py-4 sm:py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#004428] flex items-center justify-center mx-auto mb-4 animate-in zoom-in-75">
                    <CheckCircle2 size={36} className="text-[#004428]" />
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                    You have requested{' '}
                    <strong className="text-slate-800">{selectedItem.title}</strong>.
                    If your download did not start automatically, please click below:
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 mb-6 text-xs text-slate-600 flex items-center justify-between">
                    <span className="flex items-center gap-2 truncate">
                      <FileText size={15} className="text-[#004428] shrink-0" />
                      <span className="font-medium truncate">{selectedItem.filename}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        triggerDownload(selectedItem.filename, selectedItem.title)
                      }
                      className="text-[#004428] font-bold hover:underline shrink-0 pl-2 bg-transparent border-none cursor-pointer"
                    >
                      Click to Re-Download
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors border-none cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              ) : (
                /* Lead Capture Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Selected Catalogue Dropdown */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Selected Document
                    </label>
                    <div className="relative">
                      <select
                        value={selectedItem.id}
                        onChange={(e) => {
                          const found = catalogues.find((b) => b.id === e.target.value);
                          if (found) setSelectedItem(found);
                        }}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15 outline-none transition-all cursor-pointer font-medium"
                      >
                        {catalogues.map((b) => (
                          <option key={b.id} value={b.id}>
                            {b.title} ({b.series})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 focus:bg-white outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-2 focus:ring-red-400/20'
                            : 'border-slate-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 pl-1 m-0">{errors.name}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Mail size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 focus:bg-white outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-2 focus:ring-red-400/20'
                            : 'border-slate-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 pl-1 m-0">{errors.email}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Building2 size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Larsen & Toubro, Siemens, ABB"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: '' });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 focus:bg-white outline-none transition-all ${
                          errors.company
                            ? 'border-red-400 focus:ring-2 focus:ring-red-400/20'
                            : 'border-slate-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15'
                        }`}
                      />
                    </div>
                    {errors.company && (
                      <p className="text-xs text-red-600 mt-1 pl-1 m-0">{errors.company}</p>
                    )}
                  </div>

                  {/* Phone Number (Mandatory with *) */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Phone size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 focus:bg-white outline-none transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-2 focus:ring-red-400/20'
                            : 'border-slate-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 pl-1 m-0">{errors.phone}</p>
                    )}
                  </div>

                  {/* Privacy Assurance */}
                  <p className="text-[11px] text-slate-400 leading-normal pt-1 m-0 flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-700 shrink-0" />
                    <span>Your technical details are secure and used only to deliver engineering documentation.</span>
                  </p>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#004428] to-[#003820] hover:from-[#003820] hover:to-[#002816] text-white font-semibold text-sm shadow-lg shadow-[#004428]/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Preparing Your Download...</span>
                        </>
                      ) : (
                        <>
                          <Download size={16} />
                          <span>Download Technical Catalogue (PDF)</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default function BrochurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 text-sm">
          Loading catalogue...
        </div>
      }
    >
      <CatalogueContent />
    </Suspense>
  );
}
