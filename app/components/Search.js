import React from 'react'
import './Search.css'

//setting up the original state
export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flights: {
        origin: '',
        destination: '',
        day: null,
        month: null,
        year: null,
        price: null,
        currency: '',
        hour: null,
        minute: null
      }
    }
  }
//adding changing state functions
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value, //[e.target.name] es6,refer to computed property name
    })
  }
  //making the http request and getting the data back
  handleFlightSearch = (e) => {
    e.preventDefault()
    const url = `https://flight-api-mbynoyjqmf.now.sh/flights&origin=${this.state.origin}&destination=${this.state.destination}&year=${this.state.year}&month=${this.state.month}&day=${this.state.day}`
    fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        flights: res
      })
    })
  }

//rendering the form and the api response
  render() {
    const {flights} = this.state
    var cities = ["Please select", "Melbourne","Sydney","Darwin","Canberra","Newcastle","Perth","Brisbane","Adelaide","Gold Coast","Hobart"]
    return <div className="main-div">
      <form className="form-items">
        <div className="or-dest">
          Origin: <select name="origin" className="input-field origin-input" onChange={this.handleChange}>
          {cities.map(city=><option>{city}</option>)}
          </select>
          Destination: <select name="destination" className="input-field destination-input" onChange={this.handleChange}>
          {cities.map(city=><option>{city}</option>)}
          </select>
          <br/>
        </div>
        <div className="yr-mon-d">
          Year: <input type="number" placeholder="  Please select" className="input-field" name="quantity" min="2018" max="2018" name="year"onChange={this.handleChange}/>
          Month: <input type="number" placeholder="  Please select" className="input-field month-input" name="quantity" min="7" max="12" name="month"onChange={this.handleChange}/>
          Day: <input type="number" placeholder="  Please select" className="input-field" name="quantity" min="1" max="31" name="day" onChange={this.handleChange}/><br/>
        </div>
        <button type="submit" className="btn" onClick={this.handleFlightSearch}>Search flights</button>
      </form>
      {flights.destination && <div className="flight-details"><div className="box">Origin: {flights.origin}</div><div className="box" >Destination: {flights.destination}</div><div className="box">Date: {flights.day}.{flights.month}.{flights.year}</div><div className="box">Price: ${flights.price}</div><div className="box">Currency: {flights.currency}</div><div className="box">Time(24h): {flights.hour}:{flights.minute}</div></div>}
    </div>
  }
}

