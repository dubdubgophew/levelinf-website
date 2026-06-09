import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog — Habit Building Tips & Science',
  description:
    'Articles on habit science, productivity, and morning routines. Learn how to build habits that stick using evidence-based techniques.',
  alternates: { canonical: 'https://levelinf.app/blog' },
  openGraph: {
    title: 'Level Inf Blog — Habit Building Tips',
    description: 'Science-backed guides on building daily habits, morning routines, and productivity.',
    url: 'https://levelinf.app/blog',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://levelinf.app' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://levelinf.app/blog' },
  ],
}

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="section py-16">
        <nav className="text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Blog</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl">
          Science-backed guides on building better habits, morning routines, and productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all flex flex-col"
            >
              <span className="text-xs font-semibold text-brand-600 bg-brand-50 rounded-full px-2 py-0.5 self-start mb-3">
                {post.category}
              </span>
              <h2 className="font-bold text-gray-900 text-lg leading-snug mb-3 flex-1 group-hover:text-brand-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                <span>{post.author}</span>
                <span>{post.readTime} · {post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
