'use client'

import { Calendar, Target, FileText } from 'lucide-react'

interface HiringPlanProps {
  plan: {
    title: string;
    subtitle: string;
    cards: Array<{
      period: string;
      title: string;
      outcomes: string[];
      deliverables: string[];
    }>;
  };
}

export function HiringPlan({ plan }: HiringPlanProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {plan.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {plan.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plan.cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {card.period}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    {card.title}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Target className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Key Outcomes
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {card.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Deliverables
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {card.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
