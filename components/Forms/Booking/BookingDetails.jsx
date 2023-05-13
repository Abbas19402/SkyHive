import React , { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import Icon from '@/components/Icons';
import Forms from '..';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setTickets , setBooking } from '@/Redux/Booking/Ticket';

const BookingDetails = ({ data , chosenClass , returnFlightData , chosenReturnClass }) => {
  console.log(data);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(state => state.userData.user);
  const [ passengerCount , setpassengerCount ] = useState(1);
  const [ passengers , setPassengers ] = useState([]);

  const savePassenger = (passengerDetails) => {
    setPassengers((old) => {
      return [...old , passengerDetails]
    })
  }

  const TaxImplied = (cost, airlineClass , NOP) => {
    if(airlineClass.airlineClassName.toLowerCase() == 'economy') {
      let taxCost = cost * 5 / 100 * passengerCount
      return taxCost
    } else {
      let taxCost = cost * 12 / 100 * passengerCount
      return taxCost
    }
  }
  
  const Cost = () => {
    let totalFareInReturn = 0
    if(returnFlightData !== null && chosenReturnClass !== null) {
      totalFareInReturn = parseInt(chosenReturnClass.fare) * passengerCount
    };

    let totalFare = parseInt(chosenClass.fare) * passengerCount;
    let finalFare = 0 , tax = {
      outgoing: 0,
      returning: 0
    };
    if(returnFlightData !== null) {
      tax.outgoing = TaxImplied(totalFare , chosenClass);
      tax.returning = TaxImplied(totalFareInReturn , chosenClass)
      finalFare = totalFare + totalFareInReturn + tax.outgoing + tax.returning
    } else {
      tax.outgoing = TaxImplied(totalFare , chosenClass)
      finalFare = totalFare + tax.outgoing;
    }
    return { 
      outgoingFare: parseInt(chosenClass.fare) * passengerCount,
      totalFare: totalFare + totalFareInReturn , 
      returnFare: totalFareInReturn ,
      tax: tax , 
      finalFare: finalFare
    }
  }

  const confirmBooking = async() => {
    const isAdultAvailable = passengers.some((item) => item.category.toLowerCase() == 'adult' );
    if(!isAdultAvailable) {
      toast.warn('Atleast one adult is needed for travel');
    } else {
      const booking = {
        user: user,
        passenger: passengers,
        flightId: data.flightId,
        class: chosenClass,
        totalCost: Cost().finalFare
      }
      try {
        let returnRes = null;
        const res = await axios.request({
          method: 'POST',
          url: 'https://skyhive-admin.vercel.app/api/bookings/book_flight',
          headers: {
              "Authorization" : `Bearer ${JSON.parse(user.access_token)}`
          },
          data: {
            flightId: booking.flightId,
            user: user.email,
            passengers: passengers,
            selectedClass: chosenClass
          }
        })
        if(returnFlightData !== null) {
          returnRes = await axios.request({
            method: 'POST',
            url: 'https://skyhive-admin.vercel.app/api/bookings/book_flight',
            headers: {
                "Authorization" : `Bearer ${JSON.parse(user.access_token)}`
            },
            data: {
              flightId: returnFlightData.flightId,
              user: user.email,
              passengers: passengers,
              selectedClass: chosenReturnClass
            }
          })
        }
        router.push('/checkout/pay')
        dispatch(setTickets({
          outbound: res,
          inbound: returnRes 
        }))
        dispatch(setBooking({
          outbound: res.data.data.booking_id,
          inbound: returnFlightData !== null ? returnRes.data.data.booking_id : null 
        }))
      } catch(error) {
        console.log(error)
      }
    }
  }
  return (
    <div className='w-full scroll-smooth'>
      <div
        className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[70deg] bg-gradient-to-bl from-[#80d7ff] to-[#fc8989] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        <div className="border-b border-gray-900/10 pb-12 w-full">
          <div className="flex flex-col justify-start items-start border-b border-gray-900/10 my-10 pb-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900">User Information</h2>
            <div className="my-5 mb-10 flex flex-col md:flex-row gap-x-6 w-full md:w-fit">
              <div className="w-full md:w-[50%] my-2">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={user.username}
                    disabled
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-[100%] my-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    disabled
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start border-b border-gray-900/10 my-10 pb-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Passenger Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
            <div className="md:w-[30%] mt-4 w-full">
              <label htmlFor="passengerCount" className="block text-sm font-medium leading-6 text-gray-900">
                No. of Passengers
              </label>
              <div className="my-2 flex flex-col justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full">
                  <input
                    type="text"
                    name="passengerCount"
                    id="passengerCount"
                    onChange={(count) => setpassengerCount(count)}
                    value={passengerCount}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  pointer-events-none"
                  />
                  <div className="h-fit w-fit flex flex-col">
                    <button className='scale-y-[0.7] scale-x-75 m-0' disabled={passengerCount == 5 ? true : false} onClick={() => {
                      setpassengerCount(passengerCount + 1)
                    }}>
                      <Icon.Chevron_Up />
                    </button>
                    <button className='scale-y-[0.7] scale-x-75 m-0' disabled={passengerCount == 1 ? true : false} onClick={() => {
                      setpassengerCount(passengerCount - 1)
                    }}>
                      <Icon.Chevron_Down />
                    </button>
                  </div>
                </div>
              </div>
              {passengerCount == 5 && <div className="w-full -top-5 motion-safe:animate-bounce" >
                <span className="text-[12px] font-medium text-red-600">Can't add more than 5 passengers at a time.</span>
              </div>}
            </div>
            {[...Array(passengerCount)].map( (item , index) => (
              <div key={index} className='w-full'>
                <span className="text-xl capitalize">
                  Passenger {index+1}:
                </span>
                <Forms.booking.passenger savePassenger={savePassenger}/>
              </div>
              ) )}
          </div>

          <div className="flex flex-col justify-start items-start border-b border-gray-900/10 my-10 pb-5 w-full">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Flight Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Confirm your flight details!!.</p>
            
            <Forms.booking.flight flightData={data}/>
            {returnFlightData !== null && chosenReturnClass !== null && <div className='mt-14 w-full'>
              <h2 className="text-base font-semibold leading-7 text-gray-600">Return Flight Information</h2>
              <Forms.booking.flight flightData={returnFlightData} />
            </div>}
          </div>

          <div className="flex flex-col justify-start items-center border-b border-gray-900/10 my-10 pb-5 w-full">
            <div className='flex flex-col justify-start items-center w-full'>
              <div className="flex flex-col w-full mb-2">
                <span className="text-black font-medium text-base">Fare:</span>
                <div className="w-full pl-10 flex flex-col justify-start items-start">
                  <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-gray-600 font-medium text-base">Outbound</span>
                    <span className="text-gray-600 font-medium text-sm">{Cost().outgoingFare}</span>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-gray-600 font-medium text-base">Inbound (Return)</span>
                    <span className="text-gray-600 font-medium text-sm">{Cost().returnFare}</span>
                  </div>
                </div>
                <div className="w-full h-fit">
                  <div className="h-1 w-full bg-black"></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <span className="text-black font-bold text-base">Total</span>
                    <span className="text-black font-bold text-sm">{Cost().totalFare}</span>
                </div>
              </div>

              <div className="flex flex-col w-full mb-2">
                <span className="text-black font-medium text-base">Tax:</span>
                <div className="w-full pl-10 flex flex-col justify-start items-start">
                  <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-gray-600 font-medium text-base">Outbound</span>
                    <span className="text-gray-600 font-medium text-sm">{Cost().tax.outgoing}</span>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-gray-600 font-medium text-base">Inbound (Return)</span>
                    <span className="text-gray-600 font-medium text-sm">{Cost().tax.returning}</span>
                  </div>
                </div>
                <div className="w-full h-fit">
                  <div className="h-1 w-full bg-black"></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <span className="text-black font-bold text-base">Total</span>
                    <span className="text-black font-bold text-sm">{Cost().tax.outgoing + Cost().tax.returning}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <span className="text-black font-bold text-base">Total Fare</span>
                <span className="text-black font-bold text-base tracking-wider">{Cost().finalFare}</span>
              </div>
            </div>
            <div className='flex flex-row justify-end items-center w-full'>
              <button
                className="rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 "
                onClick={()=> confirmBooking()}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BookingDetails