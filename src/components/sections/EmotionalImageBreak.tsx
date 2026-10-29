import React from 'react';

export const EmotionalImageBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#0A0A0C]">
      {/* Immersive Panoramic Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90"
          alt="Emotional wedding couple walking at sunset along architectural terrace"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        {/* Editorial Tonal Overlay */}
        <div className="absolute inset-0 bg-stone-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C]/60" />
      </div>

      {/* Layered Typographic Centerpiece */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-block text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-[#C5A880] mb-2">
          THE ENDURING LEGACY
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.12]">
          One day. A thousand memories.{' '}
          <span className="italic block mt-2 text-[#FAF8F5] font-normal">
            Yours, forever.
          </span>
        </h2>

        <div className="h-[1px] w-24 bg-[#C5A880]/60 mx-auto my-6" />

        <p className="max-w-xl mx-auto text-stone-300 font-sans font-light text-xs md:text-sm tracking-widest uppercase">
          Crafted with reverence • Documented for generations
        </p>
      </div>
    </section>
  );
};
