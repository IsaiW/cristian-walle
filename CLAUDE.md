# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to GitHub Pages (gh-pages branch)
```

## Architecture

Single-page React portfolio site built with Vite, deployed to GitHub Pages at `https://isaiw.github.io/cristian-walle-portfolio/`.

**Routing:** Uses `HashRouter` (not `BrowserRouter`) — required for GitHub Pages static hosting compatibility. All routes use hash-based URLs.

**Vite base path:** `/cristian-walle-portfolio` — all asset paths must account for this prefix.

**Layout flow** (`App.jsx`): `Header → Hero → About → Skill → Work → Review → Contact → Footer`, all wrapped in `ReactLenis` for smooth scrolling.

**Animations:** GSAP + ScrollTrigger registered globally in `App.jsx`. Scroll-reveal animations target elements with the `.reveal-up` class via `gsap.utils.toArray('.reveal-up')`. New animatable sections should use this class.

**Styling:** Tailwind CSS with custom utility classes defined in `index.css`:
- `.headline-1`, `.headline-2`, `.title-1` — typography scale
- `.container`, `.section` — layout primitives
- `.img-box`, `.img-cover` — image wrappers
- `.btn`, `.label`, `.text-field` — UI components
- `.reveal-up` — scroll animation trigger class

**Icons:** Material Symbols Rounded loaded from Google Fonts (in `index.html`). Use `<span className="material-symbols-rounded">icon_name</span>`.

**Assets:** Static files live in `public/images/`. Skill SVG icons, project images, people photos, CV PDF, and the logo are all there.

**No pages directory** — the site is a single scrollable page; all "sections" are components in `src/components/`.


<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
