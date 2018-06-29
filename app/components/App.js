import React from 'react'
import PasswordInput from './PasswordInput'
//import Footer from './Footer.js'
//import Search from './Search.js'

export default class App extends React.Component {

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

  handleOriginChange = (e) => {
    this.setState({
      origin: e.target.value,
    })
  }

  handleDestinationChange = (e) => {
    this.setState({
      destination: e.target.value
    })
  }
  handleMonthChange = (e) => {
    this.setState({
      month: e.target.value
    })
  }
  handleYearChange = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  
  handleFlightSearch = (e) => {
    e.preventDefault()
    const url = `https://flight-api-kaknwdgqdc.now.sh/flights&origin=${this.state.origin}&destination=${this.state.destination}&year=${this.state.year}&month=${this.state.month}`
    fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        flights: res[0]
      })
    })
  }

  render() {
    const {flights} = this.state
    console.log({flights})
    return <div className="main-div">
      <h1 className="title">Flight Search Engine</h1>
      <h2 className="add-title">Please ented details below and we will search for the most suitable flight for you!</h2>
      <form className="form-items">
        <div className="or-dest">
          Origin:<input className="input-field" name="origin" onChange={this.handleOriginChange}/>
          Destination:<input className="input-field" name="destination"onChange={this.handleDestinationChange}/><br/></div>
        <div className="yr-mon-d">
          Day:<input type="number" className="input-field" name="quantity" min="1" max="31" name="day"/>
          Month:<input type="number" className="input-field" name="quantity" min="1" max="12" name="month"onChange={this.handleMonthChange}/>
          Year:<input type="number" className="input-field" name="quantity" min="2018" max="2019" name="year"onChange={this.handleYearChange}/><br/>
        </div>
        <button className="btn" onClick={this.handleFlightSearch}>Search flights</button>
      </form>
    {flights.destination && <div className="flight-details"><span className="box">Origin: {flights.origin}</span><span className="box" >Destination: {flights.destination}</span><span className="box">Date:{flights.day}.{flights.month}.{flights.year}</span><span className="box">Price: {flights.price}</span><span className="box">Currency: {flights.currency}</span><span className="box">Time:{flights.hour}:{flights.minute}</span></div>}
    </div>
  }
}
