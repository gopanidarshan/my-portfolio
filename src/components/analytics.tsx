'use client'

import { useEffect } from 'react'

// Placeholder analytics component
// Replace with your preferred analytics service (Google Analytics, Plausible, etc.)
export function Analytics() {
  useEffect(() => {
    // Example: Google Analytics 4
    // gtag('config', 'GA_MEASUREMENT_ID', {
    //   page_title: document.title,
    //   page_location: window.location.href,
    // })

    // Example: Plausible
    // plausible('pageview')

    console.log('Analytics initialized - replace with your preferred service')
  }, [])

  return null
}

// Example: Google Analytics script
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}
