# Prajawola Adhikari — Digital Marketing Portfolio

Multi-page Next.js portfolio designed for digital marketing recruiter impact.

## Routes (multi-page)

- `/` → Home
- `/about` → About Me (skills, experience, education, certifications)
- `/projects` → Projects
- `/contact` → Contact Me

## Replace placeholders

### 1) Profile photo
- File to replace: `public/profile-placeholder.svg`
- Keep the same filename **or** update the image path in `app/page.js`.
- Code location using this image: `app/page.js` (look for `profile-placeholder.svg` and the inline code comment).

### 2) Resume PDF
- File to replace: `public/resume.pdf`
- Keep the same filename/path so the resume button continues to work.
- Code location using this file: `app/page.js` and resume link uses `withBasePath('/resume.pdf')`.

### 3) Project content
- Update project placeholders in: `app/projects/page.js`.

## Key components

- Navbar component: `components/Navbar.jsx`
- Footer component: `components/Footer.jsx`
- Section heading component: `components/SectionTitle.jsx`

## GitHub Pages compatibility

This repo is configured for static export and GitHub Pages subpath hosting at:

`https://Prajowola.github.io/portfolio/`

- `output: 'export'`
- `images.unoptimized: true`
- production `basePath` + `assetPrefix` set for `/portfolio`

## Run locally

```bash
npm install
npm run dev
```

## Build static export

```bash
npm run build
```

Deploy the generated `out/` folder.
