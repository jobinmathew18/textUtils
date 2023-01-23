import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//props is basically used for passing and accepting the value.
export default function Navbar(props) {     
  return (
    // we will use {` `} below because we are using javascript in it. And we know any javascript we write in jsx will be written inside { }.
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>          
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            {/* Below, <Link> is used in place of <a> and "to" is used in place of "href". If you use <a> then page will reload but in <Link> the page will not reload */}
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch m-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}> 
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
  

//setting up the data type for our prop. Basically we are just adding a check so that if we enter number instead of string, then the console will show error.
Navbar.propTypes = {
    title: PropTypes.string.isRequired,                 //isRequired is says that "it is mandatory to have value for title"                  
    aboutText: PropTypes.string.isRequired
 }


 //if nothing is provided in pops value(in app.js) then this default value will execute.
 Navbar.defaultProps = {
    title: "default title",
    aboutText: "default about"
 }