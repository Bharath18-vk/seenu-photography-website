import React, { useState } from 'react';
import { Sparkles, X, Check, Settings } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const DemoPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#191816]/95 hover:bg-black text-[#F8F5EF] hover:text-[#C7A77B] border border-[#C7A77B]/40 hover:border-[#C7A77B] shadow-2xl backdrop-blur-md rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C7A77B] animate-pulse" />
          <span>Client Demo Info</span>
        </button>
      ) : (
        <div className="w-[340px] sm:w-[380px] max-h-[85vh] overflow-y-auto bg-[#191816]/98 border border-[#C7A77B]/50 rounded-sm shadow-2xl text-stone-300 p-5 space-y-4 backdrop-blur-xl animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C7A77B]" />
              <span className="font-serif text-sm tracking-widest text-white uppercase">
                Proposal For {SITE_CONFIG.brandName}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close demo info panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Overview text */}
          <div className="space-y-2 text-xs font-light text-stone-300 leading-relaxed">
            <p>
              This website was custom-designed for <strong>{SITE_CONFIG.brandName}</strong> to present your wedding photography and cinematography at an editorial luxury standard.
            </p>
            <div className="p-2.5 bg-black/60 border border-white/10 rounded-xs space-y-1.5 text-[11px] font-mono">
              <div className="text-[#C7A77B] font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> Implemented Systems:
              </div>
              <ul className="text-stone-400 space-y-1 pl-2">
                <li>• Hero with exact copywriting & WhatsApp actions</li>
                <li>• Verified Google Rating (4.6★ / 62 reviews)</li>
                <li>• Brand Story & "Discover Our Approach"</li>
                <li>• Interactive Filterable Portfolio & Full Lightbox</li>
                <li>• Featured Album Monograph Story</li>
                <li>• 4 Exact Service Blocks with WhatsApp Quote CTAs</li>
                <li>• The 3-Step Client Experience Process</li>
                <li>• 4K Cinematic Film Showcase with Active Video</li>
                <li>• Formatted WhatsApp Lead Generation Form</li>
                <li>• Social Journal Gallery</li>
              </ul>
            </div>
          </div>

          {/* Four Launch Requirements Checklist */}
          <div className="border-t border-white/10 pt-3 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C7A77B] block font-semibold flex items-center gap-1.5">
              <Settings className="w-3 h-3" /> Exact Details Needed From Client:
            </span>
            <ol className="text-[11px] text-stone-400 space-y-1 font-mono list-decimal pl-4">
              <li>Verified WhatsApp number for lead dispatches</li>
              <li>High-res portfolio images to replace illustrative placeholders</li>
              <li>Official Instagram profile URL and handle</li>
              <li>Confirmation of Google review count prior to public launch</li>
            </ol>
            <div className="p-2 bg-white/5 border border-white/10 rounded-xs text-[10px] font-mono text-stone-400 space-y-1">
              <div className="text-stone-300">Central Configuration File:</div>
              <code className="text-[#C7A77B] block">src/config/site.ts</code>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 bg-[#C7A77B] text-[#191816] text-[11px] font-mono uppercase tracking-widest rounded-xs hover:bg-[#D9C19D] transition-colors cursor-pointer font-semibold"
          >
            Close & Explore Website
          </button>
        </div>
      )}
    </div>
  );
};
