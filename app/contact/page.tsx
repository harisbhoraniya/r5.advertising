'use client';
import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        '3556119d-6875-4b80-b33c-a88f4b3ed82e';

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'NAEPL Website Contact Form',
          subject: `New Technical Inquiry: ${formData.requirement || 'General'} - from ${formData.name}`,
          name: formData.name,
          company: formData.company || 'Not specified',
          email: formData.email,
          phone: formData.phone || 'Not specified',
          requirement: formData.requirement || 'General Inquiry',
          message: formData.message || 'No additional message entered',
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit inquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message || 'Something went wrong. Please try again or email enquiryengg@ngandhi.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-1.5 flex items-center gap-2">
                <span className="inline-block w-4 h-[1.5px] bg-[#004428]" />
                N Gandhi Advance Engineering Private Limited
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] tracking-tight mb-7 sm:mb-8">
                Get in <span className="text-[#004428]">Touch</span>
              </h2>

              {/* Info Items List */}
              <div className="flex flex-col gap-3 mb-10 sm:mb-12">
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: '104, First Floor, C Wing, Marathon Futurex, NM Joshi Marg, Mafatlal Mill Compound, Lower Parel ( E ), Mumbai – 400013, Maharashtra, India',
                    href: 'https://maps.google.com/?q=Marathon+Futurex,+NM+Joshi+Marg,+Lower+Parel,+Mumbai+400013',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+91 22-68380200',
                    href: 'tel:+912268380200',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'enquiryengg@ngandhi.com',
                    href: 'mailto:enquiryengg@ngandhi.com',
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
                  Visit our office at Marathon Futurex, Lower Parel in the heart of Mumbai.
                </p>
              </div>

              {/* Interactive Google Map Card */}
              <div className="group relative rounded-xl overflow-hidden border border-[#e8e8e8] h-[300px] sm:h-[320px] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 bg-slate-100">
                <iframe
                  title="Google Map - Marathon Futurex, Lower Parel, Mumbai"
                  src="https://maps.google.com/maps?q=Marathon%20Futurex%2C%20Lower%20Parel%2C%20Mumbai%20400013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Header Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                  <div className="bg-white/95 backdrop-blur-md border border-[#e8e8e8] rounded-md py-1.5 px-3 text-[11px] sm:text-[12px] font-medium text-slate-800 flex items-center gap-2 shadow-sm pointer-events-auto truncate max-w-[85%] sm:max-w-none">
                    <span className="w-2 h-2 rounded-full bg-[#004428] animate-pulse shrink-0" />
                    <span className="truncate">Marathon Futurex, Lower Parel, Mumbai — NAEPL</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Marathon+Futurex,+NM+Joshi+Marg,+Lower+Parel,+Mumbai+400013"
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
                    Thank you for reaching out. Our engineering team has received your details and will get back to you within one business day.
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

                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                      <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

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

                    {/* Row 3: Requirement Select (Shadcn UI) */}
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6b6b6b] tracking-[0.08em] uppercase mb-2">
                        Requirement
                      </label>
                      <Select
                        value={formData.requirement}
                        onValueChange={(val) =>
                          setFormData((prev) => ({ ...prev, requirement: val }))
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a requirement" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cable-ties">Stainless Steel Cable Ties (N-Loc)</SelectItem>
                          <SelectItem value="cable-cleat">Cable Cleats</SelectItem>
                          <SelectItem value="link-box">Junction Box &amp; Enclosures</SelectItem>
                          <SelectItem value="lugx">Lugs &amp; Terminals (LUGX)</SelectItem>
                          <SelectItem value="cnc-components">CNC Machined Components</SelectItem>
                          <SelectItem value="press-parts">Sheet Metal Press Parts</SelectItem>
                          <SelectItem value="custom">Custom Engineering Solution</SelectItem>
                        </SelectContent>
                      </Select>
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
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] border border-[#1a1a1a] text-white py-4 px-8 rounded text-[13.5px] sm:text-[14.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.30)] hover:-translate-y-0.5 hover:border-transparent cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin relative z-10" />
                          <span className="relative z-10">Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Submit Inquiry</span>
                          <ArrowRight size={15} className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
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
