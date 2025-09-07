/**
 * File: src/app/sitemap.ts
 * Purpose: Next.js metadata sitemap returning canonical URLs for static pages, projects, and blog posts.
 * Exports: `default` (function returning `MetadataRoute.Sitemap`)
 * Consumes: `getContent()` for nav links, projects, blog posts
 * Routes: GET /sitemap.xml (served by metadata route; application/xml)
 * Notes: Complements the explicit App Route at `/sitemap.xml/route.ts` for full control and caching.
 */
import { MetadataRoute } from 'next'
import { getContent } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const content = getContent()
  
  const baseUrl = 'https://darshangopani.com'
  
  // Static pages
  const staticPages = content.nav.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }))
  
  // Project pages
  const projectPages = content.projects.items.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Blog pages
  const blogPages = content.blog.posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...projectPages, ...blogPages]
}
