import Table from '@/components/Table'
import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import CheckoutPage from '@/pageComponents/Checkout/Pay';
import { useSelector } from 'react-redux';

const Pay = () => {
  const ticket = {
    outbound: useSelector(state => state.ticket.outbound),
    inbound: useSelector(state => state.ticket.inbound),
  }

  return (
    <CheckoutPage ticket={ticket}/>
  )
}

export default Pay