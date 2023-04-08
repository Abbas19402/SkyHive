import axios from 'axios'
import React from 'react'

const Booking = ({ slug , data }) => {
  console.log(data);
  return (
    <div>{slug}</div>
  )
}

export default Booking

export async function getServerSideProps (ctx) {
  const res = await fetch(`http://localhost:5000/api/flights/${ctx.query.slug}`)
  const flightDetails = await res.json();
  console.log(flightDetails);
    return {
        props: {
            slug: ctx.query.slug,
            data: flightDetails
        }
    }
}