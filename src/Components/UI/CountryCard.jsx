import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
const CountryCard = ({country}) => {
    const{flags,name,population,region,capital}=country;
  return (
    <li className='border  border-gray-600 rounded-2xl text-sm flex items-center flex-col justify-center p-2' >
        <div >
            <img width='100px' src={flags.svg} alt={flags.alt} />

            <div className='flex gap-1 items-start justify-center flex-col mt-1'> 
                <p>{name.common}</p>
                <p><span className='text-gray-400' >Population:</span>{population.toLocaleString()}</p>
                <p><span className='text-gray-400'>Region::</span>{region}</p>
                <p><span className='text-gray-400'>Capital</span>{capital[0]}</p>
               <NavLink to={`/country/${name.common}`}>
                 <button className='border border-gray-400 rounded-2xl p-1 pl-2 pr-2 flex items-center justify-center gap-2 text-gray-100'> Read More<FaLongArrowAltRight className='text-gray-400'/></button>
               </NavLink>
            </div>
        </div>

    </li>
  )
}

export default CountryCard
