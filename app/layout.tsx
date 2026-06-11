import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://levelinf.app'),
  title: {
    default: 'Level Inf — Habit Tracker App for Android | Build Daily Habits',
    template: '%s | Level Inf Habit Tracker',
  },
  description:
    'Level Inf is a simple, powerful habit tracking app for Android. Build daily routines, track streaks, and achieve your goals. Download free on Google Play.',
  keywords: [
    'habit tracker',
    'habit tracking app',
    'daily habits',
    'streak tracker',
    'productivity app',
    'habit tracker India',
    'free habit tracker Android',
    'best habit app 2026',
    'levelinf',
    'routine tracker',
  ],
  authors: [{ name: 'Level Inf', url: 'https://levelinf.app' }],
  creator: 'Level Inf',
  publisher: 'Level Inf',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://levelinf.app',
    siteName: 'Level Inf — Habit Tracker',
    title: 'Level Inf — Habit Tracker App for Android',
    description:
      'Build powerful daily habits with Level Inf. Simple streak tracking, smart reminders, and beautiful analytics. Free on Google Play.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Level Inf Habit Tracker App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Level Inf — Habit Tracker App',
    description: 'Build powerful daily habits. Free on Google Play.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://levelinf.app',
    languages: { 'en-IN': 'https://levelinf.app' },
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Level Inf — Habit Tracker',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Android',
  description:
    'Level Inf is a simple, powerful habit tracking app. Build daily routines, track streaks, and achieve your goals.',
  url: 'https://levelinf.app',
  image: 'https://levelinf.app/og-image.png',
  author: {
    '@type': 'Organization',
    name: 'Level Inf',
    url: 'https://levelinf.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Level Inf',
    url: 'https://levelinf.app',
  },
  offers: [
    {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: 'Free tier — up to 5 habits',
    },
    {
      '@type': 'Offer',
      price: '100',
      priceCurrency: 'INR',
      description: 'Premium monthly — unlimited habits',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '100',
        priceCurrency: 'INR',
        unitCode: 'MON',
      },
    },
    {
      '@type': 'Offer',
      price: '300',
      priceCurrency: 'INR',
      description: 'Premium yearly — best value',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '300',
        priceCurrency: 'INR',
        unitCode: 'ANN',
      },
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '124',
  },
  inLanguage: 'en-IN',
  availableOnDevice: 'Android',
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Level Inf',
  url: 'https://levelinf.app',
  logo: 'https://levelinf.app/logo.png',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
