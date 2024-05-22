'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GiBearFace } from 'react-icons/gi'
import { FaDumbbell } from 'react-icons/fa6'
import Image from 'next/image'

import { FaShoppingCart, FaBars } from 'react-icons/fa'

import myData from '../constants/data'

function Navbar () {
  const router = useRouter()
  const [pathname, setPathname] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [router])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const roughNotationElements = document.querySelectorAll('.RoughNotation')
    if (isMobileMenuOpen) {
      roughNotationElements.forEach(el => el.classList.add('hidden'))
    } else {
      roughNotationElements.forEach(el => el.classList.remove('hidden'))
    }
  }, [isMobileMenuOpen])

  return (
    <div className='bg-black text-white px-4 md:px-24 py-4 min-h-[10vh] min-w-full'>
      <div className='flex items-center justify-around w-full '>
        <div className='flex flex-col'>
          <Link href='/'>
            <Image
              src='/BPS_logo2.png'
              alt='logo'
              width={300}
              height={300}
              className='cursor-pointer'
            />
          </Link>
        </div>
        <div className='hidden lg:w-full lg:flex lg:justify-around lg:items-center space-x-8 font-semibold'>
          <div className='flex gap-x-7'>
            <Link href='/'>
              <div className='flex flex-row gap-x-2'>
                {pathname === '/' && (
                  <FaDumbbell className='text-2xl text-teal-600' />
                )}
                <span
                  className={
                    pathname === '/'
                      ? 'text-teal-600 font-bold'
                      : 'hover:text-teal-500'
                  }
                >
                  Home
                </span>
              </div>
            </Link>
            <Link href='/products'>
              <div className='flex flex-row gap-x-2'>
                {pathname === '/products' && (
                  <FaDumbbell className='text-2xl text-teal-600' />
                )}
                <span
                  className={
                    pathname === '/products'
                      ? 'text-teal-600 font-bold'
                      : 'hover:text-teal-500'
                  }
                >
                  Products
                </span>
              </div>
            </Link>
            <Link href='/about'>
              <div className='flex flex-row gap-x-2'>
                {pathname === '/about' && (
                  <FaDumbbell className='text-2xl text-teal-600' />
                )}
                <span
                  className={
                    pathname === '/about'
                      ? 'text-teal-600 font-bold'
                      : 'hover:text-teal-500'
                  }
                >
                  About us
                </span>
              </div>
            </Link>
            <Link href='/contact'>
              <div className='flex flex-row gap-x-2'>
                {pathname === '/contact' && (
                  <FaDumbbell className='text-2xl text-teal-600' />
                )}
                <span
                  className={
                    pathname === '/contact'
                      ? 'text-teal-600 font-bold'
                      : 'hover:text-teal-500'
                  }
                >
                  Contact
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Link href='/shop'>
              <span className='flex gap-x-2 text-base font-bold p-1.5 md:p-3 bg-teal-600 rounded-xl hover:bg-teal-500'>
                <FaShoppingCart className='inline-block text-xl' />
                Shop
              </span>
            </Link>
          </div>
        </div>
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMobileMenu} className='text-2xl'>
            <FaBars />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='lg:hidden flex flex-col items-center space-y-4 mt-4 font-semibold'>
          <Link href='/'>
            <span
              className={
                pathname === '/'
                  ? 'text-teal-600 font-bold'
                  : 'hover:text-teal-500'
              }
            >
              Home
            </span>
          </Link>
          <Link href='/products'>
            <span
              className={
                pathname === '/products'
                  ? 'text-teal-600 font-bold'
                  : 'hover:text-teal-500'
              }
            >
              Products
            </span>
          </Link>
          <Link href='/about'>
            <span
              className={
                pathname === '/about'
                  ? 'text-teal-600 font-bold'
                  : 'hover:text-teal-500'
              }
            >
              About us
            </span>
          </Link>
          <Link href='/contact'>
            <span
              className={
                pathname === '/contact'
                  ? 'text-teal-600 font-bold'
                  : 'hover:text-teal-500'
              }
            >
              Contact
            </span>
          </Link>
          <Link href='/shop'>
            <span className='flex gap-x-2 text-base font-bold p-3 bg-teal-600 rounded-xl hover:bg-teal-500'>
              <FaShoppingCart className='inline-block text-xl' />
              Shop
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
