'use client'
import React from 'react'


interface ProductDetailsProp{
    product:any
}
export  function ProductDetails({product}:ProductDetailsProp) {
  console.log(product);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div>images</div>
      <div><h2>{product?.name}</h2></div>
    </div>
  )
}
