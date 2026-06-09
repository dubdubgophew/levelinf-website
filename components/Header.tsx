'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="section flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-700">
          <span className="text-2xl">∞</span>
          <span>Level Inf</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#features" className="hover:text-brand-600 transition-colors">Features</Link>
          <Link href="/#pricing" className="hover:text-brand-600 transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        </nav>

        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
        >
          ▶ Get on Play Store
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/#features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            ▶ Get on Play Store
          </a>
        </div>
      )}
    </header>
  )
}
