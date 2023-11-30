import React from 'react'
interface FooterListProps{
    children:React.ReactNode
}

export  function FooterList({children}:FooterListProps) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 md-6 flex flex-col gap-2'>{children}</div>
  )
}
