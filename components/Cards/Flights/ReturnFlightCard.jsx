import Image from 'next/image'
import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveFlight } from '@/Redux/Flight'

import Styles from '@/styles/scrollbar.module.css'
import FlightCard from './FlightCard'

const ReturnFlightCard = (flight) => {
  return (
    <div className="flex flex-col gap-y-5 rounded-lg py-3 bg-zinc-100">
        <div className="px-5 flex flex-col justify-center items-start">
            <div className="w-full text-left px-3">
                <span className="text-3xl">Outgoing Flight:</span>
            </div>
            <FlightCard flightData={flight.flightData} />
        </div>
        <div className="px-5 flex flex-col justify-center items-start">
            <div className="w-full text-left px-3">
                <span className="text-3xl">Returning Flight:</span>
            </div>
            <FlightCard flightData={flight.returnFlight} />
        </div>
    </div>
  )
}

export default ReturnFlightCard