import Link from 'next/link'

export default function Logo() {
  return (
    <div>
      <Link
        href="/"
        title="Go to the homepage"
        className="flex items-center text-lg font-bold text-slate-900"
      >
        <span className="hidden sm:block">Next 13</span>
      </Link>
    </div>
  )
}
