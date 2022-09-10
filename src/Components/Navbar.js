import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {


  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container my-2">
        <Link to="/" className="navbar-brand text-dark font-weight-bold">
          Shashidhar Sunnapu
        </Link>
        <Link to="/contact" className="ml-auto">
          <button className="btn btn-outline-info">
            Contant Me
          </button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <i className="fas fa-bars text-dark"></i>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link text-dark h6 mx-3">
              Home
            </Link>
            <a className="nav-item nav-link text-dark h6 mx-3" href="Resuma.pdf" download="Resuma.pdf">
              Resuma
            </a>
            {/* <Link to="/resume" className="nav-item nav-link text-dark h6 mx-3">
              Resuma
            </Link> */}
            {/* <Link to="/project/add" className="nav-item nav-link text-dark h6 mx-3">
              Add-Project
            </Link> */}

          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;