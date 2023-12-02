import Image from 'next/image'
import React from 'react'

export  function HomeBanner() {
  return (
    <div className=' relative bg-gradient-to-r from-sky-500 to bg-sky-700 mb-8'>
        <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row item-center justify-evenly'>
            <div className='mb-8 md:mb-0 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Summer Sale</h1>
                <p className='text-lg md:text-xl text-white mb-2'>Enjoy Discount on selected values</p>
                <p className='text-2xl md:text-5xl text-yellow-500 font-bold'>GET 30% OFF</p>
            </div>
            <div className='w-1/3 relative aspect-video'>
                <Image
                src='/banner-image.png'
                alt='Banner Image'
                layout="fill"
                className='object-contain'
                />

            </div>
        </div>
    </div>
  )
}
