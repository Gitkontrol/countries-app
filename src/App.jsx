import { Header } from "./Components/header";
import { Search } from "./Components/Search";
import Filter from "./Components/Filter";
import CountryCard from "./Components/countryCard";
import data from "./assets/Countries_app_project/data.json"
//import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Header />               
      <Search />
      <Filter />
      <div className="grid grid-col-1 gap-2">
        {data.map(country=> { 
          return(
            <CountryCard key={country.alpha2Code} countryData={country}  />
                    
          )})}
      </div>
      
      
       
    </div>
  );
}

export default App;
