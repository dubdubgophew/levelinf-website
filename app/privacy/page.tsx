import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Level Inf — Habit Tracker. Learn how we collect, use, and protect your data.',
  alternates: { canonical: 'https://levelinf.app/privacy' },
  robots: { index: true, follow: true },
}

export default function Privacy() {
  return (
    <div className="section py-16 max-w-3xl">
      <nav className="text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 1, 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Level Inf (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Level Inf — Habit Tracker mobile application and
            the website located at https://levelinf.app (the &quot;Service&quot;). This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p className="mb-3"><strong className="text-gray-800">App data (stored locally):</strong> All habit data — habit names, completion records, streaks — is stored exclusively on your device. We do not collect or transmit this data to our servers.</p>
          <p className="mb-3"><strong className="text-gray-800">Purchase data:</strong> If you subscribe to Premium, your purchase is processed by Google Play. We receive a subscription status indicator via RevenueCat but never your payment details.</p>
          <p><strong className="text-gray-800">Email (optional):</strong> If you sign up for our newsletter via the website, we store your email address in our database (Supabase) solely to send product updates. You can unsubscribe at any time.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Information</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>To provide and maintain the Service</li>
            <li>To process in-app purchases and verify subscription status</li>
            <li>To send product updates if you opted in via email</li>
            <li>To improve the app based on aggregate, non-identifiable usage patterns</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p className="mb-3">We use the following third-party services. Each has its own privacy policy:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong className="text-gray-800">Google Play Billing</strong> — payment processing</li>
            <li><strong className="text-gray-800">RevenueCat</strong> — subscription management</li>
            <li><strong className="text-gray-800">Supabase</strong> — email storage for newsletter</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Data Retention</h2>
          <p>
            Habit data lives on your device and is deleted when you uninstall the app. Newsletter email addresses
            are retained until you unsubscribe or request deletion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. To request deletion of your
            email from our newsletter list, email us at{' '}
            <a href="mailto:privacy@levelinf.app" className="text-brand-600 hover:underline">
              privacy@levelinf.app
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">7. Children&apos;s Privacy</h2>
          <p>
            The Service is not directed to children under the age of 13. We do not knowingly collect personal
            information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy on this page
            with a revised &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">9. Contact</h2>
          <p>
            Questions about this Privacy Policy? Contact us at{' '}
            <a href="mailto:privacy@levelinf.app" className="text-brand-600 hover:underline">
              privacy@levelinf.app
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
