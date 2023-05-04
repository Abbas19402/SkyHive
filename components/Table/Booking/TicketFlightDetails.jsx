import React from "react";

const TicketFlightDetails = ({ flightId, flight, selectedClass, type }) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg">{type}</span>
      <div className="flex flex-row justify-start items-center gap-x-2">
        <span className="font-bold tracking-wide">Flight No.: </span>
        <span className="tracking-tight font-medium">{flightId}</span>
      </div>
      <div className="flex justify-start items-center gap-x-4">
        <div className="flex flex-row justify-start items-center gap-x-2">
          <span className="font-bold tracking-wide">Departure: </span>
          <span className="tracking-tight font-medium capitalize">
            {flight?.from}
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-x-2">
          <span className="font-bold tracking-wide">Arrival: </span>
          <span className="tracking-tight font-medium capitalize">
            {flight?.to}
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-4">
        <div className="flex flex-row justify-start items-center gap-x-2">
          <span className="font-bold tracking-wide">Departure Date: </span>
          <span className="tracking-tight font-medium">
            {flight?.departureDate}
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-x-2">
          <span className="font-bold tracking-wide">Arrival Date: </span>
          <span className="tracking-tight font-medium">
            {flight?.arrivalDate}
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-4">
        <div className="flex flex-row justify-start items-center gap-x-2">
          <span className="font-bold tracking-wide">Departure Time: </span>
          <span className="tracking-tight font-medium">
            {flight?.departureTime}
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-x-2">
          <span className="font-bold tracking-wide">Arrival Time: </span>
          <span className="tracking-tight font-medium">
            {flight?.arrivalTime}
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-x-2">
        <span className="font-bold tracking-wide">Airline: </span>
        <span className="tracking-tight font-medium">{flight?.airline}</span>
      </div>
      <div className="flex flex-row justify-start items-center gap-x-2">
        <span className="font-bold tracking-wide">Class: </span>
        <span className="tracking-tight font-medium">
          {selectedClass.airlineClassName}
        </span>
      </div>
    </div>
  );
};

export default TicketFlightDetails;
