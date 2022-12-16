'use client'

import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center text-lg font-medium text-slate-700 sm:text-sm">
        Home
      </Link>
      <Link href="/" className="flex items-center text-lg font-medium text-slate-700 sm:text-sm">
        Shop
      </Link>
      <Link
        href="/blog"
        className="flex items-center text-lg font-medium text-slate-700 sm:text-sm"
      >
        Blog
      </Link>
      <Link href="/" className="flex items-center text-lg font-medium text-slate-700 sm:text-sm">
        About
      </Link>
      <Link href="/" className="flex items-center text-lg font-medium text-slate-700 sm:text-sm">
        Contact
      </Link>
    </nav>
  )
}
