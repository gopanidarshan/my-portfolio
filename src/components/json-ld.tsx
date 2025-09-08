import { getContent } from '@/lib/content'

const content = getContent()

export function PersonJsonLd() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.site.name,
    jobTitle: content.site.role,
    description: content.site.tagline,
    email: content.site.email,
    url: 'https://darshangopani.com',
    sameAs: [
      content.site.social.linkedin,
      content.site.social.github,
    ].filter(Boolean),
    knowsAbout: [
      'Data Engineering',
      'Analytics Engineering',
      'BigQuery',
      'SQL',
      'Data Modeling',
      'ETL',
      'ELT',
      'Automation',
      'Looker',
      'Stripe'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Data & Automation Engineer',
      description: 'Designing scalable data platforms and automating analytics workflows'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  )
}

/**
 * File: src/components/json-ld.tsx
 * Purpose: Add EducationalOrganization JSON-LD for institutions (if provided by education content).
 * Exports: `EducationalOrgJsonLd`
 * Consumes: `{ name, url?, sameAs? }` org object
 * Routes: N/A (component)
 * Notes: Keep payload minimal; safe to render multiple per page.
 */
export function EducationalOrgJsonLd({ org }: { org: { name: string; url?: string; sameAs?: string[] } }) {
  const educationalOrg = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: org.name,
    ...(org.url ? { url: org.url } : {}),
    ...(org.sameAs && org.sameAs.length > 0 ? { sameAs: org.sameAs } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrg) }}
    />
  )
}

export function ProjectJsonLd({ project }: { project: { title: string; summary: string; period: string; stack: string[] } }) {
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: {
      '@type': 'Person',
      name: content.site.name
    },
    dateCreated: project.period,
    keywords: project.stack,
    about: [
      'Data Engineering',
      'Analytics',
      'BigQuery',
      'Automation'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
    />
  )
}

export function BlogPostJsonLd({ post }: { post: { title: string; excerpt: string; date: string; tags: string[] } }) {
  const blogPostJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: content.site.name,
      url: 'https://darshangopani.com'
    },
    publisher: {
      '@type': 'Organization',
      name: content.site.name,
      url: 'https://darshangopani.com'
    },
    datePublished: post.date,
    keywords: post.tags,
    about: [
      'Data Engineering',
      'Analytics',
      'BigQuery',
      'Automation'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
    />
  )
}
