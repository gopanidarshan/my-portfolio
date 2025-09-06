import { NextRequest } from 'next/server'
import { getContent } from '@/lib/content'

export const dynamic = 'force-static'

export async function GET(req: NextRequest) {
  const content = getContent()
  const { site, blog } = content

  const origin = new URL(req.url).origin
  const siteUrl = origin

  const lastBuildDate = new Date().toUTCString()

  const items = [...blog.posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const link = `${siteUrl}/blog/${post.slug}`
      const pubDate = new Date(post.date).toUTCString()
      const description = post.excerpt || ''
      return `\n    <item>\n      <title><![CDATA[${post.title}]]></title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description><![CDATA[${description}]]></description>\n    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title><![CDATA[${site.meta.title}]]></title>\n    <link>${siteUrl}</link>\n    <description><![CDATA[${site.meta.description}]]></description>\n    <lastBuildDate>${lastBuildDate}</lastBuildDate>${items}\n  </channel>\n</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}

