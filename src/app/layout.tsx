import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/header'
import { DefaultProviders } from './components/default-providers'
import Footer from './components/footer'

const coolvetica = localFont({
  src: '../assets/fonts/Garet-Book.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'bolha dev_help',
  description:
    'Aplicação para que os devs consigam se ajudar tirando suas dúvidas e se ajudando.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={coolvetica.className}>
        <DefaultProviders>
          <Header />
          <ToastContainer
            position="bottom-right"
            theme="dark"
            autoClose={1500}
          />
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
