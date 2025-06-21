import React from 'react'
import CountryData from '../API/CountryDataApi.json'
const Hero_section = () => {
  return (
    <ul className='grid grid-cols-3 gap-10 mt-10'>
        {
          CountryData.map((country)=>{
              return <li className='border rounded-2xl flex flex-col items-start justify-center text-sm p-4 gap-1' key={country.id}>
                  <h1 className='font-bold'>{country.countryName}</h1>
                  <p><span className='text-gray-400'>Capital</span>:{country.capitalName}</p>
                  <p><span className='text-gray-400'>Population:</span>{country.population}</p>
                  <p><span className='text-gray-400'>InterestingFact</span>{country.interestingFact}</p>
              </li>
          })
        }
      </ul>

  )
}

export default Hero_section
