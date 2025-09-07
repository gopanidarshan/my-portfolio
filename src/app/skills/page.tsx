/**
 * File: src/app/skills/page.tsx
 * Purpose: Skills page rendering categorized skills with icons and supporting content.
 * Exports: `default` (Skills page component)
 * Consumes: `getContent()` → `content.skills`
 * Routes: GET /skills (text/html)
 * Notes: Maps categories to icons; static content only.
 */
import { getContent } from '@/lib/content'
import { SkillBadge } from '@/components/skill-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Settings, BarChart3, Cloud, BookOpen } from 'lucide-react'
import Link from 'next/link'

const content = getContent()

const categoryIcons = {
  'Data Engineering': Database,
  'Automation & Orchestration': Settings,
  'Analytics & Visualization': BarChart3,
  'Cloud & Tools': Cloud,
  'Practices': BookOpen,
}

export default function Skills() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my technical skills and areas of expertise in data engineering and analytics.
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(content.skills).map(([category, skills], categoryIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || BookOpen
            return (
              <Card key={category} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-200">
                      <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        category={category}
                        index={categoryIndex * 10 + skillIndex}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Data-First Approach
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I prioritize data quality, performance, and scalability in every solution I build.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Automation Focus
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I believe in automating repetitive tasks to focus on high-value analytical work.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                User-Centric Design
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I build analytics solutions that are intuitive and provide real business value.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s build something amazing together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to apply these skills to new challenges and help teams unlock the power of their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
