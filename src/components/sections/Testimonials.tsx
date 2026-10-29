import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, ShieldAlert } from 'lucide-react';
import { CLIENT_EXPERIENCE_SAMPLES } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = CLIENT_EXPERIENCE_SAMPLES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + CLIENT_EXPERIENCE_SAMPLES.length) % CLIENT_EXPERIENCE_SAMPLES.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLIENT_EXPERIENCE_SAMPLES.length);
  };

  return (
    <section
      id="testimonials"
      className="bg-[#F8F5EF] text-[#191816] py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#191816]/10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#191816]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C7A77B] font-semibold">
              WORDS OF TRUST
            </span>
            <span className="text-[#191816]/20">•</span>
            {/* Explicit Notice that these are editable demo placeholders */}
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#191816]/60 bg-[#E9E1D6] px-2.5 py-0.5 rounded-xs flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-[#C7A77B]" />
              <span>EDITABLE DEMO PLACEHOLDERS</span>
            </span>
          </div>

          <div className="text-xs font-mono text-[#191816]/50">
            {String(currentIndex + 1).padStart(2, '0')} / {String(CLIENT_EXPERIENCE_SAMPLES.length).padStart(2, '0')}
          </div>
        </div>

        {/* Large Editorial Quotation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Couple Image Inset */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2.5 bg-white shadow-xl border border-[#191816]/10 max-w-md mx-auto">
              <div className="overflow-hidden aspect-[4/5] bg-stone-100">
                <img
                  src={current.photograph}
                  alt={`${current.couple} Wedding`}
                  className="w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 p-2 text-center border-t border-stone-100">
                <div className="font-serif text-lg text-[#191816]">{current.couple}</div>
                <div className="text-[11px] font-mono text-[#C7A77B] uppercase tracking-wider">
                  {current.weddingLocation}
                </div>
              </div>
            </div>
          </div>

          {/* Large Quote Column */}
          <div className="lg:col-span-7 space-y-8">
            <Quote className="w-10 h-10 text-[#C7A77B]/50" />

            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#191816] font-light leading-snug tracking-tight">
              "{current.quote}"
            </blockquote>

            <div className="pt-4 border-t border-[#191816]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif text-xl text-[#191816] font-normal">
                  {current.couple}
                </div>
                <div className="text-xs text-[#191816]/60 font-sans font-light mt-0.5">
                  {current.celebrationType} • {current.highlightYear}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous client testimonial"
                  className="p-3 rounded-full border border-[#191816]/20 hover:border-[#191816] text-[#191816] hover:bg-white transition-all focus:outline-none cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next client testimonial"
                  className="p-3 rounded-full border border-[#191816]/20 hover:border-[#191816] text-[#191816] hover:bg-white transition-all focus:outline-none cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Transparency Note */}
        <div className="text-center pt-8 border-t border-[#191816]/10">
          <p className="text-[11px] font-sans font-light text-stone-500 max-w-xl mx-auto leading-relaxed">
            * Note for Seenu Photography client proposal: These reflections demonstrate layout styling. Verified reviews from your Google Business Profile (4.6★ / 62 reviews) and past couples will be populated here during onboarding.
          </p>
        </div>
      </div>
    </section>
  );
};

// Re-export alias for compatibility
export { Testimonials as ClientExperience };
