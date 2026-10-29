import React from 'react';
import { ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#131210] text-[#F8F5EF] pt-24 pb-16 px-6 md:px-12 lg:px-20 border-t border-[#C7A77B]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#F8F5EF] font-light block uppercase">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C7A77B] font-mono block mt-1">
                {SITE_CONFIG.tagline}
              </span>
            </div>

            <p className="text-stone-400 font-sans font-light text-xs md:text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.shortBio}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              {/* Instagram */}
              {SITE_CONFIG.contact.isInstagramConfigured && SITE_CONFIG.contact.instagramUrl ? (
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-[#C7A77B] border border-white/10 transition-colors"
                  aria-label="Instagram handle"
                  title={SITE_CONFIG.contact.instagramHandle}
                >
                  <svg
                    className="w-4 h-4"
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
                </a>
              ) : (
                <div
                  className="p-2.5 rounded-full bg-white/5 text-stone-500 border border-white/5 cursor-default"
                  title="Instagram profile link pending client confirmation"
                >
                  <svg
                    className="w-4 h-4"
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
                </div>
              )}

              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-[#C7A77B] border border-white/10 transition-colors"
                aria-label="Direct WhatsApp message"
                title="WhatsApp Studio Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-[#C7A77B] border border-white/10 transition-colors"
                aria-label="Email studio"
                title={SITE_CONFIG.contact.email}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (Required) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C7A77B] block font-semibold">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-sans font-light text-stone-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-work" className="hover:text-white transition-colors">
                  Our Work (Portfolio)
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Wedding Stories
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Photography Services Links (Required) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C7A77B] block font-semibold">
              Disciplines & Presence
            </span>
            <ul className="space-y-2 text-xs font-sans font-light text-stone-300">
              <li>
                <a href="#services" className="hover:text-[#C7A77B] transition-colors">
                  01 — Wedding Photography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7A77B] transition-colors">
                  02 — Candid Photography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7A77B] transition-colors">
                  03 — Pre-Wedding Photography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7A77B] transition-colors">
                  04 — Wedding Cinematography
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-sans font-light text-stone-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C7A77B] shrink-0" />
                <span>{SITE_CONFIG.contact.location}</span>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href={SITE_CONFIG.createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C7A77B] hover:underline"
                >
                  {SITE_CONFIG.contact.displayPhone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Closing Detail Banner & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase text-stone-500">
              Bespoke Website Concept
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors uppercase text-[10px] tracking-wider cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C7A77B]" />
            </button>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="p-4 bg-white/5 border border-white/10 rounded-xs text-[10px] font-sans font-light text-stone-400 text-center leading-relaxed">
          <strong>Website Proposal Concept:</strong> Engineered specifically for <strong>{SITE_CONFIG.brandName}</strong>. All placeholder details can be updated via <code className="text-[#C7A77B]">src/config/site.ts</code> prior to final public deployment.
        </div>
      </div>
    </footer>
  );
};
