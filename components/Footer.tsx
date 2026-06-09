import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-brand-700 mb-3">
              <span className="text-2xl">∞</span>
              <span>Level Inf</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Build habits that compound. Simple, powerful habit tracking for Android.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Product</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/#features" className="hover:text-brand-600 transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-brand-600 transition-colors">Pricing</Link></li>
              <li>
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors"
                >
                  Download on Google Play
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Level Inf. All rights reserved.</span>
          <span>Made with ♥ in India</span>
        </div>
      </div>
    </footer>
  )
}
