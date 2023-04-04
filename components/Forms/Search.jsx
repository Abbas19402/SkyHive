import React , { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select' 
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import "react-datepicker/dist/react-datepicker.css";

import Icon from '../Icons';

const SearchFlights = () => {
  const router = useRouter();
  const user = useSelector(state => state.userData.user);

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isReturnSelected, setIsReturnSelected] = useState(false);
  const [ airportsData , setAirportsData ] = useState();

  const customDateComponent = <div className='group relative w-fit h-fit flex flex-col justify-between items-center hover:cursor-pointer'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='w-full h-full px-2 py-1.5 rounded-md  font-medium tracking-wide'>
          <span className="text-base font-[400] tracking-wide text-gray-600">{isDateSelected ? `${departureDate.getDate()}/${departureDate.getMonth() + 1}/${departureDate.getFullYear()}` : "Departure"}</span>
        </div>
        <div className="p-2">
          <Icon.Calendar className="fill-gray-600 group-hover:fill-sky-700"/>
        </div>
      </div>
    </div>

  const customReturnDateComponent = <div className='group relative w-fit h-fit flex flex-col justify-between items-center hover:cursor-pointer'>
  <div className='flex flex-row justify-between items-center w-full'>
    <div className='w-full h-full px-2 py-1.5 rounded-md  font-medium tracking-wide'>
      <span className={`text-base font-[400] tracking-wide ${!isReturnSelected ? 'text-gray-300' : 'text-gray-600'}`}>{isDateSelected ? `${returnDate.getDate()}/${returnDate.getMonth() + 1}/${returnDate.getFullYear()}` : "Return Date"}</span>
    </div>
    <div className="p-2">
      <Icon.Calendar className={`${!isReturnSelected ? 'fill-gray-300' : 'fill-gray-600'} ${isReturnSelected && 'group-hover:fill-sky-700'}`}/>
    </div>
  </div>
  </div>

  const Search = async(e) => {
    e.preventDefault();
    const { access_token } = user

    const form = new FormData(e.currentTarget);
    form.append('departure', `${departureDate.getDate()}/${departureDate.getMonth() + 1}/${departureDate.getFullYear()}`);
    if(isReturnSelected) {
      form.append('return', `${returnDate.getDate()}/${returnDate.getMonth()}/${returnDate.getFullYear()}`);
    }
    let values = {};
    for (var pair of form.entries()) {
      values[pair[0]] = pair[1];
    }

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/api/flights/search',
      headers: {
        'Authorization': `Bearer ${JSON.parse(access_token)}`
      },
      data: values
    };
     
    axios.request(options).then(function (response) {
      console.log(response.data);
      const { searchedFlights } = response.data
      router.push({
        pathname: '/flights',
        query: {
          data: JSON.stringify({ searchedFlights })
        }
      },'/flights')
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(()=> {
    let airports = [
      {value: 'udaipur' , label: 'Udaipur'},
      {value: 'ahmedabad' , label: 'Ahmedabad'},
      {value: 'mumbai' , label: 'Mumbai'},
      {value: 'new york' , label: 'New York'},
      {value: 'san diego' , label: 'San Diego'},
      {value: 'kuwait city' , label: 'Kuwait City'}
    ]
    setAirportsData(airports)
  },[])

  return (
    <form onSubmit={Search} className='w-full h-full bg-white md:rounded-xl'>
        <div className="w-full h-full flex flex-col rounded-xl py-8 px-2 md:py-0 md:px-0">
          <div className=" w-full h-full flex flex-col gap-y-4 lg:flex-row justify-between items-center">
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
                    className='mx-auto rounded-md w-full font-medium tracking-wide border-[1px] hover:border-sky-600 border-gray-300' 
                    customInput={customDateComponent}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full h-full flex flex-col lg:flex-row">
              <div className="w-full h-[60%] md:h-full px-2">
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
              <div className="lg:hidden w-full h-[40%] flex flex-row justify-start items-center gap-x-3 px-4 py-1">
                <div className='flex flex-row justify-start items-center gap-x-2'>
                  <input type="radio" name="booking-type" onChange={()=> setIsReturnSelected(false)} value={'one-way'}/> <label htmlFor="booking-type" className="text-md font-medium tracking-wide">One Way</label>  
                </div>
                <div className='flex flex-row justify-start items-center gap-x-2'>
                  <input type="radio" name="booking-type" onChange={()=> setIsReturnSelected(true)} value={'return'}/> <label htmlFor="booking-type" className="text-md font-medium tracking-wide">Return</label>  
                </div>
              </div>
              <div className="w-full h-[40%] md:h-full flex justify-center items-end px-4 lg:pr-4 pb-3 md:pb-0">
                {/* <Link href={'/flights'}  className="w-full h-full flex flex-col justify-center items-end pr-4"> */}
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-auto"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Icon.Flight className="h-5 w-5 fill-white group-hover:fill-gray-800"  />
                    </span>
                    Search
                  </button>
                {/* </Link> */}
              </div>
            </div>
            <div className="hidden lg:flex w-full h-[40%] flex-row justify-start items-center gap-x-3 px-4 py-1">
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