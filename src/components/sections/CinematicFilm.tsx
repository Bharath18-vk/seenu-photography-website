import React, { useRef, useState } from 'react';
import { Play, Pause, Film, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { FILM_CONCEPTS } from '../../data/portfolio';

interface CinematicFilmProps {
  onOpenFilmShowcase: (filmId?: string) => void;
}

export const CinematicFilm: React.FC<CinematicFilmProps> = ({ onOpenFilmShowcase }) => {
  const featuredFilm = FILM_CONCEPTS[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleInlinePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="films" className="relative bg-[#0A0A0C] text-stone-100 py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-b border-white/10">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=2200&q=85"
          alt="Atmospheric evening sparklers and cinematic lighting"
          className="w-full h-full object-cover opacity-20 filter brightness-75 scale-105"
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
                onClick={() => onOpenFilmShowcase(featuredFilm.id)}
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
              onClick={() => onOpenFilmShowcase(featuredFilm.id)}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-white/15 bg-black/80 shadow-2xl transition-all hover:border-[#C5A880]/50"
            >
              {/* Aspect Ratio 2.39:1 Anamorphic Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[2.39/1] w-full overflow-hidden bg-black">
                {/* Real Video Element in Preview */}
                <video
                  ref={videoRef}
                  src={featuredFilm.videoUrl}
                  poster={featuredFilm.thumbnail}
                  muted={isMuted}
                  loop
                  playsInline
                  autoPlay
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Big Center Play / Pause Button for Quick In-Place Action */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleToggleInlinePlay}
                    className="p-4 sm:p-5 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-black border border-white/30 hover:border-[#C5A880] transition-all transform hover:scale-110 shadow-2xl focus:outline-none"
                    aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    )}
                  </button>
                </div>

                {/* Film Spec Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-black/80 text-[#C5A880] border border-white/10">
                    4K CINEMA
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-black/80 text-stone-300 border border-white/10">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Quick Audio Mute Toggle on Video */}
                <button
                  onClick={handleToggleMute}
                  className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-stone-300 hover:text-white rounded-full border border-white/20 transition-colors"
                  aria-label={isMuted ? 'Unmute preview sound' : 'Mute preview sound'}
                  title={isMuted ? 'Unmute sound' : 'Mute sound'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#C5A880]" />}
                </button>

                {/* Bottom title info */}
                <div className="absolute bottom-4 inset-x-4 flex items-end justify-between pointer-events-none">
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

              {/* Lower Bar: Opens Cinema Console */}
              <div className="px-5 py-3 bg-[#121216] border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-sans font-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Playing Active 4K Stream • Click for Full Console
                </span>
                <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-widest flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  Full Console →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
