import React, { useState } from 'react'
import Weather from './Components/Weather'
// import WeatherDetails from './Components/WeatherDetails'
import SearchForm from './Components/SearchForm'
import { Route } from 'react-router-dom';
import './App.css';


function App() {

  const [data, setData] = useState({
    city:"",
    state:"",
    country:""
  })

  function handleChange(event) {
      setData(event.target.value);
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      Weather();
      
    }

  return (
    <>
    <div className="App">

  
      <Route path="/" exact component={() => <Weather data={data} setData={setData}/>} />
    
      <SearchForm 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      data={data}
      
      
      />
      

      
    </div>
    </>
   
  );
}

export default App;
{/* <Route path="/details/" component={WeatherDetails} /> */}

