/**
 * SEENU PHOTOGRAPHY — Central Studio Configuration
 * 
 * All business details, verified ratings, contact information, social links,
 * and WhatsApp messaging formats are centralized in this single file.
 * 
 * Before public launch, update the configuration flags and values below with
 * verified client credentials.
 */

export const SITE_CONFIG = {
  // Brand Identity
  brandName: 'Seenu Photography',
  legalName: 'Seenu Photography & Cinematography',
  tagline: 'WEDDING PHOTOGRAPHY & CINEMATIC FILMS',
  shortBio:
    'Honest emotions. Timeless frames. Wedding stories that stay with you forever.',
  editorialPhilosophy:
    'The quiet glances, the joyful chaos, the happy tears, and the moments you never planned. We believe the most meaningful photographs are the ones that let you feel it all over again.',

  // Verified Business Rating (Supplied in client outreach context)
  // NOTE: Must be rechecked and reconfirmed before final public launch.
  rating: {
    score: 4.6,
    maxScore: 5.0,
    reviewCount: 62,
    platform: 'Google Reviews',
    verifiedNote:
      'Verified rating of 4.6/5 and 62 reviews as supplied in client outreach context. Must be rechecked before final public launch.',
    needsRecheckBeforeLaunch: true,
  },

  // Contact & Social Information (Editable Placeholders for Client Demo)
  contact: {
    // Replace with Seenu Photography's actual 10 or 12 digit WhatsApp number (country code + number, e.g. '919876543210')
    whatsappNumber: '910000000000',
    displayPhone: '+91 [Client WhatsApp Number]',
    isWhatsAppConfigured: false, // Set to true once verified client number is entered

    email: 'contact@seenuphotography.demo',
    isEmailConfigured: false,

    location: 'India • Available for Travel Worldwide',

    // Client's Instagram Profile (Keep unlinked or set to false until handle is verified)
    instagramHandle: '@seenuphotography',
    instagramUrl: '', // Add verified URL e.g. 'https://instagram.com/seenuphotography'
    isInstagramConfigured: false,
  },

  // WhatsApp Message Generator — Formatted strictly to client conversion requirements
  createWhatsAppUrl: (details?: {
    name?: string;
    partnerName?: string;
    date?: string;
    location?: string;
    service?: string;
    message?: string;
  }) => {
    const phone = SITE_CONFIG.contact.whatsappNumber;

    if (!details || (!details.name && !details.service)) {
      const defaultText = `Hello Seenu Photography,\n\nI am visiting your website and would love to check your availability and discuss our upcoming wedding celebration.`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
    }

    // Specific Service Inquiry format
    if (!details.name && details.service) {
      const serviceText = `Hello Seenu Photography,\n\nI would like to discuss your ${details.service} services for our upcoming celebration. Please share your availability and package details.`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(serviceText)}`;
    }

    // Full Lead Form Inquiry format (Strict specification from Master Prompt)
    let text = `Hello Seenu Photography,\n\nI would like to enquire about your photography services.\n\n`;
    text += `Name: ${details.name || 'Not provided'}\n`;
    if (details.partnerName && details.partnerName.trim()) {
      text += `Partner's Name: ${details.partnerName.trim()}\n`;
    }
    text += `Wedding Date: ${details.date || 'TBD'}\n`;
    text += `Event Location: ${details.location || 'TBD'}\n`;
    text += `Service: ${details.service || 'Wedding Photography & Films'}\n`;
    if (details.message && details.message.trim()) {
      text += `Message: ${details.message.trim()}\n`;
    }
    text += `\nPlease let me know the next steps.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  },

  // Email Mailto Generator
  createMailtoUrl: (details?: {
    name?: string;
    partnerName?: string;
    date?: string;
    location?: string;
    service?: string;
    message?: string;
  }) => {
    const to = SITE_CONFIG.contact.email;
    const coupleText = details?.partnerName
      ? `${details.name} & ${details.partnerName}`
      : details?.name || 'Couple';
    const subject = encodeURIComponent(
      `Wedding Inquiry — ${coupleText} (${details?.date || 'Date TBD'})`
    );
    const body = encodeURIComponent(
      `Dear Seenu Photography Team,\n\n` +
        `I would like to enquire about your wedding photography services.\n\n` +
        `Name: ${details?.name || ''}\n` +
        (details?.partnerName ? `Partner's Name: ${details.partnerName}\n` : '') +
        `Wedding Date: ${details?.date || ''}\n` +
        `Event Location: ${details?.location || ''}\n` +
        `Service: ${details?.service || 'Wedding Photography'}\n` +
        `Message: ${details?.message || ''}\n\n` +
        `Please let us know your availability and next steps.\n\n` +
        `Warm regards,\n` +
        `${details?.name || 'The Couple'}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  },
};

// Backwards compatibility alias
export const STUDIO_CONFIG = SITE_CONFIG;
