import React , { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import { useSelector , useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteUser } from '@/Redux/Auth/AT';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';

import Icon from '@/components/Icons';
import http from '@/utils/http';

const SearchFlights = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector(state => state.userData.user);
  const loginStatus = useSelector(state => state.userData.loginStatus);

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isReturnSelected, setIsReturnSelected] = useState(false);
  const [ airportsData , setAirportsData ] = useState();
  const [ loading , setLoading ] = useState(false);

  const customDateComponent = <div className='group relative w-fit h-fit flex flex-col justify-between items-center hover:cursor-pointer'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='w-full h-full px-2 py-1.5 rounded-md  font-medium tracking-wide'>
          <span className="text-base font-[400] tracking-wide text-gray-600">{isDateSelected ? `${departureDate.getDate()}/${departureDate.getMonth() + 1}/${departureDate.getFullYear()}` : "Departure Date"}</span>
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
    if (loginStatus) {
      setLoading(true);
      const { access_token } = user;

      const form = new FormData(e.currentTarget);
      form.append(
        "departure",
        `${departureDate.getDate()}/${
          departureDate.getMonth() + 1
        }/${departureDate.getFullYear()}`
      );
      if (isReturnSelected) {
        form.append(
          "returnDate",
          `${returnDate.getDate()}/${
            returnDate.getMonth() + 1
          }/${returnDate.getFullYear()}`
        );
      }
      let values = {};
      for (var pair of form.entries()) {
        values[pair[0]] = pair[1];
      }

      const isFormValid = Object.values(values).every((item) => item !== "");
      toast.info(isFormValid);

      if (isFormValid) {
        await http
          .post("https://skyhive-admin.vercel.app/api/flights/search", values)
          .then((response) => {
            setLoading(false);
            if (values.booking_type == "return") {
              const { searchedFlights, returningFlight } = response;
              router.push(
                {
                  pathname: "/flights",
                  query: {
                    data: JSON.stringify({ searchedFlights, returningFlight }),
                    booking_type: "return",
                  },
                },
                "/flights"
              );
              localStorage.setItem(
                "flights",
                JSON.stringify({ searchedFlights, returningFlight })
              );
              localStorage.setItem("booking_type", "return");
            } else {
              console.log(response);
              const { searchedFlights } = response;
              router.push(
                {
                  pathname: "/flights",
                  query: {
                    data: JSON.stringify({ searchedFlights }),
                    booking_type: "one-way",
                  },
                },
                "/flights"
              );
              localStorage.setItem(
                "flights",
                JSON.stringify({ searchedFlights })
              );
              localStorage.setItem("booking_type", "one-way");
            }
          })
          .catch((error) => {
            console.error("error -> ",error);
            setLoading(false);
            if (error.status == "401") {
              dispatch(deleteUser());
              toast.warn("Your session has expired. Please login again!!");
            }
          });
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
      toast.warn("Login Required!!");
    }
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
  },[loading])

  return (
    <form onSubmit={Search} className='w-full h-full bg-white md:rounded-xl lg:py-2'>
        <div className="w-full h-full flex flex-col gap-y-4 rounded-xl py-8 px-2 md:py-0 md:px-0 ">
          <div className="w-full h-full flex flex-col gap-y-4 justify-between items-center">
            <div className="flex flex-col gap-y-3 md:flex-row justify-between items-center w-full">
              <div className="w-full h-full px-2">
                <div className="group w-full h-full flex flex-col gap-y-2 justify-center items-center">
                  <div className='px-2 w-full'>
                    <label htmlFor='from' className="text-md font-medium tracking-wide">From</label>
                  </div>
                  <div className="flex flex-row justify-around items-center w-full px-2">
                    <Select options={airportsData} required name='from' className='w-full' placeholder="Departure" />
                  </div>  
                </div>
              </div>
              <div className="w-full h-full px-2">
                <div className="group w-full h-full flex flex-col gap-y-2 justify-center items-center">
                  <div className='px-2 w-full'>
                    <label htmlFor='to' className="text-md font-medium tracking-wide">To</label>
                  </div>
                  <div className="flex flex-row justify-around items-center w-full px-2">
                    <Select options={airportsData} required name='to' className='w-full' placeholder="Arrival" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:flex-row justify-between items-center">
            <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center px-2">
              <div className="px-2 w-full">
                <label htmlFor="departure" className="text-md font-medium tracking-wide">Departure</label>
              </div>
              <div className="w-full px-2">
                <DatePicker 
                  dateFormat="dd/mm/yyyy" 
                  selected={departureDate}
                  name='departure' 
                  required
                  onSelect={()=>setIsDateSelected(true)} 
                  onChange={(date) => setDepartureDate(date)} 
                  className='mx-auto rounded-md w-full font-medium tracking-wide border-[1px] hover:border-sky-600 border-gray-300' 
                  customInput={customDateComponent}
                />
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center px-2">
              <div className="px-2 w-full">
                <label htmlFor="returnDate" className={`text-md font-medium ${!isReturnSelected ? 'text-gray-300' : 'text-black'} tracking-wide`}>Return</label>
              </div>
              <div className={`w-full px-2 ${!isReturnSelected && 'pointer-events-none'}`}>
                <DatePicker 
                  dateFormat="dd/mm/yyyy" 
                  selected={returnDate} 
                  name='returnDate'
                  required={true}
                  disabled={!isReturnSelected}
                  onSelect={()=>setIsDateSelected(true)} 
                  onChange={(date) => setReturnDate(date)} 
                  className={`mx-auto rounded-md w-full font-medium tracking-wide border-[1px] ${isReturnSelected && 'hover:border-sky-600'} border-gray-300`}
                  customInput={customReturnDateComponent}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full h-full flex flex-col lg:flex-row">
              <div className="lg:hidden flex w-full h-[40%] flex-row justify-start items-center gap-x-3 px-4 py-1">
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <input type="radio" required name="booking_type" onChange={()=> setIsReturnSelected(false)} value={'one-way'}/> <label htmlFor="booking_type" className="text-md font-medium tracking-wide">One Way</label>  
              </div>
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <input type="radio" required name="booking_type" onChange={()=> setIsReturnSelected(true)} value={'return'}/> <label htmlFor="booking_type" className="text-md font-medium tracking-wide">Return</label>  
              </div>
            </div>
            </div>
            <div className="hidden lg:flex w-full h-[40%] flex-row justify-start items-center gap-x-3 px-4 py-1">
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <input type="radio" required name="booking_type" onChange={()=> setIsReturnSelected(false)} value={'one-way'}/> <label htmlFor="booking_type" className="text-md font-medium tracking-wide">One Way</label>  
              </div>
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <input type="radio" required name="booking_type" onChange={()=> setIsReturnSelected(true)} value={'return'}/> <label htmlFor="booking_type" className="text-md font-medium tracking-wide">Return</label>  
              </div>
            </div>
            <div className="lg:w-72 place-self-end w-full h-[40%] md:h-full flex justify-center items-end px-4 lg:pr-4 pb-3 md:pb-0">
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {loading ? <div className='animate-spin'>
                    <Icon.Loader />
                    </div> : <div>
                      <Icon.Flight className="h-5 w-5 fill-white group-hover:fill-gray-800"  /> 
                  </div>}
                </span>
                  Search
              </button>
            </div>
          </div>
        </div>
    </form>  
  )
}

export default SearchFlights