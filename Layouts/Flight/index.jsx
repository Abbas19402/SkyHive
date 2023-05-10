import React , { useState } from 'react'
import FlightsSidebar from '@/components/Sidebar/FlightsSidebar'

const FlightsLayout = ({children}) => {
  const [ showSidebar , setShowSidebar ] = useState(false)
  return (
    <div className='w-full h-fit flex flex-row justiyf-between items-start scroll-smooth'>
        <div className={`${showSidebar ? 'w-[100vw]' : 'w-0'} transition-all duration-500 md:w-[20vw] h-full min-h-screen overflow-hidden`}>
            <FlightsSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        <div className={`${showSidebar ? 'w-0' : 'w-full'} overflow-hidden lg:w-[80vw] h-full min-h-screen`}>
          <div className="md:hidden flex justify-between items-center h-14 w-full border-b-[1px] border-black px-2">
            <span className="text-xl tracking-wider font-light text-gray-700">Select Filters</span>
            <div className="flex justify-between items-center py-[0.8px] px-3 border-2 border-sky-600 my-2 rounded transition-all duration-500" onClick={()=> setShowSidebar(!showSidebar)}>
              <span className="text-lg tracking-tight font-medium text-sky-800">{showSidebar ? 'Close' : 'Filter'}</span>
            </div>
          </div>
          {children}
        </div>
    </div>
  )
}

export default FlightsLayout