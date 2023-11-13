import { Inter } from 'next/font/google'
import './globals.css'
import { meta } from './meta'
import Navbar from './ui/Navbar'
import Fotter from './ui/Fotter'
import Car from './ui/Car'
import List from './ui/List'

const inter = Inter({ subsets: ['latin'] })

export const metadata = meta

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className + " bg-black text-white relative"}>

        <Navbar />

        <main className="main bg-light">
          {children}
        </main>
        <List />
        <Car />

        <Fotter />

      </body>

    </html>
  )
}
