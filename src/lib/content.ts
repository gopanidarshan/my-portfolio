/**
 * File: src/lib/content.ts
 * Purpose: Content loader and helpers to access typed JSON content for pages/routes.
 * Exports: `content`, `getContent()`, `getProjectBySlug()`, `getBlogPostBySlug()`, `getSEOPage()`
 * Consumes: `src/content/site-content.json` (typed via `src/types/content.ts`)
 * Routes: N/A (library)
 * Notes: Centralizes content access to keep components simple and typed.
 */
import { Content } from '@/types/content'
import contentData from '@/content/site-content.json'

// NOTE: JSON module types may not perfectly match `Content` during edits.
// Casting through unknown avoids noisy structural-compatibility errors while
// keeping downstream usage typed. See docs/content-schema.md for the source of truth.
export const content: Content = contentData as unknown as Content

/**
 * Returns the full, typed site content object.
 */
export function getContent() {
  return content
}

/**
 * Lookup a project by slug.
 * @param slug Unique project slug from `/projects/[slug]`
 */
export function getProjectBySlug(slug: string) {
  return content.projects.items.find(project => project.slug === slug)
}

/**
 * Lookup a blog post by slug.
 * @param slug Unique blog slug from `/blog/[slug]`
 */
export function getBlogPostBySlug(slug: string) {
  return content.blog.posts.find(post => post.slug === slug)
}

/**
 * Lookup per-page SEO overrides by path.
 * @param path Absolute route path (e.g., "/projects")
 */
export function getSEOPage(path: string) {
  return content.seo.pages.find(page => page.path === path)
}
