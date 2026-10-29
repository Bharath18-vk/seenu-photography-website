import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Refined Tooltip */}
      <div
        className={`hidden sm:flex items-center bg-[#191816]/95 text-[#F8F5EF] text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-xs border border-[#C7A77B]/40 shadow-xl backdrop-blur-md transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span>Chat with {SITE_CONFIG.brandName}</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={SITE_CONFIG.createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire with ${SITE_CONFIG.brandName} on WhatsApp`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#191816] text-[#C7A77B] hover:text-[#191816] hover:bg-[#C7A77B] border-2 border-[#C7A77B] rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C7A77B] focus:ring-offset-2 focus:ring-offset-black"
        title="Quick WhatsApp Enquiry"
      >
        <MessageCircle className="w-6 h-6 fill-current transition-transform group-hover:rotate-6" />
        <span className="sr-only">Chat on WhatsApp</span>

        {/* Ambient Subtle Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full border border-[#C7A77B]/40 animate-ping pointer-events-none opacity-40" />
      </a>
    </div>
  );
};
