import Image from 'next/image'
function Products () {
  return (
    <section className='bg-black px-4 md:px-12'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl pb-4 font-bold text-teal-400'>
          PRODUCTS
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Text Section */}
          <div className='flex flex-col gap-y-3'>
            <p>
              Our products are designed to give you the energy you need to power
              through your workouts and achieve your fitness goals.
            </p>
            <p>You'll feel the difference in your performance and recovery.</p>
            <p>
              Try our supplements today and experience the boost you've been
              looking for!
            </p>
          </div>
          {/* Image Section (Optional based on design) */}
          <div className='animate-fade-right'>
            <Image
              src='/supplements6.jpeg'
              alt='people enjoying supplements'
              width={500}
              height={500}
              className='rounded-md shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
