# Prajawola Adhikari — Digital Marketing Portfolio

Premium personal brand portfolio built with **Next.js + React + Tailwind CSS + Framer Motion**.

## GitHub Pages compatibility audit (fixed)

This project is now configured for GitHub Pages static hosting:

- Uses Next.js static export (`output: 'export'`)
- Disables Next image optimization for static hosting (`images.unoptimized: true`)
- Applies `basePath` and `assetPrefix` automatically in GitHub Actions for repository subpath deployments
- Outputs static files to `out/` for Pages deployment
- Includes automated deployment workflow at `.github/workflows/deploy.yml`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static export locally

```bash
npm run build
```

Deploy the generated `out/` directory.

## GitHub Pages deployment (simple checklist)

1. Keep only **one** Pages workflow: `.github/workflows/deploy.yml`.
2. Push your code to `main`.
3. Go to **Settings → Pages** and set Source to **GitHub Actions**.
4. Open **Actions** tab and wait for `Deploy static portfolio to GitHub Pages` to finish.
5. Open your site URL from the deploy job output.


## Repo subpath behavior

If hosted at `https://<user>.github.io/<repo>/`, the build config auto-detects `<repo>` in Actions and sets the correct base path.

## Included sections

- Hero + recruiter-focused value proposition
- About
- Interactive Skills
- Experience
- Featured Projects + case-study structure
- Education
- Certifications
- Why Hire Me
- Personal brand quote
- Contact + footer

## 5 highest-impact recruiter upgrades implemented

1. Stronger hero conversion flow with clearer value proposition and CTA hierarchy.
2. Recruiter quick-scan section to accelerate hiring decisions.
3. Mobile-optimized nav and sticky "Hire Me" CTA for better conversion on phones.
4. SEO enhancement with structured data (`Person` JSON-LD).
5. Improved interaction polish (active nav tracking, richer hover states, visual hierarchy).

## If GitHub Actions says "Dependencies lock file is not found"

That means GitHub is running a different workflow (often an old auto-generated one) that uses `npm ci`.

This repo uses `npm install` in `.github/workflows/deploy.yml`, so:
- delete/disable any extra Pages workflow files,
- keep `deploy.yml` as the single source of truth.

## Why your screenshot still fails

Your run fails at the Node setup/cache step because `cache: npm` expects a lock file. If `package-lock.json` is missing, setup-node can fail before install.

This workflow now avoids npm cache lockfile requirements and uses Node 24.


## GitHub Pages subpath

This repo is configured for deployment under `/portfolio` in production (`basePath` and `assetPrefix`), which fixes CSS/asset loading on GitHub Pages project URLs.
