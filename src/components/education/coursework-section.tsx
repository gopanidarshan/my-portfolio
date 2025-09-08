/**
 * File: src/components/education/coursework-section.tsx
 * Purpose: Displays a deduplicated set of coursework chips across degrees and top-level coursework.
 * Exports: `CourseworkSection`
 * Consumes: `coursework` (string[]) and optional `degrees` to dedupe
 * Routes: N/A (component)
 * Notes: De-duplicates against degree-level coursework.
 */
import type { Degree } from '@/types/content'
import { CourseChip } from './course-chip'

export function CourseworkSection({ coursework, degrees }: { coursework: string[]; degrees?: Degree[] }) {
  const degreeCourses = new Set(
    (degrees ?? []).flatMap((d) => d.coursework ?? [])
  )
  const deduped = coursework.filter((c) => !degreeCourses.has(c))

  if (deduped.length === 0) return null

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relevant Coursework</h2>
      <div className="flex flex-wrap gap-2">
        {deduped.map((c) => (
          <CourseChip key={c} label={c} />
        ))}
      </div>
    </div>
  )
}

