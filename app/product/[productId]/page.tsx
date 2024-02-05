import { Container } from '@/app/components/container/Container'

import React from 'react'
import { ProductDetails } from '../ProductDetails'
import { product, products } from '@/utils'

interface Iparams{
    productId?:string
    name? :string
}

export default function Product({params}:{params:Iparams}) {
    console.log('params',params)
    
  return (
    <div className='p-8'>
        <Container>
            <ProductDetails product={product} />
        </Container>
    </div>
  )
}
