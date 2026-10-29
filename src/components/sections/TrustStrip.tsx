import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const TrustStrip: React.FC = () => {
  const pillars = [
    'Wedding Photography',
    'Candid Moments',
    'Pre-Wedding Stories',
    'Wedding Films',
  ];

  return (
    <section className="relative bg-[#191816] text-[#F8F5EF] border-b border-[#C7A77B]/20 py-8 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Four Pillars with Understated Separators */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-serif tracking-[0.16em] uppercase text-[#F8F5EF]/90">
          {pillars.map((item, index) => (
            <React.Fragment key={item}>
              <span className="hover:text-[#C7A77B] transition-colors">{item}</span>
              {index < pillars.length - 1 && (
                <span className="text-[#C7A77B]/40 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Verified Google Business Rating (No fabrication!) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xs">
          <div className="flex items-center gap-1.5 text-[#C7A77B]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < 4
                    ? 'fill-current'
                    : i === 4
                    ? 'fill-current opacity-60'
                    : 'text-stone-600'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[#F8F5EF] font-semibold">
              {SITE_CONFIG.rating.score} / {SITE_CONFIG.rating.maxScore}
            </span>
            <span className="text-stone-400">
              ({SITE_CONFIG.rating.reviewCount} Reviews on {SITE_CONFIG.rating.platform})
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-[#C7A77B] bg-[#C7A77B]/10 px-2 py-0.5 border border-[#C7A77B]/20 rounded-xs">
            <ShieldCheck className="w-3 h-3" />
            <span>Verified Rating</span>
          </div>
        </div>
      </div>

      {/* Transparent Disclaimer Note to Client */}
      <div className="max-w-7xl mx-auto mt-3 text-center lg:text-right">
        <span className="text-[10px] font-mono text-stone-500 italic">
          * {SITE_CONFIG.rating.verifiedNote}
        </span>
      </div>
    </section>
  );
};
