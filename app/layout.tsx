import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marketing & Sales Analytics Dashboard',
  description: 'Advanced ML, DL & Quantum Analytics Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

