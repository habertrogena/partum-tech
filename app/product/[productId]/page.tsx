import { Container } from '@/app/components/container/Container'

import React from 'react'
import { ProductDetails } from '../ProductDetails'

import { ListRating } from './listRating'
import { products } from '@/utils'

interface Iparams{
    productId?:string
    name? :string
}

export default function Product({params}:{params:Iparams}) {
    console.log('params',params)
    const product = products.find((item)=>item.id===params.productId)
    
  return (
    <div className='p-8'>
        <Container>
            <ProductDetails product={product} />
            <div className='flex flex-col mt-20 gap-4'>
              <div> Add rating</div>
              <ListRating product={product}/>
            </div>
        </Container>
    </div>
  )
}
