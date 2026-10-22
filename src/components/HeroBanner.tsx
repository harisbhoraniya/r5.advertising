import React from 'react';

interface HeroBannerProps {
  tag?: string;
  titleMain?: string;
  titleAccent?: string;
  bannerImage?: string;
  altText?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  tag = 'CABLE MANAGEMENT',
  titleMain = 'N-LOC',
  titleAccent = 'Stainless Steel Cable Ties',
  bannerImage,
  altText = 'Our Product Range - Precision-engineered components and solutions'
}) => {
  if (bannerImage) {
    return (
      <section className="relative min-h-0 bg-[#12151a] p-0 block leading-none overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3.5px] after:bg-gradient-to-r after:from-[#004428] after:via-[#065f46] after:to-[#8c2442] after:z-10">
        <img 
          src={bannerImage} 
          alt={altText} 
          className="w-full h-auto block"
        />
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-[220px] md:min-h-[290px] flex items-center bg-[#0b0d10] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{ backgroundImage: `url('/assets/hero_banner.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/90 via-[#0a0c10]/70 to-[#0a0c10]/40" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-12 w-full">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="inline-block w-[22px] h-[1.5px] bg-slate-400" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-300 uppercase">{tag}</span>
        </div>
        <h1 className="flex flex-wrap items-baseline gap-3.5 m-0 leading-tight">
          <span className="text-[34px] md:text-[52px] font-extrabold tracking-tight text-white">{titleMain}</span>
          <span className="font-accent text-[34px] md:text-[52px] italic font-medium text-[#df8497] tracking-tight">{titleAccent}</span>
        </h1>
      </div>
    </section>
  );
};
