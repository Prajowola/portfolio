# Prajowola Adhikari — Digital Marketing Portfolio

Premium personal brand portfolio built with **Next.js + React + Tailwind CSS + Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for GitHub Pages

This project is configured with static export in `next.config.mjs` (`output: 'export'`).

```bash
npm run build
```

Then deploy the generated `out/` directory to GitHub Pages.

## Contact form setup

The contact form posts to Formspree. Replace `FORM_ENDPOINT` in `app/contact/page.js` with your own
Formspree form URL (create a free form at formspree.io and copy the endpoint).

## Included sections

- Hero with animated stats and ambient motion
- About
- Interactive Skills
- Experience
- Projects — playable browser games built with HTML, CSS, and JavaScript
- Testimonials
- Education
- Certifications
- Working Contact form (Formspree)
- Dark / light mode toggle
- Scroll progress indicator
- Personal Brand quote
- Footer
