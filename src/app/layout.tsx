import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-6xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        {children}
        <footer className="mt-32">
          <div className="sm:px-8">
            <div className="mx-auto max-w-6xl lg:px-8">
              <div className="border-t border-black pt-10 pb-16 dark:border-zinc-700/40">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto lg:px-28 sm:px-0 max-w-2xl lg:max-w-5xl">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                      <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a><a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
                        <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a><a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a>
                      </div>
                      <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        © SERrex Labs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
