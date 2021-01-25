import React, {useEffect} from 'react';
import WeatherDetails from './WeatherDetails';
import '../SearchForm.css';
//search


  // Destructure props object
  function SearchForm({handleChange, data, setData, setWeatherData, setWeatherDetails }) {


    const getData = () => {

      let url = `http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.state},${data.country}&units=imperial&appid=${process.env.REACT_APP_ONEDAY}`

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setWeatherData(res);
        setWeatherDetails(res)
      })
      .catch(err => {
        console.error(err);
      });}

  function handleSubmit(event) {
    event.preventDefault();
    getData(); 
  }

    return (
      <form onSubmit={handleSubmit} className="searchForm">
        <input 
          className="search"
          id="city"
          placeholder="ex: brooklyn"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={data.city}
        />
        <input
        className="search"
          id="state"
          placeholder="ex: new york"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={data.state}
        />
        <input
        className="search"
          id="country"
          placeholder="ex: us"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={data.country}
        />
        <button>Search</button>
      </form>
    );
  }
  export default SearchForm;