'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

interface SkillBadgeProps {
  skill: string
  category: string
  index: number
}

export function SkillBadge({ skill, category, index }: SkillBadgeProps) {
  const getVariant = (category: string) => {
    switch (category) {
      case 'Data Engineering':
        return 'default'
      case 'Automation & Orchestration':
        return 'success'
      case 'Analytics & Visualization':
        return 'info'
      case 'Cloud & Tools':
        return 'secondary'
      case 'Practices':
        return 'outline'
      default:
        return 'secondary'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant={getVariant(category)}
        className="text-sm px-3 py-1.5 cursor-default hover:shadow-md transition-all duration-200"
      >
        {skill}
      </Badge>
    </motion.div>
  )
}
