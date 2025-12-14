import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jedidiah Unekwu-Ojo David | Cybersecurity & Networking Expert',
  description: 'Technology enthusiast with comprehensive expertise in computer networking, network security, and IT systems administration with more than 5 years of experience.',
  keywords: ['Cybersecurity', 'Network Security', 'System Administration', 'IT Infrastructure', 'Linux', 'Windows'],
  authors: [{ name: 'Jedidiah Unekwu-Ojo David' }],
  creator: 'Jedidiah Unekwu-Ojo David',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary-white text-primary-dark min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}