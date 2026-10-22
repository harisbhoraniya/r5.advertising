import React, { useState, useEffect } from 'react';
import { Download, X, CheckCircle2, User, Mail, Building2, Phone, FileText, Loader2, } from 'lucide-react';

interface BrochureItem {
  id: string;
  title: string;
  subtitle: string;
  filename: string;
}

const highlights: BrochureItem[] = [
  {
    id: 'n-loc-brochure',
    title: 'N-Loc Brochure',
    subtitle: 'Roller ball, ladder, coated ties & tensile strength data sheets',
    filename: 'NAEPL_N-Loc_Brochure.pdf',
  },
  {
    id: 'link-box-brochure',
    title: 'Link Box Brochure',
    subtitle: 'IP66/IP68 weatherproof junction boxes & terminal arrangements',
    filename: 'NAEPL_Link_Box_Brochure.pdf',
  },
  {
    id: 'lugx-brochure',
    title: 'LUGX Brochure',
    subtitle: 'High-conductivity terminal lugs, cleats & cable support hardware',
    filename: 'NAEPL_LUGX_Brochure.pdf',
  },
];

export const BrochurePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState<BrochureItem>(highlights[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const openModal = (item?: BrochureItem) => {
    if (item) {
      setSelectedBrochure(item);
    } else {
      setSelectedBrochure(highlights[0]);
    }
    setErrors({});
    setIsSuccess(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
    // Reset after animation
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
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) {
      errs.company = 'Please enter your company name';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Simulates download and client-side trigger
  const triggerDownload = (filename: string) => {
    try {
      const samplePdfContent = `%PDF-1.4\n1 0 obj\n<<\n/Title (${selectedBrochure.title})\n/Author (N Gandhi Advance Engineering Pvt. Ltd.)\n/Subject (Corporate Brochure)\n>>\nendobj\n%%EOF`;
      const blob = new Blob([samplePdfContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      // Fallback
      window.open('#download', '_blank');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission delay & store in localStorage
    setTimeout(() => {
      try {
        const existingLeads = JSON.parse(localStorage.getItem('naepl_brochure_leads') || '[]');
        existingLeads.push({
          ...formData,
          brochure: selectedBrochure.title,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('naepl_brochure_leads', JSON.stringify(existingLeads));
      } catch {
        // Safe fallback
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger the browser PDF download automatically
      triggerDownload(selectedBrochure.filename);
    }, 850);
  };

  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Information & Download Trigger */}
            <div>
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-4 sm:mb-5 flex items-center gap-2.5">
                <span className="inline-block w-4 h-[1.5px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />
                Brochure
              </p>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium text-[#1a1a1a] leading-[1.08] tracking-tight mb-4 sm:mb-6">
                Download Our<br />
                <span className="text-[#004428]">Company</span> <span className="text-[#8c2442]">Profile.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-base font-light text-[#6b6b6b] leading-relaxed mb-8 max-w-[520px]">
                Explore detailed information about our <strong className="text-[#004428] font-medium">products, capabilities</strong>, infrastructure, and quality standards — all in one comprehensive document.
              </p>

              {/* Highlights List with Download Button in front of each item */}
              <div className="flex flex-col gap-2.5 mb-9 sm:mb-11 max-w-[500px]">
                {highlights.map((h) => (
                  <div
                    key={h.id}
                    className="group flex items-center justify-between py-2.5 px-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 transition-all duration-300 hover:bg-white hover:border-[#004428]/30 hover:shadow-[0_4px_16px_rgba(0,68,40,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#004428] shrink-0 transition-transform duration-300 group-hover:scale-125" />
                      <span className="text-[14px] sm:text-[14.5px] font-medium text-slate-800 group-hover:text-[#004428] transition-colors">
                        {h.title}
                      </span>
                    </div>

                    {/* Download Icon Button */}
                    <button
                      type="button"
                      onClick={() => openModal(h)}
                      title={`Download ${h.title}`}
                      aria-label={`Download ${h.title}`}
                      className="w-8 h-8 rounded-lg bg-emerald-50 text-[#004428] hover:bg-[#004428] hover:text-white flex items-center justify-center transition-all duration-200 border border-emerald-100/80 hover:border-transparent hover:scale-110 shadow-sm cursor-pointer outline-none shrink-0"
                    >
                      <Download size={15} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Primary Download Button */}
              <button
                type="button"
                onClick={() => openModal(highlights[0])}
                className="group relative inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#1a1a1a] text-white px-8 py-4 rounded text-[13.5px] sm:text-[14.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.30)] hover:-translate-y-0.5 hover:border-transparent w-full sm:w-auto justify-center cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={16} className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span className="relative z-10">Download Brochure</span>
              </button>
            </div>

            {/* Right Column: High-End Brochure Mockup */}
            <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] w-full flex items-center justify-center">
              {/* Subtle ambient decorative backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#004428]/15 via-transparent to-[#8c2442]/15 rounded-3xl filter blur-2xl pointer-events-none" />

              {/* Main Brochure Mockup Card (Clickable to open download modal) */}
              <div 
                onClick={() => openModal(highlights[0])}
                className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_28px_72px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_84px_rgba(0,0,0,0.26)] border border-slate-200/80 bg-[#0c120e] cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?w=900&q=85"
                  alt="Company Profile Brochure Cover"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004428]/90 via-[#004428]/60 to-[#111317]/85" />

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#34d399] to-[#8c2442]" />

                {/* Floating Click to Download Overlay Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-semibold text-[#004428]">
                  <Download size={13} />
                  <span>Click to Download</span>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 p-7 sm:p-10 md:p-12 flex flex-col justify-end text-white">
                  <div className="text-right">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/70 mb-2">
                      Official Technical Catalog
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white tracking-tight leading-snug mb-2.5">
                      N Gandhi Advance<br />Engineering Pvt. Ltd.
                    </h3>
                    <p className="text-xs sm:text-[13px] font-light text-white/80">
                      ISO 9001:2015 Certified · Precision Engineering Since 1991
                    </p>
                    <div className="mt-5 w-16 h-[2px] bg-gradient-to-r from-[#004428] to-[#8c2442] ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Lead Capture Popup Modal Form ── */}
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
                  {isSuccess ? 'Download Ready!' : 'Download Brochure'}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-1 leading-relaxed m-0">
                  {isSuccess 
                    ? 'Your technical brochure has started downloading.' 
                    : 'Please fill in your details below to receive the technical catalog.'}
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
                    Your download for <strong className="text-slate-800">{selectedBrochure.title}</strong> has started automatically.
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 mb-6 text-xs text-slate-600 flex items-center justify-between">
                    <span className="flex items-center gap-2 truncate">
                      <FileText size={15} className="text-[#004428] shrink-0" />
                      <span className="font-medium truncate">{selectedBrochure.filename}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => triggerDownload(selectedBrochure.filename)}
                      className="text-[#004428] font-bold hover:underline shrink-0 pl-2 bg-transparent border-none cursor-pointer"
                    >
                      Download Again
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
                  {/* Brochure Selector Dropdown */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Selected Document
                    </label>
                    <div className="relative">
                      <select
                        value={selectedBrochure.id}
                        onChange={(e) => {
                          const found = highlights.find((b) => b.id === e.target.value);
                          if (found) setSelectedBrochure(found);
                        }}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15 outline-none transition-all cursor-pointer font-medium"
                      >
                        {highlights.map((b) => (
                          <option key={b.id} value={b.id}>
                            {b.title}
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
                        placeholder="e.g. John Doe"
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
                        placeholder="e.g. Larsen & Toubro, Siemens"
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

                  {/* Phone Number (Optional) */}
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative flex items-center">
                      <Phone size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Privacy Assurance */}
                  <p className="text-[11px] text-slate-400 leading-normal pt-1 m-0">
                    🔒 We respect your privacy. Your information is securely kept and never shared.
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
                          <span>Download Brochure (PDF)</span>
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

export default BrochurePage;

