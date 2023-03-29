import Header from '@/components/Header/Header'
import React from 'react'

const RootLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto'>
        <div className="sticky top-0 left-0 z-10">
            <Header/>
        </div>
        <div className='w-full h-full mt-[12vh]'>
            {children}
        </div>
    </div>
  )
}

export default RootLayout