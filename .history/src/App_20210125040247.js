import React, { useState } from 'react'
import Weather from './Components/Weather'
import WeatherDetails from './Components/WeatherDetails'
import SearchForm from './Components/SearchForm'
import { Route } from 'react-router-dom';
import './App.css';


function App() {

  const [data, setData] = useState({
    city:"",
    state:"",
    country:""
  })

  const [weatherData, setWeatherData] = useState(null);

  const [weatherDetails, setWeatherDetails] = useState(null);



  function handleChange(event) {
    setData({...data, [event.target.id]:event.target.value})
    console.log(data)
    
    }
    
    

  return (
    <>
  
    <div className="App">
      <SearchForm 
      handleChange={handleChange}
      data={data}
      setData={setData}
      setWeatherData={setWeatherData}
      setWeatherDetails={setWeatherDetails}
      />

<Route path="/" exact component={() => <Weather data={data} setData={setData} weatherData={weatherData} />} />
<Route path="/" exact component={() => <WeatherDetails data={data} setData={setData} weatherDetails={weatherDetails} />} />

      

      
    </div>
    </>
   
  );
}

export default App;


