import React from 'react'
// import DatePicker from 'react-date-picker'

const SearchFlights = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl'>
        <div className="w-full h-full flex flex-col border-2 border-black rounded-xl overflow-hidden">
          <div className="border-2 border-red-500 w-full h-full flex flex-row justify-between items-center">
            <div className="w-full h-full flex flex-col gap-2 justify-center items-center p-2 border-2 border-sky-700 ">
              <div className="w-full h-full flex flex-row border-2 border-green-800">
                <span className="text-3xl text-gray-600 capitalize tracking-wide font-[400]">
                  From
                </span>
              </div>
              <div className="w-full h-full border-2 border-green-800">
                {/* TextField / Dropdown */}
                <div className="group w-full h-full flex flex-col justify-between items-center border border-amber-600">
                  {/* <DatePicker /> */}
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-2 border-sky-700">
              <span className="text-xl">To</span>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-2 border-sky-700">
              <span className="text-xl">Departure</span>
            </div>
          </div>
          <div className="border-2 border-red-500 w-full h-full flex flex-col justify-between items-center">
            <div className="border-2 border-sky-700 w-full h-full flex flex-row">
              <div className="w-full h-full flex flex-col justify-center items-center border-2 border-sky-700">
                <span className="text-xl">Return</span>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center border-2 border-sky-700">
                <span className="text-xl">Button</span>
              </div>
            </div>
            <div className="border-2 border-sky-700 w-full h-[40%] flex justify-start items-center">
              <span className="text-xl">Radio Buttons</span>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default SearchFlights