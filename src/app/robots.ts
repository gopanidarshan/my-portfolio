/**
 * File: src/app/robots.ts
 * Purpose: Generate robots.txt via Next.js metadata route.
 * Exports: `default` (function returning `MetadataRoute.Robots`)
 * Consumes: Hardcoded rules; site URL in sitemap property
 * Routes: GET /robots.txt (text/plain via metadata route)
 * Notes: Allows all; disallows internal paths (`/api/`, `/_next/`).
 */
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://darshangopani.com/sitemap.xml',
  }
}
