import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{post.tags.length} tags</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Post Content */}
        <Card className="mb-12">
          <CardContent className="pt-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              {/* Placeholder content - in a real implementation, this would be MDX content */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Introduction
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This is a placeholder for the full blog post content. In a real implementation, 
                  this would be rendered from MDX files or a CMS. The content would be much more 
                  detailed and include code examples, diagrams, and other rich content.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Points
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Detailed explanation of the topic</li>
                  <li>Code examples and best practices</li>
                  <li>Real-world applications and case studies</li>
                  <li>Lessons learned and recommendations</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Conclusion
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This is where the post would conclude with key takeaways and next steps for readers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts or Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 border-indigo-200 dark:border-indigo-800">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Enjoyed this post?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I write about data engineering, analytics, and the latest tools and techniques. 
                Follow along for more insights and practical advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Read More Posts
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get in Touch
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
