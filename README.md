# Seenu Photography — Wedding Photography & Cinematic Films
## Luxury Editorial Website & High-Conversion Client Experience

Designed and engineered for **Seenu Photography** as an editorial digital portfolio and high-conversion client acquisition platform.

---

### 🌟 Creative & Architectural Highlights

1. **Editorial Luxury Visual Identity**:
   - Palette: Warm ivory (`#F8F5EF`), deep charcoal (`#191816`), muted champagne (`#C7A77B`), soft beige (`#E9E1D6`), and pure white (`#FFFFFF`).
   - Typography: Editorial serif display headlines (*Cormorant Garamond*) paired with clean modern sans-serif (*Plus Jakarta Sans* / *Inter*).
   - Generous negative space, asymmetric editorial spreads, fine borders, and an anti-template luxury aesthetic (no generic AI glassmorphism, harsh gradients, or cookie-cutter cards).

2. **Complete 12-Section Homepage Architecture**:
   - **Hero Section**: Full-screen cinematic wedding photograph with subtle vignette, Seenu Photography wordmark, navigation (*Home, Our Work, Stories, About, Contact*), direct *"Enquire on WhatsApp"* header action, exact headline (*"Your Story. Beautifully Remembered."*), supporting text, dual CTAs (*"Explore Our Work"* / *"Let's Talk About Your Wedding"*), and animated scroll indicator.
   - **Trust Strip**: Minimalist brand pillars (*Wedding Photography • Candid Moments • Pre-Wedding Stories • Wedding Films*) + verified Google rating (**4.6★ / 62 reviews**) with pre-launch re-verification reminder.
   - **Brand Story (Introduction)**: Eyebrow *"MORE THAN PHOTOGRAPHS"*, headline *"Every wedding has a story worth holding on to."*, asymmetric overlapping photo collage with detail captions, and *"Discover Our Approach"* link.
   - **Portfolio Showcase**: Section heading *"Stories We've Had the Joy of Capturing"*, 5 category filters (*All, Wedding Stories, Candid Moments, Pre-Wedding, Engagements, Wedding Films*), asymmetric grid, hover labels, and keyboard-accessible photo Lightbox.
   - **Featured Wedding Story**: Heirloom album spread (*"A day filled with moments that became forever."*) with editable couple/location/date metadata and an interactive *"Explore the Story"* modal gallery.
   - **Editorial Services**: 4 numbered blocks (01 Wedding Photography, 02 Candid Photography, 03 Pre-Wedding Photography, 04 Wedding Cinematography) with expandable scope drawers, and contextual *"Discuss Your Requirements"* WhatsApp buttons.
   - **The Experience**: 3-step process (**01. Tell Us Your Story**, **02. Let's Plan the Details**, **03. Relive Every Moment**) with oversized serif numerals.
   - **Cinematic Film Showcase**: Embedded local 1080p MP4 film preview (`wedding-film-1.mp4`) with live play/mute toggle and a *"Watch Full Film"* modal.
   - **Our Approach**: Guiding philosophy (*Observe, Preserve, Tell*) presented in alternating editorial spreads.
   - **Testimonials**: Editorial client reflections with explicit `[Demo Placeholder]` badges to ensure full transparency.
   - **Social Gallery**: Heading *"Little Moments. Lasting Memories."* with a 6-frame editorial grid linking to the configurable Instagram handle.
   - **High-Converting Enquiry Form**: Responsive lead capture with instant WhatsApp message generation formatted to the exact client request template.
   - **Editorial Footer**: Wordmark, brand narrative, quick links, dynamic copyright year, and a smooth *"Back to Top"* button.

3. **Interactive Modals & Accessibility**:
   - **Photo Lightbox**: Full-screen viewer with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), photo counter, and captions.
   - **Story Modal**: Dedicated album view with high-res photographs, narrative, and venue metadata.
   - **Film Showcase Modal**: Interactive cinema console with live MP4 playback and story chapters.
   - **Floating WhatsApp Quick-Action**: Persistent, non-intrusive floating button with tooltip and subtle pulse.
   - **Client Demo Panel**: Non-intrusive floating control allowing the studio owner to review implemented features or hide the panel for client presentations.

---

### ⚙️ Quick Start & Running

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Run linter
npm run lint

# 5. Preview production build
npm run preview
```

The development server runs locally at: `http://localhost:5174/`

---

### 📝 Client Configuration Guide

All studio settings, phone numbers, WhatsApp dispatch configuration, and social links are centralized in:

📁 **`src/config/site.ts`** (also mirrored in `src/config/studio.ts`)

To customize for the client:
1. Update `CLIENT_WHATSAPP_NUMBER` to the owner's WhatsApp number (e.g., `919876543210`).
2. Update `STUDIO_PHONE_DISPLAY` for formatted header/footer display.
3. Update `STUDIO_EMAIL` and `INSTAGRAM_URL`.
4. Update `GOOGLE_RATING` and `GOOGLE_REVIEW_COUNT` after the final pre-launch check.
5. Replace portfolio photography with authentic high-resolution client imagery inside `src/data/portfolio.ts`.

---

### 🛡️ Compliance & Code Quality

- **Zero TypeScript Errors**: Built strictly with React 19, TypeScript 5.8+, Vite 8, and Tailwind CSS v4.
- **Zero Lint Warnings**: Audited with Oxlint and ESLint standards.
- **100% Local Media Assets**: 13 high-resolution wedding images and 3 video files bundled locally in `/public` for instant 0ms offline demo resilience and zero broken external links.
- **No Fabricated Claims**: Demo badges and clear client proposal transparency notes are included throughout.
