'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GiBearFace } from 'react-icons/gi'
import { FaShoppingCart } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'

import myData from '../constants/data'

function Navbar () {
  // obtener el pathname de la url cada vez que se cambia de página
  const router = useRouter()
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [router])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='bg-black text-white px-4 py-4 min-h-[10vh] min-w-full'>
      <div className='flex md:flex-row justify-around items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <h1 className='font-semibold text-xl hover:text-teal-500 dark:hover:text-teal-500'>
              {myData.name}
            </h1>
            <h2 className='font-semibold text-xl hover:text-teal-500 dark:hover:text-teal-500'>
              {myData.designation}
            </h2>
          </Link>
        </div>

        <div className='space-x-8 px-6 hidden lg:flex font-semibold'>
          <Link href='/'>
            <div className='flex flex-row gap-x-2'>
              {pathname === '/' && (
                <FaDumbbell className='text-2xl text-teal-600' />
              )}
              <span
                className={
                  pathname === '/'
                    ? `text-teal-600 font-bold`
                    : `lg:hover:text-teal-500`
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
                    ? `text-teal-600 font-bold`
                    : `lg:hover:text-teal-500`
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
                    ? `text-teal-600 font-bold`
                    : `lg:hover:text-teal-500`
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
                    ? `text-teal-600 font-bold`
                    : `lg:hover:text-teal-500`
                }
              >
                Contact
              </span>
            </div>
          </Link>
        </div>

        <div className='hidden md:flex gap-4 '>
          <Link href='/shop'>
            <span className='flex gap-x-2 text-base font-bold p-1.5 md:p-3 bg-teal-600 rounded-xl hover:bg-teal-500 '>
              <FaShoppingCart className='inline-block text-xl' />
              {'Shop'}
            </span>
          </Link>
        </div>
      </div>
      <div className='flex gap-x-4 justify-around items-center text-center lg:hidden mt-4 font-semibold'>
        <Link href='/'>
          <span
            className={
              pathname === '/'
                ? ` text-teal-600  font-bold`
                : `lg:hover:text-teal-500`
            }
          >
            {'Home'}
          </span>
        </Link>
        <Link href='/products'>
          <span
            className={
              pathname === '/products'
                ? ` text-teal-600  font-bold`
                : `lg:hover:text-teal-500`
            }
          >
            {'Products'}
          </span>
        </Link>
        <Link href='/about'>
          <span
            className={
              pathname === '/about'
                ? ` text-teal-600  font-bold`
                : `lg:hover:text-teal-500`
            }
          >
            {'About us'}
          </span>
        </Link>
        <Link href='/contact'>
          <span
            className={
              pathname === '/contact'
                ? ` text-teal-600  font-bold`
                : `lg:hover:text-teal-500`
            }
          >
            {'Contact'}
          </span>
        </Link>
      </div>

      <div className='flex md:hidden w-full gap-4 justify-center py-5'>
        <Link href='/shop'>
          <span className=' flex gap-x-2 text-base font-bold p-3 md:p-3 bg-teal-600 rounded-xl hover:bg-teal-500 '>
            <FaShoppingCart className='inline-block text-xl' />
            {'Shop'}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
