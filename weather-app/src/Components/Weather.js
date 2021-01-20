import React, { useState, useEffect } from "react";
import '../Weather.css';



const Weather = ({ data, setData, weatherData }) => {
  return (
      <div className="main">
        <h1>Weather</h1>

        {weatherData && 
        (
          <div className="city">

            <h2 className="city-name">
              <span>{weatherData.name}, {weatherData.sys.country}</span>
            </h2>
                    
            <div className="city-temp">
              {Math.round(weatherData.main.temp)}
              <sup>&deg;F</sup>
            </div>

            <div className="icon">
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
              <p>{weatherData.weather[0].description}</p>
            </div>

            </div>

)
}
                      
      </div>
      
    );
}

export default Weather;
//extracts information 



// {weatherData && (
//   <div className="city"
//   <h2 className="city">
//     <span>{weatherData.name}, {weatherData.sys.country}</span>
//   </h2>

// <div className="city-temp">
//   {Math.round(weatherData.main.temp)} 
//   <sup>&deg;F</sup>
// </div>

// <div className="city-icon">
// <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
// <p>{weatherData.weather[0].description}</p>
// </div>

// </div>

// )}

// </div>
// </>