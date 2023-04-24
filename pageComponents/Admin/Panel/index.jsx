import React from 'react'
import Icon from '@/components/Icons'
import Link from 'next/link'

const AdminPanelPage = () => {
  return (
    <div className="w-screen min-h-screen py-5">
      <div className="w-fit h-full flex justify-start items-start p-3 bg-neutral-200 rounded-lg mx-3">
        <div className="w-fit h-fit rounded-xl flex flex-row justify-center items-center gap-x-3 px-2 py-1">
          <span className="text-3xl text-gray-700 tracking-wide font-semibold">
            Add Flights
          </span>
          <Link href={'/admin/panel/flights/add'} className='border-2 border-transparent transition-all duration-300 hover:scale-125 hover:border-gray-300 px-3 py-1.5 rounded-md bg-neutral-800'>
            <Icon.Add className="fill-gray-300" />
          </Link>
        </div>
      </div>
      <div className="w-fit h-full flex justify-start items-start p-3 bg-neutral-200 rounded-lg mx-3 mt-5">
        <div className="w-fit h-fit rounded-xl flex flex-row justify-center items-center gap-x-3 px-2 py-1">
          <span className="text-3xl text-gray-700 tracking-wide font-semibold">
            Get All Users
          </span>
          <Link href={'/admin/panel/users'} className='border-2 border-transparent transition-all duration-300 hover:scale-125 hover:border-gray-300 px-3 py-1.5 rounded-md bg-neutral-800'>
            <Icon.User className="fill-gray-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminPanelPage

