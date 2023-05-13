import React from 'react'
import Image from 'next/image'
import { useLottie } from 'lottie-react'
import FlightAnimationJSON from '@/Animations/FlightAnimation'
import BannerImage from '@/public/Assets/Images/Banners/HomeBanner2.jpg'
import Forms from '@/components/Forms'
import Styles from '@/styles/scrollbar.module.css'
import { Sacramento } from 'next/font/google'

const rochester = Sacramento({
  subsets: ['latin'],
  weight: '400'
})

const Banner = () => {
  const { View:FlightAnimation } = useLottie({
    animationData: FlightAnimationJSON,
    loop: true
  })
  return (
    <div className={`w-full ${Styles.noScrollbar}`}>
      <div className="relative w-full h-fit lg:h-[88vh] z-10 top-0 left-0 flex justify-center items-center">
        <div className="relative w-full h-full lg:min-h-fit lg:h-fit flex flex-col lg:flex-row justify-around items-center px-5 lg:pr-10 gap-10">
          <div className={`relative ${rochester.className} w-full h-full bg-gradient-to-r from-yellow-500 via-blue-300 to-sky-500 bg-clip-text py-5 px-10 md:px-36 md:py-20 lg:py-5 lg:px-10 text-center lg:text-left`}>
            <span className="text-transparent text-5xl lg:text-[4.0rem] leading-relaxed">Don't just book a flight, take off with Skyhive</span>
          </div>
          <div className="relative w-full h-full lg:w-[50%] lg:h-[90%] py-10">{FlightAnimation}</div>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-start items-center md:p-20 lg:py-36 w-full h-full lg:bg-slate-50">
        <div className="text-left w-full px-6 mt-6 lg:my-4">
          <span className="text-2xl lg:text-4xl font-thin md:font-light tracking-wider">Search your flights here</span>
        </div>
        <div className="w-full h-full rounded-xl shadow-xl lg:p-3 bg-white flex justify-center items-center">
          <Forms.SearchFlights/>
        </div>
      </div>
    </div>
  )
}

export default Banner