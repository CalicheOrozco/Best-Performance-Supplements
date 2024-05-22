import Image from 'next/image'
function About () {
  return (
    <section className='bg-black px-4 md:px-12'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl pb-4 font-bold text-teal-400'>
          ABOUT US
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Text Section */}
          <div className='flex flex-col gap-y-3'>
            <p>
              At BPS, we believe that every athlete, fitness enthusiast, and
              weekend warrior deserves the best fuel to power their journey.
            </p>
            <p>
              Whether you're looking to build muscle, increase endurance, boost
              energy, or recover faster, we've got you covered with products
              that deliver real results.
            </p>
            <p>
              But we’re more than just supplements. We're a community. We’re
              here to inspire, motivate, and support you every step of the way.
            </p>
            <p>Your best performance starts here.</p>
          </div>
          {/* Image Section (Optional based on design) */}
          <div className='animate-fade-right flex justify-center items-center'>
            <Image
              src='/About-us.jpeg'
              alt='people enjoying supplements'
              width={350}
              height={350}
              className='rounded-md shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
