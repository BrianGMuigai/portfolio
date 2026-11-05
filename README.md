# Brian Muigai | Portfolio (v2)

Next.js 14 (App Router), TypeScript and Tailwind CSS. Simple, readable, light and dark (follows the visitor's system setting).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # preview the production build
```

## How it is organised

- **Home** is five sections: Home, About, Experience, Projects, Contact.
- **/projects** lists every project. A tag filter appears automatically once you have 4 or more.
- **/projects/<slug>** is the case study page for one project.

## Add a project

Open `src/data/projects.ts`, copy the existing object in the `projects` array, and change the fields:

```ts
{
  slug: "inventory-api",            // becomes /projects/inventory-api
  title: "Inventory API",
  summary: "One or two sentences for the card.",
  status: "In development",         // or "Completed", "Ongoing"...
  year: "2026",
  tags: ["Java", "Spring Boot"],    // used for the filter
  featured: true,                   // true = shown on the home page (first 4)
  repo: "https://github.com/...",   // optional
  live: "https://...",              // optional
  cover: { src: "/images/inventory.png", width: 1200, height: 700, alt: "..." }, // optional
  overview: ["Paragraph one.", "Paragraph two."],
  highlightsTitle: "Design decisions",
  highlights: [{ title: "...", body: "..." }],
  // gallery: [...]                 // optional tabbed images, see the hospital project
}
```

Put images in `public/` (for example `public/images/inventory.png`). That is all: the card, the list entry and the page are generated.
On the home page, 1 project shows as a wide card, 2 as image cards, and 3 or 4 as compact text cards so the section always fits one screen.

## Edit the rest

- Name, links, intro, about, skills and experience: `src/data/site.ts`
- Colors: the CSS variables at the top of `src/app/globals.css`
- Fonts are self-hosted (`@fontsource-variable`), so there are no Google Fonts requests.

## Deploy to Vercel

Push the folder to GitHub and import it at vercel.com/new. To replace the current `brianmuigai.vercel.app`,
connect the repo to that existing Vercel project (Settings, Git) and redeploy.
