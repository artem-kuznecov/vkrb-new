import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'LISA'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
