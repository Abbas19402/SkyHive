import React from 'react'
import NavItems from '@/Constants/NavItems'

const Header = () => {
  return (
    <div className='w-full h-[12vh] bg-white fixed top-0 left-0 px-4'>
        <div className="flex justify-between items-center w-full h-full">
            <div className='border-2 border-black w-36 h-16'>

            </div>
            <div className="flex flex-row justify-center items-center gap-6">
                {NavItems.map((item , key) => (
                    <div key={key} className='flex flex-col gap-y-1 p-1 hover:cursor-pointer hover:scale-110 transition-all duration-300 rounded'>
                        <span className="text-xl text-black tracking-wide font-medium ">{item.name}</span>        
                        <div className={``}></div>
                    </div>
                ))}
            </div>
            <div className='border-2 border-black flex flex-row justify-center items-center gap-x-5 p-3'>
                <div className="w-10 h-10 border-2 border-black">

                </div>
                <div className="w-10 h-10 border-2 border-black">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header