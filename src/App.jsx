import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import Filter from "./Components/Filter";
import { CountryCard } from "./Components/countryCard"; 
import { ThreeDots } from "react-loader-spinner"
import { MdError } from "react-icons/md"
import axios from "axios"
//import { CountryDetails } from "./Components/countryDetails";
//import { Route, Routes } from "react-router-dom";
//import "./App.css";



function App() {

  
        
 
//set rest api data in state
const [ restData, setRestData ]= useState([])

//set loading in state for retrieving api data 
const [ nowLoading, setNowLoading ]= useState(false)

//set error in state against api failure
const [ anError, setAnError ]= useState(false)

//set query in state for search form
const [query, setQuery]= useState('')

//set region in state for filter form
const [region, setRegion]= useState('Filter by Region')





useEffect(()=> {               
setNowLoading(true)
axios.get('https://restcountries.com/v3.1/all')
.then(response=>{
  let data= response.data
  setRestData(data)
  setNowLoading(false)
  console.log(data)
})
.catch(error =>{
  setAnError(true)
  setNowLoading(false)
  console.log(err)
})
}, [])


  return (    
      
    <div className="flex flex-col dark:bg-[#202C36] dark:h-full">
      <div className="">
        <Header />
      </div>      
       {/* <Routes>
        <Route exact path="/" element={<CountryCard />} />
        <Route exact path="/countrycard/countrydetails" element={<countryDetails />} />
      </Routes>  */}
      <div className="lg:flex lg:justify-between lg:px-14 lg:pt-3">
        <div className="mt-6 mb-9 lg:mt-9 lg:ml-4">
          <Search query={query} setQuery={setQuery} />
        </div>
        <div className="lg:mt-10">
          <Filter region={region} setRegion={setRegion} /> 
        </div>
      </div>
            
               

        <div className="grid grid-col-1 gap-10 mt-8 mx-auto lg:mt-1 lg:grid-cols-4 lg:gap-y-16 lg:gap-x-20">

          {
            nowLoading && <ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=" items-center align-center"
                                visible={true}
                                />
          }

          {
            anError && <div className="flex flex-col items-center">
                          <MdError className="text-red-600 text-2xl"/>
                          <h4 className="text-sm  text-slate-500 font-normal font-Nunito-sans">
                            This page appears to be broken...
                          </h4>
                       </div>
          }
          {
            restData.filter((file)=>{
              return query.toLowerCase() ==='' && region === 'Filter by Region'?file:file.name.common.toLocaleLowerCase().includes(query) && file.region.includes(region)                
              }).map((country)=> (
              <CountryCard key={country.flag} countryData={country} />             
              ) 
            )
          }    
           
        </div>      
    </div>

  )
}

export default App;
