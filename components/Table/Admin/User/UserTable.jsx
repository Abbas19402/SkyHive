import React from 'react'

const UserTable = ({ user , setShowModal , showModal , GetBookings }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr className='text-center'>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                S. No.
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Username
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Email
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Admin
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Bookings
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index} className="bg-white border-b text-center">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4 capitalize">
                  {item.email == "abbas.dalal19402@gmail.com"
                    ? "true"
                    : "false"}
                </td>
                <td className="px-6 py-4 hover:cursor-pointer hover:scale-110 transition-all duration-500">
                  <div onClick={() => {
                        setShowModal(!showModal)
                        GetBookings(item._id)
                    }}>
                    <span className="underline tracking-wide hover:text-blue-500 font-medium transition-all duration-500">
                      Click
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default UserTable