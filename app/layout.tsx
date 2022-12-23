import './index.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white text-slate-900 antialiased">
      <head />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
