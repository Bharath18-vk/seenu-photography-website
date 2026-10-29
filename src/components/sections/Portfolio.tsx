import React, { useState } from 'react';
import { Filter, Eye, Maximize2 } from 'lucide-react';
import { PORTFOLIO_GALLERY_ITEMS } from '../../data/portfolio';
import type { PhotoItem } from '../../types';

interface PortfolioProps {
  onOpenLightbox: (photos: PhotoItem[], index: number, title: string) => void;
  onOpenInquiry: (category?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onOpenLightbox,
  onOpenInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Categories requested in Section 6
  const categories = [
    'All',
    'Wedding Stories',
    'Candid Moments',
    'Pre-Wedding',
    'Engagements',
    'Wedding Films',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_GALLERY_ITEMS
      : PORTFOLIO_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handlePhotoClick = (index: number) => {
    // Map items to PhotoItem format for Lightbox
    const photos: PhotoItem[] = filteredItems.map((item) => ({
      id: item.id,
      url: item.url,
      alt: item.alt,
      caption: `${item.title} — ${item.caption} (${item.location})`,
      orientation: item.orientation,
    }));
    onOpenLightbox(photos, index, activeCategory === 'All' ? 'Curated Portfolio' : activeCategory);
  };

  return (
    <section
      id="our-work"
      className="relative bg-[#F8F5EF] text-[#191816] py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-[#191816]/10"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header with Magazine Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#191816]/15 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C7A77B] mb-3">
              <span>CURATED ARCHIVE</span>
              <span>•</span>
              <span>PORTFOLIO</span>
            </div>
            {/* Required Section Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#191816] font-light tracking-tight">
              Stories We’ve Had the Joy of Capturing
            </h2>
          </div>

          {/* Required Supporting Text */}
          <p className="max-w-md text-[#191816]/70 font-sans font-light text-xs md:text-sm leading-relaxed">
            Every celebration is different. Every story deserves its own frame.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#191816]/50 mr-2 flex items-center gap-1 shrink-0">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-all rounded-full whitespace-nowrap cursor-pointer focus:outline-none ${
                activeCategory === cat
                  ? 'bg-[#191816] text-[#F8F5EF] shadow-md'
                  : 'bg-[#E9E1D6]/70 text-[#191816]/80 hover:bg-[#E9E1D6] hover:text-[#191816]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Refined Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handlePhotoClick(index)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Tasteful Hover Transitions */}
              <div
                className={`relative overflow-hidden bg-stone-200 shadow-md ${
                  item.aspectRatio || 'aspect-[4/5]'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-[#191816]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category label revealed on hover / badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest bg-[#191816]/85 text-[#F8F5EF] backdrop-blur-sm border border-[#C7A77B]/30 rounded-xs">
                    {item.category}
                  </span>
                </div>

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-3.5 bg-[#C7A77B] text-[#191816] rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom caption bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono tracking-wider text-stone-300">
                    {item.location}
                  </span>
                  <span className="text-[10px] font-mono text-[#C7A77B] flex items-center gap-1">
                    <Eye className="w-3 h-3" /> View
                  </span>
                </div>
              </div>

              {/* Editorial Caption Details Below */}
              <div className="mt-3.5 space-y-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-lg sm:text-xl text-[#191816] group-hover:text-[#C7A77B] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#191816]/50">
                    Plate 0{index + 1}
                  </span>
                </div>
                <p className="text-[#191816]/65 font-sans font-light text-xs line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclosure & Custom Commission Banner */}
        <div className="pt-10 border-t border-[#191816]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-stone-500 font-sans font-light">
            * All featured plates are illustrative portfolio placeholders for the Seenu Photography client demo. High-resolution client photographs will be seamlessly loaded prior to final public release.
          </p>
          <button
            onClick={() => onOpenInquiry('Wedding Photography & Cinematography')}
            className="text-xs font-mono uppercase tracking-widest text-[#C7A77B] hover:text-[#191816] underline focus:outline-none cursor-pointer shrink-0"
          >
            Commission bespoke coverage for your wedding →
          </button>
        </div>
      </div>
    </section>
  );
};
