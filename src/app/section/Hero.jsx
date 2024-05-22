import { RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from '../components/RainbowHighlight'
import myData from '../constants/data'
import Image from 'next/image'

export default function Hero () {
  const colors = ['#20C997', '#FF8C42', '#17A2B8', '#6F42C1']
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full pb-4'>
      {/* Image container */}
      <div>
        <div className='relative w-3/4 mx-auto'>
          <Image
            src={myData.avatarUrl}
            alt='avatar'
            width={600}
            height={600}
            className='shadow rounded'
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'></div>
          </div>
        </div>
      </div>
      {/* Text container */}
      <div className='flex flex-col gap-y-4'>
        <RoughNotationGroup show={true}>
          {['Harder', 'Better', 'Faster', 'STRONGER'].map((text, idx) => (
            <RainbowHighlight key={idx} color={colors[idx]}>
              <h1 className='font-roboto text-4xl mx-4 md:text-6xl xl:text-7xl font-bold text-white'>
                {text}
              </h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  )
}
