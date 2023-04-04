import React from 'react'
import Image from 'next/image'
import BannerImage from '@/public/Assets/Images/Banners/HomeBanner2.jpg'
import Forms from '@/components/Forms'

const Banner = () => {
  return (
    <div className='w-full h-fit md:h-[70vh]'>
      <div className="relative md:absolute w-full h-[25vh] lg:h-[70vh] md:mt-[12vh] z-10 top-0 left-0">
        <div className="relative w-full h-[25vh] md:h-[30vh] lg:h-[70vh] overflow-x-hidden overflow-y-visible">
            <Image src={`${BannerImage.src}`} alt='Banner' fill={true} priority={true}/>
        </div>
      </div>
      <div className="z-10 relative flex justify-start items-center md:p-20 lg:px-20 w-full h-full">
        <div className="w-full h-[60vh] md:h-[45vh] lg:w-[50vw] lg:h-[30vh]">
          <Forms.SearchFlights/>
        </div>
      </div>
    </div>
  )
}

export default Banner