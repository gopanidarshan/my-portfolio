/**
 * File: src/app/education/page.tsx
 * Purpose: Education page rendering degrees, certifications, coursework, academic projects, honors, and downloads.
 * Exports: `default` (Education page component)
 * Consumes: `getContent()` → `content.education` (optional)
 * Routes: GET /education (text/html)
 * Notes: Each section is optional; renders only when data present. Includes Breadcrumb JSON‑LD.
 */
import type { Metadata } from 'next'
import { getContent, getSEOPage } from '@/lib/content'
import { BreadcrumbJsonLd, EducationalOrgJsonLd } from '@/components/json-ld'
import { EduHero } from '@/components/education/edu-hero'
import { EduStatsStrip } from '@/components/education/edu-stats-strip'
import { DegreeTimeline } from '@/components/education/degree-timeline'
import { CredentialsGrid } from '@/components/education/credentials-grid'
import { CourseworkSection } from '@/components/education/coursework-section'
import { CourseworkExplorer } from '@/components/education/coursework-explorer'
import { AcademicProjects } from '@/components/education/academic-projects'
import { HonorsList } from '@/components/education/honors-list'
import { ActivitiesList } from '@/components/education/activities-list'
import { DownloadsPanel } from '@/components/education/downloads-panel'
import Link from 'next/link'

export default function EducationPage() {
  const content = getContent()
  const education = content.education

  return (
    <div className="min-h-screen py-16">
      <head>
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://darshangopani.com/' },
            { name: 'Education', url: 'https://darshangopani.com/education' },
          ]}
        />
        {education?.degrees && (
          Array.from(new Set(education.degrees.map(d => d.institution))).map((name) => (
            <EducationalOrgJsonLd key={name} org={{ name }} />
          ))
        )}
      </head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <EduHero subtitle={education?.hero?.subtitle} updated={education?.hero?.updated} />

        {/* Summary Stats Strip */}
        {(() => {
          const gpa = education?.degrees?.find(d => d.gpa)?.gpa
          const degreeCourses = new Set((education?.degrees ?? []).flatMap(d => d.coursework ?? []))
          const topCourses = new Set(education?.coursework ?? [])
          const courseworkCount = education?.courses?.length ?? new Set([...degreeCourses, ...topCourses]).size
          const certificationsCount = education?.certifications?.length ?? 0
          const awardsCount = education?.honors?.length ?? 0
          const any = gpa || courseworkCount || certificationsCount || awardsCount
          return any ? (
            <EduStatsStrip
              gpa={gpa}
              courseworkCount={courseworkCount}
              certificationsCount={certificationsCount}
              awardsCount={awardsCount}
            />
          ) : null
        })()}

        {education?.degrees && education.degrees.length > 0 && (
          <section aria-label="Degrees and timeline">
            <DegreeTimeline degrees={education.degrees} />
          </section>
        )}

        {education?.certifications && education.certifications.length > 0 && (
          <section aria-label="Certifications">
            <CredentialsGrid certifications={education.certifications} />
          </section>
        )}

        {/* Coursework: Explorer (grid + filters) if structured courses exist; otherwise chip list */}
        {education?.courses && education.courses.length > 0 ? (
          <section aria-label="Relevant coursework">
            <CourseworkExplorer courses={education.courses} />
          </section>
        ) : (
          education?.coursework && education.coursework.length > 0 && (
            <section aria-label="Relevant coursework">
              <CourseworkSection coursework={education.coursework} degrees={education?.degrees} />
            </section>
          )
        )}

        {education?.projects && education.projects.length > 0 && (
          <section aria-label="Academic projects">
            <AcademicProjects projects={education.projects} />
          </section>
        )}

        {education?.honors && education.honors.length > 0 && (
          <section aria-label="Honors and awards">
            <HonorsList honors={education.honors} />
          </section>
        )}

        {education?.downloads && education.downloads.length > 0 && (
          <section aria-label="Transcripts and downloads">
            <DownloadsPanel items={education.downloads} />
          </section>
        )}

        {education?.activities && education.activities.length > 0 && (
          <section aria-label="Activities and leadership">
            <ActivitiesList activities={education.activities} />
          </section>
        )}

        <section aria-label="Calls to action">
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore more</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Review selected projects or get in touch to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const seo = getSEOPage('/education')
export const metadata: Metadata = {
  title: seo?.title ?? 'Education — Darshan Gopani',
  description: seo?.description ?? 'Degrees, certifications, coursework, academic projects, and honors.',
}
