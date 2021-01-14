import React from 'react'
import Weather from './Components/Weather'
import WeatherDetails from './Components/WeatherDetails'
import WeatherList from './Components/WeatherList'
import './App.css';

function App() {
  const searchOptions = {
    key: process.env.FIVEDAY,
    key2: process.env.DETAILED,
    city: 25,
    state: 'G',
    country: "",
    count: 5,
    api: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${state},${country}&cnt=${count}&appid=`,
    api2: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=`
  };

  return (
    
    <div className="App">
  
      <Weather/>
      <WeatherDetails/>
      <WeatherList/>
      
    </div>
   
  );
}

export default App;

