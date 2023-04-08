import React from 'react'
import FlightsSidebar from '@/components/Sidebar/FlightsSidebar'

const FlightsLayout = ({children}) => {
  return (
    <div className='w-full h-fit flex flex-row justiyf-between items-start scroll-smooth'>
        <div className="w-0 md:w-[20vw] h-full min-h-screen overflow-hidden">
            <FlightsSidebar />
        </div>
        <div className="w-full lg:w-[80vw] h-full min-h-screen">
        <div className="md:hidden flex justify-end items-center h-14 w-full border-b-[1px] border-black px-2">
          <div className="float-right py-[0.8px] px-3 border-2 border-sky-600 my-2">
            <span className="text-lg tracking-tight font-medium text-sky-800">Filter</span>
          </div>
        </div>
            {children}
        </div>
    </div>
  )
}

export default FlightsLayout