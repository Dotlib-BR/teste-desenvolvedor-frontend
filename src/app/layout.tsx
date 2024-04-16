import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dotlib Farma',
  description:
    'Bulário eletrônico - consulte medicamentos de forma simples e descomplicada.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark flex flex-col w-full `}>
        {children}
      </body>
    </html>
  )
}
