import './index.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dao Van Nham - Developer',
  description: 'My App Description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-900 text-white antialiased">
      <head />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
