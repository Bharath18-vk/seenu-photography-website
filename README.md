# SS STUDIO — Luxury Wedding Photography & Cinematic Films
## Bespoke Luxury Website & Client Conversion Experience

Designed and engineered for **SS STUDIO** as a high-conversion editorial digital experience competing with international creative agencies and top destination studios.

---

### 🌟 Creative & Architectural Highlights

1. **Editorial Luxury Visual Identity**:
   - Palette: Warm ivory (`#FAF8F5`), soft champagne (`#F2EBE3`), deep charcoal (`#131316`), and selective black (`#0A0A0C`).
   - Typography: Editorial serif headlines (*Cormorant Garamond* / *Cinzel*) paired with clean modern sans-serif (*Plus Jakarta Sans*).
   - Asymmetric magazine spreads with intentional negative space, thin separators, and film grain accents.
   - Restrained, anti-template aesthetic avoiding cheap gradients, purple glow, or cookie-cutter cards.

2. **Complete 10-Section Homepage Experience**:
   - **Section A — Immersive Hero**: Full-viewport cinematic wedding photograph, SS STUDIO wordmark, dual CTAs ("EXPLORE OUR STORIES", "LET'S TALK ABOUT YOUR WEDDING"), and subtle scroll indicator.
   - **Section B — Editorial Introduction**: *"Not just how it looked. How it felt."*, asymmetric two-photo editorial composition, and approach link.
   - **Section C — Signature Wedding Stories**: Visual centerpiece featuring 4 distinct stories (*The Grand Celebration*, *The Intimate Ceremony*, *The Wedding Portraits*, *The Celebration After Dark*). Interactive category filters and click-to-open dedicated story views.
   - **Section D — Cinematic Film Moment**: *"Some moments deserve to move."* with an interactive 4K cinema console, chapter scrubber, optional acoustic ambient score preview, and production specifications.
   - **Section E — Our Guiding Approach**: Three principles (*01 Observe*, *02 Preserve*, *03 Tell*) presented in alternating editorial spreads with supporting archival photography.
   - **Section F — Full-Width Emotional Break**: Panoramic silhouette break (*"One day. A thousand memories. Yours, forever."*).
   - **Section G — Client Experience**: Large editorial quotation, authentic warm tone, interactive pagination, and clearly labeled sample demo client reflections.
   - **Section H — Proposed Studio Services**: 5 offerings (*Wedding Photography*, *Wedding Cinematography*, *Pre-Wedding Sessions*, *Engagement Photography*, *Destination Weddings*) with expandable coverage scopes and direct inquiry routing.
   - **Section I — Booking Conversion Engine**: *"Your wedding deserves to be remembered this way."* with complete form validation, instant WhatsApp message URL generation, mailto link preparation, and copy-to-clipboard functionality.
   - **Section J — Luxury Footer**: Wordmark, navigation, WhatsApp and Instagram placeholders, back-to-top button, and demo transparency note.

3. **Interactive Modals & Accessibility**:
   - **Dedicated Story View**: Full-screen modal with editorial excerpts, narrative, color palette swatches, curatorial highlights, and photo gallery.
   - **Photo Lightbox**: Full-screen viewer with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), photo counter (`01 / 06`), and captions.
   - **Film Showcase Modal**: Interactive console demonstrating 3 cinema reels with specs and storyboard chapters.
   - **Floating Client Demo Panel**: Non-intrusive floating control allowing the SS STUDIO owner to view feature summaries or hide the panel for presentations.

---

### ⚙️ Quick Start & Running

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The development server runs locally at: `http://localhost:5173/`

---

### 📝 Client Customization Guide

All business details, phone numbers, WhatsApp dispatch configuration, and social links are centralized in a single file:

📁 **`src/config/studio.ts`**

To customize:
1. Update `contact.whatsappNumber` to the owner's WhatsApp number (country code + number, e.g. `919876543210`).
2. Update `contact.displayPhone` for display formatting.
3. Update `contact.email` and `contact.instagramUrl`.
4. Update `contact.location` (e.g. `New Delhi, India • Available Worldwide`).
5. Replace portfolio photography with authentic high-resolution client imagery inside `src/data/portfolio.ts`.

---

### 🛡️ Compliance & Code Quality

- **Zero TypeScript Errors**: Built strictly with React 19, TypeScript 5.8+, Vite 8, and Tailwind CSS v4.
- **Zero Lint Warnings**: Audited with Oxlint and ESLint standards.
- **No Fabricated Claims**: Sample demo badges and clear client proposal transparency notes are included throughout.
