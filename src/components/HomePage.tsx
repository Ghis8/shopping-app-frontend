import React from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function HomePage() {
  return (
    <div className='flex mt-5 px-2'>
      <LeftBar />
      <div className='w-4/6 relative'>
        <img src='/assets/headphone.jpg' className='h-[400px] w-full z-10 object-contain' />
        <span className='absolute uppercase top-[40%] text-2xl text-black font-extrabold left-[15%]'>up to 60% off</span>
        <div className='absolute bg-yellow-300 left-[15%] top-[50%] py-2 px-2'>
          <span className='font-bold text xs'>Branded headphone collection on sale</span>
        </div>
      </div>
      <RightBar />
    </div>
  )
}

export default HomePage