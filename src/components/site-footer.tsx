'use client'

import Link from 'next/link'
import { getContent } from '@/lib/content'
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink,
  MapPin,
  FileDown,
  Rss,
  Shield,
  Globe
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const content = getContent()
const currentYear = new Date().getFullYear()

const iconMap = {
  Linkedin,
  Github,
  Twitter,
  Mail
}

export function SiteFooter() {
  const { footer } = content

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand block */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {footer.brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {footer.brand.role}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {footer.brand.tagline}
                </p>
                {footer.brand.location && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{footer.brand.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {footer.explore.title}
              </h3>
              <nav className="space-y-3" aria-label="Main navigation">
                {footer.explore.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 rounded"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {footer.resources.title}
              </h3>
              <nav className="space-y-3" aria-label="Resources">
                {footer.resources.links.map((link) => {
                  const isPDF = link.href.toLowerCase().endsWith('.pdf')
                  const isExternal = link.href.startsWith('http')
                  let Icon: LucideIcon = Globe
                  if (link.href.includes('rss')) Icon = Rss
                  else if (link.href.includes('sitemap')) Icon = Globe
                  else if (link.href.includes('privacy')) Icon = Shield
                  else if (isPDF || link.label.toLowerCase().includes('resume')) Icon = FileDown

                  return (
                    isPDF ? (
                      <a
                        key={link.href}
                        href={link.href}
                        download
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 rounded group"
                      >
                        <Icon className="h-4 w-4 mr-3 flex-shrink-0 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        <span className="group-hover:underline">{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 rounded group"
                        {...(isExternal && {
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        })}
                      >
                        <Icon className="h-4 w-4 mr-3 flex-shrink-0 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        <span className="group-hover:underline">{link.label}</span>
                        {isExternal && (
                          <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        )}
                      </Link>
                    )
                  )
                })}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {footer.connect.title}
              </h3>
              <div className="space-y-3">
                {footer.connect.social.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 rounded group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} profile`}
                    >
                      <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="sr-only">{social.name}</span>
                      <span className="group-hover:underline">
                        {social.name}
                      </span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {footer.bottomBar.copyright.replace('{currentYear}', currentYear.toString())}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {footer.bottomBar.builtWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
