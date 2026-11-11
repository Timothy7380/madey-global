# Madey Global Travel Solutions — website v2

Redesign of madeyglobal.com in the style of the "trvvrat" travel landing page, using Madey's own logo colours (purple → sky blue). React 18 + Vite + React Router.

## Run it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Deploy

- **GitHub Pages (current):** every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to `https://<user>.github.io/<repo>/`. The build sets `BASE_PATH` to the repo name automatically.
- **Vercel:** import the repo. `vercel.json` already rewrites all routes to `index.html`.
- **Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles routing.
- **cPanel / other static hosting:** upload the contents of `dist/`, then add a rewrite so `/about`, `/services` and the other routes serve `index.html`.

## Where things live

| What | File |
|---|---|
| All text, contact details, services, testimonials, gallery photos, FAQs | `src/data.js` |
| Colours, fonts, spacing (design tokens at the top) | `src/styles.css` |
| Header (live Lagos clock, nav, WhatsApp button) | `src/components/Header.jsx` |
| Footer ("ask an expert" box opens WhatsApp) | `src/components/Footer.jsx` |
| Pages | `src/pages/Home.jsx`, `About.jsx`, `Services.jsx`, `Gallery.jsx`, `Contact.jsx` |

To change most content, edit `src/data.js`. Unsplash images are referenced by photo ID through the `img()` helper. Gallery photos use the client's existing Cloudinary links.

## Contact form

The site has no backend. **Send message** opens the visitor's email app with the enquiry filled in and addressed to info@madeyglobal.com. **Send on WhatsApp** opens a chat with the same details. To receive submissions directly, swap the `submit` function in `src/pages/Contact.jsx` for Formspree, EmailJS or your own API.
