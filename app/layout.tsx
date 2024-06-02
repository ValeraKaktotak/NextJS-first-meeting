import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Main page',
  description: 'Main page description',
}

export default function RootLayout({children, modal}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={inter.className}>
            <h1>HEADER</h1>
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                {children}
                <div id='modal'>{modal}</div>
              </div>
          </body>
      </html>
  )
}