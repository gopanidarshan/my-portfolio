/**
 * File: src/components/bottom-bar.tsx
 * Purpose: Mobile-only bottom navigation bar for quick access to primary sections.
 * Exports: `BottomBar`
 * Consumes: Client location (`usePathname`)
 * Routes: N/A (component)
 * Notes: 'use client' component. Highlights active route; designed for small screens.
 */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FolderOpen, BookOpen, Mail } from 'lucide-react'

const bottomNavItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/projects', icon: FolderOpen },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
]

export function BottomBar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-around py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 min-w-0 flex-1 group ${
                  active
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon 
                  className={`h-5 w-5 mb-1 transition-all duration-200 ${
                    active 
                      ? 'scale-110' 
                      : 'group-hover:scale-105'
                  }`} 
                />
                <span className="text-xs font-medium truncate">
                  {item.label}
                </span>
                {active && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
