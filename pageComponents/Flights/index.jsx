import React from 'react'
import Card from '@/components/Cards'

const FlightsPage = ({ flights }) => {
  const ReturnFlightCardData = {
    searchedFlights: flights.searchedFlights,
    returningFlight: flights.returningFlight
  }
  return (
    <div className='w-full h-fit'>
        <div className="p-2 flex flex-col gap-y-5">
            {flights.returningFlight ? [...Array(flights?.searchedFlights?.length)].map((_, index) => (
                  <div key={index}>
                    <Card.ReturnFlightCard flightData={ReturnFlightCardData.searchedFlights[index]} returnFlight={ReturnFlightCardData.returningFlight[index]}/>
                  </div>
            )) : flights?.searchedFlights?.map( (item,index) => (
              <div key={index}>
                  <Card.FlightCard flightData={item}  />
              </div>
          ))}
        </div>
    </div>
  )
}

export default FlightsPage