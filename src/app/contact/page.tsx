/**
 * File: src/app/contact/page.tsx
 * Purpose: Contact page with contact info cards and a form.
 * Exports: `default` (Contact page component)
 * Consumes: `getContent()` → `content.contact`, `content.site`
 * Routes: GET /contact (text/html)
 * Notes: Form posts to `/api/contact` (see handler). Static content otherwise.
 */
import { getContent } from '@/lib/content'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Clock, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const content = getContent()

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.contact.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {content.contact.summary}
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                  <a
                    href={`mailto:${content.site.email}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                  >
                    {content.site.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-gray-900 dark:text-white">{content.site.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out directly via email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  What to Include
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Project overview and goals</li>
                  <li>• Timeline and budget considerations</li>
                  <li>• Current data infrastructure (if any)</li>
                  <li>• Specific challenges you&apos;re facing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm form={content.contact.form} />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 border-indigo-200 dark:border-indigo-800">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to start your next data project?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you need help with data modeling, analytics automation, or building 
                self-serve dashboards, I&apos;m here to help you turn your data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  View My Work
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Learn More About Me
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
