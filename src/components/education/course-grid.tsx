/**
 * File: src/components/education/course-grid.tsx
 * Purpose: Grid of course cards with name, outcome, and tools badges.
 * Exports: `CourseGrid`
 * Consumes: `CourseItem[]` and selectedCategory
 * Notes: Filters by category; shows All when selectedCategory === 'All'.
 */
import type { CourseItem } from '@/types/content'

export function CourseGrid({ courses, selectedCategory }: { courses: CourseItem[]; selectedCategory: string }) {
  const filtered = selectedCategory === 'All' ? courses : courses.filter((c) => c.category === selectedCategory)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((c) => (
        <article key={`${c.category}-${c.name}`} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-900 h-full">
          <header className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{c.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{c.category}</p>
          </header>
          {c.outcome && <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{c.outcome}</p>}
          {c.tools && c.tools.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {c.tools.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  {t}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

