import Forms from '@/components/Forms';
import React from 'react'

const Booking = ({  data , chosenClass , chosenReturnClass }) => {
  return (
    <div className='px-20 py-10'>
      <Forms.booking.main 
        data={data.flight} 
        returnFlightData={data.returnFlight} 
        chosenClass={chosenClass} 
        chosenReturnClass={chosenReturnClass}
      />
    </div>
  )
}

export default Booking

export async function getServerSideProps (ctx) {
  const res = await fetch(`http://localhost:5000/api/flights/${ctx.query.slug}`)
  let returnRes
  if(ctx.query.return !== 'null') {
    console.log("In return Section");
    returnRes = await fetch(`http://localhost:5000/api/flights/${ctx.query.return}`)
  }
  const flightDetails = await res.json();
    return {
        props: {
            slug: ctx.query.slug,
            chosenClass: JSON.parse(ctx.query.chosenClass),
            chosenReturnClass: ctx.query.chosenReturnClass == 'null' ? null : JSON.parse(ctx.query.chosenReturnClass),
            data: {
              flight: flightDetails,
              returnFlight: ctx.query.return !== 'null' ? await returnRes.json() : null
            }
        }
    }
}