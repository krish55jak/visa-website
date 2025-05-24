import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Best Demand',
  description: 'The best visa services for your needs',
  keywords: [
    'visa services', 
    'visa application',
    'travel visa',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
