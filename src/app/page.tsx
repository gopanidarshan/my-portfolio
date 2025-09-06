import Link from 'next/link'
import { getContent } from '@/lib/content'
import { StatsStrip } from '@/components/stats-strip'
import { SignatureCaseStudy } from '@/components/signature-case-study'
import { HiringPlan } from '@/components/hiring-plan'
import { Toolbox } from '@/components/toolbox'
import { CtaBanner } from '@/components/cta-banner'

const content = getContent()

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {content.home.hero.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {content.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={content.home.hero.primaryCta.href}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {content.home.hero.primaryCta.label}
            </Link>
            <Link
              href={content.home.hero.secondaryCta.href}
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {content.home.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip stats={content.home.statsStrip} />

      {/* Signature Case Study */}
      <SignatureCaseStudy caseStudy={content.home.signatureCaseStudy} />

      {/* Hiring Plan */}
      <HiringPlan plan={content.home.hiringPlan} />

      {/* Toolbox */}
      <Toolbox toolbox={content.home.toolbox} />

      {/* CTA Banner */}
      <CtaBanner banner={content.home.ctaBanner} />
    </div>
  )
}
