import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Courgette } from 'next/font/google'

const courgette = Courgette({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Food Ordering App',
  description: 'The best food ordering app in town',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={courgette.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
