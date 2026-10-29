import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialIntroProps {
  onDiscoverApproach: () => void;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ onDiscoverApproach }) => {
  return (
    <section className="relative bg-[#FAF8F5] text-stone-900 py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Editorial Watermark / Header Line */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-stone-200/80 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.25em] text-stone-500">
          EDITORIAL ESSAY — 01
        </span>
        <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.25em] text-[#8E7754]">
          SS STUDIO WEDDING PHILOSOPHY
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography & Intentional Whitespace */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-[#8E7754]">
              HONEST ARTISTRY
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-light leading-[1.12] tracking-tight">
              Not just how it looked.{' '}
              <span className="italic font-normal block mt-1 text-stone-800">
                How it felt.
              </span>
            </h2>
          </div>

          <p className="text-stone-600 font-sans font-light text-base md:text-lg leading-relaxed">
            Every wedding is made of fleeting glances, joyful chaos, quiet promises and moments that cannot be recreated. We capture the feeling behind the photographs, preserving your story with honesty and intention.
          </p>

          <p className="text-stone-500 font-sans font-light text-sm md:text-base leading-relaxed">
            We avoid formulaic choreography and heavy direction. Instead, we cultivate an atmosphere of relaxed trust, allowing the genuine intimacy between two people, their families, and their traditions to breathe naturally before the lens.
          </p>

          <div className="pt-2">
            <button
              onClick={onDiscoverApproach}
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-stone-900 hover:text-[#8E7754] transition-colors focus:outline-none"
            >
              <span className="border-b border-stone-900 group-hover:border-[#8E7754] pb-0.5 transition-colors">
                DISCOVER OUR APPROACH
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Asymmetric Editorial Composition (Oversized + Smaller Inset) */}
        <div className="lg:col-span-7 relative">
          {/* Decorative hairline architectural lines */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-stone-200 pointer-events-none hidden sm:block" />

          {/* Primary Oversized Photograph */}
          <div className="relative z-10 w-full sm:w-[86%] overflow-hidden bg-stone-100 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85"
              alt="Indian bride royal wedding portrait with traditional polki jewelry"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="p-4 bg-[#FAF8F5] border-t border-stone-200 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">
                PLATE NO. 01 — BRIDAL POISE
              </span>
              <span className="text-[10px] font-mono text-[#8E7754]">
                NATURAL LIGHT STUDY
              </span>
            </div>
          </div>

          {/* Secondary Inset Photograph: Asymmetric Overlap */}
          <div className="relative sm:absolute sm:-bottom-10 sm:-left-6 sm:w-[50%] mt-6 sm:mt-0 z-20 overflow-hidden bg-stone-100 shadow-2xl border-4 border-[#FAF8F5]">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85"
              alt="Intricate bridal henna design and traditional ring detail"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="p-3 bg-[#131316] text-white flex items-center justify-between">
              <span className="text-[9px] uppercase font-mono tracking-widest text-stone-300">
                PLATE NO. 02 — HEIRLOOM MEHENDI
              </span>
              <span className="text-[9px] font-mono text-[#C5A880]">
                DETAILS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
