import Link from 'next/link'

import Sidebar from '@/components/sidebar'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
