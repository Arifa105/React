import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function () {
    let[weatherInfo, setWeatherInfo] =useState({
        city: "Delhi",
        feelsLike: 40.16,
        humidity: 11,
        temp: 42.84,
        tempMax: 43.05,
        tempMin: 42.84,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App By Arifa</h2>
      <SearchBox updateInfo ={updateInfo}/>
      <br/>
      <InfoBox info = {weatherInfo}/>
    </div>
  );
}
