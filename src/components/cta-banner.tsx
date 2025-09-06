'use client'

import Link from 'next/link'
import { Mail, Download } from 'lucide-react'

interface CtaBannerProps {
  banner: {
    title: string;
    subtitle: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export function CtaBanner({ banner }: CtaBannerProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {banner.title}
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            {banner.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={banner.primaryCta.href}
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 group"
            >
              <Mail className="h-4 w-4 mr-2" />
              {banner.primaryCta.label}
            </Link>
            <Link
              href={banner.secondaryCta.href}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 group motion-reduce:transition-none"
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce motion-reduce:animate-none" />
              {banner.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
