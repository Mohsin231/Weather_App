import React, { useState, useEffect } from "react";
import './App.css';


let weatherDetailURL = `http://api.openweathermap.org/data/2.5/forecast?q=brooklyn,ny,us&appid=c0e729c8b49ab07ba3d7d006687d5c89`

const WeatherDetails = () => {
  const [data, setData] = useState()

  useEffect(() => {
    // define DOM variables 

    fetch(weatherDetailURL)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setData(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [])


    return (
      <div>
        {data}
      </div>
    );
}

export default WeatherDetails;
