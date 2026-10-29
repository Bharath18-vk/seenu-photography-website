import type { TestimonialItem } from '../types';

/**
 * TESTIMONIALS DATA (DEMO PLACEHOLDERS)
 * 
 * Per project specifications: Never fabricate real customer names, claims, or reviews.
 * The entries below are clearly marked illustrative placeholders demonstrating the
 * editorial typographic layout. Replace with Seenu Photography's verified Google reviews
 * and client notes prior to final launch.
 */
export const CLIENT_EXPERIENCE_SAMPLES: TestimonialItem[] = [
  {
    id: 'demo-review-1',
    quote:
      'Looking through our wedding frames felt like watching poetry unfold. They did not merely photograph how our mandap looked; they captured the exact second my mother wiped away a tear during our pheras. Truly unforgettable work.',
    couple: 'Ananya & Kabir [Demo Placeholder]',
    weddingLocation: 'Udaipur, Rajasthan',
    celebrationType: 'Royal Heritage Wedding',
    highlightYear: 'Winter Celebration',
    photograph: '/hero-wedding.jpg',
    isDemoSample: true,
  },
  {
    id: 'demo-review-2',
    quote:
      'We were hesitant about posing or feeling stiff before cameras. The team moved with such quiet discretion, warm calm, and natural ease. The resulting portraits feel like authentic memories, not choreographed poses.',
    couple: 'Rhea & Dev [Demo Placeholder]',
    weddingLocation: 'Kumarakom, Kerala',
    celebrationType: 'Intimate Courtyard Ceremony',
    highlightYear: 'Autumn Gathering',
    photograph: '/candid-ceremony.jpg',
    isDemoSample: true,
  },
  {
    id: 'demo-review-3',
    quote:
      'The wedding film brought our grandparents and entire family to tears. The sound of our father’s blessings, the laughter from the sangeet, and the quiet glances between us are preserved forever with remarkable cinematic artistry.',
    couple: 'Meera & Aarav [Demo Placeholder]',
    weddingLocation: 'Heritage Haveli, Delhi NCR',
    celebrationType: 'Traditional Anand Karaj & Reception',
    highlightYear: 'Spring Season',
    photograph: '/bride-portrait.jpg',
    isDemoSample: true,
  },
];
