import React from 'react'
import Card from '@/components/Cards'

const FlightsPage = ({ flights , bookingType }) => {
  const ReturnFlightCardData = {
    searchedFlights: flights.searchedFlights,
    returningFlight: flights.returningFlight
  }
  console.log(bookingType);
  return (
    <div className='w-full h-fit'>
        <div className="p-2 flex flex-col gap-y-5">
          {flights.returningFlight ? [...Array(flights?.searchedFlights?.length)].map((_, index) => (
                <div key={index}>
                  {/* <Card.ReturnFlightCard flightData={ReturnFlightCardData.searchedFlights[index]} returnFlight={ReturnFlightCardData.returningFlight[index]}/> */}
                    <Card.FlightCard flightData={ReturnFlightCardData.searchedFlights[index]} returnFlight={ReturnFlightCardData.returningFlight[index]} bookingType={bookingType} />
                </div>
          )) : flights?.searchedFlights?.map( (item,index) => (
            <div key={index}>
                <Card.FlightCard flightData={item} returnFlight={null} bookingType={bookingType} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default FlightsPage