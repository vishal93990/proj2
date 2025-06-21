import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
      <div className='Header-container mt-10'>
        <div className='grid grid-cols-3 pb-5 pt-5'>
              <div className='flex items-center justify-center gap-3'>
                <FaLocationDot className='text-2xl text-blue-600'/>
                <div><p>find Us</p>
                <p>Pune,Maharashtra</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <IoCall className='text-2xl text-blue-600'/>
                <div><p>find Us</p>
                <p>Pune,Maharashtra</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <MdMarkEmailRead className='text-2xl text-blue-600'/>
                <div><p>find Us</p>
                <p>Pune,Maharashtra</p>
                </div>
              </div>
        </div>
      </div>
  )
}

export default Footer
