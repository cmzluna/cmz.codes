---
name: Twilight Glass Developer Portfolio
colors:
  surface: '#fdf8ff'
  surface-dim: '#ddd8e3'
  surface-bright: '#fdf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2fd'
  surface-container: '#f1ecf7'
  surface-container-high: '#ebe6f1'
  surface-container-highest: '#e5e0eb'
  on-surface: '#1c1b22'
  on-surface-variant: '#494454'
  inverse-surface: '#312f37'
  inverse-on-surface: '#f4effa'
  outline: '#7a7485'
  outline-variant: '#cbc3d6'
  surface-tint: '#6c3fce'
  primary: '#693bca'
  on-primary: '#ffffff'
  primary-container: '#8257e5'
  on-primary-container: '#fff9ff'
  inverse-primary: '#d0bcff'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#006847'
  on-tertiary: '#ffffff'
  tertiary-container: '#00845a'
  on-tertiary-container: '#eefff2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5420b5'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#fdf8ff'
  on-background: '#1c1b22'
  surface-variant: '#e5e0eb'
  brand-dark: '#18101f'
  brand-plum: '#20152d'
  brand-plum-muted: '#382c47'
  brand-lavender: '#9d7ec7'
  brand-lavender-light: '#cfb9ea'
  brand-accent: '#8257e5'
  wood-surface: '#d2aa7b'
  wood-shadow: '#b08b5f'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 4.5rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.875rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.5'
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 0.53125rem
    fontWeight: '400'
    lineHeight: '1.38'
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-mono-xs:
    fontFamily: JetBrains Mono
    fontSize: 0.5625rem
    fontWeight: '600'
    lineHeight: '1.1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.375rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  container-max: 72rem
  gutter: 1.5rem
---

## Brand & Style

This design system blends **Cosmic Glassmorphism** with an engineering-focused, tactile aesthetic. Tailored for senior engineering portfolios and technical showcase experiences, it evokes precision, modern craft, and architectural rigor without feeling sterile. 

The aesthetic is characterized by:
- **Atmospheric Depth:** Soft, illuminated twilight backdrops (`#ece7f2`) paired with orbital decorative linework, layered frosted glass panels, and deep twilight accents.
- **Developer Craft:** Terminal-inspired badges, monospaced metadata, code blocks, and hardware skeuomorphic touches (workstation monitors, studio desk mat, and directional ambient lighting).
- **Tactile Harmony:** Translucent surfaces featuring dual-layer specular highlights (`inset 0 1px 1px rgba(255,255,255,0.9)`), soft purple border reflections, and floating elements with gentle hovering physics.

## Colors

The palette operates around a radiant lavender mist background (`#ece7f2`) contrasted against saturated plum typography and vibrant violet primary accents.

- **Primary (`#8257e5` / `#7c3aed`):** Drives visual focus, hero actions, active states, key branding moments, and hover transformations.
- **Secondary (`#0284c7`):** Represents web architecture, TypeScript annotations, and live status badges.
- **Tertiary (`#10b981`):** Indicates operational health, build success, deployment readiness, and green ecosystems.
- **Neutral (`#ece7f2` to `#20152d`):** Replaces pure monochrome whites and blacks with rich purple-tinted slates and plums.
- **Surface Accents:** Warm amber woods (`#d2aa7b`) provide grounding tactile anchors beneath screen monitors and floating panels.

## Typography

Typography employs **Plus Jakarta Sans** for natural warmth and ergonomic legibility, counter-balanced by **JetBrains Mono** for developer data, architecture labels, tags, and runtime metrics.

- **Headlines:** Use dense letter-spacing (`-0.02em` to `-0.03em`) and heavy weights (700 to 800) in `#1c102a`.
- **Body Copy:** Set in `#382c47` to maintain softer contrast against illuminated backgrounds.
- **Code & Metadata:** Rendered strictly in `JetBrains Mono` with fixed tracking, clear syntax color differentiation, and compact vertical rhythms for simulator and IDE interfaces.

## Layout & Spacing

