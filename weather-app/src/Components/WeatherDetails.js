import React, { useState, useEffect } from "react";

const WeatherDetails = ({data, setData }) => {
  const [data, setData] = useState()

  let weatherDetailURL = `http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.state},${data.country}&appid=${process.env.REACT_APP_DETAILED}`

  useEffect(() => {

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
        <h1>Weather details</h1>
      </div>
    );
}

export default WeatherDetails;
//displays details of weather
