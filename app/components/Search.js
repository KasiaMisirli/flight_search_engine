import React from 'react'
import './Search.css'


var Search = () => {
  return <div>
    <h1>Searching</h1>
    <form>
      <input type="origin">Origin: </input>
      <input type="destination">Destination: </input>
      <input type="day">Day: </input>
      <input type="month">Month: </input>
      <input type="year">Year: </input>
      <button onClick={this.handleFlightSearch}>Search</button>
    </form>
  </div>
}

export default Search