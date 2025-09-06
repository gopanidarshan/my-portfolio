'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExperienceItem } from '@/types/content'

interface TimelineProps {
  items: ExperienceItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={`${item.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 w-3 h-3 bg-brand rounded-full border-4 border-background shadow-sm" />
            
            <div className="ml-12">
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{item.company}</CardTitle>
                      <p className="text-brand font-medium">{item.role}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + highlightIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
