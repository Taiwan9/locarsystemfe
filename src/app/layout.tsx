import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Locar System',
  description: 'Sistema de aluguel Veicular',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${roboto.variable}`} lang="pt-br">
      <body className="font-roboto">{children}</body>
    </html>
  )
}
