# Metro Interior Decorators

## Current website

The latest reviewed website is in `dist/`. It includes dedicated Home, About,
Services, Projects and Contact pages, the transparent Metro logo, and a responsive
consultation dialog with validation, review/edit and demo submission.

Run locally from the repository root:

```bash
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173/. No build or package installation is required for this version.
Consultation submissions are demo-only: no customer details are sent or stored.
Phone and email destinations have not yet been configured.

The `.openai/hosting.json` manifest identifies the existing Sites project.
Syncing to GitHub does not itself update the live Sites deployment.

## Earlier Next.js implementation

The existing `app/`, `public/`, package configuration and `docs/` are preserved
from the earlier GitHub version. The instructions below refer to that implementation,
not the latest static website in `dist/`.

### Original project notes

Premium website for Metro Interior Decorators.

## Stack
- Next.js 15
- React 19
- TypeScript
- Hand-crafted responsive CSS

## Development
```bash
npm install
npm run dev
```

## Design direction
Dark cinematic luxury with restrained Metro red, warm ivory, bronze accents, editorial Bodoni typography and image-first storytelling.

## Build plan
1. Home page
2. Projects index
3. Project detail template
4. Services
5. Studio/About
6. Journal
7. Contact / consultation

## Repository assets
The Metro logo is versioned as a lightweight SVG based on the supplied brand mark. Interior photography currently uses high-resolution editorial placeholders and can be replaced with the client's real portfolio page by page.
