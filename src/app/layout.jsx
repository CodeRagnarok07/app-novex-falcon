import { Inter } from 'next/font/google'
import './globals.css'
import { meta } from './meta'
import Topbar from './ui/Topbar'
import Navbar from './ui/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = meta

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className + " bg-black text-white relative"}>

        <Topbar />
        <main className="main bg-light">
          {children}
        </main>
   

        <Navbar />

      </body>

    </html>
  )
}
