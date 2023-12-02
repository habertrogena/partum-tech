"use client";

import { TruncateText } from '@/utils/trancateText';
import Image from 'next/image';
import React from 'react'

interface ProductCardProp{
  data:any
}

export  function ProductCard({data}:ProductCardProp) {
  return (
    <div className='
    col-span-1
    cursor-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover-scale-105
    text-center
    text-sm
    '>
        <div className='flex flex-col items-center w-full gap-1'>
            <div className='aspect-square overflow-hidden relative w-full'>
              <Image 
                unoptimized
              fill
              src={data.images[0].image}
              alt={data.name}
              className='w-full h-full object-contain'
              
              />
            </div>
            <div className='mt-4'>
              {TruncateText(data.name)}
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}