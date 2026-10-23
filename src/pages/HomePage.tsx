import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    image: 'https://images.unsplash.com/photo-1735494033576-9c882e80504c?w=1600&q=80&auto=format&fit=crop',
    alt: 'Precision metal cutting with sparks',
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
    image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1600&q=80&auto=format&fit=crop',
    alt: 'State-of-the-art CNC and VMC industrial machinery',
  },
  {
    eyebrow: 'Skilled Craftsmanship',
    title: 'Skilled Hands.\nFlawless Craftsmanship.',
    description:
      'A team of experienced engineers and technicians committed to consistent, dependable quality.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: 'https://images.unsplash.com/photo-1730584474196-b0e8a29303e8?w=1600&q=80&auto=format&fit=crop',
    alt: 'Experienced welders at work in a manufacturing facility',
  },
  {
    eyebrow: 'Modern Facilities',
    title: 'Built for the Future\nof Manufacturing',
    description:
      'Modern, well-equipped facilities designed for efficiency, safety, and scalable production.',
    primaryBtnText: 'View Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '#contact',
    image: 'https://images.unsplash.com/photo-1764185800646-f75f7e16e465?w=1600&q=80&auto=format&fit=crop',
    alt: 'Modern, well-equipped industrial factory floor',
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
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=1600&q=80&auto=format&fit=crop',
    alt: 'Comprehensive in-house manufacturing machines',
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
    image: 'https://images.unsplash.com/photo-1670483111819-ed62eff77173?w=1600&q=80&auto=format&fit=crop',
    alt: 'Large-scale global manufacturing and assembly hall',
  },
];

