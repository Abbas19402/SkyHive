import React from 'react'

const FlightDetailForm = ({ flightData }) => {
  return (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
            <div className="sm:col-span-3 opacity-70 pointer-events-none">
                <label htmlFor="flightId" className="block text-sm font-medium leading-6 text-gray-900">
                Flight ID
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="flightId"
                    id="flightId"
                    readOnly
                    value={flightData.flightId}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-3 opacity-70 pointer-events-none">
                <label htmlFor="airline" className="block text-sm font-medium leading-6 text-gray-900">
                Airline
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="airline"
                    id="airline"
                    readOnly
                    value={flightData.airline}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-3 opacity-70 pointer-events-none">
                <label htmlFor="from" className="block text-sm font-medium leading-6 text-gray-900">
                From
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="from"
                    id="from"
                    readOnly
                    value={flightData.from}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize"
                />
                </div>
            </div>

            <div className="sm:col-span-3 opacity-70 pointer-events-none">
                <label htmlFor="to" className="block text-sm font-medium leading-6 text-gray-900">
                To
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="to"
                    id="to"
                    readOnly
                    value={flightData.to}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize"
                />
                </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1 opacity-70 pointer-events-none">
                <label htmlFor="departureDate" className="block text-sm font-medium leading-6 text-gray-900">
                Departure Date
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="departureDate"
                    id="departureDate"
                    readOnly
                    value={flightData.departureDate}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-2 opacity-70 pointer-events-none">
                <label htmlFor="departureTime" className="block text-sm font-medium leading-6 text-gray-900">
                Departure Time
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="departureTime"
                    id="departureTime"
                    readOnly
                    value={flightData.departureTime}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-2 opacity-70 pointer-events-none">
                <label htmlFor="arrivalDate" className="block text-sm font-medium leading-6 text-gray-900">
                Arrival Date
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="arrivalDate"
                    id="arrivalDate"
                    readOnly
                    value={flightData.arrivalDate}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-2 opacity-70 pointer-events-none">
                <label htmlFor="arrivalTime" className="block text-sm font-medium leading-6 text-gray-900">
                Arrival Time
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="arrivalTime"
                    id="arrivalTime"
                    readOnly
                    value={flightData.arrivalTime}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="col-span-full opacity-70 pointer-events-none">
                <label htmlFor="PAN" className="block text-sm font-medium leading-6 text-gray-900">
                Airport Name
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="PAN"
                    id="PAN"
                    readOnly
                    value={flightData.PAN}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="col-span-full opacity-70 pointer-events-none">
                <label htmlFor="DAN" className="block text-sm font-medium leading-6 text-gray-900">
                Destination Airport Name
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="DAN"
                    id="DAN"
                    readOnly
                    value={flightData.DAN}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-3 opacity-70 pointer-events-none">
                <label htmlFor="aircraft" className="block text-sm font-medium leading-6 text-gray-900">
                    Aircraft
                </label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="aircraft"
                    id="aircraft"
                    readOnly
                    value={flightData.aircraft}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
        </div>
  )
}

export default FlightDetailForm