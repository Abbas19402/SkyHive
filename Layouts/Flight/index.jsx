import React from 'react'
import FlightsSidebar from '@/components/Sidebar/FlightsSidebar'

const FlightsLayout = ({children}) => {
  return (
    <div className='w-full h-fit flex flex-row justiyf-between items-start'>
        <div className="w-[20vw] h-full border-2 border-black min-h-screen">
            <FlightsSidebar />
        </div>
        <div className="w-[80vw] h-full min-h-screen">
            {children}
        </div>
    </div>
  )
}

export default FlightsLayout