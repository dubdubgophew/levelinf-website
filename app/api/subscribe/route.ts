import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error } = await supabase
      .from('email_signups')
      .insert([{ email, source: 'website', created_at: new Date().toISOString() }])

    if (error) {
      // 23505 = unique_violation (already subscribed)
      if (error.code === '23505') {
        return NextResponse.json({ message: 'Already subscribed!' }, { status: 200 })
      }
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Could not save email.' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Subscribed successfully.' }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
