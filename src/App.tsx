import { useState } from 'react';
import { Header } from './components/common/Header';
import { Hero } from './components/sections/Hero';
import { EditorialIntro } from './components/sections/EditorialIntro';
import { SignatureStories } from './components/sections/SignatureStories';
import { CinematicFilm } from './components/sections/CinematicFilm';
import { OurApproach } from './components/sections/OurApproach';
import { EmotionalImageBreak } from './components/sections/EmotionalImageBreak';
import { ClientExperience } from './components/sections/ClientExperience';
import { ServicesSection } from './components/sections/ServicesSection';
import { BookingSection } from './components/sections/BookingSection';
import { Footer } from './components/sections/Footer';
import { Lightbox } from './components/common/Lightbox';
import { StoryModal } from './components/common/StoryModal';
import { FilmModal } from './components/common/FilmModal';
import { DemoPanel } from './components/common/DemoPanel';
import type { Story, PhotoItem } from './types';

export function App() {
  // Story Modal State
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState<PhotoItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxStoryTitle, setLightboxStoryTitle] = useState('');

  // Film Modal State
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [selectedFilmId, setSelectedFilmId] = useState('film-1');

  // Booking Form Preset
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Wedding Photography & Cinematography');

  // Handlers
  const handleOpenStory = (story: Story) => {
    setSelectedStory(story);
    setIsStoryModalOpen(true);
  };

  const handleCloseStory = () => {
    setIsStoryModalOpen(false);
  };

  const handleOpenLightbox = (photos: PhotoItem[], index: number, title: string) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
    setLightboxStoryTitle(title);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleOpenFilmShowcase = (filmId?: string) => {
    if (filmId) setSelectedFilmId(filmId);
    setFilmModalOpen(true);
  };

  const handleCloseFilmShowcase = () => {
    setFilmModalOpen(false);
  };

  const scrollToInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreset(serviceName);
    }
    const elem = document.getElementById('inquire');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStories = () => {
    const elem = document.getElementById('stories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToApproach = () => {
    const elem = document.getElementById('approach');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenInquiry={scrollToInquiry} />

      {/* Main Content Sections */}
      <main>
        {/* Section A — Immersive Hero */}
        <Hero
          onExploreStories={scrollToStories}
          onTalkWedding={() => scrollToInquiry()}
        />

        {/* Section B — Editorial Introduction */}
        <EditorialIntro onDiscoverApproach={scrollToApproach} />

        {/* Section C — Signature Wedding Stories (Visual Centerpiece) */}
        <SignatureStories
          onSelectStory={handleOpenStory}
          onOpenInquiry={scrollToInquiry}
        />

        {/* Section D — The Cinematic Film Moment */}
        <CinematicFilm onOpenFilmShowcase={handleOpenFilmShowcase} />

        {/* Section E — Our Approach */}
        <OurApproach />

        {/* Section F — Full-Width Emotional Image Break */}
        <EmotionalImageBreak />

        {/* Section G — Client Experience */}
        <ClientExperience />

        {/* Section H — Services */}
        <ServicesSection onSelectServiceForInquiry={scrollToInquiry} />

        {/* Section I — Booking Call To Action */}
        <BookingSection
          key={selectedServicePreset}
          selectedServicePreset={selectedServicePreset}
        />
      </main>

      {/* Section J — Premium Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <StoryModal
        story={selectedStory}
        isOpen={isStoryModalOpen}
        onClose={handleCloseStory}
        onOpenLightbox={handleOpenLightbox}
        onInquire={(category) => scrollToInquiry(category)}
      />

      <Lightbox
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
        storyTitle={lightboxStoryTitle}
      />

      <FilmModal
        isOpen={filmModalOpen}
        onClose={handleCloseFilmShowcase}
        initialFilmId={selectedFilmId}
        onInquire={(service) => scrollToInquiry(service)}
      />

      {/* Floating Client Demo Panel */}
      <DemoPanel />
    </div>
  );
}

export default App;
