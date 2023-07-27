import React from 'react'
//import { Link } from 'react-router-dom';

export const CountryCard = ({countryData}) => {
  return (
   
        <div className="w-[264px] h-[336px] font-Nunito-sans bg-white border border-gray-200 rounded-lg lg:rounded-md shadow dark:text-white dark:bg-gray-800 dark:border-gray-700">

              
            <img src= {countryData.flags.png} alt= {countryData.name.common} className='w-[264px] h-[160px] lg:rounded-t-md hover:cursor-pointer font-Nunito-sans'/>
                           
                                   
            <div className="p-6">
                <div className='pb-2'>
                    <p className="mb-1 text-lg font-extrabold font-Nunito-sans">
                       {countryData.name.common}
                    </p>
                </div>    
                <div className="flex flex-col gap-1 mb-12 text-sm font-Nunito-sans">
                    <p className='font-semibold'>Poulation: <a className='font-light'>{countryData.population}</a></p> 
                    <p className='font-semibold'>Region: <a className='font-light'>{countryData.region}</a></p>   
                    <p className='font-semibold'>Capital: <a className='font-light'>{countryData.capital}</a></p>
                </div>
            </div>
        </div>
    

      )
    };






