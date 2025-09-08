/**
 * File: src/components/education/honors-list.tsx
 * Purpose: List of honors and awards with optional year and issuer.
 * Exports: `HonorsList`
 * Consumes: `Honor[]`
 * Routes: N/A (component)
 * Notes: Simple semantic list; badges for years.
 */
import type { Honor } from '@/types/content'

export function HonorsList({ honors }: { honors: Honor[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Honors & Awards</h2>
      <ul className="space-y-3">
        {honors.map((h, idx) => (
          <li key={`${h.title}-${idx}`} className="flex items-center gap-3 text-sm text-gray-800 dark:text-gray-200">
            {h.year && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                {h.year}
              </span>
            )}
            <span>{h.title}{h.issuer ? ` — ${h.issuer}` : ''}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