const capabilities = [
  'Stainless Steel Cable Ties',
  'Cable Cleat',
  'Link Box',
  'LUGX',
  'CNC Machine Component',
  'Sheet Metal Press Parts',
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

const featuredProducts = [
  {
    slug: 'n-loc',
    name: 'N-Loc',
    category: 'STAINLESS STEEL CABLE TIES',
    desc: 'Self-locking roller ball, ladder & coated stainless steel ties in SS 304 & 316',
    img: '/assets/Cable_Ties.png',
    link: '/products/n-loc',
  },
  {
    slug: 'cable-cleat',
    name: 'Cable Cleat',
    category: 'CABLE MANAGEMENT',
    desc: 'Short-circuit withstand retention cleats for single and trefoil power cables',
    img: '/assets/Cable_cleats.png',
    link: '/products/cable-cleat',
  },
  {
    slug: 'link-box',
    name: 'Link Box',
    category: 'ENCLOSURES',
    desc: 'Weatherproof IP66/IP68 industrial electrical enclosures & junction boxes',
    img: '/assets/Junction_Box.jpg',
    link: '/products/link-box',
  },
  {
    slug: 'lugx',
    name: 'LUGX',
    category: 'ELECTRICAL FITTINGS',
    desc: 'High-conductivity electrical termination lugs and connector hardware',
    img: '/assets/app_control_panels.png',
    link: '/products/lugx',
  },
  {
    slug: 'cnc-machine-component',
    name: 'CNC Machine Component',
    category: 'CNC MACHINING',
    desc: 'High precision turned, milled & drilled components with tight tolerances',
    img: '/assets/Machine_Components.png',
    link: '/products#cnc-machine-component',
  },
  {
    slug: 'press-parts',
    name: 'Sheet Metal Press Parts',
    category: 'PRESS COMPONENTS · STRAPPING',
    desc: 'Precision progressive tool stamping & pressed parts for global assembly lines',
    img: '/assets/Press_Parts.png',
    link: '/products#press-parts',
  },
];

const industries = [
  'Electrical & Electronics',
  'Industrial Manufacturing',
  'Infrastructure & Utilities',
  'Engineering & Automation',
  'Oil & Gas',
];

export const HomePage: React.FC = () => {
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
      <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[82vh] lg:min-h-[88vh] flex items-center bg-[#0a0c10] overflow-hidden group">
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

          {/* Atmospheric Gradient Overlays (Darkened left side for text readability, clear right side for sparks/machinery) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(105deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 60%, transparent 80%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
            }}
          />
        </div>

        {/* Hero Slide Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 w-full flex items-center min-h-full">
          <div
            key={currentSlide}
            className="max-w-[640px]"
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
                to={heroSlides[currentSlide].primaryBtnLink}
                className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#003420] text-white px-7 sm:px-8 py-3.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-200 shadow-[0_4px_16px_rgba(0,68,40,0.35)] hover:shadow-[0_6px_22px_rgba(0,68,40,0.5)] hover:-translate-y-0.5"
              >
                <span>{heroSlides[currentSlide].primaryBtnText}</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
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

        {/* Carousel Slider Dash Indicators (Bottom Left - exactly matching reference screenshot) */}
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
                  <div className="font-serif text-3xl sm:text-[34px] font-normal text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors">
                    ISO
                  </div>
                  <div className="text-xs text-[#9a9a9a] font-light mt-1">
                    9001:2015 Certified
                  </div>
                </div>

                <div className="group cursor-default">
                  <div className="font-serif text-3xl sm:text-[34px] font-normal text-[#1a1a1a] tracking-tight group-hover:text-[#004428] transition-colors">
                    One-Stop
                  </div>
                  <div className="text-xs text-[#9a9a9a] font-light mt-1">
                    Solution Provider
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Facility Showcase Card */}
            <div className="relative h-[340px] sm:h-[440px] rounded-lg overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-slate-200">
              <img
                src="/assets/hero_banner.png"
                alt="NAEPL Engineering facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004428]/20 to-[#8c2442]/15" />
              
              {/* Floating Quality Badge */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded border-l-[3px] border-[#004428] shadow-lg">
                <p className="text-xs font-semibold text-[#004428] tracking-[0.06em] uppercase m-0">
                  Made in India · Global Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Capabilities Section ("What We Do") ── */}
      <section id="capabilities" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            {/* Left Column (Sticky) */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-4 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1a1a1a] leading-[1.18] tracking-tight">
                What We <span className="text-[#8c2442]">Do</span>
              </h2>
              <p className="text-sm font-light text-[#9a9a9a] leading-relaxed mt-4 max-w-[340px]">
                End-to-end manufacturing capabilities under one roof.
              </p>
            </div>

            {/* Right Column: Numbered Interactive Capability Rows */}
            <div className="flex flex-col border-t border-[#e8e8e8]">
              {capabilities.map((cap, i) => (
                <div
                  key={cap}
                  className="group relative flex items-center justify-between py-5 sm:py-6 px-4 sm:px-5 border-b border-[#e8e8e8] transition-all duration-300 hover:bg-[#f0f7f3] hover:pl-7 cursor-default"
                >
                  {/* Left accent hover stripe */}
                  <span className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-b from-[#004428] to-[#8c2442] transition-all duration-300 group-hover:w-1" />

                  <span className="text-base sm:text-lg font-medium text-[#1a1a1a] group-hover:text-[#004428] transition-colors">
                    {cap}
                  </span>
                  <span className="font-sans text-xs font-light text-[#9a9a9a] group-hover:text-[#8c2442] group-hover:font-semibold transition-colors">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose Us Section ("Built on Excellence") ── */}
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

      {/* ── 5. Featured Products Section ("Engineered for Demanding Applications") ── */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Header row matching ProductsPage */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 mb-10 sm:mb-14 pb-6 sm:pb-7 border-b border-slate-200">
            <div>
              <p className="text-[11px] font-semibold text-[#004428] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-[#004428]" />
                Featured Products
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-slate-900 leading-[1.25] tracking-tight m-0">
                Engineered for <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#8c2442]">Demanding</span> Applications
              </h2>
            </div>
            <div className="flex flex-col sm:items-end gap-3">
              <p className="max-w-[480px] text-[14px] sm:text-[15px] font-normal text-slate-500 leading-relaxed m-0 md:text-right">
                Every product in our range is built to perform — precision materials, exacting tolerances, and global-standard certifications.
              </p>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-[12.5px] font-bold tracking-wider text-[#8c2442] hover:text-[#5c182c] transition-colors relative uppercase"
              >
                <span>View All Products</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 6-Card Responsive Grid with Exact ProductsPage Card UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.slug}
                id={product.slug}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300"
              >
                {/* Image Container with Top-Left Badge */}
                <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                    <span className="inline-block bg-slate-800/90 backdrop-blur-sm text-white text-[9.5px] sm:text-[10px] font-bold tracking-wider py-1 px-2.5 sm:px-3 rounded-full uppercase">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Card Body with Category, Title, Underline Accent, Description, and View Details Button */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {product.category}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3">
                    {product.name}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-4 sm:mb-5 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />

                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  <Link
                    to={product.link}
                    className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 hover:text-[#5c182c] group-hover:gap-3"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Industries Section ("Sectors We Serve") ── */}
      <section className="py-16 sm:py-24 bg-[#1a1a1a] relative overflow-hidden text-white">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(0,68,40,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(140,36,66,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8b96a5] tracking-[0.16em] uppercase mb-3 flex items-center gap-2.5">
                <span className="inline-block w-5 h-[1.5px] bg-gradient-to-r from-[#004428] to-[#8c2442]" />
                Industries
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white leading-[1.18] tracking-tight">
                Sectors We <span className="text-[#8c2442]">Serve</span>
              </h2>
            </div>

            {/* Interactive Industry Chips */}
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <div
                  key={ind}
                  className="text-[14px] sm:text-[15px] font-medium text-[#cccccc] border border-[#333333] rounded py-2.5 px-4 sm:px-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#004428] hover:to-[#8c2442] hover:text-white hover:border-transparent hover:-translate-y-0.5 cursor-default"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA Banner Section ("Looking for a reliable engineering partner?") ── */}
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
              to="/contact"
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
