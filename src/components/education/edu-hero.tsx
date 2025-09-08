'use client'
/**
 * File: src/components/education/edu-hero.tsx
 * Purpose: Page hero for Education with title, optional subtitle, and optional last-updated date.
 * Exports: `EduHero`
 * Consumes: Props for `subtitle` and ISO `updated` date string
 * Routes: N/A (component)
 * Notes: Accessible heading structure, respects reduced motion.
 */
import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

export function EduHero({ subtitle, updated }: { subtitle?: string; updated?: string }) {
  const reduce = useReducedMotion()
  const updatedLabel = updated ? new Date(updated).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : undefined

  const containerProps: MotionProps = reduce
    ? { initial: false, animate: false }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
      }

  return (
    <header className="text-center" aria-label="Education page header">
      <motion.div {...containerProps}>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-3">{subtitle}</p>
        )}
        {updatedLabel && (
          <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: {updatedLabel}</p>
        )}
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mt-6" />
      </motion.div>
    </header>
  )
}
