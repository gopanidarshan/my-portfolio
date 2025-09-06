'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/types/content'
import { formatDate } from '@/lib/utils'

interface PostCardProps {
  post: BlogPost
  index: number
}

export function PostCard({ post, index }: PostCardProps) {
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
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <CardTitle className="text-xl group-hover:text-brand transition-colors line-clamp-2">
                {post.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="text-base leading-relaxed line-clamp-3">
            {post.excerpt}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="pt-2">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-brand hover:text-brand/80 transition-colors group/link"
            >
              Read more
              <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
