import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import FlightsLayout from '@/Layouts/Flight';
import FlightsPage from '@/pageComponents/Flights';
import { useSelector } from 'react-redux';

const Flights = () => {
  const router = useRouter();

  const loginStatus = useSelector(state => state.userData.loginStatus);

  const [ flights , setFlights ] = useState({});
  const [ bookingType , setBookingType ] = useState('');
  
  useEffect(()=> {
    if(router.query.data == null || router.query.data == 'undefined' ) {
      setFlights(JSON.parse(localStorage.getItem('flights')));
      setBookingType(localStorage.getItem('booking_type'));
    } else {
      setFlights(JSON.parse(router.query.data));
      setBookingType(router.query.booking_type);
    }
    if(!loginStatus) {
      router.push('/');
    }
  },[loginStatus])

  return (
    flights !== 'undefined' &&
    <FlightsLayout>
      <FlightsPage flights={flights !== {} ? flights : "null"} bookingType={bookingType}/>
    </FlightsLayout>
  )
}

export default Flights