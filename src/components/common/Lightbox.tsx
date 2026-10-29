import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PhotoItem } from '../../types';
import { SITE_CONFIG } from '../../config/site';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
  storyTitle?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate,
  storyTitle,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      }
    },
    [isOpen, currentIndex, photos.length, onClose, onNavigate]
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

  if (!isOpen || !photos.length) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#191816]/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 text-white/90"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg tracking-widest text-[#C7A77B] uppercase">
            {SITE_CONFIG.brandName}
          </span>
          {storyTitle && (
            <>
              <span className="text-white/30">•</span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-sans">
                {storyTitle}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs tracking-widest font-mono text-stone-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            aria-label="Close Lightbox (Esc)"
            className="p-2 text-white/70 hover:text-white rounded-full transition-colors hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C7A77B] cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative max-h-[85vh] max-w-[92vw] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.url}
          alt={currentPhoto.alt}
          className="max-h-[78vh] max-w-[90vw] object-contain rounded-xs shadow-2xl transition-all duration-300"
        />

        {/* Caption & Metadata */}
        {currentPhoto.caption && (
          <div className="mt-4 text-center max-w-xl px-4">
            <p className="text-xs md:text-sm text-stone-300 font-sans font-light tracking-wide">
              {currentPhoto.caption}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + photos.length) % photos.length);
            }}
            aria-label="Previous image (Left Arrow)"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-all bg-black/50 hover:bg-black/90 rounded-full border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C7A77B] cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % photos.length);
            }}
            aria-label="Next image (Right Arrow)"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-all bg-black/50 hover:bg-black/90 rounded-full border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C7A77B] cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-stone-400 font-mono hidden md:block">
        Use ← and → keys to navigate • Esc to exit
      </div>
    </div>
  );
};
