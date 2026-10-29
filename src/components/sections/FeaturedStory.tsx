import React from 'react';
import { Calendar, MapPin, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import type { Story, PhotoItem } from '../../types';
import { SIGNATURE_STORIES } from '../../data/portfolio';

interface FeaturedStoryProps {
  onSelectStory: (story: Story) => void;
  onOpenLightbox: (photos: PhotoItem[], index: number, title: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  onSelectStory,
  onOpenLightbox,
}) => {
  // Use the primary royal heritage celebration as the featured album story
  const featured = SIGNATURE_STORIES[0];

  // Editable demo metadata clearly marked as requested in Section 7
  const coupleNames = 'Ananya & Dev [Demo Placeholder]';
  const weddingLocation = 'The Leela Palace, Udaipur [Demo Placeholder]';
  const weddingDate = 'Winter Celebration [Demo Placeholder]';

  const albumFrames: PhotoItem[] = [
    {
      id: 'album-main',
      url: '/hero-wedding.jpg',
      alt: 'Royal wedding couple portrait in palace courtyard during golden hour',
      caption: 'The twilight varmala ceremony reflected on ancient palace waters.',
      orientation: 'landscape',
    },
    {
      id: 'album-detail-1',
      url: '/bride-portrait.jpg',
      alt: 'Intimate bridal portrait with polki jewelry',
      caption: 'Heirloom polki jewelry and handloom zari embroidery.',
      orientation: 'portrait',
    },
    {
      id: 'album-detail-2',
      url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85',
      alt: 'Sacred wedding hands and sacred pheras',
      caption: 'The sacred saat phere around the holy ceremonial fire.',
      orientation: 'square',
    },
    {
      id: 'album-detail-3',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      alt: 'Couple laughing during varmala ceremony',
      caption: 'Unscripted laughter as the floral garland exchange commences.',
      orientation: 'portrait',
    },
  ];

  return (
    <section
      id="stories"
      className="relative bg-[#191816] text-[#F8F5EF] py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-b border-[#C7A77B]/20"
    >
      {/* Background Ambience Texture */}
      <div className="absolute inset-0 z-0 opacity-15 bg-grain-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.28em] text-[#C7A77B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED WEDDING STORY</span>
              <span className="text-white/30">•</span>
              <span className="text-stone-400">HEIRLOOM ALBUM MONOGRAPH</span>
            </div>

            {/* Required Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F8F5EF] font-light tracking-tight leading-[1.12]">
              A day filled with moments{' '}
              <span className="italic block mt-1 text-[#C7A77B]">
                that became forever.
              </span>
            </h2>
          </div>

          {/* Editable Metadata as instructed */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-xs space-y-2 text-xs font-mono">
            <div className="text-[10px] uppercase tracking-widest text-[#C7A77B] font-semibold flex items-center gap-1.5 pb-1 border-b border-white/10">
              <BookOpen className="w-3 h-3" />
              <span>STORY METADATA (EDITABLE PLACEHOLDERS)</span>
            </div>
            <div className="flex items-center gap-2 text-[#F8F5EF]">
              <span className="text-stone-400">COUPLE:</span>
              <span className="font-serif text-sm text-[#F8F5EF]">{coupleNames}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C7A77B] shrink-0" />
              <span>{weddingLocation}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Calendar className="w-3.5 h-3.5 text-[#C7A77B] shrink-0" />
              <span>{weddingDate}</span>
            </div>
          </div>
        </div>

        {/* Album Presentation Spread: 1 Large Landscape followed by 3 complementary detail frames */}
        <div className="space-y-8">
          {/* Main Large Landscape Image */}
          <div
            onClick={() => onOpenLightbox(albumFrames, 0, featured.title)}
            className="group relative cursor-pointer overflow-hidden rounded-xs border border-white/15 bg-black/40 shadow-2xl transition-all hover:border-[#C7A77B]/60 aspect-[16/10] sm:aspect-[21/10]"
          >
            <img
              src={albumFrames[0].url}
              alt={albumFrames[0].alt}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#C7A77B] block mb-1">
                  MAIN HEIRLOOM SPREAD • PLATE NO. 01
                </span>
                <h3 className="font-serif text-xl sm:text-3xl text-white">
                  The Sunset Twilight Gathering
                </h3>
              </div>

              <span className="text-xs font-mono text-stone-300 uppercase tracking-widest bg-black/60 px-3 py-1.5 border border-white/10 rounded-xs">
                Click to Enlarge ↗
              </span>
            </div>
          </div>

          {/* Trio of Complementary Heirloom Detail Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {albumFrames.slice(1).map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(albumFrames, idx + 1, featured.title)}
                className="group relative cursor-pointer overflow-hidden rounded-xs border border-white/15 bg-black/40 shadow-xl transition-all hover:border-[#C7A77B]/60 aspect-[4/5]"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-xs">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#C7A77B] block mb-0.5">
                    DETAIL PLATE 0{idx + 2}
                  </span>
                  <p className="font-serif text-sm text-stone-200 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interaction CTA Bar: Explore The Story */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 p-8 rounded-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-2xl text-white tracking-wide">
              {featured.title} — Full Curated Monograph
            </h4>
            <p className="text-xs text-stone-400 font-sans font-light">
              Experience the 28-frame story sequence, complete narrative essay, and heirloom color palette.
            </p>
          </div>

          <button
            onClick={() => onSelectStory(featured)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C7A77B] text-[#191816] font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#D9C19D] transition-all transform hover:-translate-y-0.5 shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A77B]"
          >
            <span>Explore the Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
