import Image from 'next/image'
import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveFlight } from '@/Redux/Flight'

import Styles from '@/styles/scrollbar.module.css'

const FlightCard = ({ flightData }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const { _id ,flightId , airline , departureDate , arrivalDate , aircraft , class:airlineClass , from , to , pickupAirport ,  destinationAirport , departureTime , arrivalTime , DAN , PAN , airlineLogo } = flightData;

    let options = [];
    const [ selectedClass , setSelectedClass ] = useState('Class');
    const [ dates , setDates ] = useState({
        dd: '',
        ad: ''
    })

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', {
          month: 'long',
        });
    }
    const saveFlightData = (id , selectedFlightData) => {
        dispatch(saveFlight(selectedFlightData));
        router.push({
            pathname: `/flights/${id}`,
            query: {
                data: JSON.stringify({ selectedFlightData }),
                selectedClass: selectedClass
            }
        }, `/flights/${id}`)
    }

    useEffect(()=> {
        airlineClass.map( item => {
            options.push({ value: item.airlineClassName.toLowerCase() , label: item.airlineClassName })
        })
        let formattedDDate = {
            day: departureDate.split('/')[0],
            month: getMonthName(departureDate.split('/')[1]),
            year: departureDate.split('/')[2]
        }
        let formattedADate = {
            day: arrivalDate.split('/')[0],
            month: getMonthName(arrivalDate.split('/')[1]),
            year: arrivalDate.split('/')[2]
        }
        setDates({
            dd: `${formattedDDate.day} ${formattedDDate.month} ${formattedDDate.year}`,
            ad: `${formattedADate.day} ${formattedADate.month} ${formattedADate.year}`,
        })
    },[])

  return (
    <div className='w-full h-[40vh]  rounded-lg p-3'>
        <div className="flex flex-row justify-between items-center h-full">
            <div className="w-[80%] h-full flex flex-col justify-between items-center">
                <div className="w-full h-fit bg-white border-t-2 border-l-2 rounded-tl-lg flex flex-row justify-between items-center">
                    <div className='flex flex-row gap-x-8 justify-start items-center'>
                        <div className="relative w-16 h-16 overflow-hidden m-2">
                            <Image src={`${airlineLogo}`} loader={()=> airlineLogo} fill={true} alt='airline-log'/>
                        </div>
                        <div className="w-fit h-12 flex flex-col justify-center items-start">
                            <label className="text-sm text-gray-400 font-bold tracking-wide">Flight ID</label>
                        <span className="text-lg font-medium uppercase tracking-wider">{flightId}</span>
                        </div>
                    </div>
                    <div className="w-fit h-12 flex flex-col justify-center items-start">
                        <label className="text-sm text-gray-400 font-bold tracking-wide">Airline</label>
                        <span className="text-[1.700rem] font-light tracking-wide capitalize whitespace-nowrap">{airline}</span>
                    </div>
                </div>

                <div className="w-full h-[80%] bg-[rgb(249,249,249)] overflow-hidden rounded-bl-lg">
                    <div className="h-full p-2 flex flex-row gap-2 justify-between items-center">

                        <div className="w-full h-full">
                            <div className="flex flex-col justify-between items-center h-full">
                                <div className="h-24 w-full flex flex-col gap-y-3">
                                    <div className="w-full h-10 flex flex-col justify-center items-start">
                                        <label className="text-sm text-gray-400 font-bold tracking-wide">Departure Date</label>
                                        <span className="text-md font-medium tracking-wide">{dates.dd}</span>
                                    </div>
                                    <div className="w-full h-10 flex flex-col justify-center items-start">
                                        <label className="text-sm text-gray-400 font-bold tracking-wide">Arrival Date</label>
                                        <span className="text-md font-medium tracking-wide">{dates.ad}</span>
                                    </div>
                                </div>
                                <div className="h-12 w-full mt-3.5">
                                    <div className="w-full h-10 flex flex-col justify-center items-start">
                                        <label className="text-sm text-gray-400 font-bold tracking-wide">Aircraft</label>
                                        <span className="text-md font-medium tracking-wide">{aircraft}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="w-[160%] h-full flex flex-col justify-between items-center">
                            <div className='w-full h-full flex flex-row justify-between items-center'>
                                <div className="h-full w-[45%] flex flex-col gap-y-2 justify-around items-center">
                                    <div className="w-full h-8 flex flex-col justify-center items-center">
                                        <label className="text-[12px] text-gray-400 font-bold tracking-wide">IATA</label>
                                        <span className="text-lg font-medium tracking-wide">{pickupAirport}</span>
                                    </div>
                                    <div className="w-full h-8 flex flex-col justify-center items-center">
                                    <label className="text-[12px] text-gray-400 font-bold tracking-wide">Departure Time</label>
                                        <span className="text-2xl font-medium tracking-wider">{departureTime}</span>
                                    </div>
                                    <div className="w-full h-8 flex flex-col justify-center items-center text-center">
                                        <label className="text-[12px] text-gray-400 font-bold tracking-wide">Airport</label>
                                        <span className="text-[12px] tracking-wide leading-tight">{PAN}</span>
                                    </div>
                                </div>
                                <div className="h-full w-[45%] flex flex-col justify-around items-center">
                                <div className="w-full h-8 flex flex-col justify-center items-center">
                                    <label className="text-[12px] text-gray-400 font-bold tracking-wide">Destination IATA</label>
                                        <span className="text-lg font-medium tracking-wide">{destinationAirport}</span>
                                    </div>
                                    <div className="w-full h-8 flex flex-col justify-center items-center">
                                        <label className="text-[12px] text-gray-400 font-bold tracking-wide">Arrival Time</label>
                                        <span className="text-2xl font-medium tracking-wider">{arrivalTime}</span>
                                    </div>
                                    <div className="w-full h-8 flex flex-col justify-center items-center text-center">
                                        <label className="text-[12px] text-gray-400 font-bold tracking-wide">Destination Airport</label>
                                        <span className="text-[12px] tracking-wide leading-tight">{DAN}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-full flex flex-col justify-between items-center">
                            <div className="w-full h-14 px-10 ">
                                <label className="text-[12px] text-gray-400 font-bold tracking-wide leading-tight">Choose your class:</label>
                                <div className="relative w-full h-10 bg-white group rounded-lg">
                                    <div className="w-full h-full shadow flex flex-col justify-center items-start">
                                        <div className='w-full flex justify-center items-center px-3'>
                                            <span className="text-lg tracking-tight uppercase my-auto leading-tight whitespace-nowrap">{selectedClass}</span>
                                        </div>
                                    </div>
                                    <div className={` mt-1 absolute w-full transition-all duration-300 h-0 group-hover:h-20 origin-top bg-white rounded-md top-10 group:hover:p-5 overflow-hidden flex flex-col justify-center items-start`}>
                                        <div className={`border-1 border-gray-400 w-[98%] h-[98%] rounded overflow-x-hidden overflow-y-auto ${Styles.noScrollbar}`} >
                                            {airlineClass.map((item , index) => (
                                                <div key={index} className="w-full min-h-8 h-fit text-center hover:cursor-pointer" onClick={() => {
                                                    setSelectedClass(item.airlineClassName)
                                                }}>
                                                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap hover:text-sky-600">{item.airlineClassName}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-fit h-fit flex flex-col justify-center items-start border-b-4 border-white m-2 py-1 px-2">
                                {selectedClass == 'Class' ? <span className="text-sm font-medium  text-gray-600">Select class to check fare</span> : airlineClass.map((item , key) => (
                                    <div key={key}>
                                        {item.airlineClassName == selectedClass && <span className="text-3xl">₹ {item.fare}</span>}
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[20%] h-full flex flex-col justify-between items-center bg-white rounded-tr-lg rounded-br-lg border-b-2 border-r-2 border-t-2">
                <div className="w-full h-[50%] flex flex-col justify-between items-center px-3 py-2">
                    <div className="w-[70%] h-12 flex flex-col justify-center items-start">
                        <label className="text-[12px] text-gray-400 font-bold tracking-wide">From</label>
                        <span className="text-lg font-medium tracking-wide capitalize">{from}</span>
                    </div>
                    <div className="w-[70%] h-12 flex flex-col justify-center items-start">
                        <label className="text-[12px] text-gray-400 font-bold tracking-wide">To</label>
                        <span className="text-lg font-medium tracking-wide capitalize">{to}</span>
                    </div>
                </div>
                <button onClick={()=> saveFlightData(_id , flightData) } className="w-[90%] h-[20%] flex flex-col justify-center items-center bg-neutral-800 m-2 rounded">
                    <span className="text-3xl text-white">Book</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default FlightCard