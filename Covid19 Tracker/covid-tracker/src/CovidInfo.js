import React, { useState } from 'react'

function CovidInfo(props){

    const [covidData, setCovidData] = useState([])

    const InfoData = () => {
        //console.log(props.country);

        let items = []

        const response = fetch("https://api.covid19api.com/total/country/" + props.country)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    const index = res.length - 1
                    setCovidData(res[index])
                    //console.log(res[index]);
                })
    }


    return(
        <div className="covid-info">
            <button onClick={InfoData}>Take Data</button>
            <h1>Total Cases: {covidData.Confirmed}</h1>
            <h1>Total Active Cases: {covidData.Active}</h1>
            <h1>Total Deaths: {covidData.Deaths}</h1>
            <h1>Total Recovered: {covidData.Recovered}</h1>
        </div>
    )
}

export default CovidInfo