import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default Navbar

function Navbar(props)
{
  return (
      
        <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor:props.color }} >

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.heading}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch mx-2 text-${props.mode === 'dark'?'light':'dark'}`}>
              
         <input className="form-check-input " onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
              
            </div>
    </div>
  </div>
      </nav>
        </div>
    )
}

Navbar.prototype =
{
    heading: PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = 
{
    heading : "from default heading",
    about : "from default about"
}

  
