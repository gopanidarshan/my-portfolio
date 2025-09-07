/**
 * File: src/app/experience/page.tsx
 * Purpose: Experience page displaying timeline of roles and highlights.
 * Exports: `default` (Experience page component)
 * Consumes: `getContent()` → `content.experience.*`
 * Routes: GET /experience (text/html)
 * Notes: Static data mapped into `Timeline` component.
 */
import { getContent } from '@/lib/content'
import { Timeline } from '@/components/timeline'
import Link from 'next/link'

const content = getContent()

export default function Experience() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {content.experience.intro}
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <Timeline items={content.experience.items} />

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to work together?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to bring my experience in data engineering and analytics to new challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
