import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">New Breed Athlete</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">Dashboard <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/clients" className="nav-link">Clients</Link>
        </li>
        <li className="nav-item">
          <Link to="/programs" className="nav-link">Programs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Messages</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Settings
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
