'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Cpu,
  Box,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  image: string;
  alt: string;
}

// Hero slider slides - 4th slide removed per client feedback.
// Updated to realistic medium-scale engineering/machining visuals.
// Easy to update when original factory photographs are provided by the client.
const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'ISO 9001:2015 Certified · Made in India',
    title: 'Engineering Precision.\nDelivering Excellence.',
    description:
      'Your trusted partner for high-precision machining, fabrication, and engineered solutions — serving global markets with reliability.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: '/assets/hero_slides/slide_1_precision_cutting.webp',
    alt: 'High-precision metal cutting with sparks and CNC lathe machining',
  },
  {
    eyebrow: 'Advanced Machinery',
    title: 'Powered by\nAdvanced Machinery',
    description:
      'State-of-the-art CNC and VMC machines enabling tight tolerances and complex geometries at scale.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: '/assets/hero_slides/slide_2_advanced_machinery.webp',
    alt: 'State-of-the-art 5-axis CNC and VMC industrial machinery',
  },
  {
    eyebrow: 'Skilled Craftsmanship',
    title: 'Skilled Hands. Flawless Craftsmanship.',
    description:
      'A team of experienced engineers and technicians committed to consistent, dependable quality.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: '/assets/hero_slides/slide_3_skilled_craftsmanship.webp',
    alt: 'Experienced precision engineer inspecting CNC machined components with micrometer',
  },
  {
    eyebrow: 'End-to-End Production',
    title: 'One Roof.\nEnd-to-End Production.',
    description:
      'From raw material to finished component — every stage handled in-house with full accountability.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: '/assets/hero_slides/slide_5_end_to_end.webp',
    alt: 'Comprehensive in-house manufacturing, sheet metal stamping, and fabrication under one roof',
  },
  {
    eyebrow: 'Scaled Manufacturing',
    title: 'Scaled for\nGlobal Demand',
    description:
      'Flexible batch quantities and strong logistics to meet international volume requirements.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: '/assets/hero_slides/slide_6_global_demand.webp',
    alt: 'Large-scale global manufacturing logistics and dispatch warehouse ready for export',
  },
];

// Engineering Capabilities (headings per client instruction)
const capabilities: string[] = [
  'Precision CNC Machining & Turning',
  'Sheet Metal Stamping & Tooling',
  'Cable Management & Fastening Systems',
  'Electrical Fault Protection',
  'Electrical Termination Solutions',
  'Industrial Enclosures & Junction Boxes',
];

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'ISO 9001:2015 Certified',
    desc: 'Globally recognized quality management standards.',
  },
  {
    icon: <Cpu size={28} />,
    title: 'High Precision Manufacturing',
    desc: 'Tight tolerances and complex geometries with consistency.',
  },
  {
    icon: <Clock size={28} />,
    title: 'On-Time Delivery',
    desc: 'Reliable timelines and strong logistics commitment.',
  },
  {
    icon: <Box size={28} />,
    title: 'Flexible Batch Quantities',
    desc: 'Low to high volume production runs.',
  },
];

// Featured Products: Renamed per client instruction
const featuredProducts = [
  {
    slug: 'stainless-steel-cable-ties',
    name: 'Stainless Steel Cable Ties',
    img: '/assets/featured_products/featured_nloc.webp',
    link: '/products/n-loc',
  },
  {
    slug: 'cable-cleats',
    name: 'Cable Cleats & Accessories',
    img: '/assets/featured_products/featured_cable_cleats.webp',
    link: '/products/cable-cleat',
  },
  {
    slug: 'junction-boxes',
    name: 'Junction Boxes & Enclosures',
    img: '/assets/featured_products/featured_link_box.webp',
    link: '/products/link-box',
  },
  {
    slug: 'electrical-lugs',
    name: 'Lugs & Terminals',
    img: '/assets/featured_products/featured_lugx.webp',
    link: '/products/lugx',
  },
  {
    slug: 'cnc-machined-components',
    name: 'CNC Machined Components',
    img: '/assets/featured_products/featured_cnc.webp',
    link: '/products/cnc-machine-component',
  },
  {
    slug: 'press-parts',
    name: 'Sheet Metal Components',
    img: '/assets/sheet_metal/page_98_img_0.webp',
    link: '/products/sheet-metal-press-parts',
  },
];

