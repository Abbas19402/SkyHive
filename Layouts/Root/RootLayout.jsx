import Header from '@/components/Header/Header'
import React from 'react'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from '@/styles/scrollbar.module.css'

const RootLayout = ({ children }) => {
  return (
    <div className={`flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto scroll-smooth ${Styles.noScrollbar}`}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="sticky top-0 left-0 z-10">
          <Header/>
      </div>
      <div className='w-full h-fit mt-[12vh] z-0'>
          {children}
      </div>
      <div className="relative bottom-0">
          <Footer />
      </div>
    </div>
  )
}

export default RootLayout