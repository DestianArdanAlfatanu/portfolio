# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: production build to `dist/`
- `npm run preview`: serve the built `dist/`

There is no test runner, linter, or TypeScript. `npm run build` is the only correctness check, and it fails on invalid JSON in `src/data/`.

## Stack

React 19 + Vite 5, plain JSX (no TS). Routing uses `react-router` v7, imported from `react-router` and not `react-router-dom`. Tailwind CSS v4 runs through `@tailwindcss/vite`, so there is no `tailwind.config.js`. Animation uses Framer Motion, and icons come from `lucide-react`. The site is deployed on Vercel, where `vercel.json` rewrites every path to `index.html` so client-side routes work on refresh.

The `@/` alias maps to `src/` (set in `vite.config.js`). `vite.config.js` also defines manual chunks for react, the router and framer-motion.

## Architecture

**Content is data-driven.** Portfolio content (projects, experience, certificates, skills, social links) lives in `src/data/*.json`. Components read it through the async getters in `src/data/dataService.js` (`getProjects`, `getProjectBySlug`, `getFeaturedProjects`, `getRelatedProjects`, etc.). The getters are `async` even though they only return local JSON, so a real API can replace them later; consumers `await` them inside effects. Exception: `SocialLinks.jsx` imports `social.json` directly.
- Most content edits are JSON edits, not component changes.
- The JSON files must stay strict JSON. `/* */` or `//` comments break the import and the build. To hide an entry, remove it or add a flag the UI filters on.
- Project entries are keyed by `slug`, which drives the `/projects/:slug` route. `relatedProjects` holds an array of other projects' numeric `id`s, and `featured: true` puts a project in the Home page's featured section. The `thumbnail` and `screenshots` fields hold paths to files in `public/`. A screenshot can be either a string or an object with an `image` field.
- `getExperience` sorts by `id` descending, so a higher id appears first.

**Routing/layout.** `src/App.jsx` defines all routes and lazy-loads every page from `src/pages/` behind `Suspense`. The global shell (Navbar, Footer, BackToTop, ScrollToTop, CommandPalette) is mounted once in `App.jsx`. Nav entries are defined in `navLinks` in `src/lib/utils.js`. If you add a page, register it both in `App.jsx` and in `navLinks`, and check whether `CommandPalette` should list it too.

**Component layers** (`src/components/`):
- `layout/`: the app shell
- `sections/`: Home-page blocks, each typically a preview of a full page
- `cards/`: item renderers for each data type
- `shared/`: search, filter, timeline, command palette
- `ui/`: primitives (Button, badges, SectionTitle, AnimatedContainer)

**Styling.** `Design.md` is the design spec ("Retro Web": single navy theme with a grid background, Pixelify Sans display headings, Silkscreen for labels/buttons, Geist Mono body, cream windows with purple title bars, colored section bands). Every page uses it.
- **Tokens:** colors are plain Tailwind tokens in `@theme` in `src/styles/globals.css`: `navy`, `navy-deep`, `navy-surface`, `cream`, `ink`, `muted`, `orange`, `teal`, `purple`, `purple-deep`, `yellow`, `shade`. Shadows are `shadow-px`, `shadow-px-sm`, `shadow-px-lg`.
- **Contrast rules:** follow the ones in the comment at the top of `globals.css`. Notably: ink text on cream/orange/teal, never teal/orange text on cream, and cream/yellow text on purple.
- **`.on-light`:** add it to cream/orange sections so the focus ring switches from yellow to ink.
- **Shared retro pieces:**
  - `ui/WindowFrame` (title-bar window; `tone`, `titleTone`, `controls`)
  - `ui/RetroHeading` (label chip + display title)
  - `ui/Button` (variants `primary`, `secondary`, `outline`, `orange`, `dark`, `ghost`)
  - `layout/PageHeader` (navy grid band with the page h1, used by every inner page)
  - `cards/ProjectCard` + `cards/ProjectThumbnail` (fallback screen for projects without a thumbnail), `cards/ExperienceCard` + `shared/Timeline` (`compact` on Home), `cards/CertificateCard`, `cards/ContactCard`, `shared/FilterBar` (OS tabs for cream panels), `shared/SearchBar` (inset input), `ui/TechBadge` (`tone="light"` on cream, `"dark"` on navy), `ui/CategoryBadge`
  - `ui/PixelIcon`: wraps `pixelarticons`. Import each SVG with `?raw` and register it in the component's map. There is no LinkedIn glyph, so LinkedIn uses lucide.
  - CSS helpers `.press`, `.bg-grid`, `.bg-zigzag`, `.bg-dither`, `.scanlines`, `.text-shadow-px`, `.clip-star`, `.clip-burst`, `.h-display`
- **Images in grids:** an `<img>` whose height is a percentage (e.g. `max-h-full`) inside a grid item can force horizontal overflow on mobile. Give the grid explicit `grid-cols-1` and the item `min-w-0`, and cap the image with `max-w-full`.
- **Utilities:** merge class names with `cn()` from `src/lib/utils.js` (clsx + tailwind-merge). Use the shared Framer Motion presets in `animations` from the same file. `App.jsx` wraps the app in `MotionConfig reducedMotion="user"`.

**Static assets.** Images and PDFs live in `public/` and are referenced by root-absolute paths (e.g. `/cv.pdf`, which the Hero, ContactCTA and Contact pages link to for download). The Hero portrait is `public/destian-pixel.png`, a 160x120 dithered image rendered with `image-rendering: pixelated`. It is generated from the original photo in `photos/destian.jpg`, which is gitignored and deliberately kept out of `public/` so it is not deployed. `dist/` is gitignored build output, so don't edit it.
