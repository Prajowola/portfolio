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

## GitHub Pages deployment options

### Recommended: GitHub Actions (included)

1. Push to `main`
2. In repository settings, set **Pages** source to **GitHub Actions**
3. Workflow builds and deploys `out/` automatically

### Manual deployment

- Build with `npm run build`
- Publish the `out/` directory with your preferred Pages publishing method

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
