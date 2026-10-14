# Shane Mendoza | Portfolio

Personal portfolio site of Shane Mendoza, a Computer Science student at Holy Angel University working across AI/ML, data analytics and UI/UX design.

**Live site:** https://roki-a.github.io/Portfolio/

## Built with

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Plain CSS (no UI framework)
- GitHub Actions + GitHub Pages for deployment

## Features

- Single-page layout with sections for About, Projects, Experience, Education, Training and Skills
- Filterable project cards (All, AI/ML, UI/UX, Databases, Web)
- Responsive layout with a mobile menu that closes on link click or the Escape key
- Accessible markup: labelled sections, ARIA states on the menu and filter buttons, visible focus styles

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
.
├── .github/workflows/deploy.yml   # Auto-deploy to GitHub Pages
├── public/assets/me.jpg           # Profile photo
├── src/
│   ├── components/                # One component per page section
│   ├── data/content.js            # All text content: projects, experience, skills, etc.
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
└── vite.config.js
```

## Updating the content

Almost everything on the site comes from `src/data/content.js`. To add a project, certification or skill, add an entry there and the matching component renders it.

A project entry looks like this:

```js
{
  title: 'My New Project',
  kind: 'School project, 2026',
  cats: ['web'],            // filter categories: ai, uiux, db, web
  className: 'gold',        // optional: 'gold' or 'big'
  body: 'What it is and what I did.',
  tags: ['React', 'CSS'],
  href: 'https://github.com/roki-a/my-new-project', // optional
}
```

## Deployment

Pushing to `main` triggers the workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

If the repo is not named `roki-a.github.io`, the site is served from a subfolder. The build already uses relative paths (`base: './'` in `vite.config.js`), so it works either way.

## Contact

- Email: mendozashane0820@gmail.com
- LinkedIn: https://www.linkedin.com/in/shane-mendoza-70012529b/
- GitHub: https://github.com/roki-a

&copy; Shane S. Mendoza
