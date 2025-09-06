import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Darshan Gopani',
  description: 'How your data is collected, used, and protected on this site.'
}

export default function PrivacyPolicy() {
  const updated = new Date().toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Your privacy matters. This page explains what data is collected and how it is used.</p>
        </header>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>What data is collected</h2>
          <p>
            This site only collects personal information that you voluntarily provide through the contact form. The
            fields collected are: name, email address, and message. No account creation or tracking-based personal
            identifiers are required to browse the site.
          </p>

          <h2>How your data is used</h2>
          <p>
            Information submitted via the contact form is used solely to respond to your inquiry and continue the
            conversation with you. Your information is never sold, rented, or shared with third parties for marketing
            purposes.
          </p>

          <h2>Analytics</h2>
          <p>
            This site may use privacy-friendly analytics to understand aggregate traffic and page performance (for example,
            page views and referrers). Analytics, if enabled, are used only to improve the site experience and do not
            identify individual users.
          </p>

          <h2>Cookies</h2>
          <p>
            Cookies may be used for two purposes:
          </p>
          <ul>
            <li>Theme preference (light/dark mode) so your choice persists between visits.</li>
            <li>Anonymous analytics (if enabled) to measure overall site usage.</li>
          </ul>
          <p>
            You can clear cookies at any time in your browser settings. The site remains fully usable without cookies,
            although your theme preference may not persist.
          </p>

          <h2>Data retention</h2>
          <p>
            Contact form submissions are retained only as long as necessary to address your inquiry and maintain a record of
            our conversation. You may request deletion of your messages at any time.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy questions or requests (including data access or deletion), email
            {' '}<a className="underline" href="mailto:darshangopani@gofynd.com">darshangopani@gofynd.com</a>.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Last updated: {updated}</p>
        </section>
      </div>
    </div>
  )
}

