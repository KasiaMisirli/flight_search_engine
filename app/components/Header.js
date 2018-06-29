import React from 'react'
import './Header.css'
import ap from './ap.jpg'

const containerStyle = {
  fontSize: '40px'
}

const Header = () => {
  return (
    <div>
      <div className="top-flyaway-logo">
        <h1 className="flyaway">Flyaway</h1><img className="img" src={ap} alt="logo"/><h3 className="australia">in Australia</h3>
      </div>
     <h2 className="add-title">Please enter details below and we will search for the most suitable flight for you!</h2>
    </div>
  )
}

export default Header