import React from 'react';
import { ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studio';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070709] text-stone-300 pt-24 pb-16 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-white font-light block">
                {STUDIO_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-mono block mt-1">
                {STUDIO_CONFIG.tagline}
              </span>
            </div>

            <p className="text-stone-400 font-sans font-light text-xs md:text-sm leading-relaxed max-w-sm">
              {STUDIO_CONFIG.shortBio}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href={STUDIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-[#C5A880] border border-white/10 transition-colors"
                aria-label="Instagram handle placeholder"
                title={STUDIO_CONFIG.contact.instagramHandle}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a
                href={STUDIO_CONFIG.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-[#C5A880] border border-white/10 transition-colors"
                aria-label="Direct WhatsApp message"
                title="WhatsApp Studio Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${STUDIO_CONFIG.contact.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-[#C5A880] border border-white/10 transition-colors"
                aria-label="Email studio"
                title={STUDIO_CONFIG.contact.email}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A880] block">
              Curated Folio
            </span>
            <ul className="space-y-2.5 text-xs font-sans font-light">
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  The Grand Celebration
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  The Intimate Ceremony
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  The Wedding Portraits
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Celebration After Dark
                </a>
              </li>
              <li>
                <a href="#films" className="hover:text-white transition-colors">
                  Cinematic Wedding Films
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Inquiries */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A880] block">
              Commissions & Presence
            </span>
            <div className="space-y-2 text-xs font-sans font-light text-stone-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{STUDIO_CONFIG.contact.location}</span>
              </p>
              <p className="text-stone-400">
                Direct WhatsApp: <span className="text-stone-200">{STUDIO_CONFIG.contact.displayPhone}</span>
              </p>
              <p className="text-stone-400">
                Inquiries: <span className="text-stone-200">{STUDIO_CONFIG.contact.email}</span>
              </p>
              <p className="pt-2 text-[11px] text-stone-500 font-mono">
                {STUDIO_CONFIG.contact.turnaroundTime}
              </p>
            </div>
          </div>
        </div>

        {/* Closing Detail Banner & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {currentYear} {STUDIO_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase text-stone-500">
              Luxury Concept Presentation
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors uppercase text-[10px] tracking-wider"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

        {/* Demo Transparency Note */}
        <div className="p-4 bg-white/5 border border-white/10 rounded-xs text-[10px] font-sans font-light text-stone-400 text-center leading-relaxed">
          <strong>Website Proposal Concept:</strong> This website was specifically designed and engineered for the business owner of <strong>SS STUDIO</strong>. Photography, names, and contact details shown are illustrative demo placeholders that will be replaced with verified business assets upon project handover.
        </div>
      </div>
    </footer>
  );
};
