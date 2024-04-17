import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/global.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Bulário Eletronico',
  description: 'Acesse informações de medicamentos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
