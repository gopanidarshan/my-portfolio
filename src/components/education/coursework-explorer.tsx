/**
 * File: src/components/education/coursework-explorer.tsx
 * Purpose: Client wrapper combining filters and course grid for interactive coursework browsing.
 * Exports: `CourseworkExplorer`
 * Consumes: `CourseItem[]`
 * Notes: Derives categories from items; manages client state.
 */
'use client'

import { useMemo, useState } from 'react'
import type { CourseItem } from '@/types/content'
import { CourseworkFilters } from './coursework-filters'
import { CourseGrid } from './course-grid'

export function CourseworkExplorer({ courses }: { courses: CourseItem[] }) {
  const categories = useMemo(() => Array.from(new Set(courses.map((c) => c.category))), [courses])
  const [selected, setSelected] = useState<string>('All')

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relevant Coursework</h2>
      <CourseworkFilters categories={categories} selected={selected} onSelect={setSelected} />
      <CourseGrid courses={courses} selectedCategory={selected} />
    </div>
  )
}