The system is configured around a central **Fixed Max-Width Container** (`max-w-6xl` / `1152px`) bound to an 8pt base grid system.

- **Grid Systems:**
  - Standard sections use a 12-column flex/grid system with `gap-6` (24px) or `gap-8` (32px).
  - Feature cards and testimonials follow 3-column layouts on desktop (`lg:grid-cols-3`), collapsing to 2-column on tablet (`md:grid-cols-2`) and 1-column on mobile.
  - Workstation hero uses a 12-column asymmetric split (6 col copy + 6 col illustration).
- **Responsive Padding:** Sections employ generous vertical breathing rooms (`py-16` to `py-24`) to give floating background orbits and ambient lighting cones adequate spatial presence.

## Elevation & Depth

Visual hierarchy is maintained via multi-layered semi-transparent surfaces, specular edge rims, and radial colored shadows:

- **Level 1 (Subtle Badges):** `bg-white/80` with `border border-purple-300` and `shadow-sm`.
- **Level 2 (Glass Cards):** Translucent backdrop blur (`backdrop-filter: blur(16px) saturate(130%)`) atop `linear-gradient(145deg, rgba(255, 255, 255, 0.82) 0%, rgba(246, 241, 252, 0.72) 100%)`. Enhanced with crisp hairline borders `rgba(175, 142, 210, 0.38)` and multi-stop shadows: `0 10px 30px -8px rgba(95, 60, 130, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)`.
- **Level 3 (Interactive Hover):** Translate-Y `-4px` elevation with colored glow: `0 16px 36px -10px rgba(130, 87, 229, 0.22)`.
- **Level 4 (Floating Studio & Monitors):** Ultra-deep drop shadows `0 25px 50px -12px rgba(0,0,0,0.6)` paired with dark obsidian framing (`bg-slate-950`).
- **Conical Illumination:** Atmospheric top-down spotlight (`spotlight-beam`) simulating physical illumination with radial alpha falloff over workstations.

## Shapes

The design uses a balanced **Level 2 Roundedness** foundation:
- **Cards & Modals:** `rounded-2xl` (`1rem` / 16px) to `rounded-[22px]` creates friendly, polished glass enclosures.
- **Controls & Buttons:** Fully rounded `rounded-full` pills for primary actions, status indicators, and category filters.
- **Hardware & Windows:** Handheld simulator interfaces feature `rounded-[24px]` external radii and `rounded-[18px]` inner screens with camera pinhole details.
- **Avatars & Orbital Vectors:** Perfect geometric circles (`rounded-full`) mirroring the background cosmic orbit theme.

## Components

### 1. Buttons & CTAs
- **Primary Button:** `rounded-full`, saturated violet background (`bg-[#8257e5]`), white text, bold tracking, with ambient color cast `shadow-lg shadow-purple-600/25`. Scales `hover:scale-105` on interaction.
- **Secondary / Glass Button:** `rounded-full`, `bg-white/80` with border `border-2 border-purple-300`, text `#20152d`. Shifts border and text to `#8257e5` on hover.

### 2. Status Chips & Pill Badges
- Constructed with `rounded-full px-3.5 py-1 text-xs font-semibold`.
- Combines high-contrast pinging pulse dot (`animate-ping`) alongside clean monospaced or sans-serif contextual labels.

### 3. Glassmorphic Cards
- Utilizes `.glass-card` classes with dual inner specular shine.
- Standardized padding of `p-6` to `p-8`.
- Contains distinct header badge, bold headline, lead text, tag list, and an integrated bottom action footer separated by `border-t border-purple-200/80`.

### 4. Technical Workstation Simulator
- Dark IDE interface inside a simulated hardware monitor bezel (`bg-slate-950`).
- Includes mock macOS-style window controls (`rose`, `amber`, `emerald` dots), breadcrumb tags, dual-column syntax viewer, and responsive mobile preview.

### 5. Testimonial Containers
- Elevated glass panels featuring oversized translucent quotation watermarks (`text-7xl font-serif text-purple-200/60`).
- Footer block combines circular gradient avatar ring with user details in monospaced secondary subtitles.