import React from 'react';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

interface HeroProps {
  onExploreWork: () => void;
  onTalkWedding: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onTalkWedding }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#191816]"
    >
      {/* Full-Screen Cinematic Wedding Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-wedding.jpg"
          alt="Royal Indian wedding couple at twilight palace courtyard"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          // @ts-expect-error - fetchpriority attribute is supported by modern browsers
          fetchpriority="high"
        />
        {/* Restrained subtle dark overlay for readability without obscuring the couple */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-[#191816]/45 to-[#191816]/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-28 sm:py-32 text-center flex flex-col items-center">
        {/* Subtle Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 mb-5 px-3 sm:px-4 py-1.5 rounded-full border border-white/20 bg-[#191816]/70 backdrop-blur-md max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A77B] animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.28em] uppercase font-mono text-[#C7A77B] font-medium truncate">
            WEDDING STORIES & CINEMATOGRAPHY
          </span>
        </div>

        {/* Studio Wordmark Subtitle */}
        <div className="font-serif text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-[#F8F5EF]/80 font-light mb-3">
          {SITE_CONFIG.brandName}
        </div>

        {/* Master Headline: Deliberate line breaks as instructed */}
        <h1 className="font-serif text-[26px] xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-[#F8F5EF] font-light tracking-tight leading-tight mb-5 max-w-full">
          Your Story.
          <br />
          <span className="italic font-normal text-[#F8F5EF]">
            Beautifully Remembered.
          </span>
        </h1>

        {/* Supporting Text: Exact wording from Master Prompt */}
        <p className="max-w-2xl text-[#F8F5EF]/85 font-sans font-light text-xs sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 tracking-normal sm:tracking-wide px-2">
          Honest emotions. Timeless frames. Wedding stories that stay with you forever.
        </p>

        {/* Dual CTAs: Primary & Secondary as instructed */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-2">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C7A77B] text-[#191816] font-sans text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-[0.2em] uppercase rounded-xs hover:bg-[#D9C19D] transition-all transform hover:-translate-y-0.5 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C7A77B] cursor-pointer"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onTalkWedding}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#F8F5EF]/40 text-[#F8F5EF] font-sans text-[10px] sm:text-xs font-medium tracking-wider sm:tracking-[0.2em] uppercase rounded-xs hover:bg-white/10 hover:border-white transition-all focus:outline-none focus:ring-1 focus:ring-white cursor-pointer"
          >
            <span>Let's Talk About Your Wedding</span>
          </button>
        </div>

        {/* Contextual WhatsApp Quick Lead Link */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#F8F5EF]/70 px-4">
          <span>Prefer a direct conversation?</span>
          <a
            href={SITE_CONFIG.createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C7A77B] hover:text-white underline inline-flex items-center gap-1 transition-colors"
          >
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>Chat on WhatsApp →</span>
          </a>
        </div>
      </div>

      {/* Small Scroll Indicator */}
      <button
        onClick={onExploreWork}
        aria-label="Scroll to explore our work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#F8F5EF]/60 hover:text-white transition-colors focus:outline-none group cursor-pointer"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#F8F5EF]/70 group-hover:text-[#C7A77B] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#C7A77B] animate-bounce" />
      </button>
    </section>
  );
};
