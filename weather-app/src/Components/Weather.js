import React, { useState, useEffect } from "react";



const Weather = ({ data, setData }) => {


  let url = `http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.state},${data.country}&appid=${process.env.REACT_APP_ONEDAY}`

  useEffect((url) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, [])


    return (
      <div>
        <h1>Weather</h1>
      </div>
    );
}

export default Weather;
//extracts information 
