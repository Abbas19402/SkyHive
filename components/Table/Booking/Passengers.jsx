import React from 'react'
import { useSelector } from 'react-redux';

const Passengers = (data) => {
    const { passengers , seats } = data
    
    console.log(data);
  return (
    <table className="w-full text-sm text-left text-gray-500 rounded-lg overflow-hidden">
        <tr className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <th scope="col" className="px-6 py-3">
                S. No.
            </th>
            <th scope="col" className="px-6 py-3">
                Passenger Name
            </th>
            <th scope="col" className="px-6 py-3">
                Age
            </th>
            <th scope="col" className="px-6 py-3">
                Class
            </th>
            <th scope="col" className="px-6 py-3">
                Seat No.
            </th>
            <th scope="col" className="px-6 py-3">
                Category
            </th>
        </tr>
        {passengers.map((item , index) => (
            index%2 == 0 ? <tr key={index} className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {item.firstName} {item.lastName}
                </td>
                <td className="px-6 py-4">
                    {item.age}
                </td>
                <td className="px-6 py-4">
                    {data.AirlineClass.airlineClassName}
                </td>
                <td className="px-6 py-4">
                    {seats[index].number}
                </td>
                <td className="px-6 py-4 capitalize">
                    {item.category}
                </td>
            </tr> : <tr className="border-b bg-gray-50 ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {item.firstName} {item.lastName}
                </td>
                <td className="px-6 py-4">
                    {item.age}
                </td>
                <td className="px-6 py-4">
                    {data.AirlineClass.airlineClassName}
                </td>
                <td className="px-6 py-4">
                    {seats[index].number}
                </td>
                <td className="px-6 py-4 capitalize">
                    {item.category}
                </td>
            </tr>
        ))}
    </table>
  )
}

export default Passengers