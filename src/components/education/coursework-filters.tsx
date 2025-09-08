/**
 * File: src/components/education/coursework-filters.tsx
 * Purpose: Category filter chip row for coursework browsing.
 * Exports: `CourseworkFilters`
 * Consumes: categories, selected, onSelect
 * Notes: Client component; keyboard accessible.
 */
'use client'

export function CourseworkFilters({
  categories,
  selected,
  onSelect,
}: {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}) {
  const cats = ['All', ...Array.from(new Set(categories))]

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Coursework categories">
      {cats.map((cat) => {
        const active = selected === cat
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(cat)}
            className={
              `px-3 py-1.5 rounded-full text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ` +
              (active
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800')
            }
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

