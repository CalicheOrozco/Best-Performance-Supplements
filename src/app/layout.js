import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Performance Supplements Landingpage',
  description:
    "Unlock your full potential with our premium range of performance supplements. Designed to fuel your workouts and accelerate your recovery, our products provide the energy and nutrients you need to achieve your fitness goals. Whether you're a seasoned athlete or just starting your fitness journey, feel the difference with every dose. Try our supplements today and experience the boost you've been looking for!",
  image: '/favicon2.ico'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
