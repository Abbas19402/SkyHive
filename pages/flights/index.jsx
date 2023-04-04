import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import FlightsLayout from '@/Layouts/Flight';
import FlightsPage from '@/pageComponents/Flights';

const Flights = ({ flights }) => {
  const router = useRouter();
  useEffect(()=> {
    console.log(JSON.parse(router.query.data));
  },[])
  return (
    <FlightsLayout>
      <FlightsPage flights={flights}/>
    </FlightsLayout>
  )
}

export default Flights

export async function getServerSideProps(ctx) {
  return {
    props: {
      flights: JSON.parse(ctx.query.data) 
    }, // will be passed to the page component as props
  }
}