import Forms from '@/components/Forms';
import React from 'react'
import { useSelector } from 'react-redux';

const Booking = ({  data  }) => {
  const airlineClass = {
    outbound: useSelector(state => state.airlineClass.outboundClass),
    inbound: useSelector(state => state.airlineClass.inboundClass),
  }
  console.log(data);
  return (
    <div className='md:px-20 px-5 py-10'>
      <Forms.booking.main 
        data={data.flight} 
        returnFlightData={data.returnFlight} 
        chosenClass={airlineClass.outbound} 
        chosenReturnClass={airlineClass.inbound}
      />
    </div>
  )
}

export default Booking

export async function getServerSideProps (ctx) {
  const res = await fetch(`https://skyhive-admin.vercel.app/api/flights/${ctx.query.slug}`)
  let returnRes
  if(ctx.query.return !== 'null') {
    returnRes = await fetch(`https://skyhive-admin.vercel.app/api/flights/${ctx.query.return}`)
  }
  const flightDetails = await res.json();
    return {
        props: {
            slug: ctx.query.slug,
            data: {
              flight: flightDetails,
              returnFlight: ctx.query.return !== 'null' ? await returnRes.json() : null
            }
        }
    }
}