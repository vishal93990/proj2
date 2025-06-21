import React from 'react'
import Footer from './UI/Footer'
import { Outlet } from 'react-router-dom'
import Header from './UI/Header'
const Applayout = () => {
  return (
    <div className='bg-black w-screen h-screen text-white overflow-x-hidden'>
      <Header/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default Applayout
