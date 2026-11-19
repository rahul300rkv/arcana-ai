# AstroFree — Free AI Tarot Readings & Vedic Numerology

**Live App:** [https://astrofree.vercel.app](https://astrofree.vercel.app)

AstroFree is a pre-rendered React + Vite + TanStack Router web application offering free 78-card AI tarot readings, Card of the Day meanings, and Vedic numerology (*Ank Shastra*) calculators with support for 13 Indian languages.

## Key Tools & Guides

- [Mulank & Bhagyank Calculator](https://astrofree.vercel.app/numerology) — Instant birth number, destiny number, ruling planet, friendly numbers, and 1–31 birth date lookup tables
- [Free Celtic Cross Tarot Reading (10-Card Spread)](https://astrofree.vercel.app/tarot/celtic-cross) — Full 10-position spread with upright and reversed interpretations
- [Three-Card Tarot Reading](https://astrofree.vercel.app/tarot/three-card) — Interactive Past · Present · Future, Situation · Challenge · Advice, and Mind · Body · Spirit pulls
- [Career Tarot Reading](https://astrofree.vercel.app/career-tarot-reading) — 3-card vocational reading and Life Path 1–9 career reference
- [Yes or No Tarot Oracle](https://astrofree.vercel.app/yes-no-tarot) — Instant single-card Yes / No / Maybe oracle pull
- [Major Arcana Tarot Cards & Meanings](https://astrofree.vercel.app/major-arcana-tarot-cards-meanings) — Complete guide to Keys 0–XXI and The Fool's Journey
- [Reversed Tarot Cards Guide](https://astrofree.vercel.app/what-do-reversed-tarot-cards-mean) — Practical framework for reading inverted cards
- [All 78 Tarot Card Meanings & Card of the Day](https://astrofree.vercel.app/tarot)

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, TanStack Router
- **SSG / SEO:** Build-time pre-rendering (`scripts/prerender.ts`) across all routes in `public/sitemap.xml` with per-route `<title>`, meta descriptions, canonical links, OpenGraph/Twitter tags, and Schema.org JSON-LD (`WebApplication`, `FAQPage`, `Article`)
- **Backend / API:** Express (`/api/ai/tarot`, `/api/ai/numerology`) powered by `@google/genai` with deterministic local fallback
- **Deployment:** Vercel (`vercel.json` clean-URL static serving + preview `X-Robots-Tag: noindex`)

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```
