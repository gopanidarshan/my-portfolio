'use client'

import { 
  Database, 
  Code, 
  BarChart3, 
  CreditCard, 
  Network, 
  Settings,
  Zap
} from 'lucide-react'

const iconMap = {
  Database,
  Code,
  BarChart3,
  CreditCard,
  Network,
  Settings,
  Zap
}

interface ToolboxProps {
  toolbox: {
    title: string;
    subtitle: string;
    tools: Array<{
      name: string;
      icon: string;
      description: string;
    }>;
  };
}

export function Toolbox({ toolbox }: ToolboxProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {toolbox.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {toolbox.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolbox.tools.map((tool, index) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap] || Zap
            
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-200">
                      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {tool.name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
