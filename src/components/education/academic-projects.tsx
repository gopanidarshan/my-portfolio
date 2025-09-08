/**
 * File: src/components/education/academic-projects.tsx
 * Purpose: Cards list for academic projects with context, stack, summary, outcome, and links.
 * Exports: `AcademicProjects`
 * Consumes: `AcademicProject[]`
 * Routes: N/A (component)
 * Notes: Buttons for repo/demo open in new tabs.
 */
import type { AcademicProject } from '@/types/content'

export function AcademicProjects({ projects }: { projects: AcademicProject[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <article key={`${p.title}-${idx}`} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-900 h-full">
            <header className="mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              {p.context && <p className="text-sm text-gray-600 dark:text-gray-300">{p.context}</p>}
            </header>
            {p.summary && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{p.summary}</p>
            )}
            {p.stack && p.stack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {s}
                  </span>
                ))}
              </div>
            )}
            {p.outcome && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{p.outcome}</p>
            )}
            {(p.links?.repo || p.links?.demo) && (
              <div className="flex gap-3">
                {p.links?.repo && (
                  <a href={p.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Repo
                  </a>
                )}
                {p.links?.demo && (
                  <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Demo
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

