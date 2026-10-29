import React from 'react';
import { Play, Film } from 'lucide-react';
import { FILM_CONCEPTS } from '../../data/portfolio';

interface CinematicFilmProps {
  onOpenFilmShowcase: (filmId?: string) => void;
}

export const CinematicFilm: React.FC<CinematicFilmProps> = ({ onOpenFilmShowcase }) => {
  const featuredFilm = FILM_CONCEPTS[0];

  return (
    <section id="films" className="relative bg-[#0A0A0C] text-stone-100 py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-b border-white/10">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=2200&q=85"
          alt="Atmospheric evening sparklers and cinematic lighting"
          className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/90 to-[#0A0A0C]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-8">
          <Film className="w-4 h-4" />
          <span>CINEMATIC DOCUMENTARY FILMS</span>
          <span className="text-white/20">•</span>
          <span className="text-stone-400">4K DCI MASTERING</span>
        </div>

        {/* Two Column Layout: Left Headline & Philosophy, Right Interactive Player Reel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08]">
              Some moments <br />
              <span className="italic font-normal text-[#C5A880]">deserve to move.</span>
            </h2>

            <p className="text-stone-300 font-sans font-light text-base md:text-lg leading-relaxed">
              From the anticipation before the ceremony to the last dance of the evening, relive your wedding through cinematic storytelling.
            </p>

            <p className="text-stone-400 font-sans font-light text-sm leading-relaxed">
              We capture soundscapes, unhurried cadences, and raw emotion with cinema-grade anamorphic optics, 24 frames per second cadence, and bespoke acoustic scoring created specifically for your narrative.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onOpenFilmShowcase('film-1')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A880] text-black text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#D4AF37] transition-all transform hover:-translate-y-0.5 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>EXPERIENCE OUR FILMS →</span>
              </button>

              <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">
                Interactive Showcase Console
              </span>
            </div>
          </div>

          {/* Right Cinema Preview Frame Card */}
          <div className="lg:col-span-6">
            <div
              onClick={() => onOpenFilmShowcase('film-1')}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-white/15 bg-black/80 shadow-2xl transition-all hover:border-[#C5A880]/50"
            >
              {/* Aspect Ratio 2.39:1 Anamorphic Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[2.39/1] w-full overflow-hidden">
                <img
                  src={featuredFilm.thumbnail}
                  alt={featuredFilm.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-85 group-hover:brightness-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

                {/* Big Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 group-hover:bg-[#C5A880] text-white group-hover:text-black border border-white/30 group-hover:border-[#C5A880] transition-all flex items-center justify-center transform group-hover:scale-110 shadow-2xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-current" />
                  </div>
                </div>

                {/* Film Spec Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-black/80 text-[#C5A880] border border-white/10">
                    4K CINEMA
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-black/80 text-stone-300 border border-white/10">
                    {featuredFilm.duration}
                  </span>
                </div>

                {/* Bottom title info */}
                <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A880] block">
                      FEATURED REEL
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-white">
                      {featuredFilm.title}
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-stone-300 font-mono hidden sm:block">
                    {featuredFilm.location}
                  </span>
                </div>
              </div>

              {/* Lower Bar: Clearly Labeled Demo Interaction */}
              <div className="px-5 py-3 bg-[#121216] border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-sans font-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Click to open full cinema console & specs
                </span>
                <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-widest">
                  Preview Console →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
