import React from 'react'
import { GoSearch } from 'react-icons/go'

export const Search = () => {
  return (
    <div className='relative mx-auto'>
      <GoSearch className='absolute left-6 bottom-4 align-center text-gray-400' />         
      <input className='placeholder:text-xs placeholder:pl-4 placeholder:font-sans rounded-md shadow-sm bg-[#aefa] pb-1 pr-28 pl-12 w-max h-12 items-center' placeholder="Search for a country..." type="text"/>       
    </div>
  )
}

