import Modal from '@/components/Modal';
import Table from '@/components/Table';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const AllFlightsPage = () => {
    const user = useSelector(state => state.userData.user);

    const [ flights , setFlights ] = useState([]);
    const [ showModal , setShowModal ] = useState(false);

    const GetAllFlights = async() => {
        const { data } = await axios.request({
            method: 'GET',
            url: 'https://skyhive-admin.vercel.app/api/flights/getAllFlights',
            headers: {
                'Authorization': `Bearer ${JSON.parse(user.access_token)}`
            }
        })
        setFlights(data.flights)
    }

    useEffect(()=> {
        GetAllFlights()
    },[flights])
  return (
    <div className=' px-5 py-5 md:px-10 lg:py-10 lg:px-32'>
        <div className="rounded-lg overflow-x-auto">
            <Table.FlightsTable flight={flights} showModal={showModal} setShowModal={setShowModal}/>
        </div>
        <Modal.DeleteFlight setShowModal={setShowModal} showModal={showModal}/>
    </div>
  )
}

export default AllFlightsPage