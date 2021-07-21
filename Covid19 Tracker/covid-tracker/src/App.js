import React, { useState } from 'react';
import "./App.css"
import CountriesDropDown from './CountriesDropDown';
import CovidInfo from './CovidInfo';  

function App() {

  const [country, setCountry] = useState("")

  const countrySelected = (childData) => {
    //console.log(childData);
    setCountry(childData)
  }

    return (
        <div className="App">
            <h1>
                Covid19 Tracker App in react
            </h1>
            <CountriesDropDown selectedCountry={countrySelected}></CountriesDropDown>
            <CovidInfo country={country}></CovidInfo>
        </div>
    )
}

export default App;