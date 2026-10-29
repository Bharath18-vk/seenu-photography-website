import { useState } from 'react';
import { Header } from './components/common/Header';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { BrandStory } from './components/sections/BrandStory';
import { Portfolio } from './components/sections/Portfolio';
import { FeaturedStory } from './components/sections/FeaturedStory';
import { ServicesSection } from './components/sections/ServicesSection';
import { Experience } from './components/sections/Experience';
import { CinematicFilm } from './components/sections/CinematicFilm';
import { OurApproach } from './components/sections/OurApproach';
import { EmotionalImageBreak } from './components/sections/EmotionalImageBreak';
import { Testimonials } from './components/sections/Testimonials';
import { SocialGallery } from './components/sections/SocialGallery';
import { EnquirySection } from './components/sections/EnquirySection';
import { Footer } from './components/sections/Footer';
import { Lightbox } from './components/common/Lightbox';
import { StoryModal } from './components/common/StoryModal';
import { FilmModal } from './components/common/FilmModal';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { DemoPanel } from './components/common/DemoPanel';
import type { Story, PhotoItem } from './types';

export function App() {
  // Story Modal State (for full monograph albums)
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Lightbox State (for all clickable images across portfolio & albums)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState<PhotoItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxStoryTitle, setLightboxStoryTitle] = useState('');

  // Film Modal State (for 4K cinema console)
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [selectedFilmId, setSelectedFilmId] = useState('film-1');

  // Booking Form Preset Service
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>(
    'Wedding Photography & Cinematography'
  );

  // Modal Handlers
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

  // Smooth Scroll Navigation Helpers
  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreset(serviceName);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const elem = document.getElementById('our-work');
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
    <div className="relative min-h-screen bg-[#F8F5EF] text-[#191816] selection:bg-[#191816] selection:text-[#F8F5EF]">
      {/* 1. Transparent Floating Navigation */}
      <Header onOpenInquiry={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section — The Most Important Screen */}
        <Hero
          onExploreWork={scrollToWork}
          onTalkWedding={() => scrollToContact()}
        />

        {/* 3. Minimal Trust Strip (Verified Google 4.6★ / 62 reviews + 4 pillars) */}
        <TrustStrip />

        {/* 4. Brand Story — More Than Photographs */}
        <BrandStory onDiscoverApproach={scrollToApproach} />

        {/* 5. Portfolio — Stories We've Had the Joy of Capturing */}
        <Portfolio
          onOpenLightbox={handleOpenLightbox}
          onOpenInquiry={scrollToContact}
        />

        {/* 6. Featured Wedding Story — Heirloom Album Spread */}
        <FeaturedStory
          onSelectStory={handleOpenStory}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. Four Editorial Service Blocks */}
        <ServicesSection onSelectServiceForInquiry={scrollToContact} />

        {/* 8. The Experience — 3-Step Process */}
        <Experience />

        {/* 9. 4K Cinematic Wedding Film Showcase */}
        <CinematicFilm onOpenFilmShowcase={handleOpenFilmShowcase} />

        {/* 10. Our Approach — Observe, Preserve, Tell */}
        <OurApproach />

        {/* 11. Emotional Image Break */}
        <EmotionalImageBreak />

        {/* 12. Testimonials — Words of Trust (Editable Demo Placeholders) */}
        <Testimonials />

        {/* 13. Social Journal Gallery — Little Moments. Lasting Memories. */}
        <SocialGallery />

        {/* 14. High-Conversion Enquiry Form with WhatsApp Integration */}
        <EnquirySection
          key={selectedServicePreset}
          selectedServicePreset={selectedServicePreset}
        />
      </main>

      {/* 15. Premium Editorial Footer */}
      <Footer />

      {/* Modals & Fullscreen Overlays */}
      <StoryModal
        story={selectedStory}
        isOpen={isStoryModalOpen}
        onClose={handleCloseStory}
        onOpenLightbox={handleOpenLightbox}
        onInquire={(category) => scrollToContact(category)}
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
        onInquire={(service) => scrollToContact(service)}
      />

      {/* Floating Elements: WhatsApp Action on Right, Client Demo Info on Left */}
      <WhatsAppButton />
      <DemoPanel />
    </div>
  );
}

export default App;
