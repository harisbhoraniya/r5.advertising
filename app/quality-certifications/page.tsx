'use client';
import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  FileCheck,
  Microscope,
  Flame,
  Gauge,
  Layers,
  ArrowRight,
  Download,
  Building2,
  CheckSquare
} from 'lucide-react';
import { TrustRow } from '@/components/TrustRow';

const QualityCertificationsPage: React.FC = () => {
  const certifications = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Certified QMS',
      authority: 'Quality Management Systems Certification',
      badge: 'Certified',
      scope:
        'Design, precision manufacturing, and global supply of Stainless Steel Cable Management Systems (N-LOC), Electrical Enclosures & Junction Boxes (LINKBOX), Cable Lugs & Terminals (LUGX), CNC Machined Components, and Sheet Metal Solutions.',
      highlights: [
        'Systematic Quality Control at every production milestone',
        'Annual third-party surveillance and continuous audits',
        'Standard Operating Procedures (SOP) across all machine lines',
        'Comprehensive root-cause analysis and CAPA tracking',
      ],
    },
    {
      id: 'duns-registered',
      title: 'D-U-N-S® Registered Organization',
      authority: 'Dun & Bradstreet Global Database',
      badge: 'Verified Credibility',
      scope:
        'Internationally recognized business credential authenticating commercial legitimacy, corporate governance, financial reliability, and cross-border export transparency for global procurement partners.',
      highlights: [
        'Global supply chain transparency and verified authenticity',
        'Seamless onboarding for multinational EPCs and defense contractors',
        'Rigorous corporate compliance and ethical standards',
      ],
    },
    {
      id: 'make-in-india',
      title: 'Make in India (MII) Compliant',
      authority: 'Government of India Industrial Initiative',
      badge: '100% Indigenous',
      scope:
        'Full domestic value-addition manufacturing setup empowering critical national infrastructure projects across Railways, Metro Rail, Renewable Solar/Wind, Power Transmission, and Naval Defense.',
      highlights: [
        'High indigenous value addition in materials and processing',
        'Direct compliance with public procurement order preferences',
        'Self-reliant engineering manufacturing ecosystem',
      ],
    },
    {
      id: 'rohs-reach',
      title: 'RoHS & REACH Material Compliance',
      authority: 'International Environmental Directives',
      badge: 'Green Engineering',
      scope:
        'All raw materials—including austenitic stainless steel (AISI 304/316L), electrolytic copper, CRCA steel, and polyester coatings—are tested to be 100% lead-free, non-toxic, and halogen-free.',
      highlights: [
        'Safe for enclosed transit, rolling stock, and offshore platforms',
        'Zero hazardous substances in compliance with EU directives',
        'Environment-friendly surface finishing and passivation',
      ],
    },
  ];

  const testingProcedures = [
    {
      title: 'Loop Tensile & Yield Testing',
      standard: 'IEC 62275 / UL 62275',
      desc: 'Computerized Universal Testing Machines (UTM) verify tensile breaking loads from 45 kg up to 180 kg across standard and heavy-duty cable ties.',
      icon: Gauge,
    },
    {
      title: 'Salt Spray Corrosion Testing',
      standard: 'ASTM B117 / ISO 9227',
      desc: 'In-house neutral salt spray chambers simulate 500h to 1000h marine environments to validate corrosion resistance of AISI 316 and coated fasteners.',
      icon: Microscope,
    },
    {
      title: 'Ingress Protection (IP) Testing',
      standard: 'IEC 60529 (IP66 / IP67 / IP68)',
      desc: 'Continuous pressure water jet and dust test protocols ensure weatherproof seal integrity of cast aluminium, mild steel, and stainless steel enclosures.',
      icon: ShieldCheck,
    },
    {
      title: 'Fire Safety & Flammability',
      standard: 'UL 94V-0 / Low Smoke Zero Halogen',
      desc: 'Pure metallic construction and halogen-free coatings are verified for zero toxic emissions, self-extinguishing behavior, and extreme heat resistance.',
      icon: Flame,
    },
    {
      title: 'Dimensional & Optical Inspection',
      standard: 'Strict Tolerance Verification',
      desc: 'High-magnification optical profile projectors, digital verniers, and micrometers verify micron-level tolerances on CNC parts and terminal barrels.',
      icon: Layers,
    },
    {
      title: 'Mill Test Certification (MTC)',
      standard: 'EN 10204 Type 3.1',
      desc: 'Chemical composition analysis and mechanical test certificates from accredited mills accompany raw materials and final dispatch documentation.',
      icon: FileCheck,
    },
  ];

  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner ── */}
      <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[480px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Dark Cinematic Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(0,68,40,0.45) 0%, rgba(10,17,14,0.92) 70%, #0a110e 100%)',
          }}
        />

        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 w-full">
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.16em] uppercase mb-4 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            N GANDHI ADVANCE ENGINEERING · QUALITY MANAGEMENT SYSTEM
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Certified Engineering Rigor. <br className="hidden sm:inline" />
            <span className="text-[#8fd6ae]">Zero-Defect Commitment.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[660px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Manufactured under certified ISO 9001:2015 quality management systems, D-U-N-S® registered credibility, and rigorous in-house metallurgical and dimensional inspection labs.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore Certifications</span>
              <ArrowRight size={15} />
            </a>
            <Link
              href="/contact?subject=Quality%20Documentation%20and%20Certificates"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] font-medium tracking-wide transition-all backdrop-blur-sm"
            >
              <Download size={15} />
              <span>Request Certificates &amp; MTC</span>
            </Link>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Quality Policy Statement ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-slate-200 rounded-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <ShieldCheck size={280} className="text-[#004428]" />
            </div>

            <div className="max-w-[850px] relative z-10">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] block mb-2">
                CORPORATE QUALITY POLICY · N GANDHI GROUP
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                "Precision Without Compromise across Every Component We Deliver"
              </h2>
              <blockquote className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed italic border-l-4 border-[#004428] pl-5 my-5">
                "N Gandhi Advance Engineering Private Limited is committed to manufacturing engineering components that consistently surpass customer expectations through precision tooling, strict raw material traceability, continual process refinement, and full compliance with international quality standards."
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/80">
                <div>
                  <p className="text-[22px] sm:text-[26px] font-bold text-[#004428]">100%</p>
                  <p className="text-[11.5px] font-semibold text-slate-600 uppercase tracking-wide">PDI Verification</p>
                </div>
                <div>
                  <p className="text-[22px] sm:text-[26px] font-bold text-[#004428]">ISO</p>
                  <p className="text-[11.5px] font-semibold text-slate-600 uppercase tracking-wide">9001:2015 QMS</p>
                </div>
                <div>
                  <p className="text-[22px] sm:text-[26px] font-bold text-[#004428]">EN 10204</p>
                  <p className="text-[11.5px] font-semibold text-slate-600 uppercase tracking-wide">3.1 MTC Traceable</p>
                </div>
                <div>
                  <p className="text-[22px] sm:text-[26px] font-bold text-[#004428]">D-U-N-S®</p>
                  <p className="text-[11.5px] font-semibold text-slate-600 uppercase tracking-wide">Registered Firm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Certifications & Credentials Showcase ── */}
      <section className="py-14 sm:py-20 bg-[#f8fafc]" id="certifications">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[720px] mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] block mb-2">
              ACCREDITED QUALITY STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Recognized Credentials for Global Compliance
            </h2>
            <p className="text-[14px] sm:text-[15px] text-slate-600 mt-3 leading-relaxed">
              Our facilities, documentation, and manufacturing protocols are independently validated to satisfy rigorous engineering standards worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#004428]/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-[#004428] border border-emerald-100">
                    <Award size={28} />
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider rounded-full">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-[12px] font-semibold text-[#8c2442] uppercase tracking-wider mb-4">
                  {cert.authority}
                </p>

                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed mb-6 flex-1">
                  {cert.scope}
                </p>

                <div className="pt-5 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Compliance Highlights
                  </p>
                  <ul className="space-y-2">
                    {cert.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                        <CheckCircle2 size={15} className="text-[#004428] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. In-House Testing Laboratory & Verification ── */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] block mb-2">
                IN-HOUSE QA / QC LABORATORY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Rigorous Testing Protocols &amp; Equipment
              </h2>
            </div>
            <p className="text-[13.5px] text-slate-500 max-w-[420px] leading-relaxed">
              Every production lot undergoes rigorous mechanical, metallurgical, and environmental validation prior to dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingProcedures.map((test, idx) => {
              const Icon = test.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#004428]/10 text-[#004428] flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {test.standard}
                  </span>
                  <h3 className="text-[17px] font-bold text-slate-900 tracking-tight mb-2">
                    {test.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {test.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Trust Row ── */}
      <TrustRow />

      {/* ── 6. Closing Action Banner (Tailored for Quality Page) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[680px]">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-3 border border-emerald-400/20">
                <CheckSquare size={13} />
                <span>Audits &middot; Client Witness &middot; Mill Certificates</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                Need Quality Dossiers, MTCs, or Plant Audit Access?
              </h2>
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed">
                We coordinate with third-party inspection agencies (TUV, DNV, BV, Lloyds) and provide complete compliance dossiers for global EPC tenders and OEM vendor approvals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?subject=Audit%20and%20Quality%20Inquiry"
                className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-[#004428] font-bold px-7 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
              >
                <span>Contact Quality Team</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualityCertificationsPage;