interface IndustryItem {
  id: string;
  name: string;
  img: string;
}

// 8 Verified Industries with High-Res Imagery
const industries: IndustryItem[] = [
  {
    id: 'electrical-control-systems',
    name: 'Electrical & Control Systems',
    img: '/assets/sector_control_panel.webp',
  },
  {
    id: 'robotics-industrial-automation',
    name: 'Robotics & Industrial Automation',
    img: '/assets/sector_robotics_automation.webp',
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy (Solar & Wind)',
    img: '/assets/sector_renewable_energy.webp',
  },
  {
    id: 'oil-gas-petrochemicals',
    name: 'Oil & Gas / Petrochemicals',
    img: '/assets/sector_oil_gas.webp',
  },
  {
    id: 'marine-shipbuilding',
    name: 'Marine & Shipbuilding',
    img: '/assets/sector_marine_shipbuilding.webp',
  },
  {
    id: 'infrastructure-rail-transit',
    name: 'Infrastructure & Rail Transit',
    img: '/assets/sector_metro_infrastructure.webp',
  },
  {
    id: 'automobile',
    name: 'Automobile',
    img: '/assets/sector_automobile.jpg',
  },
  {
    id: 'water-wastewater-treatment',
    name: 'Water & Wastewater Treatment',
    img: '/assets/sector_water_treatment.webp',
  },
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Preload all slide images on mount so transitions are instantaneous
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Continuous auto-sliding that never stalls or pauses on scroll
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    startTimer();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startTimer();
  };

  return (
    <main className="w-full bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── 1. Hero Slider Section ── */}
      <section className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[58vh] lg:min-h-[62vh] flex items-center bg-[#0a0c10] overflow-hidden group">
        <style>{`
          @keyframes heroKenBurns {
            from { transform: scale(1) translateZ(0); }
            to { transform: scale(1.08) translateZ(0); }
          }
          @keyframes heroProgress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes heroTextIn {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-slide-bg {
            will-change: transform, opacity;
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `}</style>

        {/* Background Image Carousel with Ken Burns & Smooth Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out hero-slide-bg ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  animation: idx === currentSlide ? 'heroKenBurns 6.5s ease-out forwards' : 'none',
                }}
              />
            </div>
          ))}

          {/* Atmospheric Gradient Overlays */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(105deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 60%, transparent 80%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
            }}
          />
        </div>

        {/* Hero Slide Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 w-full flex items-center min-h-full">
          <div
            key={currentSlide}
            className="max-w-[780px]"
            style={{ animation: 'heroTextIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Eyebrow */}
            <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm">
              {heroSlides[currentSlide].eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 whitespace-pre-line drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[540px] mb-8 sm:mb-10 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
              {heroSlides[currentSlide].description}
            </p>

            {/* Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href={heroSlides[currentSlide].primaryBtnLink}
                className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#003420] text-white px-7 sm:px-8 py-3.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-200 shadow-[0_4px_16px_rgba(0,68,40,0.35)] hover:shadow-[0_6px_22px_rgba(0,68,40,0.5)] hover:-translate-y-0.5"
              >
                <span>{heroSlides[currentSlide].primaryBtnText}</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/50 hover:bg-white/10 hover:border-white/80 text-white px-7 sm:px-8 py-3.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                {heroSlides[currentSlide].secondaryBtnText}
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle Prev / Next Navigation Arrows on Desktop */}
        <div className="absolute right-6 sm:right-10 bottom-7 z-20 hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer outline-none"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer outline-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Carousel Slider Dash Indicators */}
        <div className="absolute bottom-7 left-4 sm:left-6 md:left-8 z-20 flex items-center gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSelectSlide(i)}
              aria-label={`Show ${slide.eyebrow}`}
              className="relative w-8 sm:w-9 h-1 rounded-sm overflow-hidden bg-white/35 hover:bg-white/60 transition-colors cursor-pointer"
            >
              {i === currentSlide && (
                <span
                  key={`bar-${currentSlide}`}
                  className="absolute inset-0 bg-white origin-left"
                  style={{
                    animation: 'heroProgress 5500ms linear forwards',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── 2. About Snapshot Section ── */}
      <section className="py-16 sm:py-24 bg-[#f8f8f7] relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8c2442] to-[#004428]" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: About Narrative */}
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-4 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                About NAEPL
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#1a1a1a] leading-[1.18] tracking-tight mb-6">
                One-Stop <span className="text-[#004428]">Engineering</span> Solutions
              </h2>

              <p className="text-[14.5px] sm:text-[15px] font-light text-[#6b6b6b] leading-[1.85] mb-5">
                NAEPL is the core engineering strength of{' '}
                <strong className="text-[#8c2442] font-semibold">N Gandhi Group</strong> — combining advanced manufacturing, in-house capabilities, and engineering expertise to deliver cost-effective and scalable solutions.
              </p>

              <p className="text-[14.5px] sm:text-[15px] font-light text-[#6b6b6b] leading-[1.85] mb-8 sm:mb-10">
                A large share of our operations caters to international markets, and we maintain global quality standards with consistent reliability.
              </p>

              {/* Stat Blocks */}
              <div className="flex items-center gap-8 sm:gap-12 flex-wrap pt-4 border-t border-[#e8e8e8]">
                <div className="group cursor-default">
                  <div className="text-3xl sm:text-[34px] font-bold text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors whitespace-nowrap">
                    ISO
                  </div>
                  <div className="text-xs text-[#4a4a4a] font-medium mt-1">
                    9001:2015 Certified
                  </div>
                </div>

                <div className="group cursor-default">
                  <div className="text-3xl sm:text-[34px] font-bold text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors whitespace-nowrap">
                    One-Stop
                  </div>
                  <div className="text-xs text-[#4a4a4a] font-medium mt-1">
                    Solution Provider
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Facility Showcase Card */}
            <div className="relative h-[340px] sm:h-[440px] rounded-lg overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-slate-200">
              <img
                src="/assets/about_naepl.webp"
                alt="NAEPL Advanced Engineering and Manufacturing Facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004428]/15 to-[#8c2442]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Capabilities Section ("What We Do") ── */}
      <section id="capabilities" className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Subtle engineering background image */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <img
            src="/assets/cnc_machined/cnc_hero_banner_hd.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            {/* Left Column (Sticky) */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-4 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Engineering Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1a1a1a] leading-[1.18] tracking-tight">
                What We <span className="text-[#8c2442]">Do</span>
              </h2>
              <p className="text-sm font-light text-[#6b6b6b] leading-relaxed mt-4 max-w-[340px]">
                Comprehensive in-house manufacturing, precision tooling, and scalable engineering solutions under one roof.
              </p>
            </div>

            {/* Right Column: Original rows with JUST HEADINGS (no numbers) */}
            <div className="flex flex-col border-t border-[#e8e8e8]">
              {capabilities.map((title) => (
                <div
                  key={title}
                  className="group relative flex items-center justify-between py-6 sm:py-7 px-4 sm:px-6 border-b border-[#e8e8e8] transition-all duration-300 hover:bg-[#f0f7f3] hover:pl-8 cursor-default"
                >
                  {/* Left accent hover stripe */}
                  <span className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-b from-[#004428] to-[#8c2442] transition-all duration-300 group-hover:w-1" />

                  <h3 className="text-lg sm:text-[20px] font-semibold text-[#1a1a1a] group-hover:text-[#004428] transition-colors m-0">
                    {title}
                  </h3>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-[#004428] transition-all group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Featured Products Section (Placed before Why Choose Us per client feedback) ── */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Header row: Paragraph removed, View All Products retained */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 pb-6 sm:pb-7 border-b border-slate-200">
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Featured Products
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-slate-900 leading-[1.25] tracking-tight m-0">
                Engineered for <br className="hidden sm:inline" />
                <span className="font-normal text-[#8c2442]">Demanding</span> Applications
              </h2>
            </div>
            <div>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[13px] font-bold tracking-wider text-[#8c2442] hover:text-[#5c182c] transition-colors relative uppercase"
              >
                <span>View All Products</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card Grid with Renamed Products and Clean Layout (Grey category tags removed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.slug}
                id={product.slug}
                href={product.link}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300 cursor-pointer block no-underline"
              >
                {/* Image Container */}
                <div className="relative h-[200px] sm:h-[230px] bg-white overflow-hidden rounded-t-2xl border-b border-slate-100 flex items-center justify-center p-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                    {product.name}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-6 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  <div className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 group-hover:gap-3">
                    <span>EXPLORE PRODUCTS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Us Section ("Built on Excellence" - Moved after Featured Products) ── */}
      <section className="py-16 sm:py-24 bg-[#f8f8f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight">
              Built on <span className="text-[#004428]">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group relative bg-white p-7 sm:p-9 rounded border border-[#e8e8e8] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)] hover:border-transparent overflow-hidden"
              >
                {/* Bottom expanding gradient line */}
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] to-[#8c2442] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                <div className="text-[#004428] mb-5 transition-all duration-300 group-hover:text-[#8c2442] group-hover:scale-110 origin-left">
                  {r.icon}
                </div>

                <h3 className="text-base sm:text-lg font-medium text-[#1a1a1a] mb-3 leading-snug tracking-tight">
                  {r.title}
                </h3>

                <p className="text-[13px] font-light text-[#6b6b6b] leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Industries Section ("Sectors We Serve" - Visual Grid with Images & Redirect) ── */}
      <section className="py-16 sm:py-24 bg-[#111613] relative overflow-hidden text-white">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(0,68,40,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(140,36,66,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Header row with redirect icon/link to industry page */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 pb-6 border-b border-white/10">
            <div>
              <p className="text-[11px] font-semibold text-[#8fd6ae] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
                Industries We Serve
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white leading-[1.18] tracking-tight m-0">
                Sectors We <span className="text-[#8fd6ae]">Serve</span>
              </h2>
            </div>
            <div>
              <Link
                href="/industry"
                className="group inline-flex items-center gap-2 text-[13px] font-bold tracking-wider text-[#8fd6ae] hover:text-white transition-colors uppercase"
              >
                <span>Explore All Industries</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Visual Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href="/industry"
                className="group relative h-[180px] sm:h-[200px] rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#8fd6ae]/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)] block"
              >
                {/* Background Image */}
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity group-hover:from-black/95" />

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-2">
                  <h3 className="text-[14.5px] sm:text-[15.5px] font-semibold text-white group-hover:text-[#8fd6ae] transition-colors leading-snug m-0">
                    {ind.name}
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#004428] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight size={13} className="text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA Banner Section ── */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="relative bg-[#f8f8f7] border border-[#e8e8e8] rounded p-8 sm:p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden transition-all duration-300 hover:shadow-[0_24px_56px_rgba(0,68,40,0.10)] hover:border-[#004428]/30">
            {/* Top 3px Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-medium text-[#1a1a1a] tracking-tight mb-3">
                Looking for a reliable <span className="text-[#004428]">engineering partner</span>?
              </h2>
              <p className="text-[14.5px] sm:text-base font-light text-[#6b6b6b]">
                Let&apos;s build <span className="text-[#8c2442] font-semibold">precision</span> together.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 bg-[#1a1a1a] border border-[#1a1a1a] text-white px-8 py-4 rounded text-[13.5px] sm:text-[14.5px] font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,68,40,0.35)] hover:-translate-y-0.5 shrink-0 w-full sm:w-auto justify-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#004428] to-[#8c2442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Contact Us Today</span>
              <ArrowRight size={15} className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
