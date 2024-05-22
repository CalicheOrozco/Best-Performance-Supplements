import Image from 'next/image'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
function Contact () {
  return (
    <section className='bg-black px-4 md:px-12'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl pb-4 font-bold text-teal-400'>
          Contact
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Text Section */}
          <div className='flex flex-col gap-y-3'>
            <p>Got any questions?</p>
            <p>Wanna know more?</p>
            <p>Feel free to reach out to us!</p>
            <p>
              Email us at{' '}
              <a
                href='mailto:test@test.com'
                className='text-teal-500 hover:underline'
              >
                Email
              </a>
            </p>

            <p>Follow us on social media:</p>
            <div className='flex flex-row gap-4'>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebookSquare className='text-4xl text-teal-500' />
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram className='text-4xl text-teal-500' />
              </a>
              <a
                href='https://www.twitter.com/'
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter className='text-4xl text-teal-500' />
              </a>
            </div>
          </div>

          {/* Image Section (Optional based on design) */}
          <div className='animate-fade-right'>
            <Image
              src='/contact.jpeg'
              alt='people enjoying supplements'
              width={600}
              height={600}
              className='rounded-md shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
