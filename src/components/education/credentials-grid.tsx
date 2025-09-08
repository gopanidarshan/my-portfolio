/**
 * File: src/components/education/credentials-grid.tsx
 * Purpose: Grid of certification cards with provider, title, dates, credential ID, and verify link.
 * Exports: `CredentialsGrid`
 * Consumes: `Certification[]`
 * Routes: N/A (component)
 * Notes: Uses semantic article cards; verify link opens in new tab if provided.
 */
import type { Certification } from '@/types/content'

export function CredentialsGrid({ certifications }: { certifications: Certification[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, idx) => (
          <article key={`${c.title}-${idx}`} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 h-full bg-white dark:bg-gray-900">
            <header className="mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{c.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.provider}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {c.issueDate ? `Issued ${c.issueDate}` : ''}
                {c.expiryDate ? ` • Expires ${c.expiryDate}` : ''}
              </p>
            </header>
            {c.credentialId && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Credential ID: {c.credentialId}</p>
            )}
            {c.verifyUrl && (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Verify Credential
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

