import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import { SOCIAL_GALLERY_PHOTOS } from '../../data/social';
import { SITE_CONFIG } from '../../config/site';

export const SocialGallery: React.FC = () => {
  return (
    <section className="bg-[#191816] text-[#F8F5EF] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#C7A77B]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C7A77B]">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>THE SOCIAL JOURNAL</span>
            </div>
            {/* Required Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight">
              Little Moments. Lasting Memories.
            </h2>
          </div>

          {/* Configurable Instagram Handle / Link */}
          <div className="flex items-center gap-3">
            {SITE_CONFIG.contact.isInstagramConfigured && SITE_CONFIG.contact.instagramUrl ? (
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C7A77B] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 rounded-xs"
              >
                <span>{SITE_CONFIG.contact.instagramHandle}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-stone-400 bg-white/5 px-4 py-2 border border-white/10 rounded-xs">
                <span className="text-[#C7A77B] font-semibold">{SITE_CONFIG.contact.instagramHandle}</span>
                <span className="text-[10px] text-stone-500 uppercase">(Link Pending Client Confirmation)</span>
              </div>
            )}
          </div>
        </div>

        {/* Clean 6-Photo Curated Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SOCIAL_GALLERY_PHOTOS.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-black/60 rounded-xs aspect-square border border-white/10 hover:border-[#C7A77B]/50 transition-all cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay with camera icon and caption */}
              <div className="absolute inset-0 bg-[#191816]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <Camera className="w-4 h-4 text-[#C7A77B]" />
                </div>
                <div>
                  <p className="text-[11px] font-sans font-light text-stone-200 line-clamp-3 leading-snug">
                    {item.caption}
                  </p>
                  {item.location && (
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#C7A77B] block mt-1">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
