import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import FlightsLayout from '@/Layouts/Flight';
import FlightsPage from '@/pageComponents/Flights';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '@/Redux/Auth/AT';

const Flights = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginStatus = useSelector(state => state.userData.loginStatus);

  const [ flights , setFlights ] = useState({});
  
  useEffect(()=> {
    if(router.query.data == null || router.query.data == 'undefined' ) {
      setFlights(JSON.parse(localStorage.getItem('flights')));
    } else {
      setFlights(JSON.parse(router.query.data));
    }
    if(!loginStatus) {
      router.push('/');
    }
  },[loginStatus])

  return (
    flights !== 'undefined' &&
    <FlightsLayout>
      <FlightsPage flights={flights !== {} ? flights : "null"}/>
    </FlightsLayout>
  )
}

export default Flights