import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);

    //const API_URL ="http://api.openweathermap.org/geo/1.0/direct";
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let HOT_URL=
    "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671658221576-8d9a4b04bd8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const API_KEY ="4e9a674401b0f9a4107a083e8cdef27e";

    let getWeatherInfo = async() =>{
      try{
        // http://api.openweathermap.org/geo/1.0/direct?q={cityname}&appid={API key}
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);

       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;

      }
      catch(error){
       throw err;
      }
       
    };
  
  let handleChnage = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event)=>{
    try{
      event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo =await getWeatherInfo();
    updateInfo(newInfo);
   }
   catch(err) {
    setError(true);

   }
    
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChnage}
        />
        <br /> <br />
        <Button variant="contained" type="submit" >
          Search
        </Button>
        {error && <p style={{color:"red"}}>No Such Place Exist!</p>}
      </form>
    </div>
  );
}
