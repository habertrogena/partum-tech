import React from 'react'

import { FooterList } from './FooterList'
import Link from 'next/link'
import {MdFacebook} from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { Container } from '../container'

export  function Footer() {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className=' flex flex-col md:flex-row justify-between pt-16 pb-8
        '>
          <FooterList>
            <h3 className='text-base font-bold'>Shop Categories</h3>
            <Link href='#'> Phones</Link>
            <Link href='#'> laptops</Link>
            <Link href='#'> Destops</Link>
            <Link href='#'> Tvs</Link>
            <Link href='#'> Accesories</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold'>Customer Service</h3>
            <Link href='#'> Contact Us</Link>
            <Link href='#'> Shipping Policy</Link>
            <Link href='#'> FAQ</Link>
            <Link href='#'> Returns&Exchanges</Link>
            
          </FooterList>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-base font-bold'>About Us</h3>
           <p className='mp-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies,
           </p>
           <p>@copy {new Date().getFullYear()} Partum~Tech. All Rights Reserved</p>
          </div>
          <FooterList>
            <h3 className='text-base font-bold'>Follow Us</h3>
            <div className='flex gap-2 '>
            <Link href='#'>
              <MdFacebook size={24} />
            </Link>
            <Link href='#'>
              <AiFillInstagram size={24} />
            </Link>
          
            </div>
          </FooterList>

        </div>
      </Container>
       </footer>
  )
}
