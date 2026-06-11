import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Level Inf — Habit Tracker app and website.',
  alternates: { canonical: 'https://levelinf.app/terms' },
  robots: { index: true, follow: true },
}

export default function Terms() {
  return (
    <div className="section py-16 max-w-3xl">
      <nav className="text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Terms of Service</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 1, 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using Level Inf — Habit Tracker (&quot;the App&quot;) or visiting levelinf.app
            (&quot;the Site&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Use of the Service</h2>
          <p className="mb-3">You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Reverse-engineer, decompile, or attempt to extract the source code of the App</li>
            <li>Use the Service to transmit harmful, offensive, or illegal content</li>
            <li>Attempt to gain unauthorised access to any part of the Service or its related systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. Premium Subscriptions</h2>
          <p className="mb-3">
            Level Inf offers a free tier and a Premium subscription available as a monthly (₹100/month) or
            annual (₹300/year) plan.
          </p>
          <p className="mb-3">
            Subscriptions are processed by Google Play Billing. By purchasing a subscription, you agree to
            Google Play&apos;s Terms of Service. Subscriptions automatically renew unless cancelled at least
            24 hours before the end of the current period.
          </p>
          <p>
            Refunds are governed by Google Play&apos;s refund policy. We do not directly issue refunds for
            in-app purchases.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
          <p>
            The App, the Site, and all content, features, and functionality are owned by Level Inf and are
            protected by copyright, trademark, and other applicable laws. You may not reproduce, distribute,
            or create derivative works without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied.
            We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other
            harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Level Inf shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of the courts of India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service after changes
            constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">9. Contact</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href="mailto:legal@levelinf.app" className="text-brand-600 hover:underline">
              legal@levelinf.app
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
