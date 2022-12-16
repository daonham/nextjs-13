import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center gap-x-1 rounded-lg border border-slate-200 bg-slate-100 py-2 px-3 text-center text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 md:top-8 md:left-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-slate-600">Enter your email to sign in to your account</p>
        </div>
        <p className="px-8 text-center text-sm text-slate-600">
          <Link href="/register" className="hover:text-brand underline">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
