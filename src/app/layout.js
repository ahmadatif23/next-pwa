import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyNextPwa',
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  icons: { apple: '/icon.png' },
  themeColor: 'blue',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
