import '@/app/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Drawbar } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'moto',
  description: 'moto - site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-theme="luxury" className={inter.className}>
        <Header />
        <Drawbar />
        <div className='pt-18'>
          {children}
        </div>
      </body>
    </html>
  )
}