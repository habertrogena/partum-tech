import { Container } from '@/app/components/container/Container'

import React from 'react'
import { ProductDetails } from '../ProductDetails'
import { product, products } from '@/utils'
import { ListRating } from './listRating'

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
            <div className='flex flex-col mt-20 gap-4'>
              <div> Add rating</div>
              <ListRating product={product}/>
            </div>
        </Container>
    </div>
  )
}
