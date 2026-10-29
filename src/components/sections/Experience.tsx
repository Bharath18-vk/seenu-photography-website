import React from 'react';
import { Sparkles, Calendar, HeartHandshake, Film } from 'lucide-react';

export const Experience: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us Your Story',
      description:
        'Share your wedding date, plans, and the moments that matter most to you.',
      detail:
        'Whether an intimate courtyard ceremony or a multi-day celebration across heritage palaces, we listen closely to understand the rituals, the family dynamics, and the personal sentiments that define your celebration.',
      icon: Calendar,
    },
    {
      number: '02',
      title: "Let's Plan the Details",
      description:
        'We discuss your requirements and shape the photography experience around your celebration.',
      detail:
        'From light mapping and timeline choreography to wardrobe harmonies and crew footprint, we coordinate with your planners to ensure effortless, unhurried documentation on the day.',
      icon: HeartHandshake,
    },
    {
      number: '03',
      title: 'Relive Every Moment',
      description:
        'Your wedding memories become photographs you can revisit for years to come.',
      detail:
        'Hand-graded photographs with natural skin tones and cinema-standard films, preserved as timeless heirlooms for you, your children, and generations to cherish.',
      icon: Film,
    },
  ];

  return (
    <section className="relative bg-[#191816] text-[#F8F5EF] py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#C7A77B]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C7A77B] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PROCESS</span>
              <span className="text-white/20">•</span>
              <span className="text-stone-400">HOW WE WORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F8F5EF] font-light tracking-tight">
              The Client Experience
            </h2>
          </div>

          <p className="max-w-md text-stone-400 font-sans font-light text-xs md:text-sm leading-relaxed">
            From your very first enquiry to the arrival of your master archives, we ensure a seamless, warm, and attentive experience.
          </p>
        </div>

        {/* Clean Horizontal Layout on Desktop, Stacking on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-8 bg-white/5 border border-white/10 hover:border-[#C7A77B]/40 transition-all duration-300 rounded-xs flex flex-col justify-between group"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-5xl lg:text-6xl text-[#C7A77B] font-light group-hover:scale-105 transition-transform inline-block">
                      {step.number}
                    </span>
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 text-[#C7A77B]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Exact Required Supporting Quote/Text */}
                  <p className="font-serif italic text-base text-[#C7A77B] leading-snug mb-4">
                    "{step.description}"
                  </p>

                  {/* Additional Context */}
                  <p className="text-stone-400 font-sans font-light text-xs sm:text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-400">
                  <span>Step {step.number} of 03</span>
                  <span className="text-[#C7A77B]">Seenu Studio Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
