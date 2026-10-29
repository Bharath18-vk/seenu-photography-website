import React, { useEffect, useCallback } from 'react';
import { X, Calendar, MapPin, ArrowRight, Expand } from 'lucide-react';
import type { Story, PhotoItem } from '../../types';

interface StoryModalProps {
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (photos: PhotoItem[], index: number, title: string) => void;
  onInquire: (celebrationType: string) => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  story,
  isOpen,
  onClose,
  onOpenLightbox,
  onInquire,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
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
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !story) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      className="fixed inset-0 z-40 overflow-y-auto bg-black/90 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 md:px-8 py-12 flex items-center justify-center">
        <div
          className="relative w-full max-w-5xl bg-[#191816] border border-[#C7A77B]/30 text-stone-200 overflow-hidden shadow-2xl rounded-sm my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close story view (Esc)"
            className="absolute top-5 right-5 z-20 p-2 text-stone-400 hover:text-white bg-black/60 hover:bg-black/80 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C7A77B] cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Hero Banner */}
          <div className="relative h-[48vh] md:h-[60vh] w-full overflow-hidden">
            <img
              src={story.heroImage}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-[#191816]/50 to-transparent" />

            {/* Banner Content */}
            <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12">
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#C7A77B] mb-3">
                <span className="px-2.5 py-0.5 border border-[#C7A77B]/30 bg-[#C7A77B]/10">
                  {story.category}
                </span>
                <span className="flex items-center gap-1 text-stone-300">
                  <MapPin className="w-3.5 h-3.5 text-[#C7A77B]" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1 text-stone-300">
                  <Calendar className="w-3.5 h-3.5 text-[#C7A77B]" />
                  {story.dateTag}
                </span>
              </div>

              <h2
                id="story-modal-title"
                className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide leading-tight"
              >
                {story.title}
              </h2>
              <p className="mt-2 text-sm md:text-base text-stone-300 font-sans font-light max-w-2xl">
                {story.subtitle}
              </p>
            </div>
          </div>

          {/* Editorial Content Body */}
          <div className="px-6 md:px-12 py-10 space-y-12">
            {/* Excerpt & Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 pb-10">
              <div className="md:col-span-4">
                <span className="text-[11px] uppercase tracking-widest text-[#C7A77B] font-mono block mb-2 font-semibold">
                  The Editorial Vision
                </span>
                <p className="font-serif italic text-lg md:text-xl text-[#F8F5EF] leading-relaxed">
                  "{story.excerpt}"
                </p>

                {/* Color Palette Swatches */}
                {story.palette && story.palette.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono block mb-2">
                      Story Palette
                    </span>
                    <div className="flex items-center gap-2">
                      {story.palette.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border border-white/20 shadow-inner"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-8 space-y-4">
                <p className="text-stone-300 font-sans font-light text-sm md:text-base leading-relaxed">
                  {story.narrative}
                </p>

                {/* Highlights List */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-widest text-[#C7A77B] font-mono block mb-3 font-semibold">
                    Curatorial Highlights
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-stone-300 font-light">
                    {story.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#C7A77B] mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-white tracking-wide">
                    Curated Photographic Frames
                  </h3>
                  <p className="text-xs text-stone-400 font-sans font-light">
                    Click any frame to view in full-screen lightbox ({story.gallery.length} photos)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {story.gallery.map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => onOpenLightbox(story.gallery, index, story.title)}
                    className="group relative cursor-pointer overflow-hidden bg-black/40 border border-white/10 aspect-[4/5]"
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-xs text-stone-200 line-clamp-1 font-sans">
                          {photo.caption || photo.alt}
                        </span>
                        <Expand className="w-4 h-4 text-[#C7A77B] shrink-0 ml-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire Footer */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-6 rounded-sm">
              <div>
                <h4 className="font-serif text-xl text-white">
                  Planning a celebration in this vision?
                </h4>
                <p className="text-xs text-stone-400 font-sans font-light mt-1">
                  We limit our commissions each season to maintain uncompromised creative focus.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onInquire(story.category);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C7A77B] text-[#191816] text-xs font-semibold uppercase tracking-widest hover:bg-[#D9C19D] transition-colors rounded-xs focus:outline-none focus:ring-2 focus:ring-[#C7A77B] cursor-pointer"
              >
                Inquire For Your Wedding
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
