import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todwal Infotech - High-Converting Websites for Local Businesses',
  description: 'Professional web development for clinics, gyms, salons, and coaching centers',

   verification: {
    google: 'VxWhXAFb2QOijzduAwIKcKt71hsfi2WV_6gf5rgMnrg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}