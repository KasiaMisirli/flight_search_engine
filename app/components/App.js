import React from 'react'
import PasswordInput from './PasswordInput'
import Footer from './Footer.js'
import Search from './Search.js'
import Header from './Header.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
  return <div>
    <Header/>
    <h3 className="search-heading" >Departure flight</h3>
    <Search/>
    <h3 className="search-heading">Return flight</h3>
    <Search/>
    <Footer/>
  </div>
  }
}