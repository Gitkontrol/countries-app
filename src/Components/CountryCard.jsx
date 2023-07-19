import React from 'react';
import { Card } from 'flowbite-react';

const CountryCard = ({countryData}) => {
  return (
    <Card imgSrc={countryData.flags.png} imgAlt= {countryData.name}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <p>
        {countryData.name}
      </p>
    </h5>
    <div className="flex flex-col py-2">  
        <p>Poulation:{countryData.population}</p> 
        <p>Region:{countryData.region}</p>   
        <p>Capital:{countryData.capital}</p>          
    </div>    
  </Card>
  )
}

export default CountryCard



