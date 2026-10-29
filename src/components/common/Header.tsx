import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

interface HeaderProps {
  onOpenInquiry: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Required Navigation Links per Section 3: Home, Our Work, Stories, About, Contact
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Stories', href: '#stories' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
            ? 'bg-[#191816]/95 backdrop-blur-md py-4 border-b border-[#C7A77B]/20 shadow-xl'
            : 'bg-gradient-to-b from-[#191816]/80 via-[#191816]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Seenu Photography Wordmark on the left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-[#C7A77B] rounded-xs p-1 -m-1"
            aria-label="Seenu Photography Home"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.22em] text-[#F8F5EF] font-light group-hover:text-[#C7A77B] transition-colors uppercase">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#C7A77B] font-mono -mt-0.5">
              Weddings & Cinema
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-sans uppercase tracking-[0.22em] text-[#F8F5EF]/80">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#C7A77B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C7A77B] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:text-[#C7A77B] cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs: Enquire on WhatsApp + Let's Talk */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={SITE_CONFIG.createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-sans uppercase tracking-[0.16em] text-[#191816] bg-[#C7A77B] hover:bg-[#D9C19D] transition-all rounded-xs shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-[#C7A77B]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-sans uppercase tracking-[0.16em] text-[#F8F5EF] border border-[#F8F5EF]/30 hover:border-[#C7A77B] hover:text-[#C7A77B] transition-all rounded-xs focus:outline-none focus:ring-1 focus:ring-[#C7A77B] cursor-pointer"
            >
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F8F5EF] hover:text-[#C7A77B] focus:outline-none focus:ring-1 focus:ring-[#C7A77B] rounded-xs cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-20 bg-[#191816]/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6 pt-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#C7A77B] font-mono mb-4">
            Navigation
          </div>
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left font-serif text-2xl sm:text-3xl text-[#F8F5EF] hover:text-[#C7A77B] transition-colors tracking-wide py-1.5 cursor-pointer"
            >
              <span className="font-mono text-xs text-[#C7A77B]/60 mr-4">0{idx + 1}</span>
              {link.name}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <a
            href={SITE_CONFIG.createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 bg-[#C7A77B] text-[#191816] text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xs shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3.5 border border-white/20 text-[#F8F5EF] hover:border-[#C7A77B] hover:text-[#C7A77B] text-xs font-medium uppercase tracking-widest text-center rounded-xs transition-colors cursor-pointer"
          >
            Let's Talk About Your Wedding
          </button>

          <div className="text-center text-[10px] text-stone-400 font-mono tracking-wider pt-2">
            {SITE_CONFIG.contact.location}
          </div>
        </div>
      </div>
    </>
  );
};
