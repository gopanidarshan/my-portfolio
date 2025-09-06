'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface SignatureCaseStudyProps {
  caseStudy: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: Array<{
      label: string;
      text: string;
    }>;
    cta: {
      label: string;
      href: string;
    };
  };
}

export function SignatureCaseStudy({ caseStudy }: SignatureCaseStudyProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 mb-4">
                {caseStudy.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {caseStudy.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {caseStudy.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {caseStudy.bullets.map((bullet, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {bullet.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={caseStudy.cta.href}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group motion-reduce:transition-none"
              >
                {caseStudy.cta.label}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200 motion-reduce:transition-none" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
