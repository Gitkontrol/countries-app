import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'

export const CountryDetails = ({ countryData })=> {
  return (
    
  <div>
    <Link to="/">
      <div className='flex align-middle' >
        <BsArrowLeft className='fill-black' />
        <p className='text-md'>Back</p>
      </div> 
    </Link>

    <Card horizontal imgSrc={ countryData.flags.png } imgAlt={ countryData.name.common }>
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
       
      </h5>
        <div className="dlex gap-10 pl-8 font-Nunito-sans text-gray-700 dark:text-gray-400">
            <div>
                <ul className='list-none'>
                <li> </li>
                <li>Popluation: {countryData.population}</li>
                <li>Region: {countryData.region}</li>
                <li>Sub Region: {countryData.subregion}</li>
                <li>Capital: {countryData.capital}</li>        
                </ul>
            </div>
            <div>
                <ul className='list-none'>
                    <li>Top Level Domain: {countryData.tld}</li>
                    <li>Currencies: {countryData.currencies}</li>
                    <li>Languages: {countryData.languages}</li>
                </ul>
            </div>
        </div>
    </Card>
  </div>
  )
}


