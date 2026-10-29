import type { Story, FilmConcept } from '../types';

export const SIGNATURE_STORIES: Story[] = [
  {
    id: 'grand-celebration',
    slug: 'the-grand-celebration',
    title: 'The Grand Celebration',
    category: 'Royal Heritage Wedding',
    subtitle: 'A vibrant symphony of crimson, heritage courtyards, and joyful grandeur',
    location: 'Udaipur, Rajasthan (Illustrative Demo Concept)',
    dateTag: 'Winter Season',
    heroImage: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[4/5]',
    curatedCount: 28,
    excerpt: 'Across three days of ancient rituals and contemporary elegance, we documented the grandeur without losing sight of the intimate whispers in between.',
    narrative: `Set against 400-year-old carved sandstone arches and flickering oil lamps, this celebration brought together regal traditions and genuine warmth. Our intention was not merely to record the spectacle of 800 guests, but to seek the quiet glances exchanged across the mandap fire, the gentle touch of a mother blessing the bride's veil, and the sheer exhilaration of the baraat entering under a shower of freshly plucked rose petals.`,
    palette: ['#8A1C14', '#D4AF37', '#1F1E1B', '#F4E8D1'],
    highlights: [
      'Bespoke royal baraat documentation along palace lakeside',
      'Varmala ceremony captured in continuous natural twilight',
      'High-framerate cinematic portraits in heritage corridors',
      'Unposed documentary captures of multi-generational reunions'
    ],
    gallery: [
      {
        id: 'gc-1',
        url: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1600&q=85',
        alt: 'Royal Indian wedding couple in traditional red lehenga and sherwani',
        caption: 'The newlywed couple standing in the courtyard at golden hour.',
        orientation: 'portrait'
      },
      {
        id: 'gc-2',
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85',
        alt: 'Indian bride portrait with traditional gold jewelry and maang tikka',
        caption: 'Heirloom polki jewelry and intricate handcrafted embroidery details.',
        orientation: 'portrait'
      },
      {
        id: 'gc-3',
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=85',
        alt: 'Majestic palace heritage architecture and courtyard setting',
        caption: 'The historical heritage venue bathed in late afternoon sunlight.',
        orientation: 'landscape'
      },
      {
        id: 'gc-4',
        url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=85',
        alt: 'Close-up of sacred wedding hands and floral rings',
        caption: 'Sacred pheras and traditional rituals around the ceremonial fire.',
        orientation: 'square'
      },
      {
        id: 'gc-5',
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85',
        alt: 'Couple laughing joyfully during the varmala ceremony',
        caption: 'Spontaneous laughter during the ceremonial floral exchange.',
        orientation: 'landscape'
      },
      {
        id: 'gc-6',
        url: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=1400&q=85',
        alt: 'Festive ceremonial colors and traditional attire',
        caption: 'Traditional marigold decor and vibrant celebratory textures.',
        orientation: 'portrait'
      }
    ]
  },
  {
    id: 'intimate-ceremony',
    slug: 'the-intimate-ceremony',
    title: 'The Intimate Ceremony',
    category: 'Candid & Sacred Moments',
    subtitle: 'Quiet emotion, stolen glances, and vows spoken in hushed reverence',
    location: 'Kerala Courtyard (Illustrative Demo Concept)',
    dateTag: 'Autumn Light',
    heroImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[3/4]',
    curatedCount: 22,
    excerpt: 'Surrounded by fifty closest souls, every breath and gentle smile carried the weight of a lifetime commitment.',
    narrative: `When celebrations scale down in headcount, they amplify in emotional resonance. In this serene temple courtyard surrounded by coconut palms and brass oil urns, we worked with minimal equipment, moving like quiet observers. No intrusive flashes, no rehearsed gestures — just the authentic trembling smile during the saat phere, the tender warmth of a grandfather's tearful embrace, and the silent understanding between two people starting their journey.`,
    palette: ['#EDE4D3', '#9B783E', '#4A4036', '#FAF6F0'],
    highlights: [
      'Documentary-first coverage with zero staged interruptions',
      'Natural ambient lighting preserved without harsh artificial flashes',
      'Micro-moments: delicate mehendi intricacies and quiet bridal reflections',
      'Intimate family portrait series framed with organic symmetry'
    ],
    gallery: [
      {
        id: 'ic-1',
        url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85',
        alt: 'Intimate bride and groom emotional ceremony moment',
        caption: 'Silent prayers during the sacred chanting at dawn.',
        orientation: 'portrait'
      },
      {
        id: 'ic-2',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85',
        alt: 'Detailed mehndi henna design on bridal hands with traditional rings',
        caption: 'Handcrafted henna patterns telling personal motifs and dates.',
        orientation: 'square'
      },
      {
        id: 'ic-3',
        url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1600&q=85',
        alt: 'Intimate couple portrait with soft emotional gaze',
        caption: 'A quiet pause away from the family gathering.',
        orientation: 'portrait'
      },
      {
        id: 'ic-4',
        url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=85',
        alt: 'Candid bride laughing with pure uninhibited joy',
        caption: 'Unscripted laughter as siblings share childhood memories.',
        orientation: 'portrait'
      },
      {
        id: 'ic-5',
        url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1400&q=85',
        alt: 'Editorial bridal portrait with soft natural window illumination',
        caption: 'The bride reflecting in the quiet moments before stepping into the mandap.',
        orientation: 'portrait'
      },
      {
        id: 'ic-6',
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85',
        alt: 'Natural floral ceremony aisle and subtle decor',
        caption: 'Organic white florals and brass thalis lining the ceremonial pathway.',
        orientation: 'landscape'
      }
    ]
  },
  {
    id: 'wedding-portraits',
    slug: 'the-wedding-portraits',
    title: 'The Wedding Portraits',
    category: 'Fine Art Editorial',
    subtitle: 'High-fashion editorial stillness, sculpted shadows, and timeless presence',
    location: 'Jaipur Heritage Suites (Illustrative Demo Concept)',
    dateTag: 'Spring Twilight',
    heroImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[4/5]',
    curatedCount: 30,
    excerpt: 'Photographs designed to live on the walls of your home decades from now, possessing the enduring grace of classical portraiture.',
    narrative: `Our portrait philosophy draws from high-fashion editorial pages and Renaissance painting techniques. Rather than stiff posing, we orchestrate serene stillness. We study how light spills across the hand-woven zardozi threadwork, how shadows define the groom's jawline, and how a subtle shift in gaze turns a simple portrait into an heirloom artwork. Each frame is composed with intentional negative space, architectural poise, and deep tonality.`,
    palette: ['#7A141A', '#242426', '#EADBC8', '#BFA054'],
    highlights: [
      'Mastery of directional natural lighting and dramatic architectural chiaroscuro',
      'Art-directed posing that feels effortless, noble, and deeply personal',
      'Medium-format tonal depth and museum-grade color grading',
      'Seamless balance of solo editorial bridal frames and unified couple compositions'
    ],
    gallery: [
      {
        id: 'wp-1',
        url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=85',
        alt: 'Fine art portrait of Indian bride in crimson lehenga and heritage jewellery',
        caption: 'Sculpted natural light accentuating traditional bridal handlooms.',
        orientation: 'portrait'
      },
      {
        id: 'wp-2',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
        alt: 'High editorial couple stance in architectural arches',
        caption: 'Classical symmetry and poise framed by heritage stone columns.',
        orientation: 'landscape'
      },
      {
        id: 'wp-3',
        url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=85',
        alt: 'Bridal veil flowing gently in evening breeze',
        caption: 'Kinetic elegance of the sheer dupatta floating in the twilight air.',
        orientation: 'portrait'
      },
      {
        id: 'wp-4',
        url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1400&q=85',
        alt: 'Groom refined styling detail and bespoke craftsmanship',
        caption: 'Handcrafted raw silk textures and antique buttons.',
        orientation: 'portrait'
      },
      {
        id: 'wp-5',
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85',
        alt: 'Couple silhouette against warm horizon',
        caption: 'Golden hour sunset over rolling hill vistas.',
        orientation: 'landscape'
      },
      {
        id: 'wp-6',
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=85',
        alt: 'Still life composition of wedding rings and calligraphed vows',
        caption: 'Heirloom gems and bespoke invitations preserved with quiet reverence.',
        orientation: 'square'
      }
    ]
  },
  {
    id: 'celebration-after-dark',
    slug: 'the-celebration-after-dark',
    title: 'The Celebration After Dark',
    category: 'Cinematic Reception & Sangeet',
    subtitle: 'Chandelier glow, electric rhythm, and intoxicating midnight romance',
    location: 'Goa Coastal Pavilion (Illustrative Demo Concept)',
    dateTag: 'Starlit Evening',
    heroImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'aspect-[3/4]',
    curatedCount: 26,
    excerpt: 'When formal protocols dissolve into starlight, music, and unrestrained celebration — that is where the real stories ignite.',
    narrative: `Nightfall brings a distinct cinematic electricity. The glow of warm Edison bulbs, the blur of a swirling gown on the dance floor, the clinking of crystal flutes, and the explosion of sparklers against the midnight sky. Photographing after dark requires delicate low-light mastery: preserving the atmospheric intimacy without washing out the room with unflattering flashbulbs. We craft images that pull you straight back into the music.`,
    palette: ['#0E0E12', '#C6934B', '#5A4A35', '#E6DECE'],
    highlights: [
      'Low-light prime optics capturing atmospheric warmth and deep black tones',
      'Dynamic shutter-drag techniques delivering authentic motion on the sangeet floor',
      'Intimate cocktail reception portraiture with warm golden bokeh',
      'Sparkler exit and midnight finale documented with cinematic clarity'
    ],
    gallery: [
      {
        id: 'cad-1',
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85',
        alt: 'Golden sparklers glowing as couple walks through evening celebration',
        caption: 'Midnight sparkler walk under the open night sky.',
        orientation: 'portrait'
      },
      {
        id: 'cad-2',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85',
        alt: 'Banquet dinner tables glowing with candlelight and crystal chandeliers',
        caption: 'Candlelit tablescapes reflecting off antique glassware.',
        orientation: 'landscape'
      },
      {
        id: 'cad-3',
        url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=85',
        alt: 'Energetic celebration party on the dance floor',
        caption: 'Unbridled dance moves as the sangeet bass fills the room.',
        orientation: 'portrait'
      },
      {
        id: 'cad-4',
        url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=85',
        alt: 'Romantic couple slow dance at wedding reception',
        caption: 'The couple slow-dancing beneath cascading fairy lights.',
        orientation: 'landscape'
      },
      {
        id: 'cad-5',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
        alt: 'Couple laughing together with drinks in the reception lounge',
        caption: 'Stealing a quiet sip and a shared laugh between performances.',
        orientation: 'landscape'
      },
      {
        id: 'cad-6',
        url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=85',
        alt: 'Festive ambient fairy lights and celebration atmosphere',
        caption: 'Canopy of golden fairy lights illuminating the coastal terrace.',
        orientation: 'square'
      }
    ]
  }
];

