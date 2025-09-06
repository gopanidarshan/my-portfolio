import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { getContent } from '@/lib/content'

const content = getContent()

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: content.site.social.github,
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: content.site.social.linkedin,
      icon: Linkedin
    },
    {
      name: 'Email',
      href: `mailto:${content.site.email}`,
      icon: Mail
    }
  ]

  if (content.site.social.x) {
    socialLinks.push({
      name: 'X (Twitter)',
      href: content.site.social.x,
      icon: Twitter
    })
  }

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {content.site.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.site.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-brand transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {content.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${content.site.email}`}
                className="block text-sm text-muted-foreground hover:text-brand transition-colors"
              >
                {content.site.email}
              </a>
              {content.site.location && (
                <p className="text-sm text-muted-foreground">
                  {content.site.location}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {content.site.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
