import React from 'react'
import Icon from '@/components/Icons'
import Link from 'next/link'

const AdminPanelPage = () => {
  return (
    <div className="w-screen min-h-screen py-5 flex flex-row justify-start items-start">
      <Link href={'/admin/panel/flights/add'} className=" transition-all duration-300 hover:border-neutral-500 border-2 border-neutral-300 w-fit h-full flex justify-start items-start hover:bg-yellowy-700/50 rounded-lg mx-3">
        <div className="w-fit h-fit rounded-xl flex flex-col gap-y-2 justify-center bg-neutral-200/50 items-center gap-x-3 px-5 py-4">
          <span className="text-3xl text-gray-700 tracking-wide font-semibold">
            Add Flights
          </span>
          <div>
            <Icon.Add className="fill-neutral-800" />
          </div>
        </div>
      </Link>
      <Link href={'/admin/panel/users'} className=" transition-all duration-300 hover:border-neutral-500 border-2 border-neutral-300 w-fit h-full flex justify-start items-start hover:bg-cyan-700/50 rounded-lg mx-3">
        <div className="w-fit h-fit rounded-xl flex flex-col gap-y-2 justify-center bg-neutral-200/50 items-center gap-x-3 px-5 py-4">
          <span className="text-3xl text-gray-700 tracking-wide font-semibold">
            All Users
          </span>
          <div >
            <Icon.User className="fill-neutral-800" />
          </div>
        </div>
      </Link>
      <Link href={'/admin/panel/flights'} className=" transition-all duration-300 hover:border-neutral-500 border-2 border-neutral-300 w-fit h-full flex justify-start items-start hover:bg-rose-700/50 rounded-lg mx-3">
        <div className="w-fit h-fit rounded-xl flex flex-col gap-y-2 justify-center bg-neutral-200/50 items-center gap-x-3 px-5 py-4">
          <span className="text-3xl text-gray-700 tracking-wide font-semibold">
            All Flights
          </span>
          <div>
            <Icon.Flight className="fill-neutral-800" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AdminPanelPage

