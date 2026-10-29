import React, { useState } from 'react';
import { ArrowUpRight, Filter, Eye } from 'lucide-react';
import type { Story } from '../../types';
import { SIGNATURE_STORIES } from '../../data/portfolio';

interface SignatureStoriesProps {
  onSelectStory: (story: Story) => void;
  onOpenInquiry: (category?: string) => void;
}

export const SignatureStories: React.FC<SignatureStoriesProps> = ({
  onSelectStory,
  onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Curations' },
    { id: 'Royal Heritage Wedding', label: 'Royal Heritage' },
    { id: 'Candid & Sacred Moments', label: 'Intimate Ceremonies' },
    { id: 'Fine Art Editorial', label: 'Editorial Portraits' },
    { id: 'Cinematic Reception & Sangeet', label: 'After Dark' },
  ];

  const filteredStories =
    activeFilter === 'all'
      ? SIGNATURE_STORIES
      : SIGNATURE_STORIES.filter((s) => s.category === activeFilter);

  return (
    <section id="stories" className="bg-[#FAF8F5] text-stone-900 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with Magazine Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-300 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#8E7754] mb-3">
              <span>PORTFOLIO COLLECTION</span>
              <span>•</span>
              <span>DEMO SHOWCASE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
              Signature Wedding Stories
            </h2>
          </div>

          <p className="max-w-md text-stone-600 font-sans font-light text-xs md:text-sm leading-relaxed">
            Curated narratives from across the country. Each story represents a distinct aesthetic mood, treated like a private publication of family heirlooms.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-all rounded-full whitespace-nowrap focus:outline-none ${
                activeFilter === cat.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-200/60 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Magazine Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredStories.map((story, index) => {
            // Give varied column spans and heights to avoid identical cards
            // Story 0: 7 cols (Oversized), Story 1: 5 cols (Taller portrait), Story 2: 5 cols, Story 3: 7 cols
            const colSpan =
              index % 4 === 0
                ? 'md:col-span-7'
                : index % 4 === 1
                ? 'md:col-span-5'
                : index % 4 === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            return (
              <div
                key={story.id}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
                onClick={() => onSelectStory(story)}
              >
                {/* Image Container with Hover reveal */}
                <div className="relative overflow-hidden bg-stone-200 shadow-lg aspect-[4/5] sm:aspect-[16/11]">
                  <img
                    src={story.heroImage}
                    alt={story.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Subtle Grain Overlay on Hover */}
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500" />

                  {/* Editorial Tag badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest bg-stone-900/80 text-white backdrop-blur-sm border border-white/10">
                      0{index + 1} • {story.category}
                    </span>
                  </div>

                  {/* Explore Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-5 py-2.5 bg-[#C5A880] text-black text-xs font-semibold tracking-widest uppercase flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore Story</span>
                    </div>
                  </div>

                  {/* Bottom caption bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between text-white">
                    <span className="text-[10px] font-mono tracking-wider text-stone-300">
                      {story.location}
                    </span>
                    <span className="text-[10px] font-mono text-[#C5A880]">
                      {story.gallery.length} Curated Plates
                    </span>
                  </div>
                </div>

                {/* Editorial Typography Details Below Image */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 group-hover:text-[#8E7754] transition-colors tracking-tight">
                      {story.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-stone-600 font-sans font-light text-xs md:text-sm line-clamp-2 leading-relaxed">
                    {story.subtitle}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-[10px] uppercase font-mono text-stone-500">
                    <span>{story.dateTag}</span>
                    <span>•</span>
                    <span className="underline group-hover:text-stone-900">
                      View Full Story Gallery →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-stone-500 font-sans font-light">
            * All featured stories and locations are illustrative editorial concepts for the SS STUDIO client proposal.
          </p>
          <button
            onClick={() => onOpenInquiry('Custom Wedding Collection')}
            className="text-xs font-mono uppercase tracking-widest text-[#8E7754] hover:text-stone-900 underline focus:outline-none"
          >
            Commission a bespoke story for your celebration →
          </button>
        </div>
      </div>
    </section>
  );
};
