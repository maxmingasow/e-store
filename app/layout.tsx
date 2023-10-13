import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import Notification from '@/components/notification'
import ModalProvider from '@/lib/providers/modal-provider'
import ToastProvider from '@/lib/providers/toast-provider'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })
export const metadata = {
  title: 'Store',
  description: 'A store for all your needs',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Notification />
        <ModalProvider />
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
