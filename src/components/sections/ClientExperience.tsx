import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CLIENT_EXPERIENCE_SAMPLES } from '../../data/testimonials';

export const ClientExperience: React.FC = () => {
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
    <section id="reflections" className="bg-[#FAF8F5] text-stone-900 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-300 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#8E7754]">
              CLIENT REFLECTIONS
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 bg-stone-200/80 px-2 py-0.5 rounded-xs">
              SAMPLE DEMO CONTENT
            </span>
          </div>

          <div className="text-xs font-mono text-stone-500">
            {String(currentIndex + 1).padStart(2, '0')} / {String(CLIENT_EXPERIENCE_SAMPLES.length).padStart(2, '0')}
          </div>
        </div>

        {/* Large Editorial Quotation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Couple Image Inset */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 bg-white shadow-2xl border border-stone-200 max-w-md mx-auto">
              <div className="overflow-hidden aspect-[4/5] bg-stone-100">
                <img
                  src={current.photograph}
                  alt={`${current.couple} Wedding`}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="mt-3 p-2 text-center border-t border-stone-100">
                <div className="font-serif text-lg text-stone-900">{current.couple}</div>
                <div className="text-[11px] font-mono text-[#8E7754] uppercase tracking-wider">
                  {current.weddingLocation}
                </div>
              </div>
            </div>
          </div>

          {/* Large Quote Column */}
          <div className="lg:col-span-7 space-y-8">
            <Quote className="w-10 h-10 text-[#8E7754]/40" />

            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-light leading-snug tracking-tight">
              "{current.quote}"
            </blockquote>

            <div className="pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif text-xl text-stone-900 font-normal">
                  {current.couple}
                </div>
                <div className="text-xs text-stone-500 font-sans font-light mt-0.5">
                  {current.celebrationType} • {current.highlightYear}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous client testimonial"
                  className="p-3 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 hover:bg-white transition-all focus:outline-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next client testimonial"
                  className="p-3 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 hover:bg-white transition-all focus:outline-none"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Note */}
        <div className="text-center pt-8 border-t border-stone-200">
          <p className="text-[11px] font-sans font-light text-stone-500 max-w-xl mx-auto leading-relaxed">
            * Note for proposal review: These sample reflections illustrate the typography and layout styling for client testimonials. Actual client feedback from SS STUDIO’s verified celebrations will replace these during final content onboarding.
          </p>
        </div>
      </div>
    </section>
  );
};
