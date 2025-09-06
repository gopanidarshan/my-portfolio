import { NextRequest } from 'next/server'
import { getContent } from '@/lib/content'

export const dynamic = 'force-static'

export async function GET(req: NextRequest) {
  const content = getContent()
  const origin = new URL(req.url).origin
  const baseUrl = origin

  const today = new Date().toISOString().split('T')[0]

  const staticRoutes = [
    '/',
    '/about',
    '/projects',
    '/experience',
    '/skills',
    '/blog',
    '/contact',
    '/privacy',
  ]

  const projectUrls = content.projects.items.map((p) => `/projects/${p.slug}`)

  const urls = [
    ...staticRoutes.map((path) => ({ path, lastmod: today })),
    ...projectUrls.map((path) => ({ path, lastmod: today })),
    ...content.blog.posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date }))
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(({ path, lastmod }) => {
      return `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    })
    .join('\n')}\n</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