export const FILM_CONCEPTS: FilmConcept[] = [
  {
    id: 'film-1',
    title: 'The Amber Palace Symphony',
    couple: 'Kabir & Ananya',
    location: 'Udaipur, Rajasthan',
    duration: '04:12',
    aspectRatio: '2.39:1 Anamorphic',
    thumbnail: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1600&q=85',
    videoUrl: '/videos/wedding-film-1.mp4',
    category: 'Cinematic Wedding Teaser & Feature Film',
    logline: 'An anamorphic visual ode to royal architecture, childhood promises, and a sunset varmala reflected on the serene waters of Lake Pichola.',
    directorNotes: 'Filmed on full-frame cinema glass at 24fps with rich warm color grading inspired by 35mm celluloid film stocks. Mastered in 4K HDR with bespoke orchestral scoring.',
    technicalSpecs: {
      resolution: '4K DCI (4096 × 1716)',
      camera: 'Sony FX6 & Venice Cinema Rig',
      framerate: '24.000 fps (True Cinema Standard)',
      audio: 'Bespoke Sitar & Cello Composition, 24-bit 48kHz'
    },
    chapters: [
      { time: '00:00', title: 'I. Morning Mist on Pichola' },
      { time: '01:10', title: 'II. The Adorning of the Bride' },
      { time: '02:05', title: 'III. Royal Baraat Procession' },
      { time: '03:15', title: 'IV. Sacred Pheras & Twilight' }
    ]
  },
  {
    id: 'film-2',
    title: 'Whispering Palms & Sacred Fire',
    couple: 'Dev & Rhea',
    location: 'Kumarakom Backwaters',
    duration: '03:38',
    aspectRatio: '16:9 DCI',
    thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85',
    videoUrl: '/videos/wedding-film-2.mp4',
    category: 'Intimate Documentary Film',
    logline: 'Gentle ripples across the water, classical carnatic strings, and an emotional father-daughter gaze that needed no spoken words.',
    directorNotes: 'Natural sound design led: water lapping against wooden houseboats, temple bells ringing in the distance, and the soft rustle of golden silk saris.',
    technicalSpecs: {
      resolution: '4K UHD (3840 × 2160)',
      camera: 'Canon C70 Dual Rig Cinema Line',
      framerate: '24.000 fps / 60fps Slow Motion Overlays',
      audio: 'Ambient Field Recording & Veena Duet'
    },
    chapters: [
      { time: '00:00', title: 'I. Arrival by Traditional Vallam' },
      { time: '01:00', title: 'II. Temple Courtyard Prayers' },
      { time: '02:12', title: 'III. The Thali & Saat Phere' },
      { time: '03:00', title: 'IV. Sunset Blessing by the River' }
    ]
  },
  {
    id: 'film-3',
    title: 'Echoes in the Courtyard',
    couple: 'Aarav & Meera',
    location: 'Heritage Haveli, Delhi NCR',
    duration: '02:50',
    aspectRatio: '2.35:1 Widescreen',
    thumbnail: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85',
    videoUrl: '/videos/wedding-film-3.mp4',
    category: 'High-Energy Sangeet & After-Dark Reel',
    logline: 'Staccato dhol beats, rhythmic swirls of raw silk lehengas, and a midnight sparkler send-off that lit up the ancient arches.',
    directorNotes: 'Dynamic handheld camera movements synchronized with Punjabi folk and contemporary percussion. High-contrast nocturnal grade with warm lantern highlights.',
    technicalSpecs: {
      resolution: '4K DCI Widescreen',
      camera: 'RED Komodo 6K Cinema Camera',
      framerate: '24fps / 120fps High Speed Action',
      audio: 'Live Acoustic Percussion & Vocals'
    },
    chapters: [
      { time: '00:00', title: 'I. The Twilight Gathering' },
      { time: '00:45', title: 'II. Dhol & Choreographed Performances' },
      { time: '01:50', title: 'III. The Couple’s First Dance' },
      { time: '02:20', title: 'IV. Midnight Sparklers Finale' }
    ]
  }
];
