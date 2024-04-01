import { Geologica } from 'next/font/google'
import type { Metadata } from 'next'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { Providers } from './providers'

import './globals.scss'

export const metadata: Metadata = {
  title: 'LISA'
}

const geologica = Geologica({ subsets: ['cyrillic', 'latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={geologica.className}>
        <Providers>
          <Sidebar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
