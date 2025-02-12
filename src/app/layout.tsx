import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

// Componentes
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'

export const viewport: Viewport = {
    themeColor: '#000000',
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1,
    viewportFit: 'cover',
}

export const metadata: Metadata = {
    title: 'Gustavo Frehse',
    description: '...',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={lexend.className}>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    )
}
