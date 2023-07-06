import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fuchsia App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-zinc-400 px-4 py-2 container mx-auto`}>{children}</body>
    </html>
  )
}
