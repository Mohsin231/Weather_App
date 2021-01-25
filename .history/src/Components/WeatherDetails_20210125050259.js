import React from "react";
import '../WeatherDetails.css';

//displays details of weather
const WeatherDetails = ({data, setData, weatherDetails }) => {

  return (
    <div className="main">

      {weatherDetails && 
      (
        <div className="moreInfo">
          <h2>Feels Like: {weatherDetails.main.feels_like}<sup>&deg;F</sup></h2>
          <h2>Min: {weatherDetails.main.temp_min}<sup>&deg;F</sup> - Max: {weatherDetails.main.temp_max}<sup>&deg;F</sup></h2>
          <h2>Humidity: {weatherDetails.main.humidity}%</h2>
          <h2>Wind Speed: {weatherDetails.wind.speed} mph</h2>
          </div>

)
}
                    
    </div>
    
  );
}   

export default WeatherDetails;