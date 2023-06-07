import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/a">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to='/about'>
              About
            </Link>
            <Link className="nav-item nav-link" to='/form'>
              Form
            </Link>
            <a className="nav-item nav-link" href="/contactus">
              Contact Us
             </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
