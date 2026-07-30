# Cook Coatings Inc — Website

Next.js (App Router) rebuild of the Cook Coatings marketing site, migrated from the
single-file HTML prototype. Same design, same content, now split into real components
so it's easy to keep editing.

## Project structure

```
app/
  layout.js        Fonts, metadata, JSON-LD structured data, imports globals.css
  page.js           Assembles all the sections below, in order
  globals.css       All design tokens (CSS variables) and styles
  sitemap.js        Auto-generated /sitemap.xml
components/
  Header.js         Sticky/transparent header + mobile menu
  MobileActionBar.js  Sticky "Call Now / Get Free Estimate" bar (mobile only)
  Hero.js           Full-bleed hero photo + headline
  WhySprayFoam.js   10-point benefits grid
  Services.js       3 service cards (Maintenance Plans is "Recommended")
  Maintenance.js    Dedicated Roof Maintenance Plans section
  About.js          Cary Cook bio + credentials
  Clients.js        Client logo trust bar
  Projects.js       Project gallery (still has 6 placeholder photo slots)
  FAQ.js            Accordion FAQ (also feeds the FAQPage schema in layout.js)
  ContactCTA.js     Final call-to-action band
  Footer.js         Footer
  ScrollReveal.js   Fade-in-on-scroll behavior for .reveal elements
public/
  images/           All real photos and logos
  robots.txt
```

## Running locally / in a Codespace

This repo includes a `.devcontainer/devcontainer.json`, so if you open it in a GitHub
Codespace it will run `npm install` automatically and forward port 3000.

```bash
npm install
npm run dev
```

Then open the forwarded port 3000 (Codespaces will prompt you, or click "Open in Browser").

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.
4. Point your domain (cookcoatingsinc.com) at Vercel once you're ready to cut over from Wix.

## Still on the to-do list

- **Project gallery**: `components/Projects.js` still has 6 placeholder tiles. Follow the
  pattern in `Services.js` (swap `photo-slot` for a real `next/image` `<Image>`) once you
  have real project photos and captions.
- **og:image**: currently points at `/images/hero-roof.jpg` via `metadataBase` in
  `app/layout.js` — confirm this still looks right once deployed.
- **Contact form**: the "Get Free Estimate" buttons currently link to `tel:` / `mailto:`.
  If you want an actual on-site form, that's a good next step once you're comfortable in
  the codebase — happy to help build it (e.g. with Formspree, Resend, or a simple API route).
