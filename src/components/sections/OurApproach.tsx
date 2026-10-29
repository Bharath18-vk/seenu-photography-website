import React from 'react';

export const OurApproach: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Observe',
      tagline: 'The quiet moments, the unscripted smiles and everything in between.',
      description:
        'We do not turn your wedding into a film set. By maintaining a discreet, observant presence, we allow tears to flow naturally, jokes to ripple across the room unprompted, and sacred rites to proceed with uninterrupted holiness.',
      image:
        'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Candid unscripted bride laughing with genuine happiness',
      caption: 'FIG. 01 — Unscripted candid expression during family blessings.',
    },
    {
      number: '02',
      title: 'Preserve',
      tagline: 'Photographs that feel authentic today and meaningful decades from now.',
      description:
        'Trends and aggressive color filters fade quickly. Our color science honors true skin tones, deep black richness, and organic natural light, ensuring that your wedding albums will look just as regal fifty years from today as they do tomorrow.',
      image:
        'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Timeless intimate bridal portrait with natural light',
      caption: 'FIG. 02 — Archival color grading preserving authentic textures and skin tones.',
    },
    {
      number: '03',
      title: 'Tell',
      tagline: 'A cohesive visual story that brings the emotions of your celebration together.',
      description:
        'A wedding is not a random collection of 1,000 pretty stills; it is a three-act emotional narrative with rising anticipation, profound sacred vows, and ecstatic communal celebration. We sequence every collection like a fine-art monograph.',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Harmonious couple walking into sunset',
      caption: 'FIG. 03 — Narrative flow carrying you through dawn, twilight, and starlight.',
    },
  ];

  return (
    <section id="approach" className="bg-[#FAF8F5] text-stone-900 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#8E7754]">
            OUR GUIDING PRINCIPLES
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight leading-tight">
            How we approach your story.
          </h2>
          <p className="text-stone-600 font-sans font-light text-base md:text-lg leading-relaxed">
            We believe wedding photography is not simply an exercise in camera technique, but an act of deep empathy and artistic preservation.
          </p>
        </div>

        {/* Editorial Sequential Spreads (No generic 3 cards!) */}
        <div className="space-y-24 md:space-y-32">
          {principles.map((principle, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={principle.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-stone-300/80 pt-16 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl md:text-5xl text-[#8E7754] font-light">
                      {principle.number}
                    </span>
                    <span className="h-[1px] w-12 bg-stone-300" />
                    <span className="text-xs uppercase font-mono tracking-[0.25em] text-stone-500">
                      PRINCIPLE
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-light tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="font-serif italic text-lg sm:text-xl text-stone-700 leading-snug">
                    "{principle.tagline}"
                  </p>

                  <p className="text-stone-600 font-sans font-light text-sm md:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Supporting Photograph Column with Editorial Frame */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative p-3 bg-white shadow-xl border border-stone-200">
                    <div className="overflow-hidden bg-stone-100 aspect-[4/3] sm:aspect-[16/10]">
                      <img
                        src={principle.image}
                        alt={principle.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-3 px-2 flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                      <span>{principle.caption}</span>
                      <span className="text-[#8E7754]">SS STUDIO ARCHIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
