import React from 'react'
import Card from '@/components/Cards'

const FlightsPage = ({ flights }) => {
  return (
    <div className='w-full h-fit'>
        <div className="p-2 flex flex-col gap-y-5">
            {flights.searchedFlights.map( (item,index) => (
                <div key={index}>
                    <Card.FlightCard flightData={item}  />
                </div>
            ) )}
        </div>
    </div>
  )
}

export default FlightsPage