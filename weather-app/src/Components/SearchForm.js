import React from 'react';

  // Destructure props object
  function SearchForm({ handleSubmit, handleChange, data }) {
    return (
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          className="city"
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={data.city}
        />
        <input
          className="state"
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={data.state}
        />
        <input
          className="country"
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={data.country}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  export default SearchForm;