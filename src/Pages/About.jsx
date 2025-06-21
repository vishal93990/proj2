import React from 'react'
import CountryData from '../API/CountryDataApi.json'
const About = () => {
  return (
    <section className='pl-30 pr-30 '>
      <h1 className='text-2xl font-bold text-center mt-10'>Here are the Interesting Facts
        <br /> we're proud of</h1>


      <ul className='grid grid-cols-3 gap-10 mt-10'>
        {
          CountryData.map((country)=>{
              return <li className='border-1 rounded-2xl flex flex-col items-start justify-center text-sm p-4 gap-1 bg-green-box' key={country.id}>
                  <h1 className='font-bold'>{country.countryName}</h1>
                  <p><span className='text-gray-400'>Capital</span>:{country.capitalName}</p>
                  <p><span className='text-gray-400'>Population:</span>{country.population}</p>
                  <p><span className='text-gray-400'>InterestingFact</span>{country.interestingFact}</p>
              </li>
          })
        }
      </ul>


      
    </section>
  )
}

export default About
