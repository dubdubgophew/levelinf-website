import type { Metadata } from 'next'
import Link from 'next/link'
import EmailForm from '@/components/EmailForm'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Level Inf — Habit Tracker App for Android | Build Daily Habits',
  alternates: { canonical: 'https://levelinf.app' },
}

const features = [
  {
    icon: '🔥',
    title: 'Streak Tracking',
    desc: 'Visual streak counters keep you motivated day after day. Break the chain and feel it.',
  },
  {
    icon: '🔔',
    title: 'Smart Reminders',
    desc: 'Set custom reminders for each habit. Our notifications actually fire on all Android skins — including MIUI and One UI.',
  },
  {
    icon: '📊',
    title: 'Progress Analytics',
    desc: 'Weekly and monthly heatmaps show exactly where you\'re consistent and where you slip.',
  },
  {
    icon: '⚡',
    title: 'Instant Add',
    desc: 'Add a new habit in under 5 seconds. No friction, no mandatory onboarding.',
  },
  {
    icon: '🎯',
    title: 'Unlimited Habits',
    desc: 'Premium users track as many habits as they want. No artificial limits.',
  },
  {
    icon: '🔒',
    title: 'Private by Default',
    desc: 'Your data stays on your device. No social feeds, no sharing, no surveillance.',
  },
]

const faqs = [
  {
    q: 'Is Level Inf free?',
    a: 'Yes — the free tier lets you track up to 5 habits with full streak and reminder support. Upgrade to Premium for unlimited habits.',
  },
  {
    q: 'What does Premium cost in India?',
    a: '₹100 per month or ₹300 per year (save 75%). Both plans include unlimited habits and all future features.',
  },
  {
    q: 'Does it work offline?',
    a: 'Completely. Level Inf stores all data locally on your device. No internet required to log your habits.',
  },
  {
    q: 'Is it available on iOS?',
    a: 'Currently Android only. iOS is on the roadmap — sign up below to be notified when it launches.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Premium users can export their full habit history as a CSV at any time.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white pt-20 pb-24">
        <div className="section text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            ✨ Now on Google Play
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Build habits that<br />
            <span className="text-brand-600">compound forever</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Level Inf is the simplest habit tracker for Android. Track streaks, get timely reminders, and watch your routines transform your life — one day at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              ▶ Download Free on Play Store
            </a>
            <Link href="/#features" className="btn-secondary text-base px-8 py-4">
              See Features →
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-400">Free to download · No credit card required · Android 6.0+</p>

          {/* Mock phone UI */}
          <div className="mt-16 flex justify-center">
            <div className="w-56 h-96 bg-gray-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border-4 border-gray-800">
              <div className="bg-brand-600 px-4 py-3 text-white">
                <p className="text-xs opacity-70">Today</p>
                <p className="font-bold text-lg">My Habits</p>
              </div>
              <div className="flex-1 bg-gray-50 p-3 space-y-2">
                {[
                  { name: 'Morning Walk', streak: 14, done: true },
                  { name: 'Read 20 min', streak: 7, done: true },
                  { name: 'No sugar', streak: 3, done: false },
                  { name: 'Meditate', streak: 21, done: true },
                  { name: 'Journal', streak: 5, done: false },
                ].map((h) => (
                  <div
                    key={h.name}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs ${
                      h.done ? 'bg-brand-100 text-brand-800' : 'bg-white text-gray-600 border border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{h.name}</span>
                    <span className="flex items-center gap-1">
                      🔥 {h.streak}
                      {h.done && <span className="ml-1 text-brand-600">✓</span>}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 p-3 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-xl">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section id="features" className="py-24 bg-white">
        <div className="section">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything you need, nothing you don\'t
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Designed for humans who want to build better habits without fighting their own app.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="section">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Simple, honest pricing</h2>
            <p className="text-gray-500 text-lg">
              Start free. Upgrade when you\'re ready to go unlimited.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col">
              <h3 className="font-bold text-gray-900 text-xl mb-1">Free</h3>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">₹0</div>
              <p className="text-xs text-gray-400 mb-6">Forever free</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Up to 5 habits</li>
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Streak tracking</li>
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Daily reminders</li>
                <li className="flex gap-2"><span className="text-gray-300">✕</span> Analytics charts</li>
                <li className="flex gap-2"><span className="text-gray-300">✕</span> CSV export</li>
              </ul>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-sm"
              >
                Download Free
              </a>
            </div>

            {/* Monthly */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col">
              <h3 className="font-bold text-gray-900 text-xl mb-1">Premium Monthly</h3>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">₹100<span className="text-base font-normal text-gray-400">/mo</span></div>
              <p className="text-xs text-gray-400 mb-6">Billed monthly</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Unlimited habits</li>
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Streak tracking</li>
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Smart reminders</li>
                <li className="flex gap-2"><span className="text-brand-500">✓</span> Analytics charts</li>
                <li className="flex gap-2"><span className="text-brand-500">✓</span> CSV export</li>
              </ul>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-sm"
              >
                Get Monthly
              </a>
            </div>

            {/* Yearly */}
            <div className="bg-brand-600 rounded-2xl p-8 flex flex-col relative">
              <div className="absolute -top-3 right-6 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              <h3 className="font-bold text-white text-xl mb-1">Premium Yearly</h3>
              <div className="text-3xl font-extrabold text-white mb-1">₹300<span className="text-base font-normal text-green-200">/yr</span></div>
              <p className="text-xs text-green-200 mb-6">Save 75% vs monthly</p>
              <ul className="space-y-2 text-sm text-green-100 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-white">✓</span> Unlimited habits</li>
                <li className="flex gap-2"><span className="text-white">✓</span> Streak tracking</li>
                <li className="flex gap-2"><span className="text-white">✓</span> Smart reminders</li>
                <li className="flex gap-2"><span className="text-white">✓</span> Analytics charts</li>
                <li className="flex gap-2"><span className="text-white">✓</span> CSV export</li>
              </ul>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold text-sm hover:bg-brand-50 transition-colors text-center"
              >
                Get Yearly — Best Value
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="section">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900">From the blog</h2>
            <Link href="/blog" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              All posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <span className="text-xs font-semibold text-brand-600 bg-brand-50 rounded-full px-2 py-0.5 self-start mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 flex-1">{post.title}</h3>
                <p className="text-xs text-gray-400">{post.readTime} · {post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / EMAIL CAPTURE ───────────────────────────────────────── */}
      <section className="py-24 bg-brand-600">
        <div className="section text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Start your streak today
          </h2>
          <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">
            Download free on Android. Or drop your email and we\'ll notify you when iOS launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-700 font-bold text-base hover:bg-brand-50 transition-colors shadow-md"
            >
              ▶ Download for Android — Free
            </a>
          </div>
          <p className="text-brand-200 text-sm mb-4">Waiting for iOS? Get notified:</p>
          <EmailForm />
        </div>
      </section>
    </>
  )
}
