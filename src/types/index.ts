export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  orientation?: 'portrait' | 'landscape' | 'square';
  aspectRatio?: string;
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
  aspectRatio: string; // for varied editorial grid layout
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
  shortDescription: string;
  fullDescription: string;
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
  phone: string;
  email?: string;
  date: string;
  location: string;
  celebrationType: string;
  message: string;
}
