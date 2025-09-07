# Content Schema: `src/content/site-content.json`

This document explains the structure and purpose of every field in `src/content/site-content.json`. Edit this file to update copy, navigation, and page content without touching components.

## Top-Level Structure

- site: Global owner/branding metadata used across the site.
- nav: Primary navigation items (label + href) used in headers and sitemaps.
- home: Content blocks for the landing page (hero, stats, case study, plan, toolbox, CTA).
- footer: Footer sections including quick links, resources, social, and bottom bar text.
- about: Copy for the About page (title, summary paragraphs, focus areas).
- projects: Intro copy and an array of project case studies.
- experience: Intro copy and an array of roles/highlights for the timeline.
- skills: A dictionary of categories → arrays of skill strings.
- blog: Intro copy and an array of posts (slug, title, excerpt, date, tags).
- contact: Copy and form configuration for the Contact page.
- seo: Per‑page SEO title/description overrides by path.

## `site`

- name: Owner name (e.g., "Darshan Gopani").
- role: One‑line role/identity.
- tagline: Short summary used in hero/footer contexts.
- location: General location string.
- email: Contact email address.
- social: External profiles.
  - linkedin: URL string
  - github: URL string
  - x: URL string (formerly Twitter)
- meta: Site‑level SEO defaults.
  - title: `<title>` default and feed title
  - description: Meta description and RSS channel description

## `nav`

Array of objects used by navigation and sitemaps:
- label: Link text
- href: Absolute path on this site (e.g., "/projects")

## `home`

- hero: Landing hero block.
  - title: Headline text
  - subtitle: Supporting paragraph
  - primaryCta: { label, href }
  - secondaryCta: { label, href }
  - alt: Decorative alt text for visuals (if any)
- highlights: Array of short bullets below hero.
- statsStrip: Array of stat items displayed as a strip.
  - icon: Icon name (semantic hint; mapped to lucide-react in components)
  - text: Stat title
  - description: Short explanation
- signatureCaseStudy: Featured case study block.
  - eyebrow: Small label above title
  - title: Case study title
  - description: Summary paragraph
  - bullets: [{ label, text }]
  - cta: { label, href }
- hiringPlan: 30/60/90 plan content.
  - title, subtitle
  - cards: Array of { period, title, outcomes[], deliverables[] }
- toolbox: Tool listing block.
  - title, subtitle
  - tools: Array of { name, icon, description }
- ctaBanner: Bottom call‑to‑action block.
  - title, subtitle
  - primaryCta: { label, href }
  - secondaryCta: { label, href }

## `footer`

- brand: Owner identity in the footer.
  - name, role, tagline, location
- explore: Section of internal navigation links.
  - title
  - links: Array of { label, href }
- resources: Utility links (resume, RSS, sitemap, privacy, etc.).
  - title
  - links: Array of { label, href } (PDFs may be downloaded; some are external)
- connect: Social/contact profiles.
  - title
  - social: Array of { name, href, icon }
- bottomBar: Bottom strip text.
  - copyright: Template supports `{currentYear}` replacement
  - builtWith: Short tech credit line

## `about`

- title: Page title text
- summary: Array of paragraphs (strings)
- focusAreas: Array of strings; component maps known labels to icons

## `projects`

- intro: Short introduction sentence/paragraph
- items: Array of project entries rendered on index and detail pages.
  - slug: URL segment (must be unique; used at `/projects/[slug]`)
  - title: Project title
  - role: Your role
  - period: Time range (e.g., "2024–2025")
  - stack: Array of technologies
  - summary: High‑level overview
  - problem: Problem statement
  - approach: Key actions/methodology
  - outcome: Measurable results/impact
  - links: { demo, repo } (URLs or empty strings)

## `experience`

- intro: Short framing statement
- items: Array of roles/engagements
  - company: Org name
  - role: Your role
  - period: Time range
  - highlights: Array of highlight bullets

## `skills`

Object keyed by category names (e.g., "Data Engineering"). Each key maps to an array of skills (strings). Categories are displayed with representative icons.

## `blog`

- intro: Short framing statement
- posts: Array of simple blog metadata
  - slug: URL segment (e.g., "designing-entity-first-data-models")
  - title: Post title
  - excerpt: Short summary for cards and feed
  - date: ISO date string (YYYY-MM-DD)
  - tags: Array of strings

## `contact`

- title: Page title
- summary: Supporting paragraph
- form: Form configuration
  - fields: Array of enabled fields (name, email, message)
  - successMessage: Message shown after successful submit
  - errorMessage: Message for errors

## `seo`

- pages: Array of overrides applied per route
  - path: Absolute path (e.g., "/projects")
  - title: `<title>` for that path
  - description: Meta description for that path

---

## Editing Guidelines

- Keep slugs and paths URL‑safe (lowercase, hyphens, no spaces).
- Maintain unique `slug` values for projects and posts.
- Dates should use ISO format `YYYY-MM-DD` to keep sorting predictable.
- For external links, include the full `https://` URL. For internal links, prefer absolute paths like `/projects`.
- Avoid deleting required keys; if a field is unused, prefer setting to an empty string to keep types stable.
- Use consistent label casing and tone across sections.

### Examples

- Adding a new project:
```
{
  "slug": "new-analytics-pipeline",
  "title": "New Analytics Pipeline",
  "role": "Data Engineer",
  "period": "2025",
  "stack": ["BigQuery", "SQL"],
  "summary": "Short what/why of the work.",
  "problem": "What was broken or missing.",
  "approach": "How it was solved.",
  "outcome": "Measurable results.",
  "links": { "demo": "", "repo": "" }
}
```

- Adding a blog post:
```
{
  "slug": "useful-post-title",
  "title": "Useful Post Title",
  "excerpt": "One–two sentence summary.",
  "tags": ["BigQuery", "Modeling"],
  "date": "2025-09-15"
}
```

