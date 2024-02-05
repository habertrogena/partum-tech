"use client";


import Image from 'next/image';
import React from 'react'
import {Rating} from '@mui/material'
import { useRouter } from 'next/navigation';
import { TruncateText, formatPrice } from '@/utils';

interface ProductCardProp{
  data:any
}

export  function ProductCard({data}:ProductCardProp) {
  const router = useRouter();
  const productRating = data.reviews.reduce((acc:number , item:any)=> item.rating + acc , 0) / data.reviews.length
  return (
    <div 
     onClick={()=> router.push(`/product/${data.id}`)}
    className='
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
            <div>
              <Rating value={productRating} readOnly />
            </div>
             <div>{data.reviews.length} reviews</div> 
            <div className='font-semibold'>{formatPrice(data.price)}</div>
        </div>
    </div>
  )
}
