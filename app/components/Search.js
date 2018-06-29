import React from 'react'
import './Search.css'


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
  handleDayChange = (e) => {
    this.setState({
      day: e.target.value
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

  render() {
    const {flights} = this.state
    console.log({flights})
    return <div className="main-div">
      <form className="form-items">
        <div className="or-dest">
          Origin: <select name="origin" className="input-field origin-input" onChange={this.handleOriginChange}>
            <option value="">Please select</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Sydney">Sydney</option>
            <option value="Darwin">Darwin</option>
            <option value="Canberra">Canberra</option>
            <option value="Newcastle">Newcastle</option>
            <option value="Perth">Perth</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Gold Coast">Gold Coast</option>
            <option value="Hobart">Hobart</option>
          </select>
          Destination: <select name="destination" className="input-field destination-input" onChange={this.handleDestinationChange}>
            <option value="">Please select</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Sydney">Sydney</option>
            <option value="Darwin">Darwin</option>
            <option value="Canberra">Canberra</option>
            <option value="Newcastle">Newcastle</option>
            <option value="Perth">Perth</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Gold Coast">Gold Coast</option>
            <option value="Hobart">Hobart</option>
          </select>
          <br/>
        </div>
        <div className="yr-mon-d">
          Year:<input type="number" placeholder="  Please select" className="input-field" name="quantity" min="2018" max="2018" name="year"onChange={this.handleYearChange}/>
          Month:<input type="number" placeholder="  Please select" className="input-field month-input" name="quantity" min="7" max="12" name="month"onChange={this.handleMonthChange}/>
          Day:<input type="number" placeholder="  Please select" className="input-field" name="quantity" min="1" max="31" name="day" onChange={this.handleDayChange}/><br/>
        </div>
        <button type="submit" className="btn" onClick={this.handleFlightSearch}>Search flights</button>
      </form>
      {flights.destination && <div className="flight-details"><div className="box">Origin: {flights.origin}</div><div className="box" >Destination: {flights.destination}</div><div className="box">Date: {flights.day}.{flights.month}.{flights.year}</div><div className="box">Price: ${flights.price}</div><div className="box">Currency: {flights.currency}</div><div className="box">Time(24h): {flights.hour}:{flights.minute}</div></div>}
    </div>
  }
}

