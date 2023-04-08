import React from 'react'
import Icon from '@/components/Icons'
import Link from 'next/link'

const AdminPanelPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[40vw] h-[45vh] border-2 border-dashed border-black rounded-xl flex flex-col justify-center items-center gap-5">
          <span className="text-3xl text-gray-700 tracking-wide font-semibold">
            Add Flights
          </span>
          <Link href={'/admin/panel/flights/add'} className='border-2 border-transparent transition-all duration-300 hover:scale-125 hover:border-gray-300 px-3 py-1.5 rounded-md bg-neutral-800'>
            <Icon.Add className="fill-gray-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminPanelPage

