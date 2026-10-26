import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#004428] tracking-[0.14em] uppercase mb-4 sm:mb-5 flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
            Contact
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight max-w-[620px] mb-5 sm:mb-6">
            Let&apos;s <span className="text-[#004428]">Build</span><br />
            <span className="text-[#8c2442]">Together.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[16.5px] font-light text-[#6b6b6b] leading-relaxed max-w-[520px]">
            Reach out with your requirements. Our engineering team will respond within{' '}
            <strong className="text-[#004428] font-medium">one business day</strong>.
          </p>
        </div>
      </section>

      {/* ── 2. Contact Grid Section ── */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
            {/* Left Column: Direct Info & Location Map Card */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] tracking-tight mb-7 sm:mb-8">
                Get in <span className="text-[#004428]">Touch</span>
              </h2>

              {/* Info Items List */}
              <div className="flex flex-col gap-3 mb-10 sm:mb-12">
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: 'Mumbai, Maharashtra, India',
                    href: undefined,
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+91 (022) 2850-XXXX',
                    href: 'tel:+912228500000',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@ngandhi.com',
                    href: 'mailto:info@ngandhi.com',
                  },
                  {
                    icon: Globe,
                    label: 'Website',
                    value: 'naepl.r5advertising.com',
                    href: 'https://naepl.r5advertising.com/',
                  },
                ].map((item) => {
                  const IconComp = item.icon;
                  const content = (
                    <div
                      key={item.label}
                      className="group flex items-start gap-4 p-3.5 sm:p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-[#004428]/[0.04] hover:border-[#004428]/15 hover:translate-x-1.5 cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#004428]/[0.08] text-[#004428] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#8c2442]/[0.08] group-hover:text-[#8c2442]">
                        <IconComp size={18} />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-[#8b96a5] tracking-[0.08em] uppercase mb-1">
                          {item.label}
                        </div>
                        <div className="text-[14px] sm:text-[14.5px] font-light text-[#1a1a1a]">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="no-underline block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  );
                })}
              </div>

              {/* Find Us / Our Location Header */}
              <div className="mt-8 mb-4 pt-6 border-t border-slate-100">
                <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-1.5 flex items-center gap-2">
                  <span className="inline-block w-4 h-[1.5px] bg-[#004428]" />
                  Find Us
                </p>
                <h3 className="text-xl sm:text-2xl font-medium text-[#1a1a1a] tracking-tight mb-2">
                  Our <span className="text-[#004428]">Location</span>
                </h3>
                <p className="text-[13.5px] font-light text-[#6b6b6b] leading-relaxed m-0">
                  Visit our office in Mumbai, the heart of India&apos;s commercial capital.
                </p>
              </div>

              {/* Interactive Google Map Card */}
              <div className="group relative rounded-xl overflow-hidden border border-[#e8e8e8] h-[300px] sm:h-[320px] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 bg-slate-100">
                <iframe
                  title="Google Map - Mumbai, Maharashtra, India Headquarters"
                  src="https://maps.google.com/maps?q=Mumbai%2C%20Maharashtra%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Header Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                  <div className="bg-white/95 backdrop-blur-md border border-[#e8e8e8] rounded-md py-1.5 px-3 text-[11px] sm:text-[12px] font-medium text-slate-800 flex items-center gap-2 shadow-sm pointer-events-auto truncate max-w-[85%] sm:max-w-none">
                    <span className="w-2 h-2 rounded-full bg-[#004428] animate-pulse shrink-0" />
                    <span className="truncate">Mumbai, Maharashtra, India — Headquarters</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Mumbai,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-[#e8e8e8] rounded-md py-1.5 px-2.5 text-[11px] font-semibold text-[#004428] hover:text-[#8c2442] hover:bg-white shadow-sm pointer-events-auto transition-colors shrink-0"
                  >
                    <span>View Map</span>
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form Card */}
            <div className="relative bg-[#f8f8f7] border border-[#e8e8e8] rounded-2xl p-6 sm:p-10 md:p-14 overflow-hidden transition-all duration-300 focus-within:shadow-[0_20px_56px_rgba(0,68,40,0.10)] focus-within:border-[#004428]/25">
              {/* Top 3px Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />

              {submitted ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#004428]/15 to-[#8c2442]/10 border border-[#004428]/25 flex items-center justify-center mx-auto mb-6 text-[#004428]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] tracking-tight mb-3">
                    Inquiry <span className="text-[#004428]">Received</span>
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-light text-[#6b6b6b] leading-relaxed max-w-[360px] mx-auto mb-8">
                    Thank you for reaching out. Our engineering team will review your specifications and get back to you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        requirement: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#004428] uppercase tracking-wider hover:underline"
                  >
                    <span>Submit another inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] tracking-tight mb-7 sm:mb-9">
                    Submit <span className="text-[#8c2442]">Inquiry</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 text-[14px] font-light text-[#1a1a1a] bg-white border border-[#e8e8e8] rounded outline-none transition-all duration-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full px-4 py-3 text-[14px] font-light text-[#1a1a1a] bg-white border border-[#e8e8e8] rounded outline-none transition-all duration-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 text-[14px] font-light text-[#1a1a1a] bg-white border border-[#e8e8e8] rounded outline-none transition-all duration-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-3 text-[14px] font-light text-[#1a1a1a] bg-white border border-[#e8e8e8] rounded outline-none transition-all duration-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10"
                        />
                      </div>
                    </div>

                    {/* Row 3: Requirement Select */}
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                        Requirement
                      </label>
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] font-light text-[#1a1a1a] bg-white border border-[#e8e8e8] rounded outline-none transition-all duration-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10 cursor-pointer"
                      >
                        <option value="">Select a requirement</option>
                        <option value="cable-ties">Stainless Steel Cable Ties (N-Loc)</option>
                        <option value="cable-cleat">Cable Cleats & Retention</option>
                        <option value="link-box">Link Box & Enclosures</option>
                        <option value="lugx">LUGX Terminations</option>
                        <option value="cnc-components">CNC / VMC Machined Components</option>
                        <option value="press-parts">Sheet Metal Press Parts</option>
                        <option value="custom">Custom Engineering Solution</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Row 4: Message Textarea */}
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your requirement, quantity, specifications..."
                        className="w-full px-4 py-3 text-[14px] font-light text-[#1a1a1a] bg-white border border-[#e8e8e8] rounded outline-none transition-all duration-200 focus:border-[#004428] focus:ring-2 focus:ring-[#004428]/10 resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] border border-[#1a1a1a] text-white py-4 px-8 rounded text-[13.5px] sm:text-[14.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.30)] hover:-translate-y-0.5 hover:border-transparent cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Submit Inquiry</span>
                      <ArrowRight size={15} className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
