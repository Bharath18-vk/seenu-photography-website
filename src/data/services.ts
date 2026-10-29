import type { ServiceItem } from '../types';

export const PROPOSED_SERVICES: ServiceItem[] = [
  {
    id: 'wedding-photography',
    number: '01',
    title: 'Wedding Photography',
    shortDescription: 'Comprehensive photographic storytelling blending candid documentary coverage with refined fine-art couple portraits.',
    fullDescription: 'Our primary offering for wedding celebrations of all scales. We deploy a multi-angle editorial team to chronicle both the monumental rituals and the fleeting, unscripted glances that happen between moments. Every frame is hand-curated, color-graded to timeless film tones, and delivered in high resolution for museum-grade heirloom printing.',
    coveragePoints: [
      'Multi-day or single-day full documentary coverage',
      'Lead photographer direction with dedicated second-shooter candid coverage',
      'Handcrafted color-grading with timeless natural skin tones',
      'Private online gallery with full-resolution download rights'
    ],
    deliverables: [
      'Curated high-resolution digital master files',
      'Handcrafted fine-art leather heirloom album (optional upgrade)',
      'Highlight selection within 7 days of celebration'
    ],
    bestSuitedFor: 'Couples who value emotional honesty, editorial poise, and heirloom imagery.'
  },
  {
    id: 'wedding-cinematography',
    number: '02',
    title: 'Wedding Cinematography',
    shortDescription: 'Cinematic 4K wedding films crafted with anamorphic lenses, evocative sound design, and narrative-driven editing.',
    fullDescription: 'Moving imagery possesses the unique power to preserve the cadence of your vows, the tremor in your father’s voice, and the unrestrained tempo of your sangeet. We approach wedding cinematography like independent narrative filmmaking, pairing cinema-grade cameras with bespoke acoustic scoring.',
    coveragePoints: [
      'Dual cinema-rig camera operators with aerial drone perspectives',
      'Dedicated multi-channel professional audio recording during vows & speeches',
      'Color-graded in 4K HDR adhering to cinema standards',
      'Bespoke musical scoring and natural sound design mix'
    ],
    deliverables: [
      '3 to 5 minute cinematic teaser / trailer',
      '15 to 25 minute narrative documentary feature film',
      'Full unedited recordings of key ceremonies, vows, and speeches'
    ],
    bestSuitedFor: 'Couples looking for a cinematic film experience that feels like cinema, not a video log.'
  },
  {
    id: 'pre-wedding-sessions',
    number: '03',
    title: 'Pre-Wedding Sessions',
    shortDescription: 'Art-directed editorial couple sessions set against striking natural landscapes or historic architectural backdrops.',
    fullDescription: 'An intentional, unhurried day designed around the two of you before the whirlwind of the wedding week begins. We collaborate with you on location curation, wardrobe styling guidance, and pacing so you feel completely at ease in front of the lens.',
    coveragePoints: [
      'Full-day or half-day dedicated concept session',
      'Styling and moodboard consultation prior to the shoot',
      'Exploration of scenic heritage architecture or remote natural landscapes',
      'Relaxed, unhurried pacing with artistic creative direction'
    ],
    deliverables: [
      '50+ master retouched editorial frames',
      'Mini cinema reel optimized for social announcements or reception screens',
      'Signature framed wall-art print option'
    ],
    bestSuitedFor: 'Couples who want magazine-caliber portraits in an intimate, relaxed environment.'
  },
  {
    id: 'engagement-photography',
    number: '04',
    title: 'Engagement Photography',
    shortDescription: 'Intimate visual documentation of your ring ceremony, roka, or formal proposal celebration.',
    fullDescription: 'The prelude to your wedding journey. Whether an intimate family gathering at home or a grand ring exchange banquet, we preserve the initial excitement and warmth of two families uniting.',
    coveragePoints: [
      'Dedicated ceremony coverage and candid family interaction frames',
      'Post-ceremony intimate portrait session with golden hour lighting',
      'Swift turnaround for celebration announcements and save-the-date invitations'
    ],
    deliverables: [
      'Full curated digital collection',
      'Fast-track digital gallery delivery for save-the-date cards',
      'Heirloom keepsake mini-book option'
    ],
    bestSuitedFor: 'Couples celebrating formal engagements, rokas, or proposal milestones.'
  },
  {
    id: 'destination-weddings',
    number: '05',
    title: 'Destination Weddings',
    shortDescription: 'Specialized visual coverage for multi-day destination celebrations across Rajasthan, Goa, Kerala, and international venues.',
    fullDescription: 'Destination celebrations carry a unique magic: intimate gatherings of your closest circles living, dining, and celebrating together in a breathtaking sanctuary. Our team is fully equipped for multi-day travel, remote power management, and dynamic outdoor lighting conditions.',
    coveragePoints: [
      'Comprehensive multi-day schedule coverage (Welcome dinner, Mehendi, Haldi, Sangeet, Pheras, Reception)',
      'Pre-event venue reconnaissance and light mapping for optimal timing',
      'Full travel-ready compact cinema and photography footprint',
      'Flexible on-site crew coordination with your wedding planner'
    ],
    deliverables: [
      'Multi-event digital archives categorized by celebration event',
      'Destination highlight reel produced for same-week viewing (on request)',
      'Custom handcrafted heirloom suite with fine-art archival prints'
    ],
    bestSuitedFor: 'Couples planning 2-to-4 day destination experiences in heritage palaces, coastal villas, or overseas.'
  }
];
