import Image from 'next/image'
import React, { useEffect } from 'react'
import Logo from '../../../public/Assets/Images/Logos/etihadAirways.jpg'
import { useRouter } from 'next/router'
import Select from 'react-select'

const FlightCard = ({ flightData }) => {
    const router = useRouter();
    const { flightId , airline , departureDate , arrivalDate , aircraft , class:airlineClass , from ,to , pickupAirport , destinationAirport , departureTime , arrivalTime } = flightData;
    console.log();
    let options = [];
    useEffect(()=> {
        console.log(airlineClass);
        airlineClass.map( item => {
            options.push({ value: item.toLowerCase() , label: item })
        })
    },[])
  return (
    <div className='w-full h-[35vh]  rounded-lg p-3'>
        <div className="flex flex-row justify-between items-center h-full">
            <div className="w-[80%] h-full flex flex-col justify-between items-center">
                <div className="w-full h-fit flex flex-row justify-start items-center bg-blue-100 rounded-tl-lg">
                    <div className="relative w-12 h-12 border-2 border-black rounded-tl-lg overflow-hidden">
                        <Image src={`/${Logo}`} fill={true} alt='airline-log'/>
                    </div>
                    <div className="w-40 h-12 flex justify-center items-center">
                        <span className="text-lg font-light tracking-wide">{airline}</span>
                    </div>
                    <div className="w-32 h-12 flex justify-center items-center">
                        <span className="text-lg font-light uppercase tracking-wide">{flightId}</span>
                    </div>
                </div>

                <div className="w-full h-[80%] bg-gray-100">
                    <div className="h-full p-2 flex flex-row gap-2 justify-between items-center">

                        <div className="w-full h-full">
                            <div className="flex flex-col justify-between items-center h-full">
                                <div className="h-24 w-full">
                                    <div className="w-full h-10 flex justify-center items-center">
                                        <span className="text-lg font-medium tracking-wide">{departureDate}</span>
                                    </div>
                                    <div className="w-full h-10 flex justify-center items-center">
                                        <span className="text-lg font-medium tracking-wide">{arrivalDate}</span>
                                    </div>
                                </div>
                                <div className="h-12 w-full">
                                    <div className="w-full h-10 flex justify-center items-center">
                                        <span className="text-lg font-medium tracking-wide">{aircraft}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="w-[160%] h-full flex flex-col justify-between items-center">
                            <div className='w-full h-full flex flex-row justify-between items-center'>
                                <div className="h-full w-[35%] flex flex-col justify-around items-center">
                                    <div className="w-full h-8 flex justify-center items-center">
                                        <span className="text-lg font-medium tracking-wide">{pickupAirport}</span>
                                    </div>
                                    <div className="w-full h-8 flex justify-center items-center">
                                        <span className="text-2xl font-medium tracking-wider">{departureTime}</span>
                                    </div>
                                    <div className="w-full h-8 flex justify-center items-center text-center">
                                        <span className="text-sm tracking-wide leading-tight">Pickup Airport Name</span>
                                    </div>
                                </div>
                                <div className="h-full w-[35%] flex flex-col justify-around items-center">
                                <div className="w-full h-8 flex justify-center items-center">
                                        <span className="text-lg font-medium tracking-wide">{destinationAirport}</span>
                                    </div>
                                    <div className="w-full h-8 flex justify-center items-center">
                                        <span className="text-2xl font-medium tracking-wider">{arrivalTime}</span>
                                    </div>
                                    <div className="w-full h-8 flex justify-center items-center text-center">
                                        <span className="text-sm tracking-wide leading-tight">Destination airport name</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <div className="w-full h-16">
                                <Select options={options}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[20%] h-full flex flex-col justify-between items-center bg-blue-100 rounded-tr-lg rounded-br-lg">
                <div className="w-full h-[50%] flex flex-col justify-between items-center">
                    <div className="w-full h-12 flex justify-center items-center">
                        <span className="text-lg font-medium tracking-wide capitalize">{from}</span>
                    </div>
                    <div className="w-full h-12 flex justify-center items-center">
                        <span className="text-lg font-medium tracking-wide capitalize">{to}</span>
                    </div>
                </div>
                <div className="w-full h-[20%] flex justify-center items-center border-2 border-black rounded-br-lg  ">
                    <span className="text-3xl">FARE</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightCard