import React from 'react'
import Image from 'next/image'
import BannerImage from '@/public/Assets/Images/Banners/HomeBanner2.jpg'
import Forms from '@/components/Forms'

const Banner = () => {
  return (
    <div className='w-full h-[70vh]'>
      <div className="absolute w-full h-[70vh] mt-[12vh] z-10 top-0 left-0">
        <div className="relative w-full h-[70vh] overflow-x-hidden overflow-y-visible">
            <Image src={`${BannerImage.src}`} alt='Banner' fill={true} priority={true}/>
        </div>
      </div>
      <div className="z-10 relative flex justify-start items-center px-20 w-full h-full">
        <div className="w-[50vw] h-[30vh]">
          <Forms.SearchFlights/>
        </div>
      </div>
    </div>
  )
}

export default Banner