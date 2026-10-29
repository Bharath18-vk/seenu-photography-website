import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

interface BrandStoryProps {
  onDiscoverApproach: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onDiscoverApproach }) => {
  return (
    <section
      id="about"
      className="relative bg-[#F8F5EF] text-[#191816] py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Editorial Header Line */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-[#191816]/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.25em] text-[#191816]/60">
          EDITORIAL ESSAY — 01
        </span>
        <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.25em] text-[#C7A77B]">
          {SITE_CONFIG.brandName.toUpperCase()} PHILOSOPHY
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography & Intentional Whitespace */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            {/* Required Eyebrow */}
            <span className="inline-block text-[11px] font-mono uppercase tracking-[0.24em] text-[#C7A77B] font-medium">
              MORE THAN PHOTOGRAPHS
            </span>

            {/* Required Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#191816] font-light leading-[1.12] tracking-tight">
              Every wedding has a story{' '}
              <span className="italic font-normal block mt-1 text-[#191816]/90">
                worth holding on to.
              </span>
            </h2>
          </div>

          {/* Required Body Copy */}
          <p className="text-[#191816]/80 font-sans font-light text-base md:text-lg leading-relaxed">
            The quiet glances, the joyful chaos, the happy tears, and the moments you never planned. We believe the most meaningful photographs are the ones that let you feel it all over again.
          </p>

          <p className="text-[#191816]/70 font-sans font-light text-sm md:text-base leading-relaxed">
            We avoid formulaic choreography and heavy direction. Instead, we cultivate an atmosphere of relaxed trust, allowing the genuine intimacy between two people, their families, and their sacred traditions to breathe naturally before the lens.
          </p>

          {/* Required Link: Discover Our Approach */}
          <div className="pt-2">
            <button
              onClick={onDiscoverApproach}
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#191816] hover:text-[#C7A77B] transition-colors focus:outline-none cursor-pointer"
            >
              <span className="border-b border-[#191816] group-hover:border-[#C7A77B] pb-0.5 transition-colors">
                Discover Our Approach
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Asymmetric Editorial Composition (Primary Oversized + Secondary Inset) */}
        <div className="lg:col-span-7 relative">
          {/* Hairline decorative architectural border */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-[#C7A77B]/30 pointer-events-none hidden sm:block" />

          {/* Primary Oversized Photograph */}
          <div className="relative z-10 w-full sm:w-[86%] overflow-hidden bg-stone-100 shadow-xl border border-[#191816]/10">
            <img
              src="/bride-portrait.jpg"
              alt="Indian bride royal wedding portrait with traditional polki jewelry"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="p-4 bg-[#F8F5EF] border-t border-[#191816]/10 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#191816]/60">
                PLATE NO. 01 — BRIDAL POISE
              </span>
              <span className="text-[10px] font-mono text-[#C7A77B]">
                NATURAL LIGHT STUDY
              </span>
            </div>
          </div>

          {/* Secondary Inset Photograph: Asymmetric Overlap */}
          <div className="relative sm:absolute sm:-bottom-10 sm:-left-6 sm:w-[52%] mt-6 sm:mt-0 z-20 overflow-hidden bg-stone-100 shadow-2xl border-4 border-[#F8F5EF]">
            <img
              src="/henna-detail.jpg"
              alt="Intricate bridal henna design and traditional ring detail"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="p-3 bg-[#191816] text-[#F8F5EF] flex items-center justify-between">
              <span className="text-[9px] uppercase font-mono tracking-widest text-stone-300">
                PLATE NO. 02 — HEIRLOOM MEHENDI
              </span>
              <span className="text-[9px] font-mono text-[#C7A77B]">
                DETAILS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
