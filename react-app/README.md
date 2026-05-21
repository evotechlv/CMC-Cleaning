# C&M Clean Service — React

The original `index.html` site converted to a Vite + React app using CSS Modules.

## Getting started

```bash
npm install
npm run dev      # local dev server on http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  main.jsx                  # React entry
  App.jsx                   # composes all sections
  styles/global.css         # CSS reset, :root variables, fonts, .sr reveal
  hooks/
    useNavScroll.js         # toggles nav.solid after 80px scroll
    useReveal.js            # IntersectionObserver for .sr → .vis
  components/
    atoms/                  # primitives reused across sections
    nav/                    # Nav + MobileMenu
    sections/               # one component per page section
    FloatingWhatsApp.jsx    # fixed-bottom WA button
public/uploads/             # images + hero.mp4 (copy from ../uploads)
```

## Assets

The `public/uploads/` folder must contain the logo, photos, and `videos/hero.mp4`
from the original site. Copy them from the project root's `uploads/` folder:

```bash
cp -R ../uploads ./public/
```
