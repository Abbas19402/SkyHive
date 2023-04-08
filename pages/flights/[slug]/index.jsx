import React from 'react'

const Booking = ({ slug }) => {
  return (
    <div>{slug}</div>
  )
}

export default Booking

export async function getServerSideProps (ctx) {
    return {
        props: {
            slug: ctx.query.slug
        }
    }
}