import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anurag Gupta - Full Stack Developer & Cybersecurity Enthusiast',
  description: 'Portfolio of Anurag Gupta, an engineering student specializing in full-stack development and cybersecurity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

