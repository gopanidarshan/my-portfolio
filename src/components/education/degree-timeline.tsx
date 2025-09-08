/**
 * File: src/components/education/degree-timeline.tsx
 * Purpose: Vertical timeline for degrees with institution, degree, dates, GPA, location, highlights, coursework chips.
 * Exports: `DegreeTimeline`
 * Consumes: `Degree[]` from content types
 * Routes: N/A (component)
 * Notes: Semantic sections, keyboard accessible.
 */
import type { Degree } from '@/types/content'
import { CourseChip } from './course-chip'

export function DegreeTimeline({ degrees }: { degrees: Degree[] }) {
  return (
    <div className="space-y-8" role="list" aria-label="Degree timeline">
      {degrees.map((d, idx) => (
        <article key={`${d.institution}-${idx}`} className="relative pl-8" role="listitem">
          <div className="absolute left-3 top-1.5 h-full border-l border-gray-200 dark:border-gray-800" aria-hidden />
          <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-600" aria-hidden />
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
            <header className="mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {d.degree}{d.field ? `, ${d.field}` : ''}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {d.institution}
                {d.location ? ` • ${d.location}` : ''}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {(d.startDate || d.endDate) ? `${d.startDate ?? ''} — ${d.endDate ?? 'Present'}` : null}
                {d.gpa ? ` • GPA: ${d.gpa}` : ''}
              </p>
            </header>
            {d.highlights && d.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-3">
                {d.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
            {d.coursework && d.coursework.length > 0 && (
              <div className="flex flex-wrap gap-2" aria-label="Relevant coursework">
                {d.coursework.map((c) => (
                  <CourseChip key={c} label={c} />
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

