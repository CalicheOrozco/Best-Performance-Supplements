import Footer from './Footer'
import Navbar from './Navbar'

export default function Container ({ children }) {
  return (
    <main className='min-h-screen flex flex-col bg-black text-white'>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
