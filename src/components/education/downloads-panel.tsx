/**
 * File: src/components/education/downloads-panel.tsx
 * Purpose: Download buttons for transcripts, mark sheets, and syllabi.
 * Exports: `DownloadsPanel`
 * Consumes: `DownloadItem[]`
 * Routes: N/A (component)
 * Notes: Uses `download` attribute for same-origin files.
 */
import type { DownloadItem } from '@/types/content'

export function DownloadsPanel({ items }: { items: DownloadItem[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Downloads & Links</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((it) => {
          const isExternal = /^https?:\/\//i.test(it.href)
          return isExternal ? (
            <a
              key={it.href}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {it.label}
            </a>
          ) : (
            <a
              key={it.href}
              href={it.href}
              download
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {it.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

