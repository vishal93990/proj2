import React from 'react'

const SearchFilter = ({filter,setSearch,setFilter,search}) => {

    const handleInputChange=(e)=>{
        setSearch(e.target.value);
    }
    const handleSelectChange=(e)=>{
        setFilter(e.target.value);
    }
  return (
    <section className='mt-10 w-full flex items-center justify-between'> 
        <input className='text-sm p-2 border-gray-400 border rounded-2xl ' type="text" placeholder='Search'  value={search} onChange={handleInputChange}/>
        <div>
            <select className='text-gray-100 bg-transparent rounded-2xl border-gray-400 border pl-2 pr-2 p-1 text-sm' value={filter} onChange={handleSelectChange}>
                <option className='text-black bg-gray-400' value="All">All</option>
                <option className='text-black bg-gray-400' value="Africa">Africa</option>
                <option className='text-black bg-gray-400'  value="Americas">Americas</option>
                <option className='text-black bg-gray-400' value="Asia">Asia</option>
                <option className='text-black bg-gray-400' value="Europe">Europe</option>
                <option className='text-black bg-gray-400' value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default SearchFilter
