/**
 * File: src/components/education/edu-stats-strip.tsx
 * Purpose: Thin stat cards strip for GPA, coursework, certifications, and awards.
 * Exports: `EduStatsStrip`
 * Consumes: Numeric counts and optional GPA string
 * Notes: Responsive 2–4 column grid; subtle icons; accessible.
 */
import { Award, BadgeCheck, BookOpen, ListChecks } from 'lucide-react'

export function EduStatsStrip({
  gpa,
  courseworkCount = 0,
  certificationsCount = 0,
  awardsCount = 0,
}: {
  gpa?: string
  courseworkCount?: number
  certificationsCount?: number
  awardsCount?: number
}) {
  const items = [
    { label: 'GPA', value: gpa ?? '—', Icon: BookOpen, sr: 'Cumulative GPA' },
    { label: 'Coursework', value: courseworkCount.toString(), Icon: ListChecks, sr: 'Relevant coursework count' },
    { label: 'Certifications', value: certificationsCount.toString(), Icon: BadgeCheck, sr: 'Certifications count' },
    { label: 'Awards', value: awardsCount.toString(), Icon: Award, sr: 'Awards and honors count' },
  ]

  return (
    <section aria-label="Education summary stats">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ label, value, Icon, sr }) => (
          <div
            key={label}
            className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            role="group"
            aria-label={sr}
          >
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white truncate">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

