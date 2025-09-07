/**
 * File: src/app/about/page.tsx
 * Purpose: About page summarizing background, focus areas, and a CTA.
 * Exports: `default` (About page component)
 * Consumes: `getContent()` → `content.about.*`
 * Routes: GET /about (text/html)
 * Notes: Static rendering from JSON; icons mapped by focus area labels.
 */
import { getContent } from '@/lib/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Target, Code, Database, BarChart3, Settings } from 'lucide-react'
import Link from 'next/link'

const content = getContent()

const focusAreaIcons = {
  'Data modeling in BigQuery; entity-first schemas': Database,
  'ETL/ELT automation and quality guardrails': Settings,
  'Self-serve analytics (Looker Studio / Looker)': BarChart3,
  'Revenue and product usage insights': Target,
  'Scalable query design & performance tuning': Code,
}

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {content.about.title}
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Summary Section */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {content.about.summary.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.about.focusAreas.map((area, index) => {
              const Icon = focusAreaIcons[area as keyof typeof focusAreaIcons] || CheckCircle
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-200">
                          <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">
                        {area.split(';')[0]}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {area.split(';')[1]?.trim() || area}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 border-indigo-200 dark:border-indigo-800">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I&apos;m always interested in new data challenges and opportunities to build reliable, scalable analytics systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get in Touch
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
