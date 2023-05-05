import React, { useState } from 'react'

const FlightsSidebar = ({ showSidebar , setShowSidebar }) => {

  const [ priceRange , setPriceRange ] = useState(50000/2);
  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-5 py-1 border-r-2">
      <div className="border-b border-gray-900/10 pb-12">
        <div className="flex flex-row justify-start items-start gap-x-5">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Filters</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Set filters according to your preferences
            </p>
          </div>
          <div className=" md:hidden h-10 flex justify-between items-center py-[2px] px-3 border-2 border-sky-600 my-2 rounded transition-all duration-500" onClick={()=> setShowSidebar(!showSidebar)}>
            <span className="text-lg tracking-tight font-medium text-sky-800">{showSidebar ? 'Close' : 'Filter'}</span>
          </div>
        </div>
        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Popular Filters</legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    Non Stop
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="candidates" className="font-medium text-gray-900">
                    Prenoon departures
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Evening Departures
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Early Morning Departures
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="w-full">
              <div className="flex flex-row justify-between items-center">
                <legend className="text-sm font-semibold leading-6 text-gray-900">Price Range</legend>
                <div className="w-fit h-6 px-3 flex justify-center items-center">
                  ₹&nbsp;<input 
                    type='text' 
                    value={priceRange} 
                    onChange={(e)=> setPriceRange(e.target.value)} 
                    className='text-sm font-bold text-gray-600 tracking-wide border-0 w-20 h-5 focus:outline-0'
                  />
                </div>
              </div>
              <input 
                type="range" 
                onChange={(e)=> {
                  setPriceRange(e.target.value)
                }}
                value={priceRange}
                min={3000}
                max={50000}
                className='w-full'
              />
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Airlines</legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    IndiGo
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="candidates" className="font-medium text-gray-900">
                    Vistara
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Emirates
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Qatar Airways
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Spicejet
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Swiss
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default FlightsSidebar