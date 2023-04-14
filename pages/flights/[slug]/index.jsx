import Forms from '@/components/Forms';
import React from 'react'

const Booking = ({ slug , data , chosenClass }) => {
  return (
    <div className='px-20 py-10'>
      <Forms.booking.main data={data.flight} returnFlightData={data.returnFlight} slug={slug} chosenClass={chosenClass}/>
    </div>
  )
}

export default Booking

export async function getServerSideProps (ctx) {
  const res = await fetch(`http://localhost:5000/api/flights/${ctx.query.slug}`)
  let returnRes
  if(ctx.query.return !== null) {
    returnRes = await fetch(`http://localhost:5000/api/flights/${ctx.query.return}`)
  }
  const flightDetails = await res.json();
    return {
        props: {
            slug: ctx.query.slug,
            chosenClass: JSON.parse(ctx.query.chosenClass),
            chosenReturnClass: JSON.parse(ctx.query.chosenReturnClass),
            data: {
              flight: flightDetails,
              returnFlight: ctx.query.return !== null ? await returnRes.json() : null
            }
        }
    }
}