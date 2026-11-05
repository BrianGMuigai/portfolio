# Brian Muigai | Portfolio
![CI](https://github.com/BrianGMuigai/portfolio/actions/workflows/ci.yml/badge.svg)

Personal portfolio of Brian Muigai, a backend engineer in Nairobi. Built with Next.js (App Router), TypeScript and Tailwind CSS.

**Live:** https://brianmuigai.vercel.app

## Design approach

Most developer portfolios are heavy on motion and light on information. This one is built for the people who actually read it: a recruiter who needs the facts in seconds, and an engineer who wants to see how you think.

- **Readable first.** One column, left-aligned text, a single accent colour, and the key facts (role, availability, CV) visible without scrolling.
- **Almost no motion.** A short fade-in on scroll and nothing else, so nothing competes with the content.
- **Light and dark.** Follows the visitor's system setting, with colours defined as CSS variables.
- **Accessible.** Semantic headings, a skip-to-content link, visible focus states, and reduced-motion support.
- **Fast.** Statically generated pages and self-hosted fonts, so there are no third-party font requests.

## Stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS
- `@fontsource-variable` for self-hosted fonts (Instrument Sans, JetBrains Mono)
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # preview the production build
```

Stop any running dev server before you run a build. Both use the `.next` folder.

## Project structure

```
src/
  app/               routes, layout, global styles, SEO files
  components/        Nav, View, ProjectCard, ApiCard, Reveal, Footer, ...
  data/
    site.ts          name, links, copy, skills, experience
    projects.ts      project case studies
public/              images, logo, CV
```

- **Home** has five sections: Home, About, Experience, Projects and Contact.
- **/projects** lists every project.
- **/projects/<slug>** is the case study page for one project.

## Edit the content

- Name, links, intro, About, skills, experience and contact text: `src/data/site.ts`
- Colours: the CSS variables at the top of `src/app/globals.css`
- Tab title, description and link previews: `metadata` in `src/app/layout.tsx`
- CV: put the PDF in `public/` as `brian-muigai-cv.pdf`. The nav links to it.

## Add a project

Open `src/data/projects.ts`, copy the existing object in the `projects` array, and change the fields:

```ts
{
  slug: "inventory-api",            // becomes /projects/inventory-api
  title: "Inventory API",
  summary: "One or two sentences for the card.",
  status: "In development",         // or "Completed", "Ongoing"...
  year: "2026",
  tags: ["Java", "Spring Boot"],
  featured: true,                   // true = shown on the home page
  repo: "https://github.com/...",   // optional
  live: "https://...",              // optional
  cover: { src: "/images/inventory.png", width: 1200, height: 700, alt: "..." }, // optional
  overview: ["Paragraph one.", "Paragraph two."],
  highlightsTitle: "Design decisions",
  highlights: [{ title: "...", body: "..." }],
}
```

Put images in `public/images/`. The card, the list entry and the case study page are generated from that one object.

## SEO

The site ships with page metadata, Open Graph and Twitter cards, JSON-LD structured data, a sitemap and `robots.txt`. Set the real address in `site.url` in `src/data/site.ts`, because the sitemap and link previews use it.

## Deploy

Push the repo to GitHub, import it at [vercel.com/new](https://vercel.com/new), and keep the default settings. Every push to the main branch redeploys the site.

## Contact

Brian Muigai · brianmuigai40@gmail.com · [LinkedIn](https://www.linkedin.com/in/brian-muigai/) · [GitHub](https://github.com/BrianGMuigai)
