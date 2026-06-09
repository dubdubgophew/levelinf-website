'use client'
import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage('Thanks! We\'ll notify you about updates.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="btn-primary whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : status === 'success' ? '✓ Done' : 'Notify me'}
      </button>
      {message && (
        <p className={`text-xs mt-1 text-center col-span-2 ${status === 'success' ? 'text-brand-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
