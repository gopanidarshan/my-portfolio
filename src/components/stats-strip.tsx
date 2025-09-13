'use client'

import { 
  Database, 
  TrendingUp, 
  DollarSign, 
  Zap,
  CheckCircle
} from 'lucide-react'

const iconMap = {
  Database,
  TrendingUp,
  DollarSign,
  Zap,
  CheckCircle
}

interface StatsStripProps {
  stats: Array<{
    icon: string;
    text: string;
    description: string;
  }>;
}

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section 
      className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      aria-label="Key achievements and statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Key Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Measurable impact through data-driven solutions and automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || CheckCircle
            
            return (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 motion-reduce:transition-none"
                role="article"
                aria-labelledby={`stat-${index}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0" aria-hidden="true">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p 
                      id={`stat-${index}`}
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {stat.text}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
