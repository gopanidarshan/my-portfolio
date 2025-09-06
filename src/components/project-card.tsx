'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/types/content'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="h-full hover:shadow-lg hover:shadow-indigo-600/15 transition-all duration-300 border-border/50 hover:border-brand/20 hover:ring-1 hover:ring-indigo-500/20">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-xl group-hover:text-brand transition-colors">
                {project.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{project.role}</span>
                <span>•</span>
                <span>{project.period}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-brand transition-colors"
                  aria-label="View demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
              {project.links.repo && (
                <Link
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-brand transition-colors"
                  aria-label="View source code"
                >
                  <Github className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="text-base leading-relaxed">
            {project.summary}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm font-medium text-brand hover:text-brand/80 transition-colors group/link"
            >
              Learn more
              <ExternalLink className="ml-1 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
