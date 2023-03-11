import Link from 'next/link'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Sidebar from '@/components/Sidebar'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
