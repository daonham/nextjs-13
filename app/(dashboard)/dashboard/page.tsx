import { getCurrentUser } from '@/lib/session'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <>
      <section>Dashboad Page</section>
      <p>Current User: {user.email}</p>
      <code>{JSON.stringify(user)}</code>
    </>
  )
}
