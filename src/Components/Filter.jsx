import React from 'react'

const Filter = () => {
  return (
    <div className='px-4 '>        
        <select name="Regions" id="Regions" className='flex justify-around rounded-md shadow-sm bg-left w-52 h-14 text-xs align-middle pl-5 gap-2 py-4'>
            <option>Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter