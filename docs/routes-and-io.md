# Routes and I/O

Overview of each page/route: purpose, inputs, and outputs/content types.

## Pages (App Router)

- / (Home)
  - Purpose: Landing page with hero, stats, featured case study, toolbox, CTA.
  - Inputs: `content.home.*` from `src/content/site-content.json`.
  - Output: HTML (static rendering).

- /about
  - Purpose: Background summary and focus areas.
  - Inputs: `content.about.*`.
  - Output: HTML (static).

- /projects
  - Purpose: Projects index with cards.
  - Inputs: `content.projects.items`, `content.projects.intro`.
  - Output: HTML (static).

- /projects/[slug]
  - Purpose: Project detail page.
  - Inputs: `getProjectBySlug(slug)` from content JSON.
  - Output: HTML (static; `notFound()` if unknown slug).

- /experience
  - Purpose: Timeline of roles/highlights.
  - Inputs: `content.experience.*`.
  - Output: HTML (static).

- /skills
  - Purpose: Categorized skills display with icons.
  - Inputs: `content.skills`.
  - Output: HTML (static).

- /blog
  - Purpose: Blog index grid.
  - Inputs: `content.blog.posts`, `content.blog.intro`.
  - Output: HTML (static; empty state when no posts).

- /blog/[slug]
  - Purpose: Blog post page.
  - Inputs: `getBlogPostBySlug(slug)` from content JSON.
  - Output: HTML (static; `notFound()` if unknown slug).

- /contact
  - Purpose: Contact info + contact form page.
  - Inputs: `content.contact`, `content.site`.
  - Output: HTML (static); form posts to API route.

- /privacy
  - Purpose: Static privacy policy.
  - Inputs: Static content within the page.
  - Output: HTML (static).

## App Routes (Handlers)

- /rss.xml (GET)
  - Purpose: Generate RSS 2.0 feed from `content.blog.posts`.
  - Inputs: `content.site.meta`, `content.blog.posts`.
  - Output: `application/xml` (RSS 2.0).
  - Caching: Static (`force-static`), cache headers set in response.

- /sitemap.xml (GET)
  - Purpose: Generate XML sitemap of static pages, projects, and blog posts.
  - Inputs: `content.nav`, `content.projects.items`, `content.blog.posts`.
  - Output: `application/xml`.
  - Caching: Static (`force-static`), cache headers set in response.

- /api/contact (POST)
  - Purpose: Handle contact form submissions.
  - Inputs: JSON body `{ name: string, email: string, message: string }`.
  - Output: `application/json` with success or error. 200 on success; 400 for Zod validation errors; 500 for unexpected errors.
  - Notes: TODO in handler to integrate email service and/or persistence.

## Metadata Routes

- /robots.txt
  - Purpose: Standard crawler rules.
  - Inputs: Inline rules in `src/app/robots.ts`.
  - Output: `text/plain` via Next metadata route.

- /sitemap.xml (metadata)
  - Purpose: Alternative sitemap via Next metadata route in `src/app/sitemap.ts`.
  - Inputs: `content.nav`, `content.projects.items`, `content.blog.posts`.
  - Output: XML. Complements the explicit App Route for finer control.

## Notes

- All pages use static data from `src/content/site-content.json` through helpers in `src/lib/content.ts`.
- `formatDate` is used for blog post dates.
- The site is designed to be statically rendered; no server DB calls are involved.
