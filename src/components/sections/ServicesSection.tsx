import React, { useState } from 'react';
import { MessageCircle, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { PROPOSED_SERVICES } from '../../data/services';
import { SITE_CONFIG } from '../../config/site';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="bg-[#F8F5EF] text-[#191816] py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#191816]/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#191816]/15 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C7A77B] mb-3">
              <span>STUDIO COMMISSIONS</span>
              <span>•</span>
              <span>FOUR EDITORIAL DISCIPLINES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#191816] font-light tracking-tight">
              Bespoke Studio Services
            </h2>
          </div>

          <div className="max-w-md text-[#191816]/70 font-sans font-light text-xs md:text-sm leading-relaxed">
            Every celebration is unique. We shape our coverage around your ceremonial timeline, traditions, and family rhythm.
          </div>
        </div>

        {/* Four Editorial Service Blocks */}
        <div className="space-y-10">
          {PROPOSED_SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="bg-white/80 border border-[#191816]/10 shadow-sm hover:shadow-md transition-all duration-300 rounded-xs overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 md:p-8">
                  {/* Service Number & Photographic Thumbnail */}
                  <div className="lg:col-span-4 flex items-center gap-5">
                    <span className="font-serif text-3xl md:text-4xl text-[#C7A77B] font-light">
                      {service.number}
                    </span>
                    <div className="relative w-28 h-20 sm:w-32 sm:h-22 shrink-0 overflow-hidden rounded-xs bg-stone-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#191816] tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#191816]/50">
                        Editorial Craft
                      </span>
                    </div>
                  </div>

                  {/* Concise Exact Description as Instructed */}
                  <div className="lg:col-span-5">
                    <p className="font-serif italic text-base sm:text-lg text-[#191816]/90 leading-snug">
                      "{service.tagline}"
                    </p>
                    <p className="text-[#191816]/65 font-sans font-light text-xs md:text-sm leading-relaxed mt-1">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* CTAs: Details + "Discuss Your Requirements" (leads to WhatsApp) */}
                  <div className="lg:col-span-3 flex flex-wrap items-center justify-start lg:justify-end gap-3 pt-2 lg:pt-0">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-xs font-mono uppercase tracking-wider text-[#191816]/70 hover:text-[#191816] flex items-center gap-1 py-2 px-3 border border-stone-200 hover:border-stone-400 rounded-xs transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Less' : 'Scope'}</span>
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>

                    {/* Required "Discuss Your Requirements" CTA leading to WhatsApp */}
                    <a
                      href={SITE_CONFIG.createWhatsAppUrl({ service: service.title })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#191816] bg-[#C7A77B] hover:bg-[#D9C19D] transition-colors rounded-xs shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Discuss Your Requirements</span>
                    </a>
                  </div>
                </div>

                {/* Expandable Details Drawer */}
                {isExpanded && (
                  <div className="border-t border-[#191816]/10 bg-[#FAF8F5] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-sans animate-fadeIn">
                    <div className="md:col-span-6 space-y-3">
                      <span className="font-mono uppercase text-[#C7A77B] tracking-widest block text-[10px] font-semibold">
                        Coverage & Philosophy
                      </span>
                      <p className="text-[#191816]/80 leading-relaxed text-sm font-light">
                        {service.fullDescription}
                      </p>
                      <ul className="space-y-1.5 pt-2">
                        {service.coveragePoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#191816]/70">
                            <span className="text-[#C7A77B] mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-6 space-y-3 bg-white p-5 rounded-xs border border-stone-200">
                      <span className="font-mono uppercase text-[#C7A77B] tracking-widest block text-[10px] font-semibold">
                        Curated Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#191816]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A77B] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 flex flex-wrap gap-2">
                        <button
                          onClick={() => onSelectServiceForInquiry(service.title)}
                          className="px-4 py-2 bg-[#191816] text-[#F8F5EF] text-[11px] font-mono uppercase tracking-widest hover:bg-[#C7A77B] hover:text-[#191816] transition-colors cursor-pointer"
                        >
                          Book via Form →
                        </button>
                        <a
                          href={SITE_CONFIG.createWhatsAppUrl({ service: service.title })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-[#C7A77B] text-[#191816] text-[11px] font-mono uppercase tracking-widest hover:bg-[#C7A77B] transition-colors flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on bespoke pricing per Section 8: No invented package pricing! */}
        <div className="bg-[#E9E1D6]/50 p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#191816]/70 font-sans font-light">
          <p>
            * We do not publish rigid package rates because every wedding celebration carries unique multi-day schedules, guest numbers, and travel logistics. Custom investment estimates are provided following a tailored discussion.
          </p>
          <span className="font-mono uppercase tracking-wider text-[#191816] font-medium shrink-0">
            Investment Upon Request
          </span>
        </div>
      </div>
    </section>
  );
};
