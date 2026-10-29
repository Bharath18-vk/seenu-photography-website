/**
 * SS STUDIO — Central Studio Configuration
 * All business details, contact information, social links, and WhatsApp messaging
 * can be customized in this single file when transitioning from concept demo to production.
 */

export const STUDIO_CONFIG = {
  // Brand Identity
  brandName: 'SS STUDIO',
  legalName: 'SS Studio Wedding Photography & Cinematography',
  tagline: 'WEDDING PHOTOGRAPHY & CINEMATIC FILMS',
  shortBio: 'Editorial wedding photography and cinematic films for discerning couples across India and destination celebrations worldwide.',
  
  // Contact & Inquiries (Placeholder contact details for development & demo purposes)
  contact: {
    whatsappNumber: '919876543210', // Digits only with country code (e.g. 91 for India)
    displayPhone: '+91 98765 43210',
    email: 'hello@ssstudio.demo',
    location: 'India • Available Worldwide',
    instagramHandle: '@ssstudio.weddings',
    instagramUrl: 'https://instagram.com',
    turnaroundTime: 'We respond to inquiries within 24 hours',
  },

  // Proposed Studio Offerings (Client can confirm or adjust)
  stats: {
    experienceYears: '10+', // sample illustrative
    destinationWeddings: '120+', // sample illustrative
    satisfaction: '5.0 ★ Rating on Google',
  },

  // WhatsApp Message Generator
  createWhatsAppUrl: (details?: {
    name?: string;
    date?: string;
    location?: string;
    celebrationType?: string;
    message?: string;
  }) => {
    const phone = STUDIO_CONFIG.contact.whatsappNumber;
    let text = `Hello SS Studio! I am reaching out regarding wedding photography & cinematography.\n\n`;
    
    if (details?.name) {
      text += `• Name: ${details.name}\n`;
    }
    if (details?.date) {
      text += `• Wedding Date: ${details.date}\n`;
    }
    if (details?.location) {
      text += `• Venue / Location: ${details.location}\n`;
    }
    if (details?.celebrationType) {
      text += `• Celebration Type: ${details.celebrationType}\n`;
    }
    if (details?.message) {
      text += `• Details: ${details.message}\n`;
    }
    
    text += `\nI would love to check your availability and discuss our story.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  },

  // Email Mailto Generator
  createMailtoUrl: (details?: {
    name?: string;
    date?: string;
    location?: string;
    celebrationType?: string;
    message?: string;
  }) => {
    const to = STUDIO_CONFIG.contact.email;
    const subject = encodeURIComponent(
      `Wedding Inquiry — ${details?.name || 'Couple'} (${details?.date || 'Date TBD'})`
    );
    const body = encodeURIComponent(
      `Dear SS Studio Team,\n\n` +
      `We would love to inquire about your wedding photography and cinematic films.\n\n` +
      `Name: ${details?.name || ''}\n` +
      `Wedding Date: ${details?.date || ''}\n` +
      `Location / City: ${details?.location || ''}\n` +
      `Celebration Type: ${details?.celebrationType || ''}\n` +
      `Notes: ${details?.message || ''}\n\n` +
      `Looking forward to hearing from you,\n` +
      `${details?.name || 'Warm regards'}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }
};
