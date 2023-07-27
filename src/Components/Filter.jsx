import React from 'react'

const Filter = ({ region, setRegion }) => {
  return (
    <div className='flex px-4'>               
        <select 
        name="Regions" 
        id="Regions"
        onChange={(e) =>setRegion(e.target.value)} 
        className='flex appearance-none border-none justify-around rounded-md shadow-sm dark:bg-[#2B3844] dark:text-white w-52 lg:w-[200px] h-12 text-xs font-Nunito-sans align-middle pl-5 pr-7 gap-2 py-4'>
            <option value={region}>Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter