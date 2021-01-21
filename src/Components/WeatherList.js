import React, { useState, useEffect } from "react";


const WeatherList = () => {
  const [res, setRes] = useState()
  //define DOM variables

  useEffect(() => {
    fetch(weatherURL)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, [data])


    return (
      <div>
        {/* <h1>Bitcoin price in {match.params.currency}</h1>
        <div className="price">{price}</div> */}
      </div>
    );
}

export default WeatherList;
