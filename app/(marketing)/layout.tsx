import Link from 'next/link'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 mx-auto bg-white px-4 sm:px-3 md:px-5">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <div>
            <Link
              href="/"
              title="Go to the homepage"
              className="flex items-center text-lg font-bold text-slate-900"
            >
              <span className="hidden sm:block">Next 13</span>
            </Link>
          </div>

          <Menu />

          <nav>
            <Link
              href="/login"
              className="relative inline-flex items-center rounded-md border border-transparent bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
