import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full h-[80px] Header-container pl-30  pr-30 flex items-center justify-between'>
        <div>
          <NavLink to='/'>
            <h1 className='text-2xl font-bold'>WorldAtlas</h1>
          </NavLink>
        </div>

        <ul className='flex items-center justify-end h-full gap-6'>
          <li className='active:text-violet-400 hover:text-gray-400'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='active:text-violet-400 hover:text-gray-400'>
            <NavLink to="/About">About</NavLink>
          </li>
          <li className='active:text-violet-400 hover:text-gray-400'>
            <NavLink to="/country">Country</NavLink>
          </li>
          <li className='hover:text-gray-400 active:text-violet-400 active:underline underline-1'>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

    </header>
  )
}

export default Header
