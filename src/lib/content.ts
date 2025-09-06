import { Content } from '@/types/content'
import contentData from '@/content/site-content.json'

export const content: Content = contentData as Content

export function getContent() {
  return content
}

export function getProjectBySlug(slug: string) {
  return content.projects.items.find(project => project.slug === slug)
}

export function getBlogPostBySlug(slug: string) {
  return content.blog.posts.find(post => post.slug === slug)
}

export function getSEOPage(path: string) {
  return content.seo.pages.find(page => page.path === path)
}
