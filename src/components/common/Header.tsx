import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Calendar } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studio';

interface HeaderProps {
  onOpenInquiry: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stories', href: '#stories' },
    { name: 'Approach', href: '#approach' },
    { name: 'Films', href: '#films' },
    { name: 'Services', href: '#services' },
    { name: 'Reflections', href: '#reflections' },
    { name: 'Contact', href: '#inquire' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0C]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="SS Studio Home"
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-white font-light group-hover:text-[#C5A880] transition-colors">
              SS STUDIO
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A880]/80 font-mono -mt-0.5">
              Weddings & Cinema
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-sans uppercase tracking-[0.2em] text-stone-300">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:text-[#C5A880]"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={STUDIO_CONFIG.createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="p-2 text-stone-300 hover:text-[#C5A880] transition-colors rounded-full border border-white/10 hover:border-[#C5A880]/40 focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
              title="Quick WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-stone-900 bg-[#C5A880] hover:bg-[#D4AF37] transition-all rounded-xs shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-black"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Your Date</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-200 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#C5A880] rounded-xs"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-20 bg-[#0A0A0C]/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6 pt-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-mono mb-4">
            Navigation
          </div>
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left font-serif text-2xl md:text-3xl text-stone-200 hover:text-[#C5A880] transition-colors tracking-wide py-1"
            >
              <span className="font-mono text-xs text-stone-500 mr-4">0{idx + 1}</span>
              {link.name}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3.5 bg-[#C5A880] text-black text-xs font-semibold uppercase tracking-widest text-center rounded-xs"
          >
            Check Date Availability
          </button>

          <a
            href={STUDIO_CONFIG.createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 border border-white/20 text-white hover:border-[#C5A880] text-xs font-medium uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A880]" />
            Chat on WhatsApp
          </a>

          <div className="text-center text-[10px] text-stone-500 font-mono tracking-wider pt-2">
            {STUDIO_CONFIG.contact.location}
          </div>
        </div>
      </div>
    </>
  );
};
