import React from 'react'

const FlightsTable = ({ flight , setShowModal , showModal }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr className='text-center'>
              <th scope="col" className="px-6 py-3">
                S. No.
              </th>
              <th scope="col" className="px-6 py-3">
                Flight ID
              </th>
              <th scope="col" className="px-6 py-3">
                Departure
              </th>
              <th scope="col" className="px-6 py-3">
                Arrival
              </th>
              <th scope="col" className="px-6 py-3">
                Departure Date
              </th>
              <th scope="col" className="px-6 py-3">
                Remove Flight
              </th>
            </tr>
          </thead>
          <tbody>
            {flight.map((item, index) => (
              <tr key={index} className="bg-white border-b text-center">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{item.flightId}</td>
                <td className="px-6 py-4 capitalize">{item.from}</td>
                <td className="px-6 py-4 capitalize">{item.to}</td>
                <td className="px-6 py-4">{item.departureDate}</td>
                <td className="px-6 py-4 hover:cursor-pointer hover:scale-110 transition-all duration-500">
                  <div onClick={() => {
                        setShowModal(!showModal)
                    }}>
                    <span className="underline tracking-wide text-red-500 font-medium transition-all duration-500">
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default FlightsTable