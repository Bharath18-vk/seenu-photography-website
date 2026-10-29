import React, { useState } from 'react';
import { Sparkles, X, Check, Phone, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studio';

export const DemoPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-30 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#121216]/95 hover:bg-black text-stone-200 hover:text-[#C5A880] border border-[#C5A880]/30 hover:border-[#C5A880] shadow-2xl backdrop-blur-md rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 focus:outline-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880] animate-pulse" />
          <span>Client Demo Info</span>
        </button>
      ) : (
        <div className="w-[340px] sm:w-[380px] bg-[#121216]/98 border border-[#C5A880]/40 rounded-sm shadow-2xl text-stone-300 p-5 space-y-4 backdrop-blur-xl animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="font-serif text-sm tracking-widest text-white uppercase">
                Proposal For SS STUDIO
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Overview text */}
          <div className="space-y-2 text-xs font-light text-stone-300 leading-relaxed">
            <p>
              This website was custom-designed for <strong>SS STUDIO</strong> to showcase your photography and cinema at the highest international luxury standard.
            </p>
            <div className="p-2.5 bg-black/50 border border-white/10 rounded-xs space-y-1.5 text-[11px] font-mono">
              <div className="text-[#C5A880] font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> Live Features Implemented:
              </div>
              <ul className="text-stone-400 space-y-1 pl-2">
                <li>• 4 Signature Story Lightboxes & Modals</li>
                <li>• Working WhatsApp & Mailto Inquiry Dispatch</li>
                <li>• 4K Cinema Showcase Console with Specs</li>
                <li>• Keyboard Accessible (Esc, Arrows)</li>
                <li>• 100% Mobile & Tablet Responsive</li>
              </ul>
            </div>
          </div>

          {/* Configurable Details Notice */}
          <div className="border-t border-white/10 pt-3 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">
              Easy Content Onboarding:
            </span>
            <div className="text-[11px] text-stone-400 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#C5A880]" />
                <span>WhatsApp: {STUDIO_CONFIG.contact.displayPhone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-[#C5A880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>Instagram: {STUDIO_CONFIG.contact.instagramHandle}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#C5A880]" />
                <span>Base: {STUDIO_CONFIG.contact.location}</span>
              </div>
            </div>
            <p className="text-[10px] text-stone-500 italic pt-1">
              All placeholders can be swapped via a single central settings file (`src/config/studio.ts`).
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 bg-[#C5A880] text-black text-[11px] font-mono uppercase tracking-widest rounded-xs hover:bg-[#D4AF37] transition-colors"
          >
            Hide & View Full Presentation
          </button>
        </div>
      )}
    </div>
  );
};
