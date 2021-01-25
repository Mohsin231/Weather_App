import React from "react";
import '../WeatherDetails.css';

//displays details of weather
const WeatherDetails = ({data, setData, weatherDetails }) => {

  return (
    <div className="main">
      <h1>Weather Details</h1>

      {weatherDetails && 
      (
        <div className="moreInfo">
          <h2>Feels Like: {weatherDetails.main.feels_like}</h2>
          <h2>Min: {weatherDetails.main.temp_min}<sup>&deg;F</sup> - Max: {weatherDetails.main.temp_max}<sup>&deg;F</sup></h2>
          <h2>Humidity: {weatherDetails.main.humidity}%</h2>
          <h2>Wind Speed: {weatherDetails.wind.speed}</h2>
          </div>

)
}
                    
    </div>
    
  );
}   

export default WeatherDetails;
