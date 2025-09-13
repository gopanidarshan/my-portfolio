'use client'

import { CheckCircle, ArrowRight } from 'lucide-react'

interface HighlightsSectionProps {
  highlights: string[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section 
      className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
      aria-label="Key highlights and capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What I Deliver
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proven expertise in building scalable data solutions and automation systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
              role="article"
              aria-labelledby={`highlight-${index}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0" aria-hidden="true">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p 
                    id={`highlight-${index}`}
                    className="text-base font-medium text-gray-900 dark:text-white leading-relaxed"
                  >
                    {highlight}
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
