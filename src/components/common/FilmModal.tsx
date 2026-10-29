import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Film, Clock, Sliders, ArrowRight } from 'lucide-react';
import { FILM_CONCEPTS } from '../../data/portfolio';

interface FilmModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilmId?: string;
  onInquire: (service: string) => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({
  isOpen,
  onClose,
  initialFilmId = 'film-1',
  onInquire,
}) => {
  const [selectedFilmId, setSelectedFilmId] = useState(initialFilmId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const film = FILM_CONCEPTS.find((f) => f.id === selectedFilmId) || FILM_CONCEPTS[0];

  // Duration in seconds (e.g. "04:12" -> 252)
  const totalDurationSec = 252;

  // Handle Play/Pause simulation
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= totalDurationSec) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen, totalDurationSec]);

  // Audio tone generation for calm acoustic ambient mood demo
  const toggleAmbientAudio = () => {
    try {
      if (!isAudioActive) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm, low ambient drone (C3 ~ 130.81Hz)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(130.81, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        audioContextRef.current = ctx;
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setIsAudioActive(true);
      } else {
        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.5);
          setTimeout(() => {
            audioContextRef.current?.close();
            audioContextRef.current = null;
            setIsAudioActive(false);
          }, 500);
        } else {
          setIsAudioActive(false);
        }
      }
    } catch {
      setIsAudioActive(false);
    }
  };

  const handleClose = useCallback(() => {
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch {
        // silent
      }
      audioContextRef.current = null;
    }
    setIsAudioActive(false);
    setIsPlaying(false);
    setCurrentTimeSec(0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="film-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md transition-opacity"
      onClick={handleClose}
    >
      <div className="min-h-screen px-4 md:px-8 py-8 flex items-center justify-center">
        <div
          className="relative w-full max-w-5xl bg-[#0F0F12] border border-white/10 text-stone-200 overflow-hidden shadow-2xl rounded-sm my-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0C]">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#C5A880]" />
              <span className="font-serif text-sm tracking-widest text-white uppercase">
                SS Studio Cinema Showcase
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-[11px] text-[#C5A880] tracking-wider uppercase font-mono hidden sm:inline">
                Curated Reel Walkthrough
              </span>
            </div>

            <button
              onClick={handleClose}
              aria-label="Close Cinema Showcase"
              className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Film Selectors */}
          <div className="flex border-b border-white/10 bg-[#121216] overflow-x-auto scrollbar-none">
            {FILM_CONCEPTS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedFilmId(item.id);
                  setCurrentTimeSec(0);
                  setIsPlaying(false);
                }}
                className={`flex-1 min-w-[200px] px-5 py-3.5 text-left text-xs transition-colors border-r border-white/5 ${
                  selectedFilmId === item.id
                    ? 'bg-[#191920] border-b-2 border-b-[#C5A880] text-white font-medium'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
                }`}
              >
                <div className="text-[10px] uppercase font-mono text-[#C5A880] tracking-widest">
                  {item.couple}
                </div>
                <div className="font-serif text-sm text-stone-100 truncate mt-0.5">
                  {item.title}
                </div>
              </button>
            ))}
          </div>

          {/* Cinema Player Stage */}
          <div className="relative aspect-[21/9] sm:aspect-[2.39/1] w-full bg-black overflow-hidden flex items-center justify-center">
            {/* Cinematic Background Frame */}
            <img
              src={film.thumbnail}
              alt={film.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? 'scale-105 filter brightness-95' : 'brightness-75'
              }`}
            />

            {/* Letterbox Bars & Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Center Play / Pause Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="pointer-events-auto p-4 md:p-6 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-black border border-white/20 hover:border-[#C5A880] transition-all transform hover:scale-105 shadow-2xl focus:outline-none"
                aria-label={isPlaying ? 'Pause film' : 'Play film'}
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </button>

              <div className="mt-4 px-3 py-1 bg-black/70 border border-white/10 rounded-xs text-[10px] uppercase tracking-widest font-mono text-stone-300">
                {isPlaying ? 'Playing Cinema Reel Preview' : 'Click to Play Reel Preview'}
              </div>
            </div>

            {/* On-Screen Watermark & Aspect Ratio Badge */}
            <div className="absolute top-4 left-6 pointer-events-none flex items-center gap-3">
              <span className="font-serif text-xs tracking-widest text-[#C5A880] uppercase drop-shadow">
                SS CINEMA 4K
              </span>
              <span className="text-[10px] font-mono text-stone-400 bg-black/60 px-2 py-0.5 border border-white/10">
                {film.aspectRatio}
              </span>
            </div>

            {/* Player Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 to-transparent p-4 sm:p-6 flex flex-col gap-2">
              {/* Timeline Scrubber */}
              <div className="w-full flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={totalDurationSec}
                  value={currentTimeSec}
                  onChange={(e) => setCurrentTimeSec(Number(e.target.value))}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
                  aria-label="Video timeline scrubber"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={toggleAmbientAudio}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                    title="Toggle ambient score demo"
                  >
                    {isAudioActive ? (
                      <Volume2 className="w-4 h-4 text-[#C5A880]" />
                    ) : (
                      <VolumeX className="w-4 h-4" />
                    )}
                    <span className="text-[10px] uppercase hidden sm:inline">
                      {isAudioActive ? 'Ambient Sound: Active' : 'Enable Ambient Score'}
                    </span>
                  </button>

                  <span className="text-stone-300">
                    {formatTime(currentTimeSec)} / {film.duration}
                  </span>
                </div>

                <div className="text-[10px] text-stone-400 tracking-wider hidden sm:block">
                  24 FPS • 4K DCI • MASTER REC.709
                </div>
              </div>
            </div>
          </div>

          {/* Film Details & Storyboard Breakdown */}
          <div className="p-6 md:p-8 space-y-8 bg-[#0F0F12]">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880]">
                  {film.category} • {film.location}
                </span>
                <h3
                  id="film-modal-title"
                  className="font-serif text-2xl md:text-3xl text-white mt-1"
                >
                  {film.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-300 font-sans font-light mt-1 max-w-2xl">
                  {film.logline}
                </p>
              </div>

              <button
                onClick={() => {
                  handleClose();
                  onInquire('Wedding Cinematography');
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C5A880] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors rounded-xs shrink-0"
              >
                Inquire For Cinema Coverage
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Chapters & Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Chapters */}
              <div className="md:col-span-6 space-y-3">
                <span className="text-[11px] uppercase tracking-widest font-mono text-stone-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  Narrative Film Chapters
                </span>

                <div className="space-y-2">
                  {film.chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        // calculate chapter time
                        const parts = ch.time.split(':');
                        const s = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
                        setCurrentTimeSec(s);
                        setIsPlaying(true);
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xs bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors"
                    >
                      <span className="text-xs text-stone-200 font-sans">{ch.title}</span>
                      <span className="text-[10px] font-mono text-[#C5A880]">{ch.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="md:col-span-6 space-y-3">
                <span className="text-[11px] uppercase tracking-widest font-mono text-stone-400 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#C5A880]" />
                  Cinematography Production Specs
                </span>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xs">
                    <div className="text-[10px] text-stone-400 uppercase font-mono">Mastering</div>
                    <div className="text-stone-200 font-medium mt-0.5">{film.technicalSpecs.resolution}</div>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xs">
                    <div className="text-[10px] text-stone-400 uppercase font-mono">Capture System</div>
                    <div className="text-stone-200 font-medium mt-0.5">{film.technicalSpecs.camera}</div>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xs">
                    <div className="text-[10px] text-stone-400 uppercase font-mono">Framerate</div>
                    <div className="text-stone-200 font-medium mt-0.5">{film.technicalSpecs.framerate}</div>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xs">
                    <div className="text-[10px] text-stone-400 uppercase font-mono">Audio Engineering</div>
                    <div className="text-stone-200 font-medium mt-0.5">{film.technicalSpecs.audio}</div>
                  </div>
                </div>

                <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-stone-300 text-[11px] font-sans leading-relaxed mt-2 rounded-xs">
                  <strong className="text-[#C5A880] block font-mono uppercase text-[10px] mb-0.5">
                    Creative Note for Client Demo:
                  </strong>
                  This interactive cinema console demonstrates the film portfolio presentation framework. SS STUDIO's authentic high-definition video master files can be linked here directly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
