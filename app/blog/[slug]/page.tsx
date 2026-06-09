import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getPostBySlug } from '@/lib/blog-data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author, url: 'https://levelinf.app' }],
    alternates: { canonical: `https://levelinf.app/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://levelinf.app/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ['https://levelinf.app'],
      tags: ['habits', 'productivity', 'habit tracker', post.category],
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Level Inf',
      url: 'https://levelinf.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Level Inf',
      url: 'https://levelinf.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://levelinf.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://levelinf.app/blog/${post.slug}`,
    },
    inLanguage: 'en-IN',
    keywords: 'habit tracker, ' + post.category + ', productivity, habits India',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://levelinf.app' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://levelinf.app/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://levelinf.app/blog/${post.slug}` },
    ],
  }

  // Simple markdown-like rendering (headings + paragraphs)
  function renderContent(text: string) {
    return text
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.slice(4)}</h3>
        if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{line.slice(3)}</h2>
        if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold text-gray-900 mt-12 mb-4">{line.slice(2)}</h1>
        if (line.match(/^\d+\. /)) return <li key={i} className="text-gray-600 leading-relaxed ml-6 list-decimal">{line.replace(/^\d+\. /, '')}</li>
        if (line.startsWith('- ')) return <li key={i} className="text-gray-600 leading-relaxed ml-6 list-disc">{line.slice(2)}</li>
        if (line.trim() === '') return <div key={i} className="h-2" />
        // Bold
        const parts = line.split(/(\*\*[^*]+\*\*)/g)
        return (
          <p key={i} className="text-gray-600 leading-relaxed">
            {parts.map((p, j) =>
              p.startsWith('**') && p.endsWith('**') ? (
                <strong key={j} className="text-gray-900 font-semibold">{p.slice(2, -2)}</strong>
              ) : p
            )}
          </p>
        )
      })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="section py-16 max-w-3xl">
        <nav className="text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        <span className="text-xs font-semibold text-brand-600 bg-brand-50 rounded-full px-2 py-0.5 mb-4 inline-block">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">{post.description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-6 mb-8">
          <span>By <strong className="text-gray-600">{post.author}</strong></span>
          <span>·</span>
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <article className="prose-like space-y-1">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-16 bg-brand-50 border border-brand-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Start tracking your habits today</h3>
          <p className="text-gray-500 text-sm mb-5">Free on Android. Build your first streak in under 2 minutes.</p>
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            ▶ Download Level Inf — Free
          </a>
        </div>

        <div className="mt-10">
          <Link href="/blog" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </>
  )
}
