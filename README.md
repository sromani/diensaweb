# Capture Chess Landing Page

Premium dark-themed landing page for **Capture Chess**, built with React, Vite, and Tailwind CSS. Optimized for static deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3
- Static site (no backend)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output directory: `dist/`

## Deploy to Cloudflare

### Option A — Cloudflare Pages (recommended, simplest)

1. Connect the GitHub repo in **Workers & Pages → Create → Pages**.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** leave empty (do not use `wrangler deploy`)
3. Deploy.

### Option B — Workers static assets

If you use **Workers Builds** with `wrangler deploy`:

- `wrangler.jsonc` sets `not_found_handling: "none"` (no auto `_redirects`).
- `public/.assetsignore` excludes `_redirects` from upload.
- `/privacy` is a static file at `dist/privacy/index.html`.

In the Cloudflare dashboard, disable any **SPA / single-page-application** override for the `diensaweb` worker if deploy still fails.

```bash
npm run build
npx wrangler deploy
```

## Before Launch Checklist

- [ ] Update `APP_STORE_URL` in `src/data/content.ts` with your real App Store link
- [ ] Update `CONTACT_EMAIL` and wire the contact form (e.g. Formspree, Cloudflare Workers)
- [ ] Replace `https://capturechess.com/` in `index.html` OG tags with your production domain
- [ ] Set **Privacy Policy URL** in App Store Connect: `https://capturechess.com/privacy`
- [ ] Replace screenshot SVGs with real app captures from VISIONCHESS (`docs/screenshots/`)
- [ ] Regenerate favicons from VISIONCHESS: `cd ../VISIONCHESS/apps/mobile && npm run generate:branding`

## Assets from VISIONCHESS

Branding icons and color tokens are sourced from the VisionChess monorepo:

- Theme colors: `#09090b` background, `#4ade80` accent
- Icons: `public/favicon-32.png`, `apple-touch-icon.png`, `og-image.png`
- Mock boards: `public/screenshots/scan-result.svg` (overlay detection)

## SEO

Included in `index.html`:

- Meta description
- Open Graph tags
- Twitter card tags
- JSON-LD structured data (WebSite, SoftwareApplication, FAQPage)
- Favicon + Apple touch icon
