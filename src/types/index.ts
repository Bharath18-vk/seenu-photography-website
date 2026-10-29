export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category?: string;
  orientation?: 'portrait' | 'landscape' | 'square';
  aspectRatio?: string;
  photographerCredit?: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  location: string;
  dateTag: string;
  heroImage: string;
  aspectRatio: string;
  curatedCount: number;
  narrative: string;
  excerpt: string;
  palette: string[];
  highlights: string[];
  gallery: PhotoItem[];
}

export interface FilmConcept {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  aspectRatio: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  logline: string;
  directorNotes: string;
  technicalSpecs: {
    resolution: string;
    camera: string;
    framerate: string;
    audio: string;
  };
  chapters: { time: string; title: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  coveragePoints: string[];
  deliverables: string[];
  bestSuitedFor: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  couple: string;
  weddingLocation: string;
  celebrationType: string;
  highlightYear: string;
  photograph: string;
  isDemoSample: boolean;
}

export interface InquiryFormData {
  name: string;
  partnerName?: string;
  phone: string;
  email?: string;
  date: string;
  location: string;
  service: string;
  celebrationType?: string;
  message?: string;
  preferredContact?: 'whatsapp' | 'phone' | 'email';
}

export interface SocialPhotoItem {
  id: string;
  url: string;
  alt: string;
  caption: string;
  location?: string;
}
