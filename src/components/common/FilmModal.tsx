import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Film, Clock, Sliders, ArrowRight, Maximize2 } from 'lucide-react';
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const film = FILM_CONCEPTS.find((f) => f.id === selectedFilmId) || FILM_CONCEPTS[0];

  const handleSelectFilm = (filmId: string) => {
    setSelectedFilmId(filmId);
    setIsPlaying(false);
    setCurrentTime(0);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  // Sync isPlaying state with video element
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // In case of autoplay policy, mute first then play
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true));
          }
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMute = !videoRef.current.muted;
    videoRef.current.muted = newMute;
    setIsMuted(newMute);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleChapterClick = (index: number) => {
    if (videoRef.current && duration > 0) {
      // Seek to proportional fraction of video duration
      const seekTime = (duration / film.chapters.length) * index;
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
      videoRef.current.play().then(() => setIsPlaying(true));
    }
  };

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === ' ' && isOpen) {
        e.preventDefault();
        togglePlay();
      }
    };
    if (isOpen) {
      // oxlint-disable-next-line react/immutability
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      // oxlint-disable-next-line react/immutability
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
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
              <Film className="w-4 h-4 text-[#C7A77B]" />
              <span className="font-serif text-sm tracking-widest text-white uppercase">
                Seenu Photography Cinema Showcase
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-[11px] text-[#C7A77B] tracking-wider uppercase font-mono hidden sm:inline">
                Playable 4K Master Video
              </span>
            </div>

            <button
              onClick={handleClose}
              aria-label="Close Cinema Showcase"
              className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C7A77B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Film Concept Selectors */}
          <div className="flex border-b border-white/10 bg-[#121216] overflow-x-auto scrollbar-none">
            {FILM_CONCEPTS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectFilm(item.id)}
                className={`flex-1 min-w-[200px] px-5 py-3.5 text-left text-xs transition-colors border-r border-white/5 ${
                  selectedFilmId === item.id
                    ? 'bg-[#191920] border-b-2 border-b-[#C7A77B] text-white font-medium'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
                }`}
              >
                <div className="text-[10px] uppercase font-mono text-[#C7A77B] tracking-widest">
                  {item.couple}
                </div>
                <div className="font-serif text-sm text-stone-100 truncate mt-0.5">
                  {item.title}
                </div>
              </button>
            ))}
          </div>

          {/* Genuine Playable HTML5 Cinema Video Player Stage */}
          <div className="relative aspect-[16/9] sm:aspect-[2.39/1] w-full bg-black overflow-hidden flex items-center justify-center group">
            {/* Real HTML5 Video Element */}
            <video
              ref={videoRef}
              key={film.videoUrl}
              src={film.videoUrl}
              poster={film.thumbnail}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onError={() => setVideoError(true)}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Fallback if error */}
            {videoError && (
              <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-sm text-stone-300 font-sans">
                  Video preview file currently loading. Click below to reload.
                </p>
                <button
                  onClick={() => {
                    setVideoError(false);
                    videoRef.current?.load();
                  }}
                  className="mt-3 px-4 py-2 bg-[#C7A77B] text-black text-xs font-mono uppercase"
                >
                  Reload Video
                </button>
              </div>
            )}

            {/* Big Center Play / Pause Indicator (shows when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/40 hover:bg-black/30 transition-colors"
              >
                <button
                  type="button"
                  aria-label="Play wedding film video"
                  className="p-5 md:p-6 rounded-full bg-black/70 hover:bg-[#C7A77B] text-white hover:text-black border border-white/20 hover:border-[#C7A77B] transition-all transform hover:scale-110 shadow-2xl focus:outline-none"
                >
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </button>

                <div className="mt-4 px-3 py-1 bg-black/80 border border-white/10 rounded-xs text-[10px] uppercase tracking-widest font-mono text-stone-200">
                  Click to Play Video
                </div>
              </div>
            )}

            {/* Top Watermark & Specs Overlay */}
            <div className="absolute top-4 left-6 pointer-events-none flex items-center gap-3">
              <span className="font-serif text-xs tracking-widest text-[#C7A77B] uppercase drop-shadow">
                SEENU CINEMA 4K
              </span>
              <span className="text-[10px] font-mono text-stone-300 bg-black/70 px-2 py-0.5 border border-white/10">
                {film.aspectRatio}
              </span>
            </div>

            {/* Bottom Player Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6 flex flex-col gap-2">
              {/* Timeline Scrubber */}
              <div className="w-full flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/25 rounded-lg appearance-none cursor-pointer accent-[#C7A77B] hover:bg-white/40 transition-colors"
                  aria-label="Video timeline scrubber"
                />
              </div>

              {/* Controls & Timecode */}
              <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-1 hover:text-white transition-colors focus:outline-none"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="flex items-center gap-1.5 p-1 hover:text-white transition-colors focus:outline-none"
                    aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-stone-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#C7A77B]" />
                    )}
                    <span className="text-[10px] uppercase hidden sm:inline">
                      {isMuted ? 'Muted' : 'Sound On'}
                    </span>
                  </button>

                  <span className="text-stone-300 text-[11px]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-[10px] text-stone-400 tracking-wider hidden sm:block">
                    24 FPS • 4K DCI • DIRECT MASTER
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className="p-1 hover:text-white transition-colors focus:outline-none"
                    aria-label="Fullscreen video"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Film Details & Storyboard Breakdown */}
          <div className="p-6 md:p-8 space-y-8 bg-[#0F0F12]">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C7A77B]">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C7A77B] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#D9C19D] transition-colors rounded-xs shrink-0 cursor-pointer"
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
                  <Clock className="w-3.5 h-3.5 text-[#C7A77B]" />
                  Narrative Film Chapters (Click to Seek)
                </span>

                <div className="space-y-2">
                  {film.chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleChapterClick(idx)}
                      className="flex items-center justify-between p-2.5 rounded-xs bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors"
                    >
                      <span className="text-xs text-stone-200 font-sans">{ch.title}</span>
                      <span className="text-[10px] font-mono text-[#C7A77B] flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        {ch.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="md:col-span-6 space-y-3">
                <span className="text-[11px] uppercase tracking-widest font-mono text-stone-400 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#C7A77B]" />
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

                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-stone-300 text-[11px] font-sans leading-relaxed mt-2 rounded-xs">
                  <strong className="text-emerald-400 block font-mono uppercase text-[10px] mb-0.5">
                    Active Video Stream:
                  </strong>
                  This player actively streams full 1080p cinematic footage locally bundled with Seenu Photography’s portfolio specs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
