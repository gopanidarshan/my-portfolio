/**
 * File: src/components/education/course-chip.tsx
 * Purpose: Small pill chip for course labels.
 * Exports: `CourseChip`
 * Consumes: `label` prop (string)
 * Routes: N/A (component)
 * Notes: Minimal visual; accessible text.
 */
export function CourseChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
      {label}
    </span>
  )
}

