import type { ServiceItem } from '../types';

export const PROPOSED_SERVICES: ServiceItem[] = [
  {
    id: 'wedding-photography',
    number: '01',
    title: 'Wedding Photography',
    tagline: 'Every ritual, every emotion, and every detail, thoughtfully captured.',
    shortDescription:
      'Every ritual, every emotion, and every detail, thoughtfully captured. A timeless visual chronicle of your sacred celebrations, honouring traditions with editorial elegance.',
    fullDescription:
      'Our flagship offering designed for grand weddings and multi-generational celebrations. We deploy lead photographers and documentary second shooters to capture the monumental ceremony moments alongside the unscripted blessings and emotional family bonds. Every frame is hand-curated, artistically graded for authentic natural skin tones, and delivered in museum-grade resolution.',
    image: '/hero-wedding.jpg',
    coveragePoints: [
      'Multi-day or single-day comprehensive ceremony coverage',
      'Art-directed lead photographer + dedicated documentary second shooters',
      'Handcrafted color-grading with timeless, authentic skin tones',
      'Private online gallery with full-resolution download and heirloom print rights',
    ],
    deliverables: [
      'Curated high-resolution digital master collection',
      'Same-week preview collection for immediate family sharing',
      'Handcrafted fine-art leather heirloom album consultation',
    ],
    bestSuitedFor:
      'Couples and families looking for thorough, elegant, and timeless wedding celebration archives.',
  },
  {
    id: 'candid-photography',
    number: '02',
    title: 'Candid Photography',
    tagline: 'The laughter, the tears, and the moments that happen naturally.',
    shortDescription:
      'The laughter, the tears, and the moments that happen naturally. Unobtrusive documentary photography capturing honest human connection as it unfolds in real time.',
    fullDescription:
      'We believe the most poignant memories are the ones that were never posed. By maintaining a quiet, observant presence, we blend into your celebration to capture tears of gratitude during blessings, spontaneous bursts of laughter with cousins, and the serene intimacy shared in stolen glances across a crowded courtyard.',
    image: '/candid-laugh.jpg',
    coveragePoints: [
      'Unobtrusive, non-intrusive documentary approach with minimal equipment footprint',
      'Natural ambient lighting preserved without harsh continuous artificial flashes',
      'Focus on real emotion, unprompted laughter, and sacred intimate interactions',
      'Candid portraits of parents, elders, and extended family members',
    ],
    deliverables: [
      'Comprehensive candid documentary photo series',
      'High-resolution archival master files optimized for screen and print',
      'Curated emotional storybook sequence',
    ],
    bestSuitedFor:
      'Couples who want to genuinely experience their wedding day without feeling like they are on a photoshoot.',
  },
  {
    id: 'pre-wedding-photography',
    number: '03',
    title: 'Pre-Wedding Photography',
    tagline: 'A chance to celebrate your story before the big day.',
    shortDescription:
      'A chance to celebrate your story before the big day. Relaxed, art-directed editorial sessions that celebrate your connection in breathtaking natural or architectural backdrops.',
    fullDescription:
      'An intentional, unhurried day designed around the two of you before the whirlwind of wedding week begins. We collaborate closely on location scouting, moodboards, wardrobe guidance, and pacing so you feel relaxed, confident, and natural before our lens.',
    image: '/sunset-couple.jpg',
    coveragePoints: [
      'Dedicated half-day or full-day destination concept session',
      'Pre-shoot moodboard, aesthetic direction, and wardrobe consultation',
      'Historic heritage architecture, palace ruins, or remote coastal landscape locations',
      'Relaxed pacing with authentic, intimate couple direction',
    ],
    deliverables: [
      '50+ master-retouched editorial portrait plates',
      'Save-The-Date digital invitations and social announcement suite',
      'Signature fine-art framed prints option for reception display',
    ],
    bestSuitedFor:
      'Couples who desire magazine-caliber romantic portraits and want to get comfortable before the wedding cameras.',
  },
  {
    id: 'wedding-cinematography',
    number: '04',
    title: 'Wedding Cinematography',
    tagline: 'Your celebration brought back to life through moving images.',
    shortDescription:
      'Your celebration brought back to life through moving images. Cinematic 4K films with emotive acoustic soundscapes and narrative-driven storytelling.',
    fullDescription:
      'Moving imagery holds the unique power to preserve the tremble in your father’s voice, the cadence of your vows, and the unrestrained tempo of your sangeet. We approach wedding cinematography as independent narrative cinema: employing full-frame cinema glass, 24fps cadence, multi-track audio capture, and tailored acoustic scoring.',
    image: '/sparklers-night.jpg',
    coveragePoints: [
      'Dual cinema-line camera operators with aerial drone perspectives where permitted',
      'Dedicated multi-channel professional audio recording during vows, speeches, and rituals',
      'Color-graded in 4K HDR adhering to international cinema standards',
      'Bespoke musical scoring and natural sound design mix',
    ],
    deliverables: [
      '3 to 5 minute cinematic wedding teaser / trailer',
      '15 to 25 minute narrative documentary feature film',
      'Full archival recordings of key ceremonies, sacred mantras, and speeches',
    ],
    bestSuitedFor:
      'Couples who desire an emotional, cinematic heirloom that feels like independent cinema rather than a generic video log.',
  },
];
