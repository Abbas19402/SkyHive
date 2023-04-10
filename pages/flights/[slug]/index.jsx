import Forms from '@/components/Forms';
import Icon from '@/components/Icons';
import React , { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Booking = ({ slug , data , chosenClass }) => {
  return (
    <div className='px-20 py-10'>
      <Forms.booking.main data={data} slug={slug} chosenClass={chosenClass}/>
    </div>
  )
}

export default Booking

export async function getServerSideProps (ctx) {
  const res = await fetch(`http://localhost:5000/api/flights/${ctx.query.slug}`)
  const flightDetails = await res.json();
    return {
        props: {
            slug: ctx.query.slug,
            chosenClass: JSON.parse(ctx.query.chosenClass),
            data: flightDetails
        }
    }
}