import React from "react";
import PropTypes from "prop-types"; 
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : ''} ${props.redmode === 'dark' ? 'navbar-dark bg-dark' : ''}`}>

    <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.titlex}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              
            {/* <a className="nav-link" href="/">
                {props.abouttext}
              </a> */}
              
              <Link className="nav-link" to="/about">
                {props.abouttext}
              </Link>
            </li>


          </ul>
          
          <div className = "d-flex">
              <div className="bg-primary rounded mx-2" onClick={() =>{props.togglemode('primary')}} style={{height:'30px',width:'30px', cursor: 'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() =>{props.togglemode('warning')}} style={{height:'30px',width:'30px', cursor: 'pointer'}}></div>
              <div className="bg-info rounded mx-2" onClick={() =>{props.togglemode('info')}} style={{height:'30px',width:'30px', cursor: 'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={() =>{props.togglemode('success')}} style={{height:'30px',width:'30px', cursor: 'pointer'}}></div>
          </div>
          
          
          <div className={`form-check form-switch text-${props.mode === 'light'? 'red':'light'}`}>
            <input className="form-check-input" onClick={() =>{props.togglemode('dark')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>


          <div className={`form-check form-switch text-${props.redmode === 'light'? 'red':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
          </div>

          <div className="navbar-logo-container">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </div>



        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { 
  titlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
  abouttext: PropTypes.string 
};
