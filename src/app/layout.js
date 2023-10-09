import './globals.css'
import { Inter } from 'next/font/google'
import Header from './layout/header/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Martinez Tattoo Stúdio',
  description: 'Quer uma tatuagem personalizada ? nós podemos te ajudar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
        
        </body>
    </html>
  )
}
