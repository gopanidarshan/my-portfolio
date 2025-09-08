/**
 * File: src/components/education/activities-list.tsx
 * Purpose: Compact list of activities/leadership with role, org, period, and highlights.
 * Exports: `ActivitiesList`
 * Consumes: `Activity[]`
 * Notes: Accessible list with semantic grouping.
 */
import type { Activity } from '@/types/content'

export function ActivitiesList({ activities }: { activities: Activity[] }) {
  if (!activities || activities.length === 0) return null

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Activities & Leadership</h2>
      <ul className="space-y-3">
        {activities.map((a, idx) => (
          <li key={`${a.role}-${idx}`} className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-900">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {a.role}{a.organization ? ` — ${a.organization}` : ''}
              </div>
              {a.period && (
                <div className="text-xs text-gray-500 dark:text-gray-400">{a.period}</div>
              )}
            </div>
            {a.description && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{a.description}</p>
            )}
            {a.highlights && a.highlights.length > 0 && (
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {a.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

