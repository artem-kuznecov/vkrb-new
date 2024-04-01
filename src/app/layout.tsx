import type { Metadata } from 'next'
import { Geologica } from 'next/font/google'

import './globals.scss'

export const metadata: Metadata = {
  title: 'LISA'
}

const geologica = Geologica({ subsets: ['cyrillic', 'latin'] })

export default function RootLayout ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html suppressHydrationWarning>
      <body className={geologica.className}>{children}</body>
    </html>
  )
}
