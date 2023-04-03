import React , { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select' 
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

import Icon from '../Icons';

const SearchFlights = () => {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isReturnSelected, setIsReturnSelected] = useState(false);
  const [ airportsData , setAirportsData ] = useState();

  const customDateComponent = <div className='group relative w-fit h-fit flex flex-col justify-between items-center hover:cursor-pointer'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='w-full h-full px-2 py-1.5 rounded-md  font-medium tracking-wide'>
          <span className="text-base font-[400] tracking-wide text-gray-600">{isDateSelected ? `${departureDate.getDate()}/${departureDate.getMonth()}/${departureDate.getFullYear()}` : "Departure"}</span>
        </div>
        <div className="p-2">
          <Icon.Calendar className="fill-gray-600 group-hover:fill-sky-700"/>
        </div>
      </div>
    </div>

  const customReturnDateComponent = <div className='group relative w-fit h-fit flex flex-col justify-between items-center hover:cursor-pointer'>
  <div className='flex flex-row justify-between items-center w-full'>
    <div className='w-full h-full px-2 py-1.5 rounded-md  font-medium tracking-wide'>
      <span className={`text-base font-[400] tracking-wide ${!isReturnSelected ? 'text-gray-300' : 'text-gray-600'}`}>{isDateSelected ? `${returnDate.getDate()}/${returnDate.getMonth()}/${returnDate.getFullYear()}` : "Return Date"}</span>
    </div>
    <div className="p-2">
      <Icon.Calendar className={`${!isReturnSelected ? 'fill-gray-300' : 'fill-gray-600'} ${isReturnSelected && 'group-hover:fill-sky-700'}`}/>
    </div>
  </div>
  </div>

  const Search = async(e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.append('departure', `${departureDate.getDate()}/${departureDate.getMonth()}/${departureDate.getFullYear()}`);
    if(isReturnSelected) {
      form.append('return', `${returnDate.getDate()}/${returnDate.getMonth()}/${returnDate.getFullYear()}`);
    }
    let values = {};
    for (var pair of form.entries()) {
      values[pair[0]] = pair[1];
    }
    console.log(values);

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/api/flights/search',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJcIjY0MjgwZDY5ZjY5MWE3MDI2NzlkMzY5M1wiIiwidXNlcm5hbWUiOiJBYmJhcyBBbGkgRGFsYWwiLCJpYXQiOjE2ODA1MjM5MTMsImV4cCI6MTY4MDUyNzUxM30.xXbMgaKhuhY28GnPgEnCScI6oNi5xrpYwp35zmr3uOU'
      },
      data: values
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(()=> {
    let data = localStorage.getItem('airports')
    let airports = [];
    JSON.parse(data).rows.map( item => {
      airports.push({value: item.city , label: `${item.city + ', '+ item.country}`})
    })
    setAirportsData(airports)
  },[])

  return (
    <form onSubmit={Search} className='w-full h-full bg-white rounded-xl'>
        <div className="w-full h-full flex flex-col rounded-xl">
          <div className=" w-full h-full flex flex-row justify-between items-center">
            <div className="w-full h-full px-2">
              <div className="group w-full h-full flex flex-col gap-y-2 justify-center items-center">
                <div className='px-2 w-full'>
                  <label htmlFor='from' className="text-md font-medium tracking-wide">From</label>
                </div>
                <div className="flex flex-row justify-around items-center w-full px-2">
                  <Select options={airportsData} name='from' className='w-full' placeholder="Pickup" />
                </div>  
              </div>
            </div>
            <div className="w-full h-full px-2">
              <div className="group w-full h-full flex flex-col gap-y-2 justify-center items-center">
                <div className='px-2 w-full'>
                  <label htmlFor='to' className="text-md font-medium tracking-wide">To</label>
                </div>
                <div className="flex flex-row justify-around items-center w-full px-2">
                  <Select options={airportsData} name='to' className='w-full' placeholder="Destination" />
                </div>
              </div>
            </div>
            <div className="w-full h-full px-2">
              <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center">
                <div className="px-2 w-full">
                  <label htmlFor="departure" className="text-md font-medium tracking-wide">Departure</label>
                </div>
                <div className="w-full px-2">
                  <DatePicker 
                    dateFormat="dd/mm/yyyy" 
                    selected={departureDate}
                    name='departure' 
                    onSelect={()=>setIsDateSelected(true)} 
                    onChange={(date) => setDepartureDate(date)} 
                    className='mx-auto rounded-md w-full font-medium tracking-wide border-[1px] hover:border-sky-600 border-gray-300 z-10' 
                    customInput={customDateComponent}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full h-full flex flex-row">
            <div className="w-full h-full px-2">
              <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center">
                <div className="px-2 w-full">
                  <label htmlFor="return" className={`text-md font-medium ${!isReturnSelected ? 'text-gray-300' : 'text-black'} tracking-wide`}>Return</label>
                </div>
                <div className={`w-full px-2 ${!isReturnSelected && 'pointer-events-none'}`}>
                  <DatePicker 
                    dateFormat="dd/mm/yyyy" 
                    selected={returnDate} 
                    name='return'
                    disabled={!isReturnSelected}
                    onSelect={()=>setIsDateSelected(true)} 
                    onChange={(date) => setReturnDate(date)} 
                    className={`mx-auto rounded-md w-full font-medium tracking-wide border-[1px] ${isReturnSelected && 'hover:border-sky-600'} border-gray-300`}
                    customInput={customReturnDateComponent}
                  />
                </div>
              </div>
            </div>
              <div className="w-full h-full flex flex-col justify-center items-end pr-4">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-auto"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Icon.Flight className="h-5 w-5 fill-white group-hover:fill-gray-800"  />
                  </span>
                  Search
                </button>
              </div>
            </div>
            <div className="w-full h-[40%] flex flex-row justify-start items-center gap-x-3 px-4 py-1">
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <input type="radio" name="booking-type" onChange={()=> setIsReturnSelected(false)} value={'one-way'}/> <label htmlFor="booking-type" className="text-md font-medium tracking-wide">One Way</label>  
              </div>
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <input type="radio" name="booking-type" onChange={()=> setIsReturnSelected(true)} value={'return'}/> <label htmlFor="booking-type" className="text-md font-medium tracking-wide">Return</label>  
              </div>
            </div>
          </div>
        </div>
    </form>  
  )
}

export default SearchFlights