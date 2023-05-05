import Head from 'next/head'
import Landing from '../Landing'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { deleteUser } from '@/Redux/Auth/AT'

export default function Home(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData.user);
  const loginStatus = useSelector(state => state.userData.loginStatus);

  const VerifyToken = async() => {
    try {
      const response = await axios.request({
        method: 'POST',
        url: 'https://skyhive-admin.vercel.app/api/auth/verify_access',
        data: {
          access_token: `${JSON.parse(user.access_token)}`
        }
      })
    } catch(err) {
      console.log(err);
      if(err.response.status == 401) {
        toast.error('Session Expired!! Please Login again.')
        dispatch(deleteUser())
      }
    }
  }

  useEffect(()=> {
    if(loginStatus) {
      VerifyToken();
    }
  },[])
  return (
    <>
      <Head>
        <title>SkyHive</title>
        <meta name="description" content="Generated by abbas ali dalal. It is a simple website which helps user to book flights effortlessly and quicky..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}