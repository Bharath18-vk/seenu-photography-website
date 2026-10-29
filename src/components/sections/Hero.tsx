import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreStories: () => void;
  onTalkWedding: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStories, onTalkWedding }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0C]">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=2400&q=90"
          alt="Royal Indian wedding couple at twilight palace courtyard"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Restrained dark vignette overlay for flawless text contrast without muddying colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/50 to-[#0A0A0C]/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32 text-center flex flex-col items-center">
        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase font-mono text-[#C5A880] font-medium">
            WEDDING PHOTOGRAPHY & CINEMATIC FILMS
          </span>
        </div>

        {/* Studio Wordmark Subtitle */}
        <div className="font-serif text-sm md:text-base tracking-[0.35em] uppercase text-stone-300 font-light mb-4">
          SS STUDIO
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[1.08] mb-6">
          Your story.
          <br />
          <span className="italic font-normal text-[#FAF8F5]">Beautifully, forever.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-stone-300 font-sans font-light text-base md:text-lg leading-relaxed mb-10 tracking-wide">
          Honest emotions. Timeless frames. Stories that stay with you long after the celebration ends.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreStories}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A880] text-stone-950 font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#D4AF37] transition-all transform hover:-translate-y-0.5 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>EXPLORE OUR STORIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onTalkWedding}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-sans text-xs font-medium tracking-[0.2em] uppercase rounded-xs hover:bg-white/10 hover:border-white transition-all focus:outline-none focus:ring-1 focus:ring-white"
          >
            LET'S TALK ABOUT YOUR WEDDING
          </button>
        </div>

        {/* Curated Trust Detail (Non-fabricated) */}
        <div className="mt-14 flex items-center gap-6 text-[10px] uppercase font-mono tracking-widest text-stone-400">
          <span>INDIA</span>
          <span className="text-[#C5A880]">•</span>
          <span>DESTINATIONS WORLDWIDE</span>
          <span className="text-[#C5A880]">•</span>
          <span>EST. PORTFOLIO</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={onExploreStories}
        aria-label="Scroll to portfolio stories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone-400 hover:text-white transition-colors focus:outline-none group"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-stone-400 group-hover:text-[#C5A880] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#C5A880] animate-bounce" />
      </button>
    </section>
  );
};
