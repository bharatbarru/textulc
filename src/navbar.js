//import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'
import React from 'react';
function Navbar(){
    return( 
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">Text opeartions</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active text-white" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/Student">about</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/Contact">contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      );

}
export default Navbar