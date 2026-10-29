import React, { useState } from 'react';
import { ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { PROPOSED_SERVICES } from '../../data/services';

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
    <section id="services" className="bg-[#FAF8F5] text-stone-900 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-300 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#8E7754] mb-3">
              <span>PROPOSED OFFERINGS</span>
              <span>•</span>
              <span>CONCEPT FRAMEWORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
              Bespoke Studio Services
            </h2>
          </div>

          <div className="max-w-md text-stone-600 font-sans font-light text-xs md:text-sm leading-relaxed">
            Every commission is customized around the timeline, geography, and traditions of your celebration.
          </div>
        </div>

        {/* Services List: Clean Editorial Rows with Expandable Scope */}
        <div className="divide-y divide-stone-300 border-b border-stone-300">
          {PROPOSED_SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="py-8 md:py-12 group transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* Number & Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#8E7754] font-medium tracking-widest">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 group-hover:text-[#8E7754] transition-colors tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1 block">
                        {service.bestSuitedFor}
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="lg:col-span-5">
                    <p className="text-stone-600 font-sans font-light text-sm md:text-base leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Understated Action Controls */}
                  <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-xs font-mono uppercase tracking-widest text-stone-600 hover:text-stone-900 flex items-center gap-1 focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onSelectServiceForInquiry(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#8E7754] hover:text-stone-950 transition-colors focus:outline-none group/btn"
                    >
                      <span className="border-b border-[#8E7754] pb-0.5 group-hover/btn:border-stone-950">
                        Inquire
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-sans animate-fadeIn">
                    <div className="md:col-span-6 space-y-3">
                      <span className="font-mono uppercase text-stone-500 tracking-widest block text-[10px]">
                        Detailed Coverage Scope
                      </span>
                      <p className="text-stone-700 leading-relaxed text-sm font-light">
                        {service.fullDescription}
                      </p>
                      <ul className="space-y-1.5 pt-2">
                        {service.coveragePoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-stone-600">
                            <span className="text-[#8E7754]">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-6 space-y-3 bg-stone-100/70 p-5 rounded-xs">
                      <span className="font-mono uppercase text-stone-500 tracking-widest block text-[10px]">
                        Curated Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2 text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8E7754] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3">
                        <button
                          onClick={() => onSelectServiceForInquiry(service.title)}
                          className="px-4 py-2 bg-stone-900 text-white text-[11px] font-mono uppercase tracking-widest hover:bg-[#8E7754] transition-colors"
                        >
                          Select {service.title} for Inquiry →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on bespoke pricing & verification */}
        <div className="bg-stone-100 p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans font-light">
          <p>
            * These services represent proposed offerings for the website demo. SS STUDIO will customize specific deliverables, coverage hours, and investment collections based on client requirements.
          </p>
          <span className="font-mono uppercase tracking-wider text-stone-700 shrink-0">
            Investment on Request
          </span>
        </div>
      </div>
    </section>
  );
};
