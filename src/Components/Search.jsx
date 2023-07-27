import React from 'react'
import { GoSearch } from 'react-icons/go'

export const Search = ({query, setQuery}) => {
  return (
    <div className='flex relative mx-auto'>
      <GoSearch className='absolute left-6 bottom-4 align-middle text-gray-400 text-lg dark:text-white' />         
      <input placeholder="Search for a country..."
       type="text"
       value={query} 
       onChange={(e) =>setQuery(e.target.value)}        
       className='flex appearance-none border-none placeholder:text-xs dark:bg-[#2B3844] dark:placeholder:text-white
       placeholder:pl-14 font-Nunito-sans rounded-md shadow-sm bg-[#ffffff] w-[342px] lg:w-[480px] mx-auto h-12 pb-3'/>  
          
    </div>
  )
}

