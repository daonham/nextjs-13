import { notFound } from 'next/navigation'
import { getCurrentUser } from '@/lib/session'
import Menu from '@/components/Menu'
import Logo from '@/components/Logo'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 mx-auto bg-white px-4 sm:px-3 md:px-5">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <Logo />
          <Menu />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
